import { inspect } from 'util';

import { custom, customJson, inspectJson } from '../util/logging.js';

import type { Reader } from './service_account.js';

/**
 * Reads another service-account reader once and reuses the result.
 *
 * Use this wrapper when the source is expensive and credentials do not rotate
 * while the process runs. Do not use it when later file changes must take
 * effect.
 */
export class CachedReader implements Reader {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.CachedReader';
  private _cache?: ReturnType<Reader['read']>;
  /** Creates a lazy cache. The wrapped reader is not called until first use. */
  constructor(private readonly next: Reader) {}
  /** Returns the first successful read for the lifetime of this wrapper. */
  read() {
    if (!this._cache) {
      this._cache = this.next.read();
    }
    return this._cache;
  }

  [custom](): string {
    return `Cached(${inspect(this.next)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      next: inspectJson(this.next),
    };
  }
  /** Returns the exchange token request. */
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
