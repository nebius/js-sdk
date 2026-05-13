import { inspect } from 'util';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants.js';
import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
} from '../../metrics.js';
import { Bearer, Receiver, Token } from '../../token.js';
import { custom, customJson, inspectJson, Logger } from '../../util/logging.js';
import { ThrottledTokenCache } from './throttled_token_cache.js';

class PureFileCacheReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.PureFileCacheReceiver';
  constructor(
    private readonly cache: ThrottledTokenCache,
    private readonly metrics: AuthMetricsRecorder,
  ) {
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
    let token: Token | undefined;
    try {
      token = await this.cache.get();
    } catch (err) {
      this.metrics.cacheMiss(METRIC_RESULT_ERROR);
      throw err;
    }
    if (token && !token.isExpired() && !token.isEmpty()) {
      this.metrics.cacheHit();
      return token;
    }
    this.metrics.cacheMiss(METRIC_RESULT_SUCCESS);
    return token ?? Token.empty();
  }

  canRetry(): boolean {
    return false;
  }
}

export class PureFileCacheBearer extends Bearer {
  public readonly $type = 'nebius.sdk.PureFileCacheBearer';
  private readonly _name: string;
  private readonly cache: ThrottledTokenCache;
  private readonly metrics: AuthMetricsRecorder;

  constructor(
    name: string,
    cacheFile: string = `${defaultConfigDir}/${defaultCredentialsFile}`,
    throttleMs: number = 5 * 60 * 1000,
    private logger?: Logger,
    metrics?: AuthMetricsInput,
    provider?: string,
  ) {
    super();
    this._name = name;
    this.metrics = authMetricsRecorder(metrics, provider ?? 'file-cache');
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
    return new PureFileCacheReceiver(this.cache, this.metrics);
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
}

export { AsyncRenewableBearer as AsynchronousRenewableFileCacheBearer } from './async_renewable_bearer.js';
export { RenewableFileCacheBearer } from './renewable_bearer.js';
