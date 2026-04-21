import { Bearer, Token } from './token.js';
import { Logger } from './util/logging.js';

import type { SDKInterface } from '../sdk.js';
import type { Provider as AuthorizationProvider } from './authorization/provider.js';
import type { Reader as TokenRequestReader } from './service_account/service_account.js';

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
}
