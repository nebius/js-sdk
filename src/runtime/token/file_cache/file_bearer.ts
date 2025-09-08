import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';

import { ThrottledTokenCache } from './throttled_token_cache';

class PureFileCacheReceiver extends Receiver {
  constructor(private readonly cache: ThrottledTokenCache) {
    super();
  }

  protected async _fetch(): Promise<Token> {
    return (await this.cache.get()) ?? Token.empty();
  }

  canRetry(): boolean {
    return false;
  }
}

export class PureFileCacheBearer extends Bearer {
  private readonly _name: string;
  private readonly cache: ThrottledTokenCache;

  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttleMs: number = 5 * 60 * 1000,
  ) {
    super();
    this._name = name;
    this.cache = new ThrottledTokenCache(name, cacheFile, throttleMs);
  }

  get name(): string | undefined {
    return this._name;
  }

  receiver(): Receiver {
    return new PureFileCacheReceiver(this.cache);
  }
}

export { RenewableFileCacheBearer } from './renewable_bearer';
export { AsyncRenewableBearer as AsynchronousRenewableFileCacheBearer } from './async_renewable_bearer';
