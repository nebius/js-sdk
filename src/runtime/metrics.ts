import { performance } from 'node:perf_hooks';
import { inspect } from 'node:util';

import { Bearer, Receiver, Token } from './token.js';
import { custom, customJson, inspectJson } from './util/logging.js';

import type { AuthorizationOptions } from './authorization/provider.js';

/** Contains the stable result label for a successful metric event. */
export const METRIC_RESULT_SUCCESS = 'success';
/** Contains the stable result label for a failed metric event. */
export const METRIC_RESULT_ERROR = 'error';
/** Contains the suggested prefix for SDK metrics in a monitoring system. */
export const DEFAULT_METRIC_PREFIX = 'jssdk';
/** Defines the result labels used by SDK metric events. */
export type MetricResult = typeof METRIC_RESULT_SUCCESS | typeof METRIC_RESULT_ERROR;

/** Describes one attempt to acquire an access token. */
export interface TokenAcquireMetric {
  /** Identifies the credential implementation, such as `service-account`. */
  provider: string;
  /** Contains the result. */
  result: MetricResult;
  /** Contains elapsed wall-clock duration in seconds. */
  durationSeconds: number;
  /** Contains the one-based acquisition attempt number for this receiver. */
  attempt: number;
}

/** Describes the remaining lifetime of an acquired token. */
export interface TokenLifetimeMetric {
  /** Contains the provider. */
  provider: string;
  /** Contains the non-negative lifetime in seconds at acquisition time. */
  ttlSeconds: number;
}

/** Describes one token refresh. */
export interface TokenRefreshMetric {
  /** Contains the provider. */
  provider: string;
  /** Contains the result. */
  result: MetricResult;
  /** Contains the duration in seconds. */
  durationSeconds: number;
  /** Specifies whether the refresh ran in the background. */
  background: boolean;
}

/** Describes one token-cache action. */
export interface CacheMetric {
  /** Contains the provider. */
  provider: string;
  /** Contains the result when the cache action can fail. */
  result?: MetricResult;
}

/** Describes a configuration or credential-resolution action. */
export interface ConfigMetric {
  /** Identifies the source, such as `file`, `env`, or `service-account`. */
  source: string;
  /** Contains the result. */
  result: MetricResult;
  /** Contains the duration in seconds. */
  durationSeconds: number;
}

/**
 * Receives authorization metric events.
 *
 * Implement only the callbacks that you need by passing a
 * {@link AuthMetricsLike}. The SDK does not include token values in events.
 * Callback failures do not fail SDK work.
 */
export interface AuthMetrics {
  /** Records a token acquisition. */
  tokenAcquire(metric: TokenAcquireMetric): void;
  /** Records a token lifetime. */
  tokenLifetime(metric: TokenLifetimeMetric): void;
  /** Records a token refresh. */
  tokenRefresh(metric: TokenRefreshMetric): void;
  /** Records a token-cache hit. */
  cacheHit(metric: CacheMetric): void;
  /** Records a token-cache miss. */
  cacheMiss(metric: CacheMetric): void;
  /** Records a token-cache write. */
  cacheStore(metric: CacheMetric): void;
  /** Records a token-cache refresh. */
  cacheRefresh(metric: CacheMetric): void;
  /** Records a token-cache invalidation. */
  cacheInvalidate(metric: CacheMetric): void;
}

/**
 * Receives configuration and authorization metric events.
 *
 * Pass a partial implementation as
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#metrics | SDKOptions.metrics}.
 * Durations use seconds, which makes them suitable for histogram recorders.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 *
 * const sdk = new SDK({
 *   metrics: {
 *     tokenAcquire: ({ provider, result, durationSeconds }) => {
 *       console.log('token acquire', { provider, result, durationSeconds });
 *     },
 *     credentialsResolve: ({ source, result, durationSeconds }) => {
 *       console.log('credentials resolve', { source, result, durationSeconds });
 *     },
 *   },
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export interface Metrics extends AuthMetrics {
  /** Records the result of a configuration load. */
  configLoad(metric: ConfigMetric): void;
  /** Records the result of credential resolution. */
  credentialsResolve(metric: ConfigMetric): void;
}

/** Defines an optional subset of authorization metric callbacks. */
export type AuthMetricsLike = Partial<AuthMetrics> | undefined;
/** Defines an optional subset of all SDK metric callbacks. */
export type MetricsLike = Partial<Metrics> | undefined;
/**
 * Defines either callback functions or an existing shared recorder.
 *
 * Credential implementations use this type to keep one callback set while
 * they change the provider label.
 */
export type AuthMetricsInput = AuthMetricsLike | AuthMetricsRecorder;

interface AuthMetricsSetter {
  setMetrics(metrics: AuthMetricsInput): void;
}

/**
 * Defines suggested names for exporting SDK events to a monitoring system.
 *
 * The SDK emits callbacks, not named metrics. Your monitoring adapter can use
 * these names or replace them with its own naming convention.
 */
export interface MetricNames {
  /** Contains the token acquire duration. */
  tokenAcquireDuration: string;
  /** Contains the token refresh. */
  tokenRefresh: string;
  /** Contains the token refresh duration. */
  tokenRefreshDuration: string;
  /** Contains the token lifetime. */
  tokenLifetime: string;
  /** Contains the cache hit. */
  cacheHit: string;
  /** Contains the cache miss. */
  cacheMiss: string;
  /** Contains the cache store. */
  cacheStore: string;
  /** Contains the cache refresh. */
  cacheRefresh: string;
  /** Contains the cache invalidate. */
  cacheInvalidate: string;
  /** Contains the config load. */
  configLoad: string;
  /** Contains the credentials resolve. */
  credentialsResolve: string;
}

/** Returns a new set of suggested SDK metric names without a prefix. */
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

/**
 * Joins a prefix and metric name with exactly one underscore.
 *
 * Empty input is allowed. For example, `metricName('app_', '_calls')` returns
 * `app_calls`.
 */
export function metricName(prefix: string, name: string): string {
  if (prefix === '') return name;
  if (name === '') return prefix;
  return `${prefix.replace(/_+$/, '')}_${name.replace(/^_+/, '')}`;
}

/**
 * Returns a high-resolution start value for {@link metricDurationMs}.
 *
 * The value has no defined epoch. Use it only for elapsed time.
 */
export function metricStart(): number {
  return performance.now();
}

/** Returns elapsed milliseconds since a value from {@link metricStart}. */
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

interface AuthMetricsCell {
  metrics: AuthMetricsLike;
}

/**
 * Sends normalized authorization events to a shared callback set.
 *
 * This is a low-level helper for credential implementations. Application code
 * normally passes callbacks through
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#metrics | SDKOptions.metrics}
 * or
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#authmetrics | SDKOptions.authMetrics}.
 *
 * Recorder instances created with {@link withProvider} share the same mutable
 * callback set. Calling {@link setMetrics} on one of them updates all recorder
 * instances in that group.
 */
export class AuthMetricsRecorder {
  private cell: AuthMetricsCell;

  /** Creates a recorder with a provider label and callback set. */
  constructor(
    metrics: AuthMetricsInput,
    /** Identifies the credential provider on every emitted event. */ public readonly provider: string,
  ) {
    this.cell = metrics instanceof AuthMetricsRecorder ? metrics.cell : { metrics };
  }

  /** Returns a recorder that shares callbacks and uses another provider label. */
  withProvider(provider: string): AuthMetricsRecorder {
    return new AuthMetricsRecorder(this, provider);
  }

  /** Replaces the shared callback set for this recorder group. */
  setMetrics(metrics: AuthMetricsInput): void {
    if (metrics instanceof AuthMetricsRecorder) {
      this.cell = metrics.cell;
      return;
    }
    this.cell.metrics = metrics;
  }

  /** Records a token acquisition. */
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

  /**
   * Records a token lifetime when the token has an expiration time.
   *
   * Tokens without an expiration time do not produce an event.
   */
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

  /** Records a token refresh. */
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

  /** Records a token-cache hit. */
  cacheHit(): void {
    emitMetric(() => this.cell.metrics?.cacheHit?.({ provider: this.provider }));
  }

  /** Records a token-cache miss. */
  cacheMiss(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheMiss?.({ provider: this.provider, result }));
  }

  /** Records a token-cache write. */
  cacheStore(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheStore?.({ provider: this.provider, result }));
  }

  /** Records a token-cache refresh. */
  cacheRefresh(result: MetricResult): void {
    emitMetric(() => this.cell.metrics?.cacheRefresh?.({ provider: this.provider, result }));
  }

  /** Records a token-cache invalidation. */
  cacheInvalidate(): void {
    emitMetric(() => this.cell.metrics?.cacheInvalidate?.({ provider: this.provider }));
  }
}

/**
 * Returns an authorization metrics recorder for a provider.
 *
 * When `metrics` is already a recorder, the result shares its callbacks and
 * changes only the provider label.
 */
export function authMetricsRecorder(
  metrics: AuthMetricsInput,
  provider: string,
): AuthMetricsRecorder {
  return metrics instanceof AuthMetricsRecorder
    ? metrics.withProvider(provider)
    : new AuthMetricsRecorder(metrics, provider);
}

/** Returns a bearer's provider label, or `custom` when it has none. */
export function authMetricProvider(bearer: Bearer | undefined): string {
  return bearer?.metricProvider ?? 'custom';
}

/**
 * Adds metric recording to a bearer when callbacks are present.
 *
 * The returned bearer can be the input object or a wrapper. Use the return
 * value for later token requests.
 */
export function instrumentBearer(bearer: Bearer, metrics: AuthMetricsLike): Bearer {
  if (!metrics) return bearer;
  const recorder = authMetricsRecorder(metrics, authMetricProvider(bearer));
  return bindAuthMetrics(bearer, recorder);
}

/**
 * Connects a bearer to authorization metrics.
 *
 * A bearer that supports metric injection is updated in place. Other bearers
 * are wrapped. No wrapper is created when `metrics` is absent.
 */
export function bindAuthMetrics(bearer: Bearer, metrics: AuthMetricsInput): Bearer {
  if (!metrics) return bearer;
  if (applyMetricsSetter(bearer, metrics)) return bearer;
  const recorder =
    metrics instanceof AuthMetricsRecorder
      ? metrics
      : authMetricsRecorder(metrics, authMetricProvider(bearer));
  return new InstrumentedBearer(bearer, recorder);
}

/**
 * Records a configuration or credential-resolution metric.
 *
 * `durationMs` is converted to seconds. Missing callbacks and callback errors
 * are ignored.
 */
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
    applyMetricsSetter(this.bearer, this.metrics);
  }

  async close(graceMs?: number): Promise<void> {
    await this.bearer.close(graceMs);
  }
}

function isAuthMetricsSetter(bearer: Bearer): bearer is AuthMetricsSetter & Bearer {
  return typeof (bearer as Bearer & { setMetrics?: unknown }).setMetrics === 'function';
}

function applyMetricsSetter(bearer: Bearer, metrics: AuthMetricsInput): boolean {
  const seen = new Set<Bearer>();
  for (let current: Bearer | undefined = bearer; current && !seen.has(current); ) {
    seen.add(current);
    if (isAuthMetricsSetter(current)) {
      current.setMetrics(metrics);
      return true;
    }
    current = current.wrapped;
  }
  return false;
}
