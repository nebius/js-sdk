import { GolangBoolParser, GolangDurationParser } from './util/golang_parsers.js';

import type { ClientOptions } from '@grpc/grpc-js';

/** Contains the default keepalive interval in milliseconds. */
export const DEFAULT_KEEPALIVE_TIME_MS = 20_000;
/** Contains the default keepalive timeout in milliseconds. */
export const DEFAULT_KEEPALIVE_TIMEOUT_MS = 10_000;
/** Specifies whether the default permits keepalive without an active call. */
export const DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM = true;

/** Contains the keepalive interval environment-variable name. */
export const ENV_GRPC_KEEPALIVE_TIME = 'NEBIUS_GRPC_KEEPALIVE_TIME';
/** Contains the keepalive timeout environment-variable name. */
export const ENV_GRPC_KEEPALIVE_TIMEOUT = 'NEBIUS_GRPC_KEEPALIVE_TIMEOUT';
/** Contains the permit-without-stream environment-variable name. */
export const ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM =
  'NEBIUS_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM';

/**
 * Configures gRPC keepalive.
 *
 * Explicit options override the `NEBIUS_GRPC_KEEPALIVE_*` environment
 * variables. When you supply an options object, omitted fields use SDK
 * defaults instead of environment values. Set {@link KeepaliveOptions.timeMs}
 * to `0`, or set
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#keepalive | SDKOptions.keepalive}
 * to `false`, to disable keepalive.
 *
 * Keepalive pings help detect a broken connection during a long-lived
 * process. A server or network can reject pings that are too frequent.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 *
 * const sdk = new SDK({
 *   keepalive: {
 *     timeMs: 30_000,
 *     timeoutMs: 10_000,
 *     permitWithoutStream: true,
 *   },
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export interface KeepaliveOptions {
  /** Sets the keepalive interval in milliseconds. */
  timeMs?: number;
  /** Sets the keepalive timeout in milliseconds. */
  timeoutMs?: number;
  /** Specifies whether to send keepalive pings without an active call. */
  permitWithoutStream?: boolean;
}

/**
 * Defines the validated keepalive settings used for each new gRPC client.
 *
 * Use {@link keepaliveConfigFromOptions} or {@link keepaliveConfigFromEnv} to
 * create this value.
 */
export interface KeepaliveConfig {
  /** Specifies whether keepalive is enabled. */
  enabled: boolean;
  /** Contains the keepalive interval in milliseconds. */
  timeMs: number;
  /** Contains the keepalive timeout in milliseconds. */
  timeoutMs: number;
  /** Specifies whether to send keepalive pings without an active call. */
  permitWithoutStream: boolean;
}

/**
 * Defines an environment-like object that configures keepalive.
 *
 * Tests and embedded runtimes can pass a plain object instead of using
 * `process.env`.
 */
export type Environment = Record<string, string | undefined>;

/**
 * Returns a new copy of the default gRPC keepalive configuration.
 *
 * You can modify the returned object without changing later calls.
 */
export function defaultKeepaliveConfig(): KeepaliveConfig {
  return {
    enabled: true,
    permitWithoutStream: DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM,
    timeMs: DEFAULT_KEEPALIVE_TIME_MS,
    timeoutMs: DEFAULT_KEEPALIVE_TIMEOUT_MS,
  };
}

/**
 * Reads and validates gRPC keepalive environment variables.
 *
 * Duration values use Go duration syntax, such as `20s`, `500ms`, or `1m`.
 * Set {@link ENV_GRPC_KEEPALIVE_TIME} to `0` to disable keepalive.
 *
 * @example
 * ```ts
 * const config = keepaliveConfigFromEnv({
 *   NEBIUS_GRPC_KEEPALIVE_TIME: '30s',
 *   NEBIUS_GRPC_KEEPALIVE_TIMEOUT: '10s',
 *   NEBIUS_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM: 'true',
 * });
 * ```
 *
 * @throws {Error} A value has invalid duration or Boolean syntax.
 */
export function keepaliveConfigFromEnv(env: Environment = process.env): KeepaliveConfig {
  const cfg = defaultKeepaliveConfig();

  const time = lookupKeepaliveEnv(env, ENV_GRPC_KEEPALIVE_TIME);
  if (time !== undefined) {
    const parsed = parseKeepaliveDurationEnv(ENV_GRPC_KEEPALIVE_TIME, time);
    cfg.timeMs = parsed;
    cfg.enabled = parsed !== 0;
  }

  const timeout = lookupKeepaliveEnv(env, ENV_GRPC_KEEPALIVE_TIMEOUT);
  if (timeout !== undefined) {
    cfg.timeoutMs = parseKeepaliveDurationEnv(ENV_GRPC_KEEPALIVE_TIMEOUT, timeout);
  }

  const permitWithoutStream = lookupKeepaliveEnv(env, ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM);
  if (permitWithoutStream !== undefined) {
    cfg.permitWithoutStream = GolangBoolParser.parse(
      ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM,
      permitWithoutStream,
    );
  }

  validateKeepaliveConfig(cfg);
  return cfg;
}

/**
 * Creates and validates a gRPC keepalive configuration from SDK options.
 *
 * `undefined` reads environment variables. `false` disables keepalive. An
 * options object uses SDK defaults for fields that it omits.
 *
 * @throws {Error} A millisecond value is negative, non-finite, or not an integer.
 */
export function keepaliveConfigFromOptions(
  options: KeepaliveOptions | false | undefined,
): KeepaliveConfig {
  if (options === false) {
    return {
      ...defaultKeepaliveConfig(),
      enabled: false,
      timeMs: 0,
    };
  }
  if (options === undefined) {
    return keepaliveConfigFromEnv();
  }

  const cfg = defaultKeepaliveConfig();
  if (options.timeMs !== undefined) {
    assertValidKeepaliveMs('keepalive.timeMs', options.timeMs, true);
    cfg.timeMs = options.timeMs;
    cfg.enabled = options.timeMs !== 0;
  }
  if (options.timeoutMs !== undefined) {
    assertValidKeepaliveMs('keepalive.timeoutMs', options.timeoutMs, true);
    cfg.timeoutMs = options.timeoutMs;
  }
  if (options.permitWithoutStream !== undefined) {
    if (typeof options.permitWithoutStream !== 'boolean') {
      throw new Error('keepalive.permitWithoutStream must be boolean');
    }
    cfg.permitWithoutStream = options.permitWithoutStream;
  }

  validateKeepaliveConfig(cfg);
  return cfg;
}

/**
 * Converts a validated keepalive configuration to gRPC client options.
 *
 * A disabled configuration returns an empty object. The SDK applies the
 * returned options when it creates a channel.
 */
export function keepaliveClientOptions(cfg: KeepaliveConfig): Partial<ClientOptions> {
  if (!cfg.enabled) return {};
  return {
    'grpc.keepalive_permit_without_calls': cfg.permitWithoutStream ? 1 : 0,
    'grpc.keepalive_time_ms': cfg.timeMs,
    'grpc.keepalive_timeout_ms': cfg.timeoutMs,
  };
}

function lookupKeepaliveEnv(env: Environment, name: string): string | undefined {
  const value = env[name];
  if (value === undefined) return undefined;
  const trimmed = value.trim();
  return trimmed === '' ? undefined : trimmed;
}

function parseKeepaliveDurationEnv(name: string, value: string): number {
  return GolangDurationParser.parseMs(name, value);
}

function assertValidKeepaliveMs(name: string, value: number, allowZero: boolean): void {
  if (!Number.isFinite(value)) {
    throw new Error(`${name} must be finite`);
  }
  if (!Number.isInteger(value)) {
    throw new Error(`${name} must be an integer number of milliseconds`);
  }
  if (value < 0) {
    throw new Error(`${name} must not be negative`);
  }
  if (!allowZero && value === 0) {
    throw new Error(`${name} must be positive`);
  }
}

function validateKeepaliveConfig(cfg: KeepaliveConfig): void {
  assertValidKeepaliveMs('keepalive.timeMs', cfg.timeMs, true);
  assertValidKeepaliveMs('keepalive.timeoutMs', cfg.timeoutMs, !cfg.enabled);
  if (cfg.enabled && cfg.timeoutMs <= 0) {
    throw new Error(`${ENV_GRPC_KEEPALIVE_TIMEOUT} must be positive when keepalive is enabled`);
  }
}
