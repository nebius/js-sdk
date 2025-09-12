import { inspect } from 'util';

import type { AuthorizationOptions } from '../../authorization/provider';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';
import { custom, customJson, inspectJson, Logger } from '../../util/logging';

import { ThrottledTokenCache } from './throttled_token_cache';

// RenewableFileCacheBearer: fetches from cache first; if stale or near expiry, pulls from wrapped bearer
// and stores back.
class RenewableFileCacheReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.RenewableFileCacheReceiver';
  private receiver?: Receiver;
  private lastSaved?: Token;
  private fromCache = true;

  constructor(
    private readonly bearer: RenewableFileCacheBearer,
    private readonly cache: ThrottledTokenCache,
    private logger?: Logger,
  ) {
    super();
  }

  [custom](): string {
    return `${this.$type}(bearer=${inspect(this.bearer)}, fromCache=${this.fromCache}, token=${inspect(this.lastSaved)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      bearer: inspectJson(this.bearer),
      fromCache: this.fromCache,
      token: inspectJson(this.lastSaved),
    };
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    let token: Token | undefined;
    if (this.fromCache) {
      this.logger?.trace('Fetching token from cache');
      token = await this.cache.get();
    } else {
      this.logger?.trace('Refreshing token from file cache as refresh requested');
      token = await this.cache.refresh();
      if (this.lastSaved && token && this.lastSaved.equals(token)) {
        this.logger?.debug('Token in file cache is same as last saved, need renewal');
        token = undefined; // avoid reusing the same token on error
      }
    }

    if (token && !token.isExpired()) {
      const margin = this.bearer.safetyMargin;
      if (margin == null || !token.expiration || token.expiration.getTime() - margin > Date.now()) {
        this.logger?.trace('Using token from cache', { token });
        this.fromCache = true;
        this.lastSaved = token;
        return token;
      }
      this.logger?.debug('Token from cache is expired or outside safety margin, needs renewal', {
        token,
        margin,
      });
    }

    this.fromCache = false;
    const wrapped = this.bearer.wrapped;
    if (!wrapped) {
      this.logger?.debug('Fresh token source is not available, returning empty token');
      return Token.empty();
    }
    if (!this.receiver) this.receiver = wrapped.receiver();
    this.logger?.trace('Fetching fresh token from wrapped bearer', { wrapped });
    const fresh = await this.receiver.fetch(timeoutMs);
    if (fresh.isEmpty()) {
      this.logger?.debug('Wrapped bearer returned empty token, not updating cache');
      this.lastSaved = undefined;
      return fresh;
    }
    this.logger?.trace('Storing fresh token to cache', { token: fresh });
    await this.cache.set(fresh);
    this.lastSaved = fresh;
    this.logger?.debug('Fetched fresh token', { token: fresh });
    return fresh;
  }

  canRetry(err: unknown): boolean {
    this.logger?.trace('Checking if can retry', { err });
    if (this.fromCache) {
      this.logger?.debug('Error occurred while using cached token, will try refreshing', { err });
      this.fromCache = false;
      return true;
    }
    if (!this.receiver) {
      this.logger?.debug(
        'No refresh trials were attempted with wrapped bearer, will try fetching fresh token',
        { err },
      );
      return true;
    }
    this.logger?.debug('Delegating canRetry check to wrapped bearer receiver', { err });
    return this.receiver.canRetry(err);
  }
}

export class RenewableFileCacheBearer extends Bearer {
  public readonly $type = 'nebius.sdk.RenewableFileCacheBearer';
  private readonly _cache: ThrottledTokenCache;
  public safetyMargin: number | null; // in ms

  constructor(
    private readonly _wrapped: Bearer,
    safetyMarginMs: number = 2 * 60 * 60 * 1000,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttleMs: number = 5 * 60 * 1000,
    private logger?: Logger,
  ) {
    super();
    this.safetyMargin = safetyMarginMs;
    const name = _wrapped.name;
    if (!name) throw new Error('Bearer must have a name for the cache.');
    this._cache = new ThrottledTokenCache(
      name,
      cacheFile,
      throttleMs,
      this.logger?.child('token_cache'),
    );
    this.logger = this.logger?.withFields({ name, cacheFile, throttleMs }) ?? undefined;
  }

  [custom](): string {
    return `${this.$type}(source=${inspect(this._wrapped)}, cache=${inspect(this._cache)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      source: inspectJson(this._wrapped),
      cache: inspectJson(this._cache),
      safetyMargin: this.safetyMargin,
    };
  }

  get wrapped(): Bearer | undefined {
    return this._wrapped;
  }

  receiver(): Receiver {
    return new RenewableFileCacheReceiver(this, this._cache, this.logger);
  }
}
