import { inspect } from 'util';

import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
} from '../metrics.js';
import {
  ServiceAccount,
  type Reader as ServiceAccountReader,
} from '../service_account/service_account.js';
import { StaticReader } from '../service_account/static.js';
import { Bearer, NamedBearer, Receiver } from '../token.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';
import { ExchangeableBearer } from './exchangeable.js';
import { RenewableBearer } from './renewable.js';

import type { SDKInterface } from '../../sdk.js';

/**
 * Provides automatically renewed access tokens for a service account.
 *
 * This is the main service-account credential for the
 * {@link https://nebius.github.io/js-sdk/classes/sdk.SDK.html | SDK}. It signs
 * a short-lived assertion, exchanges it for an access token, keeps the access
 * token in memory, and renews it before expiration.
 *
 * @example Use separate service-account fields
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 *
 * // Raw service-account values let SDK create and connect the exchange flow.
 * const sdk = new SDK({
 *   credentials: {
 *     serviceAccountId: process.env.NEBIUS_SERVICE_ACCOUNT_ID ?? '',
 *     privateKeyPem: process.env.NEBIUS_PRIVATE_KEY_PEM ?? '',
 *     publicKeyId: process.env.NEBIUS_PUBLIC_KEY_ID ?? '',
 *   },
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 *
 * Close the SDK during shutdown. This stops the renewal timer.
 */
export class ServiceAccountBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.ServiceAccountBearer';
  private _exchangeable: ExchangeableBearer;
  private _renewable: RenewableBearer;
  private _source: NamedBearer;
  private readonly metrics: AuthMetricsRecorder;

  /**
   * Creates renewable service-account credentials.
   *
   * `serviceAccount` can be a reader, a complete {@link ServiceAccount}, or a
   * service account ID. When it is an ID, `privateKeyPem` and `publicKeyId`
   * are required. Do not supply these two options for the other input forms.
   */
  constructor(
    serviceAccount: ServiceAccountReader | ServiceAccount | string,
    opts?: {
      /**
       * SDK used for the token-exchange RPC.
       *
       * Required for a prebuilt bearer. As an easier alternative, pass raw
       * service-account values to `new SDK({ credentials: ... })`.
       */
      sdk?: SDKInterface | Promise<SDKInterface> | null;
      /** PEM private key. Required only when `serviceAccount` is an ID string. */
      privateKeyPem?: string;
      /** Registered public-key ID. Required only when `serviceAccount` is an ID string. */
      publicKeyId?: string;
      /** Maximum total authentication attempts for one receiver. Defaults to 2. */
      maxRetries?: number;
      /** Fraction of token lifetime to wait before proactive renewal. */
      lifetimeSafeFraction?: number;
      /** Initial renewal backoff, in milliseconds. */
      initialRetryTimeoutMs?: number;
      /** Maximum renewal backoff, in milliseconds. */
      maxRetryTimeoutMs?: number;
      /** Multiplier for exponential renewal backoff. */
      retryTimeoutExponent?: number;
      /**
       * Default token-exchange request budget, in milliseconds.
       *
       * It applies to foreground and background renewal when the caller does
       * not supply a synchronous override.
       */
      refreshRequestTimeoutMs?: number;
      /** Optional authentication metrics destination. */
      metrics?: AuthMetricsInput;
      /** Optional destination for diagnostic events. */
      logger?: Logger;
    },
  ) {
    super();

    let reader: ServiceAccountReader | null = null;
    if (isServiceAccountReader(serviceAccount)) {
      opts?.logger?.trace('using provided ServiceAccountReader, will name after first read');
      reader = serviceAccount;
      serviceAccount = serviceAccount.read();
      opts?.logger?.trace('read ServiceAccount from ServiceAccountReader', {
        serviceAccountId: serviceAccount.serviceAccountId,
        publicKeyId: serviceAccount.publicKeyId,
      });
    }

    if (typeof serviceAccount === 'string') {
      opts?.logger?.trace('creating ServiceAccount from string');
      if (typeof opts?.privateKeyPem !== 'string' || opts.privateKeyPem.trim() === '') {
        throw new TypeError('Private key (PEM) must be provided when serviceAccount is a string');
      }
      if (typeof opts?.publicKeyId !== 'string' || opts.publicKeyId.trim() === '') {
        throw new TypeError('Public key ID must be provided when serviceAccount is a string');
      }
      serviceAccount = new ServiceAccount(opts.privateKeyPem, opts.publicKeyId, serviceAccount);
      opts?.logger?.trace('created ServiceAccount from string', {
        serviceAccountId: serviceAccount.serviceAccountId,
        publicKeyId: serviceAccount.publicKeyId,
      });
    } else {
      if (opts?.privateKeyPem !== undefined || opts?.publicKeyId !== undefined) {
        throw new TypeError(
          'privateKeyPem and publicKeyId must not be provided when serviceAccount is ServiceAccount or ServiceAccountReader',
        );
      }
    }

    if (!(serviceAccount instanceof ServiceAccount)) {
      throw new TypeError(
        `serviceAccount must be ServiceAccountReader, ServiceAccount or string, got ${typeof serviceAccount}`,
      );
    }

    if (!reader) {
      opts?.logger?.trace('using ServiceAccount directly');
      reader = new StaticReader(serviceAccount);
    }

    const saId = serviceAccount.serviceAccountId;
    const publicKeyId = serviceAccount.publicKeyId;

    const maxRetries = opts?.maxRetries ?? 2;
    this.metrics = authMetricsRecorder(opts?.metrics, 'service-account');

    this._exchangeable = new ExchangeableBearer(
      reader,
      opts?.sdk ?? null,
      maxRetries,
      opts?.logger?.child('exchangeable'),
      this.metrics,
    );

    this._renewable = new RenewableBearer(this._exchangeable, {
      maxRetries,
      lifetimeSafeFraction: opts?.lifetimeSafeFraction,
      initialRetryTimeoutMs: opts?.initialRetryTimeoutMs,
      maxRetryTimeoutMs: opts?.maxRetryTimeoutMs,
      retryTimeoutExponent: opts?.retryTimeoutExponent,
      refreshRequestTimeoutMs: opts?.refreshRequestTimeoutMs,
      metrics: this.metrics,
      provider: 'service-account',
      logger: opts?.logger?.child('renewable'),
    });

    this._source = new NamedBearer(this._renewable, `service-account/${saId}/${publicKeyId}`);
  }
  [custom](): string {
    return `${this.$type}(${inspect(this._source)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      source: inspectJson(this._source),
    };
  }

  /** Sets or clears the SDK used for token exchange. */
  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    this._exchangeable.setSDK(sdk);
  }

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    this._exchangeable.setMetrics(this.metrics);
    this._renewable.setMetrics(this.metrics);
  }

  /** Returns the wrapped bearer. */
  get wrapped(): Bearer | undefined {
    return this._source;
  }

  /**
   * Creates a receiver that shares this bearer’s renewal state.
   *
   * The bearer must have the exchange SDK supplied in its constructor options
   * before the first token exchange. An SDK does not connect a prebuilt bearer.
   */
  receiver(): Receiver {
    return this._source.receiver();
  }
}

function isServiceAccountReader(x: unknown): x is ServiceAccountReader {
  return (
    isObject(x) && typeof x.read === 'function' && typeof x.getExchangeTokenRequest === 'function'
  );
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
