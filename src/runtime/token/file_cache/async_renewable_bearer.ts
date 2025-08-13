import { Bearer, Receiver, Token } from '../../token';
import { ThrottledTokenCache } from './throttled_token_cache';
import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import type { AuthorizationOptions } from '../../authorization/provider';

// A lightweight async renewable bearer using setTimeout for background scheduling

class AsyncRenewableReceiver extends Receiver {
  private trial = 0;
  constructor(private readonly parent: AsyncRenewableBearer, private readonly defaultMaxRetries: number = 2) { super(); }

  protected async _fetch(timeoutMs?: number, options?: AuthorizationOptions | undefined): Promise<Token> {
    this.trial += 1;
    return await this.parent.fetch(timeoutMs, options);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions | undefined): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    const synchronous = Boolean(options?.renewSynchronous);
    if (this.trial >= maxRetries) return false;
    if (!synchronous) this.parent.requestRenewal();
    return true;
  }
}

export class AsyncRenewableBearer extends Bearer {
  private readonly fileCache: ThrottledTokenCache;
  private refreshTimer: NodeJS.Timeout | null = null;
  private stopped = false;
  private isFresh = false;
  private renewalRequested = false;
  private breakPreviousAttempt = false;
  private pendingRenewResolve: ((t: Token) => void) | null = null;
  private pendingRenewReject: ((e: unknown) => void) | null = null;
  private renewSyncTimeoutMs: number | null = null;
  private renewSyncOptions: AuthorizationOptions | null = null;
  private waitFreshResolvers: Array<() => void> = [];
  private renewalAttempt = 0;

  // tuning
  private readonly lifetimeSafeFraction: number;
  private readonly initialRetryTimeoutMs: number;
  private readonly maxRetryTimeoutMs: number;
  private readonly retryTimeoutExponent: number;
  public safetyMargin: number | null; // ms; null means no margin

  constructor(
    private readonly source: Bearer,
    opts?: {
      maxRetries?: number;
      initialSafetyMarginMs?: number | null; // null keeps always renew
      retrySafetyMarginMs?: number; // not used directly in JS variant
      lifetimeSafeFraction?: number;
      initialRetryTimeoutMs?: number;
      maxRetryTimeoutMs?: number;
      retryTimeoutExponent?: number;
      refreshRequestTimeoutMs?: number;
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
    this.initialRetryTimeoutMs = opts?.initialRetryTimeoutMs ?? 1_000;
    this.maxRetryTimeoutMs = opts?.maxRetryTimeoutMs ?? 60_000;
    this.retryTimeoutExponent = opts?.retryTimeoutExponent ?? 1.5;
    this.safetyMargin = opts?.initialSafetyMarginMs ?? 2 * 60 * 60 * 1000;
    this.refreshRequestTimeoutMs = opts?.refreshRequestTimeoutMs ?? 5_000;
    this.maxRetries = opts?.maxRetries ?? 2;
  }

  private refreshRequestTimeoutMs: number;
  private maxRetries: number;

  get wrapped(): Bearer | undefined { return this.source; }

  receiver(): Receiver { return new AsyncRenewableReceiver(this, this.maxRetries); }

  private scheduleNext(ms: number) {
    if (this.stopped) return;
    if (this.refreshTimer) clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => void this.run(), Math.max(ms, this.initialRetryTimeoutMs));
  }

  private computeNextTimeoutMs(tok: Token | undefined): number {
    if (!tok || tok.isExpired()) return 0;
    const exp = tok.expiration?.getTime();
    if (!exp) return 10 * 365 * 24 * 60 * 60 * 1000; // very long
    return Math.max(0, (exp - Date.now()) * this.lifetimeSafeFraction);
  }

  private async fetchOnce(): Promise<Token> {
    this.breakPreviousAttempt = false;
    const timeoutMs = this.renewSyncTimeoutMs ?? this.refreshRequestTimeoutMs;
    this.renewSyncTimeoutMs = null;
    const recv = this.source.receiver();
    const fetchPromise = recv.fetch(timeoutMs, this.renewSyncOptions ?? undefined);
    this.renewSyncOptions = null;
    const breaker = new Promise<Token>((_resolve, reject) => {
      const check = () => {
        if (this.breakPreviousAttempt) {
          reject(new Error('Renewal attempt superseded'));
        } else if (!this.stopped) {
          setTimeout(check, 50);
        }
      };
      setTimeout(check, 50);
    });
    const tok = await Promise.race([fetchPromise, breaker]).catch((e) => { throw e; });
    await this.fileCache.set(tok);
    this.renewalAttempt = 0;
    this.isFresh = true;
    for (const resolve of this.waitFreshResolvers.splice(0)) resolve();
    if (this.pendingRenewResolve) { this.pendingRenewResolve(tok); }
    this.pendingRenewResolve = this.pendingRenewReject = null;
    return tok;
  }

  async fetch(timeoutMs?: number, options?: AuthorizationOptions | undefined): Promise<Token> {
    const renewRequired = Boolean(options?.renewRequired);
    const renewSynchronous = Boolean(options?.renewSynchronous);
    const reportError = Boolean(options?.reportError);

    const tok = await this.fileCache.get();
    if (!renewRequired && tok && !tok.isExpired()) {
      const margin = this.safetyMargin;
      if (
        margin == null ||
        !tok.expiration ||
        tok.expiration.getTime() - margin > Date.now()
      ) {
        if (!this.refreshTimer) this.scheduleNext(this.computeNextTimeoutMs(tok));
        return tok;
      }
    }
    this.safetyMargin = null; // reset after first fetch
    if (!this.refreshTimer) this.scheduleNext(0);

    if (this.isRenewalRequired() || renewRequired) {
      if (renewSynchronous) {
        this.breakPreviousAttempt = true;
        // override timeout for sync request if provided
        this.renewSyncTimeoutMs = typeof options?.renewRequestTimeoutMs === 'number' ? options?.renewRequestTimeoutMs : null;
        this.renewSyncOptions = options ?? null;
      }
      if (reportError || renewSynchronous) {
        const p = new Promise<Token>((resolve, reject) => { this.pendingRenewResolve = resolve; this.pendingRenewReject = reject; });
        this.requestRenewal();
        return await (timeoutMs ? Promise.race([
          p,
          new Promise<Token>((_, reject) => setTimeout(() => reject(new Error('Renewal timeout')), timeoutMs))
        ]) : p);
      }
      this.requestRenewal();
      if (timeoutMs) {
        await new Promise<void>((resolve, reject) => {
          const to = setTimeout(() => reject(new Error('Timeout waiting fresh token')), timeoutMs);
          this.waitFreshResolvers.push(() => { clearTimeout(to); resolve(); });
        });
      }
    }

    const after = await this.fileCache.get();
    if (!after) throw new Error('cache is empty after renewal');
    return after;
  }

  isRenewalRequired(): boolean { return !this.fileCache.getCached() || this.renewalRequested; }

  requestRenewal(): void {
    if (this.stopped) return;
    this.isFresh = false;
    this.renewalRequested = true;
    this.scheduleNext(0);
  }

  private async run(): Promise<void> {
    this.renewalRequested = false;
    let retryMs = 0;
    try {
      const tok = await this.fetchOnce();
      retryMs = this.computeNextTimeoutMs(tok);
    } catch (e) {
      this.renewalAttempt += 1;
      if (this.pendingRenewReject) this.pendingRenewReject(e);
      if (this.renewalAttempt <= 1 || Math.abs(this.retryTimeoutExponent - 1) < 1e-9) {
        retryMs = this.initialRetryTimeoutMs;
      } else {
        const mul = Math.pow(this.retryTimeoutExponent, this.renewalAttempt - 1);
        retryMs = Math.min(this.initialRetryTimeoutMs * mul, this.maxRetryTimeoutMs);
      }
    }
    if (retryMs < this.initialRetryTimeoutMs) retryMs = this.initialRetryTimeoutMs;
    this.scheduleNext(retryMs);
  }

  async close(graceMs?: number | undefined): Promise<void> {
    await this.source.close(graceMs);
    this.stopped = true;
    if (this.refreshTimer) { clearTimeout(this.refreshTimer); this.refreshTimer = null; }
    this.pendingRenewReject?.(new Error('Bearer closed'));
    this.pendingRenewResolve = this.pendingRenewReject = null;
    for (const resolve of this.waitFreshResolvers.splice(0)) resolve();
  }
}
