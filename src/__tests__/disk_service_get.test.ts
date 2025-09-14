import { Metadata, Server, ServerCredentials, credentials } from '@grpc/grpc-js';
import Long from 'long';

import { ResourceMetadata } from '../api/nebius/common/v1/index';
import {
  Disk,
  DiskServiceBaseClient as DiskServiceClient,
  DiskServiceServer,
  DiskServiceServiceDescription as DiskServiceService,
  GetDiskRequest,
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
      // server.start(); // deprecated in @grpc/grpc-js, binding starts the server
      resolve({ server, address: `127.0.0.1:${port}` });
    });
  });
}

describe('DiskService gRPC mock - get', () => {
  test('get returns mocked disk', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: DiskServiceServer = {
        get: (call, callback) => {
          const req: GetDiskRequest = call.request;
          const disk: Disk = Disk.create({
            metadata: ResourceMetadata.create({
              id: req.id,
              name: 'MockDisk',
              parentId: '',
              resourceVersion: Long.ZERO,
              labels: {},
            }),
            spec: undefined,
            status: undefined,
          });
          callback(null, disk);
        },
        // Stub other methods (not used in this test)
        list: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
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

    const response = await new Promise<Disk>((resolve, reject) => {
      client.get(GetDiskRequest.create({ id: 'foo-bar' }), new Metadata(), {}, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });

    expect(response.metadata?.id).toBe('foo-bar');
    expect(response.metadata?.name).toBe('MockDisk');

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});
