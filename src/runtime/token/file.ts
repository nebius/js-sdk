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
  private readonly metrics: AuthMetricsRecorder;

  constructor(filePath: string, metrics?: AuthMetricsInput) {
    super();
    this.filePath = resolveHomeDir(filePath);
    this.metrics = authMetricsRecorder(metrics, 'file');
  }
  [custom](): string {
    return `FileBearer(filePath=${this.filePath})`;
  }
  [customJson](): unknown {
    return {
      type: 'FileBearer',
      filePath: this.filePath,
    };
  }

  receiver(): Receiver {
    return new FileReceiver(this);
  }

  async fetchToken(): Promise<Token> {
    const start = metricStart();
    try {
      const content = (await readFile(this.filePath, 'utf8')).trim();
      if (content === '') throw new Error('empty token file provided');
      if (content.includes('\n')) {
        throw new Error(`invalid token file: ${this.filePath} contains newline`);
      }
      const token = new Token(content);
      this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), 0);
      this.metrics.tokenLifetime(token);
      return token;
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), 0);
      throw err;
    }
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
}
