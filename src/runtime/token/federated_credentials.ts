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

export class FederatedCredentialsBearer extends Bearer {
  public readonly $type = 'nebius.sdk.FederatedCredentialsBearer';
  private _exchangeable: ExchangeableBearer;
  private _renewable: RenewableBearer;
  private _source: Bearer;
  private readonly metrics: AuthMetricsRecorder;

  constructor(
    federatedCredentials: FederatedCredentialsTokenRequester | FederatedCredentialsReader | string,
    opts?: {
      sdk?: SDKInterface | Promise<SDKInterface> | null;
      maxRetries?: number;
      lifetimeSafeFraction?: number;
      initialRetryTimeoutMs?: number;
      maxRetryTimeoutMs?: number;
      retryTimeoutExponent?: number;
      refreshRequestTimeoutMs?: number;
      serviceAccountId?: string | null; // required when passing reader
      metrics?: AuthMetricsInput;
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
  [customJson](): unknown {
    return {
      type: 'FederatedCredentialsBearer',
      source: inspectJson(this._source),
    };
  }

  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    this._exchangeable.setSDK(sdk);
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    this._exchangeable.setMetrics(this.metrics);
    this._renewable.setMetrics(this.metrics);
  }

  get wrapped(): Bearer | undefined {
    return this._source;
  }

  receiver(): Receiver {
    return this._source.receiver();
  }
}
