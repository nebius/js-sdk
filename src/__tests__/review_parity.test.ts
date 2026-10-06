import { generateKeyPairSync } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { Metadata, Server, ServerCredentials, status } from '@grpc/grpc-js';

import { FieldDescriptorProto, FieldOptions } from '../api/google/protobuf/index.js';
import { Status } from '../api/google/rpc/index.js';
import { DevlabSpec_Template } from '../api/nebius/ai/v1/index.js';
import { CapacityAllowanceSpec } from '../api/nebius/capacity/v1/index.js';
import {
  GetOperationRequest,
  ListOperationsRequest,
  ListOperationsResponse,
  Operation as OperationProto,
  OperationService,
  OperationServiceServiceDescription,
  ResourceMetadata,
  ServiceError,
  ServiceError_RetryType,
} from '../api/nebius/common/v1/index.js';
import {
  BatchGetResponse,
  CreateDiskRequest,
  Disk,
  DiskSpec,
  GetDiskRequest,
  ListDisksResponse,
} from '../api/nebius/compute/v1/index.js';
import { FieldBehavior } from '../api/nebius/index.js';
import {
  DeleteBucketRequest,
  LifecycleAccessFilter_Condition,
} from '../api/nebius/storage/v1/index.js';
import { protoRegistry } from '../api/protobuf.js';
import { Config } from '../runtime/cli_config.js';
import { Operation, OperationValidationError } from '../runtime/operation.js';
import {
  filterWithSelectMask,
  getAtFieldPath,
  patchWithResetMask,
  replaceAtFieldPath,
  resetMaskFromModified,
} from '../runtime/protobuf_mask.js';
import {
  BinaryReader,
  BinaryWriter,
  dayjs,
  Long,
  unknownFieldsSymbol,
} from '../runtime/protos/core.js';
import { fmFromProtoJSON, fmToProtoJSON } from '../runtime/protos/fieldmask.js';
import {
  anyFromProtoJSON,
  anyToProtoJSON,
  fromProtoJSON,
  toProtoJSON,
} from '../runtime/protos/proto_json.js';
import { wkt } from '../runtime/protos/wkt.js';
import { Basic } from '../runtime/resolver.js';
import { NamedBearer, Token } from '../runtime/token.js';
import { AsyncRenewableBearer } from '../runtime/token/file_cache/async_renewable_bearer.js';
import { TokenCache } from '../runtime/token/file_cache/token_cache.js';
import { ServiceAccountBearer } from '../runtime/token/service_account.js';
import { StaticBearer } from '../runtime/token/static.js';
import { Logger } from '../runtime/util/logging.js';
import { SDK } from '../sdk.js';

function concat(...parts: Uint8Array[]): Uint8Array {
  return new Uint8Array(Buffer.concat(parts));
}

describe('reviewed SDK parity edge cases', () => {
  test.each([
    [1, -1],
    [-1, 1],
    [0, 1000000000],
    [0, -1000000000],
    [315576000001, 0],
  ])('canonical JSON rejects raw Duration seconds=%s nanos=%s', (seconds, nanos) => {
    const value = new BinaryWriter().uint32(8).int64(seconds).uint32(16).int32(nanos).finish();
    const any = { typeUrl: 'type.googleapis.com/google.protobuf.Duration', value };
    expect(() => anyToProtoJSON(any, protoRegistry)).toThrow('Invalid protobuf Duration.');
    expect(() => toProtoJSON(Status, Status.create({ details: [any] }), protoRegistry)).toThrow(
      'Invalid protobuf Duration.',
    );
    const duration = wkt['.google.protobuf.Duration'].readMessage(
      new BinaryReader(value),
      value.length,
    );
    const request = DeleteBucketRequest.create({ purge: { $case: 'ttl', ttl: duration } });
    expect(() => toProtoJSON(DeleteBucketRequest, request, protoRegistry)).toThrow(
      'Invalid protobuf Duration.',
    );
    expect(DeleteBucketRequest.toJSON(request)).toEqual(
      expect.objectContaining({ ttl: wkt['.google.protobuf.Duration'].toJSON(duration) }),
    );
    for (const valid of ['1.001s', '-1.001s']) {
      expect(
        anyToProtoJSON(
          anyFromProtoJSON({ '@type': any.typeUrl, value: valid }, protoRegistry),
          protoRegistry,
        ),
      ).toEqual({ '@type': any.typeUrl, value: valid });
    }
  });

  test('ignoring unknown enum names preserves repeated-field shape validation', () => {
    expect(() =>
      fromProtoJSON(LifecycleAccessFilter_Condition, { methods: 'FUTURE_METHOD' }, protoRegistry, {
        ignoreUnknownFields: true,
      }),
    ).toThrow(TypeError);
    expect(
      fromProtoJSON(
        LifecycleAccessFilter_Condition,
        { methods: ['FUTURE_METHOD'] },
        protoRegistry,
        { ignoreUnknownFields: true },
      ).methods,
    ).toEqual([]);
  });

  test.each(['get', 'list'] as const)(
    'generated operation %s retains validation errors over gRPC',
    async (method) => {
      const server = new Server();
      const malformed = OperationProto.create({ id: '' });
      server.addService(OperationServiceServiceDescription, {
        get: (_call: unknown, callback: (err: null, response: OperationProto) => void) =>
          callback(null, malformed),
        list: (_call: unknown, callback: (err: null, response: ListOperationsResponse) => void) =>
          callback(null, ListOperationsResponse.create({ operations: [malformed] })),
      });
      const port = await new Promise<number>((resolve, reject) => {
        server.bindAsync('127.0.0.1:0', ServerCredentials.createInsecure(), (error, boundPort) =>
          error ? reject(error) : resolve(boundPort),
        );
      });
      const sdk = new SDK({
        insecure: true,
        resolver: new Basic('nebius.common.v1.OperationService', `127.0.0.1:${port}`),
      });
      try {
        const service = new OperationService(sdk, `127.0.0.1:${port}`);
        const options = { authorizationDisable: true, RetryCount: 0 };
        const request =
          method === 'get'
            ? service.get(GetOperationRequest.create({ id: 'op' }), new Metadata(), options)
            : service.list(ListOperationsRequest.create(), new Metadata(), options);
        const error = await request.result.catch((error: unknown) => error);
        expect(error).toBeInstanceOf(OperationValidationError);
        expect((error as OperationValidationError).operation.id).toBe('');
        expect((await request.status).code).toBe(status.INTERNAL);
      } finally {
        await sdk.close();
        server.forceShutdown();
      }
    },
  );

  test('field replacement rejects incompatible generated values without mutating its input', () => {
    const spec = DiskSpec.create({
      forbidDeletion: true,
      size: { $case: 'sizeBytes', sizeBytes: Long.fromNumber(12) },
    });
    expect(() => replaceAtFieldPath(DiskSpec, spec, 'forbid_deletion', 'true')).toThrow(TypeError);
    expect(() => replaceAtFieldPath(DiskSpec, spec, 'size_bytes', '42')).toThrow(TypeError);
    expect(() => replaceAtFieldPath(DiskSpec, spec, 'size_bytes', 42)).toThrow(TypeError);
    expect(
      (
        getAtFieldPath(
          replaceAtFieldPath(DiskSpec, spec, 'size_bytes', Long.fromNumber(42)),
          'size_bytes',
        ) as Long
      ).toNumber(),
    ).toBe(42);
    expect(replaceAtFieldPath(DiskSpec, spec, 'forbid_deletion', undefined).forbidDeletion).toBe(
      false,
    );
    const disk = Disk.create({ metadata: ResourceMetadata.create({ name: 'old' }) });
    expect(() => replaceAtFieldPath(Disk, disk, 'metadata.name', 7)).toThrow(TypeError);
    expect(() => replaceAtFieldPath(Disk, disk, 'metadata', spec)).toThrow(TypeError);
    const list = ListDisksResponse.create({ items: [disk] });
    expect(() => replaceAtFieldPath(ListDisksResponse, list, 'items', [spec])).toThrow(TypeError);
    expect(() => replaceAtFieldPath(ListDisksResponse, list, 'items.0', spec)).toThrow(TypeError);
    expect(spec.forbidDeletion).toBe(true);
    expect((getAtFieldPath(spec, 'size_bytes') as Long).toNumber()).toBe(12);
    expect(disk.metadata?.name).toBe('old');
  });

  test('singular message extension wire occurrences merge repeated fields', () => {
    const first = FieldOptions.create({ nid: { resource: ['computedisk'] } });
    const second = FieldOptions.create({ nid: { parentResource: ['project'] } });
    const merged = FieldOptions.decode(
      concat(FieldOptions.encode(first).finish(), FieldOptions.encode(second).finish()),
    );
    expect(merged.nid?.resource).toEqual(['computedisk']);
    expect(merged.nid?.parentResource).toEqual(['project']);
  });

  test('canonical temporal JSON uses protobuf fractional precision without changing legacy JSON', () => {
    const whole = ResourceMetadata.create({ createdAt: dayjs('2026-10-01T00:00:00Z') });
    expect(ResourceMetadata.toJSON(whole)).toMatchObject({ createdAt: '2026-10-01T00:00:00.000Z' });
    expect(toProtoJSON(ResourceMetadata, whole, protoRegistry)).toMatchObject({
      createdAt: '2026-10-01T00:00:00Z',
    });
    const fraction = ResourceMetadata.create({ createdAt: dayjs('2026-10-01T00:00:00.100Z') });
    expect(toProtoJSON(ResourceMetadata, fraction, protoRegistry)).toMatchObject({
      createdAt: '2026-10-01T00:00:00.100Z',
    });
    const request = DeleteBucketRequest.create({
      purge: { $case: 'ttl', ttl: dayjs.duration(100) },
    });
    expect(DeleteBucketRequest.toJSON(request)).toMatchObject({ ttl: '0.1s' });
    expect(toProtoJSON(DeleteBucketRequest, request, protoRegistry)).toMatchObject({
      ttl: '0.100s',
    });
    for (const [name, native, expected] of [
      ['Duration', dayjs.duration(-100), '-0.100s'],
      ['Timestamp', whole.createdAt!, '2026-10-01T00:00:00Z'],
    ] as const) {
      const codec = wkt[`.google.protobuf.${name}`];
      const writer = new BinaryWriter();
      // Each native codec accepts its own value representation.
      if (name === 'Duration') {
        wkt['.google.protobuf.Duration'].writeMessage(
          writer,
          native as ReturnType<typeof dayjs.duration>,
        );
      } else {
        wkt['.google.protobuf.Timestamp'].writeMessage(writer, native as ReturnType<typeof dayjs>);
      }
      expect(
        anyToProtoJSON(
          { typeUrl: `type.googleapis.com/${codec.$type}`, value: writer.finish() },
          protoRegistry,
        ),
      ).toMatchObject({ value: expected });
    }
  });

  test('typed partial construction retains message and unknown-enum extension values', () => {
    const original = FieldOptions.fromJSON({
      nid: { resource: ['computedisk'] },
      fieldBehavior: [12345],
      subfieldSettings: [{ fieldPath: 'metadata.parent_id' }],
    });
    const copy = FieldOptions.create(original);
    expect(copy.nid).toEqual(original.nid);
    expect(copy.nid).not.toBe(original.nid);
    expect(copy.fieldBehavior?.[0].code).toBe(12345);
    expect(copy.subfieldSettings).toEqual(original.subfieldSettings);
    expect(toProtoJSON(FieldOptions, copy, protoRegistry)).toMatchObject({
      '[nebius.nid]': { resource: ['computedisk'] },
      '[nebius.field_behavior]': [12345],
    });
  });

  test('canonical extension JSON preserves explicitly set defaults and nested presence', () => {
    const options = FieldOptions.fromJSON({ sensitive: false, credentials: false });
    const canonical = toProtoJSON(FieldOptions, options, protoRegistry);
    expect(canonical).toMatchObject({ '[nebius.sensitive]': false, '[nebius.credentials]': false });
    expect(fromProtoJSON(FieldOptions, canonical, protoRegistry).sensitive).toBe(false);
    const field = FieldDescriptorProto.create({ options });
    const nested = toProtoJSON(FieldDescriptorProto, field, protoRegistry);
    expect(nested).toMatchObject({ options: { '[nebius.sensitive]': false } });
    expect(fromProtoJSON(FieldDescriptorProto, nested, protoRegistry).options?.sensitive).toBe(
      false,
    );
    const packed = protoRegistry.pack(options);
    expect(anyToProtoJSON(packed, protoRegistry)).toMatchObject({ '[nebius.sensitive]': false });
    expect(anyFromProtoJSON(anyToProtoJSON(packed, protoRegistry), protoRegistry)).toEqual(packed);
    expect(FieldOptions.toJSON(options)).not.toHaveProperty('sensitive');
  });

  test('canonical JSON round-trips registered scalar, enum, and message extensions', () => {
    const message = FieldOptions.fromJSON({
      sensitive: true,
      fieldBehavior: ['IMMUTABLE'],
      nid: { resource: ['computedisk'], parentResource: ['project'] },
      subfieldSettings: [{ fieldPath: 'metadata.parent_id', nid: { resource: ['project'] } }],
    });
    const canonical = toProtoJSON(FieldOptions, message, protoRegistry);
    expect(canonical).toMatchObject({
      '[nebius.sensitive]': true,
      '[nebius.field_behavior]': ['IMMUTABLE'],
      '[nebius.nid]': { resource: ['computedisk'], parentResource: ['project'] },
      '[nebius.subfield_settings]': [
        { fieldPath: 'metadata.parent_id', nid: { resource: ['project'] } },
      ],
    });
    expect(canonical).not.toHaveProperty('nid');
    const parsed = fromProtoJSON(FieldOptions, canonical, protoRegistry);
    expect(parsed.nid).toEqual(message.nid);
    expect(parsed.fieldBehavior).toEqual([FieldBehavior.IMMUTABLE]);
    expect(parsed.subfieldSettings).toEqual(message.subfieldSettings);
    expect(FieldOptions.toJSON(message)).toHaveProperty('nid');
    expect(
      toProtoJSON(
        FieldOptions,
        fromProtoJSON(FieldOptions, { ...(canonical as object), unknown: 1 }, protoRegistry, {
          ignoreUnknownFields: true,
        }),
        protoRegistry,
      ),
    ).toEqual(canonical);
    const packed = protoRegistry.pack(message);
    const expanded = anyToProtoJSON(packed, protoRegistry);
    expect(expanded).toMatchObject({ '@type': packed.typeUrl, ...(canonical as object) });
    expect(anyFromProtoJSON(expanded, protoRegistry)).toEqual(packed);
    expect(() =>
      fromProtoJSON(FieldOptions, { '[nebius.sensitive]': 'true' }, protoRegistry),
    ).toThrow(TypeError);
    expect(() =>
      fromProtoJSON(FieldOptions, { '[nebius.field_behavior]': ['UNKNOWN'] }, protoRegistry),
    ).toThrow(TypeError);
  });

  test('field paths normalize numerical list indexes for reads, replacements, and appends', () => {
    const message = ListDisksResponse.create({
      items: [{ metadata: { name: 'first' } }, { metadata: { name: 'second' } }],
    });
    expect(getAtFieldPath(message, 'items.01.metadata.name')).toBe('second');
    const changed = replaceAtFieldPath(ListDisksResponse, message, 'items.01.metadata.name', 'new');
    expect(changed.items[1].metadata?.name).toBe('new');
    expect(message.items[1].metadata?.name).toBe('second');
    const appended = replaceAtFieldPath(
      ListDisksResponse,
      message,
      'items.02.metadata.name',
      'third',
    );
    expect(appended.items).toHaveLength(3);
    expect(appended.items[2].metadata?.name).toBe('third');
    expect(() => getAtFieldPath(message, 'items.02.metadata.name')).toThrow(RangeError);
    expect(() =>
      replaceAtFieldPath(ListDisksResponse, message, 'items.03', message.items[0]),
    ).toThrow(RangeError);
  });

  test.each(['\uD800', '\uDC00'])(
    'canonical parsing rejects unpaired-surrogate map keys (%s)',
    (key) => {
      expect(() =>
        fromProtoJSON(ResourceMetadata, { labels: { [key]: 'x' } }, protoRegistry),
      ).toThrow(TypeError);
      expect(() =>
        anyFromProtoJSON(
          { '@type': 'type.googleapis.com/google.protobuf.Struct', value: { [key]: 1 } },
          protoRegistry,
        ),
      ).toThrow(TypeError);
      expect(() =>
        anyFromProtoJSON(
          { '@type': 'type.googleapis.com/google.protobuf.ListValue', value: [{ [key]: 1 }] },
          protoRegistry,
        ),
      ).toThrow(TypeError);
      expect(() =>
        fromProtoJSON(
          DevlabSpec_Template,
          { inputFieldValues: { nested: { [key]: 1 } } },
          protoRegistry,
        ),
      ).toThrow(TypeError);
    },
  );

  test('canonical parsing preserves valid supplementary Unicode map keys', () => {
    const labels = fromProtoJSON(ResourceMetadata, { labels: { '😀': 'x' } }, protoRegistry);
    expect(ResourceMetadata.decode(ResourceMetadata.encode(labels).finish()).labels).toEqual({
      '😀': 'x',
    });
    const any = anyFromProtoJSON(
      { '@type': 'type.googleapis.com/google.protobuf.Struct', value: { '😀': 1 } },
      protoRegistry,
    );
    expect(anyToProtoJSON(any, protoRegistry)).toEqual({
      '@type': 'type.googleapis.com/google.protobuf.Struct',
      value: { '😀': 1 },
    });
  });

  test('select masks preserve encodable default placeholders for repeated Any values', () => {
    const message = Status.create({
      details: [
        { typeUrl: 'first', value: new Uint8Array([1]) },
        { typeUrl: 'second', value: new Uint8Array([2]) },
      ],
    });
    const filtered = filterWithSelectMask(Status, message, 'details.1');
    expect(filtered.details).toEqual([
      { typeUrl: '', value: new Uint8Array() },
      message.details[1],
    ]);
    expect(Status.decode(Status.encode(filtered).finish())).toEqual(filtered);
    expect(Status.toJSON(filtered)).toMatchObject({
      details: [
        { typeUrl: '', value: '' },
        { typeUrl: 'second', value: 'Ag==' },
      ],
    });
    expect(filterWithSelectMask(Status, message, 'details.1', true).details).toEqual([
      message.details[1],
    ]);
  });

  test.each([false, true])(
    'synchronous renewal clears its timeout after settlement (failed=%s)',
    async (failed) => {
      const dir = await mkdtemp(join(tmpdir(), 'sdk-review-renewal-'));
      const token = new Token('renewed', new Date(Date.now() + 60_000));
      const source = new StaticBearer(token);
      const renewalFailure = new Error('renewal failed');
      if (failed) {
        const receiver = source.receiver();
        jest.spyOn(receiver, 'fetch').mockRejectedValue(renewalFailure);
        jest.spyOn(source, 'receiver').mockReturnValue(receiver);
      }
      const bearer = new AsyncRenewableBearer(new NamedBearer(source, 'review/renewal'), {
        cacheFilePath: join(dir, 'tokens.yaml'),
      });
      const timeoutSpy = jest.spyOn(global, 'setTimeout');
      const clearSpy = jest.spyOn(global, 'clearTimeout');
      try {
        const pending = bearer
          .receiver()
          .fetch(900_000, { renewRequired: true, renewSynchronous: true });
        const outcome = await pending.then(
          (value) => value,
          (err: unknown) => err,
        );
        expect(outcome).toBe(failed ? renewalFailure : token);
        const index = timeoutSpy.mock.calls.findIndex(([, ms]) => ms === 900_000);
        expect(index).toBeGreaterThanOrEqual(0);
        expect(clearSpy).toHaveBeenCalledWith(timeoutSpy.mock.results[index].value);
      } finally {
        await bearer.close();
        for (const result of timeoutSpy.mock.results) {
          if (result.type === 'return') clearTimeout(result.value);
        }
        timeoutSpy.mockRestore();
        clearSpy.mockRestore();
        await rm(dir, { recursive: true, force: true });
      }
    },
  );

  test('map transformations create missing prototype-named entries without global mutation', () => {
    const before = Object.getOwnPropertyDescriptors(Object.prototype);
    const patch = BatchGetResponse.fromJSON(
      JSON.parse('{"items":{"__proto__":{"error":{"code":1}}}}'),
    );
    const result = patchWithResetMask(BatchGetResponse, BatchGetResponse.create(), patch);
    expect(Object.hasOwn(result.items, '__proto__')).toBe(true);
    expect(result.items['__proto__'].result).toMatchObject({
      $case: 'error',
      error: { code: 1, message: '', details: [] },
    });
    const replaced = replaceAtFieldPath(
      DevlabSpec_Template,
      DevlabSpec_Template.create(),
      'input_field_values.__proto__.struct_value.fields.sdkParityPolluted',
      1,
    );
    expect(Object.hasOwn(replaced.inputFieldValues, '__proto__')).toBe(true);
    expect(replaced.inputFieldValues['__proto__']).toEqual({ sdkParityPolluted: 1 });
    const updated = replaceAtFieldPath(
      DevlabSpec_Template,
      replaced,
      'input_field_values.__proto__.struct_value.fields.sdkParityPolluted',
      2,
    );
    expect(updated.inputFieldValues['__proto__']).toEqual({ sdkParityPolluted: 2 });
    expect(Object.getOwnPropertyDescriptors(Object.prototype)).toEqual(before);
  });

  test('empty message lists are absent patches and require a reset when cleared', () => {
    const original = ListDisksResponse.create({ items: [{ metadata: { id: 'disk' } }] });
    const empty = ListDisksResponse.create();
    expect(patchWithResetMask(ListDisksResponse, original, empty).items).toEqual(original.items);
    expect(resetMaskFromModified(original, empty).marshal()).toBe('items');
    expect(patchWithResetMask(ListDisksResponse, original, empty, 'items').items).toEqual([]);
  });

  test('mask transformations preserve native null and duration values', () => {
    const original = DevlabSpec_Template.create({ inputFieldValues: { optional: null } });
    expect(
      filterWithSelectMask(DevlabSpec_Template, original, 'input_field_values.*.null_value')
        .inputFieldValues,
    ).toEqual({ optional: null });
    expect(
      patchWithResetMask(DevlabSpec_Template, DevlabSpec_Template.create(), original)
        .inputFieldValues,
    ).toEqual({ optional: null });
    expect(
      replaceAtFieldPath(DevlabSpec_Template, original, 'input_field_values.optional.null_value', 0)
        .inputFieldValues,
    ).toEqual({ optional: null });
    for (const seconds of [7, -7, 604800]) {
      const req = DeleteBucketRequest.create({
        purge: { $case: 'ttl', ttl: dayjs.duration(seconds * 1000) },
      });
      expect(Number(getAtFieldPath(req, 'ttl.seconds'))).toBe(seconds);
      const filtered = filterWithSelectMask(DeleteBucketRequest, req, 'ttl.seconds');
      expect(filtered.purge?.$case === 'ttl' && filtered.purge.ttl.asSeconds()).toBe(seconds);
      const patched = patchWithResetMask(DeleteBucketRequest, DeleteBucketRequest.create(), req);
      expect(patched.purge?.$case === 'ttl' && patched.purge.ttl.asSeconds()).toBe(seconds);
    }
  });

  test('field-path replacement keeps native Value null distinct from removal', () => {
    const req = DevlabSpec_Template.create({ inputFieldValues: { optional: 7 } });
    const nullable = replaceAtFieldPath(
      DevlabSpec_Template,
      req,
      'input_field_values.optional',
      null,
    );
    expect(nullable.inputFieldValues).toEqual({ optional: null });
    expect(
      replaceAtFieldPath(DevlabSpec_Template, nullable, 'input_field_values.optional', undefined)
        .inputFieldValues,
    ).toEqual({});
  });
  test('canonical JSON handles null collections and rejects unknown/oneof conflicts', () => {
    expect(fromProtoJSON(ListDisksResponse, { items: null }, protoRegistry).items).toEqual([]);
    expect(fromProtoJSON(ResourceMetadata, { labels: null }, protoRegistry).labels).toEqual({});
    expect(() => fromProtoJSON(GetDiskRequest, null, protoRegistry)).toThrow('object');
    expect(() => anyFromProtoJSON([], protoRegistry)).toThrow('object');
    expect(() => fromProtoJSON(GetDiskRequest, { id: 'disk', typo: 'x' }, protoRegistry)).toThrow(
      'Unknown protobuf field',
    );
    expect(
      fromProtoJSON(GetDiskRequest, { id: 'disk', typo: 'x' }, protoRegistry, {
        ignoreUnknownFields: true,
      }).id,
    ).toBe('disk');
    expect(() =>
      fromProtoJSON(
        DeleteBucketRequest,
        { purgeAt: '2026-01-01T00:00:00Z', ttl: '7s' },
        protoRegistry,
      ),
    ).toThrow('oneof');
    expect(fmFromProtoJSON('metadata,,spec')).toEqual(['metadata', '', 'spec']);
    expect(() => fmFromProtoJSON('metadata.parent_id')).toThrow();
    expect(() => fmToProtoJSON(['metadata.parentId'])).toThrow();
    expect(() =>
      anyFromProtoJSON(
        { '@type': 'type.googleapis.com/google.protobuf.FieldMask', value: ['metadata'] },
        protoRegistry,
      ),
    ).toThrow();
  });

  test('canonical scalar types and ranges are checked recursively', () => {
    expect(() => fromProtoJSON(DiskSpec, { forbidDeletion: 'false' }, protoRegistry)).toThrow(
      'boolean',
    );
    expect(() => fromProtoJSON(GetDiskRequest, { id: 12 }, protoRegistry)).toThrow('string');
    expect(() =>
      fromProtoJSON(ResourceMetadata, { resourceVersion: '9223372036854775808' }, protoRegistry),
    ).toThrow('range');
    expect(() => fromProtoJSON(ResourceMetadata, { resourceVersion: 1.5 }, protoRegistry)).toThrow(
      'integral',
    );
    expect(() =>
      fromProtoJSON(
        ListDisksResponse,
        { items: [{ spec: { forbidDeletion: 'false' } }] },
        protoRegistry,
      ),
    ).toThrow('boolean');
    expect(() => fromProtoJSON(ResourceMetadata, { labels: { bad: 1 } }, protoRegistry)).toThrow(
      'string',
    );
    expect(
      fromProtoJSON(
        ResourceMetadata,
        { resourceVersion: '1e3' },
        protoRegistry,
      ).resourceVersion.toString(),
    ).toBe('1000');
    expect(
      fromProtoJSON(
        ResourceMetadata,
        { resourceVersion: '-9223372036854775808' },
        protoRegistry,
      ).resourceVersion.toString(),
    ).toBe('-9223372036854775808');
  });

  test.each([
    ['BoolValue', true],
    ['BoolValue', false],
    ['StringValue', 'value'],
    ['BytesValue', 'AQI='],
    ['DoubleValue', 1.5],
    ['FloatValue', 1.5],
    ['Int32Value', -7],
    ['UInt32Value', 7],
    ['Int64Value', '-9223372036854775808'],
    ['UInt64Value', '18446744073709551615'],
  ])('canonical Any supports standard %s wrappers', (name, value) => {
    const json = { '@type': `type.googleapis.com/google.protobuf.${name}`, value };
    expect(anyToProtoJSON(anyFromProtoJSON(json, protoRegistry), protoRegistry)).toEqual(json);
  });

  test('oneof group lookup returns the selected value and restricts descent', () => {
    const req = DeleteBucketRequest.create({ purge: { $case: 'ttl', ttl: dayjs.duration(7000) } });
    expect((getAtFieldPath(req, 'purge') as ReturnType<typeof dayjs.duration>).asSeconds()).toBe(7);
    expect(getAtFieldPath(DeleteBucketRequest.create(), 'purge')).toBeUndefined();
    expect(() => getAtFieldPath(req, 'purge.seconds')).toThrow('oneof group');
  });

  test('canonical enums accept numeric strings and honor unknown-field policy', () => {
    expect(fromProtoJSON(ServiceError, { retryType: '2' }, protoRegistry).retryType.code).toBe(2);
    expect(() => fromProtoJSON(ServiceError, { retryType: 'FUTURE_RETRY' }, protoRegistry)).toThrow(
      'enum',
    );
    expect(
      fromProtoJSON(ServiceError, { retryType: 'FUTURE_RETRY' }, protoRegistry, {
        ignoreUnknownFields: true,
      }).retryType.code,
    ).toBe(0);
  });
  test.each([
    ['Timestamp', '2026-02-31T00:00:00Z'],
    ['Timestamp', { seconds: 0 }],
    ['Duration', 'invalid'],
    ['Duration', '315576000001s'],
    ['Struct', []],
    ['ListValue', {}],
    ['BoolValue', 'false'],
    ['Empty', { extra: 1 }],
  ])('canonical %s rejects malformed input', (name, value) => {
    const json =
      name === 'Empty'
        ? { '@type': `type.googleapis.com/google.protobuf.${name}`, ...(value as object) }
        : { '@type': `type.googleapis.com/google.protobuf.${name}`, value };
    expect(() => anyFromProtoJSON(json, protoRegistry)).toThrow();
  });
  test('unsigned 64-bit values survive constructors, JSON and wire decoding', () => {
    const max = '18446744073709551615';
    const created = CapacityAllowanceSpec.create({ limit: Long.fromString(max, true) });
    const json = CapacityAllowanceSpec.fromJSON({ limit: max });
    const canonical = fromProtoJSON(CapacityAllowanceSpec, { limit: max }, protoRegistry);
    const wire = CapacityAllowanceSpec.decode(CapacityAllowanceSpec.encode(created).finish());
    for (const message of [created, json, canonical, wire]) {
      expect(message.limit?.toString()).toBe(max);
      expect(
        CapacityAllowanceSpec.decode(
          CapacityAllowanceSpec.encode(message).finish(),
        ).limit?.toString(),
      ).toBe(max);
    }
  });
  test.each([NaN, Infinity, -Infinity])(
    'canonical Value rejects non-finite number %s on write',
    (number) => {
      const message = DevlabSpec_Template.create({ inputFieldValues: { x: number } });
      expect(() => toProtoJSON(DevlabSpec_Template, message, protoRegistry)).toThrow('JSON data');
      const writer = new BinaryWriter();
      wkt['.google.protobuf.Value'].writeMessage(writer, number);
      expect(() =>
        anyToProtoJSON(
          { typeUrl: 'type.googleapis.com/google.protobuf.Value', value: writer.finish() },
          protoRegistry,
        ),
      ).toThrow('JSON data');
    },
  );
  test('constructors preserve unknown numeric enum codes and name-only partials', () => {
    const unknown = ServiceError_RetryType.fromNumber(37);
    for (const message of [
      ServiceError.create({ retryType: unknown }),
      ServiceError.fromPartial({ retryType: { code: 37 } }),
    ]) {
      expect(message.retryType.code).toBe(37);
      expect(ServiceError.decode(ServiceError.encode(message).finish()).retryType.code).toBe(37);
    }
    expect(ServiceError.fromPartial({ retryType: { name: 'UNSPECIFIED' } }).retryType.code).toBe(0);
  });

  test('maps and native Struct/Value preserve special keys as own data properties', () => {
    const labels = JSON.parse(
      '{"__proto__":"label","constructor":"ctor","toString":"string"}',
    ) as Record<string, string>;
    const created = ResourceMetadata.create({ labels });
    const decoded = ResourceMetadata.decode(ResourceMetadata.encode(created).finish());
    const parsed = ResourceMetadata.fromJSON({ labels });
    for (const message of [created, decoded, parsed]) {
      expect(Object.hasOwn(message.labels, '__proto__')).toBe(true);
      expect(message.labels.__proto__).toBe('label');
      expect(Object.getPrototypeOf(message.labels)).toBe(Object.prototype);
      expect((ResourceMetadata.toJSON(message) as { labels: unknown }).labels).toEqual(labels);
    }
    const json = JSON.parse('{"__proto__":{"x":1},"constructor":null}') as Record<string, unknown>;
    for (const name of ['Struct', 'Value']) {
      const any = anyFromProtoJSON(
        { '@type': `type.googleapis.com/google.protobuf.${name}`, value: json },
        protoRegistry,
      );
      expect(anyToProtoJSON(any, protoRegistry)).toEqual({ '@type': any.typeUrl, value: json });
    }
    const template = DevlabSpec_Template.create({ inputFieldValues: json });
    const copy = DevlabSpec_Template.decode(DevlabSpec_Template.encode(template).finish());
    expect(Object.hasOwn(copy.inputFieldValues, '__proto__')).toBe(true);
    expect(Object.getPrototypeOf(copy.inputFieldValues)).toBe(Object.prototype);
    expect(copy.inputFieldValues).toEqual(json);
  });

  test('singular message wire occurrences merge, including explicit defaults and unknown fields', () => {
    const first = CreateDiskRequest.encode(
      CreateDiskRequest.create({ metadata: { id: 'disk', name: 'old' } }),
    ).finish();
    const second = new BinaryWriter()
      .uint32(10)
      .fork()
      .uint32(26)
      .string('')
      .uint32(800)
      .int32(1)
      .join()
      .finish();
    const merged = CreateDiskRequest.decode(concat(first, second));
    expect(merged.metadata?.id).toBe('disk');
    expect(merged.metadata?.name).toBe('');
    expect(merged.metadata?.[unknownFieldsSymbol]).toEqual(
      new BinaryWriter().uint32(800).int32(1).finish(),
    );
    expect(CreateDiskRequest.decode(CreateDiskRequest.encode(merged).finish()).metadata?.id).toBe(
      'disk',
    );
  });

  test('map wire entries with omitted values retain protobuf defaults', () => {
    // ResourceMetadata.labels is wire field 7.
    const wire = new BinaryWriter().uint32(58).fork().uint32(10).string('key').join().finish();
    expect(ResourceMetadata.decode(wire).labels).toEqual({ key: '' });
  });

  test('same message oneof occurrences merge and a different case replaces them', () => {
    const writer = new BinaryWriter()
      .uint32(34)
      .fork()
      .uint32(8)
      .int64(7)
      .join()
      .uint32(34)
      .fork()
      .uint32(16)
      .int32(500000000)
      .join();
    const req = DeleteBucketRequest.decode(writer.finish());
    expect(req.purge?.$case === 'ttl' && req.purge.ttl.asMilliseconds()).toBe(7500);
  });

  test('native WKT wire occurrences merge and timestamps preserve invalid component status', () => {
    const seconds = new BinaryWriter().uint32(8).int64(7).finish();
    const nanos = new BinaryWriter().uint32(16).int32(500000000).finish();
    const timestamp = wkt['.google.protobuf.Timestamp'];
    const first = timestamp.readMessage(new BinaryReader(seconds), seconds.length);
    expect(timestamp.readMessage(new BinaryReader(nanos), nanos.length, first).valueOf()).toBe(
      7500,
    );
    for (const n of [-1, 1000000000]) {
      const invalid = new BinaryWriter().uint32(8).int64(0).uint32(16).int32(n).finish();
      const createdAt = timestamp.readMessage(new BinaryReader(invalid), invalid.length);
      expect(createdAt.isValid()).toBe(false);
      expect(timestamp.toJSON(createdAt)).toBe(
        dayjs(Math.floor(n / 1_000_000))
          .toDate()
          .toISOString(),
      );
      const metadata = ResourceMetadata.create();
      metadata.createdAt = createdAt;
      const decoded = ResourceMetadata.decode(ResourceMetadata.encode(metadata).finish());
      expect(() => toProtoJSON(ResourceMetadata, decoded, protoRegistry)).toThrow(
        'Invalid protobuf Timestamp.',
      );
      expect(() =>
        anyToProtoJSON(
          { typeUrl: 'type.googleapis.com/google.protobuf.Timestamp', value: invalid },
          protoRegistry,
        ),
      ).toThrow('Invalid protobuf Timestamp.');
      expect(() =>
        toProtoJSON(ResourceMetadata, ResourceMetadata.create(decoded), protoRegistry),
      ).toThrow('Invalid protobuf Timestamp.');
      expect(
        () =>
          new Operation(
            OperationProto.create({ id: 'op', createdAt }),
            { get: jest.fn() },
            new Logger(),
          ),
      ).toThrow(OperationValidationError);
    }
    const struct = wkt['.google.protobuf.Struct'];
    const b = new BinaryWriter();
    struct.writeMessage(b, { b: 2 });
    const structBytes = b.finish();
    expect(struct.readMessage(new BinaryReader(structBytes), structBytes.length, { a: 1 })).toEqual(
      { a: 1, b: 2 },
    );
    const value = wkt['.google.protobuf.Value'];
    const list1 = new BinaryWriter();
    value.writeMessage(list1, [1]);
    const list2 = new BinaryWriter();
    value.writeMessage(list2, [2]);
    const both = concat(list1.finish(), list2.finish());
    expect(value.readMessage(new BinaryReader(both), both.length)).toEqual([1, 2]);
  });

  test('CLI service account keys take precedence over a stale federation path and conflicting file IDs reject', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'sdk-review-config-'));
    const path = join(dir, 'config.yaml');
    try {
      const pem = generateKeyPairSync('rsa', { modulusLength: 2048 }).privateKey.export({
        type: 'pkcs8',
        format: 'pem',
      });
      await writeFile(join(dir, 'private.pem'), pem);
      await writeFile(
        path,
        'default: prod\nprofiles:\n  prod:\n    auth-type: service account\n    service-account-id: sa\n    public-key-id: key\n    private-key-file-path: ' +
          join(dir, 'private.pem') +
          '\n    federated-subject-credentials-file-path: /stale\n',
      );
      expect(new Config({ configFile: path, noEnv: true }).getCredentials()).toBeInstanceOf(
        ServiceAccountBearer,
      );
      await writeFile(
        path,
        'default: prod\nprofiles:\n  prod:\n    auth-type: service account\n    service-account-id: sa\n    service-account-credentials-file-path: /unused.json\n',
      );
      expect(() => new Config({ configFile: path, noEnv: true }).getCredentials()).toThrow(
        'either',
      );
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  test('running progress retains ratios above one', () => {
    const raw = OperationProto.create({
      id: 'op',
      createdAt: dayjs(0),
      progressTracker: {
        workDone: { doneTickCount: Long.fromNumber(20), totalTickCount: Long.fromNumber(10) },
        steps: [
          { workDone: { doneTickCount: Long.fromNumber(20), totalTickCount: Long.fromNumber(10) } },
        ],
      },
    });
    const operation = new Operation(raw, { get: jest.fn() }, new Logger());
    expect(operation.progressTracker()!.workFraction()).toBe(2);
    expect(operation.progressTracker()!.steps()[0].workFraction()).toBe(2);
  });

  test.each(['remove', 'removeIfEqual'] as const)(
    'cache %s preserves other profiles without NUL bytes',
    async (method) => {
      const dir = await mkdtemp(join(tmpdir(), 'sdk-review-cache-'));
      const path = join(dir, 'tokens.yaml');
      const cache = new TokenCache({ cacheFile: path });
      const token = new Token('first', new Date(Math.floor(Date.now() / 1000) * 1000 + 60000));
      try {
        await cache.set('first', token);
        await cache.set(
          'second',
          new Token('second', new Date(Math.floor(Date.now() / 1000) * 1000 + 60000)),
        );
        if (method === 'remove') await cache.remove('first');
        else {
          const removed = await cache.removeIfEqual('first', token);
          if (!removed) throw new Error('Conditional removal must remove the matching token.');
        }
        expect((await cache.get('second'))?.token).toBe('second');
        expect((await readFile(path, 'utf8')).includes('\0')).toBe(false);
      } finally {
        await rm(dir, { recursive: true, force: true });
      }
    },
  );
});
