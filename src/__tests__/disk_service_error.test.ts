import { Server, ServerCredentials, credentials, status, ServiceError, Metadata } from '@grpc/grpc-js';

import { DiskServiceService, DiskServiceClient, DiskServiceServer, GetDiskRequest } from '../generated/nebius/compute/v1/disk_service';

function startServerWithPort(addImpl: (server: Server) => void): Promise<{ server: Server; address: string }>{
  return new Promise((resolve, reject) => {
    const server = new Server();
    addImpl(server);
    server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (err, port) => {
      if (err) return reject(err);
      resolve({ server, address: `127.0.0.1:${port}` });
    });
  });
}

describe('DiskService error propagation', () => {
  test('get returns INVALID_ARGUMENT', async () => {
    const { server, address } = await startServerWithPort((server) => {
      const impl: DiskServiceServer = {
        get: (_call, callback) => {
          const err: ServiceError = Object.assign(new Error('bad request'), {
            code: status.INVALID_ARGUMENT,
            details: 'bad request',
            metadata: new Metadata(),
          });
          callback(err);
        },
        list: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        getByName: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        create: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        update: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        delete: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
        listOperationsByParent: (_call, cb) => cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService, impl);
    });

    const client = new DiskServiceClient(address, credentials.createInsecure());

    await expect(
      new Promise((resolve, reject) => {
        client.get(
          GetDiskRequest.create({ id: 'bad' }),
          new Metadata(),
          {},
          (err, _res) => {
            if (err) return reject(err);
            resolve(_res);
          },
        );
      })
    ).rejects.toMatchObject({ code: status.INVALID_ARGUMENT });

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});
