import {
  type CallOptions,
  type ChannelCredentials,
  Client,
  type ClientOptions,
  connectivityState,
  credentials,
  type Interceptor,
  Metadata,
} from '@grpc/grpc-js';

import {
  GetProfileRequest,
  type GetProfileResponse,
  ProfileService as ProfileServiceClient,
} from './api/nebius/iam/v1/index.js';
import { TokenProvider as TokenAuthProvider } from './runtime/authorization/token.js';
import { domain as DEFAULT_DOMAIN } from './runtime/constants.js';
import {
  keepaliveClientOptions,
  type KeepaliveConfig,
  keepaliveConfigFromOptions,
  type KeepaliveOptions,
} from './runtime/keepalive.js';
import {
  type AuthMetricsLike,
  instrumentBearer,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  type MetricsLike,
  metricStart,
  recordConfigMetric,
} from './runtime/metrics.js';
import { Chain, Conventional, type Resolver, TemplateExpander } from './runtime/resolver.js';
import {
  ServiceAccount as SA,
  type Reader as SAReader,
} from './runtime/service_account/service_account.js';
import { getSystemRootCAs, normalizeRootCAs } from './runtime/tls/system_certs.js';
import { FederationAccountBearer } from './runtime/token/federation_account.js';
import { FileBearer } from './runtime/token/file.js';
import { ServiceAccountBearer } from './runtime/token/service_account.js';
import { StaticBearer } from './runtime/token/static.js';
import {
  resolveLogger,
  Handler as SDKHandler,
  Logger as SDKLogger,
} from './runtime/util/logging.js';
import { VERSION } from './version.js';

import type { Provider as AuthorizationProvider } from './runtime/authorization/provider.js';
import type { ConfigReaderLike } from './runtime/cli_config_interfaces.js';
import type { Request, RetryOptions } from './runtime/request.js';
import type { Token as AccessToken, Bearer as TokenBearer } from './runtime/token.js';

/**
 * Defines the SDK functions that generated service clients use.
 *
 * Implement this interface only when you need to provide a custom runtime to
 * generated clients. Most applications should create an {@link SDK} instead.
 * A generated client uses this interface to resolve its endpoint, reuse a gRPC
 * channel, add authorization, and write logs.
 */
export interface SDKInterface {
  /** Returns one shared gRPC client for the exact address string. */
  getClientByAddress(address: string): Client;
  /**
   * Resolves a protobuf service name to a gRPC address.
   *
   * `apiServiceName` is the API-specific endpoint name when it differs from
   * the protobuf service name.
   */
  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string;
  /** Returns the parent ID that generated requests can insert when it is absent. */
  parentId(): string | undefined;
  /** Returns the provider that authenticates new requests, or `undefined`. */
  getAuthorizationProvider(): AuthorizationProvider | undefined;
  /** Logs SDK and request events. */
  logger: SDKLogger;
}

/**
 * Defines direct federation credentials.
 *
 * Use these options when you do not use a CLI {@link ConfigReaderLike}. The
 * first token request can open a browser and wait for the user to sign in.
 */
export type FederationCredentialsOptions = {
  /** Selects federation credentials. */
  type: 'federation';
  /** Identifies the local profile. */
  profileName: string;
  /** Identifies the OAuth client. */
  clientId: string;
  /** Sets the federation API endpoint. */
  federationEndpoint: string;
  /** Identifies the federation. */
  federationId: string;
  /** Receives browser authorization instructions. */
  writer?: (s: string) => void;
  /** Prevents the SDK from opening a browser. */
  noBrowserOpen?: boolean;
  /** Limits browser authorization in milliseconds. */
  timeoutMs?: number;
};

/**
 * Defines the service account values accepted by {@link SDKOptions.credentials}.
 *
 * Keep private keys outside source control. A reader can load the key only
 * when the SDK needs it.
 */
export type ServiceAccountInit =
  | SA
  | SAReader
  | { serviceAccountId: string; publicKeyId: string; privateKeyPem: string };

/**
 * Defines the credential values that the SDK accepts.
 *
 * A string is treated as an access token. `{ tokenFile }` reads a token from a
 * file. Bearers and authorization providers can renew credentials. `null` and
 * `undefined` create an SDK without authorization.
 */
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

/**
 * Configures an {@link SDK} instance.
 *
 * {@link SDKOptions.credentials} has priority over
 * {@link SDKOptions.authorizationProvider}. Explicit {@link SDKOptions.domain}
 * and {@link SDKOptions.parentId} values have priority over values from
 * {@link SDKOptions.configReader}. Per-address connection values have priority
 * over global connection values.
 */
export interface SDKOptions {
  /** Resolves service names before the conventional resolver is used. */
  resolver?: Resolver;
  /** Replaces placeholders such as `{domain}` in resolved addresses. */
  substitutions?: Record<string, string>;
  /** Sets the default Nebius API domain. The default is the public Nebius domain. */
  domain?: string;
  /**
   * Reads credentials, an endpoint, and a parent ID from a configuration source.
   *
   * Use
   * {@link https://nebius.github.io/js-sdk/classes/runtime_cli_config.Config.html | Config}
   * from `runtime/cli_config` to read the Nebius CLI file.
   */
  configReader?: ConfigReaderLike;
  /**
   * Sets the default parent ID.
   *
   * Generated create and list requests can use this value when their
   * `parentId` field is empty.
   */
  parentId?: string;
  /** Sets an authorization provider when {@link SDKOptions.credentials} is not set. */
  authorizationProvider?: AuthorizationProvider;
  /**
   * Uses plaintext gRPC connections instead of TLS.
   *
   * Use this only for a trusted local test endpoint.
   */
  insecure?: boolean;
  /** Sets gRPC channel options for all addresses. */
  clientOptions?: Partial<ClientOptions>;
  /** Adds gRPC interceptors to all clients. */
  interceptors?: Interceptor[];
  /**
   * Sets credentials for authenticated requests.
   *
   * Prefer a bearer or provider for a long-running process because it can
   * renew tokens. Do not log a token string.
   */
  credentials?: CredentialsInit;
  /** Replaces the system TLS root certificates for gRPC and federation HTTP calls. */
  tlsRootCAs?: Buffer | string | string[];
  /** Receives federation authorization instructions from the configuration reader. */
  federationInvitationWriter?: (s: string) => void;
  /** Prevents browser launch during federation authorization. */
  federationInvitationNoBrowserOpen?: boolean;
  /** Limits federation authorization in milliseconds. */
  federationInvitationTimeoutMs?: number;
  /**
   * Adds the application name and version before the SDK user-agent.
   *
   * Use a stable value such as `example-application/1.0`.
   */
  userAgentPrefix?: string;
  /** Configures gRPC keepalive, or disables it when set to `false`. */
  keepalive?: KeepaliveOptions | false;
  /** Receives configuration and authorization metrics. Callback errors are ignored. */
  metrics?: MetricsLike;
  /** Receives authorization metrics when {@link SDKOptions.metrics} is not set. */
  authMetrics?: AuthMetricsLike;
  /** Sets a logger, log handler, or log level. */
  logger?: SDKLogger | SDKHandler | string | number;
  /**
   * Overrides connection settings for each exact resolved address.
   *
   * Overrides affect a client only when the SDK creates it. Configure them
   * before the first request to that address.
   */
  perAddress?: Record<
    string,
    {
      /** Replaces TLS or plaintext channel credentials for this address. */
      credentials?: ChannelCredentials;
      /** Selects plaintext (`true`) or TLS (`false`) for this address. */
      insecure?: boolean;
      /** Overrides global gRPC client options for this address. */
      clientOptions?: Partial<ClientOptions>;
      /** Runs after global interceptors for this address. */
      interceptors?: Interceptor[];
    }
  >;
}

const DEFAULT_CLOSE_TIMEOUT = 20000;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Creates service clients and owns shared SDK resources.
 *
 * Pass the SDK to a generated service client. A generated client creates a
 * {@link Request} when you call a service method. The SDK reuses one gRPC
 * channel for each resolved address and applies credentials to each request.
 *
 * Set {@link SDKOptions.userAgentPrefix} to your application name and version.
 * Create one SDK for the lifetime of an application, and call
 * {@link SDK.close} during shutdown.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';
 *
 * const sdk = new SDK({
 *   credentials: new EnvBearer('NEBIUS_IAM_TOKEN'),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * try {
 *   console.log(await sdk.whoami());
 * } finally {
 *   await sdk.close();
 * }
 * ```
 */
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
  private _keepaliveConfig: KeepaliveConfig;
  private _metrics: MetricsLike;
  private _authMetrics: AuthMetricsLike;

  /**
   * Creates an SDK with the selected credentials and connection settings.
   *
   * Construction reads a supplied configuration reader and prepares TLS
   * settings. It does not send an API request. Some credential types defer
   * network access until the first authenticated request.
   *
   * @throws {Error} A supplied configuration reader can throw when its
   * configuration is invalid.
   */
  constructor(options?: SDKOptions) {
    this._logger = resolveLogger(options?.logger, 'nebius.sdk');
    this._logger.debug('Initializing Nebius SDK');
    this._metrics = options?.metrics;
    this._authMetrics = options?.metrics ?? options?.authMetrics;
    if (options?.metrics && options?.authMetrics) {
      this._logger.warn('Both metrics and authMetrics provided; using metrics for auth callbacks.');
    }
    this._keepaliveConfig = keepaliveConfigFromOptions(options?.keepalive);
    this._logger.debug('Using gRPC keepalive config', { keepalive: this._keepaliveConfig });

    if (options?.configReader) {
      this._configureMetricsOnReader(options.configReader);
    }

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

    const nodeMajor = process.versions.node.split('.')[0];
    const moduleFormat = typeof require === 'function' ? 'cjs' : 'esm';
    let userAgent = `nebius-js-sdk/${VERSION} (node/${nodeMajor}; ${process.platform}/${process.arch}; ${moduleFormat})`;
    if (options?.userAgentPrefix) {
      userAgent = `${options.userAgentPrefix} ${userAgent}`;
    } else {
      this._logger.warn('SDKOptions.userAgentPrefix will become mandatory in a future release');
    }
    this._userAgent = userAgent;
    this._logger.debug('Using user agent', { userAgent: this._userAgent });

    // Initialize authorization provider based on provided credentials or config
    this._initAuthorization(options);
  }

  /** Returns the SDK logger. */
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
      const configMetricsAware = this._isConfigMetricsAwareConfigReader(cr);
      const start = metricStart();
      try {
        this._logger.debug('Using config reader for authorization.');
        const cred = cr.getCredentials({
          writer: options.federationInvitationWriter,
          noBrowserOpen: !!options.federationInvitationNoBrowserOpen,
          timeoutMs: options.federationInvitationTimeoutMs,
          sdk: this,
          logger: this._logger.child('config_reader'),
        });
        if (!configMetricsAware) {
          recordConfigMetric(
            this._metrics,
            'credentialsResolve',
            'config-reader',
            METRIC_RESULT_SUCCESS,
            metricDurationMs(start),
          );
        }
        const prov2 = this._normalizeCredentials(cred);
        if (prov2) this._authorizationProvider = prov2;
      } catch (err) {
        if (!configMetricsAware) {
          recordConfigMetric(
            this._metrics,
            'credentialsResolve',
            'config-reader',
            METRIC_RESULT_ERROR,
            metricDurationMs(start),
          );
        }
        this._logger.warn('Error using config reader for authorization.', { err });
      }
    }
  }

  private _configureMetricsOnReader(configReader: ConfigReaderLike): void {
    const reader = configReader as ConfigReaderLike & {
      setMetrics?: (metrics: MetricsLike) => void;
      setAuthMetrics?: (metrics: AuthMetricsLike) => void;
    };
    if (this._metrics && typeof reader.setMetrics === 'function') {
      reader.setMetrics(this._metrics);
      return;
    }
    if (this._authMetrics && typeof reader.setAuthMetrics === 'function') {
      reader.setAuthMetrics(this._authMetrics);
    }
  }

  private _isConfigMetricsAwareConfigReader(configReader: ConfigReaderLike): boolean {
    return Boolean(this._metrics) && configReader.emitsCredentialsResolveMetrics === true;
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
      return new TokenAuthProvider(instrumentBearer(init as TokenBearer, this._authMetrics));
    }

    // Token
    if (this._isAccessToken(init)) {
      this._logger.trace('Using static token for authorization.', {
        token: init,
      });
      return new TokenAuthProvider(instrumentBearer(new StaticBearer(init), this._authMetrics));
    }

    // token string
    if (typeof init === 'string') {
      this._logger.trace('Using token string for authorization.');
      return new TokenAuthProvider(instrumentBearer(new StaticBearer(init), this._authMetrics));
    }

    // token file
    if (this._isTokenFile(init)) {
      this._logger.trace('Using token file for authorization.', {
        tokenFile: init.tokenFile,
      });
      return new TokenAuthProvider(
        instrumentBearer(new FileBearer(init.tokenFile), this._authMetrics),
      );
    }

    // Federation direct config
    if (this._isFederationInit(init)) {
      this._logger.trace('Using federation credentials for authorization.', {
        profile: init.profileName,
        clientId: init.clientId,
        federationEndpoint: init.federationEndpoint,
        federationId: init.federationId,
      });
      const bearer = new FederationAccountBearer(
        init.profileName,
        init.clientId,
        init.federationEndpoint,
        init.federationId,
        {
          writer: init.writer,
          noBrowserOpen: !!init.noBrowserOpen,
          timeoutMs: init.timeoutMs,
          ca: this._tlsRootCAs,
          metrics: this._authMetrics,
          logger: this._logger.child('federation_account'),
        },
      );
      return new TokenAuthProvider(instrumentBearer(bearer, this._authMetrics));
    }

    // Service account (reader or concrete or raw params)
    if (this._isSAReader(init) || this._isSA(init) || this._isSAParams(init)) {
      this._logger.trace('Using service account for authorization.');
      const bearer = this._mkSABearer(init);
      return bearer
        ? new TokenAuthProvider(instrumentBearer(bearer, this._authMetrics))
        : undefined;
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
          metrics: this._authMetrics,
          logger: this._logger.child('service_account'),
        });
      }
      if (this._isSA(sa)) {
        this._logger.trace('Using service account for authorization.', { sa });
        return new ServiceAccountBearer(sa, {
          sdk: this,
          metrics: this._authMetrics,
          logger: this._logger.child('service_account'),
        });
      }
      if (this._isSAParams(sa)) {
        this._logger.trace('Using service account parameters for authorization.', {
          serviceAccountId: sa.serviceAccountId,
          publicKeyId: sa.publicKeyId,
        });
        return new ServiceAccountBearer(sa.serviceAccountId, {
          publicKeyId: sa.publicKeyId,
          privateKeyPem: sa.privateKeyPem,
          sdk: this,
          metrics: this._authMetrics,
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

  private _isAuthProvider(x: unknown): x is AuthorizationProvider {
    return isObject(x) && typeof x.authenticator === 'function';
  }

  private _isBearer(x: unknown): x is TokenBearer {
    return isObject(x) && typeof x.receiver === 'function';
  }

  private _isAccessToken(x: unknown): x is AccessToken {
    return isObject(x) && typeof x.token === 'string' && x.$type === 'nebius.iam.AccessToken';
  }

  private _isTokenFile(x: unknown): x is { tokenFile: string } {
    return isObject(x) && typeof x.tokenFile === 'string';
  }

  private _isFederationInit(x: unknown): x is FederationCredentialsOptions {
    return (
      isObject(x) &&
      x.type === 'federation' &&
      typeof x.clientId === 'string' &&
      typeof x.federationEndpoint === 'string' &&
      typeof x.federationId === 'string'
    );
  }

  private _isSAReader(x: unknown): x is SAReader {
    return (
      isObject(x) && typeof x.read === 'function' && typeof x.getExchangeTokenRequest === 'function'
    );
  }

  private _isSA(x: unknown): x is SA {
    return x instanceof SA;
  }

  private _isSAParams(
    x: unknown,
  ): x is { serviceAccountId: string; publicKeyId: string; privateKeyPem: string } {
    return (
      isObject(x) &&
      typeof x.serviceAccountId === 'string' &&
      typeof x.publicKeyId === 'string' &&
      typeof x.privateKeyPem === 'string'
    );
  }

  /**
   * Returns a shared gRPC client for an address.
   *
   * The first call creates the client. Later calls with the same address return
   * the same object. Changes from {@link addInterceptors} or
   * {@link setClientOptions} do not affect an existing client.
   */
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

  /** Resolves a service name to a gRPC address. */
  getAddressFromServiceName(serviceName: string, apiServiceName?: string): string {
    const address = this._resolver.resolve(serviceName, apiServiceName);
    this._logger.debug('Resolved address from service name.', {
      serviceName,
      apiServiceName,
      address,
    });
    return address;
  }

  /**
   * Returns the TLS root certificates for HTTP and gRPC calls.
   *
   * Credential helpers use this value so that their HTTP calls trust the same
   * roots as SDK gRPC calls. Do not modify a returned buffer.
   */
  getTlsRootCAs(): Buffer | string | string[] | undefined {
    this._logger.trace('Getting TLS root CAs.');
    return this._tlsRootCAs;
  }

  /** Returns per-address channel credentials when set, or the SDK default. */
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

  /** Returns the current authorization provider. */
  getAuthorizationProvider(): AuthorizationProvider | undefined {
    this._logger.trace('Getting authorization provider.');
    return this._authorizationProvider;
  }

  /**
   * Returns the combined gRPC options for an address.
   *
   * The result contains keepalive settings and the SDK user-agent. Per-address
   * options override global options. Global interceptors run before
   * per-address interceptors.
   */
  getAddressOptions(address: string): Partial<ClientOptions> {
    const logger = this._logger.withFields({ address });
    logger.trace('Getting gRPC client options by address.');
    const addrCfg = this._perAddress.get(address);

    const combinedInterceptors = [...this._extraInterceptors, ...(addrCfg?.interceptors ?? [])];
    const hasInts = combinedInterceptors.length > 0;
    if (hasInts) {
      logger.trace('Using combined interceptors.', {
        count: combinedInterceptors.length,
        hasExtraInterceptors: this._extraInterceptors.length > 0,
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

    const primaryUA = [...primaryParts, this._userAgent].join(' ');
    const ret = {
      ...keepaliveClientOptions(this._keepaliveConfig),
      ...(this._clientOptions ?? {}),
      ...(addrCfg?.clientOptions ?? {}),
      ...(hasInts ? { interceptors: combinedInterceptors } : {}),
      'grpc.primary_user_agent': primaryUA,
    };
    if (secondaryParts.length > 0) {
      ret['grpc.secondary_user_agent'] = secondaryParts.join(' ');
    }
    logger.trace('Using gRPC client options.', { options: ret });
    return ret as Partial<ClientOptions>;
  }

  /** Returns the default parent ID. */
  parentId(): string | undefined {
    return this._parentId;
  }

  /**
   * Replaces the authorization provider for new requests.
   *
   * The change does not restart a request that is already running. Pass
   * `undefined` to disable authorization for later requests.
   */
  setAuthorizationProvider(provider: AuthorizationProvider | undefined): void {
    this._logger.trace('Setting authorization provider.', { provider });
    this._authorizationProvider = provider;
  }

  /**
   * Uses a token bearer as the authorization provider for new requests.
   *
   * The SDK also connects the bearer to the configured authorization metrics.
   */
  setTokenBearerAsAuthorization(bearer: import('./runtime/token.js').Bearer): void {
    this._logger.trace('Setting token bearer as authorization.', { bearer });
    this._authorizationProvider = new TokenAuthProvider(
      instrumentBearer(bearer, this._authMetrics),
    );
  }

  /**
   * Adds interceptors to clients that the SDK creates later.
   *
   * This method does not modify clients that are already in the shared client
   * cache.
   */
  addInterceptors(...ints: Interceptor[]): void {
    this._logger.trace('Adding extra interceptors.', { count: ints.length });
    this._extraInterceptors.push(...ints);
  }

  /**
   * Replaces the default gRPC client options for clients created later.
   *
   * This method does not modify clients that already exist.
   */
  setClientOptions(opts: Partial<ClientOptions> | undefined): void {
    this._logger.trace('Setting client options.', { opts });
    this._clientOptions = opts;
  }

  /**
   * Returns the Nebius IAM profile for the current credentials.
   *
   * Await {@link Request.result}, or await the request directly. Use this call
   * to verify credentials before starting other work.
   *
   * @example
   * ```ts
   * const request = sdk.whoami();
   * const profile = await request.result;
   * console.log(profile);
   * console.log('request ID', await request.requestId);
   * ```
   */
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

  /**
   * Closes the authorization provider and all shared gRPC channels.
   *
   * The default grace period is 20 seconds. After that period, this method
   * returns even if a close watcher has not completed. Do not start new
   * requests after calling this method.
   *
   * @example
   * ```ts
   * try {
   *   await sdk.whoami();
   * } finally {
   *   await sdk.close();
   * }
   * ```
   */
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
