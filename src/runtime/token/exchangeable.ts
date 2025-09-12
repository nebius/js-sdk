import { inspect } from 'util';

import type { CallOptions, Metadata } from '@grpc/grpc-js';
import { Metadata as GrpcMetadata } from '@grpc/grpc-js';

import {
  TokenExchangeService as ExchangeSvc,
  ExchangeTokenRequest,
} from '../../generated/nebius/iam/v1/index';
import type { SDKInterface } from '../../sdk';
import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { TokenSanitizer } from '../token_sanitizer';
import { custom, customJson, inspectJson, Logger } from '../util/logging';

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
  public readonly $type = 'nebius.sdk.ExchangeableReceiver';
  private trial = 0;
  constructor(
    private requester: TokenRequester,
    private svcOrPromise: ExchangeSvc | Promise<ExchangeSvc>,
    private defaultMaxRetries: number = 2,
    private logger?: Logger,
  ) {
    super();
    this.logger =
      this.logger?.withFields({ trial: this.trial, defaultMaxRetries: this.defaultMaxRetries }) ??
      undefined;
  }

  [custom](): string {
    return `${this.$type}(requester=${inspect(this.requester)}, trial=${this.trial})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      trial: this.trial,
      requester: inspectJson(this.requester),
      defaultMaxRetries: this.defaultMaxRetries,
    };
  }

  private async getSvc(): Promise<ExchangeSvc> {
    return await this.svcOrPromise;
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    this.trial += 1;
    const req = this.requester.getExchangeTokenRequest();
    const now = Date.now();
    this.logger = this.logger?.withFields({ trial: this.trial, start: now }) ?? undefined;

    const md: Metadata = new GrpcMetadata();

    // Disable SDK-side authorization for this call
    const options: Partial<CallOptions> & { authorizationDisable: boolean } = {
      authorizationDisable: true,
    };

    if (typeof timeoutMs === 'number' && Number.isFinite(timeoutMs)) {
      this.logger = this.logger?.withFields({ timeoutMs }) ?? undefined;
      this.logger?.trace('setting deadline for exchange call');
      options.deadline = new Date(now + Math.max(0, timeoutMs));
    }

    this.logger?.trace('fetching service client');
    const svc = await this.getSvc();
    this.logger?.trace('making exchange call');
    const res = await svc.exchange(req, md, options).result;

    if (!res || typeof res !== 'object') {
      throw new UnsupportedResponseError('CreateTokenResponse', res);
    }

    if (res.tokenType !== 'Bearer') {
      throw new UnsupportedTokenTypeError(res.tokenType ?? String(res.tokenType));
    }

    const expSec =
      typeof res.expiresIn === 'object' &&
      res.expiresIn !== null &&
      typeof res.expiresIn.toString === 'function'
        ? Number(res.expiresIn.toString())
        : Number(res.expiresIn ?? 0);

    this.logger?.debug('token fetched', {
      expires_in: res.expiresIn,
      expiresInSec: expSec,
      access_token: TokenSanitizer.accessTokenSanitizer().sanitize(res.accessToken),
    });

    const expiration = isFinite(expSec) && expSec > 0 ? new Date(now + expSec * 1000) : undefined;
    return new Token(res.accessToken, expiration);
  }

  canRetry(_err: unknown, options?: AuthorizationOptions | undefined): boolean {
    this.logger?.trace('canRetry check', { options });
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    if (this.trial >= maxRetries) {
      this.logger?.debug('canRetry -> false (max retries reached)', { maxRetries });
      return false;
    }
    this.logger?.debug('canRetry -> true', { trial: this.trial, maxRetries });
    return true;
  }
}

export class ExchangeableBearer extends Bearer {
  public readonly $type = 'nebius.sdk.ExchangeableBearer';
  private svc: ExchangeSvc | Promise<ExchangeSvc> | null = null;

  constructor(
    private readonly requester: TokenRequester,
    sdk: SDKInterface | Promise<SDKInterface> | null,
    private readonly maxRetries: number = 2,
    private readonly logger?: Logger,
  ) {
    super();
    this.setSDK(sdk);
  }

  [custom](): string {
    return `${this.$type}(requester=${inspect(this.requester)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      requester: inspectJson(this.requester),
      maxRetries: this.maxRetries,
    };
  }

  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    if (!sdk) {
      this.svc = null;
      return;
    }
    if (
      typeof sdk === 'object' &&
      sdk !== null &&
      'then' in sdk &&
      typeof (sdk as Promise<SDKInterface>).then === 'function'
    ) {
      this.logger?.debug('SDK is a promise, waiting for it to resolve');
      this.svc = (async () => new ExchangeSvc(await (sdk as Promise<SDKInterface>)))();
    } else {
      this.logger?.debug('SDK is provided directly');
      this.svc = new ExchangeSvc(sdk as SDKInterface);
    }
  }

  receiver(): Receiver {
    if (!this.svc) throw new Error('SDK is not set for the bearer.');
    return new ExchangeableReceiver(this.requester, this.svc, this.maxRetries, this.logger);
  }
}

export interface TokenRequester {
  getExchangeTokenRequest(): ExchangeTokenRequest;
}
