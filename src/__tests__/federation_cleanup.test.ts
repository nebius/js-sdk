import { type ChildProcess, spawn, spawnSync } from 'child_process';
import { EventEmitter } from 'events';
import http, { type ClientRequest, createServer, Server } from 'http';
import { type AddressInfo } from 'net';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { FederationAccountBearer } from '../runtime/token/federation_account.js';
import * as federationAuth from '../runtime/token/federation_bearer/auth.js';
import { getCode, getToken } from '../runtime/token/federation_bearer/auth.js';
import { FederationBearer } from '../runtime/token/federation_bearer/index.js';
import { CallbackHandler } from '../runtime/token/federation_bearer/server.js';
import { TimeoutError, withTimeout } from '../runtime/util/cancelable.js';

jest.mock('child_process', () => ({ spawn: jest.fn(), spawnSync: jest.fn() }));
jest.mock('../runtime/token/federation_bearer/is_wsl.js', () => ({ isWsl: () => false }));

test.each(['timeout', 'writer'] as const)(
  'federation %s failure closes the callback server',
  async (failure) => {
    const shutdown = jest.spyOn(CallbackHandler.prototype, 'shutdown');
    let redirectUri: string | undefined;
    try {
      await expect(
        getCode({
          clientId: 'test',
          authEndpoint: 'https://auth.example',
          federationId: 'test',
          noBrowserOpen: true,
          timeoutMs: 10,
          writer: (message) => {
            const url = new URL(
              message.replace('Open this URL to continue authentication: ', '').trim(),
            );
            redirectUri = url.searchParams.get('redirect_uri') ?? undefined;
            if (failure === 'writer') throw new Error('writer failed');
          },
        }),
      ).rejects.toThrow();
      expect(shutdown).toHaveBeenCalledTimes(1);
      expect(redirectUri).toBeDefined();
      await expect(
        fetch(redirectUri!, { signal: AbortSignal.timeout(1000) }),
      ).rejects.toMatchObject({
        cause: { code: 'ECONNREFUSED' },
      });
    } finally {
      shutdown.mockRestore();
    }
  },
);

(process.platform === 'linux' ? test : test.skip)(
  'federation without a browser opener accepts a manual callback',
  async () => {
    jest.mocked(spawn).mockClear();
    jest.mocked(spawnSync).mockReturnValue({ status: 1 } as ReturnType<typeof spawnSync>);
    let callback: Promise<Response> | undefined;
    const result = await getCode({
      clientId: 'test',
      authEndpoint: 'https://auth.example',
      federationId: 'test',
      timeoutMs: 1000,
      writer: (message) => {
        const auth = new URL(
          message.replace('Open this URL to continue authentication: ', '').trim(),
        );
        const url = new URL(auth.searchParams.get('redirect_uri')!);
        url.searchParams.set('code', 'manual-code');
        url.searchParams.set('state', auth.searchParams.get('state')!);
        callback = fetch(url);
      },
    });
    expect(result.code).toBe('manual-code');
    expect((await callback)?.status).toBe(200);
    expect(spawn).not.toHaveBeenCalled();
  },
);

test.each(['spawn', 'exit'] as const)(
  'federation browser %s failure rejects and closes the callback server',
  async (failure) => {
    jest.mocked(spawnSync).mockReturnValue({ status: 0 } as ReturnType<typeof spawnSync>);
    const child = Object.assign(new EventEmitter(), { unref: jest.fn() });
    const error = Object.assign(new Error('browser unavailable'), { code: 'ENOENT' });
    jest.mocked(spawn).mockImplementation(() => {
      setImmediate(() => {
        if (failure === 'spawn') child.emit('error', error);
        else child.emit('exit', 1, null);
      });
      return child as unknown as ChildProcess;
    });
    const shutdown = jest.spyOn(CallbackHandler.prototype, 'shutdown');
    let redirectUri: string | undefined;
    try {
      const login = getCode({
        clientId: 'test',
        authEndpoint: 'https://auth.example',
        federationId: 'test',
        timeoutMs: 1000,
        writer: (message) => {
          const auth = new URL(
            message.replace('Open this URL to continue authentication: ', '').trim(),
          );
          redirectUri = auth.searchParams.get('redirect_uri')!;
        },
      });
      const expectedError =
        failure === 'spawn' ? error : new Error('Browser launcher exited with 1.');
      await expect(login).rejects.toEqual(expectedError);
      expect(shutdown).toHaveBeenCalledTimes(1);
      await expect(fetch(redirectUri!)).rejects.toMatchObject({ cause: { code: 'ECONNREFUSED' } });
    } finally {
      shutdown.mockRestore();
    }
  },
);

test('successful browser launch keeps waiting for the authorization callback', async () => {
  jest.mocked(spawnSync).mockReturnValue({ status: 0 } as ReturnType<typeof spawnSync>);
  const child = Object.assign(new EventEmitter(), { unref: jest.fn() });
  jest.mocked(spawn).mockImplementation(() => {
    setImmediate(() => child.emit('exit', 0, null));
    return child as unknown as ChildProcess;
  });
  let callback: Promise<Response> | undefined;
  const result = await getCode({
    clientId: 'test',
    authEndpoint: 'https://auth.example',
    federationId: 'test',
    timeoutMs: 1000,
    writer: (message) => {
      const auth = new URL(
        message.replace('Open this URL to continue authentication: ', '').trim(),
      );
      const url = new URL(auth.searchParams.get('redirect_uri')!);
      url.searchParams.set('code', 'browser-code');
      url.searchParams.set('state', auth.searchParams.get('state')!);
      callback = new Promise<Response>((resolve, reject) => {
        setTimeout(() => void fetch(url).then(resolve, reject), 20);
      });
    },
  });
  expect(result.code).toBe('browser-code');
  expect((await callback)?.status).toBe(200);
});

test.each(['start', 'serve'] as const)(
  'callback server %s errors reject login and shut down',
  async (phase) => {
    const error = Object.assign(new Error('callback failed'), { code: 'EPERM' });
    const listen = jest.spyOn(Server.prototype, 'listen');
    if (phase === 'start') {
      listen.mockImplementation(function (this: Server) {
        setImmediate(() => this.emit('error', error));
        return this;
      });
    }
    const shutdown = jest.spyOn(CallbackHandler.prototype, 'shutdown');
    try {
      await expect(
        getCode({
          clientId: 'test',
          authEndpoint: 'https://auth.example',
          federationId: 'test',
          noBrowserOpen: true,
          timeoutMs: 1000,
          writer: () => {
            setImmediate(() => (listen.mock.instances[0] as Server).emit('error', error));
          },
        }),
      ).rejects.toBe(error);
      expect(shutdown).toHaveBeenCalledTimes(1);
    } finally {
      listen.mockRestore();
      shutdown.mockRestore();
    }
  },
);

test('interrupted federation token responses reject instead of emitting an unhandled error', async () => {
  const server = createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('{"access_token":');
    setImmediate(() => res.destroy());
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const port = (server.address() as AddressInfo).port;
    await expect(
      getToken({
        clientId: 'test',
        tokenEndpoint: `http://127.0.0.1:${port}`,
        code: 'code',
        redirectUri: 'http://127.0.0.1/callback',
        verifier: 'verifier',
      }),
    ).rejects.toMatchObject({ code: 'ECONNRESET' });
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});

test.each([0, -1])('federation preserves expired OAuth lifetime %s', async (seconds) => {
  const authorize = jest.spyOn(federationAuth, 'authorize').mockResolvedValue({
    access_token: 'token',
    token_type: 'Bearer',
    expires_in: seconds,
  });
  try {
    const bearer = new FederationBearer('profile', 'client', 'https://auth.example', 'federation');
    const token = await bearer.receiver().fetch();
    expect(token.expiration).toBeInstanceOf(Date);
    expect(token.isExpired()).toBe(true);
  } finally {
    authorize.mockRestore();
  }
});

test('federation OAuth lifetime starts when acquisition begins', async () => {
  let now = 1000;
  const clock = jest.spyOn(Date, 'now').mockImplementation(() => now);
  const authorize = jest.spyOn(federationAuth, 'authorize').mockImplementation(async () => {
    now = 2000;
    return { access_token: 'token', token_type: 'Bearer', expires_in: 1 };
  });
  try {
    const bearer = new FederationBearer('profile', 'client', 'https://auth.example', 'federation');
    expect((await bearer.receiver().fetch()).expiration?.getTime()).toBe(2000);
  } finally {
    authorize.mockRestore();
    clock.mockRestore();
  }
});

test('federation callback and token exchange share one deadline', async () => {
  jest.useFakeTimers();
  jest.setSystemTime(0);
  const listen = jest.spyOn(CallbackHandler.prototype, 'listenAndServe').mockResolvedValue();
  const addr = jest
    .spyOn(CallbackHandler.prototype, 'addr', 'get')
    .mockReturnValue('http://callback');
  const shutdown = jest.spyOn(CallbackHandler.prototype, 'shutdown').mockResolvedValue();
  const wait = jest.spyOn(CallbackHandler.prototype, 'waitForCode').mockImplementation(async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 80));
    return 'code';
  });
  const events = new EventEmitter();
  const destroy = jest.fn((error: Error) => {
    events.emit('error', error);
    return events;
  });
  const request = Object.assign(events, { write: jest.fn(), end: jest.fn(), destroy });
  const post = jest
    .spyOn(http, 'request')
    .mockImplementation(() => request as unknown as ClientRequest);
  try {
    const login = federationAuth.authorize({
      clientId: 'test',
      federationEndpoint: 'http://auth.example',
      federationId: 'test',
      noBrowserOpen: true,
      timeoutMs: 100,
      writer: () => {},
    });
    const assertion = expect(login).rejects.toBeInstanceOf(TimeoutError);
    await jest.advanceTimersByTimeAsync(100);
    expect(destroy).toHaveBeenCalledTimes(1);
    expect(Date.now()).toBe(100);
    await assertion;
  } finally {
    for (const mock of [listen, addr, shutdown, wait, post]) mock.mockRestore();
    jest.useRealTimers();
  }
});

test('timed-out federation POST closes its socket and permits subsequent renewal', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-federation-deadline-'));
  let posts = 0;
  let firstClosed!: () => void;
  const closed = new Promise<void>((resolve) => {
    firstClosed = resolve;
  });
  const server = createServer((_req, res) => {
    if (++posts === 1) return;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ access_token: 'renewed', token_type: 'Bearer', expires_in: 3600 }));
  });
  server.once('connection', (socket) => socket.once('close', firstClosed));
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = (server.address() as AddressInfo).port;
  const bearer = new FederationAccountBearer(
    'profile',
    'client',
    `http://127.0.0.1:${port}`,
    'test',
    {
      noBrowserOpen: true,
      timeoutMs: 200,
      initialSafetyMarginMs: 0,
      cacheFilePath: join(directory, 'tokens.yaml'),
      writer: (message) => {
        const auth = new URL(
          message.replace('Open this URL to continue authentication: ', '').trim(),
        );
        const callback = new URL(auth.searchParams.get('redirect_uri')!);
        callback.searchParams.set('code', 'code');
        callback.searchParams.set('state', auth.searchParams.get('state')!);
        void fetch(callback)
          .then((res) => res.body?.cancel())
          .catch(() => {});
      },
    },
  );
  try {
    const receiver = bearer.receiver();
    await expect(receiver.fetch(1000, { renewSynchronous: true })).rejects.toBeInstanceOf(
      TimeoutError,
    );
    expect(posts).toBe(1);
    await withTimeout(closed, 1000);
    const token = await receiver.fetch(1000, { renewRequired: true, renewSynchronous: true });
    expect(token.token).toBe('renewed');
    expect(posts).toBe(2);
  } finally {
    await bearer.close();
    server.closeAllConnections();
    await new Promise<void>((resolve) => server.close(() => resolve()));
    await rm(directory, { recursive: true, force: true });
  }
});
