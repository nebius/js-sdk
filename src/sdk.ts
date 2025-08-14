import type { ChannelCredentials, ClientOptions, Metadata, CallOptions, Interceptor } from '@grpc/grpc-js';
import { credentials } from '@grpc/grpc-js';
import { getSystemRootCAs, normalizeRootCAs } from './runtime/tls/system_certs';
import { type Resolver, Conventional, Chain, TemplateExpander } from './runtime/resolver';
import { domain as DEFAULT_DOMAIN } from './runtime/constants';
import { createAuthorizationInterceptor } from './runtime/authorization/interceptor';
import type { Provider as AuthorizationProvider } from './runtime/authorization/provider';
import type { RetryOptions, UnaryCall } from './runtime/request';
import { ProfileService as ProfileServiceClient } from './generated/nebius/iam/v1/profile_service.sdk';
import { GetProfileRequest, type GetProfileResponse } from './generated/nebius/iam/v1/profile_service';
// New imports for credential normalization
import type { Bearer as TokenBearer, Token as AccessToken } from './runtime/token';
import { StaticBearer } from './runtime/token/static';
import { FileBearer } from './runtime/token/file';
import { ServiceAccount as SA, type Reader as SAReader } from './runtime/service_account/service_account';
import { ServiceAccountBearer } from './runtime/token/service_account';
import { FederationAccountBearer } from './runtime/token/federation_account';
import { TokenProvider as TokenAuthProvider } from './runtime/authorization/token';

export interface SDKInterface {
  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string;
  getCredentials(serviceName: string): ChannelCredentials;
  getOptions(serviceName: string): Partial<ClientOptions> | undefined;
  // New: optional parent id to inject into requests
  parentId(): string | undefined;
}

// Optional config reader interface (if provided, can supply endpoint)
export interface ConfigReaderLike {
  endpoint(): string | undefined;
  parentId(): string | undefined;
  // If present, use it to auto-construct credentials similar to Python
  // eslint-disable-next-line @typescript-eslint/ban-types
  getCredentials?: Function;
}

// Rich credentials union similar to Python Channel
export type FederationCredentialsOptions = {
  type: 'federation';
  profileName: string;
  clientId: string;
  federationEndpoint: string;
  federationId: string;
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
};

export type ServiceAccountInit =
  | SA
  | SAReader
  | { serviceAccountId: string; publicKeyId: string; privateKeyPem: string };

export type CredentialsInit =
  | AuthorizationProvider
  | TokenBearer
  | SAReader
  | SA
  | ServiceAccountInit
  | AccessToken
  | { tokenFile: string }
  | string
  | FederationCredentialsOptions
  | null
  | undefined;

export interface SDKOptions {
  resolver?: Resolver;
  substitutions?: Record<string, string>;
  domain?: string;
  configReader?: ConfigReaderLike;
  parentId?: string; // optional parent id override
  authorizationProvider?: AuthorizationProvider; // deprecated when credentials is provided
  insecure?: boolean; // when true use plaintext connection
  clientOptions?: Partial<ClientOptions>; // custom grpc-js client options (channel args, etc.)
  interceptors?: Interceptor[]; // extra interceptors (e.g., idempotency, cleaners)
  // Python-like credentials acceptance and extra knobs
  credentials?: CredentialsInit;
  // TLS roots: if provided, overrides system roots; if omitted, system roots are used
  tlsRootCAs?: Buffer | string | string[];
  // If credentials are not provided, try to pull from configReader.getCredentials using these hints
  federationInvitationWriter?: (s: string) => void;
  federationInvitationNoBrowserOpen?: boolean;
  federationInvitationTimeoutMs?: number;
  // Per-service overrides (by gRPC service name)
  perService?: Record<string, {
    credentials?: ChannelCredentials;
    insecure?: boolean;
    clientOptions?: Partial<ClientOptions>;
    interceptors?: Interceptor[];
  }>;
}

export class SDK implements SDKInterface {
  private _resolver: Resolver;
  private _parentId: string | undefined;
  private _authorizationProvider?: AuthorizationProvider;
  private _creds: ChannelCredentials;
  private _clientOptions?: Partial<ClientOptions>;
  private _extraInterceptors: Interceptor[] = [];
  private _perService: Map<string, { credentials?: ChannelCredentials; insecure?: boolean; clientOptions?: Partial<ClientOptions>; interceptors?: Interceptor[] } > = new Map();
  private _systemOrCustomRoots?: Buffer | string | string[];

  constructor(options?: SDKOptions) {
    // Resolve domain
    let domain = options?.domain;
    if (!domain) {
      const fromCfg = options?.configReader?.endpoint();
      domain = fromCfg && fromCfg.trim() !== '' ? fromCfg : undefined;
    }
    if (!domain || domain.trim() === '') {
      domain = DEFAULT_DOMAIN;
    }

    const substitutionsFull: Record<string, string> = { '{domain}': domain };
    if (options?.substitutions) {
      for (const [k, v] of Object.entries(options.substitutions)) substitutionsFull[k] = v;
    }

    // Base resolver: Conventional
    let r: Resolver = new Conventional();
    // If a custom resolver is provided, chain it before the Conventional
    if (options?.resolver) {
      r = new Chain(options.resolver, r);
    }
    // Always apply substitutions
    this._resolver = new TemplateExpander(substitutionsFull, r);

    // Resolve parentId: prefer explicit option, else from configReader; empty strings are treated as undefined
    const fromOpt = options?.parentId?.trim();
    const fromConfig = options?.configReader?.parentId()?.trim();
    const pid = fromOpt && fromOpt !== '' ? fromOpt : fromConfig && fromConfig !== '' ? fromConfig : undefined;
    this._parentId = pid;

    // Transport security (default: secure with system roots). If tlsRootCAs is provided, use that instead.
    const custom = normalizeRootCAs(options?.tlsRootCAs);
    const roots = custom ?? getSystemRootCAs();
    this._systemOrCustomRoots = roots;
    if (options?.insecure) {
      this._creds = credentials.createInsecure();
    } else {
      this._creds = roots ? credentials.createSsl(roots) : credentials.createSsl();
    }

    // Additional options and interceptors
    this._clientOptions = options?.clientOptions;
    this._extraInterceptors = options?.interceptors ? [...options.interceptors] : [];

    // Per-service overrides
    if (options?.perService) {
      for (const [svc, cfg] of Object.entries(options.perService)) this._perService.set(svc, { ...cfg });
    }

    // Initialize authorization provider based on provided credentials or config
    this._initAuthorization(options);
  }

  private _initAuthorization(options?: SDKOptions) {
    if (!options) return;

    // Prefer credentials over explicit provider
    if (options.credentials != null) {
      const prov = this._normalizeCredentials(options.credentials);
      if (prov) this._authorizationProvider = prov;
      // If both provided, ignore explicit provider (closer to Python priority) and optionally warn
      if (options.authorizationProvider) {
        // eslint-disable-next-line no-console
        console.warn('[SDK] Both credentials and authorizationProvider provided; ignoring authorizationProvider in favor of credentials.');
      }
      return;
    }

    // Next: explicit provider (kept for backward compatibility)
    if (options.authorizationProvider) {
      this._authorizationProvider = options.authorizationProvider;
      return;
    }

    // Finally: pull from configReader if available
    const cr: any = options.configReader as any;
    const hasGet = cr && typeof cr.getCredentials === 'function';
    if (hasGet) {
      try {
        const cred = cr.getCredentials({
          writer: options.federationInvitationWriter,
          noBrowserOpen: !!options.federationInvitationNoBrowserOpen,
          timeoutMs: options.federationInvitationTimeoutMs,
          sdk: this,
        });
        const prov2 = this._normalizeCredentials(cred);
        if (prov2) this._authorizationProvider = prov2;
      } catch {
        // ignore config credential errors at SDK init time
      }
    }
  }

  private _normalizeCredentials(init: CredentialsInit): AuthorizationProvider | undefined {
    if (!init) return undefined;

    // Already a Provider
    if (this._isAuthProvider(init)) return init as AuthorizationProvider;

    // Bearer
    if (this._isBearer(init)) return new TokenAuthProvider(init as TokenBearer);

    // Token
    if (this._isAccessToken(init)) return new TokenAuthProvider(new StaticBearer((init as AccessToken).token));

    // token string
    if (typeof init === 'string') return new TokenAuthProvider(new StaticBearer(init));

    // token file
    if (this._isTokenFile(init)) return new TokenAuthProvider(new FileBearer((init as any).tokenFile));

    // Federation direct config
    if (this._isFederationInit(init)) {
      const f = init as FederationCredentialsOptions;
      return new TokenAuthProvider(
        new FederationAccountBearer(
          f.profileName,
          f.clientId,
          f.federationEndpoint,
          f.federationId,
          { writer: f.writer, noBrowserOpen: !!f.noBrowserOpen, timeoutMs: f.timeoutMs, ca: this._systemOrCustomRoots },
        ),
      );
    }

    // Service account (reader or concrete or raw params)
    if (this._isSAReader(init) || this._isSA(init) || this._isSAParams(init)) {
      const bearer = this._mkSABearer(init as any);
      return bearer ? new TokenAuthProvider(bearer) : undefined;
    }

    return undefined;
  }

  private _mkSABearer(sa: SA | SAReader | { serviceAccountId: string; publicKeyId: string; privateKeyPem: string }): ServiceAccountBearer | undefined {
    try {
      if (this._isSAReader(sa) || this._isSA(sa)) {
        return new ServiceAccountBearer(sa as any, { sdk: this });
      }
      if (this._isSAParams(sa)) {
        const p = sa as { serviceAccountId: string; publicKeyId: string; privateKeyPem: string };
        return new ServiceAccountBearer(p.serviceAccountId, {
          publicKeyId: p.publicKeyId,
          privateKeyPem: p.privateKeyPem,
          sdk: this,
        });
      }
      return undefined;
    } catch {
      return undefined;
    }
  }

  private _isAuthProvider(x: any): x is AuthorizationProvider {
    return x && typeof x === 'object' && typeof x.authenticator === 'function';
  }
  private _isBearer(x: any): x is TokenBearer {
    return x && typeof x === 'object' && typeof x.receiver === 'function';
  }
  private _isAccessToken(x: any): x is AccessToken {
    return x && typeof x === 'object' && typeof x.token === 'string' && typeof x.toString === 'function';
  }
  private _isTokenFile(x: any): x is { tokenFile: string } {
    return x && typeof x === 'object' && typeof x.tokenFile === 'string';
  }
  private _isFederationInit(x: any): x is FederationCredentialsOptions {
    return x && typeof x === 'object' && x.type === 'federation' && typeof x.clientId === 'string' && typeof x.federationEndpoint === 'string' && typeof x.federationId === 'string';
  }
  private _isSAReader(x: any): x is SAReader {
    return x && typeof x === 'object' && typeof x.read === 'function' && typeof x.getExchangeTokenRequest === 'function';
  }
  private _isSA(x: any): x is SA {
    return x instanceof SA;
  }
  private _isSAParams(x: any): x is { serviceAccountId: string; publicKeyId: string; privateKeyPem: string } {
    return x && typeof x === 'object' && typeof x.serviceAccountId === 'string' && typeof x.publicKeyId === 'string' && typeof x.privateKeyPem === 'string';
  }

  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string {
    return this._resolver.resolve(serviceName, apiServiceName);
  }

  // Expose TLS roots for non-gRPC HTTP calls (e.g., federation flows)
  getTlsRootCAs(): Buffer | string | string[] | undefined {
    return this._systemOrCustomRoots;
  }

  getCredentials(serviceName: string): ChannelCredentials {
    const svc = this._perService.get(serviceName);
    if (svc?.credentials) return svc.credentials;
    if (svc?.insecure != null) return svc.insecure ? credentials.createInsecure() : (Array.isArray(this._systemOrCustomRoots) || typeof this._systemOrCustomRoots === 'string' ? credentials.createSsl(normalizeRootCAs(this._systemOrCustomRoots) as Buffer) : (this._systemOrCustomRoots ? credentials.createSsl(this._systemOrCustomRoots) : credentials.createSsl()));
    return Array.isArray(this._systemOrCustomRoots) || typeof this._systemOrCustomRoots === 'string' ? credentials.createSsl(normalizeRootCAs(this._systemOrCustomRoots) as Buffer) : (this._systemOrCustomRoots ? credentials.createSsl(this._systemOrCustomRoots) : credentials.createSsl());
  }

  getOptions(serviceName: string): Partial<ClientOptions> | undefined {
    const svc = this._perService.get(serviceName);

    const authInt = this._authorizationProvider
      ? createAuthorizationInterceptor(this._authorizationProvider)
      : undefined;

    const combinedInts = [
      ...(this._extraInterceptors || []),
      ...((svc?.interceptors ?? []) as Interceptor[]),
      ...(authInt ? [authInt] : []),
    ];
    const hasInts = combinedInts.length > 0;

    return {
      ...(this._clientOptions || {}),
      ...(svc?.clientOptions || {}),
      ...(hasInts ? { interceptors: combinedInts } : {}),
    } as Partial<ClientOptions>;
  }

  parentId(): string | undefined {
    return this._parentId;
  }

  // Allow changing the authorization provider at runtime
  setAuthorizationProvider(provider: AuthorizationProvider | undefined): void {
    this._authorizationProvider = provider;
  }

  setTokenBearerAsAuthorization(bearer: import('./runtime/token').Bearer): void {
    this._authorizationProvider = new TokenAuthProvider(bearer);
  }

  // Allow adding extra interceptors (idempotency/cleaner analogs)
  addInterceptors(...ints: Interceptor[]): void {
    this._extraInterceptors.push(...ints);
  }

  // Replace client options (channel args, defaults)
  setClientOptions(opts: Partial<ClientOptions> | undefined): void {
    this._clientOptions = opts;
  }

  // Convenience method similar to Python SDK.whoami()
  whoami(metadata?: Metadata, options?: Partial<CallOptions> & RetryOptions): UnaryCall<GetProfileResponse> {
    const client = new ProfileServiceClient(this);
    const req = (GetProfileRequest as any).create ? (GetProfileRequest as any).create({}) : ({} as any);
    // Overloads in generated client handle metadata/options combinations
    if (metadata && options) return client.Get(req, metadata, options);
    if (metadata && !options) return client.Get(req, metadata);
    return client.Get(req);
  }

  // Gracefully close any attached authorization providers
  async close(graceMs?: number): Promise<void> {
    await this._authorizationProvider?.close?.(graceMs);
  }
}
