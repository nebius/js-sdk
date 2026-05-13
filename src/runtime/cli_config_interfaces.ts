import type { SDKInterface } from '../sdk.js';
import type { Provider as AuthorizationProvider } from './authorization/provider.js';
import type { AuthMetricsLike, MetricsLike } from './metrics.js';
import type { Reader as TokenRequestReader } from './service_account/service_account.js';
import type { Bearer, Token } from './token.js';
import type { Logger } from './util/logging.js';

export type Credentials = AuthorizationProvider | Bearer | TokenRequestReader | Token | string;

export interface GetCredentialsOptions {
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
  sslCtxUnused?: unknown; // placeholder to mirror Python signature
  sdk?: SDKInterface | Promise<SDKInterface> | null;
  logger?: Logger;
}

// Optional config reader interface (if provided, can supply endpoint)
export interface ConfigReaderLike {
  endpoint(): string | undefined;
  parentId(): string | undefined;
  profileName(): string | undefined;
  // If present, use it to auto-construct credentials similar to Python
  getCredentials(options: GetCredentialsOptions): Credentials;
  /**
   * True when this reader emits its own credentialsResolve metrics after
   * setMetrics(). If not set, SDK records a generic config-reader fallback
   * metric around getCredentials().
   */
  emitsCredentialsResolveMetrics?: boolean;
  setMetrics?(metrics: MetricsLike): void;
  setAuthMetrics?(metrics: AuthMetricsLike): void;
}
