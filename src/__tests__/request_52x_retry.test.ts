import { EventEmitter } from 'node:events';

import {
  type Client,
  type ClientUnaryCall,
  Metadata,
  status,
} from '@grpc/grpc-js';

import { Status as GrpcStatus } from '../api/google/rpc/index.js';
import { Request } from '../runtime/request.js';
import { Logger } from '../runtime/util/logging.js';

import type { NebiusGrpcError } from '../runtime/error.js';
import type { SDKInterface } from '../sdk.js';

class FakeUnaryCall extends EventEmitter {
  cancel(): void {
    // no-op
  }

  getPeer(): string {
    return 'fake-peer';
  }
}

type AttemptResult<TRes> =
  | { error: NebiusGrpcError }
  | {
      response: TRes;
    };

function makeFakeClient<TRes>(results: AttemptResult<TRes>[]): {
  attempts: () => number;
  client: Client;
} {
  let attempts = 0;
  const client = {
    makeUnaryRequest: jest.fn((_path, _serialize, _deserialize, _request, _metadata, _options, cb) => {
      const call = new FakeUnaryCall() as ClientUnaryCall;
      const result = results[attempts++];
      setImmediate(() => {
        if (!result) {
          cb(new Error('unexpected extra attempt'));
          return;
        }
        if ('error' in result) {
          cb(result.error);
          return;
        }
        cb(null, result.response);
      });
      return call;
    }),
  } as unknown as Client;

  return { attempts: () => attempts, client };
}

function makeSdk(client: Client): SDKInterface {
  return {
    getAddressFromServiceName: () => 'fake-address',
    getAuthorizationProvider: () => undefined,
    getClientByAddress: () => client,
    logger: new Logger(),
    parentId: () => undefined,
  };
}

function makeRequest<TRes>(client: Client): Request<Record<string, never>, TRes> {
  return new Request<Record<string, never>, TRes>(
    makeSdk(client),
    {
      path: '/nebius.compute.v1.DiskService/Get',
      requestSerialize: () => Buffer.alloc(0),
    },
    'fake-address',
    () => {
      throw new Error('fake client does not deserialize');
    },
    {},
    new Metadata(),
    {
      PerRetryTimeout: 100,
      RequestTimeout: 1_000,
      RetryCount: 1,
    },
  );
}

function wrappedUnknownError(
  message: string,
  opts?: {
    baseDetails?: string;
    baseMessage?: string;
    statusMessage?: string;
  },
): NebiusGrpcError {
  const baseMessage = opts?.baseMessage ?? message;
  const rpcStatus =
    opts?.statusMessage === undefined
      ? undefined
      : GrpcStatus.create({
          code: status.UNKNOWN,
          details: [],
          message: opts.statusMessage,
        });
  const wrappedMessage = rpcStatus?.message ?? opts?.baseDetails ?? baseMessage;

  return Object.assign(new Error(`UNKNOWN: ${wrappedMessage}`), {
    code: status.UNKNOWN,
    details: opts?.baseDetails ?? message,
    metadata: new Metadata(),
    name: 'NebiusGrpcError',
    requestId: '',
    serviceErrors: [],
    status: rpcStatus,
    traceId: '',
  }) as NebiusGrpcError;
}

describe('Request HTTP 52x retry classification', () => {
  test.each([
    'Received http2 header with status: 522',
    'unexpected HTTP status code received from server: 529 (); transport failed',
    'proxy failed with HTTP status code 520',
  ])('retries UNKNOWN errors with HTTP 52x details: %s', async (message) => {
    const response = { ok: true };
    const fake = makeFakeClient([
      {
        error: wrappedUnknownError(message),
      },
      { response },
    ]);

    await expect(makeRequest<typeof response>(fake.client).result).resolves.toEqual(response);
    expect(fake.attempts()).toBe(2);
  });

  test('retries when HTTP 52x is present in the wrapped status message', async () => {
    const response = { ok: true };
    const fake = makeFakeClient([
      {
        error: wrappedUnknownError('proxy failed', {
          baseDetails: 'proxy failed',
          statusMessage:
            'Error received from peer {grpc_message:"Received HTTP2 header with status: 524"}',
        }),
      },
      { response },
    ]);

    await expect(makeRequest<typeof response>(fake.client).result).resolves.toEqual(response);
    expect(fake.attempts()).toBe(2);
  });

  test.each([
    'Received http2 header with status: 519',
    'Received http2 header with status: 530',
    'unexpected HTTP status code received from server: 500',
    'unknown service error 523',
  ])('does not retry UNKNOWN errors without an HTTP 52x status: %s', async (message) => {
    const response = { ok: true };
    const fake = makeFakeClient([
      {
        error: wrappedUnknownError(message),
      },
      { response },
    ]);

    await expect(makeRequest<typeof response>(fake.client).result).rejects.toMatchObject({
      code: status.UNKNOWN,
    });
    expect(fake.attempts()).toBe(1);
  });
});
