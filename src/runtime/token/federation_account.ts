import { inspect } from 'util';

import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
} from '../metrics.js';
import { Bearer, Receiver } from '../token.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';
import { FederationBearer as FederationAuthBearer } from './federation_bearer/index.js';
import { AsyncRenewableBearer } from './file_cache/async_renewable_bearer.js';

/**
 * Provides cached, renewable credentials for an interactive federation
 * account.
 *
 * On the first login, the bearer opens a browser unless `noBrowserOpen` is
 * true. It writes the authorization URL with `writer`, waits for the local
 * callback, and stores the access token in the shared credentials file.
 * Later processes can reuse the cached token for the same profile.
 *
 * This flow is intended for people at a workstation. Use a service account or
 * workload federation for unattended applications.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { FederationAccountBearer } from '@nebius/js-sdk/runtime/token/federation_account';
 *
 * const credentials = new FederationAccountBearer(
 *   'developer',
 *   'client-id',
 *   'https://auth.example',
 *   'federation-id',
 * );
 * const sdk = new SDK({
 *   credentials,
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class FederationAccountBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.FederationAccountBearer';
  private _source: AsyncRenewableBearer;
  private readonly metrics: AuthMetricsRecorder;

  /**
   * Creates an interactive federation flow for `profileName`.
   *
   * `timeoutMs` limits the wait for the browser callback. It does not limit the
   * following token HTTP request. `cacheFilePath` selects the shared token
   * cache. Close the SDK to stop renewal timers.
   */
  constructor(
    profileName: string,
    clientId: string,
    federationEndpoint: string,
    federationId: string,
    opts?: {
      /** Receives the authorization URL. The default writer uses `console.log`. */
      writer?: (s: string) => void;
      /** Optional destination for diagnostic events. */
      logger?: Logger;
      /** Prevents automatic browser launch when `true`. */
      noBrowserOpen?: boolean;
      /**
       * Timeout for the browser callback, in milliseconds.
       *
       * This value does not limit the following token HTTP request.
       */
      timeoutMs?: number;
      /** Maximum total authentication attempts for one receiver. Defaults to 2. */
      maxRetries?: number;
      /**
       * Extra lifetime required for the first cached token.
       *
       * Defaults to two hours. `null` also selects this default. Valid cache
       * hits keep the margin for later fetches. A fetch clears it only after it
       * proceeds into the renewal path.
       */
      initialSafetyMarginMs?: number | null;
      /** Reserved for compatibility. The JavaScript implementation does not use this value. */
      retrySafetyMarginMs?: number;
      /**
       * Fraction of remaining lifetime to wait before renewal.
       *
       * The default `0.9` renews with about 10% of the lifetime left.
       */
      lifetimeSafeFraction?: number;
      /** Initial renewal backoff. Defaults to one second. */
      initialRetryTimeoutMs?: number;
      /** Maximum renewal backoff. Defaults to 60 seconds. */
      maxRetryTimeoutMs?: number;
      /** Multiplier for exponential renewal backoff. Defaults to `1.5`. */
      retryTimeoutExponent?: number;
      /** Minimum interval between cache-file reads. Defaults to five minutes. */
      fileCacheThrottleMs?: number;
      /** Custom shared credentials-file path. */
      cacheFilePath?: string;
      /** Extra trusted CA certificates. This bearer currently forwards only a `Buffer` value. */
      ca?: Buffer | string | string[];
      /** Optional authentication metrics destination. */
      metrics?: AuthMetricsInput;
    },
  ) {
    super();
    this.metrics = authMetricsRecorder(opts?.metrics, 'federation');

    const auth = new FederationAuthBearer(
      profileName,
      clientId,
      federationEndpoint,
      federationId,
      opts?.writer,
      opts?.noBrowserOpen ?? false,
      opts?.ca instanceof Buffer ? opts.ca : undefined,
      opts?.logger?.child('federation_auth'),
      this.metrics,
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
      metrics: this.metrics,
      provider: 'federation',
      logger: opts?.logger?.child('renewable'),
    });

    this._source = renewable;
  }
  [custom](): string {
    return `FederationAccountBearer(source=${inspect(this._source)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: 'FederationAccountBearer',
      source: inspectJson(this._source),
    };
  }

  /** Returns the wrapped bearer. */
  get wrapped(): Bearer | undefined {
    return this._source;
  }

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    this._source.setMetrics(this.metrics);
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    return this._source.receiver();
  }
}
