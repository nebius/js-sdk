/**
 * Registry-aware canonical protobuf JSON, alongside the existing generated JSON API.
 *
 * @packageDocumentation
 */
import { anyFromJSON, type AnyShape, anyToJSON } from './any.js';
import { base64FromBytes, bytesFromBase64 } from './base64.js';
import {
  BinaryReader,
  BinaryWriter,
  dayjs,
  Long,
  type MessageDescriptor,
  type MessageFieldDescriptor,
  type MessageFns,
} from './core.js';
import { fmFromProtoJSON, fmToProtoJSON } from './fieldmask.js';
import { wkt } from './wkt.js';

import type { ExtensionDescriptor, Registry } from './registry.js';

type JSONValue = Record<string, unknown>;
/** Controls canonical protobuf JSON parsing. Unknown fields are rejected by default. */
export interface ProtoJSONOptions {
  /** Skips unknown fields and enum names instead of rejecting them. Defaults to false. */
  ignoreUnknownFields?: boolean;
}
const valueTypes = new Set(
  [
    'Any',
    'Timestamp',
    'Duration',
    'FieldMask',
    'Struct',
    'Value',
    'ListValue',
    'DoubleValue',
    'FloatValue',
    'Int64Value',
    'UInt64Value',
    'Int32Value',
    'UInt32Value',
    'BoolValue',
    'StringValue',
    'BytesValue',
  ].map((name) => `google.protobuf.${name}`),
);
const wrapperTypes = new Set(
  [...valueTypes].filter((name) =>
    /(?:Double|Float|Int64|UInt64|Int32|UInt32|Bool|String|Bytes)Value$/.test(name),
  ),
);
const wrapperScalars: Record<string, number> = {
  'google.protobuf.DoubleValue': 1,
  'google.protobuf.FloatValue': 2,
  'google.protobuf.Int64Value': 3,
  'google.protobuf.UInt64Value': 4,
  'google.protobuf.Int32Value': 5,
  'google.protobuf.UInt32Value': 13,
  'google.protobuf.BoolValue': 8,
  'google.protobuf.StringValue': 9,
  'google.protobuf.BytesValue': 12,
};
function wellKnown(name: string) {
  const scalar = wrapperScalars[name];
  if (scalar) {
    const method = (
      {
        1: 'double',
        2: 'float',
        3: 'int64',
        4: 'uint64',
        5: 'int32',
        13: 'uint32',
        8: 'bool',
        9: 'string',
        12: 'bytes',
      } as const
    )[scalar as 1 | 2 | 3 | 4 | 5 | 13 | 8 | 9 | 12];
    const tag = scalar === 1 ? 9 : scalar === 2 ? 13 : scalar === 9 || scalar === 12 ? 10 : 8;
    return {
      fromJSON: (value: unknown) => {
        const valid = scalarJSON(value, scalar);
        return scalar === 12
          ? bytesFromBase64(valid as string)
          : [3, 4].includes(scalar)
            ? Long.fromString(valid as string, scalar === 4)
            : valid;
      },
      toJSON: (value: unknown) =>
        scalar === 12
          ? base64FromBytes(value as Uint8Array)
          : [3, 4].includes(scalar)
            ? String(value)
            : typeof value === 'number' && !Number.isFinite(value)
              ? String(value)
              : value,
      writeMessage: (writer: BinaryWriter, value: unknown) => {
        if (
          value === 0 ||
          value === false ||
          value === '' ||
          (Long.isLong(value) && value.isZero()) ||
          (value instanceof Uint8Array && !value.length)
        ) {
          return;
        }
        (writer.uint32(tag)[method] as (value: never) => BinaryWriter)(value as never);
      },
      readMessage: (reader: BinaryReader, length: number): unknown => {
        const end = reader.pos + length;
        let value: unknown =
          scalar === 12
            ? new Uint8Array()
            : scalar === 9
              ? ''
              : scalar === 8
                ? false
                : [3, 4].includes(scalar)
                  ? Long.ZERO
                  : 0;
        while (reader.pos < end) {
          const field = reader.uint32();
          if (field === tag) value = reader[method]();
          else reader.skip(field & 7);
        }
        return value;
      },
    };
  }
  return (
    wkt as Record<
      string,
      {
        toJSON: (value: never) => unknown;
        fromJSON: (value: unknown) => unknown;
        writeMessage: (writer: BinaryWriter, value: never) => void;
        readMessage: (reader: BinaryReader, length: number) => unknown;
      }
    >
  )[`.${name}`];
}

function canonicalNativeJSON(name: string, value: unknown): unknown {
  if (
    typeof value !== 'string' ||
    !['google.protobuf.Timestamp', 'google.protobuf.Duration'].includes(name)
  ) {
    return value;
  }
  return value.replace(/\.([0-9]+)(Z|s)$/, (_match, digits: string, suffix: string) => {
    const fraction = digits.replace(/0+$/, '');
    return fraction
      ? `.${fraction.padEnd(Math.ceil(fraction.length / 3) * 3, '0')}${suffix}`
      : suffix;
  });
}

/** Expands an Any into canonical @type JSON. Unknown types cannot be expanded. */
export function anyToProtoJSON(value: AnyShape, registry: Registry): unknown {
  if (!value.typeUrl && !value.value.length) return {};
  const name = value.typeUrl.slice(value.typeUrl.lastIndexOf('/') + 1),
    type = registry.getMessage(name),
    native = wellKnown(name);
  let json: unknown;
  if (native) {
    const data = native.readMessage(new BinaryReader(value.value), value.value.length);
    validateNativeValue(name, data);
    json =
      name === 'google.protobuf.Any'
        ? anyToProtoJSON(data as AnyShape, registry)
        : name === 'google.protobuf.FieldMask'
          ? fmToProtoJSON(data as string[])
          : native.toJSON(data as never);
  } else if (type) {
    const data = type.decode(value.value);
    json = transform(
      includeExtensions(type.toJSON(data), data, type.$descriptor, registry),
      type.$descriptor,
      registry,
      false,
    );
  } else throw new TypeError(`Unregistered protobuf type: ${name}`);
  if (native) {
    validateNativeJSON(name, json, {});
    json = canonicalNativeJSON(name, json);
  }
  return valueTypes.has(name)
    ? { '@type': value.typeUrl, value: json }
    : { '@type': value.typeUrl, ...(json as JSONValue) };
}

/** Packs canonical @type JSON with a registered codec. */
export function anyFromProtoJSON(
  value: unknown,
  registry: Registry,
  options: ProtoJSONOptions = {},
): AnyShape {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError('Any JSON requires an object.');
  }
  const obj = value as JSONValue;
  if (obj && Object.keys(obj).length === 0) return { typeUrl: '', value: new Uint8Array() };
  if (typeof obj?.['@type'] !== 'string') throw new TypeError('Any JSON requires @type.');
  const typeUrl = obj['@type'],
    name = typeUrl.slice(typeUrl.lastIndexOf('/') + 1),
    type = registry.getMessage(name),
    native = wellKnown(name);
  if (native) {
    const payload =
      name === 'google.protobuf.Empty'
        ? Object.fromEntries(Object.entries(obj).filter(([key]) => key !== '@type'))
        : obj.value;
    if (
      !options.ignoreUnknownFields &&
      name !== 'google.protobuf.Empty' &&
      Object.keys(obj).some((key) => key !== '@type' && key !== 'value')
    ) {
      throw new TypeError('Unknown protobuf Any field.');
    }
    validateNativeJSON(name, payload, options);

    const data =
      name === 'google.protobuf.Any'
        ? anyFromProtoJSON(obj.value, registry, options)
        : name === 'google.protobuf.FieldMask'
          ? fmFromProtoJSON(obj.value as string)
          : native.fromJSON(payload);
    const writer = new BinaryWriter();
    native.writeMessage(writer, data as never);
    return { typeUrl, value: writer.finish() };
  }
  if (!type) throw new TypeError(`Unregistered protobuf type: ${name}`);
  return {
    typeUrl,
    value: type
      .encode(
        type.fromJSON(
          transform(
            valueTypes.has(name)
              ? obj.value
              : Object.fromEntries(Object.entries(obj).filter(([key]) => key !== '@type')),
            type.$descriptor,
            registry,
            true,
            options,
          ),
        ),
      )
      .finish(),
  };
}
function integerJSON(value: unknown, unsigned: boolean, bits: number): number | string {
  if (typeof value !== 'number' && typeof value !== 'string') {
    throw new TypeError('Invalid protobuf integer.');
  }
  const text = String(value);
  const match = /^([+-]?)(\d+)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/.exec(text);
  if (!match) throw new TypeError('Invalid protobuf integer.');
  const fraction = match[3] ?? '';
  const digits = (match[2] + fraction).replace(/^0+/, '') || '0';
  const scale = Number(match[4] ?? 0) - fraction.length;
  if (digits === '0') return bits === 64 ? '0' : 0;
  if (
    !Number.isSafeInteger(scale) ||
    scale > 20 ||
    scale < -digits.length ||
    digits.length + scale > 20
  ) {
    throw new TypeError('Protobuf integer is out of range.');
  }
  if (scale < 0 && !/^0*$/.test(digits.slice(scale))) {
    throw new TypeError('Protobuf integer must be integral.');
  }
  const integer = BigInt(
    (match[1] === '-' ? '-' : '') +
      (scale >= 0 ? digits + '0'.repeat(scale) : digits.slice(0, scale)),
  );
  const max = (1n << BigInt(unsigned ? bits : bits - 1)) - 1n;
  const min = unsigned ? 0n : -(1n << BigInt(bits - 1));
  if (integer < min || integer > max) throw new TypeError('Protobuf integer is out of range.');
  return bits === 64 ? integer.toString() : Number(integer);
}
const skippedEnum = Symbol('skippedEnum');
function scalarJSON(
  value: unknown,
  type: number | undefined,
  enumNames?: readonly string[],
  ignoreUnknown = false,
): unknown {
  if (type === undefined || type === 11) return value;
  if ([3, 4, 6, 16, 18].includes(type)) return integerJSON(value, [4, 6].includes(type), 64);
  if ([5, 7, 13, 15, 17].includes(type)) return integerJSON(value, [7, 13].includes(type), 32);
  if (type === 14) {
    if (typeof value === 'string') {
      if (enumNames?.includes(value)) return value;
      try {
        return integerJSON(value, false, 32);
      } catch {
        if (ignoreUnknown) return skippedEnum;
        throw new TypeError(`Unknown protobuf enum: ${value}`);
      }
    }
    return integerJSON(value, false, 32);
  }
  if (type === 8) {
    if (typeof value !== 'boolean') throw new TypeError('Protobuf bool requires a JSON boolean.');
  } else if (type === 9) {
    if (typeof value !== 'string' || /[\uD800-\uDFFF]/u.test(value)) {
      throw new TypeError('Protobuf string requires a valid JSON string.');
    }
  } else if (type === 12) {
    if (
      typeof value !== 'string' ||
      !/^[A-Za-z0-9+/_-]*={0,2}$/.test(value) ||
      value.replace(/=+$/, '').length % 4 === 1 ||
      (value.includes('=') && value.length % 4 !== 0)
    ) {
      throw new TypeError('Protobuf bytes require a Base64 string.');
    }
    return value.replace(/-/g, '+').replace(/_/g, '/');
  } else if ([1, 2].includes(type)) {
    if (typeof value === 'string' && ['NaN', 'Infinity', '-Infinity'].includes(value)) return value;
    if (
      (typeof value !== 'number' && typeof value !== 'string') ||
      (typeof value === 'string' &&
        !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(value)) ||
      !Number.isFinite(Number(value)) ||
      (type === 2 && !Number.isFinite(Math.fround(Number(value))))
    ) {
      throw new TypeError('Invalid protobuf float.');
    }
    return Number(value);
  }
  return value;
}
function validateNativeValue(name: string | undefined, value: unknown): void {
  if (name === 'google.protobuf.Timestamp' && dayjs.isDayjs(value) && !value.isValid()) {
    throw new TypeError('Invalid protobuf Timestamp.');
  }
  if (name === 'google.protobuf.Duration' && dayjs.isDuration(value)) {
    const { seconds, nanos } = wkt['.google.protobuf.Duration'].toWire(value);
    const sec = seconds.toNumber();
    if (
      !Number.isInteger(sec) ||
      Math.abs(sec) > 315576000000 ||
      !Number.isInteger(nanos) ||
      Math.abs(nanos) > 999999999 ||
      (sec < 0 && nanos > 0) ||
      (sec > 0 && nanos < 0)
    ) {
      throw new TypeError('Invalid protobuf Duration.');
    }
  }
}
function validateNativeJSON(name: string, value: unknown, options: ProtoJSONOptions): void {
  if (name === 'google.protobuf.Timestamp') {
    const match =
      typeof value === 'string' &&
      /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(
        value,
      );
    if (!match) throw new TypeError('Timestamp requires an RFC3339 string.');
    const [, y, m, d, h, min, sec] = match;
    const ms = Date.parse(value as string);
    if (
      +y < 1 ||
      +m < 1 ||
      +m > 12 ||
      +d < 1 ||
      +d > new Date(Date.UTC(+y, +m, 0)).getUTCDate() ||
      +h > 23 ||
      +min > 59 ||
      +sec > 59 ||
      !Number.isFinite(ms) ||
      ms < -62135596800000 ||
      ms > 253402300799999
    ) {
      throw new TypeError('Invalid protobuf Timestamp.');
    }
  } else if (name === 'google.protobuf.Duration') {
    const match = typeof value === 'string' && /^-?(\d+)(?:\.\d{1,9})?s$/.exec(value);
    if (!match || Number(match[1]) > 315576000000) {
      throw new TypeError('Invalid protobuf Duration string.');
    }
  } else if (name === 'google.protobuf.Empty') {
    if (
      !value ||
      typeof value !== 'object' ||
      Array.isArray(value) ||
      (!options.ignoreUnknownFields && Object.keys(value).length)
    ) {
      throw new TypeError('Empty requires an empty JSON object.');
    }
  } else if (
    ['google.protobuf.Struct', 'google.protobuf.ListValue', 'google.protobuf.Value'].includes(name)
  ) {
    if (
      name === 'google.protobuf.Struct' &&
      (!value || typeof value !== 'object' || Array.isArray(value))
    ) {
      throw new TypeError('Struct requires a JSON object.');
    }
    if (name === 'google.protobuf.ListValue' && !Array.isArray(value)) {
      throw new TypeError('ListValue requires a JSON array.');
    }
    const check = (item: unknown): void => {
      if (item === null || typeof item === 'boolean') return;
      if (typeof item === 'number' && Number.isFinite(item)) return;
      if (typeof item === 'string') {
        scalarJSON(item, 9);
        return;
      }
      if (item && typeof item === 'object') {
        for (const [key, child] of Object.entries(item)) {
          scalarJSON(key, 9);
          check(child);
        }
        return;
      }
      throw new TypeError('Value requires JSON data.');
    };
    check(value);
  }
}
interface JSONField {
  key: string;
  fd: MessageFieldDescriptor;
  group?: string;
  extension?: ExtensionDescriptor;
}
function jsonFields(desc: MessageDescriptor, registry: Registry): JSONField[] {
  const fields: JSONField[] = [];
  for (const [key, fd] of Object.entries(desc.fields)) {
    if (fd.oneof) {
      for (const [member, child] of Object.entries(fd.message?.()?.fields ?? {})) {
        fields.push({ key: member, fd: child, group: key });
      }
    } else fields.push({ key, fd });
  }
  for (const ext of registry.listExtensions(desc.type ?? '')) {
    const camel = ext.name.replace(/_([a-zA-Z])/g, (_, letter: string) => letter.toUpperCase());
    fields.push({
      key: ext.jsonName ?? camel.charAt(0).toLowerCase() + camel.slice(1),
      extension: ext,
      fd: {
        pbName: ext.name,
        scalarType: (ext.kind.includes('enum')
          ? 14
          : ext.scalarType) as MessageFieldDescriptor['scalarType'],
        repeated: ext.kind.startsWith('repeated_'),
        enumNames: ext.enumType
          ? registry.getEnum(ext.enumType)?.values.map((v) => v.name)
          : undefined,
        message: ext.kind.includes('message')
          ? () =>
              registry.getMessage(ext.messageType ?? '')?.$descriptor ??
              (wkt as Record<string, { $descriptor?: MessageDescriptor }>)[`.${ext.messageType}`]
                ?.$descriptor
          : undefined,
      },
    });
  }
  return fields;
}
function includeExtensions(
  json: unknown,
  raw: unknown,
  desc: MessageDescriptor | undefined,
  registry: Registry,
): unknown {
  validateNativeValue(desc?.type, raw);
  if (
    !desc ||
    desc.reflect ||
    !json ||
    typeof json !== 'object' ||
    Array.isArray(json) ||
    !raw ||
    typeof raw !== 'object'
  ) {
    return json;
  }
  const result = { ...(json as JSONValue) };
  for (const { key, fd, group, extension } of jsonFields(desc, registry)) {
    const child = fd.map ? fd.mapValue?.() : fd.message?.();
    const rawKey = extension
      ? extension.name.replace(/_([a-zA-Z])/g, (_, letter: string) => letter.toUpperCase())
      : key;
    const fieldKey = extension
      ? (extension.typescriptName ?? rawKey.charAt(0).toLowerCase() + rawKey.slice(1))
      : rawKey;
    const source = group ? (raw as JSONValue)[group] : raw;
    const current =
      source && Object.hasOwn(source, fieldKey) ? (source as JSONValue)[fieldKey] : undefined;
    if (extension && current !== undefined) {
      const convert = (item: unknown): unknown => {
        if (extension.kind.includes('message')) {
          const type = registry.getMessage(extension.messageType ?? '');
          const native = wellKnown(extension.messageType ?? '');
          if (!type && !native) {
            throw new TypeError(`Unregistered protobuf extension type: ${extension.messageType}`);
          }
          const value = type ? type.toJSON(item as never) : native!.toJSON(item as never);
          return includeExtensions(value, item, child, registry);
        }
        if (extension.kind.includes('enum')) {
          const type = registry.getEnum(extension.enumType ?? '');
          if (!type) {
            throw new TypeError(`Unregistered protobuf extension enum: ${extension.enumType}`);
          }
          return type.toJSON(item as never);
        }
        if (extension.scalarType === 12) return base64FromBytes(item as Uint8Array);
        if ([3, 4, 6, 16, 18].includes(extension.scalarType ?? 0)) return String(item);
        return item;
      };
      Object.defineProperty(result, key, {
        value: fd.repeated ? (current as unknown[]).map(convert) : convert(current),
        writable: true,
        enumerable: true,
        configurable: true,
      });
    } else if (!extension && child && current !== undefined) {
      const input = Object.hasOwn(result, fd.jsonName ?? key) ? (fd.jsonName ?? key) : fd.pbName;
      if (!Object.hasOwn(result, input)) continue;
      if (fd.map || fd.repeated) {
        const entries = Object.entries(result[input] as JSONValue).map(([entry, item]) => [
          entry,
          includeExtensions(
            item,
            Object.hasOwn(current as object, entry) ? (current as JSONValue)[entry] : undefined,
            child,
            registry,
          ),
        ]);
        result[input] = fd.repeated ? entries.map(([, item]) => item) : Object.fromEntries(entries);
      } else result[input] = includeExtensions(result[input], current, child, registry);
    }
  }
  return result;
}
function transform(
  value: unknown,
  desc: MessageDescriptor | undefined,
  registry: Registry,
  read: boolean,
  options: ProtoJSONOptions = {},
): unknown {
  if (!desc || value === undefined || value === null) return value;
  if (desc.type === 'google.protobuf.Any') {
    return read
      ? anyToJSON(anyFromProtoJSON(value, registry, options))
      : anyToProtoJSON(anyFromJSON(value), registry);
  }
  if (desc.type === 'google.protobuf.FieldMask') {
    return read
      ? fmFromProtoJSON(value as string)
      : fmToProtoJSON(value === '' ? [] : String(value).split(','));
  }
  if (wrapperTypes.has(desc.type ?? '')) {
    if (read) return { value: scalarJSON(value, desc.fields.value.scalarType) };
    const scalar = (value as JSONValue).value;
    return typeof scalar === 'number' && !Number.isFinite(scalar) ? String(scalar) : scalar;
  }
  if (desc.reflect) {
    validateNativeJSON(desc.type ?? '', value, options);
    return read ? value : canonicalNativeJSON(desc.type ?? '', value);
  }
  if (read && (typeof value !== 'object' || Array.isArray(value))) {
    throw new TypeError('Message protobuf JSON must be an object.');
  }
  const obj = { ...(value as JSONValue) };
  const fields = jsonFields(desc, registry);
  if (read) {
    const seen = new Set<MessageFieldDescriptor>();
    const groups = new Set<string>();
    for (const input of Object.keys(obj)) {
      const field = fields.find(({ key, fd, extension }) =>
        extension
          ? input === `[${extension.fullName}]`
          : input === (fd.jsonName ?? key) || input === fd.pbName,
      );
      if (!field) {
        if (!options.ignoreUnknownFields) throw new TypeError(`Unknown protobuf field: ${input}`);
        delete obj[input];
        continue;
      }
      if (
        options.ignoreUnknownFields &&
        !field.fd.repeated &&
        !field.fd.map &&
        field.fd.scalarType === 14 &&
        typeof obj[input] === 'string' &&
        scalarJSON(obj[input], 14, field.fd.enumNames, true) === skippedEnum
      ) {
        delete obj[input];
        continue;
      }
      if (seen.has(field.fd)) throw new TypeError(`Duplicate protobuf field: ${input}`);
      seen.add(field.fd);
      if (field.group && obj[input] !== null && obj[input] !== undefined) {
        if (groups.has(field.group)) {
          throw new TypeError(`Multiple fields for oneof: ${field.group}`);
        }
        groups.add(field.group);
      }
    }
  }
  for (const { key, fd, extension } of fields) {
    const name = fd.jsonName ?? key,
      input =
        extension && read ? `[${extension.fullName}]` : Object.hasOwn(obj, name) ? name : fd.pbName;
    if (!Object.hasOwn(obj, input) || obj[input] === null || obj[input] === undefined) continue;
    const child = fd.map ? fd.mapValue?.() : fd.message?.();
    const convert = (item: unknown): unknown => {
      if (read) {
        if (item === null && child?.type !== 'google.protobuf.Value') {
          throw new TypeError(`Null collection element: ${input}`);
        }
        if (!child) {
          return scalarJSON(
            item,
            fd.map ? fd.mapValueType : fd.scalarType,
            fd.enumNames,
            options.ignoreUnknownFields,
          );
        }
      }
      if (
        !read &&
        [1, 2].includes((fd.map ? fd.mapValueType : fd.scalarType) ?? 0) &&
        typeof item === 'number' &&
        !Number.isFinite(item)
      ) {
        return String(item);
      }
      return transform(item, child, registry, read, options);
    };
    if (fd.map) {
      if (read && (typeof obj[input] !== 'object' || Array.isArray(obj[input]))) {
        throw new TypeError(`Map field requires an object: ${input}`);
      }
      obj[input] = Object.fromEntries(
        Object.entries(obj[input] as JSONValue)
          .map(([k, v]) => {
            if (read) {
              if (fd.mapKeyType === 8) {
                if (k !== 'true' && k !== 'false') {
                  throw new TypeError('Protobuf bool map keys must be true or false.');
                }
              } else k = String(scalarJSON(k, fd.mapKeyType));
            }
            return [k, convert(v)];
          })
          .filter(([, v]) => v !== skippedEnum),
      );
    } else if (fd.repeated) {
      if (!Array.isArray(obj[input])) {
        throw new TypeError(`Repeated field requires an array: ${input}`);
      }
      obj[input] = (obj[input] as unknown[])
        .map((v) => convert(v))
        .filter((v) => v !== skippedEnum);
    } else {
      const converted = convert(obj[input]);
      if (converted === skippedEnum) delete obj[input];
      else obj[input] = converted;
    }
    if (extension && Object.hasOwn(obj, input)) {
      const output = read ? name : `[${extension.fullName}]`;
      Object.defineProperty(obj, output, {
        value: obj[input],
        writable: true,
        enumerable: true,
        configurable: true,
      });
      if (output !== input) delete obj[input];
    }
  }
  return obj;
}
/** Converts a generated message to canonical JSON without changing its existing toJSON behavior. */
export function toProtoJSON<T>(
  type: MessageFns<T, string>,
  message: T,
  registry: Registry,
): unknown {
  return transform(
    includeExtensions(type.toJSON(message), message, type.$descriptor, registry),
    type.$descriptor,
    registry,
    false,
  );
}
/** Reads canonical JSON through the existing generated constructors. */
export function fromProtoJSON<T>(
  type: MessageFns<T, string>,
  value: unknown,
  registry: Registry,
  options: ProtoJSONOptions = {},
): T {
  if (value === null && type.$type !== 'google.protobuf.Value') {
    throw new TypeError('Message protobuf JSON must be an object.');
  }
  return type.fromJSON(transform(value, type.$descriptor, registry, true, options));
}
