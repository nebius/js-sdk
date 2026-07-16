/* eslint-disable @typescript-eslint/no-explicit-any */
/* Runtime core helpers for Nebius TS generator */

// dayjs + plugins
import dayjs, { Dayjs } from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import Long from 'long';

(dayjs as unknown as { extend: (p: unknown) => void }).extend(durationPlugin as unknown);
export { dayjs };
export type { Dayjs };
export type Duration = ReturnType<typeof dayjs.duration>;

export { default as Long } from 'long';
export { BinaryReader, BinaryWriter } from '@bufbuild/protobuf/wire';

// Message typing for generated messages
export type MessageFieldScalarType =
  | 1 // double
  | 2 // float
  | 3 // int64
  | 4 // uint64
  | 5 // int32
  | 6 // fixed64
  | 7 // fixed32
  | 8 // bool
  | 9 // string
  | 12 // bytes
  | 13 // uint32
  | 14 // enum
  | 15 // sfixed32
  | 16 // sfixed64
  | 17 // sint32
  | 18; // sint64

export interface MessageFieldDescriptor {
  pbName: string;
  repeated?: boolean;
  oneof?: boolean;
  map?: boolean;
  scalarType?: MessageFieldScalarType;
  message?: () => MessageDescriptor | undefined;
  mapValue?: () => MessageDescriptor | undefined;
}

export interface MessageDescriptor {
  reflect?: (value: unknown) => Record<string, unknown> | undefined;
  fields: Record<string, MessageFieldDescriptor>;
}

export const messageDescriptorSymbol: unique symbol = Symbol('nebius.messageDescriptor');

export function attachMessageDescriptor<T extends object>(
  message: T,
  descriptor: MessageDescriptor | undefined,
): T {
  if (!descriptor) return message;
  const defineDescriptor = (target: T): T => {
    Object.defineProperty(target, messageDescriptorSymbol, {
      configurable: true,
      enumerable: false,
      value: descriptor,
    });
    return target;
  };
  try {
    return defineDescriptor(message);
  } catch {
    return defineDescriptor((Array.isArray(message) ? [...message] : { ...message }) as T);
  }
}

export interface MessageFns<T, TType extends string> {
  $type: TType;
  $descriptor?: MessageDescriptor;
  encode(
    message: T,
    writer?: import('@bufbuild/protobuf/wire').BinaryWriter,
  ): import('@bufbuild/protobuf/wire').BinaryWriter;
  decode(input: import('@bufbuild/protobuf/wire').BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T, use?: 'json' | 'pb'): unknown;
  create<I extends DeepPartial<T>>(base?: I): T;
  fromPartial<I extends DeepPartial<T>>(object: I): T;
}

// Symbol key for storing unknown/raw bytes decoded from the input stream.
// Generated decode functions should set message[unknownFieldsSymbol] = Uint8Array
// (or similar) when they encounter unknown fields that need to be preserved.
export const unknownFieldsSymbol: unique symbol = Symbol('nebius.unknownFields');

export type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
          : Partial<T>;

export function isSet(value: unknown): boolean {
  return value !== null && value !== undefined;
}
