import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  Interceptor,
  Metadata,
  connectivityState,
  credentials,
} from '@grpc/grpc-js';

import {
  GetProfileRequest,
  type GetProfileResponse,
  ProfileService as ProfileServiceClient,
} from './generated/nebius/iam/v1/index';
import { VERSION } from './generated/version';
import { createAuthorizationInterceptor } from './runtime/authorization/interceptor';
import type { Provider as AuthorizationProvider } from './runtime/authorization/provider';
import { TokenProvider as TokenAuthProvider } from './runtime/authorization/token';
import type { ConfigReaderLike } from './runtime/cli_config_interfaces';
import { domain as DEFAULT_DOMAIN } from './runtime/constants';
import type { Request, RetryOptions } from './runtime/request';
import { Chain, Conventional, type Resolver, TemplateExpander } from './runtime/resolver';
import {
  ServiceAccount as SA,
  type Reader as SAReader,
} from './runtime/service_account/service_account';
import { getSystemRootCAs, normalizeRootCAs } from './runtime/tls/system_certs';
import type { Token as AccessToken, Bearer as TokenBearer } from './runtime/token';
import { FederationAccountBearer } from './runtime/token/federation_account';
import { FileBearer } from './runtime/token/file';
import { ServiceAccountBearer } from './runtime/token/service_account';
import { StaticBearer } from './runtime/token/static';

export interface SDKInterface {
  getClientByAddress(address: string): Client;
  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string;
  parentId(): string | undefined;
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
  userAgentPrefix?: string; // Optional user agent prefix for requests
  // Per-address overrides (by fully resolved address like "compute.localhost:1234")
  perAddress?: Record<
    string,
    {
      credentials?: ChannelCredentials;
      insecure?: boolean;
      clientOptions?: Partial<ClientOptions>;
      interceptors?: Interceptor[];
    }
  >;
}

const DEFAULT_CLOSE_TIMEOUT = 20000;

export class SDK implements SDKInterface {
  private _resolver: Resolver;
  private _parentId: string | undefined;
  private _authorizationProvider?: AuthorizationProvider;
  private _creds: ChannelCredentials;
  private _clientOptions?: Partial<ClientOptions>;
  private _clients: Map<string, Client> = new Map();
  private _extraInterceptors: Interceptor[] = [];
  private _perAddress: Map<
    string,
    {
      credentials?: ChannelCredentials;
      insecure?: boolean;
      clientOptions?: Partial<ClientOptions>;
      interceptors?: Interceptor[];
    }
  > = new Map();
  private _serviceLastAddress: Map<string, string> = new Map();
  private _systemOrCustomRoots?: Buffer | string | string[];
  private _userAgent: string;

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

    // Resolve parentId lazily: prefer explicit option, else from configReader; empty strings are treated as undefined
    let resolvedParentId: string | undefined;
    const fromOptRaw = options?.parentId;
    if (fromOptRaw && fromOptRaw.trim() !== '') {
      resolvedParentId = fromOptRaw.trim();
    } else if (options?.configReader) {
      try {
        const p = options.configReader.parentId();
        if (p && p.trim() !== '') resolvedParentId = p.trim();
      } catch {
        // Ignore parent id errors from config; the SDK can operate without parent id
        resolvedParentId = undefined;
      }
    }
    this._parentId = resolvedParentId;

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

    // Per-address overrides
    if (options?.perAddress) {
      for (const [addr, cfg] of Object.entries(options.perAddress)) {
        this._perAddress.set(addr, { ...cfg });
      }
    }

    let userAgent = 'nebius-nodejs-sdk/' + VERSION;
    if (options?.userAgentPrefix) {
      userAgent = `${options.userAgentPrefix} ${userAgent}`;
    }
    this._userAgent = userAgent;

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
        console.warn(
          '[SDK] Both credentials and authorizationProvider provided; ignoring authorizationProvider in favor of credentials.',
        );
      }
      return;
    }

    // Next: explicit provider (kept for backward compatibility)
    if (options.authorizationProvider) {
      this._authorizationProvider = options.authorizationProvider;
      return;
    }

    // Finally: pull from configReader if available
    const cr = options.configReader;
    if (cr) {
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
    if (this._isAccessToken(init)) {
      return new TokenAuthProvider(new StaticBearer((init as AccessToken).token));
    }

    // token string
    if (typeof init === 'string') return new TokenAuthProvider(new StaticBearer(init));

    // token file
    if (this._isTokenFile(init)) return new TokenAuthProvider(new FileBearer(init.tokenFile));

    // Federation direct config
    if (this._isFederationInit(init)) {
      const f = init as FederationCredentialsOptions;
      return new TokenAuthProvider(
        new FederationAccountBearer(
          f.profileName,
          f.clientId,
          f.federationEndpoint,
          f.federationId,
          {
            writer: f.writer,
            noBrowserOpen: !!f.noBrowserOpen,
            timeoutMs: f.timeoutMs,
            ca: this._systemOrCustomRoots,
          },
        ),
      );
    }

    // Service account (reader or concrete or raw params)
    if (this._isSAReader(init) || this._isSA(init) || this._isSAParams(init)) {
      const bearer = this._mkSABearer(init);
      return bearer ? new TokenAuthProvider(bearer) : undefined;
    }

    return undefined;
  }

  private _mkSABearer(
    sa:
      | SA
      | SAReader
      | {
          serviceAccountId: string;
          publicKeyId: string;
          privateKeyPem: string;
        },
  ): ServiceAccountBearer | undefined {
    try {
      if (this._isSAReader(sa) || this._isSA(sa)) {
        return new ServiceAccountBearer(sa, { sdk: this });
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isAuthProvider(x: any): x is AuthorizationProvider {
    return x && typeof x === 'object' && typeof x.authenticator === 'function';
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isBearer(x: any): x is TokenBearer {
    return x && typeof x === 'object' && typeof x.receiver === 'function';
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isAccessToken(x: any): x is AccessToken {
    return (
      x && typeof x === 'object' && typeof x.token === 'string' && typeof x.toString === 'function'
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isTokenFile(x: any): x is { tokenFile: string } {
    return x && typeof x === 'object' && typeof x.tokenFile === 'string';
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isFederationInit(x: any): x is FederationCredentialsOptions {
    return (
      x &&
      typeof x === 'object' &&
      x.type === 'federation' &&
      typeof x.clientId === 'string' &&
      typeof x.federationEndpoint === 'string' &&
      typeof x.federationId === 'string'
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isSAReader(x: any): x is SAReader {
    return (
      x &&
      typeof x === 'object' &&
      typeof x.read === 'function' &&
      typeof x.getExchangeTokenRequest === 'function'
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _isSA(x: any): x is SA {
    return x instanceof SA;
  }

  private _isSAParams(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    x: any,
  ): x is { serviceAccountId: string; publicKeyId: string; privateKeyPem: string } {
    return (
      x &&
      typeof x === 'object' &&
      typeof x.serviceAccountId === 'string' &&
      typeof x.publicKeyId === 'string' &&
      typeof x.privateKeyPem === 'string'
    );
  }

  getClientByAddress(address: string): Client {
    if (!this._clients.has(address)) {
      this._clients.set(
        address,
        new Client(address, this.getAddressCredentials(address), this.getAddressOptions(address)),
      );
    }
    return this._clients.get(address)!;
  }

  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string {
    const addr = this._resolver.resolve(serviceName, apiServiceName);
    this._serviceLastAddress.set(serviceName, addr);
    return addr;
  }

  // Expose TLS roots for non-gRPC HTTP calls (e.g., federation flows)
  getTlsRootCAs(): Buffer | string | string[] | undefined {
    return this._systemOrCustomRoots;
  }

  getAddressCredentials(address: string): ChannelCredentials {
    const addrCfg = this._perAddress.get(address);
    if (addrCfg?.credentials) return addrCfg.credentials;
    if (addrCfg?.insecure != null) {
      return addrCfg.insecure
        ? credentials.createInsecure()
        : this._systemOrCustomRoots
          ? credentials.createSsl(normalizeRootCAs(this._systemOrCustomRoots))
          : credentials.createSsl();
    }

    return this._creds;
  }

  getAddressOptions(address: string): Partial<ClientOptions> {
    const addrCfg = this._perAddress.get(address);

    const authInt = this._authorizationProvider
      ? createAuthorizationInterceptor(this._authorizationProvider)
      : undefined;

    const combinedInts = [
      ...(this._extraInterceptors || []),
      ...((addrCfg?.interceptors ?? []) as Interceptor[]),
      ...(authInt ? [authInt] : []),
    ];
    const hasInts = combinedInts.length > 0;

    // Compose user-agent strings similar to Python test expectations
    const primaryParts: string[] = [];
    const secondaryParts: string[] = [];
    const collect = (opts?: Partial<ClientOptions>) => {
      const p = opts?.['grpc.primary_user_agent'];
      const s = opts?.['grpc.secondary_user_agent'];
      if (typeof p === 'string' && p.trim() !== '') primaryParts.push(p.trim());
      if (typeof s === 'string' && s.trim() !== '') secondaryParts.push(s.trim());
    };
    collect(this._clientOptions);
    collect(addrCfg?.clientOptions);

    const primaryUA =
      (primaryParts.length > 0 ? primaryParts.join(' ') + ' ' : '') + this._userAgent;
    const ret = {
      ...(this._clientOptions || {}),
      ...(addrCfg?.clientOptions || {}),
      ...(hasInts ? { interceptors: combinedInts } : {}),
      'grpc.primary_user_agent': primaryUA,
    };
    if (secondaryParts.length > 0) {
      ret['grpc.secondary_user_agent'] = secondaryParts.join(' ');
    }
    return ret as Partial<ClientOptions>;
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
  whoami(
    metadata?: Metadata,
    options?: Partial<CallOptions> & RetryOptions,
  ): Request<GetProfileRequest, GetProfileResponse> {
    const client = new ProfileServiceClient(this);
    const req = GetProfileRequest.create({});
    if (!metadata) metadata = new Metadata();
    if (!options) options = {};
    // Overloads in generated client handle metadata/options combinations
    return client.get(req, metadata, options);
  }

  // Gracefully close any attached authorization providers and channels
  async close(graceMs?: number): Promise<void> {
    const channelWatchers: Promise<void>[] = [];
    const timeout = typeof graceMs === 'number' ? graceMs : DEFAULT_CLOSE_TIMEOUT;
    const deadline = Date.now() + timeout;
    let stopWatchers = false;

    for (const client of this._clients.values()) {
      try {
        // Try to obtain underlying channel if available
        // Start close sequence on client
        client.close();

        const ch = client.getChannel();
        // Create a watcher that polls the connectivity state until SHUTDOWN
        const watcher = new Promise<void>((resolve, reject) => {
          const poll = () => {
            if (stopWatchers) return resolve();
            try {
              const state = ch.getConnectivityState(false);
              if (state === connectivityState.SHUTDOWN) {
                return resolve();
              }
              if (Date.now() >= deadline) {
                return reject(new Error('close: channel shutdown timed out'));
              }
            } catch (e) {
              return reject(e);
            }
            // schedule next probe without keeping the event loop alive
            const h: NodeJS.Timeout = setTimeout(poll, 50);
            if (typeof (h as NodeJS.Timeout).unref === 'function') (h as NodeJS.Timeout).unref();
          };

          poll();
        });
        channelWatchers.push(watcher);
      } catch {
        // ignore per-client errors
      }
    }

    // Authorization provider close (may accept graceMs). Run in parallel with channel waits.
    const authClose = this._authorizationProvider?.close?.(graceMs) ?? Promise.resolve();

    // Wait until all watchers and authClose settle or until timeout, whichever comes first.
    const allWork = Promise.allSettled(channelWatchers.concat(authClose));
    const timeoutP = new Promise<void>((res) => {
      const h: NodeJS.Timeout = setTimeout(() => res(), timeout);
      if (typeof (h as NodeJS.Timeout).unref === 'function') (h as NodeJS.Timeout).unref();
    });
    await Promise.race([allWork, timeoutP]);
    // Stop any remaining watcher loops
    stopWatchers = true;
  }
}
