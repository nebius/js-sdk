/* eslint-disable @typescript-eslint/no-explicit-any */
/* Runtime core helpers for Nebius TS generator */

// dayjs + plugins
import dayjs, { Dayjs } from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import Long from 'long';

(dayjs as unknown as { extend: (p: unknown) => void }).extend(durationPlugin as unknown);
export { dayjs };
export type { Dayjs };
export type Duration = ReturnType<typeof dayjs.duration>;

export { default as Long } from 'long';
// eslint-disable-next-line n/no-extraneous-import
export { BinaryReader, BinaryWriter } from '@bufbuild/protobuf/wire';

// Message typing for generated messages
export interface MessageFns<T, TType extends string> {
  $type: TType;
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
