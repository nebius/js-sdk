import { inspect } from 'util';

import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { custom, customJson, inspectJson, Logger } from '../util/logging';

export class RenewalError extends Error {
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
    if (!synchronous) this.parent.requestRenewal();
    this.logger?.trace('canRetry -> true', { trial: this.trial, maxRetries, synchronous });
    return true;
  }
}

export class RenewableBearer extends Bearer {
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

  constructor(
    private readonly source: Bearer,
    opts?: {
      maxRetries?: number;
      lifetimeSafeFraction?: number; // e.g. 0.9 → renew at 10% before expiry
      initialRetryTimeoutMs?: number; // first backoff step
      maxRetryTimeoutMs?: number; // cap for backoff
      retryTimeoutExponent?: number; // exponential factor
      refreshRequestTimeoutMs?: number; // timeout for background renewal
      safetyMinRemainingMs?: number; // minimum ms of life we want to keep before we treat as "near expiry"
      jitterFraction?: number; // 0..1 of backoff added/subtracted as jitter
      logger?: Logger;
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
    this.logger?.trace('ctor', { opts });
  }
  [custom](): string {
    return `${this.$type}(source=${inspect(this.source)}, token=${inspect(this.cacheToken)})`;
  }
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

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  receiver(): Receiver {
    return new RenewableReceiver(this, this.maxRetries, this.logger);
  }

  /** Schedules next background renewal. Always de-dupes existing timer. */
  private scheduleNext(ms: number) {
    if (this.stopped) {
      this.logger?.debug('scheduleNext skipped (stopped)');
      return;
    }
    if (this.refreshTimer) clearTimeout(this.refreshTimer);

    const delay = Math.max(0, ms);
    this.logger?.debug('scheduleNext', { delayMs: delay });
    this.refreshTimer = setTimeout(() => void this.run(), delay);

    // Don't keep Node process alive because of this timer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.refreshTimer as any)?.unref?.();
  }

  /** Compute when to renew next, based on token expiration. */
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

  private async startRenewal(): Promise<Token> {
    if (this.inFlightRenewal) {
      this.logger?.debug('startRenewal: reuse inFlight promise');
      return this.inFlightRenewal;
    }

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
      return tok;
    };

    const p = doRenew()
      .catch((e) => {
        this.fresh = false;
        this.logger?.debug('startRenewal: error', { err: e });
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

      const renewalPromise = this.startRenewal();

      // Synchronous callers or error-reporting callers await the result (with optional timeout)
      if (renewSynchronous || reportError) {
        if (!timeoutMs) return renewalPromise;

        this.logger?.trace('fetch: awaiting renewal with timeout', { timeoutMs });
        return await Promise.race<Token>([
          renewalPromise,
          new Promise<Token>((_, reject) =>
            setTimeout(() => reject(new RenewalError('Renewal timeout')), timeoutMs),
          ),
        ]);
      }

      // Asynchronous callers: optionally wait up to timeout for freshness
      if (timeoutMs) {
        this.logger?.trace('fetch: async path waiting for freshness', { timeoutMs });
        await new Promise<void>((resolve, reject) => {
          const onResolve = (token: Token) => {
            this.logger?.debug('fetch: async freshness satisfied', { token });
            resolve();
          };
          const onReject = (err: unknown) => {
            this.logger?.debug('fetch: async freshness error', { err });
            reject(err);
          };
          this.addWaiter(onResolve, onReject);

          setTimeout(() => {
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
        });
      } else if (!this.cacheToken) {
        // No token available yet: wait for current renewal to finish even in async mode
        this.logger?.debug('fetch: async path, no token, awaiting renewal');
        await renewalPromise;
      }
    }

    if (!this.cacheToken || this.cacheToken.isExpired()) {
      this.logger?.debug('fetch: no valid token -> throw');
      throw new RenewalError('No valid token available');
    }
    this.logger?.debug('fetch: return cached token', { token: this.cacheToken });
    return this.cacheToken;
  }

  isRenewalRequired(): boolean {
    const v = this.needRenew();
    this.logger?.trace('isRenewalRequired', { result: v });
    return v;
  }

  requestRenewal(): void {
    if (this.stopped) {
      this.logger?.debug('requestRenewal ignored (stopped)');
      return;
    }
    this.fresh = false;
    this.renewalRequested = true;
    this.logger?.debug('requestRenewal -> scheduled');
    this.scheduleNext(0);
  }

  /** Background runner: serialize renewals, backoff with jitter, reschedule next. */
  private async run(): Promise<void> {
    if (this.stopped) {
      this.logger?.debug('run: stopped');
      return;
    }

    let nextDelayMs = 0;

    try {
      this.logger?.trace('run: starting renewal', { attempt: this.renewAttempt + 1 });
      const tok = await this.startRenewal();
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
