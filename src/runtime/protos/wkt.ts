/* eslint-disable @typescript-eslint/no-explicit-any */
import { anyFromJSON, AnyShape, anyToJSON, readAny, writeAny } from './any.js';
import {
  BinaryReader,
  BinaryWriter,
  dayjs,
  Dayjs,
  DeepPartial,
  Duration,
  Long,
  type MessageDescriptor,
  MessageFns,
} from './core.js';
import { fmFromJSON, fmToJSON, readFieldMask, writeFieldMask } from './fieldmask.js';
import { readValue, valueFromJSON, valueToJSON, writeValue } from './values.js';

function wktDescriptor(type: string): MessageDescriptor | undefined {
  return (wkt as Record<string, { $descriptor?: MessageDescriptor }>)[type]?.$descriptor;
}

// Timestamp helpers
function tsToWire(d: Dayjs): { seconds: Long; nanos: number } {
  const ms = d.valueOf();
  const seconds = Long.fromNumber(Math.floor(ms / 1000));
  const nanos = (ms % 1000) * 1_000_000;
  return { seconds, nanos };
}
function tsFromWire(t: { seconds: Long | number | string; nanos: number }): Dayjs {
  const sec = Long.isLong(t.seconds) ? (t.seconds as Long).toNumber() : Number(t.seconds);
  const ms = sec * 1000 + Math.floor((t.nanos ?? 0) / 1_000_000);
  return dayjs(ms);
}
function tsFromJSON(o: unknown): Dayjs {
  if (typeof o === 'string') return dayjs(o);
  if (o && typeof o === 'object') {
    const obj = o as { seconds?: Long | number | string; nanos?: number };
    return tsFromWire({ seconds: obj?.seconds ?? 0, nanos: obj?.nanos ?? 0 });
  }
  return dayjs(0);
}
function tsToJSON(d: Dayjs): string {
  return d.toDate().toISOString();
}

// Duration helpers (protobuf JSON uses "Xs" with fractional seconds)
function durToWire(d: Duration): { seconds: Long; nanos: number } {
  const ms = Math.trunc(d.asMilliseconds());
  const seconds = Long.fromNumber(Math.trunc(ms / 1000));
  const nanos = (ms % 1000) * 1_000_000;
  return { seconds, nanos };
}
function durFromWire(t: { seconds: Long | number | string; nanos: number }): Duration {
  const sec = Long.isLong(t.seconds) ? (t.seconds as Long).toNumber() : Number(t.seconds);
  const ms = sec * 1000 + Math.floor((t.nanos ?? 0) / 1_000_000);
  return dayjs.duration(ms, 'milliseconds');
}
const DUR_RE = /^(-)?(?:(\d+)(?:\.(\d{1,9}))?)s$/i;
function durFromJSON(o: unknown): Duration {
  if (typeof o === 'string') {
    const m = o.match(DUR_RE);
    if (m) {
      const neg = !!m[1];
      const whole = Number(m[2] || 0);
      const fracStr = (m[3] || '').padEnd(9, '0');
      const nanos = Number(fracStr.slice(0, 9));
      const ms = whole * 1000 + Math.floor(nanos / 1_000_000);
      return dayjs.duration(neg ? -ms : ms, 'milliseconds');
    }
    const d = (dayjs as any).duration(o);
    return d as Duration;
  }
  if (o && typeof o === 'object') {
    const obj = o as { seconds?: Long | number | string; nanos?: number };
    return durFromWire({ seconds: obj?.seconds ?? 0, nanos: obj?.nanos ?? 0 });
  }
  return dayjs.duration(0);
}
function durToJSON(d: Duration): string {
  const totalMs = Math.trunc(d.asMilliseconds());
  const sign = totalMs < 0 ? '-' : '';
  const ms = Math.abs(totalMs);
  const s = Math.trunc(ms / 1000);
  const nanos = (ms % 1000) * 1_000_000;
  if (nanos === 0) return `${sign}${s}s`;
  let frac = String(nanos).padStart(9, '0');
  frac = frac.replace(/0+$/, '');
  return `${sign}${s}.${frac}s`;
}

function fieldMaskPaths(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  if (value && typeof value === 'object') {
    const paths = (value as { paths?: unknown }).paths;
    if (Array.isArray(paths)) return paths.map(String);
  }
  return [];
}

function hasWireTimeParts(value: any): value is { seconds?: unknown; nanos?: unknown } {
  if (!value || typeof value !== 'object') return false;
  const seconds = value.seconds;
  const nanos = value.nanos;
  return (
    (seconds !== undefined && typeof seconds !== 'function') ||
    (nanos !== undefined && typeof nanos !== 'function')
  );
}

function normalizeTimePart(value: unknown): unknown {
  if (value === undefined || value === null) return 0;
  if (typeof value === 'string') return Number(value) === 0 ? 0 : value;
  if (value && typeof value === 'object') {
    const maybeLong = value as { isZero?: unknown; toNumber?: unknown };
    if (typeof maybeLong.isZero === 'function') {
      return (maybeLong.isZero as () => boolean)() ? 0 : 1;
    }
    if (typeof maybeLong.toNumber === 'function') {
      const numberValue = (maybeLong.toNumber as () => number)();
      return numberValue === 0 ? 0 : numberValue;
    }
  }
  return value;
}

function timestampReflect(value: unknown): Record<string, unknown> | undefined {
  if (hasWireTimeParts(value)) {
    return { seconds: normalizeTimePart(value.seconds), nanos: normalizeTimePart(value.nanos) };
  }
  if (
    value &&
    typeof value === 'object' &&
    typeof (value as { valueOf?: unknown }).valueOf === 'function'
  ) {
    const ms = Number((value as { valueOf: () => unknown }).valueOf());
    if (Number.isFinite(ms)) {
      return {
        seconds: Math.floor(ms / 1000),
        nanos: (ms % 1000) * 1_000_000,
      };
    }
  }
  if (typeof value === 'string') {
    return timestampReflect(tsFromJSON(value));
  }
  return undefined;
}

function durationReflect(value: unknown): Record<string, unknown> | undefined {
  if (hasWireTimeParts(value)) {
    return { seconds: normalizeTimePart(value.seconds), nanos: normalizeTimePart(value.nanos) };
  }
  if (
    value &&
    typeof value === 'object' &&
    typeof (value as { asMilliseconds?: unknown }).asMilliseconds === 'function'
  ) {
    const wire = durToWire(value as Duration);
    return {
      seconds: normalizeTimePart(wire.seconds),
      nanos: normalizeTimePart(wire.nanos),
    };
  }
  if (typeof value === 'string') {
    return durationReflect(durFromJSON(value));
  }
  return undefined;
}

function valueReflect(value: unknown): Record<string, unknown> | undefined {
  if (value === undefined) return { kind: {} };
  if (value === null) return { kind: { $case: 'nullValue', nullValue: 0 } };
  switch (typeof value) {
    case 'number':
      return { kind: { $case: 'numberValue', numberValue: value } };
    case 'string':
      return { kind: { $case: 'stringValue', stringValue: value } };
    case 'boolean':
      return { kind: { $case: 'boolValue', boolValue: value } };
    default:
      break;
  }
  if (Array.isArray(value)) return { kind: { $case: 'listValue', listValue: value } };
  if (value && typeof value === 'object') {
    return { kind: { $case: 'structValue', structValue: value } };
  }
  return undefined;
}

const VALUE_KIND_DESCRIPTOR: MessageDescriptor = {
  fields: {
    nullValue: { pbName: 'null_value', scalarType: 14 },
    numberValue: { pbName: 'number_value', scalarType: 1 },
    stringValue: { pbName: 'string_value', scalarType: 9 },
    boolValue: { pbName: 'bool_value', scalarType: 8 },
    structValue: {
      pbName: 'struct_value',
      message: () => wktDescriptor('.google.protobuf.Struct'),
    },
    listValue: {
      pbName: 'list_value',
      message: () => wktDescriptor('.google.protobuf.ListValue'),
    },
  },
};

export const wkt = {
  ['.google.protobuf.Timestamp']: {
    $type: 'google.protobuf.Timestamp',
    $descriptor: {
      reflect: timestampReflect,
      fields: {
        seconds: { pbName: 'seconds', scalarType: 3 },
        nanos: { pbName: 'nanos', scalarType: 5 },
      },
    },
    fromJSON: (o: unknown, _use?: 'json' | 'pb') => tsFromJSON(o),
    toJSON: (d: Dayjs, use?: 'json' | 'pb') => {
      if (use === 'pb') {
        const t = tsToWire(d);
        return {
          seconds: (t.seconds as Long).toString?.() ?? String(t.seconds as any),
          nanos: t.nanos,
        };
      }
      return tsToJSON(d);
    },
    toWire: tsToWire,
    fromWire: tsFromWire,
    fromPartial: (object: DeepPartial<Dayjs>) =>
      object.clone ? object.clone() : dayjs(object as any),
    writeMessage: (writer: BinaryWriter, d: Dayjs) => {
      const t = tsToWire(d);
      writer.uint32((1 << 3) | 0).int64(t.seconds as any);
      writer.uint32((2 << 3) | 0).int32(t.nanos);
    },
    readMessage: (reader: BinaryReader, length: number): Dayjs => {
      const end = reader.pos + length;
      let seconds: any = Long.ZERO;
      let nanos = 0;
      while (reader.pos < end) {
        const t2 = reader.uint32();
        switch (t2 >>> 3) {
          case 1:
            seconds = reader.int64() as any;
            break;
          case 2:
            nanos = reader.int32();
            break;
          default:
            reader.skip(t2 & 7);
            break;
        }
      }
      return tsFromWire({ seconds, nanos });
    },
  },
  ['.google.protobuf.Duration']: {
    $type: 'google.protobuf.Duration',
    $descriptor: {
      reflect: durationReflect,
      fields: {
        seconds: { pbName: 'seconds', scalarType: 3 },
        nanos: { pbName: 'nanos', scalarType: 5 },
      },
    },
    fromJSON: (o: unknown, _use?: 'json' | 'pb') => durFromJSON(o),
    toJSON: (d: Duration, use?: 'json' | 'pb') => {
      if (use === 'pb') {
        const t = durToWire(d);
        return {
          seconds: (t.seconds as Long).toString?.() ?? String(t.seconds as any),
          nanos: t.nanos,
        };
      }
      return durToJSON(d);
    },
    toWire: durToWire,
    fromWire: durFromWire,
    fromPartial: (object: DeepPartial<Duration>) =>
      object.clone ? object.clone() : dayjs.duration(object as any),
    writeMessage: (writer: BinaryWriter, d: Duration) => {
      const t = durToWire(d);
      writer.uint32((1 << 3) | 0).int64(t.seconds as any);
      writer.uint32((2 << 3) | 0).int32(t.nanos);
    },
    readMessage: (reader: BinaryReader, length: number): Duration => {
      const end = reader.pos + length;
      let seconds: any = Long.ZERO;
      let nanos = 0;
      while (reader.pos < end) {
        const t2 = reader.uint32();
        switch (t2 >>> 3) {
          case 1:
            seconds = reader.int64() as any;
            break;
          case 2:
            nanos = reader.int32();
            break;
          default:
            reader.skip(t2 & 7);
            break;
        }
      }
      return durFromWire({ seconds, nanos });
    },
  },
  ['.google.protobuf.FieldMask']: {
    $type: 'google.protobuf.FieldMask',
    $descriptor: {
      reflect: (value: unknown) => ({ paths: fieldMaskPaths(value) }),
      fields: {
        paths: { pbName: 'paths', repeated: true, scalarType: 9 },
      },
    },
    fromJSON: (o: unknown, _use?: 'json' | 'pb') => fmFromJSON(o),
    toJSON: (paths: string[], _use?: 'json' | 'pb') => fmToJSON(paths),
    fromPartial: (object: DeepPartial<string[]>) =>
      Array.isArray(object) ? object.map((e) => e) : [],
    writeMessage: (writer: BinaryWriter, paths: string[]) => writeFieldMask(writer, paths),
    readMessage: (reader: BinaryReader, length: number): string[] => readFieldMask(reader, length),
  },
  ['.google.protobuf.Any']: {
    $type: 'google.protobuf.Any',
    $descriptor: {
      fields: {
        typeUrl: { pbName: 'type_url', scalarType: 9 },
        value: { pbName: 'value', scalarType: 12 },
      },
    },
    fromJSON: (o: unknown, _use?: 'json' | 'pb') => anyFromJSON(o),
    toJSON: (a: AnyShape, _use?: 'json' | 'pb') => anyToJSON(a),
    fromPartial: (object: DeepPartial<AnyShape>) => ({
      typeUrl: object.typeUrl ?? '',
      value: object.value instanceof Uint8Array ? object.value : new Uint8Array(0),
    }),
    writeMessage: (writer: BinaryWriter, a: AnyShape) => writeAny(writer, a),
    readMessage: (reader: BinaryReader, length: number): AnyShape => readAny(reader, length),
  },
  ['.google.protobuf.Struct']: {
    $type: 'google.protobuf.Struct',
    $descriptor: {
      reflect: (value: unknown) => ({ fields: value ?? {} }),
      fields: {
        fields: {
          pbName: 'fields',
          map: true,
          mapValue: () => wktDescriptor('.google.protobuf.Value'),
        },
      },
    },
    fromJSON: (o: any, _use?: 'json' | 'pb') => valueFromJSON(o ?? {}),
    toJSON: (o: any, _use?: 'json' | 'pb') => valueToJSON(o ?? {}),
    fromPartial: (object: any) => object ?? {},
    writeMessage: (writer: BinaryWriter, obj: any) => {
      for (const [k, v] of Object.entries(obj ?? {})) {
        const ew = writer.uint32((1 << 3) | 2).fork();
        ew.uint32((1 << 3) | 2).string(k);
        const vw = ew.uint32((2 << 3) | 2).fork();
        writeValue(vw as any, v);
        (vw as any).join();
        (ew as any).join();
      }
    },
    readMessage: (reader: BinaryReader, length: number): any => {
      const end = reader.pos + length;
      const obj: any = {};
      while (reader.pos < end) {
        const tag = reader.uint32();
        if (tag >>> 3 === 1) {
          const end2 = reader.uint32() + reader.pos;
          let key = '';
          let val: any = null;
          while (reader.pos < end2) {
            const t2 = reader.uint32();
            switch (t2 >>> 3) {
              case 1:
                key = reader.string();
                break;
              case 2: {
                const len = reader.uint32();
                val = readValue(reader, len);
                break;
              }
              default:
                reader.skip(t2 & 7);
            }
          }
          obj[key] = val;
        } else {
          reader.skip(tag & 7);
        }
      }
      return obj;
    },
  },
  ['.google.protobuf.Value']: {
    $type: 'google.protobuf.Value',
    $descriptor: {
      reflect: valueReflect,
      fields: {
        kind: { pbName: 'kind', oneof: true, message: () => VALUE_KIND_DESCRIPTOR },
      },
    },
    fromJSON: (o: any, _use?: 'json' | 'pb') => valueFromJSON(o),
    toJSON: (o: any, _use?: 'json' | 'pb') => valueToJSON(o),
    fromPartial: (object: any) => object,
    writeMessage: (writer: BinaryWriter, v: any) => writeValue(writer, v),
    readMessage: (reader: BinaryReader, length: number): any => readValue(reader, length),
  },
  ['.google.protobuf.ListValue']: {
    $type: 'google.protobuf.ListValue',
    $descriptor: {
      reflect: (value: unknown) => ({ values: Array.isArray(value) ? value : [] }),
      fields: {
        values: {
          pbName: 'values',
          repeated: true,
          message: () => wktDescriptor('.google.protobuf.Value'),
        },
      },
    },
    fromJSON: (o: any, _use?: 'json' | 'pb') => (Array.isArray(o) ? o.map(valueFromJSON) : []),
    toJSON: (o: any[], _use?: 'json' | 'pb') => (Array.isArray(o) ? o.map(valueToJSON) : []),
    fromPartial: (object: any[]) => (Array.isArray(object) ? object.map((e) => e) : []),
    writeMessage: (writer: BinaryWriter, arr: any[]) => {
      for (const v of arr ?? []) {
        const w = writer.uint32((1 << 3) | 2).fork();
        writeValue(w as any, v);
        (w as any).join();
      }
    },
    readMessage: (reader: BinaryReader, length: number): any[] => {
      const end = reader.pos + length;
      const arr: any[] = [];
      while (reader.pos < end) {
        const tag = reader.uint32();
        if (tag >>> 3 === 1) {
          const len = reader.uint32();
          arr.push(readValue(reader, len));
        } else {
          reader.skip(tag & 7);
        }
      }
      return arr;
    },
  },
  ['.google.protobuf.Empty']: {
    $type: 'google.protobuf.Empty',
    $descriptor: {
      reflect: () => ({}),
      fields: {},
    },
    fromJSON: (_o: any, _use?: 'json' | 'pb') => ({}) as any,
    toJSON: (_e: any, _use?: 'json' | 'pb') => ({}) as any,
    fromPartial: (_o: any) => ({}) as any,
    writeMessage: (_writer: BinaryWriter, _e: any) => {
      // Empty has no fields
    },
    readMessage: (reader: BinaryReader, length: number): any => {
      const end = reader.pos + length;
      while (reader.pos < end) {
        const tag = reader.uint32();
        reader.skip(tag & 7);
      }
      return {} as any;
    },
  },
} as const;

export type WktRegistry = typeof wkt;

export interface Empty {}

export const Empty: MessageFns<Empty, 'google.protobuf.Empty'> = {
  $type: 'google.protobuf.Empty',
  encode(_message: Empty, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Empty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    while (reader.pos < end) {
      const tag = reader.uint32();
      reader.skip(tag & 7);
    }
    return {};
  },
  fromJSON(object: unknown): Empty {
    return wkt['.google.protobuf.Empty'].fromJSON(object);
  },
  toJSON(message: Empty, use?: 'json' | 'pb'): unknown {
    return wkt['.google.protobuf.Empty'].toJSON(message, use);
  },
  create<I extends DeepPartial<Empty>>(base?: I): Empty {
    return Empty.fromPartial(base ?? {});
  },
  fromPartial<I extends DeepPartial<Empty>>(_object: I): Empty {
    return {};
  },
};
