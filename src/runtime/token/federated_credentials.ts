import { inspect } from 'util';

import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
} from '../metrics.js';
import {
  type FederatedCredentialsReader,
  FederatedCredentialsTokenRequester,
  FileFederatedCredentials,
} from '../service_account/federated_credentials.js';
import { Bearer, NamedBearer, Receiver } from '../token.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';
import { ExchangeableBearer } from './exchangeable.js';
import { RenewableBearer } from './renewable.js';

import type { SDKInterface } from '../../sdk.js';

/**
 * Exchanges an external identity credential for renewable Nebius access
 * tokens.
 *
 * A string input is a credential file path, not a credential value. The file
 * is read again for each exchange. When you supply a reader, also supply the
 * target `serviceAccountId`.
 *
 * @example Use a rotating workload credential file
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { FederatedCredentialsBearer } from '@nebius/js-sdk/runtime/token/federated_credentials';
 *
 * // A prebuilt bearer needs a separate SDK for its unauthenticated exchange RPC.
 * const exchangeSdk = new SDK({
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * const credentials = new FederatedCredentialsBearer(
 *   '/var/run/secrets/nebius/credential',
 *   {
 *     sdk: exchangeSdk,
 *     serviceAccountId: 'serviceaccount-e00example',
 *   },
 * );
 * const sdk = new SDK({
 *   credentials,
 *   userAgentPrefix: 'example-application/1.0',
 * });
 *
 * try {
 *   // Use sdk clients here.
 * } finally {
 *   await sdk.close();
 *   await exchangeSdk.close();
 * }
 * ```
 *
 * Close the SDK during shutdown to stop background renewal.
 */
export class FederatedCredentialsBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.FederatedCredentialsBearer';
  private _exchangeable: ExchangeableBearer;
  private _renewable: RenewableBearer;
  private _source: Bearer;
  private readonly metrics: AuthMetricsRecorder;

  /**
   * Creates a renewable federated-credentials flow.
   *
   * Pass a {@link FederatedCredentialsTokenRequester} when you already
   * assembled the exchange request source. Pass a
   * {@link FederatedCredentialsReader} with `serviceAccountId` to let this
   * class assemble it.
   */
  constructor(
    federatedCredentials: FederatedCredentialsTokenRequester | FederatedCredentialsReader | string,
    opts?: {
      /**
       * SDK used for the token-exchange RPC.
       *
       * A prebuilt bearer must receive this SDK explicitly.
       */
      sdk?: SDKInterface | Promise<SDKInterface> | null;
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
      /** Target service-account ID. Required when the input is a credential reader. */
      serviceAccountId?: string | null;
      /** Optional authentication metrics destination. */
      metrics?: AuthMetricsInput;
      /** Optional destination for diagnostic events. */
      logger?: Logger;
    },
  ) {
    super();

    let fc: FederatedCredentialsTokenRequester | null = null;

    if (typeof federatedCredentials === 'string') {
      opts?.logger?.debug('creating FileFederatedCredentials from string');
      federatedCredentials = new FileFederatedCredentials(federatedCredentials);
    }

    if (typeof (federatedCredentials as FederatedCredentialsReader)?.credentials === 'function') {
      if (typeof opts?.serviceAccountId !== 'string') {
        throw new TypeError(
          'Service account ID must be provided as a string when federatedCredentials is a reader',
        );
      }
      opts?.logger?.debug('creating FederatedCredentialsTokenRequester from reader');
      fc = new FederatedCredentialsTokenRequester(
        opts.serviceAccountId,
        federatedCredentials as FederatedCredentialsReader,
        opts?.logger?.child('federated_credentials_requester'),
      );
    }

    if (!fc && federatedCredentials instanceof FederatedCredentialsTokenRequester) {
      opts?.logger?.debug('using passed FederatedCredentialsTokenRequester');
      fc = federatedCredentials as FederatedCredentialsTokenRequester;
    }

    if (!fc) {
      throw new TypeError(
        `federatedCredentials must be FederatedCredentialsTokenRequester, FederatedCredentialsReader or string, got ${typeof federatedCredentials}`,
      );
    }

    const maxRetries = opts?.maxRetries ?? 2;
    this.metrics = authMetricsRecorder(opts?.metrics, 'federated-credentials');

    this._exchangeable = new ExchangeableBearer(
      fc,
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
      provider: 'federated-credentials',
      logger: opts?.logger?.child('renewable'),
    });

    this._source = this._renewable;

    if (
      fc instanceof FederatedCredentialsTokenRequester &&
      fc.credentials instanceof FileFederatedCredentials
    ) {
      opts?.logger?.debug('wrapping with NamedBearer as the credentials are file-based', {
        filePath: fc.credentials.filePath,
        serviceAccountId: fc.serviceAccountId,
      });
      this._source = new NamedBearer(
        this._source,
        `federated-credentials/${fc.serviceAccountId}/${fc.credentials.filePath}`,
      );
    }
  }
  [custom](): string {
    return `FederatedCredentialsBearer(source=${inspect(this._source)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: 'FederatedCredentialsBearer',
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

  /** Creates a token receiver. */
  receiver(): Receiver {
    return this._source.receiver();
  }
}
