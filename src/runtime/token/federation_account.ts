import { Bearer, NamedBearer, Receiver } from '../token';
import { AsyncRenewableBearer } from './file_cache/async_renewable_bearer';
import { FederationBearer as FederationAuthBearer } from './federation_bearer';

export class FederationAccountBearer extends Bearer {
  private _source: AsyncRenewableBearer;

  constructor(
    profileName: string,
    clientId: string,
    federationEndpoint: string,
    federationId: string,
    opts?: {
      writer?: (s: string) => void;
      noBrowserOpen?: boolean;
      timeoutMs?: number; // refresh request timeout
      maxRetries?: number;
      initialSafetyMarginMs?: number | null; // default 2h
      retrySafetyMarginMs?: number; // kept for parity; not used directly
      lifetimeSafeFraction?: number; // default 0.9
      initialRetryTimeoutMs?: number; // default 1s
      maxRetryTimeoutMs?: number; // default 60s
      retryTimeoutExponent?: number; // default 1.5
      fileCacheThrottleMs?: number; // default 5m
      cacheFilePath?: string; // custom credentials file path
    },
  ) {
    super();

    const auth = new FederationAuthBearer(
      profileName,
      clientId,
      federationEndpoint,
      federationId,
      opts?.writer,
      opts?.noBrowserOpen ?? false,
    );

    const renewable = new AsyncRenewableBearer(auth, {
      maxRetries: opts?.maxRetries ?? 2,
      initialSafetyMarginMs: opts?.initialSafetyMarginMs ?? 2 * 60 * 60 * 1000,
      retrySafetyMarginMs: opts?.retrySafetyMarginMs ?? 2 * 60 * 60 * 1000,
      lifetimeSafeFraction: opts?.lifetimeSafeFraction ?? 0.9,
      initialRetryTimeoutMs: opts?.initialRetryTimeoutMs ?? 1_000,
      maxRetryTimeoutMs: opts?.maxRetryTimeoutMs ?? 60_000,
      retryTimeoutExponent: opts?.retryTimeoutExponent ?? 1.5,
      refreshRequestTimeoutMs: opts?.timeoutMs ?? 5 * 60 * 1000,
      fileCacheThrottleMs: opts?.fileCacheThrottleMs ?? 5 * 60 * 1000,
      cacheFilePath: opts?.cacheFilePath,
    });

    this._source = renewable;
  }

  get wrapped(): Bearer | undefined {
    return this._source;
  }

  receiver(): Receiver {
    return this._source.receiver();
  }
}
