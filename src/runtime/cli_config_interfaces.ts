import type { SDKInterface } from '../sdk.js';
import type { Provider as AuthorizationProvider } from './authorization/provider.js';
import type { AuthMetricsLike, MetricsLike } from './metrics.js';
import type { Reader as TokenRequestReader } from './service_account/service_account.js';
import type { Bearer, Token } from './token.js';
import type { Logger } from './util/logging.js';

/**
 * Defines a credential value returned by a configuration reader.
 *
 * Bearers and authorization providers can renew credentials. A string is
 * treated as a static access token by the SDK.
 */
export type Credentials = AuthorizationProvider | Bearer | TokenRequestReader | Token | string;

/**
 * Gives a configuration reader the runtime context needed to create credentials.
 *
 * Custom readers can ignore options that do not apply to their credential
 * type.
 */
export interface GetCredentialsOptions {
  /** Receives federation sign-in instructions for the user. */
  writer?: (s: string) => void;
  /** Specifies whether to prevent the automatic browser launch. */
  noBrowserOpen?: boolean;
  /** Sets the credential timeout in milliseconds. */
  timeoutMs?: number;
  /** Preserves compatibility with the Python SDK. This option is not used. */
  sslCtxUnused?: unknown;
  /**
   * Supplies the SDK used for token exchange and shared TLS roots.
   *
   * A reader must support `null`. Some callers can supply a promise while SDK
   * initialization is still in progress.
   */
  sdk?: SDKInterface | Promise<SDKInterface> | null;
  /** Supplies a child logger for credential activity. */
  logger?: Logger;
}

/**
 * Defines configuration values that an SDK configuration reader supplies.
 *
 * Implement this interface to load configuration from a source other than the
 * Nebius CLI file. Keep methods free of unrelated side effects because the SDK
 * calls them during construction. The SDK catches errors from
 * {@link ConfigReaderLike.parentId}, but errors from other methods can affect
 * initialization.
 *
 * @example
 * ```ts
 * const reader: ConfigReaderLike = {
 *   endpoint: () => 'api.nebius.cloud:443',
 *   parentId: () => 'project-e00example',
 *   profileName: () => 'application',
 *   getCredentials: () => {
 *     const token = process.env.NEBIUS_IAM_TOKEN;
 *     if (!token?.trim()) throw new Error('NEBIUS_IAM_TOKEN is required');
 *     return token;
 *   },
 * };
 * ```
 */
export interface ConfigReaderLike {
  /** Returns the configured service endpoint. */
  endpoint(): string | undefined;
  /** Returns the configured parent resource ID. */
  parentId(): string | undefined;
  /** Returns the selected CLI profile name. */
  profileName(): string | undefined;
  /**
   * Returns credentials for SDK authorization.
   *
   * Do not return an empty string to represent valid credentials.
   */
  getCredentials(options: GetCredentialsOptions): Credentials;
  /**
   * Shows whether the reader reports `credentialsResolve` metrics.
   *
   * The SDK reports a fallback metric around
   * {@link ConfigReaderLike.getCredentials} when this value is not `true`.
   */
  emitsCredentialsResolveMetrics?: boolean;
  /** Receives all SDK metric callbacks when the reader supports them. */
  setMetrics?(metrics: MetricsLike): void;
  /** Receives authorization-only metric callbacks when full metrics are absent. */
  setAuthMetrics?(metrics: AuthMetricsLike): void;
}
