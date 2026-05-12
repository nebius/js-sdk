import { performance } from 'node:perf_hooks';
import { inspect } from 'node:util';

import { Bearer, Receiver, Token } from './token.js';
import { custom, customJson, inspectJson } from './util/logging.js';

import type { AuthorizationOptions } from './authorization/provider.js';

export const METRIC_RESULT_SUCCESS = 'success';
export const METRIC_RESULT_ERROR = 'error';
export const DEFAULT_METRIC_PREFIX = 'jssdk';
export type MetricResult = typeof METRIC_RESULT_SUCCESS | typeof METRIC_RESULT_ERROR;

export interface TokenAcquireMetric {
  provider: string;
  result: MetricResult;
  durationSeconds: number;
  attempt: number;
}

export interface TokenLifetimeMetric {
  provider: string;
  ttlSeconds: number;
}

export interface TokenRefreshMetric {
  provider: string;
  result: MetricResult;
  durationSeconds: number;
  background: boolean;
}

export interface CacheMetric {
  provider: string;
  result?: MetricResult;
}

export interface ConfigMetric {
  source: string;
  result: MetricResult;
  durationSeconds: number;
}

export interface AuthMetrics {
  tokenAcquire(metric: TokenAcquireMetric): void;
  tokenLifetime(metric: TokenLifetimeMetric): void;
  tokenRefresh(metric: TokenRefreshMetric): void;
  cacheHit(metric: CacheMetric): void;
  cacheMiss(metric: CacheMetric): void;
  cacheStore(metric: CacheMetric): void;
  cacheRefresh(metric: CacheMetric): void;
  cacheInvalidate(metric: CacheMetric): void;
}

export interface Metrics extends AuthMetrics {
  configLoad(metric: ConfigMetric): void;
  credentialsResolve(metric: ConfigMetric): void;
}

export type AuthMetricsLike = Partial<AuthMetrics> | undefined;
export type MetricsLike = Partial<Metrics> | undefined;
export type AuthMetricsInput = AuthMetricsLike | AuthMetricsRecorder;

export interface AuthMetricsSetter {
  setMetrics(metrics: AuthMetricsInput): void;
}

export interface MetricNames {
  tokenAcquireDuration: string;
  tokenRefresh: string;
  tokenRefreshDuration: string;
  tokenLifetime: string;
  cacheHit: string;
  cacheMiss: string;
  cacheStore: string;
  cacheRefresh: string;
  cacheInvalidate: string;
  configLoad: string;
  credentialsResolve: string;
}

export function defaultMetricNames(): MetricNames {
  return {
    cacheHit: 'auth_cache_hit_total',
    cacheInvalidate: 'auth_cache_invalidate_total',
    cacheMiss: 'auth_cache_miss_total',
    cacheRefresh: 'auth_cache_refresh_total',
    cacheStore: 'auth_cache_store_total',
    configLoad: 'config_load_seconds',
    credentialsResolve: 'credentials_resolve_seconds',
    tokenAcquireDuration: 'auth_token_acquire_seconds',
    tokenLifetime: 'auth_token_lifetime_seconds',
    tokenRefresh: 'auth_token_refresh_total',
    tokenRefreshDuration: 'auth_token_refresh_seconds',
  };
}

export function metricName(prefix: string, name: string): string {
  if (prefix === '') return name;
  return `${prefix.endsWith('_') ? prefix : `${prefix}_`}${name}`;
}

export function metricStart(): number {
  return performance.now();
}

export function metricDurationMs(start: number): number {
  return performance.now() - start;
}

function emitMetric(fn: () => void | PromiseLike<void>): void {
  try {
    const ret = fn();
    if (ret && typeof ret.then === 'function') {
      void ret.then(undefined, () => {
        // Metrics callbacks must not affect SDK control flow.
      });
    }
  } catch {
    // Metrics callbacks must not affect SDK control flow.
  }
}

function secondsFromMs(durationMs: number): number {
  return durationMs / 1000;
}

export class DiscardMetrics implements Metrics {
  tokenAcquire(_metric: TokenAcquireMetric): void {}
  tokenLifetime(_metric: TokenLifetimeMetric): void {}
  tokenRefresh(_metric: TokenRefreshMetric): void {}
  cacheHit(_metric: CacheMetric): void {}
  cacheMiss(_metric: CacheMetric): void {}
  cacheStore(_metric: CacheMetric): void {}
  cacheRefresh(_metric: CacheMetric): void {}
  cacheInvalidate(_metric: CacheMetric): void {}
  configLoad(_metric: ConfigMetric): void {}
  credentialsResolve(_metric: ConfigMetric): void {}
}

interface AuthMetricsCell {
  metrics: AuthMetricsLike;
}

export class AuthMetricsRecorder {
  private cell: AuthMetricsCell;

  constructor(
    metrics: AuthMetricsInput,
    public readonly provider: string,
  ) {
    this.cell = metrics instanceof AuthMetricsRecorder ? metrics.cell : { metrics };
  }

  withProvider(provider: string): AuthMetricsRecorder {
    return new AuthMetricsRecorder(this, provider);
  }

  setMetrics(metrics: AuthMetricsInput): void {
    if (metrics instanceof AuthMetricsRecorder) {
      this.cell = metrics.cell;
      return;
    }
    this.cell.metrics = metrics;
  }

  tokenAcquire(result: MetricResult, durationMs: number, attempt: number): void {
    const normalizedAttempt = attempt > 0 ? attempt : 1;
    emitMetric(() =>
      this.cell.metrics?.tokenAcquire?.({
        attempt: normalizedAttempt,
        durationSeconds: secondsFromMs(durationMs),
        provider: this.provider,
        result,
      }),
    );
  }

  tokenLifetime(token: Token): void {
    const expiration = token.expiration?.getTime();
    if (!expiration) return;
    emitMetric(() =>
      this.cell.metrics?.tokenLifetime?.({
        provider: this.provider,
        ttlSeconds: secondsFromMs(Math.max(0, expiration - Date.now())),
      }),
    );
  }

  tokenRefresh(result: MetricResult, durationMs: number, background = true): void {
    emitMetric(() =>
      this.cell.metrics?.tokenRefresh?.({
        background,
        durationSeconds: secondsFromMs(durationMs),
        provider: this.provider,
        result,
      }),
    );
  }

  cacheHit(): void {
    emitMetric(() => this.cell.metrics?.cacheHit?.({ provider: this.provider }));
  }

  cacheMiss(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheMiss?.({ provider: this.provider, result }));
  }

  cacheStore(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheStore?.({ provider: this.provider, result }));
  }

  cacheRefresh(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheRefresh?.({ provider: this.provider, result }));
  }

  cacheInvalidate(): void {
    emitMetric(() => this.cell.metrics?.cacheInvalidate?.({ provider: this.provider }));
  }
}

export function authMetricsRecorder(
  metrics: AuthMetricsInput,
  provider: string,
): AuthMetricsRecorder {
  return metrics instanceof AuthMetricsRecorder
    ? metrics.withProvider(provider)
    : new AuthMetricsRecorder(metrics, provider);
}

export function authMetricProvider(bearer: Bearer | undefined): string {
  if (!bearer) return 'custom';
  switch (bearer.$type) {
    case 'nebius.sdk.NamedBearer':
      return bearer.name ? bearer.name.split('/')[0] || 'custom' : providerFromWrapped(bearer);
    case 'nebius.sdk.EnvBearer':
    case 'nebius.sdk.StaticBearer':
      return 'static';
    case 'nebius.sdk.FileBearer':
      return 'file';
    case 'nebius.sdk.ExchangeableBearer':
      return 'token-exchange';
    case 'nebius.sdk.FederationAccountBearer':
    case 'nebius.sdk.FederationBearer':
      return 'federation';
    case 'nebius.sdk.ServiceAccountBearer':
      return 'service-account';
    case 'nebius.sdk.FederatedCredentialsBearer':
      return 'federated-credentials';
    default:
      return bearer.name ? bearer.name.split('/')[0] || 'custom' : providerFromWrapped(bearer);
  }
}

export function instrumentBearer(bearer: Bearer, metrics: AuthMetricsLike): Bearer {
  if (!metrics) return bearer;
  const recorder = authMetricsRecorder(metrics, authMetricProvider(bearer));
  return bindAuthMetrics(bearer, recorder);
}

export function bindAuthMetrics(bearer: Bearer, metrics: AuthMetricsInput): Bearer {
  if (!metrics) return bearer;
  if (applyMetricsSetter(bearer, metrics)) return bearer;
  const recorder =
    metrics instanceof AuthMetricsRecorder
      ? metrics
      : authMetricsRecorder(metrics, authMetricProvider(bearer));
  return new InstrumentedBearer(bearer, recorder);
}

export function recordConfigMetric(
  metrics: MetricsLike,
  kind: 'configLoad' | 'credentialsResolve',
  source: string,
  result: MetricResult,
  durationMs: number,
): void {
  emitMetric(() =>
    metrics?.[kind]?.({ durationSeconds: secondsFromMs(durationMs), result, source }),
  );
}

export function recordTokenAcquire(
  metrics: AuthMetricsInput,
  provider: string,
  result: MetricResult,
  durationMs: number,
  attempt: number,
): void {
  authMetricsRecorder(metrics, provider).tokenAcquire(result, durationMs, attempt);
}

export function recordTokenLifetime(
  metrics: AuthMetricsInput,
  provider: string,
  token: Token,
): void {
  authMetricsRecorder(metrics, provider).tokenLifetime(token);
}

export function recordTokenRefresh(
  metrics: AuthMetricsInput,
  provider: string,
  result: MetricResult,
  durationMs: number,
  background = true,
): void {
  authMetricsRecorder(metrics, provider).tokenRefresh(result, durationMs, background);
}

export function recordCacheHit(metrics: AuthMetricsInput, provider: string): void {
  authMetricsRecorder(metrics, provider).cacheHit();
}

export function recordCacheMiss(
  metrics: AuthMetricsInput,
  provider: string,
  result: MetricResult,
): void {
  authMetricsRecorder(metrics, provider).cacheMiss(result);
}

export function recordCacheStore(
  metrics: AuthMetricsInput,
  provider: string,
  result: MetricResult,
): void {
  authMetricsRecorder(metrics, provider).cacheStore(result);
}

export function recordCacheRefresh(
  metrics: AuthMetricsInput,
  provider: string,
  result: MetricResult,
): void {
  authMetricsRecorder(metrics, provider).cacheRefresh(result);
}

export function recordCacheInvalidate(metrics: AuthMetricsInput, provider: string): void {
  authMetricsRecorder(metrics, provider).cacheInvalidate();
}

class InstrumentedReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.InstrumentedReceiver';
  private attempt = 0;

  constructor(
    private readonly receiver: Receiver,
    private readonly metrics: AuthMetricsRecorder,
  ) {
    super();
  }

  [custom](): string {
    return `${this.$type}(receiver=${inspect(this.receiver)}, provider=${this.metrics.provider})`;
  }

  [customJson](): unknown {
    return {
      provider: this.metrics.provider,
      receiver: inspectJson(this.receiver),
      type: this.$type,
    };
  }

  protected async _fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    this.attempt += 1;
    const start = metricStart();
    try {
      const token = await this.receiver.fetch(timeoutMs, options);
      const durationMs = metricDurationMs(start);
      this.metrics.tokenAcquire(METRIC_RESULT_SUCCESS, durationMs, this.attempt);
      this.metrics.tokenLifetime(token);
      return token;
    } catch (err) {
      this.metrics.tokenAcquire(METRIC_RESULT_ERROR, metricDurationMs(start), this.attempt);
      throw err;
    }
  }

  canRetry(err: unknown, options?: AuthorizationOptions | undefined): boolean {
    return this.receiver.canRetry(err, options);
  }
}

class InstrumentedBearer extends Bearer {
  public readonly $type = 'nebius.sdk.InstrumentedBearer';

  constructor(
    private readonly bearer: Bearer,
    private readonly metrics: AuthMetricsRecorder,
  ) {
    super();
  }

  [custom](): string {
    return `${this.$type}(bearer=${inspect(this.bearer)}, provider=${this.metrics.provider})`;
  }

  [customJson](): unknown {
    return {
      bearer: inspectJson(this.bearer),
      provider: this.metrics.provider,
      type: this.$type,
    };
  }

  get name(): string | undefined {
    return this.bearer.name;
  }

  get wrapped(): Bearer | undefined {
    return this.bearer;
  }

  receiver(): Receiver {
    return new InstrumentedReceiver(this.bearer.receiver(), this.metrics);
  }

  setMetrics(metrics: AuthMetricsInput): void {
    this.metrics.setMetrics(metrics);
    bindAuthMetrics(this.bearer, this.metrics);
  }

  async close(graceMs?: number): Promise<void> {
    await this.bearer.close(graceMs);
  }
}

function providerFromWrapped(bearer: Bearer): string {
  return bearer.wrapped ? authMetricProvider(bearer.wrapped) : 'custom';
}

function isAuthMetricsSetter(bearer: Bearer): bearer is AuthMetricsSetter & Bearer {
  return typeof (bearer as Bearer & { setMetrics?: unknown }).setMetrics === 'function';
}

function applyMetricsSetter(
  bearer: Bearer,
  metrics: AuthMetricsInput,
  seen: Set<Bearer> = new Set(),
): boolean {
  if (seen.has(bearer)) return false;
  seen.add(bearer);
  if (isAuthMetricsSetter(bearer)) {
    bearer.setMetrics(metrics);
    return true;
  }
  return bearer.wrapped ? applyMetricsSetter(bearer.wrapped, metrics, seen) : false;
}
