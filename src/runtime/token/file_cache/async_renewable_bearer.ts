import type { AuthorizationOptions } from '../../authorization/provider';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';
import { RenewalError } from '../renewable';

import { ThrottledTokenCache } from './throttled_token_cache';

// Debug helper (toggle or pipe to your logger)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbg = (..._args: any[]) => {};

// A lightweight async renewable bearer using setTimeout for background scheduling

type Waiter = { resolve: (t: Token) => void; reject: (e: unknown) => void };

class AsyncRenewableReceiver extends Receiver {
  private trial = 0;
  constructor(
    private readonly parent: AsyncRenewableBearer,
    private readonly defaultMaxRetries: number = 2,
  ) {
    super();
  }

  protected async _fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    this.trial += 1;
    dbg('Receiver._fetch', { trial: this.trial, timeoutMs, options });
    return this.parent.fetch(timeoutMs, options);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions | undefined): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    const synchronous = Boolean(options?.renewSynchronous);

    if (this.trial >= maxRetries) {
      dbg('Receiver.canRetry -> false (max retries reached)', { trial: this.trial, maxRetries });
      return false;
    }
    if (!synchronous) this.parent.requestRenewal();
    dbg('Receiver.canRetry -> true', { trial: this.trial, maxRetries, synchronous });
    return true;
  }
}

export class AsyncRenewableBearer extends Bearer {
  private readonly fileCache: ThrottledTokenCache;
  private refreshTimer: ReturnType<typeof setTimeout> | null = null;
  private stopped = false;

  private inFlightRenewal: Promise<Token> | null = null;
  private waiters: Waiter[] = [];

  private cacheToken: Token | null = null;
  private fresh = false; // true iff last renewal succeeded and nothing invalidated it
  private renewalRequested = false;
  private renewAttempt = 0;

  // "sync" override for next renewal only
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

  public safetyMargin: number | null; // initial extra safety for first use; null disables it thereafter

  constructor(
    private readonly source: Bearer,
    opts?: {
      maxRetries?: number;
      initialSafetyMarginMs?: number | null; // null keeps always renew on first use
      retrySafetyMarginMs?: number; // not used directly in JS variant
      lifetimeSafeFraction?: number; // e.g. 0.9 → renew while keeping 90% lifetime remaining (very safe)
      safetyMinRemainingMs?: number; // minimum ms of life we want to keep before we treat as "near expiry"
      initialRetryTimeoutMs?: number; // first backoff step
      maxRetryTimeoutMs?: number; // cap for backoff
      retryTimeoutExponent?: number; // exponential factor
      refreshRequestTimeoutMs?: number; // timeout for background renewal
      jitterFraction?: number; // 0..1 of backoff added/subtracted as jitter
      fileCacheThrottleMs?: number;
      cacheFilePath?: string;
    },
  ) {
    super();
    const name = source.name;
    if (!name) throw new Error('Source bearer must have a name for the cache.');
    const cacheFile = opts?.cacheFilePath ?? `${defaultConfigDir}/${defaultCredentialsFile}`;
    const throttleMs = opts?.fileCacheThrottleMs ?? 5 * 60_000;
    this.fileCache = new ThrottledTokenCache(name, cacheFile, throttleMs);

    this.lifetimeSafeFraction = opts?.lifetimeSafeFraction ?? 0.9;
    this.safetyMinRemainingMs = opts?.safetyMinRemainingMs ?? 15_000;
    this.initialRetryTimeoutMs = opts?.initialRetryTimeoutMs ?? 1_000;
    this.maxRetryTimeoutMs = opts?.maxRetryTimeoutMs ?? 60_000;
    this.retryTimeoutExponent = opts?.retryTimeoutExponent ?? 1.5;
    this.safetyMargin = opts?.initialSafetyMarginMs ?? 2 * 60 * 60 * 1000;
    this.refreshRequestTimeoutMs = opts?.refreshRequestTimeoutMs ?? 5_000;
    this.maxRetries = opts?.maxRetries ?? 2;
    this.jitterFraction = Math.min(Math.max(opts?.jitterFraction ?? 0.2, 0), 1);
  }

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  receiver(): Receiver {
    return new AsyncRenewableReceiver(this, this.maxRetries);
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
  private computeNextTimeoutMs(tok: Token | null | undefined): number {
    if (!tok) {
      dbg('computeNextTimeoutMs: no token -> 0');
      return 0;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      const v = 10 * 24 * 60 * 60 * 1000;
      dbg('computeNextTimeoutMs: no expiration ->', v);
      return v;
    }
    const now = Date.now();
    const remaining = exp - now;
    if (remaining <= 0) {
      dbg('computeNextTimeoutMs: already expired -> 0');
      return 0;
    }

    const targetFromNow = Math.max(
      Math.floor(remaining * this.lifetimeSafeFraction),
      this.safetyMinRemainingMs,
    );

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
    const tok = this.cacheToken ?? this.fileCache.getCached();
    if (!tok) {
      dbg('needRenew -> true (no token)');
      return true;
    }
    if (this.renewalRequested) {
      dbg('needRenew -> true (requested)');
      return true;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      dbg('needRenew -> false (no expiration)');
      return false;
    }
    const remaining = exp - now;
    const res = remaining <= this.safetyMinRemainingMs || tok.isExpired();
    dbg('needRenew', {
      remaining,
      safetyMinRemainingMs: this.safetyMinRemainingMs,
      isExpired: tok.isExpired(),
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
      await this.fileCache.set(tok);
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
        this.inFlightRenewal = null;
        dbg('startRenewal: finished');
      });

    this.inFlightRenewal = p;
    return p;
  }

  async fetch(timeoutMs?: number, options?: AuthorizationOptions | undefined): Promise<Token> {
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

    // Try to use cached token (memory first, then throttled file cache)
    let tok = this.cacheToken ?? this.fileCache.getCached() ?? null;
    if (!tok) {
      const fromDisk = await this.fileCache.get();
      if (fromDisk) {
        this.cacheToken = fromDisk;
        tok = fromDisk;
      }
    }

    const now = Date.now();
    if (!renewRequired && tok && !tok.isExpired()) {
      const margin = this.safetyMargin;
      if (margin == null || !tok.expiration || tok.expiration.getTime() - margin > now) {
        // Schedule proactive renewal and return current token
        if (!this.refreshTimer) this.scheduleNext(this.computeNextTimeoutMs(tok));
        dbg('fetch: return cached token (within safety margin)', { token: tok });
        return tok;
      }
    }

    // After first fetch, drop extra safety margin behavior
    this.safetyMargin = null;

    const mustRenew = renewRequired || this.needRenew(now);

    if (mustRenew) {
      if (renewSynchronous) {
        this.nextSyncOptions = {
          timeoutMs:
            typeof options?.renewRequestTimeoutMs === 'number'
              ? options.renewRequestTimeoutMs!
              : null,
          options: options ?? null,
        };
        dbg('fetch: mustRenew (sync)', { nextSyncOptions: this.nextSyncOptions });
      } else {
        this.requestRenewal();
        dbg('fetch: mustRenew (async) -> requested');
      }

      const renewalP = this.startRenewal();

      // Synchronous callers or error-reporting callers await the result (with optional timeout)
      if (renewSynchronous || reportError) {
        const resultP = !timeoutMs
          ? renewalP
          : Promise.race<Token>([
              renewalP,
              new Promise<Token>((_, reject) =>
                setTimeout(() => reject(new RenewalError('Renewal timeout')), timeoutMs),
              ),
            ]);
        const newTok = await resultP;
        // After a direct synchronous renewal we must schedule the next proactive renewal ourselves
        this.scheduleNext(this.computeNextTimeoutMs(newTok));
        dbg('fetch: sync path -> renewed', { token: newTok });
        return newTok;
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
            if (this.fresh) {
              resolve();
            } else {
              const idx = this.waiters.findIndex(
                (w) => w.resolve === onResolve && w.reject === onReject,
              );
              if (idx >= 0) this.waiters.splice(idx, 1);
              dbg('fetch: async freshness timeout');
              reject(new RenewalError('Timeout waiting fresh token'));
            }
          }, timeoutMs);
        });
      } else if (!tok) {
        // No token available yet: wait for current renewal to finish even in async mode
        dbg('fetch: async path, no token, awaiting renewal');
        await renewalP;
      }
    }

    const current = this.cacheToken ?? this.fileCache.getCached();
    if (!current || current.isExpired()) {
      dbg('fetch: no valid token -> throw');
      throw new RenewalError('No valid token available');
    }
    dbg('fetch: return cached token', { token: current });
    return current;
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

    // If no renewal is required, just reschedule based on current token
    const current = this.cacheToken ?? this.fileCache.getCached() ?? null;
    if (!this.renewalRequested && !this.needRenew()) {
      const delay = this.computeNextTimeoutMs(current);
      dbg('run: not needed, reschedule', { delay });
      this.scheduleNext(delay);
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

  async close(graceMs?: number | undefined): Promise<void> {
    this.stopped = true;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.drainWaitersWithError(new RenewalError('Bearer closed'));
    dbg('close', { graceMs });
    await this.source.close(graceMs);
  }
}
