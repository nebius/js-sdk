import { mkdtempSync, writeFileSync } from 'fs';
import os from 'os';
import { join } from 'path';

import { Metadata, Server, ServerCredentials } from '@grpc/grpc-js';
import Long from 'long';

// Helper to start mock server
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
  });
}

describe('build integration (CJS bundle)', () => {
  test('requires SDK + Config from dist/cjs and lists disks via mock service', async () => {
    let cjsPath: string;
    try {
      // Resolve to ensure presence
      cjsPath = require.resolve('../../dist/cjs/index.js');
    } catch {
      console.warn('dist/cjs not found; skipping CJS build integration test');
      return;
    }
    const cjs = require(cjsPath);
    const ConfigMod = require('../../dist/cjs/runtime/cli_config.js');
    const ResolverMod = require('../../dist/cjs/runtime/resolver.js');
    const ApiMod = require('../../dist/cjs/api/nebius/compute/v1/index.js');

    const SDK = cjs.SDK;
    const Config = ConfigMod.Config;
    const Basic = ResolverMod.Basic;
    const DiskService = ApiMod.DiskService;
    const ListDisksRequest: any = ApiMod.ListDisksRequest;
    const ListDisksResponse: any = ApiMod.ListDisksResponse;
    const DiskServiceService = ApiMod.DiskServiceServiceDescription;

    const { server, address } = await startServer((server) => {
      const impl: any = {
        list: (_call: any, callback: any) => {
          const res: any = ListDisksResponse.create({ items: [], nextPageToken: '' });
          callback(null, res);
        },
        get: (_c: any, cb: any) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c: any, cb: any) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c: any, cb: any) => cb(new Error('unimplemented') as any, undefined as any),
        update: (_c: any, cb: any) => cb(new Error('unimplemented') as any, undefined as any),
        delete: (_c: any, cb: any) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_c: any, cb: any) =>
          cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService as any, impl);
    });

    const tmpDir = mkdtempSync(join(os.tmpdir(), 'tssdk-build-cjs-'));
    const tokenFile = join(tmpDir, 'token.txt');
    writeFileSync(tokenFile, 'cjs-token', { encoding: 'utf8' });
    const cfgPath = join(tmpDir, 'config.yaml');
    const configYAML = `
profiles:
  p1:
    endpoint: local
    token-file: ${tokenFile}
default: p1
`;
    writeFileSync(cfgPath, configYAML, { encoding: 'utf8' });

    const cfg = new Config({
      configFile: cfgPath,
      profile: 'p1',
      noEnv: true,
      noParentId: true,
    });

    const sdk = new SDK({
      configReader: cfg,
      insecure: true,
      resolver: new Basic('nebius.compute.v1.*', address),
    });

    const client = new DiskService(sdk);
    const req = ListDisksRequest.create({
      parentId: 'folders/1',
      pageSize: Long.fromInt(1),
      pageToken: '',
      filter: '',
    });

    await client.list(req, new Metadata(), {
      deadline: Date.now() + 5000,
    }).result;
    await sdk.close(100);
    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));

    expect(true).toBe(true);
  }, 8000);
});
