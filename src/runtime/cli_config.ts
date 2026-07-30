/**
 * Loads SDK defaults and credentials from Nebius CLI configuration.
 *
 * Create {@link Config} and pass it as the SDK `configReader` option. Explicit
 * SDK options can override the endpoint and parent ID that this module reads.
 *
 * @packageDocumentation
 */

import { existsSync, readFileSync } from 'fs';

import { parse as parseYAML } from 'yaml';

import {
  defaultConfigDir,
  defaultConfigFile,
  endpointEnv as ENDPOINT_ENV,
  profileEnv as PROFILE_ENV,
  tokenEnv as TOKEN_ENV,
} from './constants.js';
import {
  type AuthMetricsLike,
  bindAuthMetrics,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  type MetricResult,
  type MetricsLike,
  metricStart,
  recordConfigMetric,
} from './metrics.js';
import { CredentialsFileReader } from './service_account/credentials_file.js';
import { PkFileReader } from './service_account/pk_file.js';
import { Bearer } from './token.js';
import { FederatedCredentialsBearer } from './token/federated_credentials.js';
import { FederationAccountBearer } from './token/federation_account.js';
import { FileBearer } from './token/file.js';
import { CachedImpersonatedBearer } from './token/impersonated.js';
import { ServiceAccountBearer } from './token/service_account.js';
import { EnvBearer, NoTokenInEnvError } from './token/static.js';
import {
  custom,
  customJson,
  resolveLogger,
  Handler as SDKHandler,
  Logger as SDKLogger,
} from './util/logging.js';
import { resolveHomeDir } from './util/path.js';

import type {
  ConfigReaderLike,
  Credentials,
  GetCredentialsOptions,
} from './cli_config_interfaces.js';

/** Reports an invalid or incomplete Nebius CLI configuration. */
export class ConfigError extends Error {}
/**
 * Reports that the selected profile cannot supply a parent ID.
 *
 * The SDK handles this error and leaves automatic
 * `parentId` insertion disabled. Callers that use {@link Config.parentId}
 * directly can catch it.
 */
export class NoParentIdError extends ConfigError {}

interface ConfigMetricInput {
  source: string;
  result: MetricResult;
  durationMs: number;
}

class CredentialSourceError extends ConfigError {
  constructor(
    public readonly source: string,
    cause: unknown,
  ) {
    super(cause instanceof Error ? cause.message : String(cause), { cause });
    this.name = cause instanceof Error ? cause.name : 'CredentialSourceError';
  }
}

function credentialErrorSource(err: unknown): string | undefined {
  return err instanceof CredentialSourceError ? err.source : undefined;
}

function tagCredentialSource(source: string, err: unknown): never {
  if (err instanceof CredentialSourceError) throw err;
  throw new CredentialSourceError(source, err);
}

/**
 * Controls how {@link Config} selects and reads a Nebius CLI profile.
 *
 * Explicit values have priority over environment values. Environment values
 * have priority over values in the selected profile.
 */
export interface ConfigOptions {
  /** Sets the OAuth client ID required by a federation profile. */
  clientId?: string;
  /** Sets the YAML config file path. `~` is expanded. */
  configFile?: string;
  /**
   * Selects a profile.
   *
   * If omitted, the reader uses the profile environment variable, the file
   * default, or the only profile in the file, in that order.
   */
  profile?: string | null;
  /** Sets the profile environment-variable name. */
  profileEnv?: string;
  /** Sets the access-token environment-variable name. */
  tokenEnv?: string;
  /** Ignores token, profile, and endpoint environment variables when `true`. */
  noEnv?: boolean;
  /** Disables use of the profile parent ID when `true`. */
  noParentId?: boolean;
  /** Sets retries for credential exchange and impersonation. The default is 2. */
  maxRetries?: number;
  /** Sets the service endpoint and overrides environment and profile values. */
  endpoint?: string;
  /** Sets the endpoint environment-variable name. */
  endpointEnv?: string;
  /** Receives configuration and authorization metrics. */
  metrics?: MetricsLike;
  /** Receives authorization metrics when {@link ConfigOptions.metrics} is not set. */
  authMetrics?: AuthMetricsLike;
  /**
   * Exchanges the selected credentials for this service account.
   *
   * This value overrides `impersonate-service-account-id` in the profile.
   */
  impersonateServiceAccountId?: string;
  /** Sets the logger used while loading configuration and credentials. */
  logger?: SDKLogger | SDKHandler | string | number;
}

/**
 * Reads credentials and SDK defaults from a Nebius CLI configuration file.
 *
 * Construction reads and validates the YAML file synchronously. The file must
 * exist even when an environment token supplies the credentials. The selected
 * profile can provide `parent-id`, `endpoint`, federation credentials, a token
 * file, or service account credentials.
 *
 * Pass this object as
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#configreader | SDKOptions.configReader}.
 * The SDK then uses its endpoint, parent ID, and credentials. An environment
 * access token has priority over profile credentials.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { Config } from '@nebius/js-sdk/runtime/cli_config';
 *
 * const config = new Config({
 *   clientId: 'example-application',
 *   profile: 'default',
 * });
 * const sdk = new SDK({
 *   configReader: config,
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * try {
 *   console.log(await sdk.whoami());
 * } finally {
 *   await sdk.close();
 * }
 * ```
 *
 * @throws {Error} The file is missing or unreadable, the YAML cannot be
 * parsed, or the selected profile is invalid. Semantic profile errors are
 * instances of {@link ConfigError}.
 */
export class Config implements ConfigReaderLike {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.Config';
  /** Tells the SDK that this reader reports its own credential-resolution metrics. */
  public readonly emitsCredentialsResolveMetrics = true;
  private readonly _clientId: string | undefined;
  private _priorityBearer: EnvBearer | null = null;
  private _profileName: string | null;
  private readonly _noParentId: boolean;
  private readonly _configFile: string;
  private _endpoint: string | undefined;
  private readonly _maxRetries: number;
  private _logger: SDKLogger;
  private _metrics: MetricsLike;
  private _authMetrics: AuthMetricsLike;
  private _lastConfigLoadMetric: ConfigMetricInput | undefined;
  private readonly _impersonateServiceAccountId: string | undefined;
  private _profile!: Record<string, unknown>;

  /** Reads the configuration file and selects one profile. */
  constructor(options: ConfigOptions = {}) {
    const {
      clientId,
      configFile = `${defaultConfigDir}/${defaultConfigFile}`,
      profile = null,
      profileEnv = PROFILE_ENV,
      tokenEnv = TOKEN_ENV,
      noEnv = false,
      noParentId = false,
      maxRetries = 2,
      endpoint = undefined,
      endpointEnv = ENDPOINT_ENV,
      impersonateServiceAccountId,
    } = options;

    // resolve logger if provided
    this._logger = resolveLogger(options.logger, 'nebius.config');

    this._clientId = clientId;
    this._profileName = profile ?? null;
    this._endpoint = endpoint;

    if (!noEnv) {
      try {
        this._priorityBearer = new EnvBearer(tokenEnv);
        this._logger.debug(`Using token from env`, { tokenEnv });
      } catch (e) {
        if (!(e instanceof NoTokenInEnvError)) throw e;
      }
      if (this._profileName == null) {
        const fromEnv = process.env[profileEnv];
        if (fromEnv !== undefined) {
          this._logger.debug(`Using profile from env`, { profileEnv, profile: fromEnv });
        }
        this._profileName = fromEnv && fromEnv.trim() !== '' ? fromEnv : null;
      }
      if (typeof this._endpoint !== 'string' || this._endpoint.trim() === '') {
        this._endpoint = process.env[endpointEnv] ?? undefined;
      }
    }

    this._noParentId = noParentId;
    this._configFile = resolveHomeDir(configFile);
    this._maxRetries = maxRetries;
    this._impersonateServiceAccountId = impersonateServiceAccountId;
    this._metrics = options.metrics;
    this._authMetrics = options.metrics ?? options.authMetrics;

    const start = metricStart();
    try {
      this._getProfile();
      this._recordConfigLoad(METRIC_RESULT_SUCCESS, metricDurationMs(start));
    } catch (err) {
      this._recordConfigLoad(METRIC_RESULT_ERROR, metricDurationMs(start));
      throw err;
    }
  }

  /** Formats the selected configuration for Node.js inspection. */
  [custom](): string {
    return `Config(profile=${this._profileName}, file=${this._configFile})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      profile: this._profileName,
      configFile: this._configFile,
    };
  }

  /** Returns the configured logger. */
  logger(): SDKLogger {
    return this._logger;
  }

  /**
   * Replaces all metric callbacks.
   *
   * When construction already recorded a config-load result, a newly attached
   * collector receives that result once.
   */
  setMetrics(metrics: MetricsLike): void {
    const configLoadMetric = this._lastConfigLoadMetric;
    const previous = this._metrics;
    this._metrics = metrics;
    this._authMetrics = metrics;
    if (metrics && metrics !== previous && configLoadMetric) {
      recordConfigMetric(
        metrics,
        'configLoad',
        configLoadMetric.source,
        configLoadMetric.result,
        configLoadMetric.durationMs,
      );
    }
  }

  /** Replaces only the authorization metric callbacks. */
  setAuthMetrics(metrics: AuthMetricsLike): void {
    this._authMetrics = metrics;
  }

  private _recordConfigLoad(result: MetricResult, durationMs: number): void {
    this._lastConfigLoadMetric = {
      durationMs,
      result,
      source: 'file',
    };
    recordConfigMetric(this._metrics, 'configLoad', 'file', result, durationMs);
  }

  /**
   * Returns the configured parent resource ID.
   *
   * @throws {@link NoParentIdError} Parent ID use is disabled, missing, or empty.
   * @throws {@link ConfigError} The profile value is not a string.
   */
  parentId(): string | undefined {
    if (this._noParentId) {
      throw new NoParentIdError('Config is set to not use parent id from the profile.');
    }
    if (!('parent-id' in this._profile)) {
      throw new NoParentIdError('Missing parent-id in the profile.');
    }
    const pid = this._profile['parent-id'];
    if (typeof pid !== 'string') {
      throw new ConfigError(`Parent id should be a string, got ${typeof pid}.`);
    }
    if (pid.trim() === '') {
      throw new NoParentIdError('Parent id is empty.');
    }
    return pid;
  }

  /** Returns the selected CLI profile name. */
  profileName(): string | undefined {
    return this._profileName ?? undefined;
  }

  /**
   * Returns the configured service endpoint.
   *
   * An explicit option has priority over the endpoint environment variable.
   * The environment value has priority over the profile value.
   */
  endpoint(): string | undefined {
    if (typeof this._endpoint !== 'string' || this._endpoint.trim() === '') {
      return undefined;
    }
    return this._endpoint;
  }

  /**
   * Creates credentials for the selected source.
   *
   * The order is: environment token, profile token file, then the profile
   * `auth-type`. Supported auth types are federation and service account.
   * When impersonation is set, the returned bearer exchanges these credentials
   * for the target service account.
   *
   * Credential objects normally perform network work when the first SDK
   * request asks for a token. Federation credentials can open a browser at
   * that time.
   *
   * @throws {@link ConfigError} Credential fields are missing or invalid.
   */
  getCredentials(opts: GetCredentialsOptions = {}): Credentials {
    const start = metricStart();
    let source = 'unknown';
    try {
      const resolved = this._resolveCredentials(opts);
      source = resolved.source;
      const credentials = this._addImpersonationIfSet(resolved.credentials, opts);
      recordConfigMetric(
        this._metrics,
        'credentialsResolve',
        source,
        METRIC_RESULT_SUCCESS,
        metricDurationMs(start),
      );
      return credentials;
    } catch (err) {
      source = credentialErrorSource(err) ?? source;
      recordConfigMetric(
        this._metrics,
        'credentialsResolve',
        source,
        METRIC_RESULT_ERROR,
        metricDurationMs(start),
      );
      throw err;
    }
  }

  private _resolveCredentials(opts: GetCredentialsOptions = {}): {
    credentials: Credentials;
    source: string;
  } {
    const logger = opts.logger ?? this._logger;
    if (this._priorityBearer) {
      return {
        credentials: bindAuthMetrics(this._priorityBearer, this._authMetrics),
        source: 'env',
      };
    }

    if ('token-file' in this._profile) {
      const source = 'token-file';
      try {
        logger.debug('Using token-file auth from the profile.', {
          tokenFile: this._profile['token-file'],
        });
        const tf = this._profile['token-file'];
        if (typeof tf !== 'string') {
          throw new ConfigError(`Token file should be a string, got ${typeof tf}.`);
        }
        return { credentials: new FileBearer(tf, this._authMetrics), source };
      } catch (err) {
        tagCredentialSource(source, err);
      }
    }

    if (!('auth-type' in this._profile)) {
      throw new ConfigError('Missing auth-type in the profile.');
    }
    const authType = this._profile['auth-type'];

    if (authType === 'federation') {
      const source = 'federation';
      try {
        if (!('federation-endpoint' in this._profile)) {
          throw new ConfigError('Missing federation-endpoint in the profile.');
        }
        const endpoint = this._profile['federation-endpoint'];
        if (typeof endpoint !== 'string') {
          throw new ConfigError(`Federation endpoint should be a string, got ${typeof endpoint}.`);
        }
        if (!('federation-id' in this._profile)) {
          throw new ConfigError('Missing federation-id in the profile.');
        }
        const fedId = this._profile['federation-id'];
        if (typeof fedId !== 'string') {
          throw new ConfigError(`Federation id should be a string, got ${typeof fedId}.`);
        }

        const profileName = this._profileName ?? 'default';
        const { writer, noBrowserOpen, timeoutMs } = opts;

        // Optionally supply TLS roots from SDK (so HTTP federation uses same trust as gRPC)
        let ca: Buffer | string | string[] | undefined;
        interface TlsRootsSource {
          getTlsRootCAs?: () => Buffer | string | string[];
        }
        const sdkMaybe = opts.sdk as unknown as TlsRootsSource | null;
        if (sdkMaybe && typeof sdkMaybe.getTlsRootCAs === 'function') {
          ca = sdkMaybe.getTlsRootCAs();
        }

        if (!this._clientId) {
          throw new ConfigError('Client ID is required for FederationAccountBearer.');
        }
        logger.debug('Using federation auth from the profile.', {
          federationEndpoint: endpoint,
          federationId: fedId,
          profile: profileName,
          noBrowserOpen: !!noBrowserOpen,
        });

        return {
          credentials: new FederationAccountBearer(profileName, this._clientId, endpoint, fedId, {
            writer,
            noBrowserOpen: !!noBrowserOpen,
            timeoutMs,
            maxRetries: this._maxRetries,
            ca,
            metrics: this._authMetrics,
            logger: logger?.sibling('federation_account'),
          }),
          source,
        };
      } catch (err) {
        tagCredentialSource(source, err);
      }
    }

    if (authType === 'service account') {
      const source = 'service-account';
      try {
        // Possible sources (priority):
        // 1) federated-subject-credentials-file-path + service-account-id
        // 2) service-account-credentials-file-path
        // 3) inline private-key with service-account-id + public-key-id
        // 4) private-key-file-path with service-account-id + public-key-id

        // Optional service account id (used by paths 1,3,4)
        let saId: string | null = null;
        if ('service-account-id' in this._profile) {
          const v = this._profile['service-account-id'];
          if (typeof v !== 'string') {
            throw new ConfigError(`Service account should be a string, got ${typeof v}.`);
          }
          saId = v;
        }

        // 1) federated subject credentials file
        if (saId && 'federated-subject-credentials-file-path' in this._profile) {
          const fpath = this._profile['federated-subject-credentials-file-path'];
          if (typeof fpath !== 'string') {
            throw new ConfigError('federated-subject-credentials-file-path should be a string');
          }
          logger.debug('Using federated-subject-credentials-file-path auth from the profile.', {
            federatedSubjectCredentialsFilePath: fpath,
            serviceAccountId: saId,
          });
          return {
            credentials: new FederatedCredentialsBearer(fpath, {
              serviceAccountId: saId,
              sdk: opts.sdk ?? null,
              maxRetries: this._maxRetries,
              metrics: this._authMetrics,
              logger: logger?.sibling('federated_credentials'),
            }),
            source,
          };
        }

        // 2) service account credentials file
        if ('service-account-credentials-file-path' in this._profile) {
          const cpath = this._profile['service-account-credentials-file-path'];
          if (typeof cpath !== 'string') {
            throw new ConfigError('service-account-credentials-file-path should be a string');
          }
          logger.debug('Using service-account-credentials-file-path auth from the profile.', {
            serviceAccountCredentialsFilePath: cpath,
          });
          return {
            credentials: new ServiceAccountBearer(new CredentialsFileReader(cpath), {
              sdk: opts.sdk ?? null,
              maxRetries: this._maxRetries,
              metrics: this._authMetrics,
              logger: logger?.sibling('service_account'),
            }),
            source,
          };
        }

        // For inline/private-key-file paths we need saId and public key id
        if (!saId) {
          throw new ConfigError('Missing service-account-id in the profile.');
        }
        if (!('public-key-id' in this._profile)) {
          throw new ConfigError('Missing public-key-id in the profile.');
        }
        const pkId = this._profile['public-key-id'];
        if (typeof pkId !== 'string') {
          throw new ConfigError(`Public key should be a string, got ${typeof pkId}.`);
        }

        // 3) inline private key
        if ('private-key' in this._profile) {
          const privateKeyPem = this._profile['private-key'];
          if (typeof privateKeyPem !== 'string') {
            throw new ConfigError(`Private key should be a string, got ${typeof privateKeyPem}.`);
          }
          logger.debug('Using inline private-key auth from the profile.', {
            serviceAccountId: saId,
            publicKeyId: pkId,
          });
          return {
            credentials: new ServiceAccountBearer(saId, {
              publicKeyId: pkId,
              privateKeyPem,
              sdk: opts.sdk ?? null,
              maxRetries: this._maxRetries,
              metrics: this._authMetrics,
              logger: logger?.sibling('service_account'),
            }),
            source,
          };
        }

        // 4) private key file path
        if ('private-key-file-path' in this._profile) {
          const ppath = this._profile['private-key-file-path'];
          if (typeof ppath !== 'string') {
            throw new ConfigError('private-key-file-path should be a string');
          }
          logger.debug('Using private-key-file-path auth from the profile.', {
            privateKeyFilePath: ppath,
            serviceAccountId: saId,
            publicKeyId: pkId,
          });
          return {
            credentials: new ServiceAccountBearer(new PkFileReader(ppath, pkId, saId), {
              sdk: opts.sdk ?? null,
              maxRetries: this._maxRetries,
              metrics: this._authMetrics,
              logger: logger?.sibling('service_account'),
            }),
            source,
          };
        }

        // Nothing matched
        throw new ConfigError(
          'Incomplete service account configuration: provide either (service-account-id and federated-subject-credentials-file-path) OR (service-account-credentials-file-path) OR (service-account-id, public-key-id and one of private-key / private-key-file-path)',
        );
      } catch (err) {
        tagCredentialSource(source, err);
      }
    }

    throw new ConfigError(`Unsupported auth-type ${String(authType)} in the profile.`);
  }

  private _addImpersonationIfSet(
    credentials: Credentials,
    opts: GetCredentialsOptions,
  ): Credentials {
    let serviceAccountId = this._impersonateServiceAccountId;
    if (serviceAccountId === undefined) {
      const profileValue = this._profile['impersonate-service-account-id'];
      if (profileValue === undefined || profileValue === null) {
        return credentials;
      }
      if (typeof profileValue !== 'string') {
        throw new ConfigError(
          `Impersonate service account id should be a string, got ${typeof profileValue}.`,
        );
      }
      serviceAccountId = profileValue;
    }
    if (serviceAccountId.trim() === '') {
      return credentials;
    }
    if (!(credentials instanceof Bearer)) {
      throw new ConfigError(
        `Impersonation requires token bearer credentials, got ${typeof credentials}.`,
      );
    }
    return new CachedImpersonatedBearer(serviceAccountId, credentials, opts.sdk ?? null, {
      maxRetries: this._maxRetries,
      metrics: this._authMetrics,
      logger: (opts.logger ?? this._logger)?.sibling('impersonated'),
    });
  }

  private _getProfile(): void {
    // Validate file exists
    if (!existsSync(this._configFile)) {
      throw new Error(`Config file ${this._configFile} not found.`);
    }

    const raw = readFileSync(this._configFile, 'utf8');
    const parsed = parseYAML(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') {
      throw new ConfigError('Invalid config file format.');
    }
    const cfgObj = parsed as Record<string, unknown>;
    const profilesUnknown = cfgObj.profiles as unknown;
    if (profilesUnknown === undefined) {
      throw new ConfigError('No profiles found in the config file.');
    }
    if (
      typeof profilesUnknown !== 'object' ||
      profilesUnknown === null ||
      Array.isArray(profilesUnknown)
    ) {
      throw new ConfigError(`Profiles should be a dictionary, got ${typeof profilesUnknown}.`);
    }
    const profiles = profilesUnknown as Record<string, unknown>;
    if (Object.keys(profiles).length === 0) {
      throw new ConfigError(
        'No profiles found in the config file, setup the nebius CLI profile first.',
      );
    }

    if (this._profileName == null) {
      const def = cfgObj.default as unknown;
      if (def === undefined || def === null) {
        const keys = Object.keys(profiles);
        if (keys.length === 1) {
          this._profileName = keys[0];
        } else {
          throw new ConfigError('No default profile found in the config file.');
        }
      } else {
        this._profileName = String(def as string);
        this._logger.debug('Using default profile from config file.', {
          profile: this._profileName,
        });
      }

      if (this._profileName == null) {
        throw new ConfigError(
          'No profile selected. Either set the profile in the config setup, set the env var NEBIUS_PROFILE or execute `nebius profile activate`.',
        );
      }
    } else {
      this._logger.debug('Using selected profile.', { profile: this._profileName });
    }

    const profile = this._profileName;
    if (typeof profile !== 'string') {
      throw new ConfigError(`Profile name should be a string, got ${typeof profile}.`);
    }
    if (!(profile in profiles)) {
      throw new ConfigError(`Profile ${profile} not found in the config file.`);
    }
    const profVal = profiles[profile];
    if (typeof profVal !== 'object' || profVal === null || Array.isArray(profVal)) {
      throw new ConfigError(`Profile ${profile} should be a dictionary, got ${typeof profVal}.`);
    }
    this._profile = profVal as Record<string, unknown>;

    if (
      (typeof this._endpoint !== 'string' || this._endpoint.trim() === '') &&
      'endpoint' in this._profile
    ) {
      const ep = this._profile['endpoint'];
      if (typeof ep !== 'string') {
        throw new ConfigError(`Endpoint should be a string, got ${typeof ep}.`);
      }
      this._endpoint = ep;
    }
  }
}
