import type { SDKInterface } from '../sdk';

import type { Provider as AuthorizationProvider } from './authorization/provider';
import type { Reader as TokenRequestReader } from './service_account/service_account';
import { Bearer, Token } from './token';

export type Credentials = AuthorizationProvider | Bearer | TokenRequestReader | Token | string;

export interface GetCredentialsOptions {
  writer?: (s: string) => void;
  noBrowserOpen?: boolean;
  timeoutMs?: number;
  sslCtxUnused?: unknown; // placeholder to mirror Python signature
  sdk?: SDKInterface | Promise<SDKInterface> | null;
}

// Optional config reader interface (if provided, can supply endpoint)
export interface ConfigReaderLike {
  endpoint(): string | undefined;
  parentId(): string | undefined;
  // If present, use it to auto-construct credentials similar to Python
  getCredentials(options: GetCredentialsOptions): Credentials;
}
