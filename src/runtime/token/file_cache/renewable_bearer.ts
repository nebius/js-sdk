import type { AuthorizationOptions } from '../../authorization/provider';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';

import { ThrottledTokenCache } from './throttled_token_cache';

// RenewableFileCacheBearer: fetches from cache first; if stale or near expiry, pulls from wrapped bearer
// and stores back.
class RenewableFileCacheReceiver extends Receiver {
  private receiver?: Receiver;
  private lastSaved?: Token;
  private fromCache = true;

  constructor(
    private readonly bearer: RenewableFileCacheBearer,
    private readonly cache: ThrottledTokenCache,
  ) {
    super();
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    let token: Token | undefined;
    if (this.fromCache) {
      token = await this.cache.get();
    } else {
      token = await this.cache.refresh();
      if (this.lastSaved && token && this.lastSaved.equals(token)) {
        token = undefined; // avoid reusing the same token on error
      }
    }

    if (token && !token.isExpired()) {
      const margin = this.bearer.safetyMargin;
      if (margin == null || !token.expiration || token.expiration.getTime() - margin > Date.now()) {
        this.fromCache = true;
        this.lastSaved = token;
        return token;
      }
    }

    this.fromCache = false;
    const wrapped = this.bearer.wrapped;
    if (!wrapped) return Token.empty();
    if (!this.receiver) this.receiver = wrapped.receiver();
    const fresh = await this.receiver.fetch(timeoutMs);
    if (fresh.isEmpty()) {
      this.lastSaved = undefined;
      return fresh;
    }
    await this.cache.set(fresh);
    this.lastSaved = fresh;
    return fresh;
  }

  canRetry(err: unknown): boolean {
    if (this.fromCache) {
      this.fromCache = false;
      return true;
    }
    if (!this.receiver) return true;
    return this.receiver.canRetry(err);
  }
}

export class RenewableFileCacheBearer extends Bearer {
  private readonly _cache: ThrottledTokenCache;
  public safetyMargin: number | null; // in ms

  constructor(
    private readonly _wrapped: Bearer,
    safetyMarginMs: number = 2 * 60 * 60 * 1000,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttleMs: number = 5 * 60 * 1000,
  ) {
    super();
    this.safetyMargin = safetyMarginMs;
    const name = _wrapped.name;
    if (!name) throw new Error('Bearer must have a name for the cache.');
    this._cache = new ThrottledTokenCache(name, cacheFile, throttleMs);
  }

  get wrapped(): Bearer | undefined {
    return this._wrapped;
  }

  receiver(): Receiver {
    return new RenewableFileCacheReceiver(this, this._cache);
  }
}
