import {
  credentials,
  Metadata,
  Server,
  ServerCredentials,
  ServiceError,
  status,
} from '@grpc/grpc-js';

import {
  ServiceError as NebiusServiceError,
  OperationConflict,
  ServiceError_RetryType,
} from '../api/nebius/common/v1/index.js';
import {
  DiskServiceBaseClient as DiskServiceClient,
  DiskServiceServer,
  DiskServiceServiceDescription as DiskServiceService,
  GetDiskRequest,
} from '../api/nebius/compute/v1/index.js';
import { NebiusGrpcError } from '../runtime/error.js';

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
        listOperationsByParent: (_call, cb) =>
          cb(new Error('unimplemented') as any, undefined as any),
      };
      server.addService(DiskServiceService, impl);
    });

    const client = new DiskServiceClient(address, credentials.createInsecure());

    await expect(
      new Promise((resolve, reject) => {
        client.get(
          GetDiskRequest.create({ id: 'bad' }),
          new Metadata(),
          {
            deadline: Date.now() + 5000,
          },
          (err, _res) => {
            if (err) return reject(err);
            resolve(_res);
          },
        );
      }),
    ).rejects.toMatchObject({ code: status.INVALID_ARGUMENT });

    await new Promise<void>((resolve) => server.tryShutdown(() => resolve()));
  });
});

describe('ServiceError rendering', () => {
  function baseGrpcError(): ServiceError {
    return Object.assign(new Error('request failed'), {
      code: status.FAILED_PRECONDITION,
      details: 'request failed',
      metadata: new Metadata(),
    });
  }

  test('renders operation conflict details', () => {
    const serviceError = NebiusServiceError.create({
      service: 'compute',
      code: 'OperationConflict',
      retryType: ServiceError_RetryType.UNSPECIFIED,
      details: {
        $case: 'operationConflict',
        operationConflict: OperationConflict.create({
          resourceId: 'instance-1',
          conflictingOperationId: 'operation-2',
        }),
      },
    });

    const err = new NebiusGrpcError(baseGrpcError(), undefined, [serviceError]);

    expect(err.message).toContain(
      'OperationConflict in service compute operation conflict: resource: instance-1, conflicting operation ID: operation-2',
    );
  });

  test('renders unknown details with raw formatting', () => {
    const serviceError = {
      $type: 'nebius.common.v1.ServiceError',
      service: 'compute',
      code: 'NewError',
      retryType: ServiceError_RetryType.UNSPECIFIED,
      details: {
        $case: 'newDetail',
        newDetail: { field: 'value' },
      },
    } as unknown as NebiusServiceError;

    const err = new NebiusGrpcError(baseGrpcError(), undefined, [serviceError]);

    expect(err.message).toContain(
      'NewError in service compute newDetail: {"field":"value"}',
    );
  });
});
