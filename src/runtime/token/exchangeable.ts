import type { Metadata, CallOptions } from '@grpc/grpc-js';
import { Metadata as GrpcMetadata } from '@grpc/grpc-js';
import type { SDKInterface } from '../../sdk';
import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { TokenExchangeService as ExchangeSvc } from '../../generated/nebius/iam/v1/token_exchange_service.sdk';
import type { CreateTokenResponse } from '../../generated/nebius/iam/v1/token_service';
import type { TokenRequester } from '../service_account/service_account';
import { TokenSanitizer } from '../token_sanitizer';

const sanitizer = TokenSanitizer.accessTokenSanitizer();

export class UnsupportedResponseError extends Error {
  constructor(expected: string, got: unknown) {
    super(`Unsupported response received: expected ${expected}, received ${typeof got}`);
    this.name = 'UnsupportedResponseError';
  }
}

export class UnsupportedTokenTypeError extends Error {
  constructor(tokenType: string) {
    super(`Unsupported token received: expected Bearer, received ${tokenType}`);
    this.name = 'UnsupportedTokenTypeError';
  }
}

class ExchangeableReceiver extends Receiver {
  private trial = 0;
  constructor(
    private requester: TokenRequester,
    private svcOrPromise: ExchangeSvc | Promise<ExchangeSvc>,
    private defaultMaxRetries: number = 2,
  ) {
    super();
  }

  private async getSvc(): Promise<ExchangeSvc> {
    return await this.svcOrPromise;
  }

  protected async _fetch(timeoutMs?: number, _options?: AuthorizationOptions | undefined): Promise<Token> {
    this.trial += 1;
    const req = this.requester.getExchangeTokenRequest();
    const now = Date.now();

    const md: Metadata = new GrpcMetadata();

    // Disable SDK-side authorization for this call
    const options: Partial<CallOptions> & { authorizationDisable: boolean } = {
      authorizationDisable: true,
    } as any;

    if (typeof timeoutMs === 'number' && Number.isFinite(timeoutMs)) {
      options.deadline = new Date(now + Math.max(0, timeoutMs));
    }

    const svc = await this.getSvc();
    const res = await svc.Exchange(req, md, options).result as CreateTokenResponse;

    if (!res || typeof res !== 'object') {
      throw new UnsupportedResponseError('CreateTokenResponse', res);
    }

    if (res.tokenType !== 'Bearer') {
      throw new UnsupportedTokenTypeError((res as any).tokenType ?? String((res as any)?.tokenType));
    }

    const expSec = typeof (res as any).expiresIn === 'object' && (res as any).expiresIn !== null && typeof (res as any).expiresIn.toString === 'function'
      ? Number((res as any).expiresIn.toString())
      : Number((res as any).expiresIn ?? 0);

    // Optional debug: sanitized token
    // eslint-disable-next-line no-console
    // console.debug(`token fetched: ${sanitizer.sanitize(res.accessToken)}, expires in: ${expSec} seconds.`);

    const expiration = isFinite(expSec) && expSec > 0 ? new Date(now + expSec * 1000) : undefined;
    return new Token(res.accessToken, expiration);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions | undefined): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    if (this.trial >= maxRetries) return false;
    return true;
  }
}

export class ExchangeableBearer extends Bearer {
  private svc: ExchangeSvc | Promise<ExchangeSvc> | null = null;

  constructor(
    private readonly requester: TokenRequester,
    sdk: SDKInterface | Promise<SDKInterface> | null,
    private readonly maxRetries: number = 2,
  ) {
    super();
    this.setSDK(sdk);
  }

  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    if (!sdk) { this.svc = null; return; }
    if (typeof (sdk as any).then === 'function') {
      this.svc = (async () => new ExchangeSvc(await (sdk as Promise<SDKInterface>)))();
    } else {
      this.svc = new ExchangeSvc(sdk as SDKInterface);
    }
  }

  receiver(): Receiver {
    if (!this.svc) throw new Error('SDK is not set for the bearer.');
    return new ExchangeableReceiver(this.requester, this.svc, this.maxRetries);
  }
}
