import { inspect } from 'util';

import { type CallOptions, Metadata as GrpcMetadata, type Metadata } from '@grpc/grpc-js';

import {
  TokenExchangeService as ExchangeSvc,
  ExchangeTokenRequest,
} from '../../api/nebius/iam/v1/index.js';
import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  metricStart,
} from '../metrics.js';
import { Bearer, Receiver, Token } from '../token.js';
import { TokenSanitizer } from '../token_sanitizer.js';
import { custom, customJson, inspectJson, Logger } from '../util/logging.js';

import type { SDKInterface } from '../../sdk.js';
import type { AuthorizationOptions } from '../authorization/provider.js';

/** Reports an unsupported token-exchange response. */
export class UnsupportedResponseError extends Error {
  /** Creates a new unsupported response error. */
  constructor(expected: string, got: unknown) {
    super(`Unsupported response received: expected ${expected}, received ${typeof got}`);
    this.name = 'UnsupportedResponseError';
  }
}

/** Reports an unsupported token type. */
export class UnsupportedTokenTypeError extends Error {
  /** Creates a new unsupported token type error. */
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
    private metrics: AuthMetricsRecorder = authMetricsRecorder(undefined, 'token-exchange'),
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
    const start = metricStart();
    const now = Date.now();
    this.logger = this.logger?.withFields({ trial: this.trial, start: now }) ?? undefined;
    try {
      const req = this.requester.getExchangeTokenRequest();
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
      const token = new Token(res.accessToken, expiration);
      this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), this.trial);
      this.metrics.tokenLifetime(token);
      return token;
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), this.trial);
      throw err;
    }
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

/**
 * Exchanges an assertion or external credential for a Nebius access token.
 *
 * The requester builds the exchange request. The SDK supplies the generated
 * token-exchange client. This low-level bearer does not cache or renew access
 * tokens; high-level bearers such as
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_service_account.ServiceAccountBearer.html | ServiceAccountBearer}
 * wrap it in a
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_renewable.RenewableBearer.html | RenewableBearer}.
 */
export class ExchangeableBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.ExchangeableBearer';
  private svc: ExchangeSvc | Promise<ExchangeSvc> | null = null;
  private readonly metrics: AuthMetricsRecorder;

  /**
   * Creates an exchange bearer.
   *
   * `sdk` can be set later with {@link ExchangeableBearer.setSDK}. Calling
   * {@link ExchangeableBearer.receiver} before an SDK is set throws.
   */
  constructor(
    private readonly requester: TokenRequester,
    sdk: SDKInterface | Promise<SDKInterface> | null,
    private readonly maxRetries: number = 2,
    private readonly logger?: Logger,
    metrics?: AuthMetricsInput,
  ) {
    super();
    this.metrics = authMetricsRecorder(metrics, 'token-exchange');
    this.setSDK(sdk);
  }

  /** Sets the metrics. */
  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
  }

  [custom](): string {
    return `${this.$type}(requester=${inspect(this.requester)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      requester: inspectJson(this.requester),
      maxRetries: this.maxRetries,
    };
  }

  /**
   * Sets or clears the SDK used for token exchange.
   *
   * A promise delays client creation until the SDK is ready. Passing `null`
   * disables receiver creation.
   */
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

  /** Creates a token receiver. */
  receiver(): Receiver {
    if (!this.svc) throw new Error('SDK is not set for the bearer.');
    return new ExchangeableReceiver(
      this.requester,
      this.svc,
      this.maxRetries,
      this.logger,
      this.metrics,
    );
  }
}

/**
 * Builds a fresh token-exchange request.
 *
 * Implementations can sign an assertion or read a rotating external
 * credential. The returned request can contain secrets and must not be logged.
 */
export interface TokenRequester {
  /** Returns the exchange token request. */
  getExchangeTokenRequest(): ExchangeTokenRequest;
}
