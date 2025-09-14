import { inspect } from 'util';

import { custom, customJson, inspectJson } from '../util/logging';

import type { Reader } from './service_account';

export class CachedReader implements Reader {
  public readonly $type = 'nebius.sdk.CachedReader';
  private _cache?: ReturnType<Reader['read']>;
  constructor(private readonly next: Reader) {}
  read() {
    if (!this._cache) {
      this._cache = this.next.read();
    }
    return this._cache;
  }

  [custom](): string {
    return `Cached(${inspect(this.next)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      next: inspectJson(this.next),
    };
  }
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
