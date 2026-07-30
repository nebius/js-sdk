import { inspect } from 'util';

import { custom, customJson, inspectJson } from '../util/logging.js';
import { type Reader, ServiceAccount } from './service_account.js';

/**
 * Returns one in-memory {@link ServiceAccount} value.
 *
 * Use this adapter when an API requires a {@link Reader} but credentials
 * already exist in memory.
 */
export class StaticReader implements Reader {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.StaticReader';
  /** Creates a new static reader. */
  constructor(private readonly sa: ServiceAccount) {}
  [custom](): string {
    return `Static(${inspect(this.sa)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      serviceAccount: inspectJson(this.sa),
    };
  }
  /** Returns the configured service-account credentials. */
  read(): ServiceAccount {
    return this.sa;
  }
  /** Returns the exchange token request. */
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
