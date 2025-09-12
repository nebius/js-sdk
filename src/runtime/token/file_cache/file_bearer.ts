import { inspect } from 'util';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';
import { custom, customJson, inspectJson, Logger } from '../../util/logging';

import { ThrottledTokenCache } from './throttled_token_cache';

class PureFileCacheReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.PureFileCacheReceiver';
  constructor(private readonly cache: ThrottledTokenCache) {
    super();
  }
  [custom](): string {
    return `${this.$type}(cache=${inspect(this.cache)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      cache: inspectJson(this.cache),
    };
  }

  protected async _fetch(): Promise<Token> {
    return (await this.cache.get()) ?? Token.empty();
  }

  canRetry(): boolean {
    return false;
  }
}

export class PureFileCacheBearer extends Bearer {
  public readonly $type = 'nebius.sdk.PureFileCacheBearer';
  private readonly _name: string;
  private readonly cache: ThrottledTokenCache;

  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttleMs: number = 5 * 60 * 1000,
    private logger?: Logger,
  ) {
    super();
    this._name = name;
    this.cache = new ThrottledTokenCache(
      name,
      cacheFile,
      throttleMs,
      this.logger?.child('token_cache'),
    );
  }
  [custom](): string {
    return `${this.$type}(name=${this._name}, cache=${inspect(this.cache)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      name: this._name,
      cache: inspectJson(this.cache),
    };
  }

  get name(): string | undefined {
    return this._name;
  }

  receiver(): Receiver {
    return new PureFileCacheReceiver(this.cache);
  }
}

export { AsyncRenewableBearer as AsynchronousRenewableFileCacheBearer } from './async_renewable_bearer';
export { RenewableFileCacheBearer } from './renewable_bearer';
