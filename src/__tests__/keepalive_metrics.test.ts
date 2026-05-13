import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { Metadata } from '@grpc/grpc-js';

import { Config } from '../runtime/cli_config.js';
import {
  DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM,
  DEFAULT_KEEPALIVE_TIME_MS,
  DEFAULT_KEEPALIVE_TIMEOUT_MS,
  ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM,
  ENV_GRPC_KEEPALIVE_TIME,
  ENV_GRPC_KEEPALIVE_TIMEOUT,
} from '../runtime/keepalive.js';
import {
  type CacheMetric,
  type ConfigMetric,
  DEFAULT_METRIC_PREFIX,
  defaultMetricNames,
  metricName,
  type MetricsLike,
  type TokenAcquireMetric,
  type TokenLifetimeMetric,
  type TokenRefreshMetric,
} from '../runtime/metrics.js';
import { Bearer, Receiver, Token } from '../runtime/token.js';
import { AsyncRenewableBearer } from '../runtime/token/file_cache/async_renewable_bearer.js';
import { PureFileCacheBearer } from '../runtime/token/file_cache/file_bearer.js';
import { RenewableFileCacheBearer } from '../runtime/token/file_cache/renewable_bearer.js';
import { RenewableBearer } from '../runtime/token/renewable.js';
import { GolangBoolParser, GolangDurationParser } from '../runtime/util/golang_parsers.js';
import { SDK } from '../sdk.js';

const KEEPALIVE_ENV = [
  ENV_GRPC_KEEPALIVE_TIME,
  ENV_GRPC_KEEPALIVE_TIMEOUT,
  ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM,
];

class SequenceReceiver extends Receiver {
  public readonly $type = 'test.SequenceReceiver';

  constructor(private readonly tokens: Array<Token | Error>) {
    super();
  }

  protected async _fetch(): Promise<Token> {
    const next = this.tokens.shift();
    if (next instanceof Error) throw next;
    return next ?? Token.empty();
  }

  canRetry(): boolean {
    return false;
  }
}

class SequenceBearer extends Bearer {
  public readonly $type = 'test.SequenceBearer';

  constructor(
    private readonly _name: string,
    private readonly tokens: Array<Token | Error>,
  ) {
    super();
  }

  get name(): string | undefined {
    return this._name;
  }

  receiver(): Receiver {
    return new SequenceReceiver(this.tokens);
  }
}

describe('gRPC keepalive settings', () => {
  const originalEnv = new Map<string, string | undefined>();

  beforeEach(() => {
    for (const key of KEEPALIVE_ENV) {
      originalEnv.set(key, process.env[key]);
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of KEEPALIVE_ENV) {
      const original = originalEnv.get(key);
      if (original === undefined) delete process.env[key];
      else process.env[key] = original;
    }
    originalEnv.clear();
  });

  test('uses public GoSDK-compatible defaults', () => {
    const sdk = new SDK({ insecure: true });
    const opts = sdk.getAddressOptions('127.0.0.1:1');

    expect(opts['grpc.keepalive_time_ms']).toBe(DEFAULT_KEEPALIVE_TIME_MS);
    expect(opts['grpc.keepalive_timeout_ms']).toBe(DEFAULT_KEEPALIVE_TIMEOUT_MS);
    expect(opts['grpc.keepalive_permit_without_calls']).toBe(
      DEFAULT_KEEPALIVE_PERMIT_WITHOUT_STREAM ? 1 : 0,
    );
  });

  test('reads GoSDK keepalive environment variables', () => {
    process.env[ENV_GRPC_KEEPALIVE_TIME] = '45s';
    process.env[ENV_GRPC_KEEPALIVE_TIMEOUT] = '12s';
    process.env[ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM] = 'false';

    const sdk = new SDK({ insecure: true });
    const opts = sdk.getAddressOptions('127.0.0.1:1');

    expect(opts['grpc.keepalive_time_ms']).toBe(45_000);
    expect(opts['grpc.keepalive_timeout_ms']).toBe(12_000);
    expect(opts['grpc.keepalive_permit_without_calls']).toBe(0);
  });

  test('uses shared Go-style duration and bool parsers', () => {
    expect(GolangDurationParser.parseMs('TEST_DURATION', '1m30s')).toBe(90_000);
    expect(GolangDurationParser.parseMs('TEST_DURATION', '+2.5s')).toBe(2_500);
    expect(GolangDurationParser.parseMs('TEST_DURATION', '1ns')).toBe(1);
    expect(GolangDurationParser.parseMs('TEST_DURATION', '0ns')).toBe(0);
    expect(GolangDurationParser.parseMs('TEST_DURATION', '500us')).toBe(1);
    expect(GolangDurationParser.parseMs('TEST_DURATION', '1000000h')).toBe(3_600_000_000_000);
    expect(GolangBoolParser.parse('TEST_BOOL', 'TRUE')).toBe(true);
    expect(GolangBoolParser.parse('TEST_BOOL', '0')).toBe(false);
  });

  test('can be disabled or overridden by explicit client options', () => {
    const disabled = new SDK({ insecure: true, keepalive: false });
    expect(disabled.getAddressOptions('127.0.0.1:1')['grpc.keepalive_time_ms']).toBeUndefined();

    const disabledWithZeroTimeout = new SDK({
      insecure: true,
      keepalive: {
        timeMs: 0,
        timeoutMs: 0,
      },
    });
    expect(
      disabledWithZeroTimeout.getAddressOptions('127.0.0.1:1')['grpc.keepalive_timeout_ms'],
    ).toBeUndefined();

    process.env[ENV_GRPC_KEEPALIVE_TIME] = '0';
    process.env[ENV_GRPC_KEEPALIVE_TIMEOUT] = '0';
    const disabledFromEnv = new SDK({ insecure: true });
    expect(
      disabledFromEnv.getAddressOptions('127.0.0.1:1')['grpc.keepalive_time_ms'],
    ).toBeUndefined();

    const overridden = new SDK({
      clientOptions: {
        'grpc.keepalive_time_ms': 5,
      },
      insecure: true,
    });
    expect(overridden.getAddressOptions('127.0.0.1:1')['grpc.keepalive_time_ms']).toBe(5);
  });

  test('validates invalid environment values', () => {
    process.env[ENV_GRPC_KEEPALIVE_TIMEOUT] = '0';
    expect(() => new SDK({ insecure: true })).toThrow('must be positive');

    process.env[ENV_GRPC_KEEPALIVE_TIMEOUT] = '-1s';
    expect(() => new SDK({ insecure: true })).toThrow('must not be negative');

    process.env[ENV_GRPC_KEEPALIVE_TIMEOUT] = '10s';
    process.env[ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM] = 'sometimes';
    expect(() => new SDK({ insecure: true })).toThrow(ENV_GRPC_KEEPALIVE_PERMIT_WITHOUT_STREAM);
  });

  test('validates explicit keepalive option types at runtime', () => {
    expect(
      () =>
        new SDK({
          insecure: true,
          keepalive: {
            permitWithoutStream: 'false' as unknown as boolean,
          },
        }),
    ).toThrow('keepalive.permitWithoutStream must be boolean');
  });
});

describe('public metrics callbacks', () => {
  test('keeps public metric names and prefix', () => {
    const names = defaultMetricNames();

    expect(metricName(DEFAULT_METRIC_PREFIX, names.tokenRefresh)).toBe(
      'jssdk_auth_token_refresh_total',
    );
    expect(metricName(DEFAULT_METRIC_PREFIX, names.tokenAcquireDuration)).toBe(
      'jssdk_auth_token_acquire_seconds',
    );
    expect(metricName(DEFAULT_METRIC_PREFIX, names.tokenLifetime)).toBe(
      'jssdk_auth_token_lifetime_seconds',
    );
    expect(metricName(DEFAULT_METRIC_PREFIX, names.configLoad)).toBe('jssdk_config_load_seconds');
    expect(metricName('jssdk_', names.configLoad)).toBe('jssdk_config_load_seconds');
    expect(metricName(DEFAULT_METRIC_PREFIX, '_config_load_seconds')).toBe(
      'jssdk_config_load_seconds',
    );
  });

  test('records auth token acquire and lifetime metrics', async () => {
    const acquired: TokenAcquireMetric[] = [];
    const lifetimes: TokenLifetimeMetric[] = [];
    const metrics: MetricsLike = {
      tokenAcquire: (metric) => acquired.push(metric),
      tokenLifetime: (metric) => lifetimes.push(metric),
    };
    const expiresAt = new Date(Date.now() + 60_000);
    const sdk = new SDK({
      credentials: new Token('test-token', expiresAt),
      insecure: true,
      metrics,
    });
    const metadata = new Metadata();

    await sdk.getAuthorizationProvider()?.authenticator().authenticate(metadata);

    expect(metadata.get('authorization')).toEqual(['Bearer test-token']);
    expect(acquired).toHaveLength(1);
    expect(acquired[0]).toMatchObject({
      attempt: 1,
      provider: 'nebius.sdk.StaticBearer',
      result: 'success',
    });
    expect(acquired[0].durationSeconds).toBeGreaterThanOrEqual(0);
    expect(acquired[0].durationSeconds).toBeLessThan(1);
    expect(lifetimes).toHaveLength(1);
    expect(lifetimes[0].provider).toBe('nebius.sdk.StaticBearer');
    expect(lifetimes[0].ttlSeconds).toBeGreaterThan(0);
    expect(lifetimes[0].ttlSeconds).toBeLessThanOrEqual(60);
  });

  test('metrics callback errors do not affect auth flow', async () => {
    const sdk = new SDK({
      credentials: new Token('test-token', new Date(Date.now() + 60_000)),
      insecure: true,
      metrics: {
        tokenAcquire: (metric) => {
          if (metric.attempt !== 1) throw new Error('unexpected attempt');
          return Promise.reject(new Error('metric acquire failure'));
        },
        tokenLifetime: () => {
          throw new Error('metric lifetime failure');
        },
      },
    });
    const metadata = new Metadata();

    await expect(
      sdk.getAuthorizationProvider()?.authenticator().authenticate(metadata),
    ).resolves.toBe(undefined);
    expect(metadata.get('authorization')).toEqual(['Bearer test-token']);
  });

  test('records auth metrics for bearers installed after SDK construction', async () => {
    const acquired: TokenAcquireMetric[] = [];
    const metrics: MetricsLike = {
      tokenAcquire: (metric) => acquired.push(metric),
    };
    const sdk = new SDK({ insecure: true, metrics });
    const bearer = new SequenceBearer('custom/test', [
      new Token('late-token', new Date(Date.now() + 60_000)),
    ]);
    const metadata = new Metadata();

    sdk.setTokenBearerAsAuthorization(bearer);
    await sdk.getAuthorizationProvider()?.authenticator().authenticate(metadata);

    expect(metadata.get('authorization')).toEqual(['Bearer late-token']);
    expect(acquired).toEqual([
      expect.objectContaining({
        attempt: 1,
        provider: 'custom',
        result: 'success',
      }),
    ]);
  });

  test('records token-file acquire metrics on every read', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-token-file-metrics-'));
    const acquired: TokenAcquireMetric[] = [];
    const tokenFile = join(dir, 'token.txt');
    writeFileSync(tokenFile, 'file-token');
    const metrics: MetricsLike = {
      tokenAcquire: (metric) => acquired.push(metric),
    };
    const sdk = new SDK({
      credentials: { tokenFile },
      insecure: true,
      metrics,
    });
    const auth = sdk.getAuthorizationProvider()?.authenticator();
    const first = new Metadata();
    const second = new Metadata();

    try {
      await auth?.authenticate(first);
      await auth?.authenticate(second);

      expect(first.get('authorization')).toEqual(['Bearer file-token']);
      expect(second.get('authorization')).toEqual(['Bearer file-token']);
      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'file', result: 'success' }),
        expect.objectContaining({ attempt: 1, provider: 'file', result: 'success' }),
      ]);
    } finally {
      await sdk.close();
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records token-file read errors as acquire errors', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-token-file-error-metrics-'));
    const acquired: TokenAcquireMetric[] = [];
    const metrics: MetricsLike = {
      tokenAcquire: (metric) => acquired.push(metric),
    };
    const sdk = new SDK({
      credentials: { tokenFile: join(dir, 'missing-token.txt') },
      insecure: true,
      metrics,
    });

    try {
      await expect(
        sdk.getAuthorizationProvider()?.authenticator().authenticate(new Metadata()),
      ).rejects.toThrow();
      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'file', result: 'error' }),
      ]);
    } finally {
      await sdk.close();
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('Config passes auth metrics to direct token-file credentials', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-config-token-file-auth-metrics-'));
    try {
      const tokenFile = join(dir, 'token.txt');
      const configFile = join(dir, 'config.yaml');
      writeFileSync(tokenFile, 'config-file-token');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          `    token-file: ${tokenFile}`,
        ].join('\n'),
      );

      const acquired: TokenAcquireMetric[] = [];
      const config = new Config({
        configFile,
        metrics: {
          tokenAcquire: (metric) => acquired.push(metric),
        },
      });
      const credentials = config.getCredentials();

      expect(credentials).toBeInstanceOf(Bearer);
      await (credentials as Bearer).receiver().fetch();

      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'file', result: 'success' }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('Config passes auth metrics to direct environment credentials', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-config-env-auth-metrics-'));
    const envName = 'NEBIUS_TEST_TOKEN_METRICS';
    const original = process.env[envName];
    try {
      process.env[envName] = 'env-token';
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file: /tmp/nebius-token',
        ].join('\n'),
      );

      const acquired: TokenAcquireMetric[] = [];
      const config = new Config({
        configFile,
        tokenEnv: envName,
        metrics: {
          tokenAcquire: (metric) => acquired.push(metric),
        },
      });
      const credentials = config.getCredentials();

      expect(credentials).toBeInstanceOf(Bearer);
      await (credentials as Bearer).receiver().fetch();

      expect(acquired).toEqual([
        expect.objectContaining({
          attempt: 1,
          provider: 'nebius.sdk.EnvBearer',
          result: 'success',
        }),
      ]);
    } finally {
      if (original === undefined) delete process.env[envName];
      else process.env[envName] = original;
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records config load and credentials resolve metrics', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-metrics-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file: /tmp/nebius-token',
        ].join('\n'),
      );

      const configEvents: Array<ConfigMetric & { kind: string }> = [];
      const metrics: MetricsLike = {
        configLoad: (metric) => configEvents.push({ ...metric, kind: 'configLoad' }),
        credentialsResolve: (metric) =>
          configEvents.push({ ...metric, kind: 'credentialsResolve' }),
      };

      const config = new Config({ configFile, metrics });
      config.getCredentials();

      expect(configEvents).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ kind: 'configLoad', result: 'success', source: 'file' }),
          expect.objectContaining({
            kind: 'credentialsResolve',
            result: 'success',
            source: 'token-file',
          }),
        ]),
      );
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('metrics callback errors do not affect config flow', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-throwing-metrics-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file: /tmp/nebius-token',
        ].join('\n'),
      );

      const throwingMetrics: MetricsLike = {
        configLoad: () => {
          throw new Error('metric config-load failure');
        },
        credentialsResolve: () => {
          throw new Error('metric credentials-resolve failure');
        },
      };

      expect(() => {
        const config = new Config({ configFile, metrics: throwingMetrics });
        config.getCredentials();
      }).not.toThrow();

      expect(() => {
        const config = new Config({ configFile });
        new SDK({ configReader: config, insecure: true, metrics: throwingMetrics });
      }).not.toThrow();
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records renewable bearer cache hit and miss metrics', async () => {
    const acquired: TokenAcquireMetric[] = [];
    const lifetimes: TokenLifetimeMetric[] = [];
    const refreshes: TokenRefreshMetric[] = [];
    const hits: CacheMetric[] = [];
    const misses: CacheMetric[] = [];
    const metrics: MetricsLike = {
      cacheHit: (metric) => hits.push(metric),
      cacheMiss: (metric) => misses.push(metric),
      tokenAcquire: (metric) => acquired.push(metric),
      tokenLifetime: (metric) => lifetimes.push(metric),
      tokenRefresh: (metric) => refreshes.push(metric),
    };
    const token = new Token('renewed-token', new Date(Date.now() + 60_000));
    const bearer = new RenewableBearer(new SequenceBearer('service-account/test/key', [token]), {
      provider: 'service-account',
    });
    bearer.setMetrics(metrics);

    try {
      const receiver = bearer.receiver();
      await expect(receiver.fetch()).resolves.toBe(token);
      await expect(receiver.fetch()).resolves.toBe(token);

      expect(misses).toEqual([
        expect.objectContaining({ provider: 'service-account', result: 'success' }),
      ]);
      expect(hits).toEqual([expect.objectContaining({ provider: 'service-account' })]);
      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'service-account', result: 'success' }),
      ]);
      expect(lifetimes).toEqual([expect.objectContaining({ provider: 'service-account' })]);
      expect(refreshes).toEqual([]);
    } finally {
      await bearer.close();
    }
  });

  test('records async file cache store, hit, and miss metrics', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-file-cache-metrics-'));
    const acquired: TokenAcquireMetric[] = [];
    const refreshes: TokenRefreshMetric[] = [];
    const hits: CacheMetric[] = [];
    const misses: CacheMetric[] = [];
    const stores: CacheMetric[] = [];
    const metrics: MetricsLike = {
      cacheHit: (metric) => hits.push(metric),
      cacheMiss: (metric) => misses.push(metric),
      cacheStore: (metric) => stores.push(metric),
      tokenAcquire: (metric) => acquired.push(metric),
      tokenRefresh: (metric) => refreshes.push(metric),
    };
    const token = new Token('file-cache-token', new Date(Date.now() + 60_000));
    const bearer = new AsyncRenewableBearer(new SequenceBearer('federation/test', [token]), {
      cacheFilePath: join(dir, 'credentials.yaml'),
      provider: 'federation',
    });
    bearer.setMetrics(metrics);

    try {
      const receiver = bearer.receiver();
      await expect(receiver.fetch()).resolves.toBe(token);
      await expect(receiver.fetch()).resolves.toBe(token);

      expect(misses).toEqual([
        expect.objectContaining({ provider: 'federation', result: 'success' }),
      ]);
      expect(stores).toEqual([
        expect.objectContaining({ provider: 'federation', result: 'success' }),
      ]);
      expect(hits).toEqual([expect.objectContaining({ provider: 'federation' })]);
      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'federation', result: 'success' }),
      ]);
      expect(refreshes).toEqual([]);
    } finally {
      await bearer.close();
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records async file cache read errors as cache misses', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-file-cache-error-metrics-'));
    const misses: CacheMetric[] = [];
    const metrics: MetricsLike = {
      cacheMiss: (metric) => misses.push(metric),
    };
    const cacheFile = join(dir, 'credentials.yaml');
    writeFileSync(cacheFile, 'tokens: [');
    const bearer = new AsyncRenewableBearer(new SequenceBearer('federation/test', []), {
      cacheFilePath: cacheFile,
      provider: 'federation',
    });
    bearer.setMetrics(metrics);

    try {
      await expect(bearer.receiver().fetch()).rejects.toThrow();
      expect(misses).toEqual([
        expect.objectContaining({ provider: 'federation', result: 'error' }),
      ]);
    } finally {
      await bearer.close();
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records sync file cache source acquisition metrics', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-sync-file-cache-metrics-'));
    const acquired: TokenAcquireMetric[] = [];
    const stores: CacheMetric[] = [];
    const metrics: MetricsLike = {
      cacheStore: (metric) => stores.push(metric),
      tokenAcquire: (metric) => acquired.push(metric),
    };
    const token = new Token('sync-file-cache-token', new Date(Date.now() + 60_000));
    const bearer = new RenewableFileCacheBearer(
      new SequenceBearer('service-account/test/key', [token]),
      0,
      join(dir, 'credentials.yaml'),
      5 * 60_000,
      undefined,
      metrics,
      'service-account',
    );

    try {
      await expect(bearer.receiver().fetch()).resolves.toBe(token);

      expect(stores).toEqual([
        expect.objectContaining({ provider: 'service-account', result: 'success' }),
      ]);
      expect(acquired).toEqual([
        expect.objectContaining({ attempt: 1, provider: 'service-account', result: 'success' }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('pure file cache uses low-cardinality provider label by default', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-pure-file-cache-metrics-'));
    const misses: CacheMetric[] = [];
    const bearer = new PureFileCacheBearer(
      'service-account/test/key',
      join(dir, 'credentials.yaml'),
      0,
      undefined,
      {
        cacheMiss: (metric: CacheMetric) => misses.push(metric),
      },
    );

    try {
      await expect(bearer.receiver().fetch()).resolves.toEqual(Token.empty());
      expect(misses).toEqual([
        expect.objectContaining({ provider: 'file-cache', result: 'success' }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('SDK metrics record eager config load from Config readers', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-metrics-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file: /tmp/nebius-token',
        ].join('\n'),
      );

      const configEvents: Array<ConfigMetric & { kind: string }> = [];
      const metrics: MetricsLike = {
        configLoad: (metric) => configEvents.push({ ...metric, kind: 'configLoad' }),
        credentialsResolve: (metric) =>
          configEvents.push({ ...metric, kind: 'credentialsResolve' }),
      };

      const config = new Config({ configFile });
      new SDK({ configReader: config, insecure: true, metrics });

      expect(configEvents).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ kind: 'configLoad', result: 'success', source: 'file' }),
          expect.objectContaining({
            kind: 'credentialsResolve',
            result: 'success',
            source: 'token-file',
          }),
        ]),
      );
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('SDK metrics override and replay Config reader metrics', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-metrics-override-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file: /tmp/nebius-token',
        ].join('\n'),
      );

      const readerEvents: Array<ConfigMetric & { kind: string }> = [];
      const sdkEvents: Array<ConfigMetric & { kind: string }> = [];
      const readerMetrics: MetricsLike = {
        configLoad: (metric) => readerEvents.push({ ...metric, kind: 'configLoad' }),
      };
      const sdkMetrics: MetricsLike = {
        configLoad: (metric) => sdkEvents.push({ ...metric, kind: 'configLoad' }),
        credentialsResolve: (metric) => sdkEvents.push({ ...metric, kind: 'credentialsResolve' }),
      };

      const config = new Config({ configFile, metrics: readerMetrics });
      new SDK({ configReader: config, insecure: true, metrics: sdkMetrics });

      expect(readerEvents).toEqual([
        expect.objectContaining({ kind: 'configLoad', result: 'success', source: 'file' }),
      ]);
      expect(sdkEvents).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ kind: 'configLoad', result: 'success', source: 'file' }),
          expect.objectContaining({
            kind: 'credentialsResolve',
            result: 'success',
            source: 'token-file',
          }),
        ]),
      );
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('SDK records credentialsResolve fallback for auth-metrics-only config readers', () => {
    const configEvents: Array<ConfigMetric & { kind: string }> = [];
    const metrics: MetricsLike = {
      credentialsResolve: (metric) => configEvents.push({ ...metric, kind: 'credentialsResolve' }),
    };
    const reader = {
      endpoint: () => undefined,
      getCredentials: () => new Token('reader-token', new Date(Date.now() + 60_000)),
      parentId: () => undefined,
      profileName: () => 'test',
      setAuthMetrics: jest.fn(),
    };

    new SDK({ configReader: reader, insecure: true, metrics });

    expect(reader.setAuthMetrics).toHaveBeenCalledWith(metrics);
    expect(configEvents).toEqual([
      expect.objectContaining({
        kind: 'credentialsResolve',
        result: 'success',
        source: 'config-reader',
      }),
    ]);
  });

  test('SDK records credentialsResolve fallback for custom setMetrics readers by default', () => {
    const configEvents: Array<ConfigMetric & { kind: string }> = [];
    const metrics: MetricsLike = {
      credentialsResolve: (metric) => configEvents.push({ ...metric, kind: 'credentialsResolve' }),
    };
    const reader = {
      endpoint: () => undefined,
      getCredentials: () => new Token('reader-token', new Date(Date.now() + 60_000)),
      parentId: () => undefined,
      profileName: () => 'test',
      setMetrics: jest.fn(),
    };

    new SDK({ configReader: reader, insecure: true, metrics });

    expect(reader.setMetrics).toHaveBeenCalledWith(metrics);
    expect(configEvents).toEqual([
      expect.objectContaining({
        kind: 'credentialsResolve',
        result: 'success',
        source: 'config-reader',
      }),
    ]);
  });

  test('records credentialsResolve error source for invalid token-file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-token-file-source-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    token-file:',
          '      - invalid',
        ].join('\n'),
      );
      const events: Array<ConfigMetric & { kind: string }> = [];
      const config = new Config({
        configFile,
        metrics: {
          credentialsResolve: (metric) => events.push({ ...metric, kind: 'credentialsResolve' }),
        },
      });

      expect(() => config.getCredentials()).toThrow('Token file should be a string');
      expect(events).toEqual([
        expect.objectContaining({
          kind: 'credentialsResolve',
          result: 'error',
          source: 'token-file',
        }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records credentialsResolve error source for federation config errors', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-federation-source-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    auth-type: federation',
          '    federation-endpoint: https://federation.example.test',
          '    federation-id: federation-test',
        ].join('\n'),
      );
      const events: Array<ConfigMetric & { kind: string }> = [];
      const config = new Config({
        configFile,
        metrics: {
          credentialsResolve: (metric) => events.push({ ...metric, kind: 'credentialsResolve' }),
        },
      });

      expect(() => config.getCredentials()).toThrow('Client ID is required');
      expect(events).toEqual([
        expect.objectContaining({
          kind: 'credentialsResolve',
          result: 'error',
          source: 'federation',
        }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });

  test('records credentialsResolve error source for service account config errors', () => {
    const dir = mkdtempSync(join(tmpdir(), 'nebius-js-sdk-service-account-source-'));
    try {
      const configFile = join(dir, 'config.yaml');
      writeFileSync(
        configFile,
        [
          'default: test',
          'profiles:',
          '  test:',
          '    endpoint: api.example.test:443',
          '    auth-type: service account',
          '    service-account-id: service-account-test',
          '    public-key-id: public-key-test',
        ].join('\n'),
      );
      const events: Array<ConfigMetric & { kind: string }> = [];
      const config = new Config({
        configFile,
        metrics: {
          credentialsResolve: (metric) => events.push({ ...metric, kind: 'credentialsResolve' }),
        },
      });

      expect(() => config.getCredentials()).toThrow('Incomplete service account configuration');
      expect(events).toEqual([
        expect.objectContaining({
          kind: 'credentialsResolve',
          result: 'error',
          source: 'service-account',
        }),
      ]);
    } finally {
      rmSync(dir, { force: true, recursive: true });
    }
  });
});
