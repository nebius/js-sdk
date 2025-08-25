import { Server, ServerCredentials, credentials, status, Metadata } from '@grpc/grpc-js';

import {
  DiskServiceServiceDescription as DiskServiceService,
  DiskServiceBaseClient as DiskServiceClient,
  DiskServiceServer,
  GetDiskRequest,
} from '../generated/nebius/compute/v1/index';

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

describe('DiskService timeout', () => {
  test('deadline exceeded', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: DiskServiceServer = {
        get: (call, callback) => {
          // Delay longer than client deadline
          setTimeout(() => {
            callback(null as any, undefined as any);
          }, 200);
        },
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

    await expect(
      new Promise((resolve, reject) => {
        client.get(
          { id: 'foo' } as GetDiskRequest,
          new Metadata(),
          { deadline: new Date(Date.now() + 50) },
          (err, _res) => {
            if (err) return reject(err);
            resolve(_res);
          },
        );
      }),
    ).rejects.toMatchObject({ code: status.DEADLINE_EXCEEDED });

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});
