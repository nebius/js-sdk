import { EventEmitter } from 'node:events';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { type CallOptions, Client, ClientUnaryCall, Metadata, status } from '@grpc/grpc-js';

import { Status } from '../api/google/rpc/index.js';
import {
  ListOperationsRequest,
  ListOperationsResponse,
  Operation as OperationProto,
  ResourceMetadata,
  ServiceError,
  ServiceError_RetryType,
} from '../api/nebius/common/v1/index.js';
import { Operation as AlphaOperationProto } from '../api/nebius/common/v1alpha1/index.js';
import {
  CreateDiskRequest,
  Disk,
  DiskService,
  DiskServiceServiceDescription,
  GetDiskRequest,
  ListDisksRequest,
  ListDisksResponse,
} from '../api/nebius/compute/v1/index.js';
import {
  CreateTokenResponse,
  ExchangeTokenRequest,
  TokenExchangeService,
} from '../api/nebius/iam/v1/index.js';
import { protoRegistry } from '../api/protobuf.js';
import { OneOfProvider } from '../runtime/authorization/one_of.js';
import { Provider } from '../runtime/authorization/provider.js';
import { TokenProvider } from '../runtime/authorization/token.js';
import { Config } from '../runtime/cli_config.js';
import { Mask } from '../runtime/fieldmask.js';
import {
  maskFromMetadata,
  RESET_MASK_HEADER,
  SELECT_MASK_HEADER,
  withResetMask,
  withSelectMask,
} from '../runtime/mask_metadata.js';
import {
  GenericOperation,
  Operation,
  OperationError,
  OperationValidationError,
} from '../runtime/operation.js';
import {
  filterWithSelectMask,
  getAtFieldPath,
  knownFieldsFromMessage,
  patchWithResetMask,
  replaceAtFieldPath,
  resetMaskFromModified,
  traverseMessage,
} from '../runtime/protobuf_mask.js';
import {
  attachMessageDescriptor,
  BinaryReader,
  BinaryWriter,
  dayjs,
  Long,
  unknownFieldsSymbol,
} from '../runtime/protos/core.js';
import {
  anyFromProtoJSON,
  anyToProtoJSON,
  fromProtoJSON,
  toProtoJSON,
} from '../runtime/protos/proto_json.js';
import { wkt } from '../runtime/protos/wkt.js';
import { isRetriableError, Request, RetryOptions } from '../runtime/request.js';
import { resetMaskFromMessage } from '../runtime/resetmask.js';
import { NamedBearer, Token } from '../runtime/token.js';
import { ExchangeableBearer } from '../runtime/token/exchangeable.js';
import { FileBearer } from '../runtime/token/file.js';
import { AsyncRenewableBearer } from '../runtime/token/file_cache/async_renewable_bearer.js';
import { RenewableFileCacheBearer } from '../runtime/token/file_cache/renewable_bearer.js';
import { TokenCache } from '../runtime/token/file_cache/token_cache.js';
import { IMDSBearer } from '../runtime/token/imds.js';
import { ImpersonatedBearer } from '../runtime/token/impersonated.js';
import { RenewableBearer } from '../runtime/token/renewable.js';
import { ServiceAccountBearer } from '../runtime/token/service_account.js';
import { EnvBearer, StaticBearer } from '../runtime/token/static.js';
import { TimeoutError } from '../runtime/util/cancelable.js';
import { Logger } from '../runtime/util/logging.js';
import { SDK, SDKInterface } from '../sdk.js';

class Call extends EventEmitter {
  cancel = jest.fn();
  getPeer() {
    return 'fake';
  }
}
function sdkWith(
  run: (
    req: unknown,
    md: Metadata,
    cb: (err: unknown, response?: unknown) => void,
    call: Call,
  ) => void,
  provider?: Provider,
  defaults?: RetryOptions,
  parent?: string,
  tenant?: string,
) {
  const calls: { req: unknown; md: Metadata; options: unknown; call: Call }[] = [];
  const client = {
    makeUnaryRequest: jest.fn((_path, _s, _d, req, md, options, cb) => {
      const call = new Call();
      calls.push({ req, md: md.clone(), options, call });
      setImmediate(() => run(req, md, cb, call));
      return call as unknown as ClientUnaryCall;
    }),
  } as unknown as Client;
  const sdk: SDKInterface = {
    getAddressFromServiceName: () => 'fake',
    getClientByAddress: () => client,
    getAuthorizationProvider: () => provider,
    parentId: () => parent,
    tenantId: () => tenant,
    requestOptions: () => defaults ?? {},
    logger: new Logger(),
  };
  return { sdk, calls };
}
function grpcError(code: number) {
  return Object.assign(new Error('RPC rejected'), {
    code,
    details: 'RPC rejected',
    metadata: new Metadata(),
  });
}
function getRequest(
  sdk: SDKInterface,
  md?: Metadata,
  options?: Partial<CallOptions> & RetryOptions,
) {
  return new DiskService(sdk).get(
    GetDiskRequest.create({ id: 'computedisk-e0tabc' }),
    md ?? new Metadata(),
    options ?? {},
  );
}

describe('public SDK request parity', () => {
  test('three default attempts reuse idempotency and expose final diagnostics', async () => {
    let count = 0;
    const fake = sdkWith((_req, _md, cb, call) => {
      const md = new Metadata();
      md.set('x-request-id', `attempt-${++count}`);
      call.emit('metadata', md);
      if (count < 3) cb(grpcError(status.UNAVAILABLE));
      else cb(null, Disk.create({ metadata: { id: 'computedisk-e0tabc' } }));
    });
    const req = getRequest(fake.sdk);
    await req;
    expect(fake.calls).toHaveLength(3);
    expect(new Set(fake.calls.map((v) => v.md.get('x-idempotency-key')[0])).size).toBe(1);
    expect(fake.calls[0].md.get('x-idempotency-key')[0]).toBeTruthy();
    expect(await req.requestId).toBe('attempt-3');
    expect(await req.traceId).toBe('');
    expect((await req.status).code).toBe(status.OK);
  });
  test('default exhaustion returns the final error', async () => {
    const fake = sdkWith((_req, _md, cb) => cb(grpcError(status.UNAVAILABLE)));
    await expect(getRequest(fake.sdk).result).rejects.toHaveProperty('code', status.UNAVAILABLE);
    expect(fake.calls).toHaveLength(3);
  });
  test.each([ServiceError_RetryType.NOTHING, ServiceError_RetryType.UNIT_OF_WORK])(
    'service retry hint %s overrides UNAVAILABLE',
    (hint) => {
      expect(
        isRetriableError(
          Object.assign(grpcError(status.UNAVAILABLE), {
            serviceErrors: [ServiceError.create({ retryType: hint })],
          }),
        ),
      ).toBe(false);
      expect(
        isRetriableError(
          Object.assign(grpcError(status.INVALID_ARGUMENT), {
            serviceErrors: [ServiceError.create({ retryType: ServiceError_RetryType.CALL })],
          }),
        ),
      ).toBe(true);
    },
  );
  test('an attempt timeout retries within the logical budget', async () => {
    let count = 0;
    const fake = sdkWith((_req, _md, cb) =>
      ++count === 1 ? cb(grpcError(status.DEADLINE_EXCEEDED)) : cb(null, Disk.create()),
    );
    await getRequest(fake.sdk, undefined, { RequestTimeout: 500, PerRetryTimeout: 50 });
    expect(fake.calls).toHaveLength(2);
  });
  test('caller auth and metadata are preserved', async () => {
    const authenticate = jest.fn();
    const fake = sdkWith((_req, _md, cb) => cb(null, Disk.create()), {
      authenticator: () => ({ authenticate }),
    });
    const md = new Metadata();
    md.set('authorization', 'Bearer caller');
    md.set('x-idempotency-key', 'caller-key');
    await getRequest(fake.sdk, md);
    expect(authenticate).not.toHaveBeenCalled();
    expect(md.get('x-idempotency-key')).toEqual(['caller-key']);
    expect(fake.calls[0].md.get('authorization')).toEqual(['Bearer caller']);
  });
  test('generated requests are copied before submission and typed parent/tenant fallback is applied', async () => {
    const fake = sdkWith(
      (_req, _md, cb) => cb(null, ListDisksResponse.create()),
      undefined,
      undefined,
      'tenant-e0tabc',
      'project-e0txyz',
    );
    const input = ListDisksRequest.create();
    const req = new DiskService(fake.sdk).list(input);
    input.parentId = 'mutated';
    await req;
    expect((fake.calls[0].req as ListDisksRequest).parentId).toBe('project-e0txyz');
    const create = sdkWith(
      (_req, _md, cb) => cb(null, {}),
      undefined,
      undefined,
      'project-e0tabc',
      'project-e0txyz',
    );
    await new Request(
      create.sdk,
      DiskServiceServiceDescription.create,
      'fake',
      () => ({}),
      CreateDiskRequest.create(),
      undefined,
    );
    expect((create.calls[0].req as CreateDiskRequest).metadata?.parentId).toBe('project-e0tabc');
  });
  test('completed native success remains authoritative after cancellation', async () => {
    const fake = sdkWith((_req, _md, cb) => {
      cb(null, Disk.create());
      req.cancel();
    });
    const req = getRequest(fake.sdk);
    await expect(req.result).resolves.toBeDefined();
  });
  test.each([status.PERMISSION_DENIED, status.UNAVAILABLE])(
    'completed final native error %s remains authoritative after cancellation',
    async (code) => {
      const error = grpcError(code);
      const fake = sdkWith((_req, _md, callback) => {
        callback(error);
        request.cancel();
      });
      const request = getRequest(fake.sdk, undefined, { RetryCount: 0 });
      await expect(request.result).rejects.toBe(error);
      expect((await request.status).code).toBe(code);
      expect(fake.calls).toHaveLength(1);
    },
  );
  test('a completed retryable attempt remains cancellable before the next retry', async () => {
    const fake = sdkWith((_req, _md, callback) => {
      callback(grpcError(status.UNAVAILABLE));
      request.cancel();
    });
    const request = getRequest(fake.sdk);
    await expect(request.result).rejects.toMatchObject({ code: status.CANCELLED });
    expect(fake.calls).toHaveLength(1);
  });
  test.each([false, true])(
    'cancellation during authorization recovery applies only when recovery accepts a retry (%s)',
    async (recovered) => {
      const error = grpcError(status.UNAUTHENTICATED);
      let resolve!: (value: boolean) => void;
      const decision = new Promise<boolean>((done) => {
        resolve = done;
      });
      let started!: () => void;
      const pending = new Promise<void>((done) => {
        started = done;
      });
      const fake = sdkWith((_req, _metadata, callback) => callback(error), {
        authenticator: () => ({
          authenticate: async (metadata) => {
            metadata.set('authorization', 'Bearer old');
          },
          handleError: () => {
            started();
            return decision;
          },
        }),
      });
      const request = getRequest(fake.sdk);
      await pending;
      request.cancel();
      resolve(recovered);
      const failure = await request.result.catch((reason: unknown) => reason);
      expect(recovered ? (failure as { code: number }).code : failure).toBe(
        recovered ? status.CANCELLED : error,
      );
      expect((await request.status).code).toBe(
        recovered ? status.CANCELLED : status.UNAUTHENTICATED,
      );
      expect(fake.calls).toHaveLength(1);
    },
  );
  test('static credentials retain a completed authorization failure after cancellation', async () => {
    const error = grpcError(status.UNAUTHENTICATED);
    const fake = sdkWith(
      (_req, _metadata, callback) => {
        callback(error);
        request.cancel();
      },
      new TokenProvider(new StaticBearer('token')),
    );
    const request = getRequest(fake.sdk);
    await expect(request.result).rejects.toBe(error);
    expect((await request.status).code).toBe(status.UNAUTHENTICATED);
  });
  test('cancellation stops a pending authorization wait', async () => {
    const fake = sdkWith(() => {}, {
      authenticator: () => ({ authenticate: () => new Promise<void>(() => {}) }),
    });
    const req = getRequest(fake.sdk);
    req.cancel();
    await expect(req.result).rejects.toHaveProperty('code', status.CANCELLED);
    expect(fake.calls).toHaveLength(0);
  });
  test('file token rotation renews a rejected RPC exactly once', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'js-parity-'));
    const file = join(dir, 'token');
    await writeFile(file, 'old');
    let count = 0;
    const fake = sdkWith(
      (_req, md, cb) => {
        if (++count === 1) {
          void writeFile(file, 'new').then(() => cb(grpcError(status.UNAUTHENTICATED)));
        } else {
          cb(null, Disk.create());
        }
      },
      new TokenProvider(new FileBearer(file)),
    );
    try {
      await getRequest(fake.sdk);
      expect(fake.calls).toHaveLength(2);
      expect(fake.calls[1].md.get('authorization')).toEqual(['Bearer new']);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
  test('unchanged file token cannot loop after a rejection', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'js-parity-'));
    const file = join(dir, 'token');
    await writeFile(file, 'same');
    const fake = sdkWith(
      (_r, _m, cb) => cb(grpcError(status.UNAUTHENTICATED)),
      new TokenProvider(new FileBearer(file)),
    );
    try {
      await expect(getRequest(fake.sdk).result).rejects.toHaveProperty(
        'code',
        status.UNAUTHENTICATED,
      );
      expect(fake.calls).toHaveLength(1);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
  test('pagination copies the request, follows next-page tokens, and supports early break', async () => {
    const fake = sdkWith(
      (req, _md, cb) => {
        const token = (req as ListDisksRequest).pageToken;
        cb(
          null,
          ListDisksResponse.create({
            items: [{ metadata: { id: token || 'first' } }],
            nextPageToken: token ? '' : 'second',
          }),
        );
      },
      undefined,
      undefined,
      'project-e0tabc',
    );
    const input = ListDisksRequest.create();
    const ids = [];
    for await (const item of new DiskService(fake.sdk).filter(input)) ids.push(item.metadata?.id);
    expect(ids).toEqual(['first', 'second']);
    expect(input.pageToken).toBe('');
    for await (const _item of new DiskService(fake.sdk).filter(input)) break;
    expect(fake.calls).toHaveLength(3);
  });
});

describe('credentials, operation, and protobuf parity', () => {
  test('IMDS uses metadata header and bounded retryable HTTP statuses', async () => {
    const fetcher = jest
      .fn()
      .mockResolvedValueOnce(new Response('', { status: 503 }))
      .mockResolvedValueOnce(new Response('', { status: 429 }))
      .mockResolvedValueOnce(
        Response.json({ access_token: 'token', expires_at: '2030-01-01T00:00:00Z' }),
      );
    const bearer = new IMDSBearer('http://metadata.example/token', {
      fetch: fetcher,
      baseBackoffMs: 0,
    });
    const token = await bearer.receiver().fetch(1000);
    expect(token.token).toBe('token');
    expect(fetcher).toHaveBeenCalledTimes(3);
    expect(fetcher.mock.calls[0][1].headers).toEqual({ Metadata: 'true' });
    const denied = jest.fn().mockResolvedValue(new Response('', { status: 403 }));
    await expect(
      new IMDSBearer('http://metadata.example/token', { fetch: denied }).fetchToken(),
    ).rejects.toThrow('HTTP 403');
    expect(denied).toHaveBeenCalledTimes(1);
  });
  test('SDK exposes tokens and rejects use after shutdown', async () => {
    const sdk = new SDK({ credentials: 'token', userAgentPrefix: 'parity-test/1' });
    expect((await sdk.getToken()).token).toBe('token');
    await sdk.close();
    await expect(sdk.getToken()).rejects.toThrow('closed');
    expect(() => sdk.getClientByAddress('fake')).toThrow('closed');
  });
  test('failed operations preserve their terminal status and do not poll again', async () => {
    const raw: GenericOperation = {
      $type: 'nebius.common.v1.Operation',
      createdAt: dayjs(0),
      id: 'op',
      description: '',
      createdBy: '',
      resourceId: '',
      requestHeaders: {},
      status: Status.create({ code: status.PERMISSION_DENIED, message: 'denied' }),
    };
    const service = { get: jest.fn() };
    const op = new Operation(raw, service, new Logger());
    await expect(op.wait()).rejects.toBeInstanceOf(OperationError);
    await op.update();
    expect(service.get).not.toHaveBeenCalled();
    expect(op.status()?.message).toBe('denied');
  });
  test('operation overall timeout bounds transient polling errors and backoff', async () => {
    jest.useFakeTimers();
    try {
      const get = jest.fn(() => ({
        result: Promise.reject(grpcError(status.UNAVAILABLE)),
        cancel: jest.fn(),
      }));
      const op = new Operation(
        {
          $type: 'op',
          createdAt: dayjs(0),
          id: 'op',
          description: '',
          createdBy: '',
          resourceId: '',
          requestHeaders: {},
        },
        { get } as never,
        new Logger(),
      );
      const assertion = expect(
        op.wait(1, undefined, { timeoutMs: 20, pollErrorBackoff: () => 1000 }),
      ).rejects.toHaveProperty('code', status.DEADLINE_EXCEEDED);
      await jest.runAllTimersAsync();
      await assertion;
      expect(get).toHaveBeenCalledTimes(1);
    } finally {
      jest.useRealTimers();
    }
  });
  test('timestamps before the epoch use nonnegative protobuf nanos', () => {
    const codec = wkt['.google.protobuf.Timestamp'];
    expect(codec.toWire(dayjs(-1))).toEqual({
      seconds: expect.objectContaining({ low: -1 }),
      nanos: 999000000,
    });
    const writer = new BinaryWriter();
    codec.writeMessage(writer, dayjs(-1));
    const bytes = writer.finish();
    expect(codec.readMessage(new BinaryReader(bytes), bytes.length).valueOf()).toBe(-1);
  });
  test('Any and FieldMask canonical JSON remain additive', () => {
    const msg = GetDiskRequest.create({ id: 'computedisk-e0tabc' }),
      any = protoRegistry.pack(msg);
    expect(anyToProtoJSON(any, protoRegistry)).toEqual({ '@type': any.typeUrl, id: msg.id });
    expect(
      protoRegistry.unpack(anyFromProtoJSON({ '@type': any.typeUrl, id: msg.id }, protoRegistry)),
    ).toEqual(msg);
    const st = Status.create({ details: [any] });
    const json = toProtoJSON(Status, st, protoRegistry);
    expect((json as { details: unknown[] }).details[0]).toEqual({
      '@type': any.typeUrl,
      id: msg.id,
    });
    expect(fromProtoJSON(Status, json, protoRegistry)).toEqual(st);
    expect(Status.toJSON(st)).toHaveProperty('details.0.typeUrl', any.typeUrl);
    const fm = {
      typeUrl: 'type.googleapis.com/google.protobuf.FieldMask',
      value: (() => {
        const w = new BinaryWriter();
        wkt['.google.protobuf.FieldMask'].writeMessage(w, ['metadata.parent_id']);
        return w.finish();
      })(),
    };
    expect(anyToProtoJSON(fm, protoRegistry)).toEqual({
      '@type': fm.typeUrl,
      value: 'metadata.parentId',
    });
  });
  test('wildcard and named branches are combined; metadata masks are copied', () => {
    expect(Mask.parse('*.name,metadata.parent_id').getSubMask('metadata')?.marshal()).toBe(
      'name,parent_id',
    );
    const md = new Metadata();
    md.set('custom', 'x');
    const updated = withSelectMask('metadata', md);
    expect(maskFromMetadata(updated, SELECT_MASK_HEADER).marshal()).toBe('metadata');
    expect(md.get(SELECT_MASK_HEADER)).toEqual([]);
  });
  test.each(['select', 'reset'] as const)('%s mask helpers compose existing metadata', (kind) => {
    const header = kind === 'select' ? SELECT_MASK_HEADER : RESET_MASK_HEADER;
    const md = new Metadata();
    md.set(header, 'metadata.id');
    const updated =
      kind === 'select' ? withSelectMask('metadata.name', md) : withResetMask('metadata.name', md);
    expect(updated.get(header)).toEqual(['metadata.id', 'metadata.name']);
    expect(maskFromMetadata(updated, header).marshal()).toBe('metadata.(id,name)');
    expect(md.get(header)).toEqual(['metadata.id']);
  });
  test('request mask options compose manually supplied headers', async () => {
    const md = new Metadata();
    md.set(SELECT_MASK_HEADER, 'metadata.id');
    md.set(RESET_MASK_HEADER, 'metadata.name');
    const fake = sdkWith((_req, _md, cb) => cb(null, Disk.create()));
    await getRequest(fake.sdk, md, { selectMask: 'metadata.name', resetMask: 'metadata.labels' });
    expect(fake.calls[0].md.get(SELECT_MASK_HEADER)).toEqual(['metadata.id', 'metadata.name']);
    expect(fake.calls[0].md.get(RESET_MASK_HEADER)).toEqual(['metadata.name', 'metadata.labels']);
    expect(md.get(SELECT_MASK_HEADER)).toEqual(['metadata.id']);
  });
  test('environment credentials use the public IAM variable and discovery stays opt-in', async () => {
    const previous = process.env.NEBIUS_IAM_TOKEN;
    try {
      process.env.NEBIUS_IAM_TOKEN = ' environment \r\n';
      expect((await new EnvBearer().receiver().fetch()).token).toBe('environment');
      const sdk = new SDK({ userAgentPrefix: 'parity-test/1' });
      try {
        expect(sdk.getAuthorizationProvider()).toBeUndefined();
      } finally {
        await sdk.close();
      }
    } finally {
      if (previous === undefined) delete process.env.NEBIUS_IAM_TOKEN;
      else process.env.NEBIUS_IAM_TOKEN = previous;
    }
  });
  test('known and modified masks honor immutable conversion options', () => {
    const descriptor = {
      fields: {
        mutable: { pbName: 'mutable', scalarType: 9 as const },
        immutable: { pbName: 'immutable', scalarType: 9 as const, immutable: true },
      },
    };
    const original = attachMessageDescriptor(
      { $type: 'test', mutable: 'old', immutable: 'old' },
      descriptor,
    );
    const modified = attachMessageDescriptor(
      { $type: 'test', mutable: '', immutable: '' },
      descriptor,
    );
    expect(resetMaskFromModified(original, modified).marshal()).toBe('mutable');
    expect(resetMaskFromModified(original, modified, { includeImmutables: true }).marshal()).toBe(
      'immutable,mutable',
    );
    expect(knownFieldsFromMessage(original, { includeImmutables: false }).marshal()).toBe(
      'mutable',
    );
    expect(resetMaskFromMessage(modified, { includeImmutables: true })?.marshal()).toBe(
      'immutable,mutable',
    );
  });
  test('protobuf paths use native JS values; traversal supports both orders and stop', () => {
    const original = ListDisksResponse.create({
      items: [{ metadata: { name: 'first' } }, { metadata: { name: 'second' } }],
    });
    expect(getAtFieldPath(original, 'items.1.metadata.name')).toBe('second');
    const changed = replaceAtFieldPath(ListDisksResponse, original, 'items.1.metadata.name', 'new');
    expect(changed.items[1].metadata?.name).toBe('new');
    expect(original.items[1].metadata?.name).toBe('second');
    const paths: string[] = [];
    traverseMessage(
      original,
      'items.*.metadata.name',
      (entry) => {
        paths.push(entry.path.join('.'));
      },
      'breadth',
    );
    expect(paths).toEqual([
      'items',
      'items.0',
      'items.1',
      'items.0.metadata',
      'items.1.metadata',
      'items.0.metadata.name',
      'items.1.metadata.name',
    ]);
    const depthPaths: string[] = [];
    traverseMessage(
      original,
      'items.*.metadata.name',
      (entry) => {
        depthPaths.push(entry.path.join('.'));
      },
      'depth',
    );
    expect(depthPaths).toEqual([
      'items',
      'items.0',
      'items.0.metadata',
      'items.0.metadata.name',
      'items.1',
      'items.1.metadata',
      'items.1.metadata.name',
    ]);
    const stopped: string[] = [];
    traverseMessage(original, 'items.*.metadata.name', (entry) => {
      stopped.push(entry.path.join('.'));
      return false;
    });
    expect(stopped).toEqual(['items']);
    expect(() => getAtFieldPath(original, 'items.3')).toThrow(RangeError);
  });
  test.each(['breadth', 'depth'] as const)(
    'traversal visits large repeated fields in %s order',
    (order) => {
      const message = attachMessageDescriptor(
        { values: Array(200000).fill(0) },
        {
          fields: { values: { pbName: 'values', repeated: true, scalarType: 5 } },
        },
      );
      let visits = 0;
      traverseMessage(
        message,
        'values.*',
        () => {
          visits++;
        },
        order,
      );
      expect(visits).toBe(200001);
    },
  );
  test('filter preserves list positions, can reduce lists, and patches message collections', () => {
    const original = ListDisksResponse.create({
      items: [
        { metadata: { name: 'first', parentId: 'project-e0tabc' } },
        { metadata: { name: 'second' } },
      ],
    });
    const selected = filterWithSelectMask(ListDisksResponse, original, 'items.1.metadata.name');
    expect(selected.items).toHaveLength(2);
    expect(selected.items[0].metadata).toBeUndefined();
    expect(selected.items[1].metadata?.name).toBe('second');
    expect(
      filterWithSelectMask(ListDisksResponse, original, 'items.1.metadata.name', true).items,
    ).toHaveLength(1);
    const patch = ListDisksResponse.create({ items: [{ metadata: { name: 'new' } }] });
    const merged = patchWithResetMask(
      ListDisksResponse,
      original,
      patch,
      'items.0.metadata.parent_id',
    );
    expect(merged.items).toHaveLength(1);
    expect(merged.items[0].metadata?.name).toBe('new');
    expect(merged.items[0].metadata?.parentId).toBe('');
  });
  test('protobuf filter and patch preserve output-only fields and unknown wire fields', () => {
    const input = ResourceMetadata.create({
      id: 'old',
      parentId: 'project-e0tabc',
      name: 'old',
      createdAt: dayjs(1000),
    });
    const wire = ResourceMetadata.encode(input).uint32(8000).int32(42).finish();
    const original = ResourceMetadata.decode(wire);
    const filtered = filterWithSelectMask(ResourceMetadata, original, 'name');
    expect(filtered.parentId).toBe('');
    expect(filtered.name).toBe('old');
    expect(filtered[unknownFieldsSymbol]).toEqual(original[unknownFieldsSymbol]);
    expect(original.parentId).toBe('project-e0tabc');
    const patched = patchWithResetMask(
      ResourceMetadata,
      original,
      ResourceMetadata.create({ id: 'replacement', name: 'new', createdAt: dayjs(2000) }),
      'parent_id',
    );
    expect(patched.id).toBe('replacement');
    expect(patched.createdAt?.valueOf()).toBe(1000);
    expect(patched.name).toBe('new');
    expect(patched.parentId).toBe('');
    expect(
      resetMaskFromModified(input, ResourceMetadata.create({ id: 'old', name: 'new' })).marshal(),
    ).toContain('parent_id');
    expect(knownFieldsFromMessage(GetDiskRequest.create()).marshal()).toBe('id');
  });
});

describe('additional public layer parity', () => {
  test.each([
    ['', 'tenant-e0tabc'],
    ['   ', 'tenant-e0tabc'],
    [' tenant-e0tother ', 'tenant-e0tother'],
  ])('tenant option %j uses the normalized default %s', async (tenantId, expected) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-tenant-default-'));
    const file = join(directory, 'config.yaml');
    let sdk: SDK | undefined;
    try {
      await writeFile(file, 'default: main\nprofiles:\n  main:\n    tenant-id: tenant-e0tabc\n');
      sdk = new SDK({
        configReader: new Config({ configFile: file, noEnv: true }),
        credentials: null,
        tenantId,
        userAgentPrefix: 'parity-test/1',
      });
      expect(sdk.tenantId()).toBe(expected);
    } finally {
      await sdk?.close();
      await rm(directory, { recursive: true, force: true });
    }
  });

  test('whitespace-only environment tokens fall through to profile credentials', async () => {
    const envName = 'SDK_PARITY_EMPTY_TOKEN';
    const previous = process.env[envName];
    const directory = await mkdtemp(join(tmpdir(), 'sdk-empty-env-token-'));
    const file = join(directory, 'config.yaml');
    try {
      process.env[envName] = ' \t\r\n';
      await writeFile(
        file,
        'default: main\nprofiles:\n  main:\n    token-endpoint: http://metadata.example/token\n',
      );
      const config = new Config({ configFile: file, profile: 'main', tokenEnv: envName });
      expect(config.getCredentials()).toBeInstanceOf(IMDSBearer);
    } finally {
      if (previous === undefined) delete process.env[envName];
      else process.env[envName] = previous;
      await rm(directory, { recursive: true, force: true });
    }
  });

  test.each([
    ['token-endpoint', '""'],
    ['token-endpoint', 'null'],
    ['token-file', '""'],
    ['token-file', 'null'],
  ])('empty %s %s falls through to auth-type', async (field, value) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-empty-endpoint-'));
    const file = join(directory, 'config.yaml');
    await writeFile(
      file,
      `default: main\nprofiles:\n  main:\n    ${field}: ${value}\n    auth-type: service account\n    service-account-id: serviceaccount-e0tabc\n    public-key-id: publickey-e0tabc\n    private-key: unused-test-key\n`,
    );
    try {
      const credentials = new Config({ configFile: file, noEnv: true }).getCredentials();
      expect(credentials).toBeInstanceOf(ServiceAccountBearer);
      if (credentials instanceof ServiceAccountBearer) await credentials.close();
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  test('OperationError supports an operation without a terminal status', () => {
    const operation = new Operation(
      OperationProto.create({ id: 'pending', createdAt: dayjs(0) }),
      { get: jest.fn() },
      new Logger(),
    );
    const error = new OperationError(operation);
    expect(error.operation).toBe(operation);
    expect(error.code).toBe(status.OK);
    expect(error.status).toEqual(Status.create());
    expect(error.serviceErrors).toEqual([]);
  });

  test('token-endpoint profiles are lazy and expose optional tenant defaults', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'js-imds-profile-'));
    const file = join(dir, 'config.yaml');
    await writeFile(
      file,
      'default: main\nprofiles:\n  main:\n    token-endpoint: http://metadata.example/token\n    parent-id: project-e0tabc\n    tenant-id: tenant-e0tabc\n',
    );
    try {
      const config = new Config({ configFile: file, noEnv: true });
      expect(config.getCredentials()).toBeInstanceOf(IMDSBearer);
      expect(config.parentId()).toBe('project-e0tabc');
      expect(config.tenantId()).toBe('tenant-e0tabc');
      const disabled = new Config({ configFile: file, noEnv: true, noParentId: true });
      expect(() => disabled.parentId()).toThrow('not use parent id');
      expect(disabled.tenantId()).toBeUndefined();
      const sdk = new SDK({
        configReader: config,
        credentials: null,
        noParentId: true,
        userAgentPrefix: 'parity/1',
      });
      expect(sdk.parentId()).toBeUndefined();
      expect(sdk.tenantId()).toBeUndefined();
      await sdk.close();
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
  test('nested Any uses its canonical value representation', () => {
    const inner = protoRegistry.pack(GetDiskRequest.create({ id: 'disk' }));
    const writer = new BinaryWriter();
    wkt['.google.protobuf.Any'].writeMessage(writer, inner);
    const envelope = { typeUrl: 'type.googleapis.com/google.protobuf.Any', value: writer.finish() };
    const json = anyToProtoJSON(envelope, protoRegistry);
    expect(json).toEqual({
      '@type': envelope.typeUrl,
      value: { '@type': inner.typeUrl, id: 'disk' },
    });
    expect(anyFromProtoJSON(json, protoRegistry)).toEqual(envelope);
  });
  test('operation payloads unpack registered types, retain unknown envelopes and copy headers', () => {
    const request = protoRegistry.pack(GetDiskRequest.create({ id: 'disk' }));
    const raw: GenericOperation = {
      $type: 'op',
      createdAt: dayjs(0),
      id: 'op',
      description: '',
      createdBy: '',
      resourceId: '',
      requestHeaders: { custom: { values: ['original'] } },
      request,
      progressData: { typeUrl: 'unknown/Message', value: new Uint8Array([1]) },
    };
    const op = new Operation(raw, { get: jest.fn() }, new Logger());
    expect(op.request()).toEqual(GetDiskRequest.create({ id: 'disk' }));
    expect(op.progressData()).toBeUndefined();
    const headers = op.requestHeaders();
    headers.custom[0] = 'changed';
    expect(op.requestHeaders().custom).toEqual(['original']);
    expect(op.raw().progressData).toEqual(raw.progressData);
  });
  test('completed operations expose progress payloads supplied by the server', () => {
    const progress = Disk.create({ metadata: { name: 'final-progress' } });
    const raw = OperationProto.create({
      id: 'op',
      createdAt: dayjs(0),
      status: Status.create(),
      progressData: protoRegistry.pack(progress),
    });
    const op = new Operation(raw, { get: jest.fn() }, new Logger());
    expect(op.done()).toBe(true);
    expect(op.progressData()).toEqual(progress);
  });
  test('patching different message types uses protobuf names and returns independent copies', () => {
    const original = ResourceMetadata.create({ id: 'old', name: 'name', parentId: 'project' });
    const patch = GetDiskRequest.create({ id: 'new' });
    const result = patchWithResetMask(
      ResourceMetadata,
      original,
      patch,
      'parent_id',
      GetDiskRequest,
    );
    expect(result.id).toBe('new');
    expect(result.name).toBe('name');
    expect(result.parentId).toBe('');
    expect(original.id).toBe('old');
    const value = ResourceMetadata.create({ name: 'replacement' });
    const copy = replaceAtFieldPath(Disk, Disk.create(), 'metadata', value);
    value.name = 'later';
    expect(copy.metadata?.name).toBe('replacement');
  });
  test('service operation listing uses the original service address and wrapped operations', async () => {
    const fake = sdkWith((_req, _md, cb) =>
      cb(
        null,
        ListOperationsResponse.create({
          operations: [
            OperationProto.create({ id: 'op', createdAt: dayjs(0), status: Status.create() }),
          ],
        }),
      ),
    );
    const raw = ListOperationsResponse.create({
      operations: [
        OperationProto.create({ id: 'op', createdAt: dayjs(0), status: Status.create() }),
      ],
    });
    fake.sdk.getClientByAddress = () =>
      ({
        makeUnaryRequest: (
          _path: unknown,
          _serialize: unknown,
          deserialize: (value: Buffer) => unknown,
          _req: unknown,
          _md: unknown,
          _opts: unknown,
          cb: (err: null, response: unknown) => void,
        ) => {
          const call = new Call();
          setImmediate(() =>
            cb(null, deserialize(Buffer.from(ListOperationsResponse.encode(raw).finish()))),
          );
          return call;
        },
      }) as unknown as Client;
    const response = await new DiskService(fake.sdk).listOperations(ListOperationsRequest.create());
    expect(response.operations[0]).toBeInstanceOf(Operation);
    expect(response.operations[0].id()).toBe('op');
    const ids: string[] = [];
    for await (const op of new DiskService(fake.sdk)
      .getOperationService()
      .filter(ListOperationsRequest.create())) {
      ids.push(op.id());
    }
    expect(ids).toEqual(['op']);
  });
});

test('malformed operations reject with their original envelope', () => {
  const raw = OperationProto.create({ id: '' });
  const service = { get: jest.fn() };
  expect(() => new Operation(raw, service, new Logger())).toThrow(OperationValidationError);
  let failure: unknown;
  try {
    new Operation(raw, service, new Logger());
  } catch (error) {
    failure = error;
  }
  expect((failure as OperationValidationError).operation).toBe(raw);
  raw.id = 'op';
  raw.createdAt = dayjs('invalid');
  expect(() => new Operation(raw, service, new Logger())).toThrow('createdAt');
});

test('credential recovery time is excluded from the RPC execution budget', async () => {
  jest.useFakeTimers();
  try {
    let fresh = false;
    const fake = sdkWith(
      (_req, _md, cb) =>
        cb(fresh ? null : grpcError(status.UNAUTHENTICATED), fresh ? Disk.create() : undefined),
      {
        authenticator: () => ({
          authenticate: async (md) => {
            md.set('authorization', fresh ? 'Bearer new' : 'Bearer old');
          },
          handleError: async () => {
            await new Promise((resolve) => setTimeout(resolve, 200));
            fresh = true;
            return true;
          },
        }),
      },
    );
    const result = getRequest(fake.sdk, undefined, {
      RequestTimeout: 100,
      AuthTimeout: 5000,
    }).result;
    const assertion = expect(result).resolves.toBeDefined();
    await jest.runAllTimersAsync();
    await assertion;
    expect(fake.calls).toHaveLength(2);
  } finally {
    jest.useRealTimers();
  }
});

test('impersonation recovers a rotated actor token through the source hook', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'sdk-actor-recovery-'));
  const file = join(dir, 'token');
  await writeFile(file, 'old');
  const actorTokens: string[] = [];
  const fake = sdkWith((req, _md, cb) => {
    actorTokens.push((req as { actorToken: string }).actorToken);
    if (actorTokens.length === 1) {
      void writeFile(file, 'new').then(() => cb(grpcError(status.UNAUTHENTICATED)));
    } else {
      cb(null, CreateTokenResponse.create({ accessToken: 'impersonated', tokenType: 'Bearer' }));
    }
  });
  const bearer = new ImpersonatedBearer('serviceaccount', new FileBearer(file), fake.sdk);
  try {
    expect((await bearer.receiver().fetch(5000)).token).toBe('impersonated');
    expect(actorTokens).toEqual(['old', 'new']);
  } finally {
    await bearer.close();
    await rm(dir, { recursive: true, force: true });
  }
});

test.each(['memory', 'file'] as const)(
  'impersonation renews a rejected actor from the %s cache',
  async (cache) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-cached-actor-'));
    const source = new StaticBearer('unused');
    const sourceReceiver = source.receiver();
    const fetch = jest
      .spyOn(sourceReceiver, 'fetch')
      .mockResolvedValueOnce(new Token('old'))
      .mockResolvedValue(new Token('new'));
    jest.spyOn(source, 'receiver').mockReturnValue(sourceReceiver);
    const actor =
      cache === 'memory'
        ? new RenewableBearer(source)
        : new AsyncRenewableBearer(new NamedBearer(source, 'cached-actor'), {
            cacheFilePath: join(directory, 'tokens.json'),
          });
    const actorTokens: string[] = [];
    const fake = sdkWith((request, _metadata, callback) => {
      const token = (request as { actorToken: string }).actorToken;
      actorTokens.push(token);
      if (token === 'old') callback(grpcError(status.UNAUTHENTICATED));
      else {
        callback(
          null,
          CreateTokenResponse.create({ accessToken: 'impersonated', tokenType: 'Bearer' }),
        );
      }
    });
    const bearer = new ImpersonatedBearer('serviceaccount', actor, fake.sdk);
    jest.useFakeTimers({ doNotFake: ['setImmediate'] });
    try {
      expect((await bearer.receiver().fetch(5000, { renewSynchronous: true })).token).toBe(
        'impersonated',
      );
      expect(actorTokens).toEqual(['old', 'new']);
      expect(fetch).toHaveBeenCalledTimes(2);
    } finally {
      try {
        await bearer.close();
        await rm(directory, { recursive: true, force: true });
      } finally {
        jest.useRealTimers();
      }
    }
  },
);

test.each([
  [1000, true],
  [180, false],
])(
  'reauthorized request gets a fresh RPC window under overall limit %sms',
  async (overall, succeeds) => {
    jest.useFakeTimers();
    try {
      let fresh = false;
      const fake = sdkWith(
        (_req, _md, cb) => {
          if (!fresh) setTimeout(() => cb(grpcError(status.UNAUTHENTICATED)), 150);
          else {
            setTimeout(() => {
              const opts = fake.calls.at(-1)!.options as { deadline: Date };
              if (Date.now() >= opts.deadline.getTime()) cb(grpcError(status.DEADLINE_EXCEEDED));
              else cb(null, Disk.create());
            }, 100);
          }
        },
        {
          authenticator: () => ({
            authenticate: async (md) => {
              md.set('authorization', fresh ? 'Bearer new' : 'Bearer old');
            },
            handleError: async () => {
              fresh = true;
              return true;
            },
          }),
        },
      );
      const result = getRequest(fake.sdk, undefined, {
        RequestTimeout: 200,
        AuthTimeout: overall as number,
        RetryCount: 1,
      }).result;
      const outcomePromise = result.then(
        () => status.OK,
        (err: { code: number }) => err.code,
      );
      await jest.runAllTimersAsync();
      const outcome = await outcomePromise;
      expect(outcome).toBe(succeeds ? status.OK : status.DEADLINE_EXCEEDED);
      expect(fake.calls.length).toBeGreaterThanOrEqual(1);
      expect(fake.calls.length).toBeLessThanOrEqual(2);
    } finally {
      jest.useRealTimers();
    }
  },
);

test('stalled credential recovery reports a logical deadline in result and status', async () => {
  jest.useFakeTimers();
  try {
    const fake = sdkWith((_req, _md, cb) => cb(grpcError(status.UNAUTHENTICATED)), {
      authenticator: () => ({
        authenticate: async (md) => {
          md.set('authorization', 'Bearer old');
        },
        handleError: () => new Promise<boolean>(() => {}),
      }),
    });
    const request = getRequest(fake.sdk, undefined, { AuthTimeout: 50 });
    const assertion = expect(request.result).rejects.toMatchObject({
      code: status.DEADLINE_EXCEEDED,
    });
    await jest.runAllTimersAsync();
    await assertion;
    expect((await request.status).code).toBe(status.DEADLINE_EXCEEDED);
  } finally {
    jest.useRealTimers();
  }
});

test.each([
  { stage: 'initial', authTimeout: 50, callerTimeout: 5000 },
  { stage: 'recovery', authTimeout: 50, callerTimeout: 5000 },
  { stage: 'initial', authTimeout: 5000, callerTimeout: 50 },
  { stage: 'recovery', authTimeout: 5000, callerTimeout: 50 },
])(
  '$stage authentication uses the earlier AuthTimeout ($authTimeout) or caller deadline ($callerTimeout)',
  async ({ stage, authTimeout, callerTimeout }) => {
    jest.useFakeTimers();
    try {
      const fake = sdkWith((_req, _md, cb) => cb(grpcError(status.UNAUTHENTICATED)), {
        authenticator: () => ({
          authenticate: async (md) => {
            if (stage === 'initial') await new Promise<void>(() => {});
            md.set('authorization', 'Bearer old');
          },
          handleError: () => new Promise<boolean>(() => {}),
        }),
      });
      const request = getRequest(fake.sdk, undefined, {
        AuthTimeout: authTimeout,
        deadline: new Date(Date.now() + callerTimeout),
      });
      let outcome: unknown;
      void request.result.then(
        (value) => {
          outcome = value;
        },
        (error: unknown) => {
          outcome = error;
        },
      );
      await jest.advanceTimersByTimeAsync(Math.min(authTimeout, callerTimeout));
      expect(outcome).toMatchObject({ code: status.DEADLINE_EXCEEDED });
      expect((await request.status).code).toBe(status.DEADLINE_EXCEEDED);
      expect(fake.calls).toHaveLength(stage === 'recovery' ? 1 : 0);
    } finally {
      jest.useRealTimers();
    }
  },
);

test('credential recovery failures preserve the original RPC error and final status', async () => {
  const original = grpcError(status.UNAUTHENTICATED);
  const recovery = new Error('credential source unavailable');
  const fake = sdkWith((_req, _md, cb) => cb(original), {
    authenticator: () => ({
      authenticate: async (md) => {
        md.set('authorization', 'Bearer old');
      },
      handleError: async () => {
        throw recovery;
      },
    }),
  });
  const request = getRequest(fake.sdk);
  const failure = await request.result.catch((error: unknown) => error);
  expect(failure).toBeInstanceOf(AggregateError);
  expect((failure as AggregateError).errors).toEqual([recovery, original]);
  expect((await request.status).code).toBe(status.UNAUTHENTICATED);
  expect(fake.calls).toHaveLength(1);
});

test('file token recovery preserves a failed refresh and the rejected authorization', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-file-recovery-'));
  const path = join(directory, 'token');
  try {
    await writeFile(path, 'old');
    const receiver = new FileBearer(path).receiver();
    await receiver.fetch();
    await rm(path);
    const original = grpcError(status.UNAUTHENTICATED);
    const failure = await receiver.handleError(original).catch((error: unknown) => error);
    expect(failure).toBeInstanceOf(AggregateError);
    expect((failure as AggregateError).errors[0]).toHaveProperty('code', 'ENOENT');
    expect((failure as AggregateError).errors[1]).toBe(original);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('IMDS token recovery preserves a failed refresh and the rejected authorization', async () => {
  const recovery = new Error('IMDS unavailable');
  const fetcher = jest.fn(async (): Promise<Response> => {
    throw recovery;
  });
  fetcher.mockResolvedValueOnce(
    new Response(JSON.stringify({ access_token: 'old' }), { status: 200 }),
  );
  const receiver = new IMDSBearer('http://metadata.example/token', {
    fetch: fetcher,
    maxAttempts: 1,
  }).receiver();
  await receiver.fetch();
  const original = grpcError(status.UNAUTHENTICATED);
  const failure = await receiver.handleError(original).catch((error: unknown) => error);
  expect(failure).toBeInstanceOf(AggregateError);
  expect((failure as AggregateError).errors).toEqual([recovery, original]);
});

test('a credential source timeout at the logical deadline remains DEADLINE_EXCEEDED', async () => {
  jest.useFakeTimers();
  try {
    const fake = sdkWith((_req, _md, cb) => cb(grpcError(status.UNAUTHENTICATED)), {
      authenticator: () => ({
        authenticate: async (md) => {
          md.set('authorization', 'Bearer old');
        },
        handleError: async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
          throw new DOMException('Credential request aborted', 'AbortError');
        },
      }),
    });
    const request = getRequest(fake.sdk, undefined, { AuthTimeout: 50 });
    const assertion = expect(request.result).rejects.toMatchObject({
      code: status.DEADLINE_EXCEEDED,
    });
    await jest.runAllTimersAsync();
    await assertion;
    expect((await request.status).code).toBe(status.DEADLINE_EXCEEDED);
  } finally {
    jest.useRealTimers();
  }
});

test('an initial credential source abort at the logical deadline is DEADLINE_EXCEEDED', async () => {
  jest.useFakeTimers();
  try {
    const fake = sdkWith(
      () => {
        throw new Error('RPC must not dispatch');
      },
      {
        authenticator: () => ({
          authenticate: async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            throw new DOMException('Credential request aborted', 'AbortError');
          },
        }),
      },
    );
    const request = getRequest(fake.sdk, undefined, { AuthTimeout: 50 });
    const assertion = expect(request.result).rejects.toMatchObject({
      code: status.DEADLINE_EXCEEDED,
    });
    await jest.runAllTimersAsync();
    await assertion;
    expect((await request.status).code).toBe(status.DEADLINE_EXCEEDED);
    expect(fake.calls).toHaveLength(0);
  } finally {
    jest.useRealTimers();
  }
});

test('forced renewable token reacquisition preserves the refresh failure and rejected RPC', async () => {
  const original = grpcError(status.UNAUTHENTICATED);
  const recovery = new Error('token renewal failed');
  const token = new Token('old');
  const source = new StaticBearer(token);
  const receiver = source.receiver();
  const fetch = jest.spyOn(receiver, 'fetch').mockRejectedValue(recovery);
  fetch.mockResolvedValueOnce(token);
  jest.spyOn(source, 'receiver').mockReturnValue(receiver);
  const bearer = new RenewableBearer(source, { initialRetryTimeoutMs: 60000 });
  const fake = sdkWith((_req, _md, cb) => cb(original), new TokenProvider(bearer));
  try {
    const request = getRequest(fake.sdk);
    const failure = await request.result.catch((error: unknown) => error);
    expect(failure).toBeInstanceOf(AggregateError);
    expect((failure as AggregateError).errors).toEqual([recovery, original]);
    expect((await request.status).code).toBe(status.UNAUTHENTICATED);
    expect(fake.calls).toHaveLength(1);
    expect(fetch.mock.calls.length).toBeGreaterThanOrEqual(2);
  } finally {
    await bearer.close();
  }
});

test('initial credential retries do not consume server-rejection recovery', async () => {
  let acquisitions = 0;
  const handleError = jest.fn(async () => true);
  const initialError = new Error('temporary token acquisition failure');
  const fake = sdkWith(
    (_req, md, cb) =>
      md.get('authorization')[0] === 'Bearer old'
        ? cb(grpcError(status.UNAUTHENTICATED))
        : cb(null, Disk.create()),
    {
      authenticator: () => ({
        authenticate: async (md) => {
          if (++acquisitions === 1) throw initialError;
          md.set('authorization', acquisitions === 2 ? 'Bearer old' : 'Bearer new');
        },
        canRetry: (error) => error === initialError,
        handleError,
      }),
    },
  );
  await expect(getRequest(fake.sdk).result).resolves.toMatchObject({ $type: Disk.$type });
  expect(acquisitions).toBe(3);
  expect(handleError).toHaveBeenCalledTimes(1);
  expect(fake.calls).toHaveLength(2);
});

test.each(['memory', 'file'] as const)(
  '%s renewable acquisition retries leave server-rejection recovery available',
  async (cache) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-recovery-budget-'));
    const source = new StaticBearer(new Token('unused'));
    const receiver = source.receiver();
    const fetch = jest
      .spyOn(receiver, 'fetch')
      .mockRejectedValueOnce(new Error('temporary token acquisition failure'))
      .mockResolvedValueOnce(new Token('old'))
      .mockResolvedValue(new Token('new'));
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const bearer =
      cache === 'memory'
        ? new RenewableBearer(source)
        : new AsyncRenewableBearer(new NamedBearer(source, 'review-recovery'), {
            cacheFilePath: join(directory, 'tokens.json'),
          });
    const fake = sdkWith(
      (_req, md, cb) =>
        md.get('authorization')[0] === 'Bearer old'
          ? cb(grpcError(status.UNAUTHENTICATED))
          : cb(null, Disk.create()),
      new TokenProvider(bearer),
    );
    jest.useFakeTimers({ doNotFake: ['setImmediate'] });
    try {
      await expect(
        getRequest(fake.sdk, undefined, {
          authorizationOptions: { renewSynchronous: true },
        }).result,
      ).resolves.toMatchObject({ $type: Disk.$type });
      expect(fetch).toHaveBeenCalledTimes(3);
      expect(fake.calls.map(({ md }) => md.get('authorization')[0])).toEqual([
        'Bearer old',
        'Bearer new',
      ]);
      expect(fake.calls[1].md.get('x-idempotency-key')).toEqual(
        fake.calls[0].md.get('x-idempotency-key'),
      );
    } finally {
      try {
        await bearer.close();
        await rm(directory, { recursive: true, force: true });
      } finally {
        jest.useRealTimers();
      }
    }
  },
);

test('initial authentication rejecting without an error still reports UNAUTHENTICATED', async () => {
  const fake = sdkWith(
    () => {
      throw new Error('RPC must not dispatch');
    },
    {
      authenticator: () => ({ authenticate: async () => Promise.reject(undefined) }),
    },
  );
  const request = getRequest(fake.sdk);
  await expect(request.result).rejects.toMatchObject({
    code: status.UNAUTHENTICATED,
    details: 'Authentication failed.',
  });
  expect((await request.status).code).toBe(status.UNAUTHENTICATED);
  expect(fake.calls).toHaveLength(0);
});

test.each(['memory', 'file'] as const)(
  '%s asynchronous token acquisition reports source failures without an unhandled rejection',
  async (cache) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-renewal-failure-'));
    const failure = new Error('token source unavailable');
    const source = new StaticBearer(new Token('unused'));
    const receiver = source.receiver();
    jest.spyOn(receiver, 'fetch').mockRejectedValue(failure);
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const bearer =
      cache === 'memory'
        ? new RenewableBearer(source, { initialRetryTimeoutMs: 60000 })
        : new AsyncRenewableBearer(new NamedBearer(source, 'failed-source'), {
            cacheFilePath: join(directory, 'tokens.json'),
            initialRetryTimeoutMs: 60000,
          });
    try {
      await expect(bearer.fetch(1000)).rejects.toBe(failure);
      await new Promise<void>((resolve) => setImmediate(resolve));
    } finally {
      await bearer.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);

test('named credentials select each RPC identity and allow explicitly unauthenticated calls', async () => {
  const provider = new OneOfProvider({
    first: new TokenProvider(new StaticBearer('first')),
    second: new TokenProvider(new StaticBearer('second')),
    anonymous: null,
  });
  const fake = sdkWith((_req, _md, cb) => cb(null, Disk.create()), provider);
  for (const selector of ['first', 'second', 'anonymous']) {
    await getRequest(fake.sdk, undefined, { authorizationOptions: { selector } }).result;
  }
  expect(fake.calls.map(({ md }) => md.get('authorization'))).toEqual([
    ['Bearer first'],
    ['Bearer second'],
    [],
  ]);
  await expect(getRequest(fake.sdk).result).rejects.toThrow('Missing authorization selector');
  await expect(
    getRequest(fake.sdk, undefined, { authorizationOptions: { selector: 'unknown' } }).result,
  ).rejects.toThrow('Unknown authorization selector');
  expect(fake.calls).toHaveLength(3);
});

test('credential selectors reject empty and nested maps and close every unique source', async () => {
  expect(() => new OneOfProvider({})).toThrow('At least one');
  const failure = new Error('close failed');
  const first = {
    authenticator: () => ({ authenticate: async () => {} }),
    close: jest.fn(async () => {
      throw failure;
    }),
  };
  const second = {
    authenticator: () => ({ authenticate: async () => {} }),
    close: jest.fn(async () => {}),
  };
  const provider = new OneOfProvider({ first, same: first, second });
  expect(() => new OneOfProvider({ nested: provider })).toThrow('Nested');
  await expect(provider.close(10)).rejects.toMatchObject({ errors: [failure] });
  expect(first.close).toHaveBeenCalledTimes(1);
  expect(second.close).toHaveBeenCalledWith(10);
});

test('an explicit empty token cannot fall through to another identity', () => {
  const fallback = { authenticator: jest.fn() };
  const configReader = {
    endpoint: () => undefined,
    parentId: () => undefined,
    profileName: () => 'test',
    getCredentials: jest.fn(() => 'other-token'),
  };
  expect(
    () =>
      new SDK({
        credentials: '',
        authorizationProvider: fallback,
        configReader,
        userAgentPrefix: 'parity-test/1',
      }),
  ).toThrow('empty token provided');
  expect(fallback.authenticator).not.toHaveBeenCalled();
  expect(configReader.getCredentials).not.toHaveBeenCalled();
});

test.each([
  ['exchange', 0],
  ['exchange', -1],
  ['impersonation', 0],
  ['impersonation', -1],
] as const)('%s preserves expired token lifetime %s', async (source, lifetime) => {
  const fake = sdkWith((_req, _md, cb) =>
    cb(
      null,
      CreateTokenResponse.create({
        accessToken: 'expired',
        tokenType: 'Bearer',
        expiresIn: Long.fromNumber(lifetime),
      }),
    ),
  );
  const bearer =
    source === 'exchange'
      ? new ExchangeableBearer(
          { getExchangeTokenRequest: () => ExchangeTokenRequest.create() },
          fake.sdk,
        )
      : new ImpersonatedBearer('serviceaccount', new StaticBearer('actor'), fake.sdk);
  try {
    const token = await bearer.receiver().fetch(1000);
    expect(token.expiration).toBeInstanceOf(Date);
    expect(token.expiration!.getTime()).toBeLessThanOrEqual(Date.now());
    expect(token.isExpired()).toBe(true);
  } finally {
    await bearer.close();
  }
});

test.each(['acquired', 'cached'] as const)(
  'synchronous file cache recovers a rotated %s token',
  async (origin) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-sync-cache-'));
    const tokenFile = join(directory, 'token');
    await writeFile(tokenFile, 'old');
    const bearer = new RenewableFileCacheBearer(
      new NamedBearer(new FileBearer(tokenFile), 'identity'),
      0,
      join(directory, 'cache.json'),
    );
    try {
      let receiver = bearer.receiver();
      expect((await receiver.fetch(1000)).token).toBe('old');
      if (origin === 'cached') receiver = bearer.receiver();
      expect((await receiver.fetch(1000)).token).toBe('old');
      await writeFile(tokenFile, 'new');
      expect(await receiver.handleError(grpcError(status.UNAUTHENTICATED), undefined, 1000)).toBe(
        true,
      );
      expect((await receiver.fetch(1000)).token).toBe('new');
    } finally {
      await bearer.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);

test('forced file-cache renewal bypasses cached credentials and forwards acquisition options', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-sync-force-'));
  const source = new StaticBearer('unused');
  const sourceReceiver = source.receiver();
  const fetch = jest
    .spyOn(sourceReceiver, 'fetch')
    .mockResolvedValueOnce(new Token('old'))
    .mockResolvedValue(new Token('new'));
  jest.spyOn(source, 'receiver').mockReturnValue(sourceReceiver);
  const bearer = new RenewableFileCacheBearer(
    new NamedBearer(source, 'identity'),
    0,
    join(directory, 'cache.json'),
  );
  try {
    const receiver = bearer.receiver();
    expect((await receiver.fetch(1000)).token).toBe('old');
    const options = { renewRequired: true, renewSynchronous: true };
    expect((await receiver.fetch(1000, options)).token).toBe('new');
    expect(fetch).toHaveBeenLastCalledWith(1000, options);
  } finally {
    await bearer.close();
    await rm(directory, { recursive: true, force: true });
  }
});

test.each(['synchronous', 'asynchronous'] as const)(
  '%s shared cache retries with externally recovered credentials while source is unavailable',
  async (kind) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-shared-recovery-'));
    const cacheFile = join(directory, 'tokens.yaml');
    const cache = new TokenCache({ cacheFile });
    await cache.set('identity', new Token('old'));
    const source = new StaticBearer('unused');
    const receiver = source.receiver();
    const fetch = jest.spyOn(receiver, 'fetch').mockRejectedValue(new Error('source unavailable'));
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const named = new NamedBearer(source, 'identity');
    const bearer =
      kind === 'synchronous'
        ? new RenewableFileCacheBearer(named, 0, cacheFile)
        : new AsyncRenewableBearer(named, { cacheFilePath: cacheFile, initialSafetyMarginMs: 0 });
    const fake = sdkWith(async (_req, md, cb) => {
      if (md.get('authorization')[0] === 'Bearer old') {
        await cache.set('identity', new Token('new'));
        cb(grpcError(status.UNAUTHENTICATED));
      } else cb(null, Disk.create());
    }, new TokenProvider(bearer));
    try {
      await getRequest(fake.sdk).result;
      expect(fake.calls.map(({ md }) => md.get('authorization')[0])).toEqual([
        'Bearer old',
        'Bearer new',
      ]);
      expect(fetch).not.toHaveBeenCalled();
    } finally {
      await bearer.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);

test.each(['synchronous', 'asynchronous'] as const)(
  '%s shared cache acquires a replacement when the rejected entry is unchanged',
  async (kind) => {
    const directory = await mkdtemp(join(tmpdir(), 'sdk-shared-source-recovery-'));
    const cacheFile = join(directory, 'tokens.yaml');
    await new TokenCache({ cacheFile }).set('identity', new Token('old'));
    const source = new StaticBearer('unused');
    const receiver = source.receiver();
    const fetch = jest.spyOn(receiver, 'fetch').mockResolvedValue(new Token('new'));
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const named = new NamedBearer(source, 'identity');
    const bearer =
      kind === 'synchronous'
        ? new RenewableFileCacheBearer(named, 0, cacheFile)
        : new AsyncRenewableBearer(named, { cacheFilePath: cacheFile, initialSafetyMarginMs: 0 });
    const fake = sdkWith((_req, md, cb) => {
      if (md.get('authorization')[0] === 'Bearer old') cb(grpcError(status.UNAUTHENTICATED));
      else cb(null, Disk.create());
    }, new TokenProvider(bearer));
    try {
      await getRequest(fake.sdk).result;
      expect(fake.calls.map(({ md }) => md.get('authorization')[0])).toEqual([
        'Bearer old',
        'Bearer new',
      ]);
      expect(fetch).toHaveBeenCalledTimes(1);
    } finally {
      await bearer.close();
      await rm(directory, { recursive: true, force: true });
    }
  },
);

test.each(['exchange', 'impersonation'] as const)(
  '%s acquisition bounds deferred SDK resolution',
  async (kind) => {
    jest.useFakeTimers();
    const sdk = new Promise<SDKInterface>(() => {});
    const bearer =
      kind === 'exchange'
        ? new ExchangeableBearer(
            { getExchangeTokenRequest: () => ExchangeTokenRequest.create() },
            sdk,
          )
        : new ImpersonatedBearer('serviceaccount', new StaticBearer('actor'), sdk);
    try {
      const assertion = expect(bearer.receiver().fetch(100)).rejects.toBeInstanceOf(TimeoutError);
      await jest.advanceTimersByTimeAsync(100);
      await assertion;
    } finally {
      await bearer.close();
      jest.useRealTimers();
    }
  },
);

test.each(['initial', 'recovery'] as const)(
  'impersonation %s stages share one acquisition deadline',
  async (phase) => {
    jest.useFakeTimers();
    const source = new StaticBearer('actor');
    const receiver = source.receiver();
    const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
    jest.spyOn(receiver, 'fetch').mockImplementation(async () => {
      await delay(phase === 'initial' ? 80 : 20);
      return new Token('actor');
    });
    const recovery = jest.spyOn(receiver, 'handleError').mockImplementation(async () => {
      await delay(70);
      return true;
    });
    jest.spyOn(source, 'receiver').mockReturnValue(receiver);
    const exchange = jest.spyOn(TokenExchangeService.prototype, 'exchange').mockImplementation(
      () =>
        ({
          result:
            phase === 'recovery' && exchange.mock.calls.length === 1
              ? Promise.reject(grpcError(status.UNAUTHENTICATED))
              : new Promise(() => {}),
        }) as unknown as Request<ExchangeTokenRequest, CreateTokenResponse>,
    );
    const fake = sdkWith(() => {});
    const bearer = new ImpersonatedBearer('serviceaccount', source, fake.sdk);
    try {
      const assertion = expect(bearer.receiver().fetch(100)).rejects.toBeInstanceOf(TimeoutError);
      await jest.advanceTimersByTimeAsync(100);
      await assertion;
      expect(exchange).toHaveBeenCalledTimes(1);
      expect(recovery).toHaveBeenCalledTimes(phase === 'recovery' ? 1 : 0);
    } finally {
      exchange.mockRestore();
      await bearer.close();
      jest.useRealTimers();
    }
  },
);

test('file-cache recovery forces a wrapped renewable source to supply fresh credentials', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-sync-recovery-'));
  const source = new StaticBearer('unused');
  const receiver = source.receiver();
  jest
    .spyOn(receiver, 'fetch')
    .mockImplementation(
      async (_timeout, options) => new Token(options?.renewSynchronous ? 'new' : 'old'),
    );
  jest.spyOn(receiver, 'handleError').mockResolvedValue(true);
  jest.spyOn(receiver, 'latest', 'get').mockReturnValue(new Token('old'));
  jest.spyOn(source, 'receiver').mockReturnValue(receiver);
  const bearer = new RenewableFileCacheBearer(
    new NamedBearer(source, 'identity'),
    0,
    join(directory, 'cache.json'),
  );
  try {
    const cached = bearer.receiver();
    expect((await cached.fetch()).token).toBe('old');
    expect(await cached.handleError(grpcError(status.UNAUTHENTICATED))).toBe(true);
    expect((await cached.fetch()).token).toBe('new');
  } finally {
    await bearer.close();
    await rm(directory, { recursive: true, force: true });
  }
});

test.each(['pending', 'completed', 'missing', 'empty', 'unknown', 'malformed'] as const)(
  'alpha resource snapshot decoding: %s',
  (kind) => {
    const payload =
      kind === 'missing'
        ? undefined
        : kind === 'empty'
          ? { typeUrl: 'type.googleapis.com/google.protobuf.Empty', value: new Uint8Array() }
          : kind === 'unknown'
            ? { typeUrl: 'type.googleapis.com/unknown.Resource', value: new Uint8Array() }
            : kind === 'malformed'
              ? { typeUrl: `type.googleapis.com/${Disk.$type}`, value: Uint8Array.of(255) }
              : protoRegistry.pack(Disk.create());
    const raw = AlphaOperationProto.create({
      id: 'op',
      createdAt: dayjs(0),
      resource: payload,
      status: kind === 'completed' ? Status.create() : undefined,
    });
    const operation = new Operation(
      raw as unknown as GenericOperation,
      { get: jest.fn() },
      new Logger(),
    );
    expect(operation.raw().resource).toBe(raw.resource);
    expect(operation.resource()?.$type).toBe(
      kind === 'pending' || kind === 'completed' ? Disk.$type : undefined,
    );
  },
);

test.each([
  ['Timestamp', [10, 0], '1970-01-01T00:00:12Z'],
  ['Duration', [10, 0], '12s'],
  ['Any', [8, 0], { typeUrl: 'type.googleapis.com/test.Message', value: Uint8Array.of(1) }],
  ['FieldMask', [8, 0], ['resource.name']],
  ['Struct', [8, 0], { keep: 'yes' }],
  ['ListValue', [8, 0], ['keep']],
  ['Value', [24, 0], 'keep'],
])(
  'native %s ignores mismatching wire types without changing merge state',
  (name, bytes, original) => {
    const codec = wkt[`.google.protobuf.${name}` as keyof typeof wkt] as unknown as {
      readMessage(reader: BinaryReader, length: number, base?: unknown): unknown;
      fromJSON(value: unknown): unknown;
      toJSON(value: unknown): unknown;
    };
    const base = name === 'Any' ? original : codec.fromJSON(original);
    const data = Uint8Array.from(bytes as number[]);
    expect(codec.toJSON(codec.readMessage(new BinaryReader(data), data.length, base))).toEqual(
      codec.toJSON(base),
    );
  },
);

test('nested native Struct and Value readers validate map keys and value tags', () => {
  const writer = new BinaryWriter();
  const entry = writer.uint32(10).fork();
  entry.uint32(10).string('item').uint32(8).uint32(0);
  entry.uint32(18).fork().uint32(26).string('keep').uint32(24).uint32(0).join();
  entry.join();
  const struct = writer.finish();
  const nested = new BinaryWriter().uint32(42).bytes(struct).finish();
  expect(
    wkt['.google.protobuf.Struct'].readMessage(new BinaryReader(struct), struct.length),
  ).toEqual({ item: 'keep' });
  expect(
    wkt['.google.protobuf.Value'].readMessage(new BinaryReader(nested), nested.length),
  ).toEqual({ item: 'keep' });
});

test('nested native lists and Struct unknown fields skip mismatching and unknown tags', () => {
  const list = new BinaryWriter()
    .uint32(50)
    .fork()
    .uint32(10)
    .bytes(new BinaryWriter().uint32(26).string('keep').finish())
    .uint32(8)
    .uint32(0)
    .join()
    .finish();
  expect(wkt['.google.protobuf.Value'].readMessage(new BinaryReader(list), list.length)).toEqual([
    'keep',
  ]);
  const struct = new BinaryWriter()
    .uint32(42)
    .bytes(Uint8Array.of(18, 1, 255))
    .finish();
  expect(
    wkt['.google.protobuf.Value'].readMessage(new BinaryReader(struct), struct.length, {
      keep: 'yes',
    }),
  ).toEqual({ keep: 'yes' });
});
