import type { SDKInterface } from '../../sdk';
import type { FederatedCredentialsReader } from '../service_account/federated_credentials';
import {
  FederatedCredentialsTokenRequester,
  FileFederatedCredentials,
} from '../service_account/federated_credentials';
import { Bearer, NamedBearer, Receiver } from '../token';

import { ExchangeableBearer } from './exchangeable';
import { RenewableBearer } from './renewable';

export class FederatedCredentialsBearer extends Bearer {
  private _exchangeable: ExchangeableBearer;
  private _source: Bearer;

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
    },
  ) {
    super();

    let fc: FederatedCredentialsTokenRequester | null = null;

    if (typeof federatedCredentials === 'string') {
      federatedCredentials = new FileFederatedCredentials(federatedCredentials);
    }

    if (typeof (federatedCredentials as FederatedCredentialsReader)?.credentials === 'function') {
      if (typeof opts?.serviceAccountId !== 'string') {
        throw new TypeError(
          'Service account ID must be provided as a string when federatedCredentials is a reader',
        );
      }
      fc = new FederatedCredentialsTokenRequester(
        opts.serviceAccountId,
        federatedCredentials as FederatedCredentialsReader,
      );
    }

    if (!fc && federatedCredentials instanceof FederatedCredentialsTokenRequester) {
      fc = federatedCredentials as FederatedCredentialsTokenRequester;
    }

    if (!fc) {
      throw new TypeError(
        `federatedCredentials must be FederatedCredentialsTokenRequester, FederatedCredentialsReader or string, got ${typeof federatedCredentials}`,
      );
    }

    const maxRetries = opts?.maxRetries ?? 2;

    this._exchangeable = new ExchangeableBearer(fc, opts?.sdk ?? null, maxRetries);

    const renewable = new RenewableBearer(this._exchangeable, {
      maxRetries,
      lifetimeSafeFraction: opts?.lifetimeSafeFraction,
      initialRetryTimeoutMs: opts?.initialRetryTimeoutMs,
      maxRetryTimeoutMs: opts?.maxRetryTimeoutMs,
      retryTimeoutExponent: opts?.retryTimeoutExponent,
      refreshRequestTimeoutMs: opts?.refreshRequestTimeoutMs,
    });

    this._source = renewable;

    if (
      fc instanceof FederatedCredentialsTokenRequester &&
      fc.credentials instanceof FileFederatedCredentials
    ) {
      this._source = new NamedBearer(
        this._source,
        `federated-credentials/${fc.serviceAccountId}/${fc.credentials.filePath}`,
      );
    }
  }

  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    this._exchangeable.setSDK(sdk);
  }

  get wrapped(): Bearer | undefined {
    return this._source;
  }

  receiver(): Receiver {
    return this._source.receiver();
  }
}
