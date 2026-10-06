import { mkdtemp, rm } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { CreateTokenResponse, TokenExchangeService } from '../api/nebius/iam/v1/index.js';
import { bindAuthMetrics } from '../runtime/metrics.js';
import { Long } from '../runtime/protos/core.js';
import { NamedBearer, Token } from '../runtime/token.js';
import { FederationAccountBearer } from '../runtime/token/federation_account.js';
import { FederationBearer } from '../runtime/token/federation_bearer/index.js';
import { AsyncRenewableBearer } from '../runtime/token/file_cache/async_renewable_bearer.js';
import { RenewableFileCacheBearer } from '../runtime/token/file_cache/renewable_bearer.js';
import { CachedImpersonatedBearer, ImpersonatedBearer } from '../runtime/token/impersonated.js';
import { RenewableBearer } from '../runtime/token/renewable.js';
import { StaticBearer } from '../runtime/token/static.js';
import { TimeoutError, withTimeout } from '../runtime/util/cancelable.js';
import { SDK } from '../sdk.js';

class BudgetBearer extends StaticBearer {
  constructor(public budgetMs?: number) {
    super(new Token('actor', new Date(Date.now() + 3_600_000)));
  }
  get acquisitionBudgetMs(): number | undefined {
    return this.budgetMs;
  }
}

function mockExchange() {
  return jest.spyOn(TokenExchangeService.prototype, 'exchange').mockImplementation(
    () =>
      ({
        result: Promise.resolve(
          CreateTokenResponse.create({
            accessToken: 'impersonated',
            tokenType: 'Bearer',
            expiresIn: Long.fromNumber(3_600),
          }),
        ),
      }) as ReturnType<TokenExchangeService['exchange']>,
  );
}

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test.each([undefined, 0, -1, 12_000])(
  'automatic renewal selects source budget %s',
  async (budget) => {
    const source = new BudgetBearer(budget);
    const receiver = source.receiver();
    const fetch = jest.spyOn(receiver, 'fetch');
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const bearer = new RenewableBearer(source, { refreshRequestTimeoutMs: null });
    try {
      await bearer.receiver().fetch(undefined, { renewRequired: true, renewSynchronous: true });
      expect(fetch.mock.calls[0][0]).toBe(budget && budget > 0 ? budget : 5_000);
      source.budgetMs = 21_000;
      await bearer.receiver().fetch(undefined, { renewRequired: true, renewSynchronous: true });
      expect(fetch.mock.calls[1][0]).toBe(21_000);
    } finally {
      await bearer.close();
    }
  },
);

test.each([undefined, 0, -1, 2_000])(
  'explicit renewable budget %s is preserved',
  async (budget) => {
    const source = new BudgetBearer(20_000);
    const receiver = source.receiver();
    const fetch = jest.spyOn(receiver, 'fetch');
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const bearer = new RenewableBearer(source, { refreshRequestTimeoutMs: budget });
    try {
      await bearer.receiver().fetch(undefined, { renewRequired: true, renewSynchronous: true });
      expect(fetch.mock.calls[0][0]).toBe(budget ?? 5_000);
      expect(bearer.acquisitionBudgetMs).toBe(budget ?? 5_000);
    } finally {
      await bearer.close();
    }
  },
);

test('transparent wrappers forward budgets and caches report their own caps', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-budget-wrappers-'));
  const source = new BudgetBearer(12_000);
  const named = new NamedBearer(source, 'test/budget');
  const instrumented = bindAuthMetrics(named, {});
  const file = new RenewableFileCacheBearer(instrumented, 0, join(directory, 'tokens.yaml'));
  const renewable = new RenewableBearer(file, { refreshRequestTimeoutMs: 2_000 });
  const nested = new RenewableBearer(renewable, { refreshRequestTimeoutMs: null });
  const asyncCache = new AsyncRenewableBearer(named, {
    refreshRequestTimeoutMs: 9_000,
    cacheFilePath: join(directory, 'async.yaml'),
  });
  const federation = new FederationAccountBearer(
    'profile',
    'client',
    'https://auth.example',
    'fed',
    {
      timeoutMs: 18_000,
      cacheFilePath: join(directory, 'federation.yaml'),
    },
  );
  try {
    expect(instrumented.acquisitionBudgetMs).toBe(12_000);
    expect(file.acquisitionBudgetMs).toBe(12_000);
    source.budgetMs = 13_000;
    expect(file.acquisitionBudgetMs).toBe(13_000);
    expect(nested.acquisitionBudgetMs).toBe(2_000);
    expect(asyncCache.acquisitionBudgetMs).toBe(9_000);
    expect(federation.acquisitionBudgetMs).toBe(18_000);
    expect(
      new FederationBearer('profile', 'client', 'https://auth.example', 'fed').acquisitionBudgetMs,
    ).toBe(300_000);
    expect(new StaticBearer('token').acquisitionBudgetMs).toBeUndefined();
  } finally {
    await Promise.all([nested.close(), asyncCache.close(), federation.close()]);
    await rm(directory, { recursive: true, force: true });
  }
});

test.each([
  [undefined, undefined],
  [0, undefined],
  [-1, undefined],
  [10_000, 15_000],
  [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
])('impersonation composes actor budget %s without overflow', (budget, expected) => {
  const bearer = new ImpersonatedBearer('serviceaccount', new BudgetBearer(budget), null);
  expect(bearer.acquisitionBudgetMs).toBe(expected);
});

test('a short caller wait does not cancel the shared slow actor acquisition', async () => {
  jest.useFakeTimers();
  const source = new BudgetBearer(10_000);
  const receiver = source.receiver();
  const fetch = jest.spyOn(receiver, 'fetch').mockImplementation(async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 6_000));
    return new Token('actor');
  });
  jest.spyOn(source, 'receiver').mockReturnValue(receiver);
  const exchange = mockExchange();
  const sdk = new SDK({ userAgentPrefix: 'test/budget' });
  const bearer = new CachedImpersonatedBearer('serviceaccount', source, sdk);
  try {
    const longWait = bearer.receiver().fetch();
    const shortWait = expect(bearer.receiver().fetch(1_000)).rejects.toThrow();
    await jest.advanceTimersByTimeAsync(5_000);
    await shortWait;
    expect(exchange).not.toHaveBeenCalled();
    await jest.advanceTimersByTimeAsync(1_000);
    expect((await longWait).token).toBe('impersonated');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0][0]).toBe(15_000);
    expect(exchange).toHaveBeenCalledTimes(1);
    expect(bearer.acquisitionBudgetMs).toBe(15_000);
  } finally {
    await bearer.close();
    await sdk.close();
  }
});

test('cached impersonation accepts a manual federation callback after six seconds', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-slow-login-'));
  const server = createServer((_request, response) => {
    response.setHeader('content-type', 'application/json');
    response.end(
      JSON.stringify({ access_token: 'actor', token_type: 'Bearer', expires_in: 3_600 }),
    );
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Missing test server address');
  const sdk = new SDK({ userAgentPrefix: 'test/slow-login' });
  const exchange = mockExchange();
  let callback: Promise<Response> | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const actor = new FederationAccountBearer(
    'profile',
    'client',
    `http://127.0.0.1:${address.port}`,
    'fed',
    {
      noBrowserOpen: true,
      timeoutMs: 12_000,
      initialSafetyMarginMs: 0,
      cacheFilePath: join(directory, 'tokens.yaml'),
      writer: (message) => {
        const url = new URL(
          message.replace('Open this URL to continue authentication: ', '').trim(),
        );
        const redirect = new URL(url.searchParams.get('redirect_uri')!);
        redirect.searchParams.set('code', 'manual-code');
        redirect.searchParams.set('state', url.searchParams.get('state')!);
        timer = setTimeout(() => {
          callback = fetch(redirect);
        }, 6_000);
      },
    },
  );
  const bearer = new CachedImpersonatedBearer('serviceaccount', actor, sdk);
  try {
    expect((await bearer.receiver().fetch(15_000)).token).toBe('impersonated');
    expect((await callback)?.status).toBe(200);
    expect(exchange).toHaveBeenCalledTimes(1);
  } finally {
    if (timer) clearTimeout(timer);
    await bearer.close();
    await sdk.close();
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
    await rm(directory, { recursive: true, force: true });
  }
}, 20_000);

test.each([0, -1, 2_000])(
  'an explicit impersonation cap of %s stops before exchange',
  async (cap) => {
    jest.useFakeTimers();
    const source = new BudgetBearer(10_000);
    const receiver = source.receiver();
    jest.spyOn(receiver, 'fetch').mockImplementation(async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 6_000));
      return new Token('actor');
    });
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const exchange = mockExchange();
    const sdk = new SDK({ userAgentPrefix: 'test/budget-cap' });
    const bearer = new CachedImpersonatedBearer('serviceaccount', source, sdk, {
      refreshRequestTimeoutMs: cap,
    });
    try {
      expect(bearer.acquisitionBudgetMs).toBe(cap);
      const assertion = expect(bearer.receiver().fetch()).rejects.toBeInstanceOf(TimeoutError);
      await jest.advanceTimersByTimeAsync(Math.max(0, cap));
      await assertion;
      expect(exchange).not.toHaveBeenCalled();
    } finally {
      await bearer.close();
      await sdk.close();
    }
  },
);

test('automatic renewal does not discover budgets through an opaque wrapper', async () => {
  const inner = new BudgetBearer(12_000);
  class OpaqueBearer extends StaticBearer {
    get wrapped() {
      return inner;
    }
  }
  const source = new OpaqueBearer('actor');
  const receiver = source.receiver();
  const fetch = jest.spyOn(receiver, 'fetch');
  jest.spyOn(source, 'receiver').mockReturnValue(receiver);
  const bearer = new RenewableBearer(source, { refreshRequestTimeoutMs: null });
  try {
    await bearer.receiver().fetch();
    expect(fetch.mock.calls[0][0]).toBe(5_000);
  } finally {
    await bearer.close();
  }
});

test.each([2_147_483_000, Number.MAX_SAFE_INTEGER])(
  'composed large actor budget %s allows acquisition and a valid transport deadline',
  async (budget) => {
    jest.useFakeTimers();
    const source = new BudgetBearer(budget);
    const receiver = source.receiver();
    jest.spyOn(receiver, 'fetch').mockImplementation(async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 20));
      return new Token('actor');
    });
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const exchange = mockExchange();
    const sdk = new SDK({ userAgentPrefix: 'test/large-budget' });
    const bearer = new CachedImpersonatedBearer('serviceaccount', source, sdk);
    try {
      const pending = bearer.receiver().fetch();
      await jest.advanceTimersByTimeAsync(20);
      expect((await pending).token).toBe('impersonated');
      const deadline = exchange.mock.calls[0][2]?.deadline;
      expect(deadline).toBeInstanceOf(Date);
      expect(Number.isFinite((deadline as Date).getTime())).toBe(true);
    } finally {
      await bearer.close();
      await sdk.close();
    }
  },
);

test('long timeout expires at its full budget and clears the current timer after success', async () => {
  jest.useFakeTimers();
  const budget = 2_147_483_647 + 100;
  let failure: unknown;
  const pending = withTimeout(new Promise<void>(() => {}), budget).catch((error: unknown) => {
    failure = error;
  });
  await jest.advanceTimersByTimeAsync(budget - 1);
  expect(failure).toBeUndefined();
  await jest.advanceTimersByTimeAsync(1);
  await pending;
  expect(failure).toBeInstanceOf(TimeoutError);
  const success = withTimeout(Promise.resolve('done'), budget);
  expect(await success).toBe('done');
  expect(jest.getTimerCount()).toBe(0);
});
