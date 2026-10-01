/**
 * Acquires tokens from a Nebius-compatible HTTP metadata endpoint.
 *
 * @packageDocumentation
 */

import { status } from '@grpc/grpc-js';

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

import type { AuthorizationOptions } from '../authorization/provider.js';

/** Configures token acquisition from a Nebius-compatible HTTP metadata endpoint. */
export interface IMDSOptions {
  /** Sets the HTTP attempt count. The default is three. */
  maxAttempts?: number;
  /** Sets linear retry backoff in milliseconds. The default is 200. */
  baseBackoffMs?: number;
  /** Supplies an HTTP implementation. */
  fetch?: typeof globalThis.fetch;
  /** Receives authorization metrics. */
  metrics?: AuthMetricsInput;
}

class IMDSReceiver extends Receiver {
  readonly $type = 'nebius.sdk.IMDSReceiver';
  private retried = false;
  private recovered?: Token;
  constructor(private readonly parent: IMDSBearer) {
    super();
  }
  protected async _fetch(timeoutMs?: number): Promise<Token> {
    if (this.recovered) {
      const token = this.recovered;
      this.recovered = undefined;
      return token;
    }
    return this.parent.fetchToken(timeoutMs);
  }
  async handleError(
    err: unknown,
    _options?: AuthorizationOptions,
    timeoutMs?: number,
  ): Promise<boolean> {
    if (!this.canRetry(err)) return false;
    const current = await this.parent.fetchToken(timeoutMs).catch((recoveryError: unknown) => {
      throw new AggregateError([recoveryError, err], 'Credential recovery failed.');
    });
    this.recovered = current;
    return this.latest !== undefined && current.token !== this.latest.token;
  }
  canRetry(err: unknown, _options?: AuthorizationOptions): boolean {
    if (this.retried || (err as { code?: number })?.code !== status.UNAUTHENTICATED) return false;
    this.retried = true;
    return true;
  }
}

/** Reads access_token and expires_at from an HTTP token endpoint for each acquisition. */
export class IMDSBearer extends Bearer {
  readonly $type = 'nebius.sdk.IMDSBearer';
  private readonly metrics: AuthMetricsRecorder;
  private readonly fetcher: typeof globalThis.fetch;
  private readonly maxAttempts: number;
  private readonly backoffMs: number;
  /**
   * Creates an HTTP metadata token source.
   * Throws if the endpoint is not a valid HTTP(S) URL or the retry options are invalid.
   */
  constructor(
    private readonly endpoint: string,
    options: IMDSOptions = {},
  ) {
    super();
    const url = new URL(endpoint);
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error('Token endpoint must use HTTP or HTTPS.');
    }
    this.maxAttempts = options.maxAttempts ?? 3;
    this.backoffMs = options.baseBackoffMs ?? 200;
    if (!Number.isInteger(this.maxAttempts) || this.maxAttempts < 1) {
      throw new RangeError('IMDS attempts must be positive.');
    }
    if (!Number.isFinite(this.backoffMs) || this.backoffMs < 0) {
      throw new RangeError('IMDS backoff must be finite and non-negative.');
    }
    this.fetcher = options.fetch ?? globalThis.fetch;
    this.metrics = authMetricsRecorder(options.metrics, 'imds');
  }
  get metricProvider(): string {
    return 'imds';
  }
  [custom](): string {
    return `IMDSBearer(endpoint=${this.endpoint})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return { type: this.$type, endpoint: this.endpoint };
  }
  /** Sets the authorization metrics sink. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }
  receiver(): Receiver {
    return new IMDSReceiver(this);
  }

  /** Fetches a token. Retries HTTP 429 and 5xx responses within one timeout budget. */
  async fetchToken(timeoutMs?: number): Promise<Token> {
    const start = metricStart();
    const controller = new AbortController();
    const timer =
      timeoutMs === undefined
        ? undefined
        : setTimeout(() => controller.abort(), Math.max(0, timeoutMs));
    let attempt = 0;
    try {
      for (attempt = 1; attempt <= this.maxAttempts; attempt++) {
        const response = await this.fetcher(this.endpoint, {
          headers: { Metadata: 'true' },
          signal: controller.signal,
        });
        if (response.status === 200) {
          const data: unknown = await response.json();
          const value = data as { access_token?: unknown; expires_at?: unknown };
          if (typeof value?.access_token !== 'string' || !value.access_token.trim()) {
            throw new Error('IMDS response has no access token.');
          }
          const expiration =
            typeof value.expires_at === 'string' ? new Date(value.expires_at) : undefined;
          if (expiration && !Number.isFinite(expiration.getTime())) {
            throw new Error('IMDS expiration is invalid.');
          }
          const token = new Token(value.access_token, expiration);
          this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), attempt);
          this.metrics.tokenLifetime(token);
          return token;
        }
        if (attempt < this.maxAttempts && (response.status === 429 || response.status >= 500)) {
          await response.body?.cancel();
          await new Promise<void>((resolve, reject) => {
            const abort = () => {
              clearTimeout(delay);
              reject(controller.signal.reason);
            };
            const delay = setTimeout(() => {
              controller.signal.removeEventListener('abort', abort);
              resolve();
            }, this.backoffMs * attempt);
            controller.signal.addEventListener('abort', abort, { once: true });
            if (controller.signal.aborted) abort();
          });
          controller.signal.throwIfAborted();
          continue;
        }
        // Bound diagnostic data. Never include a response body in credential logs.
        await response.body?.cancel();
        throw new Error(`IMDS token request failed: HTTP ${response.status}.`);
      }
      throw new Error('IMDS token acquisition failed.');
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), attempt);
      throw err;
    } finally {
      if (timer !== undefined) clearTimeout(timer);
    }
  }
}
