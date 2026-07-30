import { inspect } from 'util';

import {
  authMetricProvider,
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  bindAuthMetrics,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  metricStart,
} from '../metrics.js';
import { Bearer, Receiver, Token } from '../token.js';
import { withTimeout } from '../util/cancelable.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';

import type { AuthorizationOptions } from '../authorization/provider.js';

/** Reports that a renewable bearer could not provide a valid access token. */
export class RenewalError extends Error {
  /** Creates a new renewal error. */
  constructor(message: string) {
    super(message);
    this.name = 'RenewalError';
  }
}

type Waiter = { resolve: (t: Token) => void; reject: (e: unknown) => void };

class RenewableReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.RenewableReceiver';
  private trial = 0;
  constructor(
    private readonly parent: RenewableBearer,
    private readonly defaultMaxRetries: number = 2,
    private readonly logger?: Logger,
  ) {
    super();
  }

  [custom](): string {
    return `${this.$type}(parent=${inspect(this.parent)}, trial=${this.trial})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      parent: inspectJson(this.parent),
      trial: this.trial,
      defaultMaxRetries: this.defaultMaxRetries,
    };
  }

  protected async _fetch(timeoutMs?: number, options?: AuthorizationOptions): Promise<Token> {
    this.trial += 1;
    this.logger?.trace('_fetch', { trial: this.trial, timeoutMs, options });
    return this.parent.fetch(timeoutMs, options);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    const synchronous = Boolean(options?.renewSynchronous);
    if (this.trial >= maxRetries) {
      this.logger?.debug('canRetry -> false (max retries reached)', {
        trial: this.trial,
        maxRetries,
      });
      return false;
    }

    // Non-blocking renewal request for async path
    if (!synchronous) this.parent.requestRenewal(true);
    this.logger?.trace('canRetry -> true', { trial: this.trial, maxRetries, synchronous });
    return true;
  }
}

/**
 * Keeps an access token in memory and renews it through another bearer.
 *
 * Concurrent callers share one in-flight renewal. A successful fetch schedules
 * background renewal before expiration. A failed background renewal uses
 * jittered exponential backoff, while a still-valid cached token can continue
 * to serve requests.
 *
 * The timer does not keep Node.js running. Call {@link RenewableBearer.close}
 * during orderly shutdown to reject waiters and close the wrapped source.
 */
export class RenewableBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.RenewableBearer';
  private refreshTimer: ReturnType<typeof setTimeout> | null = null;
  private stopped = false;

  private inFlightRenewal: Promise<Token> | null = null;
  private waiters: Waiter[] = [];

  private cacheToken: Token | null = null;
  private fresh = false; // true iff last renewal succeeded and nothing invalidated it
  private renewalRequested = false;

  private renewAttempt = 0;

  // “sync” override for next renewal only
  private nextSyncOptions: {
    timeoutMs: number | null;
    options: AuthorizationOptions | null;
  } | null = null;

  // tuning
  private readonly lifetimeSafeFraction: number;
  private readonly initialRetryTimeoutMs: number;
  private readonly maxRetryTimeoutMs: number;
  private readonly retryTimeoutExponent: number;
  private readonly refreshRequestTimeoutMs: number;
  private readonly maxRetries: number;
  private readonly jitterFraction: number;
  private readonly logger?: Logger;
  private readonly metrics: AuthMetricsRecorder;
  private source: Bearer;

  /**
   * Creates an in-memory renewal layer around `source`.
   *
   * `lifetimeSafeFraction` selects the fraction of remaining lifetime to wait
   * before renewal. Retry delays use exponential backoff and bounded jitter.
   */
  constructor(
    source: Bearer,
    opts?: {
      /** Maximum total authentication attempts for one receiver. Defaults to 2. */
      maxRetries?: number;
      /**
       * Fraction of remaining token lifetime to wait before renewal.
       *
       * Defaults to `0.9`, which renews with about 10% left.
       */
      lifetimeSafeFraction?: number;
      /** Initial renewal retry delay, in milliseconds. Defaults to one second. */
      initialRetryTimeoutMs?: number;
      /** Maximum renewal retry delay, in milliseconds. Defaults to 60 seconds. */
      maxRetryTimeoutMs?: number;
      /** Multiplier for exponential retry delays. Defaults to `1.5`. */
      retryTimeoutExponent?: number;
      /**
       * Default budget for a renewal request, in milliseconds.
       *
       * Defaults to five seconds. It applies to foreground and background
       * renewal when the caller does not supply a synchronous override. The
       * source decides how it enforces the budget.
       */
      refreshRequestTimeoutMs?: number;
      /** Accepted for compatibility but not used by this implementation. */
      safetyMinRemainingMs?: number;
      /**
       * Random retry-delay variation from `0` to `1`.
       *
       * Defaults to `0.2`. Values outside the range are clamped.
       */
      jitterFraction?: number;
      /** Optional destination for diagnostic events. */
      logger?: Logger;
      /** Optional authentication metrics destination. */
      metrics?: AuthMetricsInput;
      /** Provider label for metrics. Defaults to the wrapped bearer name. */
      provider?: string;
    },
  ) {
    super();
    this.lifetimeSafeFraction = opts?.lifetimeSafeFraction ?? 0.9;
    this.initialRetryTimeoutMs = opts?.initialRetryTimeoutMs ?? 1_000;
    this.maxRetryTimeoutMs = opts?.maxRetryTimeoutMs ?? 60_000;
    this.retryTimeoutExponent = opts?.retryTimeoutExponent ?? 1.5;
    this.refreshRequestTimeoutMs = opts?.refreshRequestTimeoutMs ?? 5_000;
    this.maxRetries = opts?.maxRetries ?? 2;
    this.jitterFraction = Math.min(Math.max(opts?.jitterFraction ?? 0.2, 0), 1);
    this.logger = opts?.logger;
    this.metrics = authMetricsRecorder(opts?.metrics, opts?.provider ?? authMetricProvider(source));
    this.source = bindAuthMetrics(source, this.metrics);
    this.logger?.trace('ctor', { opts });
  }
  [custom](): string {
    return `${this.$type}(source=${inspect(this.source)}, token=${inspect(this.cacheToken)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      source: inspectJson(this.source),
      token: inspectJson(this.cacheToken),
      fresh: this.fresh,
      renewalRequested: this.renewalRequested,
      waiters: this.waiters.length,
    };
  }

  /** Returns the wrapped bearer. */
  get wrapped(): Bearer | undefined {
    return this.source;
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    return new RenewableReceiver(this, this.maxRetries, this.logger);
  }

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    this.source = bindAuthMetrics(this.source, this.metrics);
  }

  /** Schedules the next background renewal and replaces the current timer. */
  private scheduleNext(ms: number) {
    if (this.stopped) {
      this.logger?.debug('scheduleNext skipped (stopped)');
      return;
    }
    if (this.refreshTimer) clearTimeout(this.refreshTimer);

    const delay = Math.max(0, ms);
    this.logger?.debug('scheduleNext', { delayMs: delay });
    this.refreshTimer = setTimeout(() => void this.run(), delay);

    // Don't keep Node process alive because of this timer.
    this.refreshTimer.unref?.();
  }

  /** Computes the next renewal time from the token expiration time. */
  private computeNextTimeoutMs(tok: Token | null): number {
    if (!tok) {
      this.logger?.trace('computeNextTimeoutMs: no token -> 0 (asap)');
      return 0;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      // No expiry -> effectively “never”; keep a periodic health check just in case
      const v = 10 * 24 * 60 * 60 * 1000; // 10 days
      this.logger?.trace('computeNextTimeoutMs: no expiration ->', {
        nextTimeoutMs: v,
      });
      return v;
    }
    const now = Date.now();
    const remaining = exp - now;
    if (remaining <= 0) {
      this.logger?.trace('computeNextTimeoutMs: already expired -> 0 (asap)');
      return 0;
    }

    // Renew at: remaining * (1 - (1 - lifetimeSafeFraction))
    // i.e. remaining * lifetimeSafeFraction.
    const targetFromNow = Math.floor(remaining * this.lifetimeSafeFraction);
    this.logger?.trace('computeNextTimeoutMs', {
      nextTimeoutMs: targetFromNow,
    });
    return targetFromNow;
  }

  private addWaiter(resolve: (t: Token) => void, reject: (e: unknown) => void) {
    this.waiters.push({ resolve, reject });
    this.logger?.trace('addWaiter', { waiters: this.waiters.length });
  }

  private drainWaitersWithToken(tok: Token) {
    const ws = this.waiters.splice(0, this.waiters.length);
    this.logger?.trace('drainWaitersWithToken', { count: ws.length, token: tok });
    ws.forEach((w) => w.resolve(tok));
  }

  private drainWaitersWithError(err: unknown) {
    const ws = this.waiters.splice(0, this.waiters.length);
    this.logger?.trace('drainWaitersWithError', { count: ws.length, err });
    ws.forEach((w) => w.reject(err));
  }

  private withJitter(ms: number): number {
    if (ms <= 0 || this.jitterFraction <= 0) return ms;
    const span = ms * this.jitterFraction;
    const delta = (Math.random() * 2 - 1) * span;
    return Math.max(0, Math.floor(ms + delta));
  }

  private needRenew(): boolean {
    if (!this.cacheToken) {
      this.logger?.trace('needRenew -> true (no token)');
      return true;
    }
    if (this.renewalRequested) {
      this.logger?.trace('needRenew -> true (renewal requested)');
      return true;
    }
    const exp = this.cacheToken.expiration?.getTime();
    if (!exp) {
      this.logger?.trace('needRenew -> false (no expiration)');
      return false;
    }
    const res = this.cacheToken.isExpired();
    this.logger?.trace('needRenew', {
      isExpired: this.cacheToken.isExpired(),
    });
    return res;
  }

  private async startRenewal(background: boolean): Promise<Token> {
    if (this.inFlightRenewal) {
      this.logger?.debug('startRenewal: reuse inFlight promise');
      return this.inFlightRenewal;
    }
    const start = metricStart();

    const useSyncOpts = this.nextSyncOptions;
    this.nextSyncOptions = null;

    const timeoutMs = useSyncOpts?.timeoutMs ?? this.refreshRequestTimeoutMs;
    const options = useSyncOpts?.options ?? undefined;

    this.logger?.debug('startRenewal: begin', {
      timeoutMs,
      hasSyncOverride: Boolean(useSyncOpts),
      options,
    });

    const doRenew = async (): Promise<Token> => {
      const recv = this.source.receiver();
      this.logger?.trace('startRenewal: fetching from source', { receiver: recv });
      const tok = await recv.fetch(timeoutMs, options);
      this.cacheToken = tok;
      this.fresh = true;
      this.renewalRequested = false;
      this.logger?.debug('startRenewal: success', { token: tok });
      this.drainWaitersWithToken(tok);
      if (background) {
        this.metrics.tokenRefresh(METRIC_RESULT_SUCCESS, metricDurationMs(start), true);
      }
      return tok;
    };

    const p = doRenew()
      .catch((e) => {
        this.fresh = false;
        this.logger?.debug('startRenewal: error', { err: e });
        if (background) {
          this.metrics.tokenRefresh(METRIC_RESULT_ERROR, metricDurationMs(start), true);
        }
        this.drainWaitersWithError(e);
        throw e;
      })
      .finally(() => {
        // Let new callers create a new in-flight promise if needed
        this.inFlightRenewal = null;
        this.logger?.debug('startRenewal: finished');
      });

    this.inFlightRenewal = p;
    return p;
  }

  /**
   * Returns a valid token and starts renewal when required.
   *
   * With {@link AuthorizationOptions.renewSynchronous} or
   * {@link AuthorizationOptions.reportError}, this method waits for renewal
   * and reports its error. Otherwise it can return a valid cached token while
   * renewal continues. If no cached token exists, it waits for the first one.
   */
  async fetch(timeoutMs?: number, options?: AuthorizationOptions): Promise<Token> {
    const renewRequired = Boolean(options?.renewRequired);
    const renewSynchronous = Boolean(options?.renewSynchronous);
    const reportError = Boolean(options?.reportError);

    this.logger?.trace('fetch: enter', {
      timeoutMs,
      options,
      renewRequired,
      renewSynchronous,
      reportError,
      fresh: this.fresh,
      hasToken: Boolean(this.cacheToken),
    });

    // Kick background loop on first use
    if (!this.refreshTimer) this.scheduleNext(0);

    const mustRenew = renewRequired || this.needRenew();

    if (!mustRenew && this.cacheToken && !this.cacheToken.isExpired()) {
      this.metrics.cacheHit();
      this.logger?.debug('fetch: return cached token', { token: this.cacheToken });
      return this.cacheToken;
    }

    if (mustRenew) {
      if (renewSynchronous) {
        // Ensure this attempt uses provided timeouts/options
        this.nextSyncOptions = {
          timeoutMs:
            typeof options?.renewRequestTimeoutMs === 'number'
              ? options!.renewRequestTimeoutMs!
              : null,
          options: options ?? null,
        };
        this.logger?.debug('fetch: mustRenew (sync)', { nextSyncOptions: this.nextSyncOptions });
      } else {
        // Non-blocking hint for the bg loop
        this.requestRenewal();
        this.logger?.debug('fetch: mustRenew (async) -> requested');
      }

      const renewalPromise = this.startRenewal(false);

      // Synchronous callers or error-reporting callers await the result (with optional timeout)
      if (renewSynchronous || reportError) {
        try {
          if (!timeoutMs) {
            const token = await renewalPromise;
            this.metrics.cacheMiss(METRIC_RESULT_SUCCESS);
            return token;
          }

          this.logger?.trace('fetch: awaiting renewal with timeout', { timeoutMs });
          const token = await withTimeout(renewalPromise, timeoutMs);
          this.metrics.cacheMiss(METRIC_RESULT_SUCCESS);
          return token;
        } catch (err) {
          this.metrics.cacheMiss(METRIC_RESULT_ERROR);
          throw err;
        }
      }

      // Asynchronous callers: optionally wait up to timeout for freshness
      try {
        if (timeoutMs) {
          this.logger?.trace('fetch: async path waiting for freshness', { timeoutMs });
          await new Promise<void>((resolve, reject) => {
            let handle: NodeJS.Timeout | undefined;
            const onResolve = (token: Token) => {
              if (handle) {
                clearTimeout(handle);
                handle = undefined;
              }
              this.logger?.debug('fetch: async freshness satisfied', { token });
              resolve();
            };
            const onReject = (err: unknown) => {
              if (handle) {
                clearTimeout(handle);
                handle = undefined;
              }
              this.logger?.debug('fetch: async freshness error', { err });
              reject(err);
            };
            this.addWaiter(onResolve, onReject);

            handle = setTimeout(() => {
              handle = undefined;
              // If already fresh, resolve; otherwise remove our waiter and timeout
              if (this.fresh) resolve();
              else {
                // Remove our waiter (linear removal; list is small in practice)
                const idx = this.waiters.findIndex(
                  (w) => w.resolve === onResolve && w.reject === onReject,
                );
                if (idx >= 0) this.waiters.splice(idx, 1);
                this.logger?.debug('fetch: async freshness timeout');
                reject(new RenewalError('Timeout waiting fresh token'));
              }
            }, timeoutMs);
            handle.unref();
          });
        } else if (!this.cacheToken) {
          // No token available yet: wait for current renewal to finish even in async mode
          this.logger?.debug('fetch: async path, no token, awaiting renewal');
          await renewalPromise;
        }
      } catch (err) {
        this.metrics.cacheMiss(METRIC_RESULT_ERROR);
        throw err;
      }
    }

    if (!this.cacheToken || this.cacheToken.isExpired()) {
      this.logger?.debug('fetch: no valid token -> throw');
      if (mustRenew) {
        this.metrics.cacheMiss(METRIC_RESULT_ERROR);
      }
      throw new RenewalError('No valid token available');
    }
    if (mustRenew) {
      this.metrics.cacheMiss(METRIC_RESULT_SUCCESS);
    } else {
      this.metrics.cacheHit();
    }
    this.logger?.debug('fetch: return cached token', { token: this.cacheToken });
    return this.cacheToken;
  }

  /** Reports whether the cached token is absent, invalidated, expired, or due for renewal. */
  isRenewalRequired(): boolean {
    const v = this.needRenew();
    this.logger?.trace('isRenewalRequired', { result: v });
    return v;
  }

  /**
   * Schedules renewal as soon as possible.
   *
   * Set `invalidate` after an authentication rejection. This method does not
   * wait for renewal.
   */
  requestRenewal(invalidate = false): void {
    if (this.stopped) {
      this.logger?.debug('requestRenewal ignored (stopped)');
      return;
    }
    this.fresh = false;
    this.renewalRequested = true;
    if (invalidate && this.cacheToken) {
      this.metrics.cacheInvalidate();
    }
    this.logger?.debug('requestRenewal -> scheduled');
    this.scheduleNext(0);
  }

  /** Runs one renewal at a time, applies jittered backoff, and schedules the next renewal. */
  private async run(): Promise<void> {
    if (this.stopped) {
      this.logger?.debug('run: stopped');
      return;
    }

    let nextDelayMs = 0;

    try {
      this.logger?.trace('run: starting renewal', { attempt: this.renewAttempt + 1 });
      const tok = await this.startRenewal(true);
      // Schedule next proactive renewal
      nextDelayMs = this.computeNextTimeoutMs(tok);
      this.renewAttempt = 0;
      this.logger?.debug('run: renewed ok, next run upon expire', { nextDelayMs, token: tok });
    } catch (err) {
      // Backoff on failure
      this.renewAttempt += 1;
      const attempt = this.renewAttempt;

      if (attempt <= 1 || Math.abs(this.retryTimeoutExponent - 1) < 1e-9) {
        nextDelayMs = this.initialRetryTimeoutMs;
      } else {
        const mul = Math.pow(this.retryTimeoutExponent, attempt - 1);
        nextDelayMs = Math.min(this.initialRetryTimeoutMs * mul, this.maxRetryTimeoutMs);
      }
      nextDelayMs = Math.max(nextDelayMs, this.initialRetryTimeoutMs);
      nextDelayMs = this.withJitter(nextDelayMs);
      this.logger?.debug('run: renewal failed, backoff', { attempt, nextDelayMs, err });
    }

    this.scheduleNext(nextDelayMs);
  }

  /** Stops renewal, rejects pending waiters, and closes the wrapped bearer. */
  async close(graceMs?: number): Promise<void> {
    this.stopped = true;
    if (this.refreshTimer) {
      this.logger?.trace('close: clearing refresh timer');
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    // Reject any waiters
    this.drainWaitersWithError(new RenewalError('Bearer closed'));
    this.logger?.debug('close source', { graceMs });
    await this.source.close(graceMs);
  }
}
