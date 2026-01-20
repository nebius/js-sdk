import type { Field as TSDescriptorField } from '../descriptors';

import { resolveEnumName, resolveMessageName } from './typeNames';

// Basic string helpers
export function lowerFirst(s: string): string {
  return s.length ? s[0].toLowerCase() + s.slice(1) : s;
}
export function camel(s: string): string {
  if (!s) return s;
  const out = s.replace(/_([a-zA-Z])/g, (_, c: string) => c.toUpperCase());
  return out[0].toLowerCase() + out.slice(1);
}

// Enum/Message JSON converters used during codegen
export function msgFromJSONConv(f: TSDescriptorField): string {
  const ref = resolveMessageName(f.message());
  return ref ? `${ref}.fromJSON` : '(x: any) => x';
}
export function msgToJSONConv(f: TSDescriptorField): string {
  const ref = resolveMessageName(f.message());
  return ref ? `${ref}.toJSON` : '(x: any) => x';
}
export function enumFromJSONConv(f: TSDescriptorField): string {
  const ref = resolveEnumName(f.enum());
  return ref ? `${ref}.fromJSON` : 'Number';
}
export function enumToJSONConv(f: TSDescriptorField): string {
  const ref = resolveEnumName(f.enum());
  return ref ? `${ref}.toJSON` : '(x: any) => x';
}

// Wire helpers for encode/decode
export function wireTypeFor(f: TSDescriptorField): number {
  if (f.isMessage() || f.typeCode() === 9 /* string */ || f.typeCode() === 12 /* bytes */) return 2; // length-delimited
  switch (f.typeCode()) {
    case 1 /* double */:
    case 6 /* fixed64 */:
    case 16 /* sfixed64 */:
      return 1; // 64-bit
    case 5 /* int32 */:
    case 7 /* fixed32 */:
    case 13 /* uint32 */:
    case 15 /* sfixed32 */:
    case 17 /* sint32 */:
      // note: fixed32/sfixed32 are 32-bit wire type (5)
      if (f.typeCode() === 7 || f.typeCode() === 15) return 5;
      return 0; // varint for int32/uint32/sint32
    case 2 /* float */:
      return 5; // 32-bit
    case 3 /* int64 */:
    case 4 /* uint64 */:
    case 18 /* sint64 */:
    case 8 /* bool */:
    case 14 /* enum (int32 varint) */:
      return 0; // varint
    default:
      return 0; // fallback
  }
}
export function tagFor(f: TSDescriptorField): number {
  return ((f.descriptor.number! as number) << 3) | wireTypeFor(f);
}
export function writerMethodFor(f: TSDescriptorField): string {
  if (f.isEnum()) return 'int32';
  switch (f.typeCode()) {
    case 9 /* string */:
      return 'string';
    case 8 /* bool */:
      return 'bool';
    case 12 /* bytes */:
      return 'bytes';
    case 1 /* double */:
      return 'double';
    case 2 /* float */:
      return 'float';
    case 3 /* int64 */:
      return 'int64';
    case 4 /* uint64 */:
      return 'uint64';
    case 5 /* int32 */:
      return 'int32';
    case 6 /* fixed64 */:
      return 'fixed64';
    case 7 /* fixed32 */:
      return 'fixed32';
    case 13 /* uint32 */:
      return 'uint32';
    case 15 /* sfixed32 */:
      return 'sfixed32';
    case 16 /* sfixed64 */:
      return 'sfixed64';
    case 17 /* sint32 */:
      return 'sint32';
    case 18 /* sint64 */:
      return 'sint64';
    default:
      return 'int32';
  }
}
export function readerMethodFor(f: TSDescriptorField): string {
  if (f.isEnum()) return 'int32';
  switch (f.typeCode()) {
    case 9 /* string */:
      return 'string';
    case 8 /* bool */:
      return 'bool';
    case 12 /* bytes */:
      return 'bytes';
    case 1 /* double */:
      return 'double';
    case 2 /* float */:
      return 'float';
    case 3 /* int64 */:
      return 'int64';
    case 4 /* uint64 */:
      return 'uint64';
    case 5 /* int32 */:
      return 'int32';
    case 6 /* fixed64 */:
      return 'fixed64';
    case 7 /* fixed32 */:
      return 'fixed32';
    case 13 /* uint32 */:
      return 'uint32';
    case 15 /* sfixed32 */:
      return 'sfixed32';
    case 16 /* sfixed64 */:
      return 'sfixed64';
    case 17 /* sint32 */:
      return 'sint32';
    case 18 /* sint64 */:
      return 'sint64';
    default:
      return 'int32';
  }
}
export function isPackableScalar(f: TSDescriptorField): boolean {
  if (!f.isRepeated()) return false;
  if (f.isMessage()) return false;
  if (f.typeCode() === 9 /* string */ || f.typeCode() === 12 /* bytes */) return false;
  // numbers/bool/enum
  return true;
}
export function isTimestampField(f: TSDescriptorField): boolean {
  return f.isMessage() && f.typeNameNormalized() === '.google.protobuf.Timestamp';
}

interface deprecationOptions {
  effectiveAt?: string;
  description?: string;
}
interface enumValueOptionsDeprecation {
  enumValueDeprecationDetails?: deprecationOptions;
}
interface fieldOptionsDeprecation {
  fieldDeprecationDetails?: deprecationOptions;
}
interface messageOptionsDeprecation {
  messageDeprecationDetails?: deprecationOptions;
}
interface methodOptionsDeprecation {
  methodDeprecationDetails?: deprecationOptions;
}
interface serviceOptionsDeprecation {
  serviceDeprecationDetails?: deprecationOptions;
}
interface deprecatedDescriptor {
  options?: (
    | enumValueOptionsDeprecation
    | fieldOptionsDeprecation
    | messageOptionsDeprecation
    | methodOptionsDeprecation
    | serviceOptionsDeprecation
  ) & {
    deprecated?: boolean;
  };
}

export function deprecationLine(descriptor: deprecatedDescriptor): string | undefined {
  const opts = deprecationOptions(descriptor);
  if (opts === undefined) return undefined;
  const effectiveAt = opts.effectiveAt;
  const description: string | undefined = opts.description;
  return `Deprecated${effectiveAt ? `, will be removed on ${effectiveAt}` : ''}${description ? `: ${description}` : ''}.`;
}
export function deprecationOptions(
  descriptor: deprecatedDescriptor,
): deprecationOptions | undefined {
  const { options } = descriptor || {};
  if (!options?.deprecated) return undefined;
  let details: deprecationOptions = {};
  if ('enumValueDeprecationDetails' in options && options.enumValueDeprecationDetails) {
    details = options.enumValueDeprecationDetails;
  } else if ('fieldDeprecationDetails' in options && options.fieldDeprecationDetails) {
    details = options.fieldDeprecationDetails;
  } else if ('messageDeprecationDetails' in options && options.messageDeprecationDetails) {
    details = options.messageDeprecationDetails;
  } else if ('methodDeprecationDetails' in options && options.methodDeprecationDetails) {
    details = options.methodDeprecationDetails;
  } else if ('serviceDeprecationDetails' in options && options.serviceDeprecationDetails) {
    details = options.serviceDeprecationDetails;
  }
  return details;
}

// WKT support
export const WKT_TYPE_MAP: Record<string, string> = {
  '.google.protobuf.Timestamp': 'Dayjs',
  '.google.protobuf.Duration': 'Duration',
  '.google.protobuf.FieldMask': 'string[]',
  '.google.protobuf.Any': '{ typeUrl: string; value: Uint8Array }',
  '.google.protobuf.Struct': '{ [key: string]: any }',
  '.google.protobuf.Value': 'any',
  '.google.protobuf.ListValue': 'any[]',
  '.google.protobuf.Empty': '{}',
};
export function wktFqnOf(f: TSDescriptorField): string | undefined {
  if (!f.isMessage()) return undefined;
  const name = f.typeNameNormalized();
  return name && WKT_TYPE_MAP[name] ? name : undefined;
}

export function tsFieldType(f: TSDescriptorField): string {
  if (f.isMap()) {
    const entry = f.message();
    const valF = entry?.fields.find((x) => x.descriptor.number === 2);
    const valT = valF ? scalarOrRef(valF) : 'any';
    return `{ [key: string]: ${valT} }`;
  }
  if (f.isRepeated()) return `${scalarOrRef(f)}[]`;
  return scalarOrRef(f) + (f.tracksPresence() ? ' | undefined' : '');
}

export function scalarOrRef(f: TSDescriptorField): string {
  if (f.isEnum()) return resolveEnumName(f.enum()) ?? 'number';
  if (f.isMessage()) {
    const w = wktFqnOf(f);
    if (w) return WKT_TYPE_MAP[w];
    return resolveMessageName(f.message()) ?? 'any';
  }
  // rough scalar mapping
  switch (f.typeCode()) {
    case 9 /* string */:
      return 'string';
    case 8 /* bool */:
      return 'boolean';
    case 12 /* bytes */:
      return 'Uint8Array';
    case 1 /* double */:
    case 2 /* float */:
      return 'number';
    case 3 /* int64 */:
    case 4 /* uint64 */:
    case 6 /* fixed64 */:
    case 16 /* sfixed64 */:
    case 18 /* sint64 */:
      return 'Long';
    case 5 /* int32 */:
    case 7 /* fixed32 */:
    case 13 /* uint32 */:
    case 15 /* sfixed32 */:
    case 17 /* sint32 */:
      return 'number';
    default:
      return 'any';
  }
}

export function is64Bit(f: TSDescriptorField): boolean {
  switch (f.typeCode()) {
    case 3 /* int64 */:
    case 4 /* uint64 */:
    case 6 /* fixed64 */:
    case 16 /* sfixed64 */:
    case 18 /* sint64 */:
      return true;
    default:
      return false;
  }
}

export function jsonScalarConverter(f: TSDescriptorField): string {
  switch (f.typeCode()) {
    case 9 /* string */:
      return 'String';
    case 8 /* bool */:
      return 'Boolean';
    case 12 /* bytes */:
      return 'bytesFromBase64';
    default:
      return 'Number';
  }
}

export function defaultValueFor(f: TSDescriptorField): string {
  if (f.isMap()) return '{}';
  if (f.isRepeated()) return '[]';
  if (f.tracksPresence()) return 'undefined';
  if (f.isEnum()) {
    const first = f.enum()?.valueList?.[0]?.name;
    const ref = resolveEnumName(f.enum());
    return first && ref ? `${ref}.${first}` : '0';
  }
  if (wktFqnOf(f)) return 'undefined';
  if (isTimestampField(f)) return 'undefined';
  if (f.isMessage()) return 'undefined';
  switch (f.typeCode()) {
    case 9 /* string */:
      return '""';
    case 8 /* bool */:
      return 'false';
    case 12 /* bytes */:
      return 'new Uint8Array(0)';
    case 3 /* int64 */:
    case 4 /* uint64 */:
    case 6 /* fixed64 */:
    case 16 /* sfixed64 */:
    case 18 /* sint64 */:
      return 'Long.ZERO';
    default:
      return '0';
  }
}
