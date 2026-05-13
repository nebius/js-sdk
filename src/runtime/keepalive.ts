import { GolangBoolParser, GolangDurationParser } from './util/golang_parsers.js';

import type { ClientOptions } from '@grpc/grpc-js';

export const DEFAULT_KEEPALIVE_TIME_MS = 20_000;
export const DEFAULT_KEEPALIVE_TIMEOUT_MS = 10_000;
export const DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM = true;

export const ENV_GRPC_KEEPALIVE_TIME = 'NEBIUS_GRPC_KEEPALIVE_TIME';
export const ENV_GRPC_KEEPALIVE_TIMEOUT = 'NEBIUS_GRPC_KEEPALIVE_TIMEOUT';
export const ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM =
  'NEBIUS_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM';

/**
 * Explicit keepalive options ignore NEBIUS_GRPC_KEEPALIVE_* environment variables.
 * Omitted fields use SDK defaults; set timeMs to 0 or pass keepalive: false to disable keepalive.
 */
export interface KeepaliveOptions {
  timeMs?: number;
  timeoutMs?: number;
  permitWithoutStream?: boolean;
}

export interface KeepaliveConfig {
  enabled: boolean;
  timeMs: number;
  timeoutMs: number;
  permitWithoutStream: boolean;
}

type Environment = Record<string, string | undefined>;

export function defaultKeepaliveConfig(): KeepaliveConfig {
  return {
    enabled: true,
    permitWithoutStream: DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM,
    timeMs: DEFAULT_KEEPALIVE_TIME_MS,
    timeoutMs: DEFAULT_KEEPALIVE_TIMEOUT_MS,
  };
}

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
