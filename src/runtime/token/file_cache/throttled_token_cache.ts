import { Token } from '../../token';
import { TokenCache } from './token_cache';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';

export class ThrottledTokenCache {
  private readonly name: string;
  private readonly cache: TokenCache;
  private readonly throttleMs: number;
  private cachedToken: Token | undefined;
  private nextCheckTs = 0;

  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttle: number = 5 * 60 * 1000, // 5 minutes in ms
  ) {
    this.name = name;
    this.cache = new TokenCache({ cacheFile });
    this.throttleMs = throttle;
  }

  getCached(): Token | undefined {
    return this.cachedToken;
  }

  async get(): Promise<Token | undefined> {
    const now = Date.now();
    if (this.cachedToken && !this.cachedToken.isExpired() && this.nextCheckTs > now) {
      return this.cachedToken;
    }
    return this.refresh();
  }

  async set(token: Token): Promise<void> {
    if (this.cachedToken && this.cachedToken.equals(token)) return;
    await this.cache.set(this.name, token);
    this.cachedToken = token;
    this.nextCheckTs = Date.now() + this.throttleMs;
  }

  async remove(): Promise<void> {
    await this.cache.remove(this.name);
    this.cachedToken = undefined;
    this.nextCheckTs = 0;
  }

  async removeIfEqual(token: Token): Promise<void> {
    await this.cache.removeIfEqual(this.name, token);
    if (this.cachedToken && this.cachedToken.equals(token)) {
      this.cachedToken = undefined;
      this.nextCheckTs = 0;
    }
  }

  async refresh(): Promise<Token | undefined> {
    const tok = await this.cache.get(this.name);
    if (tok && !tok.isExpired()) {
      this.cachedToken = tok;
      this.nextCheckTs = Date.now() + this.throttleMs;
      return tok;
    }
    return undefined;
  }
}
