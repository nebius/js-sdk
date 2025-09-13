import { inspect } from 'util';

import type { AuthorizationOptions } from '../../authorization/provider';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Bearer, Receiver, Token } from '../../token';
import { custom, customJson, inspectJson, Logger } from '../../util/logging';
import { RenewalError } from '../renewable';

import { ThrottledTokenCache } from './throttled_token_cache';

// A lightweight async renewable bearer using setTimeout for background scheduling

type Waiter = { resolve: (t: Token) => void; reject: (e: unknown) => void };

class AsyncRenewableReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.AsyncRenewableReceiver';
  private trial = 0;
  constructor(
    private readonly parent: AsyncRenewableBearer,
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
      trial: this.trial,
      parent: inspectJson(this.parent),
      defaultMaxRetries: this.defaultMaxRetries,
    };
  }

  protected async _fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    this.trial += 1;
    this.logger?.debug('Receiver._fetch', { trial: this.trial, timeoutMs, options });
    return this.parent.fetch(timeoutMs, options);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions | undefined): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    const synchronous = Boolean(options?.renewSynchronous);

    if (this.trial >= maxRetries) {
      this.logger?.debug('Receiver.canRetry -> false (max retries reached)', {
        trial: this.trial,
        maxRetries,
      });
      return false;
    }
    if (!synchronous) this.parent.requestRenewal();
    this.logger?.debug('Receiver.canRetry -> true', { trial: this.trial, maxRetries, synchronous });
    return true;
  }
}

export class AsyncRenewableBearer extends Bearer {
  public readonly $type = 'nebius.sdk.AsyncRenewableBearer';
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

  private readonly logger: Logger | undefined;

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
      logger?: Logger;
    },
  ) {
    super();
    this.logger = opts?.logger;
    const name = source.name;
    if (!name) throw new Error('Source bearer must have a name for the cache.');
    const cacheFile = opts?.cacheFilePath ?? `${defaultConfigDir}/${defaultCredentialsFile}`;
    const throttleMs = opts?.fileCacheThrottleMs ?? 5 * 60_000;
    this.fileCache = new ThrottledTokenCache(
      name,
      cacheFile,
      throttleMs,
      this.logger?.child('token_cache'),
    );

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
  [custom](): string {
    return `${this.$type}(source=${inspect(this.source)}, fileCache=${inspect(this.fileCache)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      source: inspectJson(this.source),
      fileCache: inspectJson(this.fileCache),
    };
  }

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  receiver(): Receiver {
    return new AsyncRenewableReceiver(this, this.maxRetries, this.logger);
  }

  /** Schedules next background renewal. Always de-dupes existing timer. */
  private scheduleNext(ms: number) {
    if (this.stopped) {
      this.logger?.trace('scheduleNext skipped (stopped)');
      return;
    }
    if (this.refreshTimer) clearTimeout(this.refreshTimer);

    const delay = Math.max(0, ms);
    this.logger?.trace('scheduleNext', { delayMs: delay });
    this.refreshTimer = setTimeout(() => void this.run(), delay);
    // Don't keep Node process alive because of this timer
    this.refreshTimer.unref?.();
  }

  /** Compute when to renew next, based on token expiration. */
  private computeNextTimeoutMs(tok: Token | null | undefined): number {
    if (!tok) {
      this.logger?.trace('computeNextTimeoutMs: no token -> 0');
      return 0;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      const v = 10 * 24 * 60 * 60 * 1000;
      this.logger?.trace('computeNextTimeoutMs: no expiration, refresh every 10 days ->', {
        result: v,
        token: tok,
      });
      return v;
    }
    const now = Date.now();
    const remaining = exp - now;
    if (remaining <= 0) {
      this.logger?.trace('computeNextTimeoutMs: already expired -> 0');
      return 0;
    }

    const result = Math.max(
      Math.min(
        Math.floor(remaining * this.lifetimeSafeFraction),
        remaining - this.safetyMinRemainingMs,
      ),
      0,
    );
    this.logger?.trace('computeNextTimeoutMs', { remaining, result });
    return result;
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

  private needRenew(now = Date.now()): boolean {
    const tok = this.cacheToken ?? this.fileCache.getCached();
    if (!tok) {
      this.logger?.debug('needRenew -> true (no token)');
      return true;
    }
    if (this.renewalRequested) {
      this.logger?.debug('needRenew -> true (requested)');
      return true;
    }
    const exp = tok.expiration?.getTime();
    if (!exp) {
      this.logger?.debug('needRenew -> false (no expiration)');
      return false;
    }
    const remaining = exp - now;
    const res = remaining <= this.safetyMinRemainingMs || tok.isExpired();
    this.logger?.debug('needRenew', {
      remaining,
      safetyMinRemainingMs: this.safetyMinRemainingMs,
      isExpired: tok.isExpired(),
      result: res,
    });
    return res;
  }

  private async startRenewal(): Promise<Token> {
    if (this.inFlightRenewal) {
      this.logger?.debug('startRenewal: reuse inFlight promise');
      return this.inFlightRenewal;
    }
    this.logger?.trace('startRenewal: begin new renewal');

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
      this.logger?.trace('startRenewal: fetching from source receiver', { recv });
      const tok = await recv.fetch(timeoutMs, options);
      this.logger?.trace('startRenewal: fetched token', { token: tok });
      this.cacheToken = tok;
      await this.fileCache.set(tok);
      this.fresh = true;
      this.renewalRequested = false;
      this.logger?.debug('startRenewal: success', { token: tok });
      this.drainWaitersWithToken(tok);
      return tok;
    };

    const p = doRenew()
      .catch((err) => {
        this.fresh = false;
        this.logger?.debug('startRenewal: error', { err });
        this.drainWaitersWithError(err);
        throw err;
      })
      .finally(() => {
        this.inFlightRenewal = null;
        this.logger?.debug('startRenewal: finished');
      });

    this.inFlightRenewal = p;
    return p;
  }

  async fetch(timeoutMs?: number, options?: AuthorizationOptions | undefined): Promise<Token> {
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
      token: this.cacheToken,
    });

    // Try to use cached token (memory first, then throttled file cache)
    let tok = this.cacheToken ?? this.fileCache.getCached() ?? null;
    if (!tok) {
      this.logger?.trace('fetch: no cached token, trying file cache');
      const fromDisk = await this.fileCache.get();
      if (fromDisk) {
        this.logger?.trace('fetch: got token from file cache', { token: fromDisk });
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
        this.logger?.debug('fetch: return cached token (within safety margin)', { token: tok });
        return tok;
      } else {
        this.logger?.trace('fetch: cached token outside safety margin, needs renewal', {
          token: tok,
          margin,
        });
      }
    } else if (renewRequired) {
      this.logger?.trace('fetch: renewRequired set, skipping cached token');
    } else if (tok && tok.isExpired()) {
      this.logger?.trace('fetch: cached token is expired, needs renewal', { token: tok });
    } else {
      this.logger?.trace('fetch: no cached token, needs renewal');
    }

    // After first fetch, drop extra safety margin behavior
    this.safetyMargin = null;

    const mustRenew = renewRequired || this.needRenew(now);

    if (mustRenew) {
      this.logger?.trace('fetch: mustRenew');
      if (renewSynchronous) {
        this.nextSyncOptions = {
          timeoutMs:
            typeof options?.renewRequestTimeoutMs === 'number'
              ? options.renewRequestTimeoutMs!
              : null,
          options: options ?? null,
        };
        this.logger?.trace('fetch: mustRenew (sync)', { nextSyncOptions: this.nextSyncOptions });
      } else {
        this.requestRenewal();
        this.logger?.trace('fetch: mustRenew (async) -> requested');
      }

      const renewalP = this.startRenewal();

      // Synchronous callers or error-reporting callers await the result (with optional timeout)
      if (renewSynchronous || reportError) {
        this.logger?.trace('fetch: mustRenew (sync)', {
          nextSyncOptions: this.nextSyncOptions,
          timeoutMs,
        });
        const resultP = !timeoutMs
          ? renewalP
          : Promise.race<Token>([
              renewalP,
              new Promise<Token>((_, reject) =>
                setTimeout(() => reject(new RenewalError('Renewal timeout')), timeoutMs),
              ),
            ]);
        const newTok = await resultP;
        this.logger?.trace('fetch: sync path -> renewed, scheduling next', { token: newTok });
        // After a direct synchronous renewal we must schedule the next proactive renewal ourselves
        this.scheduleNext(this.computeNextTimeoutMs(newTok));
        this.logger?.debug('fetch: sync path -> renewed', { token: newTok });
        return newTok;
      }

      // Asynchronous callers: optionally wait up to timeout for freshness
      if (timeoutMs) {
        this.logger?.trace('fetch: async path waiting for freshness', { timeoutMs });
        await new Promise<void>((resolve, reject) => {
          let handler: NodeJS.Timeout | undefined = undefined;
          const onResolve = (token: Token) => {
            this.logger?.trace('fetch: async freshness satisfied', { token });
            resolve();
            if (handler) {
              clearTimeout(handler);
              handler = undefined;
            }
          };
          const onReject = (err: unknown) => {
            this.logger?.trace('fetch: async freshness error', { err });
            if (handler) {
              clearTimeout(handler);
              handler = undefined;
            }
            reject(err);
          };
          this.addWaiter(onResolve, onReject);

          handler = setTimeout(() => {
            if (this.fresh) {
              this.logger?.trace('fetch: async freshness already satisfied', {
                token: this.cacheToken,
              });
              resolve();
            } else {
              const idx = this.waiters.findIndex(
                (w) => w.resolve === onResolve && w.reject === onReject,
              );
              if (idx >= 0) this.waiters.splice(idx, 1);
              this.logger?.trace('fetch: async freshness timeout');
              reject(new RenewalError('Timeout waiting fresh token'));
            }
          }, timeoutMs);
          handler.unref?.();
        });
      } else if (!tok) {
        // No token available yet: wait for current renewal to finish even in async mode
        this.logger?.debug('fetch: async path without token, forcefully awaiting renewal');
        await renewalP;
      }
    }

    const current = this.cacheToken ?? this.fileCache.getCached();
    if (!current || current.isExpired()) {
      this.logger?.debug('fetch: no valid token -> throw');
      throw new RenewalError('No valid token available');
    }
    this.logger?.debug('fetch: return cached token', { token: current });
    return current;
  }

  isRenewalRequired(): boolean {
    const v = this.needRenew();
    this.logger?.trace('isRenewalRequired', { result: v });
    return v;
  }

  requestRenewal(): void {
    if (this.stopped) {
      this.logger?.trace('requestRenewal ignored (stopped)');
      return;
    }
    this.fresh = false;
    this.renewalRequested = true;
    this.logger?.trace('requestRenewal -> scheduled');
    this.scheduleNext(0);
  }

  /** Background runner: serialize renewals, backoff with jitter, reschedule next. */
  private async run(): Promise<void> {
    if (this.stopped) {
      this.logger?.debug('run: stopped');
      return;
    }

    // If no renewal is required, just reschedule based on current token
    const current = this.cacheToken ?? this.fileCache.getCached() ?? null;
    if (!this.renewalRequested && !this.needRenew()) {
      const delay = this.computeNextTimeoutMs(current);
      this.logger?.debug('run: not needed, reschedule', { delay });
      this.scheduleNext(delay);
      return;
    }
    this.logger?.trace('run: starting renewal', { renewalRequested: this.renewalRequested });

    let nextDelayMs = 0;

    try {
      const tok = await this.startRenewal();
      // Schedule next proactive renewal
      nextDelayMs = this.computeNextTimeoutMs(tok);
      this.renewAttempt = 0;
      this.logger?.debug('run: renewed', { nextDelayMs, token: tok });
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
    this.logger?.trace('run: done');
  }

  async close(graceMs?: number | undefined): Promise<void> {
    this.stopped = true;
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.drainWaitersWithError(new RenewalError('Bearer closed'));
    this.logger?.debug('close', { graceMs });
    await this.source.close(graceMs);
  }
}
