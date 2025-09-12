import { inspect } from 'util';

import type { SDKInterface } from '../../sdk';
import type { Reader as ServiceAccountReader } from '../service_account/service_account';
import { ServiceAccount } from '../service_account/service_account';
import { Bearer, NamedBearer, Receiver } from '../token';
import { custom, customJson, inspectJson, Logger } from '../util/logging';

import { ExchangeableBearer } from './exchangeable';
import { RenewableBearer } from './renewable';

export class ServiceAccountBearer extends Bearer {
  public readonly $type = 'nebius.sdk.ServiceAccountBearer';
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
      // Inline simple reader wrapper
      reader = {
        read: () => serviceAccount,
        getExchangeTokenRequest: () => serviceAccount.getExchangeTokenRequest(),
      } as ServiceAccountReader;
    }

    const saId = serviceAccount.serviceAccountId;
    const publicKeyId = serviceAccount.publicKeyId;

    const maxRetries = opts?.maxRetries ?? 2;

    this._exchangeable = new ExchangeableBearer(
      reader,
      opts?.sdk ?? null,
      maxRetries,
      opts?.logger?.child('exchangeable'),
    );

    const renewable = new RenewableBearer(this._exchangeable, {
      maxRetries,
      lifetimeSafeFraction: opts?.lifetimeSafeFraction,
      initialRetryTimeoutMs: opts?.initialRetryTimeoutMs,
      maxRetryTimeoutMs: opts?.maxRetryTimeoutMs,
      retryTimeoutExponent: opts?.retryTimeoutExponent,
      refreshRequestTimeoutMs: opts?.refreshRequestTimeoutMs,
      logger: opts?.logger?.child('renewable'),
    });

    this._source = new NamedBearer(renewable, `service-account/${saId}/${publicKeyId}`);
  }
  [custom](): string {
    return `${this.$type}(${inspect(this._source)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      source: inspectJson(this._source),
    };
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isServiceAccountReader(x: any): x is ServiceAccountReader {
  return (
    x &&
    typeof x === 'object' &&
    typeof x.read === 'function' &&
    typeof x.getExchangeTokenRequest === 'function'
  );
}
