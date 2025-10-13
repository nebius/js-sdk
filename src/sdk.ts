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
} from './api/nebius/iam/v1/index';
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
import { Handler as SDKHandler, Logger as SDKLogger, resolveLogger } from './runtime/util/logging';
import { VERSION } from './version';

export interface SDKInterface {
  getClientByAddress(address: string): Client;
  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string;
  parentId(): string | undefined;
  getAuthorizationProvider(): AuthorizationProvider | undefined;
  logger: SDKLogger;
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
  // Logger options: can be a Logger instance, a Handler, or a level (string/number)
  logger?: SDKLogger | SDKHandler | string | number;
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
  private _logger: SDKLogger;
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
  private _tlsRootCAs?: Buffer | string | string[];
  private _userAgent: string;

  constructor(options?: SDKOptions) {
    this._logger = resolveLogger(options?.logger, 'nebius.sdk');
    this._logger.debug('Initializing Nebius SDK');
    // Resolve domain
    let domain = options?.domain;
    if (domain && domain.trim() !== '') {
      this._logger.debug('Using explicit endpoint', { endpoint: domain });
    }
    if (!domain) {
      if (options?.configReader) {
        const fromCfg = options?.configReader?.endpoint();
        if (fromCfg) {
          domain = fromCfg;
          this._logger.debug('Using profile endpoint from config', {
            endpoint: fromCfg,
            profile: options?.configReader?.profileName(),
          });
        } else {
          this._logger.warn('Missing profile endpoint, using default', {
            endpoint: DEFAULT_DOMAIN,
            profile: options.configReader.profileName(),
          });
        }
      }
    }
    if (!domain || domain.trim() === '') {
      this._logger.debug('Using default domain', {
        endpoint: DEFAULT_DOMAIN,
      });
      domain = DEFAULT_DOMAIN;
    }

    const substitutionsFull: Record<string, string> = { '{domain}': domain };
    if (options?.substitutions) {
      for (const [k, v] of Object.entries(options.substitutions)) substitutionsFull[k] = v;
      this._logger.debug('Using custom substitutions', { substitutions: options.substitutions });
    }

    // Base resolver: Conventional
    let r: Resolver = new Conventional();
    // If a custom resolver is provided, chain it before the Conventional
    if (options?.resolver) {
      this._logger.debug('Adding custom resolver', { resolver: options.resolver });
      r = new Chain(options.resolver, r);
    }
    // Always apply substitutions
    this._resolver = new TemplateExpander(substitutionsFull, r);
    this._logger.trace('Using resolver chain', { resolver: this._resolver });

    // Resolve parentId lazily: prefer explicit option, else from configReader; empty strings are treated as undefined
    let resolvedParentId: string | undefined;
    const fromOptRaw = options?.parentId;
    if (fromOptRaw && fromOptRaw.trim() !== '') {
      this._logger.debug('Using explicit parentId', { parentId: fromOptRaw });
      resolvedParentId = fromOptRaw.trim();
    } else if (options?.configReader) {
      try {
        const p = options.configReader.parentId();
        if (p && p.trim() !== '') {
          resolvedParentId = p.trim();
          this._logger.debug('Using parentId from profile', {
            parentId: resolvedParentId,
            profile: options.configReader.profileName(),
          });
        }
      } catch (err) {
        this._logger.debug('Error retrieving parentId from configReader, ignoring.', { err });
        resolvedParentId = undefined;
      }
    }
    this._parentId = resolvedParentId;
    if (!this._parentId) {
      this._logger.info('No parentId resolved; parentId fill-in will be disabled.');
    }

    // Transport security (default: secure with system roots). If tlsRootCAs is provided, use that instead.
    const custom = normalizeRootCAs(options?.tlsRootCAs);
    if (custom) {
      this._logger.debug('Using custom TLS root CAs');
    } else {
      this._logger.debug('Using system TLS root CAs');
    }
    const roots = custom ?? getSystemRootCAs(this._logger.child('tls'));
    this._tlsRootCAs = roots;
    if (options?.insecure) {
      this._logger.debug('Using insecure plaintext channel (no TLS)');
      this._creds = credentials.createInsecure();
    } else {
      this._logger.debug('Initializing secure TLS channel');
      this._creds = roots ? credentials.createSsl(roots) : credentials.createSsl();
    }

    // Additional options and interceptors
    this._clientOptions = options?.clientOptions;
    if (options?.clientOptions) {
      this._logger.debug('Using custom client options', { clientOptions: options.clientOptions });
    }
    if (options?.interceptors) {
      this._logger.debug('Using custom interceptors', { count: options.interceptors.length });
    }
    this._extraInterceptors = options?.interceptors ? [...options.interceptors] : [];

    // Per-address overrides
    if (options?.perAddress) {
      this._logger.debug('Using per-address overrides', {
        addresses: Object.keys(options.perAddress),
      });
      for (const [addr, cfg] of Object.entries(options.perAddress)) {
        this._perAddress.set(addr, { ...cfg });
      }
    }

    let userAgent = 'nebius-ts-sdk/' + VERSION;
    if (options?.userAgentPrefix) {
      userAgent = `${options.userAgentPrefix} ${userAgent}`;
    }
    this._userAgent = userAgent;
    this._logger.debug('Using user agent', { userAgent: this._userAgent });

    // Initialize authorization provider based on provided credentials or config
    this._initAuthorization(options);
  }

  get logger(): SDKLogger {
    return this._logger;
  }

  private _initAuthorization(options?: SDKOptions) {
    if (!options) {
      this._logger.debug('No SDK options provided; authorization disabled.');
      return;
    }

    // Prefer credentials over explicit provider
    if (options.credentials != null) {
      const prov = this._normalizeCredentials(options.credentials);
      if (prov) {
        this._authorizationProvider = prov;

        // If both provided, ignore explicit provider (closer to Python priority) and optionally warn
        if (options.authorizationProvider) {
          this._logger.warn(
            'Both credentials and authorizationProvider provided; ignoring authorizationProvider in favor of credentials.',
          );
        } else {
          this._logger.debug('Using provided credentials for authorization.');
        }
        return;
      }
    }

    // Next: explicit provider (kept for backward compatibility)
    if (options.authorizationProvider) {
      this._logger.debug('Using explicit authorization provider.');
      this._authorizationProvider = options.authorizationProvider;
      return;
    }

    // Finally: pull from configReader if available
    const cr = options.configReader;
    if (cr) {
      try {
        this._logger.debug('Using config reader for authorization.');
        const cred = cr.getCredentials({
          writer: options.federationInvitationWriter,
          noBrowserOpen: !!options.federationInvitationNoBrowserOpen,
          timeoutMs: options.federationInvitationTimeoutMs,
          sdk: this,
          logger: this._logger.child('config_reader'),
        });
        const prov2 = this._normalizeCredentials(cred);
        if (prov2) this._authorizationProvider = prov2;
      } catch (err) {
        this._logger.warn('Error using config reader for authorization.', { err });
      }
    }
  }

  private _normalizeCredentials(init: CredentialsInit): AuthorizationProvider | undefined {
    if (!init) {
      this._logger.trace('No credentials provided; authorization disabled.');
      return undefined;
    }

    // Already a Provider
    if (this._isAuthProvider(init)) {
      this._logger.trace('Using existing authorization provider.');
      return init as AuthorizationProvider;
    }

    // Bearer
    if (this._isBearer(init)) {
      this._logger.trace('Using token bearer provider for authorization.');
      return new TokenAuthProvider(init as TokenBearer);
    }

    // Token
    if (this._isAccessToken(init)) {
      this._logger.trace('Using static token for authorization.', {
        token: init as AccessToken,
      });
      return new TokenAuthProvider(new StaticBearer(init as AccessToken));
    }

    // token string
    if (typeof init === 'string') {
      this._logger.trace('Using token string for authorization.');
      return new TokenAuthProvider(new StaticBearer(init));
    }

    // token file
    if (this._isTokenFile(init)) {
      this._logger.trace('Using token file for authorization.', {
        tokenFile: init.tokenFile,
      });
      return new TokenAuthProvider(new FileBearer(init.tokenFile));
    }

    // Federation direct config
    if (this._isFederationInit(init)) {
      const f = init as FederationCredentialsOptions;
      this._logger.trace('Using federation credentials for authorization.', {
        profile: f.profileName,
        clientId: f.clientId,
        federationEndpoint: f.federationEndpoint,
        federationId: f.federationId,
      });
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
            ca: this._tlsRootCAs,
            logger: this._logger.child('federation_account'),
          },
        ),
      );
    }

    // Service account (reader or concrete or raw params)
    if (this._isSAReader(init) || this._isSA(init) || this._isSAParams(init)) {
      this._logger.trace('Using service account for authorization.');
      const bearer = this._mkSABearer(init);
      return bearer ? new TokenAuthProvider(bearer) : undefined;
    }

    this._logger.warn('Unrecognized credentials format; authorization disabled.', { init });
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
      if (this._isSAReader(sa)) {
        this._logger.trace('Using service account reader for authorization.', {
          sa: sa.read(),
        });
        return new ServiceAccountBearer(sa, {
          sdk: this,
          logger: this._logger.child('service_account'),
        });
      }
      if (this._isSA(sa)) {
        this._logger.trace('Using service account for authorization.', { sa });
        return new ServiceAccountBearer(sa, {
          sdk: this,
          logger: this._logger.child('service_account'),
        });
      }
      if (this._isSAParams(sa)) {
        this._logger.trace('Using service account parameters for authorization.', {
          serviceAccountId: sa.serviceAccountId,
          publicKeyId: sa.publicKeyId,
        });
        const p = sa as { serviceAccountId: string; publicKeyId: string; privateKeyPem: string };
        return new ServiceAccountBearer(p.serviceAccountId, {
          publicKeyId: p.publicKeyId,
          privateKeyPem: p.privateKeyPem,
          sdk: this,
          logger: this._logger.child('service_account'),
        });
      }
      this.logger.debug('Unrecognized service account format; authorization disabled.');
      return undefined;
    } catch (err) {
      this.logger.error('Error initializing service account; authorization disabled.', {
        err,
      });
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
      x &&
      typeof x === 'object' &&
      typeof x.token === 'string' &&
      x.$type === 'nebius.iam.AccessToken'
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
    this._logger.trace('Getting gRPC client by address.', { address });
    if (!this._clients.has(address)) {
      this._logger.debug('Creating new gRPC client for address.', { address });
      this._clients.set(
        address,
        new Client(address, this.getAddressCredentials(address), this.getAddressOptions(address)),
      );
    }
    return this._clients.get(address)!;
  }

  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string {
    const address = this._resolver.resolve(serviceName, apiServiceName);
    this._logger.debug('Resolved address from service name.', {
      serviceName,
      apiServiceName,
      address,
    });
    return address;
  }

  // Expose TLS roots for non-gRPC HTTP calls (e.g., federation flows)
  getTlsRootCAs(): Buffer | string | string[] | undefined {
    this._logger.trace('Getting TLS root CAs.');
    return this._tlsRootCAs;
  }

  getAddressCredentials(address: string): ChannelCredentials {
    const logger = this._logger.withFields({ address });
    const addrCfg = this._perAddress.get(address);
    if (addrCfg?.credentials) {
      logger.debug('Using per-address explicit credentials.');
      return addrCfg.credentials;
    }
    if (addrCfg?.insecure != null) {
      if (addrCfg.insecure) {
        logger.debug('Using per-address insecure plaintext channel (no TLS).');
        return credentials.createInsecure();
      }
      logger.debug('Using per-address secure TLS channel.', {
        withRoots: !!this._tlsRootCAs,
      });
      return this._tlsRootCAs
        ? credentials.createSsl(normalizeRootCAs(this._tlsRootCAs))
        : credentials.createSsl();
    }
    logger.debug('Using default credentials.');
    return this._creds;
  }

  getAuthorizationProvider(): AuthorizationProvider | undefined {
    this._logger.trace('Getting authorization provider.');
    return this._authorizationProvider;
  }

  getAddressOptions(address: string): Partial<ClientOptions> {
    const logger = this._logger.withFields({ address });
    logger.trace('Getting gRPC client options by address.');
    const addrCfg = this._perAddress.get(address);

    const combinedInterceptors = [
      ...(this._extraInterceptors || []),
      ...(addrCfg?.interceptors ?? []),
    ];
    const hasInts = combinedInterceptors.length > 0;
    if (hasInts) {
      logger.trace('Using combined interceptors.', {
        count: combinedInterceptors.length,
        hasExtraInterceptors: (this._extraInterceptors || []).length > 0,
        hasPerAddressInterceptors: (addrCfg?.interceptors ?? []).length > 0,
      });
    }

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
      ...(hasInts ? { interceptors: combinedInterceptors } : {}),
      'grpc.primary_user_agent': primaryUA,
    };
    if (secondaryParts.length > 0) {
      ret['grpc.secondary_user_agent'] = secondaryParts.join(' ');
    }
    logger.trace('Using gRPC client options.', { options: ret });
    return ret as Partial<ClientOptions>;
  }

  parentId(): string | undefined {
    return this._parentId;
  }

  // Allow changing the authorization provider at runtime
  setAuthorizationProvider(provider: AuthorizationProvider | undefined): void {
    this._logger.trace('Setting authorization provider.', { provider });
    this._authorizationProvider = provider;
  }

  setTokenBearerAsAuthorization(bearer: import('./runtime/token').Bearer): void {
    this._logger.trace('Setting token bearer as authorization.', { bearer });
    this._authorizationProvider = new TokenAuthProvider(bearer);
  }

  // Allow adding extra interceptors (idempotency/cleaner analogs)
  addInterceptors(...ints: Interceptor[]): void {
    this._logger.trace('Adding extra interceptors.', { count: ints.length });
    this._extraInterceptors.push(...ints);
  }

  // Replace client options (channel args, defaults)
  setClientOptions(opts: Partial<ClientOptions> | undefined): void {
    this._logger.trace('Setting client options.', { opts });
    this._clientOptions = opts;
  }

  // Convenience method similar to Python SDK.whoami()
  whoami(
    metadata?: Metadata,
    options?: Partial<CallOptions> & RetryOptions,
  ): Request<GetProfileRequest, GetProfileResponse> {
    this._logger.trace('Preparing whoami request.', { metadata, options });
    const client = new ProfileServiceClient(this);
    const req = GetProfileRequest.create({});
    if (!metadata) metadata = new Metadata();
    if (!options) options = {};
    // Overloads in generated client handle metadata/options combinations
    return client.get(req, metadata, options);
  }

  // Gracefully close any attached authorization providers and channels
  async close(graceMs?: number): Promise<void> {
    this._logger.debug('Closing SDK.', { graceMs });
    const channelWatchers: Promise<void>[] = [];
    const timeout = typeof graceMs === 'number' ? graceMs : DEFAULT_CLOSE_TIMEOUT;
    const deadline = Date.now() + timeout;
    let stopWatchers = false;

    for (const [address, client] of this._clients.entries()) {
      try {
        const cLog = this._logger.child('close.channel', { address });
        cLog.trace('Closing client.');
        // Try to obtain underlying channel if available
        // Start close sequence on client
        client.close();

        const ch = client.getChannel();
        // Create a watcher that polls the connectivity state until SHUTDOWN
        const watcher = new Promise<void>((resolve, reject) => {
          const poll = () => {
            let previousState: connectivityState = ch.getConnectivityState(false);
            cLog.trace('Channel connectivity state', { state: previousState });
            if (stopWatchers) {
              cLog.trace('Watcher loop stopped prematurely.');
              return resolve();
            }
            try {
              const state = ch.getConnectivityState(false);
              if (state === connectivityState.SHUTDOWN) {
                cLog.trace('Channel is stopped', { state });
                return resolve();
              }
              if (state !== previousState) {
                previousState = state;
                cLog.trace('Channel connectivity state changed', { state });
              }
              if (Date.now() >= deadline) {
                return reject(new Error('close: channel shutdown timed out'));
              }
            } catch (e) {
              cLog.debug('Error polling channel state', { err: e });
              return reject(e);
            }
            // schedule next probe without keeping the event loop alive
            const h: NodeJS.Timeout = setTimeout(poll, 50);
            if (typeof (h as NodeJS.Timeout).unref === 'function') (h as NodeJS.Timeout).unref();
          };

          poll();
        });
        channelWatchers.push(watcher);
      } catch (e) {
        this._logger.debug('Error closing client', { err: e });
      }
    }

    // Authorization provider close (may accept graceMs). Run in parallel with channel waits.
    const authClose = this._authorizationProvider?.close?.(graceMs) ?? Promise.resolve();

    // Wait until all watchers and authClose settle or until timeout, whichever comes first.
    const allWork = Promise.allSettled(channelWatchers.concat(authClose));
    const timeoutP = new Promise<void>((res) => {
      const h: NodeJS.Timeout = setTimeout(() => res(), timeout);
      h.unref();
    });
    await Promise.race([allWork, timeoutP]);
    // Stop any remaining watcher loops
    stopWatchers = true;
    this._logger.debug('SDK closed.');
  }
}
