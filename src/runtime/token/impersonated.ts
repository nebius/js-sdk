import { inspect } from 'util';

import { type CallOptions, Metadata as GrpcMetadata, status } from '@grpc/grpc-js';

import {
  TokenExchangeService as ExchangeSvc,
  ExchangeTokenRequest,
} from '../../api/nebius/iam/v1/index.js';
import {
  type AuthMetricsInput,
  authMetricsRecorder,
  type AuthMetricsRecorder,
  bindAuthMetrics,
  METRIC_RESULT_ERROR,
  METRIC_RESULT_SUCCESS,
  metricDurationMs,
  metricStart,
} from '../metrics.js';
import { Bearer, NamedBearer, Receiver, Token } from '../token.js';
import { TokenSanitizer } from '../token_sanitizer.js';
import { custom, customJson, inspectJson, type Logger } from '../util/logging.js';
import { UnsupportedResponseError, UnsupportedTokenTypeError } from './exchangeable.js';
import { RenewableBearer } from './renewable.js';

import type { SDKInterface } from '../../sdk.js';
import type { AuthorizationOptions } from '../authorization/provider.js';

const tokenExchangeAccessTokenType = 'urn:ietf:params:oauth:token-type:access_token';
const tokenExchangeGrantType = 'urn:ietf:params:oauth:grant-type:token-exchange';
const tokenExchangeSubjectIdentifierType = 'urn:nebius:params:oauth:token-type:subject_identifier';

function isPromise<T>(value: unknown): value is Promise<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'then' in value &&
    typeof (value as Promise<T>).then === 'function'
  );
}

function grpcCode(err: unknown): number | undefined {
  if (typeof err === 'object' && err !== null && 'code' in err) {
    const code = (err as { code?: unknown }).code;
    return typeof code === 'number' ? code : undefined;
  }
  return undefined;
}

class ImpersonatedReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.ImpersonatedReceiver';
  private trial = 0;

  constructor(
    private readonly serviceAccountId: string,
    private readonly source: Receiver,
    private svcOrPromise: ExchangeSvc | Promise<ExchangeSvc>,
    private readonly defaultMaxRetries: number = 2,
    private readonly logger?: Logger,
    private readonly metrics: AuthMetricsRecorder = authMetricsRecorder(undefined, 'impersonated'),
  ) {
    super();
  }

  [custom](): string {
    return `${this.$type}(serviceAccountId=${this.serviceAccountId}, trial=${this.trial})`;
  }

  [customJson](): unknown {
    return {
      defaultMaxRetries: this.defaultMaxRetries,
      serviceAccountId: this.serviceAccountId,
      source: inspectJson(this.source),
      trial: this.trial,
      type: this.$type,
    };
  }

  private async getSvc(): Promise<ExchangeSvc> {
    return await this.svcOrPromise;
  }

  protected async _fetch(timeoutMs?: number, options?: AuthorizationOptions): Promise<Token> {
    this.trial += 1;
    const start = metricStart();
    try {
      let actor = await this.source.fetch(timeoutMs, options);
      const now = Date.now();
      try {
        const token = await this.exchange(actor.token, now, timeoutMs);
        this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), this.trial);
        this.metrics.tokenLifetime(token);
        return token;
      } catch (err) {
        if (grpcCode(err) !== status.UNAUTHENTICATED || !this.source.canRetry(err, options)) {
          throw err;
        }
        actor = await this.source.fetch(timeoutMs, options);
        const token = await this.exchange(actor.token, Date.now(), timeoutMs);
        this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, metricDurationMs(start), this.trial);
        this.metrics.tokenLifetime(token);
        return token;
      }
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), this.trial);
      throw err;
    }
  }

  private async exchange(actorToken: string, now: number, timeoutMs?: number): Promise<Token> {
    const request = ExchangeTokenRequest.create({
      actorToken,
      actorTokenType: tokenExchangeAccessTokenType,
      grantType: tokenExchangeGrantType,
      requestedTokenType: tokenExchangeAccessTokenType,
      subjectToken: this.serviceAccountId,
      subjectTokenType: tokenExchangeSubjectIdentifierType,
    });
    const md = new GrpcMetadata();
    const callOptions: Partial<CallOptions> & { authorizationDisable: boolean } = {
      authorizationDisable: true,
    };
    if (typeof timeoutMs === 'number' && Number.isFinite(timeoutMs)) {
      callOptions.deadline = new Date(now + Math.max(0, timeoutMs));
    }

    this.logger?.trace('exchanging impersonated token', {
      serviceAccountId: this.serviceAccountId,
      timeoutMs,
    });
    const svc = await this.getSvc();
    const response = await svc.exchange(request, md, callOptions).result;
    if (!response || typeof response !== 'object') {
      throw new UnsupportedResponseError('CreateTokenResponse', response);
    }
    if (response.tokenType !== 'Bearer') {
      throw new UnsupportedTokenTypeError(response.tokenType ?? String(response.tokenType));
    }

    const expSec =
      typeof response.expiresIn === 'object' &&
      response.expiresIn !== null &&
      typeof response.expiresIn.toString === 'function'
        ? Number(response.expiresIn.toString())
        : Number(response.expiresIn ?? 0);

    this.logger?.debug('impersonated token fetched', {
      accessToken: TokenSanitizer.accessTokenSanitizer().sanitize(response.accessToken),
      expiresInSec: expSec,
    });
    return new Token(
      response.accessToken,
      Number.isFinite(expSec) && expSec > 0 ? new Date(now + expSec * 1000) : undefined,
    );
  }

  canRetry(_err: unknown, options?: AuthorizationOptions): boolean {
    const maxRetries = options?.maxRetries ?? this.defaultMaxRetries;
    return this.trial < maxRetries;
  }
}

export class ImpersonatedBearer extends Bearer {
  public readonly $type = 'nebius.sdk.ImpersonatedBearer';
  private svc: ExchangeSvc | Promise<ExchangeSvc> | null = null;
  private source: Bearer;
  private readonly metrics: AuthMetricsRecorder;

  constructor(
    private readonly serviceAccountId: string,
    source: Bearer,
    sdk: SDKInterface | Promise<SDKInterface> | null,
    private readonly maxRetries: number = 2,
    private readonly logger?: Logger,
    metrics?: AuthMetricsInput,
  ) {
    super();
    if (serviceAccountId.trim() === '') {
      throw new Error('service account id must not be empty');
    }
    this.metrics = authMetricsRecorder(metrics, 'impersonated');
    this.source = bindAuthMetrics(source, this.metrics);
    this.setSDK(sdk);
  }

  [custom](): string {
    return `${this.$type}(serviceAccountId=${this.serviceAccountId}, source=${inspect(
      this.source,
    )})`;
  }

  [customJson](): unknown {
    return {
      maxRetries: this.maxRetries,
      serviceAccountId: this.serviceAccountId,
      source: inspectJson(this.source),
      type: this.$type,
    };
  }

  get name(): string | undefined {
    return `impersonated/${this.serviceAccountId}/${this.source.name ?? 'anonymous'}`;
  }

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  get metricProvider(): string {
    return this.metrics.provider;
  }

  setSDK(sdk: SDKInterface | Promise<SDKInterface> | null): void {
    if (!sdk) {
      this.svc = null;
      return;
    }
    this.svc = isPromise<SDKInterface>(sdk)
      ? (async () => new ExchangeSvc(await sdk))()
      : new ExchangeSvc(sdk);
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    this.source = bindAuthMetrics(this.source, this.metrics);
  }

  receiver(): Receiver {
    if (!this.svc) throw new Error('SDK is not set for the bearer.');
    return new ImpersonatedReceiver(
      this.serviceAccountId,
      this.source.receiver(),
      this.svc,
      this.maxRetries,
      this.logger,
      this.metrics,
    );
  }
}

export class CachedImpersonatedBearer extends Bearer {
  public readonly $type = 'nebius.sdk.CachedImpersonatedBearer';
  private readonly impersonated: ImpersonatedBearer;
  private readonly source: NamedBearer;

  constructor(
    serviceAccountId: string,
    source: Bearer,
    sdk: SDKInterface | Promise<SDKInterface> | null,
    opts?: {
      maxRetries?: number;
      metrics?: AuthMetricsInput;
      logger?: Logger;
    },
  ) {
    super();
    const maxRetries = opts?.maxRetries ?? 2;
    this.impersonated = new ImpersonatedBearer(
      serviceAccountId,
      source,
      sdk,
      maxRetries,
      opts?.logger,
      opts?.metrics,
    );
    this.source = new NamedBearer(
      new RenewableBearer(this.impersonated, {
        maxRetries,
        metrics: opts?.metrics,
        provider: 'impersonated',
        logger: opts?.logger?.child('renewable'),
      }),
      this.impersonated.name ?? `impersonated/${serviceAccountId}`,
    );
  }

  get name(): string | undefined {
    return this.source.name;
  }

  get wrapped(): Bearer | undefined {
    return this.source;
  }

  receiver(): Receiver {
    return this.source.receiver();
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.impersonated.setMetrics(metrics);
    const setter = (this.source.wrapped as { setMetrics?: (m: AuthMetricsInput) => void })
      ?.setMetrics;
    setter?.call(this.source.wrapped, metrics);
  }
}

export const __private = {
  ImpersonatedReceiver,
  tokenExchangeAccessTokenType,
  tokenExchangeGrantType,
  tokenExchangeSubjectIdentifierType,
};
