import { inspect } from 'util';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Token } from '../../token';
import { custom, customJson, inspectJson, Logger } from '../../util/logging';

import { TokenCache } from './token_cache';

export class ThrottledTokenCache {
  public readonly $type = 'nebius.sdk.ThrottledTokenCache';
  private readonly name: string;
  private readonly cache: TokenCache;
  private readonly throttleMs: number;
  private cachedToken: Token | undefined;
  private nextCheckTs = 0;

  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttle: number = 5 * 60 * 1000, // 5 minutes in ms
    private logger?: Logger,
  ) {
    this.name = name;
    this.cache = new TokenCache({ cacheFile, logger: this.logger?.child('token_cache') });
    this.throttleMs = throttle;
    this.logger = this.logger?.withFields({ name, cacheFile, throttleMs: throttle }) ?? undefined;
  }
  [custom](): string {
    return `${this.$type}(name=${this.name}, cache=${inspect(this.cache)}, throttleMs=${this.throttleMs})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      name: this.name,
      cache: inspectJson(this.cache),
      throttleMs: this.throttleMs,
    };
  }

  getCached(): Token | undefined {
    return this.cachedToken;
  }

  async get(): Promise<Token | undefined> {
    const now = Date.now();
    if (this.cachedToken && !this.cachedToken.isExpired() && this.nextCheckTs > now) {
      this.logger?.trace('Returning cached token', {
        token: this.cachedToken,
        nextCheckTs: this.nextCheckTs,
        now,
      });
      return this.cachedToken;
    }
    this.logger?.trace('Token stale or missing, refreshing from file');
    return this.refresh();
  }

  async set(token: Token): Promise<void> {
    this.logger?.trace('Setting new token in cache', { token });
    if (this.cachedToken && this.cachedToken.equals(token)) {
      this.logger?.trace('Token is identical to cached token, not updating');
      return;
    }
    await this.cache.set(this.name, token);
    this.cachedToken = token;
    this.nextCheckTs = Date.now() + this.throttleMs;
  }

  async remove(): Promise<void> {
    this.logger?.trace('Removing token from cache');
    await this.cache.remove(this.name);
    this.cachedToken = undefined;
    this.nextCheckTs = 0;
  }

  async removeIfEqual(token: Token): Promise<boolean> {
    this.logger?.trace('Conditionally removing token from cache', { token });
    const isRemoved = await this.cache.removeIfEqual(this.name, token);
    if (this.cachedToken && this.cachedToken.equals(token)) {
      this.cachedToken = undefined;
      this.nextCheckTs = 0;
    }
    return isRemoved;
  }

  async refresh(): Promise<Token | undefined> {
    this.logger?.trace('Refreshing token from cache file');
    const tok = await this.cache.get(this.name);
    if (tok && !tok.isExpired()) {
      this.logger?.trace('Token is valid and not expired', { token: tok });
      this.cachedToken = tok;
      this.nextCheckTs = Date.now() + this.throttleMs;
      return tok;
    }
    return undefined;
  }
}
