import type { Reader } from './service_account';

export class CachedReader implements Reader {
  private _cache?: ReturnType<Reader['read']>;
  constructor(private readonly next: Reader) {}
  read() {
    if (!this._cache) {
      this._cache = this.next.read();
    }
    return this._cache;
  }
  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
