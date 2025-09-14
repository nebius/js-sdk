import { spawn } from 'child_process';
import { existsSync, mkdtempSync, writeFileSync } from 'fs';
import os from 'os';
import { join, resolve } from 'path';
import { pathToFileURL } from 'url';

import { Server, ServerCredentials } from '@grpc/grpc-js';

// We deliberately import from the built ESM and API/runtime subpaths to verify the build output.

// Helper: start a gRPC server on an ephemeral port and return its address
function startServer(
  addImpl: (server: Server) => void,
): Promise<{ server: Server; address: string }> {
  return new Promise((resolve, reject) => {
    const server = new Server();
    addImpl(server);
    server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (err, port) => {
      if (err) return reject(err);
      server.start();
      resolve({ server, address: `127.0.0.1:${port}` });
    });
  });
}

describe('build integration (ESM bundle)', () => {
  test('loads SDK + Config from dist/esm and lists disks via mock service', async () => {
    const distEsm = resolve(__dirname, '../../dist/esm');
    // If build artifacts are missing, no-op (developer likely ran tests without build)
    if (!existsSync(join(distEsm, 'index.js'))) {
      console.warn('dist/esm not found; skipping ESM build integration test');
      return;
    }
    // Start a mock DiskService server in the parent process; child only uses SDK via ESM.
    const { DiskServiceServiceDescription, ListDisksResponse } = require(
      resolve(__dirname, '../../dist/cjs/api/nebius/compute/v1/index.js'),
    );
    const { server, address } = await startServer((srv) => {
      const impl = {
        list: (_call: unknown, callback: Function) => {
          const res = ListDisksResponse.create({ items: [], nextPageToken: '' });
          callback(null, res);
        },
        get: (_c: unknown, cb: Function) => cb(new Error('unimplemented'), undefined),
        getByName: (_c: unknown, cb: Function) => cb(new Error('unimplemented'), undefined),
        create: (_c: unknown, cb: Function) => cb(new Error('unimplemented'), undefined),
        update: (_c: unknown, cb: Function) => cb(new Error('unimplemented'), undefined),
        delete: (_c: unknown, cb: Function) => cb(new Error('unimplemented'), undefined),
        listOperationsByParent: (_c: unknown, cb: Function) =>
          cb(new Error('unimplemented'), undefined),
      };
      srv.addService(DiskServiceServiceDescription, impl);
    });

    // Prepare a temporary config with token-file to avoid IAM
    const tmpDir = mkdtempSync(join(os.tmpdir(), 'tssdk-build-esm-'));
    const tokenFile = join(tmpDir, 'token.txt');
    writeFileSync(tokenFile, 'esm-token', { encoding: 'utf8' });
    const cfgPath = join(tmpDir, 'config.yaml');
    const configYAML = `
profiles:
  p1:
    endpoint: local
    token-file: ${tokenFile}
default: p1
`;
    writeFileSync(cfgPath, configYAML, { encoding: 'utf8' });

    // Build an ESM runner script executed by Node directly
    const esmIndexUrl = pathToFileURL(join(distEsm, 'index.js')).href;
    const esmCfgUrl = pathToFileURL(join(distEsm, 'runtime/cli_config.js')).href;
    const esmApiUrl = pathToFileURL(join(distEsm, 'api/nebius/compute/v1/index.js')).href;
    const script = `
      const { SDK } = await import(${JSON.stringify(esmIndexUrl)});
      const { Config } = await import(${JSON.stringify(esmCfgUrl)});
      const { DiskService, ListDisksRequest } = await import(${JSON.stringify(esmApiUrl)});
      const cfg = new Config({ configFile: ${JSON.stringify(cfgPath)}, profile: 'p1', noEnv: true, noParentId: true });
      // Minimal resolver that always returns the provided address
      const resolver = { resolve: () => ${JSON.stringify(address)} };
      const sdk = new SDK({ configReader: cfg, insecure: true, resolver });
      const client = new DiskService(sdk);
      const req = ListDisksRequest.create({ parentId: 'folders/1', pageSize: 1, pageToken: '', filter: '' });
      await client.list(req, undefined, { deadline: Date.now() + 4000 }).result;
      await sdk.close(50);
    `;
    const runnerPath = join(tmpDir, 'runner.mjs');
    writeFileSync(runnerPath, script, { encoding: 'utf8' });

    const exitCode: number = await new Promise((resolveCode) => {
      const child = spawn(process.execPath, [runnerPath], {
        cwd: resolve(__dirname, '../..'),
        stdio: 'inherit',
      });
      child.on('exit', (code) => resolveCode(code ?? 1));
      child.on('error', () => resolveCode(1));
    });
    expect(exitCode).toBe(0);
    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
    expect(true).toBe(true);
  }, 15000);
});
