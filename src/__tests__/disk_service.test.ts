import { Metadata, Server, ServerCredentials, credentials } from '@grpc/grpc-js';
import Long from 'long';

import { ResourceMetadata } from '../api/nebius/common/v1/index';
import {
  Disk,
  DiskServiceBaseClient as DiskServiceClient,
  DiskServiceServer,
  DiskServiceServiceDescription as DiskServiceService,
  ListDisksRequest,
  ListDisksResponse,
} from '../api/nebius/compute/v1/index';

// Start a gRPC server on an ephemeral port and return its address
function startServerWithPort(
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

describe('DiskService gRPC mock', () => {
  test('list returns mocked items', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: DiskServiceServer = {
        // Minimal implementation: only list is required for this test
        list: (call, callback) => {
          const req: ListDisksRequest = call.request;
          const items: Disk[] = [
            Disk.create({
              metadata: ResourceMetadata.create({
                id: 'disk-1',
                parentId: req.parentId,
                name: 'disk-one',
                resourceVersion: Long.ZERO,
                labels: {},
              }),
              spec: undefined,
              status: undefined,
            }),
            Disk.create({
              metadata: ResourceMetadata.create({
                id: 'disk-2',
                parentId: req.parentId,
                name: 'disk-two',
                resourceVersion: Long.ZERO,
                labels: {},
              }),
              spec: undefined,
              status: undefined,
            }),
          ];
          const res = ListDisksResponse.create({ items, nextPageToken: '' });
          callback(null, res);
        },
        // Stub other methods (not used in this test)
        get: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        delete: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_call, cb) =>
          cb(new Error('unimplemented') as any, undefined as any),
      };

      server.addService(DiskServiceService, impl);
    });

    const client = new DiskServiceClient(address, credentials.createInsecure());

    const response = await new Promise<ListDisksResponse>((resolve, reject) => {
      client.list(
        ListDisksRequest.create({
          parentId: 'folders/123',
          pageSize: Long.fromInt(10),
          pageToken: '',
          filter: '',
        }),
        new Metadata(),
        {},
        (err, res) => {
          if (err) return reject(err);
          resolve(res);
        },
      );
    });

    expect(response.items).toHaveLength(2);
    expect(response.items[0].metadata?.id).toBe('disk-1');
    expect(response.items[1].metadata?.name).toBe('disk-two');

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});
