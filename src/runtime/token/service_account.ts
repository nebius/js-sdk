import type { SDKInterface } from '../../sdk';
import { Bearer, NamedBearer, Receiver } from '../token';
import { RenewableBearer } from './renewable';
import { ExchangeableBearer } from './exchangeable';
import type { Reader as ServiceAccountReader } from '../service_account/service_account';
import { ServiceAccount } from '../service_account/service_account';

export class ServiceAccountBearer extends Bearer {
  private _exchangeable: ExchangeableBearer;
  private _source: NamedBearer;

  constructor(
    serviceAccount: ServiceAccountReader | ServiceAccount | string,
    opts?: {
      sdk?: SDKInterface | Promise<SDKInterface> | null;
      privateKeyPem?: string; // required when serviceAccount is string
      publicKeyId?: string; // required when serviceAccount is string
      maxRetries?: number;
      lifetimeSafeFraction?: number;
      initialRetryTimeoutMs?: number;
      maxRetryTimeoutMs?: number;
      retryTimeoutExponent?: number;
      refreshRequestTimeoutMs?: number;
    },
  ) {
    super();

    let reader: ServiceAccountReader | null = null;
    if (isServiceAccountReader(serviceAccount)) {
      reader = serviceAccount;
      serviceAccount = serviceAccount.read();
    }

    if (typeof serviceAccount === 'string') {
      if (typeof opts?.privateKeyPem !== 'string' || opts.privateKeyPem.trim() === '') {
        throw new TypeError('Private key (PEM) must be provided when serviceAccount is a string');
      }
      if (typeof opts?.publicKeyId !== 'string' || opts.publicKeyId.trim() === '') {
        throw new TypeError('Public key ID must be provided when serviceAccount is a string');
      }
      serviceAccount = new ServiceAccount(opts.privateKeyPem, opts.publicKeyId, serviceAccount);
    } else {
      if (opts?.privateKeyPem !== undefined || opts?.publicKeyId !== undefined) {
        throw new TypeError('privateKeyPem and publicKeyId must not be provided when serviceAccount is ServiceAccount or ServiceAccountReader');
      }
    }

    if (!(serviceAccount instanceof ServiceAccount)) {
      throw new TypeError(`serviceAccount must be ServiceAccountReader, ServiceAccount or string, got ${typeof serviceAccount}`);
    }

    if (!reader) {
      // Inline simple reader wrapper
      reader = { read: () => serviceAccount, getExchangeTokenRequest: () => serviceAccount.getExchangeTokenRequest() } as ServiceAccountReader;
    }

    const saId = serviceAccount.serviceAccountId;
    const publicKeyId = serviceAccount.publicKeyId;

    const maxRetries = opts?.maxRetries ?? 2;

    this._exchangeable = new ExchangeableBearer(reader, opts?.sdk ?? null, maxRetries);

    const renewable = new RenewableBearer(this._exchangeable, {
      maxRetries,
      lifetimeSafeFraction: opts?.lifetimeSafeFraction ?? 0.9,
      initialRetryTimeoutMs: opts?.initialRetryTimeoutMs ?? 1_000,
      maxRetryTimeoutMs: opts?.maxRetryTimeoutMs ?? 60_000,
      retryTimeoutExponent: opts?.retryTimeoutExponent ?? 1.5,
      refreshRequestTimeoutMs: opts?.refreshRequestTimeoutMs ?? 5_000,
    });

    this._source = new NamedBearer(renewable, `service-account/${saId}/${publicKeyId}`);
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

function isServiceAccountReader(x: any): x is ServiceAccountReader {
  return x && typeof x === 'object' && typeof x.read === 'function' && typeof x.getExchangeTokenRequest === 'function';
}
