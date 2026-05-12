import { readFile } from 'fs/promises';

import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  metricStart,
} from '../metrics.js';
import { Bearer, Receiver, Token } from '../token.js';
import { custom, customJson } from '../util/logging.js';
import { resolveHomeDir } from '../util/path.js';

import type { AuthorizationOptions } from '../authorization/provider.js';

class FileReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.FileReceiver';
  constructor(private readonly bearer: FileBearer) {
    super();
  }
  [custom](): string {
    return `FileReceiver(bearer=${this.bearer})`;
  }
  [customJson](): unknown {
    return {
      type: 'FileReceiver',
      bearer: this.bearer[customJson](),
    };
  }

  protected async _fetch(
    _timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    return this.bearer.fetchToken();
  }

  canRetry(): boolean {
    return false;
  }
}

export class FileBearer extends Bearer {
  public readonly $type = 'nebius.sdk.FileBearer';
  private readonly filePath: string;
  private readonly refreshPeriodMs: number;
  private readonly metrics: AuthMetricsRecorder;
  private cachedToken: Token | undefined;
  private refreshAt = 0;

  constructor(
    filePath: string,
    refreshPeriodMs: number = 5 * 60 * 1000,
    metrics?: AuthMetricsInput,
  ) {
    super();
    this.filePath = resolveHomeDir(filePath);
    this.refreshPeriodMs = refreshPeriodMs;
    this.metrics = authMetricsRecorder(metrics, 'file');
  }
  [custom](): string {
    return `FileBearer(filePath=${this.filePath})`;
  }
  [customJson](): unknown {
    return {
      type: 'FileBearer',
      filePath: this.filePath,
      refreshPeriodMs: this.refreshPeriodMs,
    };
  }

  receiver(): Receiver {
    return new FileReceiver(this);
  }

  async fetchToken(): Promise<Token> {
    const now = Date.now();
    if (
      this.cachedToken &&
      !this.cachedToken.isEmpty() &&
      (this.refreshPeriodMs === 0 || now < this.refreshAt)
    ) {
      this.metrics.cacheHit();
      return this.cachedToken;
    }

    const start = metricStart();
    try {
      const content = (await readFile(this.filePath, 'utf8')).trim();
      if (content === '') throw new Error('empty token file provided');
      if (content.includes('\n')) {
        throw new Error(`invalid token file: ${this.filePath} contains newline`);
      }
      const token = new Token(content);
      this.cachedToken = token;
      this.refreshAt = Date.now() + this.refreshPeriodMs;
      this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), 0);
      this.metrics.tokenLifetime(token);
      this.metrics.cacheMiss(METRIC_RESULT_SUCCESS);
      return token;
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), 0);
      this.metrics.cacheMiss(METRIC_RESULT_ERROR);
      throw err;
    }
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
}
