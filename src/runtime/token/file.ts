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

/**
 * Reads a fixed access token from a text file for every authentication fetch.
 *
 * The file must contain one non-empty line. Leading and trailing whitespace is
 * removed. This bearer does not renew the token, but it sees file changes on
 * later requests.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { FileBearer } from '@nebius/js-sdk/runtime/token/file';
 *
 * const sdk = new SDK({
 *   credentials: new FileBearer('~/.config/my-app/token'),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class FileBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.FileBearer';
  private readonly filePath: string;
  private readonly metrics: AuthMetricsRecorder;

  /** Creates a bearer for `filePath`. A leading `~` resolves to the home directory. */
  constructor(filePath: string, metrics?: AuthMetricsInput) {
    super();
    this.filePath = resolveHomeDir(filePath);
    this.metrics = authMetricsRecorder(metrics, 'file');
  }
  [custom](): string {
    return `FileBearer(filePath=${this.filePath})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: 'FileBearer',
      filePath: this.filePath,
    };
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    return new FileReceiver(this);
  }

  /**
   * Reads and validates the current file contents.
   *
   * Rejects when the file is empty, contains an embedded newline, or cannot be
   * read. The returned token has no known expiration.
   */
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

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
}
