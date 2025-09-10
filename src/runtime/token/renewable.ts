import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';

// Debug disabled
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbg = (..._args: any[]) => {};

export class RenewalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RenewalError';
  }
}

type Waiter = { resolve: (t: Token) => void; reject: (e: unknown) => void };

class RenewableReceiver extends Receiver {
  private trial = 0;
  constructor(
    private readonly parent: RenewableBearer,
    private readonly defaultMaxRetries: number = 2,
  ) {
    super();
  }

  protected async _fetch(timeoutMs?: number, options?: AuthorizationOptions): Promise<Token> {
    this.trial += 1;
    dbg('Receiver._fetch', { trial: this.trial, timeoutMs, options });
    return this.parent.fetch(timeoutMs, options);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    const synchronous = Boolean(options?.renewSynchronous);
    if (this.trial >= maxRetries) {
      dbg('Receiver.canRetry -> false (max retries reached)', { trial: this.trial, maxRetries });
      return false;
    }

    // Non-blocking renewal request for async path
    if (!synchronous) this.parent.requestRenewal();
    dbg('Receiver.canRetry -> true', { trial: this.trial, maxRetries, synchronous });
    return true;
  }
}

export class RenewableBearer extends Bearer {
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
  private readonly safetyMinRemainingMs: number;
  private readonly initialRetryTimeoutMs: number;
  private readonly maxRetryTimeoutMs: number;
  private readonly retryTimeoutExponent: number;
  private readonly refreshRequestTimeoutMs: number;
  private readonly maxRetries: number;
  private readonly jitterFraction: number;

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
    },
  ) {
    super();
    this.lifetimeSafeFraction = opts?.lifetimeSafeFraction ?? 0.9;
    this.safetyMinRemainingMs = opts?.safetyMinRemainingMs ?? 15_000;
    this.initialRetryTimeoutMs = opts?.initialRetryTimeoutMs ?? 1_000;
    this.maxRetryTimeoutMs = opts?.maxRetryTimeoutMs ?? 60_000;
    this.retryTimeoutExponent = opts?.retryTimeoutExponent ?? 1.5;
    this.refreshRequestTimeoutMs = opts?.refreshRequestTimeoutMs ?? 5_000;
    this.maxRetries = opts?.maxRetries ?? 2;
    this.jitterFraction = Math.min(Math.max(opts?.jitterFraction ?? 0.2, 0), 1);
    dbg('ctor', { opts });
  }

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  receiver(): Receiver {
    return new RenewableReceiver(this, this.maxRetries);
  }

  /** Schedules next background renewal. Always de-dupes existing timer. */
  private scheduleNext(ms: number) {
    if (this.stopped) {
      dbg('scheduleNext skipped (stopped)');
      return;
    }
    if (this.refreshTimer) clearTimeout(this.refreshTimer);

    const delay = Math.max(0, ms);
    dbg('scheduleNext', { delayMs: delay });
    this.refreshTimer = setTimeout(() => void this.run(), delay);

    // Don't keep Node process alive because of this timer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.refreshTimer as any)?.unref?.();
  }

  /** Compute when to renew next, based on token expiration. */
  private computeNextTimeoutMs(tok: Token | null): number {
    if (!tok) {
      dbg('computeNextTimeoutMs: no token -> 0');
      return 0;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      // No expiry -> effectively “never”; keep a periodic health check just in case
      const v = 10 * 24 * 60 * 60 * 1000; // 10 days
      dbg('computeNextTimeoutMs: no expiration ->', v);
      return v;
    }
    const now = Date.now();
    const remaining = exp - now;
    if (remaining <= 0) {
      dbg('computeNextTimeoutMs: already expired -> 0');
      return 0;
    }

    // Renew at: remaining * (1 - (1 - lifetimeSafeFraction))
    // i.e. remaining * lifetimeSafeFraction.
    const targetFromNow = Math.floor(remaining * this.lifetimeSafeFraction);
    const result = Math.max(0, remaining - targetFromNow);
    dbg('computeNextTimeoutMs', { remaining, targetFromNow, result });
    return result;
  }

  private addWaiter(resolve: (t: Token) => void, reject: (e: unknown) => void) {
    this.waiters.push({ resolve, reject });
    dbg('addWaiter', { waiters: this.waiters.length });
  }

  private drainWaitersWithToken(tok: Token) {
    const ws = this.waiters.splice(0, this.waiters.length);
    dbg('drainWaitersWithToken', { count: ws.length, token: tok });
    ws.forEach((w) => w.resolve(tok));
  }

  private drainWaitersWithError(err: unknown) {
    const ws = this.waiters.splice(0, this.waiters.length);
    dbg('drainWaitersWithError', { count: ws.length, err });
    ws.forEach((w) => w.reject(err));
  }

  private withJitter(ms: number): number {
    if (ms <= 0 || this.jitterFraction <= 0) return ms;
    const span = ms * this.jitterFraction;
    const delta = (Math.random() * 2 - 1) * span;
    return Math.max(0, Math.floor(ms + delta));
  }

  private needRenew(now = Date.now()): boolean {
    if (!this.cacheToken) {
      dbg('needRenew -> true (no token)');
      return true;
    }
    if (this.renewalRequested) {
      dbg('needRenew -> true (requested)');
      return true;
    }
    const exp = this.cacheToken.expiration?.getTime();
    if (!exp) {
      dbg('needRenew -> false (no expiration)');
      return false;
    }
    const remaining = exp - now;
    const res = remaining <= this.safetyMinRemainingMs || this.cacheToken.isExpired();
    dbg('needRenew', {
      remaining,
      safetyMinRemainingMs: this.safetyMinRemainingMs,
      isExpired: this.cacheToken.isExpired(),
      result: res,
    });
    return res;
  }

  private async startRenewal(): Promise<Token> {
    if (this.inFlightRenewal) {
      dbg('startRenewal: reuse inFlight promise');
      return this.inFlightRenewal;
    }

    const useSyncOpts = this.nextSyncOptions;
    this.nextSyncOptions = null;

    const timeoutMs = useSyncOpts?.timeoutMs ?? this.refreshRequestTimeoutMs;
    const options = useSyncOpts?.options ?? undefined;

    dbg('startRenewal: begin', { timeoutMs, hasSyncOverride: Boolean(useSyncOpts), options });

    const doRenew = async (): Promise<Token> => {
      const recv = this.source.receiver();
      const tok = await recv.fetch(timeoutMs, options);
      this.cacheToken = tok;
      this.fresh = true;
      this.renewalRequested = false;
      dbg('startRenewal: success', { token: tok });
      this.drainWaitersWithToken(tok);
      return tok;
    };

    const p = doRenew()
      .catch((e) => {
        this.fresh = false;
        dbg('startRenewal: error', { error: e });
        this.drainWaitersWithError(e);
        throw e;
      })
      .finally(() => {
        // Let new callers create a new in-flight promise if needed
        this.inFlightRenewal = null;
        dbg('startRenewal: finished');
      });

    this.inFlightRenewal = p;
    return p;
  }

  async fetch(timeoutMs?: number, options?: AuthorizationOptions): Promise<Token> {
    const renewRequired = Boolean(options?.renewRequired);
    const renewSynchronous = Boolean(options?.renewSynchronous);
    const reportError = Boolean(options?.reportError);

    dbg('fetch: enter', {
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

    const now = Date.now();
    const mustRenew = renewRequired || this.needRenew(now);

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
        dbg('fetch: mustRenew (sync)', { nextSyncOptions: this.nextSyncOptions });
      } else {
        // Non-blocking hint for the bg loop
        this.requestRenewal();
        dbg('fetch: mustRenew (async) -> requested');
      }

      const renewalP = this.startRenewal();

      // Synchronous callers or error-reporting callers await the result (with optional timeout)
      if (renewSynchronous || reportError) {
        if (!timeoutMs) return renewalP;

        dbg('fetch: awaiting renewal with timeout', { timeoutMs });
        return await Promise.race<Token>([
          renewalP,
          new Promise<Token>((_, reject) =>
            setTimeout(() => reject(new RenewalError('Renewal timeout')), timeoutMs),
          ),
        ]);
      }

      // Asynchronous callers: optionally wait up to timeout for freshness
      if (timeoutMs) {
        dbg('fetch: async path waiting for freshness', { timeoutMs });
        await new Promise<void>((resolve, reject) => {
          const onResolve = (_: Token) => {
            dbg('fetch: async freshness satisfied');
            resolve();
          };
          const onReject = (e: unknown) => {
            dbg('fetch: async freshness error', { error: e });
            reject(e);
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
              dbg('fetch: async freshness timeout');
              reject(new RenewalError('Timeout waiting fresh token'));
            }
          }, timeoutMs);
        });
      } else if (!this.cacheToken) {
        // No token available yet: wait for current renewal to finish even in async mode
        dbg('fetch: async path, no token, awaiting renewal');
        await renewalP;
      }
    }

    if (!this.cacheToken || this.cacheToken.isExpired()) {
      dbg('fetch: no valid token -> throw');
      throw new RenewalError('No valid token available');
    }
    dbg('fetch: return cached token', { token: this.cacheToken });
    return this.cacheToken;
  }

  isRenewalRequired(): boolean {
    const v = this.needRenew();
    dbg('isRenewalRequired', { result: v });
    return v;
  }

  requestRenewal(): void {
    if (this.stopped) {
      dbg('requestRenewal ignored (stopped)');
      return;
    }
    this.fresh = false;
    this.renewalRequested = true;
    dbg('requestRenewal -> scheduled');
    this.scheduleNext(0);
  }

  /** Background runner: serialize renewals, backoff with jitter, reschedule next. */
  private async run(): Promise<void> {
    if (this.stopped) {
      dbg('run: stopped');
      return;
    }

    let nextDelayMs = 0;

    try {
      const tok = await this.startRenewal();
      // Schedule next proactive renewal
      nextDelayMs = this.computeNextTimeoutMs(tok);
      this.renewAttempt = 0;
      dbg('run: renewed ok, nextDelayMs', { nextDelayMs, token: tok });
    } catch (_e) {
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
      dbg('run: renewal failed, backoff', { attempt, nextDelayMs });
    }

    this.scheduleNext(nextDelayMs);
  }

  async close(graceMs?: number): Promise<void> {
    this.stopped = true;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    // Reject any waiters
    this.drainWaitersWithError(new RenewalError('Bearer closed'));
    dbg('close', { graceMs });
    await this.source.close(graceMs);
  }
}
