import { Metadata, Server, ServerCredentials } from '@grpc/grpc-js';
import Long from 'long';

import { Operation, ResourceMetadata } from '../api/nebius/common/v1/index';
import {
  DiskService as DiskServiceClient,
  DiskServiceServiceDescription as DiskServiceService,
  InstanceService as InstanceServiceClient,
  InstanceServiceServiceDescription as InstanceServiceService,
  UpdateDiskRequest,
  UpdateInstanceRequest,
  type DiskServiceServer,
  type InstanceServiceServer,
} from '../api/nebius/compute/v1/index';
import { parseFieldMask } from '../runtime/fieldmask';
import { Basic } from '../runtime/resolver';
import { SDK } from '../sdk';

function startServerWithPort(
  addImpl: (server: Server) => void,
): Promise<{ server: Server; address: string; port: number }> {
  return new Promise((resolve, reject) => {
    const server = new Server();
    addImpl(server);
    server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (err, port) => {
      if (err) return reject(err);
      resolve({ server, address: `127.0.0.1:${port}`, port });
    });
  });
}

function mdGetString(md: Metadata, key: string): string {
  const vals = md.get(key);
  if (vals.length === 0) return '';
  const v = vals[0];
  return typeof v === 'string' ? v : v instanceof Buffer ? v.toString('utf8') : '';
}

// Port of test_update_instance_v2 (adapted for Node.js)
describe('updates and masks — DiskService.Update', () => {
  test('idempotency, resetmask and user-agent composition', async () => {
    const { server, address, port } = await startServerWithPort((server) => {
      const impl: DiskServiceServer = {
        get: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        list: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (call, callback) => {
          const req = call.request as UpdateDiskRequest;
          expect(req.metadata?.id).toBe('foo-bar');

          const md = call.metadata as Metadata;
          const idem = mdGetString(md, 'x-idempotency-key');
          expect(idem).not.toBe('');

          const maskStr = mdGetString(md, 'x-resetmask');
          const m = parseFieldMask(maskStr);
          const meta = m.getSubMask('metadata');
          expect(meta).not.toBeNull();
          expect(meta?.fieldParts.has('labels')).toBe(true);
          expect(meta?.fieldParts.has('name')).toBe(true);
          expect(meta?.fieldParts.has('parentId')).toBe(true);
          const rv = meta?.fieldParts.get('resourceVersion') || null;
          expect(rv).not.toBeNull();
          expect(rv?.fieldParts.has('high')).toBe(true);
          expect(rv?.fieldParts.has('low')).toBe(true);
          expect(rv?.fieldParts.has('unsigned')).toBe(true);

          const ua = mdGetString(md, 'user-agent');
          // JS reality: ensure primary UA parts are present
          expect(ua).toContain('nebius-ts-sdk/');
          expect(ua).toContain('a');
          expect(ua).toContain('b');
          expect(ua).toContain('c');
          expect(ua).toContain('test');

          const outMd = new Metadata();
          outMd.set('x-request-id', 'some-req-id');
          outMd.set('x-trace-id', 'some-trace-id');
          call.sendMetadata(outMd);

          callback(null, Operation.create({ id: 'op-1' }));
        },
        delete: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService, impl);
    });

    // Full SDK setup resembling Python Channel options and address-specific overrides
    const sdk = new SDK({
      insecure: true,
      resolver: new Basic('nebius.compute.v1.*', address),
      clientOptions: {
        'grpc.primary_user_agent': 'a',
        'grpc.secondary_user_agent': 'x',
      },
      perAddress: {
        [address]: {
          clientOptions: {
            'grpc.primary_user_agent': 'c',
            'grpc.secondary_user_agent': 'z',
          },
        },
      },
      userAgentPrefix: 'test',
    });

    const client = new DiskServiceClient(sdk);
    const upd: UpdateDiskRequest = UpdateDiskRequest.create({
      metadata: ResourceMetadata.create({
        id: 'foo-bar',
        parentId: '',
        name: '',
        resourceVersion: Long.ZERO,
        labels: {},
      }),
    });
    const req = client.update(upd, new Metadata(), { deadline: Date.now() + 5000 });
    const ret = await req.result;
    // Returns Operation wrapper
    expect(String(ret)).toContain('Operation(');

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});

// Port of test_update_list (adapted for Node.js)
describe('updates and masks — InstanceService.Update with list field', () => {
  test('idempotency and resetmask for empty list', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: InstanceServiceServer = {
        get: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        list: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (call, callback) => {
          const req = call.request as UpdateInstanceRequest;
          expect(req.metadata?.id).toBe('foo-bar');
          const md = call.metadata as Metadata;
          expect(mdGetString(md, 'x-idempotency-key')).not.toBe('');

          const maskStr = mdGetString(md, 'x-resetmask');
          const m = parseFieldMask(maskStr);
          const meta = m.getSubMask('metadata');
          expect(meta).not.toBeNull();
          expect(meta?.fieldParts.has('labels')).toBe(true);
          expect(meta?.fieldParts.has('name')).toBe(true);
          expect(meta?.fieldParts.has('parentId')).toBe(true);
          const rv = meta?.fieldParts.get('resourceVersion') || null;
          expect(rv).not.toBeNull();
          expect(rv?.fieldParts.has('high')).toBe(true);
          expect(rv?.fieldParts.has('low')).toBe(true);
          expect(rv?.fieldParts.has('unsigned')).toBe(true);

          const spec = m.getSubMask('spec');
          expect(spec).not.toBeNull();
          expect(spec?.fieldParts.has('filesystems')).toBe(true);

          const outMd = new Metadata();
          outMd.set('x-request-id', 'some-req-id');
          outMd.set('x-trace-id', 'some-trace-id');
          call.sendMetadata(outMd);
          callback(null, Operation.create({ id: 'op-2' }));
        },
        delete: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        start: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        stop: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_c, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(InstanceServiceService, impl);
    });

    const sdk = new SDK({
      insecure: true,
      resolver: new Basic('nebius.compute.v1.*', address),
    });

    const client = new InstanceServiceClient(sdk);
    const upd: UpdateInstanceRequest = {
      metadata: { id: 'foo-bar', parentId: '', name: '', resourceVersion: Long.ZERO, labels: {} },
      spec: {
        filesystems: [],
        networkInterfaces: [],
        secondaryDisks: [],
        cloudInitUserData: '',
        stopped: false,
        recoveryPolicy: 0,
        hostname: '',
        serviceAccountId: '',
      } as any,
    } as any;

    const req = client.update(upd, new Metadata(), { deadline: Date.now() + 5000 });
    const ret = await req.result;
    expect(String(ret)).toContain('Operation(');

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});
