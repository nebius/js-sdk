import { createSign } from 'crypto';

import { ExchangeTokenRequest } from '../../api/nebius/iam/v1/index.js';
import { TokenRequester } from '../token/exchangeable.js';
import { custom, customJson, Logger } from '../util/logging.js';

/**
 * Supplies the fields that are required to sign a service-account token.
 *
 * `privateKeyPem` is secret. Do not print, serialize, or send it to an API
 * other than the local signing operation. The SDK sends both IDs as supplied;
 * it does not validate their format locally.
 */
export interface ServiceAccountLike extends TokenRequester {
  /** Contains a PEM-encoded PKCS#8 or PKCS#1 private key. */
  readonly privateKeyPem: string;
  /** Contains the public key ID. */
  readonly publicKeyId: string;
  /** Contains the service account ID used as the JWT subject and issuer. */
  readonly serviceAccountId: string;
}

function b64url(data: Buffer | string): string {
  const buf = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * Creates signed JWT assertions for service-account token exchange.
 *
 * This object does not call the token service. Use it with
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_service_account.ServiceAccountBearer.html | ServiceAccountBearer},
 * which exchanges the short-lived assertion and renews the resulting access
 * token.
 *
 * @example Create credentials from an in-memory private key
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { ServiceAccount } from '@nebius/js-sdk/runtime/service_account/service_account';
 *
 * const account = new ServiceAccount(
 *   process.env.NEBIUS_PRIVATE_KEY_PEM ?? '',
 *   process.env.NEBIUS_PUBLIC_KEY_ID ?? '',
 *   process.env.NEBIUS_SERVICE_ACCOUNT_ID ?? '',
 * );
 * const sdk = new SDK({
 *   // SDK recognizes this value and creates the connected renewable bearer.
 *   credentials: account,
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class ServiceAccount implements ServiceAccountLike {
  /**
   * Creates service-account signing credentials.
   *
   * Signing parses and validates the private key. The public-key and
   * service-account IDs are sent as supplied, so the remote service can reject
   * missing or invalid IDs.
   */
  constructor(
    /** PEM-encoded RSA private key. Treat this value as a secret. */ public readonly privateKeyPem: string,
    /** ID of the public key registered for the service account. */ public readonly publicKeyId: string,
    /** ID of the service account that owns the key. */ public readonly serviceAccountId: string,
    /** Optional destination for diagnostic events. */ readonly logger?: Logger,
  ) {}

  [custom](): string {
    return `ServiceAccount(id=${this.serviceAccountId}, kid=${this.publicKeyId})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      service_account_id: this.serviceAccountId,
      public_key_id: this.publicKeyId,
    };
  }

  /**
   * Creates a token-exchange request with a newly signed, one-minute JWT.
   *
   * The request contains a secret assertion. Send it directly to the token
   * exchange service and do not log or persist it.
   */
  getExchangeTokenRequest(): ExchangeTokenRequest {
    const nowSec = Math.floor(Date.now() / 1000);
    const expSec = nowSec + 60; // 1 minute TTL
    const logger = this.logger?.withFields({
      serviceAccountId: this.serviceAccountId,
      publicKeyId: this.publicKeyId,
    });
    logger?.trace('creating JWT for ExchangeTokenRequest', { iat: nowSec, exp: expSec });

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

/**
 * Loads service-account signing credentials on demand.
 *
 * Readers let an application choose whether keys are held in memory, loaded
 * from a file once, or loaded for every signing operation.
 */
export interface Reader extends TokenRequester {
  /** Returns credentials that can sign the next token-exchange request. */
  read(): ServiceAccount;
}
