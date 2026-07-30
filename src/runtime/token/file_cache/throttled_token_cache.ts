import { inspect } from 'util';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants.js';
import { Token } from '../../token.js';
import { custom, customJson, inspectJson, Logger } from '../../util/logging.js';

import { TokenCache } from './token_cache.js';

/**
 * Adds a short-lived in-memory view to one named {@link TokenCache} entry.
 *
 * Repeated {@link ThrottledTokenCache.get} calls avoid disk access until the
 * throttle interval passes. Call {@link ThrottledTokenCache.refresh} to check
 * the file immediately. When no valid file entry exists,
 * {@link ThrottledTokenCache.refresh} returns `undefined` but keeps the previous
 * in-memory value and its throttle timestamp.
 */
export class ThrottledTokenCache {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.ThrottledTokenCache';
  private readonly name: string;
  private readonly cache: TokenCache;
  private readonly throttleMs: number;
  private cachedToken: Token | undefined;
  private nextCheckTs = 0;

  /**
   * Creates a cache view for `name`.
   *
   * @param throttle Sets the minimum interval between file checks, in
   * milliseconds. The default is 300,000 milliseconds (five minutes).
   */
  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttle: number = 5 * 60 * 1000,
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
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      name: this.name,
      cache: inspectJson(this.cache),
      throttleMs: this.throttleMs,
    };
  }

  /** Returns the current in-memory value without reading the cache file. */
  getCached(): Token | undefined {
    return this.cachedToken;
  }

  /** Returns a valid token and reads the file only when the memory view is stale. */
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

  /** Stores a token in the file and in-memory caches. */
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

  /** Removes the token from the file and in-memory caches. */
  async remove(): Promise<void> {
    this.logger?.trace('Removing token from cache');
    await this.cache.remove(this.name);
    this.cachedToken = undefined;
    this.nextCheckTs = 0;
  }

  /** Removes the cached token if it equals the specified token. */
  async removeIfEqual(token: Token): Promise<boolean> {
    this.logger?.trace('Conditionally removing token from cache', { token });
    const isRemoved = await this.cache.removeIfEqual(this.name, token);
    if (this.cachedToken && this.cachedToken.equals(token)) {
      this.cachedToken = undefined;
      this.nextCheckTs = 0;
    }
    return isRemoved;
  }

  /**
   * Reads the cache file immediately and returns its current valid token.
   *
   * A valid file token replaces the in-memory value and restarts the throttle
   * interval. An absent or expired file token returns `undefined` without
   * clearing the previous in-memory value or throttle timestamp.
   */
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
