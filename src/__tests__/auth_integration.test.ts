import { generateKeyPairSync } from 'crypto';
import { mkdtempSync, rmSync, writeFileSync } from 'fs';
import http from 'http';
import os from 'os';
import { join } from 'path';

import { Metadata, Server, ServerCredentials } from '@grpc/grpc-js';
import Long from 'long';

import {
  DiskService,
  DiskServiceServer,
  DiskServiceServiceDescription as DiskServiceService,
  ListDisksRequest,
  ListDisksResponse,
} from '../generated/nebius/compute/v1/index';
import {
  CreateTokenResponse,
  ExchangeTokenRequest,
  TokenExchangeServiceServiceDescription as TokenExchangeService,
  TokenExchangeServiceServer,
} from '../generated/nebius/iam/v1/index';
import { Config } from '../runtime/cli_config';
import { Basic, Chain } from '../runtime/resolver';
import { SDK } from '../sdk';

// Start a gRPC server on an ephemeral port and return its address
function startServer(
  addImpl: (server: Server) => void,
): Promise<{ server: Server; address: string }> {
  return new Promise((resolve, reject) => {
    const server = new Server();
    addImpl(server);
    server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (err, port) => {
      if (err) return reject(err);
      resolve({ server, address: `127.0.0.1:${port}` });
    });
    (server as any).http2Servers.forEach((s: http.Server) => {
      s.unref();
    });
  });
}

describe('authorization integration (mock gRPC)', () => {
  let tmpDir: string;
  const timers = new Set<{
    timer: WeakRef<NodeJS.Timeout>;
    stack: string | undefined;
  }>();
  const servers = new Set<{ server: Server; stack: string | undefined }>();

  beforeEach(() => {
    tmpDir = mkdtempSync(join(os.tmpdir(), 'tssdk-auth-int-'));
    process.env.HOME = tmpDir;
    if (!(global.setTimeout as any)?._was_set) {
      const oldSetTimeout = global.setTimeout;
      const oldClearTimeout = global.clearTimeout;
      const customSetTimeout = (cb: any, ms: any, ...targs: any[]) => {
        const stack = new Error().stack?.split('\n').slice(2).join('\n');
        let timerStruct: { timer: WeakRef<NodeJS.Timeout>; stack: string | undefined } | null =
          null;
        const timer = oldSetTimeout(
          (...args: any[]) => {
            if (timerStruct) {
              timers.delete(timerStruct);
            }
            return cb(...args);
          },
          ms,
          ...targs,
        );
        timerStruct = { timer: new WeakRef(timer), stack };
        timers.add(timerStruct);
        const oldUnref = timer.unref.bind(timer);

        timer.unref = () => {
          if (timerStruct) {
            timers.delete(timerStruct);
          }
          return oldUnref();
        };

        return timer;
      };
      customSetTimeout._was_set = true;
      customSetTimeout.__promisify__ = (ms: number, value: any, opts: any) =>
        oldSetTimeout.__promisify__(ms, value, opts);
      global.clearTimeout = (timer: any) => {
        timer.unref();
        return oldClearTimeout(timer);
      };

      global.setTimeout = customSetTimeout as unknown as typeof setTimeout;
    }
  });

  afterEach(() => {
    delete process.env.HOME;
    try {
      rmSync(tmpDir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    for (const t of timers) {
      const timer = t.timer.deref();
      if (!timer) {
        timers.delete(t);
        continue;
      }
      console.error('\nTimer still active:', t.stack);
    }
    for (const handle of (process as any)?._getActiveHandles() || []) {
      if (handle === process.stdout || handle === process.stderr) continue;
      // console.error('Active handle:', inspect(handle));
    }
    // console.error((process as any)?._getActiveRequests());
  });

  async function withMockEnv<T>(
    opts: {
      tokenValue?: string; // default single token value (deprecated by tokenValues)
      tokenValues?: string[]; // sequence of token values to return by IAM
      expiresInSec?: number; // expiry seconds for IAM tokens (default 3600)
      config: string; // YAML contents
      profile: string;
      tokenType?: string;
      iamDown?: boolean;
      iamFailures?: number; // fail first N IAM exchanges
    },
    fn: (
      addresses: { compute: string; iam: string },
      capture: { lastAuth?: string; auths: string[] },
    ) => Promise<T>,
  ): Promise<T> {
    // Start IAM TokenExchangeService mock (optional)
    let iamFailureBudget = Math.max(0, opts.iamFailures ?? 0);
    let tokenIdx = 0;
    const seq =
      Array.isArray(opts.tokenValues) && opts.tokenValues.length > 0
        ? opts.tokenValues
        : opts.tokenValue
          ? [opts.tokenValue]
          : ['test-access'];
    const expSec =
      Number.isFinite(opts.expiresInSec as any) && (opts.expiresInSec as any)! > 0
        ? Number(opts.expiresInSec)
        : 3600;
    let iam: { server: Server; address: string } | null;
    if (opts.iamDown) {
      iam = null;
    } else {
      iam = await startServer((server) => {
        const impl: TokenExchangeServiceServer = {
          exchange: (call, callback) => {
            const _req: ExchangeTokenRequest = call.request;
            if (iamFailureBudget > 0) {
              iamFailureBudget -= 1;
              // Return an UNAVAILABLE-like error
              const err: any = new Error('temporary IAM failure');
              err.code = 14; // grpc UNAVAILABLE
              callback(err);
              return;
            }
            const curr = seq[Math.min(tokenIdx, seq.length - 1)];
            tokenIdx += 1;
            const res = CreateTokenResponse.create({
              accessToken: curr,
              issuedTokenType: 'urn:ietf:params:oauth:token-type:access_token',
              tokenType: opts.tokenType ?? 'Bearer',
              expiresIn: Long.fromInt(expSec),
              scopes: [],
            });
            callback(null, res);
          },
        };
        server.addService(TokenExchangeService, impl);
      });
    }

    const capture: { lastAuth?: string; auths: string[] } = { lastAuth: undefined, auths: [] };

    // Start Compute DiskService mock that captures Authorization header
    const compute = await startServer((server) => {
      const impl: DiskServiceServer = {
        list: (call, callback) => {
          const md: Metadata = call.metadata;
          const vals = md.get('authorization');
          for (const v of vals) {
            if (typeof v === 'string') capture.lastAuth = v;
            else if (v instanceof Buffer) capture.lastAuth = v.toString('utf8');
          }
          if (capture.lastAuth) capture.auths.push(capture.lastAuth);
          const req: ListDisksRequest = call.request;
          const res = ListDisksResponse.create({ items: [], nextPageToken: '' });
          // Echo back some metadata if needed
          callback(null, res);
        },
        // Unused methods
        get: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        delete: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService, impl);
    });

    // Write config file
    const cfgPath = join(tmpDir, 'config.yaml');
    writeFileSync(cfgPath, opts.config, { encoding: 'utf8' });

    try {
      const ret = await fn(
        { compute: compute.address, iam: iam ? iam.address : '127.0.0.1:1' },
        capture,
      );
      return ret;
    } finally {
      compute.server.unbind(compute.address);
      compute.server.forceShutdown();
      const promises: Promise<void>[] = [];
      promises.push(new Promise<void>((resolve) => compute.server.tryShutdown(() => resolve())));
      if (iam) {
        iam.server.unbind(iam.address);
        iam.server.forceShutdown();
        promises.push(new Promise<void>((resolve) => iam.server.tryShutdown(() => resolve())));
      }
      await Promise.all(promises);
    }
  }

  test('service account (inline private key) -> Authorization on compute call', async () => {
    // Generate a real RSA private key for signing
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();

    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'test-access-inline', config: configYAML, profile: 'p1' },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        // Call DiskService.list
        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {}).result;
        await sdk.close();

        expect(capture.lastAuth).toBe('Bearer test-access-inline');
      },
    );
  }, 10000);

  test('service account (credentials file) -> Authorization on compute call', async () => {
    // Generate a real RSA private key
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();

    const credPath = join(tmpDir, 'sa_credentials.json');
    const credJson = {
      'subject-credentials': {
        type: 'JWT',
        alg: 'RS256',
        'private-key': pem,
        kid: 'kid-999',
        iss: 'sa-creds-1',
        sub: 'sa-creds-1',
      },
    } as const;
    writeFileSync(credPath, JSON.stringify(credJson), { encoding: 'utf8' });

    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-credentials-file-path: ${credPath}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'test-access-creds-file', config: configYAML, profile: 'p1' },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {}).result;
        await sdk.close();

        expect(capture.lastAuth).toBe('Bearer test-access-creds-file');
      },
    );
  }, 10000);

  test('federated subject credentials file -> Authorization on compute call', async () => {
    const fcPath = join(tmpDir, 'federated_subject.jwt');
    writeFileSync(fcPath, 'dummy-federated-credentials', { encoding: 'utf8' });

    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-111
    federated-subject-credentials-file-path: ${fcPath}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'test-access-federated', config: configYAML, profile: 'p1' },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {}).result;
        await sdk.close();

        expect(capture.lastAuth).toBe('Bearer test-access-federated');
      },
    );
  }, 10000);

  test('service account (private-key-file-path) -> Authorization on compute call', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const pkPath = join(tmpDir, 'pk.pem');
    writeFileSync(pkPath, pem, { encoding: 'utf8' });

    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-777
    private-key-file-path: ${pkPath}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'test-access-pkfile', config: configYAML, profile: 'p1' },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {}).result;
        await sdk.close();

        expect(capture.lastAuth).toBe('Bearer test-access-pkfile');
      },
    );
  }, 10000);

  test('negative: token exchange returns non-Bearer -> compute call fails', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'ignored', config: configYAML, profile: 'p1', tokenType: 'macaroon' },
      async (addr) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        const opts: any = {
          PerRetryTimeout: 300,
          RetryCount: 0,
          authorizationOptions: {
            maxRetries: 1,
            renewSynchronous: true,
            reportError: true,
            renewRequestTimeoutMs: 200,
          },
        };
        await expect(client.list(req, new Metadata(), opts).result).rejects.toThrow(
          /Unsupported token received/,
        );
        await sdk.close(100);
      },
    );
  }, 10000);

  test('negative: IAM unavailable -> compute call fails quickly', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'ignored', config: configYAML, profile: 'p1', iamDown: true },
      async (addr) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        const opts: any = {
          PerRetryTimeout: 300,
          RetryCount: 0,
          authorizationOptions: {
            maxRetries: 1,
            renewSynchronous: true,
            reportError: true,
            renewRequestTimeoutMs: 200,
          },
        };
        await expect(client.list(req, new Metadata(), opts).result).rejects.toBeTruthy();
        await sdk.close(100);
      },
    );
  }, 10000);

  test('federation flow -> Authorization on compute call (HTTP mock)', async () => {
    const http = await import('http');
    const capture: { lastAuth?: string } = {};
    // Start compute mock
    const compute = await startServer((server) => {
      const impl: DiskServiceServer = {
        list: (call, callback) => {
          const md: Metadata = call.metadata;
          const vals = md.get('authorization');
          for (const v of vals) {
            if (typeof v === 'string') capture.lastAuth = v;
            else if (v instanceof Buffer) capture.lastAuth = v.toString('utf8');
          }
          const res = ListDisksResponse.create({ items: [], nextPageToken: '' });
          callback(null, res);
        },
        get: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        delete: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService, impl);
    });

    // Start simple token endpoint server
    const httpServer = http.createServer((req, res) => {
      if (req.method === 'POST' && req.url && req.url.startsWith('/oauth2/token')) {
        const chunks: Buffer[] = [];
        req.on('data', (c: Buffer) => chunks.push(c));
        req.on('end', () => {
          res.statusCode = 200;
          res.setHeader('content-type', 'application/json');
          res.end(
            JSON.stringify({
              access_token: 'test-access-federation-http',
              token_type: 'Bearer',
              expires_in: 3600,
            }),
          );
        });
        return;
      }
      res.statusCode = 404;
      res.end('not found');
    });
    await new Promise<void>((resolve) => httpServer.listen(0, '127.0.0.1', () => resolve()));
    const addrInfo = httpServer.address() as any;
    const httpPort = typeof addrInfo === 'object' && addrInfo ? addrInfo.port : 0;

    // Capture printed auth URL
    let printedUrl = '';
    const writer = (s: string) => {
      const m = s.match(/https?:\/\/[^\s]+/);
      if (m) printedUrl = m[0];
    };

    try {
      const cfgPath = join(tmpDir, 'config-fed.yaml');
      const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: federation
    federation-endpoint: http://127.0.0.1:${'${httpPort}'}
    federation-id: fed-1
default: p1
`;
      writeFileSync(cfgPath, configYAML.replace('${httpPort}', String(httpPort)), {
        encoding: 'utf8',
      });

      const cfg = new Config({
        configFile: cfgPath,
        profile: 'p1',
        noEnv: true,
        noParentId: true,
        clientId: 'client-federation',
      });

      const sdk = new SDK({
        configReader: cfg,
        insecure: true,
        resolver: new Basic('nebius.compute.v1.*', compute.address),
        federationInvitationWriter: writer,
        federationInvitationNoBrowserOpen: true,
        federationInvitationTimeoutMs: 5000,
      });
      const client = new DiskService(sdk);
      const req = ListDisksRequest.create({
        parentId: 'folders/1',
        pageSize: Long.fromInt(1),
        pageToken: '',
        filter: '',
      });
      // Kick off the call to trigger federation flow (which will print URL and wait)
      const listP = client.list(req, new Metadata(), {}).result;

      // Wait for writer to capture URL (poll briefly)
      const start = Date.now();
      while (!printedUrl && Date.now() - start < 2000) {
        // small sleep
        await new Promise((r) => setTimeout(r, 20));
      }
      if (!printedUrl) throw new Error('failed to capture federation URL');

      // Simulate redirect to local callback handler with code and state
      const urlObj = new URL(printedUrl);
      const redirect = urlObj.searchParams.get('redirect_uri');
      const state = urlObj.searchParams.get('state') || '';
      if (!redirect) throw new Error('redirect_uri not captured');

      await new Promise<void>((resolve, reject) => {
        const u = new URL(redirect);
        const req2 = http.request(
          {
            hostname: u.hostname,
            port: u.port,
            path: `${u.pathname}?code=dummy-code&state=${encodeURIComponent(state)}`,
            method: 'GET',
          },
          (res: any) => {
            if (res.statusCode !== 200) {
              reject(new Error(`Failed to exchange code: ${res.statusCode}`));
              return;
            }
            res.on('data', () => {});
            res.on('end', () => resolve());
          },
        );
        req2.on('error', reject);
        req2.end();
      });

      await listP;
      await sdk.close(100);

      expect(capture.lastAuth).toBe('Bearer test-access-federation-http');
    } finally {
      await new Promise<void>((resolve) => compute.server.tryShutdown(() => resolve()));
      await new Promise<void>((resolve) => httpServer.close(() => resolve()));
    }
  }, 10000);

  test('negative: invalid inline private key -> auth fails quickly', async () => {
    const badPem = '-----BEGIN PRIVATE KEY-----\nINVALID\n-----END PRIVATE KEY-----\n';
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
      ${badPem.replace(/\n/g, '\n      ')}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'ignored', config: configYAML, profile: 'p1' },
      async (addr) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await expect(
          client.list(req, new Metadata(), {
            // Fast-fail path: small deadlines and few retries
            deadline: Date.now() + 3000,
            PerRetryTimeout: 500,
            RetryCount: 1,
            authorizationOptions: {
              renewSynchronous: true,
              reportError: true,
              maxRetries: 1,
              renewRequestTimeoutMs: 500,
            },
          } as any).result,
        ).rejects.toThrow();
        await sdk.close(100);
      },
    );
  }, 10000);

  test('IAM retry then success: exchange fails once then succeeds', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      { tokenValue: 'test-access-retry', config: configYAML, profile: 'p1', iamFailures: 1 },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });

        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {
          // Modest deadline to allow one retry
          deadline: Date.now() + 5000,
          PerRetryTimeout: 1200,
          RetryCount: 2,
          authorizationOptions: {
            renewSynchronous: true,
            reportError: true,
            maxRetries: 2,
            renewRequestTimeoutMs: 1500,
          },
        } as any).result;
        await sdk.close();

        expect(capture.lastAuth).toBe('Bearer test-access-retry');
      },
    );
  }, 10000);

  test('env token flow -> Authorization on compute call (no IAM)', async () => {
    const envToken = 'env-abc-123';
    const oldEnv = process.env.NEBIUS_IAM_TOKEN;
    process.env.NEBIUS_IAM_TOKEN = envToken;
    try {
      const cfgPath = join(tmpDir, 'config-env.yaml');
      const configYAML = `
profiles:
  p1:
    endpoint: local
default: p1
`;
      writeFileSync(cfgPath, configYAML, { encoding: 'utf8' });

      await withMockEnv(
        { config: configYAML, profile: 'p1', iamDown: true },
        async (addr, capture) => {
          const cfg = new Config({
            configFile: cfgPath,
            profile: 'p1',
            noEnv: false,
            noParentId: true,
          });
          const sdk = new SDK({
            configReader: cfg,
            insecure: true,
            resolver: new Basic('nebius.compute.v1.*', addr.compute),
          });
          const client = new DiskService(sdk);
          const req = ListDisksRequest.create({
            parentId: 'folders/1',
            pageSize: Long.fromInt(1),
            pageToken: '',
            filter: '',
          });
          await client.list(req, new Metadata(), {}).result;
          await sdk.close(100);

          expect(capture.lastAuth).toBe(`Bearer ${envToken}`);
        },
      );
    } finally {
      if (oldEnv === undefined) delete (process.env as any).NEBIUS_IAM_TOKEN;
      else process.env.NEBIUS_IAM_TOKEN = oldEnv;
    }
  }, 8000);

  test('token file flow -> Authorization on compute call (no IAM)', async () => {
    const tokenFilePath = join(tmpDir, 'token.txt');
    const fileToken = 'file-xyz-456';
    writeFileSync(tokenFilePath, fileToken, { encoding: 'utf8' });

    const cfgPath = join(tmpDir, 'config-file.yaml');
    const configYAML = `
profiles:
  p1:
    endpoint: local
    token-file: ${tokenFilePath}
default: p1
`;
    writeFileSync(cfgPath, configYAML, { encoding: 'utf8' });

    await withMockEnv(
      { config: configYAML, profile: 'p1', iamDown: true },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: cfgPath,
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Basic('nebius.compute.v1.*', addr.compute),
        });
        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        await client.list(req, new Metadata(), {}).result;
        await sdk.close(100);

        expect(capture.lastAuth).toBe(`Bearer ${fileToken}`);
      },
    );
  }, 8000);

  test('token refresh: synchronous renewal on expiry', async () => {
    // First IAM token very short-lived, second longer; expect two calls => 2 Authorization values
    // We set expiresInSec small so that first compute call triggers renewal before/around call time.
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      {
        tokenValues: ['short-1', 'long-2'],
        expiresInSec: 1, // 1 second
        config: configYAML,
        profile: 'p1',
      },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });
        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        // First call: forces initial exchange
        await client.list(req, new Metadata(), {
          authorizationOptions: {
            renewSynchronous: true,
            reportError: true,
            maxRetries: 2,
            renewRequestTimeoutMs: 1000,
          },
        } as any).result;
        // Wait ~1.2s for token to expire, next call should synchronously renew
        await new Promise((r) => setTimeout(r, 1200));
        await client.list(req, new Metadata(), {
          authorizationOptions: {
            renewSynchronous: true,
            reportError: true,
            maxRetries: 2,
            renewRequestTimeoutMs: 1500,
          },
        } as any).result;
        await sdk.close(200);

        // We should see two calls captured with the last using long-2
        expect(capture.auths.length).toBeGreaterThanOrEqual(2);
        expect(capture.auths[capture.auths.length - 1]).toBe('Bearer long-2');
      },
    );
  }, 15000);

  test('token refresh: asynchronous renewal background before second call', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
    const configYAML = `
profiles:
  p1:
    endpoint: local
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
${pem
  .split('\n')
  .map((l) => '      ' + l)
  .join('\n')}
default: p1
`;

    await withMockEnv(
      {
        tokenValues: ['tok-1', 'tok-2'],
        expiresInSec: 2,
        config: configYAML,
        profile: 'p1',
      },
      async (addr, capture) => {
        const cfg = new Config({
          configFile: join(tmpDir, 'config.yaml'),
          profile: 'p1',
          noEnv: true,
          noParentId: true,
        });
        const sdk = new SDK({
          configReader: cfg,
          insecure: true,
          resolver: new Chain(
            new Basic('nebius.iam.v1.TokenExchangeService', addr.iam),
            new Basic('nebius.compute.v1.*', addr.compute),
          ),
        });
        const client = new DiskService(sdk);
        const req = ListDisksRequest.create({
          parentId: 'folders/1',
          pageSize: Long.fromInt(1),
          pageToken: '',
          filter: '',
        });
        // First call obtains tok-1
        await client.list(req, new Metadata(), {
          authorizationOptions: {
            renewSynchronous: false,
            reportError: false,
            maxRetries: 2,
            renewRequestTimeoutMs: 1000,
          },
        } as any).result;
        // Wait a bit so background renewal kicks in
        await new Promise((r) => setTimeout(r, 2500));
        // Next call should use tok-2 without waiting long
        const t0 = Date.now();
        await client.list(req, new Metadata(), {
          authorizationOptions: {
            renewSynchronous: false,
            reportError: false,
            maxRetries: 2,
            renewRequestTimeoutMs: 1000,
          },
        } as any).result;
        const elapsed = Date.now() - t0;
        await sdk.close(200);

        expect(capture.auths.length).toBeGreaterThanOrEqual(2);
        expect(capture.auths[capture.auths.length - 1]).toBe('Bearer tok-2');
        // Should be relatively quick (< 500ms) as token is already fresh
        expect(elapsed).toBeLessThan(500);
      },
    );
  }, 15000);

  test('federation HTTP token endpoint error (unit-level) -> clear error', async () => {
    // Minimal unit-like check: directly call getToken against a local server returning 500
    const httpServer = http.createServer((req, res) => {
      if (req.method === 'POST' && req.url && req.url.startsWith('/oauth2/token')) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ error: 'boom' }));
        return;
      }
      res.statusCode = 404;
      res.end('not found');
    });
    await new Promise<void>((resolve) => httpServer.listen(0, '127.0.0.1', () => resolve()));
    const addrInfo = httpServer.address() as any;
    const httpPort = typeof addrInfo === 'object' && addrInfo ? addrInfo.port : 0;

    const { getToken } = await import('../runtime/token/federation_bearer/auth');
    await expect(
      getToken({
        clientId: 'c',
        tokenEndpoint: `http://127.0.0.1:${httpPort}`,
        code: 'dummy',
        redirectUri: 'http://127.0.0.1:1',
        verifier: 'v',
      }),
    ).rejects.toThrow(/token endpoint error/);

    await new Promise<void>((resolve) => httpServer.close(() => resolve()));
  }, 8000);
});
