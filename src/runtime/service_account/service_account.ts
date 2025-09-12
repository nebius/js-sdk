import { createSign } from 'crypto';

import { ExchangeTokenRequest } from '../../generated/nebius/iam/v1/index';
import { TokenRequester } from '../token/exchangeable';
import { custom, customJson } from '../util/logging';

export interface ServiceAccountLike extends TokenRequester {
  readonly privateKeyPem: string; // PEM-encoded private key (PKCS#8 or PKCS#1)
  readonly publicKeyId: string; // KID
  readonly serviceAccountId: string; // subject/issuer
}

function b64url(data: Buffer | string): string {
  const buf = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export class ServiceAccount implements ServiceAccountLike {
  constructor(
    public readonly privateKeyPem: string,
    public readonly publicKeyId: string,
    public readonly serviceAccountId: string,
  ) {}

  [custom](): string {
    return `ServiceAccount(id=${this.serviceAccountId}, kid=${this.publicKeyId})`;
  }
  [customJson](): object {
    return {
      service_account_id: this.serviceAccountId,
      public_key_id: this.publicKeyId,
    };
  }

  getExchangeTokenRequest(): ExchangeTokenRequest {
    const nowSec = Math.floor(Date.now() / 1000);
    const expSec = nowSec + 60; // 1 minute TTL as in Python

    const header = { alg: 'RS256', kid: this.publicKeyId, typ: 'JWT' } as const;
    const payload = {
      iss: this.serviceAccountId,
      sub: this.serviceAccountId,
      aud: 'token-service.iam.new.nebiuscloud.net',
      exp: expSec,
      iat: nowSec,
    } as const;

    const encodedHeader = b64url(JSON.stringify(header));
    const encodedPayload = b64url(JSON.stringify(payload));
    const signingInput = `${encodedHeader}.${encodedPayload}`;

    const signer = createSign('RSA-SHA256');
    signer.update(signingInput);
    signer.end();
    const signature = signer.sign(this.privateKeyPem);
    const encodedSignature = b64url(signature);

    const subjectToken = `${signingInput}.${encodedSignature}`;

    return ExchangeTokenRequest.create({
      grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
      requestedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
      subjectToken,
      subjectTokenType: 'urn:ietf:params:oauth:token-type:jwt',
      scopes: [],
      audience: '',
      actorToken: '',
      actorTokenType: '',
      resource: [],
    });
  }
}

export interface Reader extends TokenRequester {
  read(): ServiceAccount;
}
