/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Defines the protobuf types, descriptors, and wire helpers used by generated
 * Nebius SDK code.
 *
 * Application code normally uses generated message exports. Use this
 * low-level module when you implement a registry, inspect runtime descriptors,
 * or encode and decode dynamic protobuf values.
 *
 * @packageDocumentation
 */

import dayjs, { Dayjs } from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
import Long from 'long';

(dayjs as unknown as { extend: (p: unknown) => void }).extend(durationPlugin as unknown);
/** Provides the configured Day.js instance used by generated well-known types. */
export { dayjs };
/** Represents a protobuf timestamp in generated SDK code. */
export type { Dayjs };

/** Represents a protobuf duration as a Day.js duration. */
export type Duration = ReturnType<typeof dayjs.duration>;

/** Provides arbitrary-precision values for protobuf 64-bit integers. */
export { default as Long } from 'long';
/** Provides protobuf wire readers and writers used by generated codecs. */
export { BinaryReader, BinaryWriter } from '@bufbuild/protobuf/wire';

/**
 * Identifies a protobuf scalar type by its descriptor numeric code.
 *
 * Generated descriptors use these values to distinguish default values when
 * they build reset masks.
 */
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

/**
 * Describes one generated message field for runtime reflection.
 *
 * This is a small SDK descriptor, not a complete protobuf descriptor. It
 * contains only the data needed by runtime features such as reset masks.
 */
export interface MessageFieldDescriptor {
  /** Contains the original `snake_case` protobuf field name. */
  pbName: string;
  /** Specifies whether the field is repeated. */
  repeated?: boolean;
  /** Specifies whether the field belongs to a oneof. */
  oneof?: boolean;
  /** Specifies whether the field is a map. */
  map?: boolean;
  /** Contains the protobuf descriptor code when this is a scalar or enum. */
  scalarType?: MessageFieldScalarType;
  /** Returns the nested descriptor when this field contains a message. */
  message?: () => MessageDescriptor | undefined;
  /** Returns the nested descriptor when this is a map with message values. */
  mapValue?: () => MessageDescriptor | undefined;
}

/** Describes the fields and optional value adapter for one generated message. */
export interface MessageDescriptor {
  /**
   * Converts a runtime value to its descriptor-shaped object.
   *
   * Well-known types use this adapter because their TypeScript values do not
   * have the same shape as their protobuf fields.
   */
  reflect?: (value: unknown) => Record<string, unknown> | undefined;
  /** Maps generated TypeScript field names to their descriptors. */
  fields: Record<string, MessageFieldDescriptor>;
}

/**
 * Identifies a non-enumerable {@link MessageDescriptor} attached by
 * {@link attachMessageDescriptor}.
 *
 * Runtime helpers read this symbol. It does not appear in normal object
 * iteration or JSON output.
 */
export const messageDescriptorSymbol: unique symbol = Symbol('nebius.messageDescriptor');

/**
 * Attaches a descriptor to a message without adding an enumerable property.
 *
 * The function normally changes and returns `message`. If the object does not
 * accept a new property, it creates a shallow copy, attaches the descriptor,
 * and returns that copy. Always use the returned value.
 *
 * If `descriptor` is absent, the function returns `message` unchanged.
 */
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

/**
 * Defines the static runtime operations emitted for a generated message.
 *
 * Generated message exports implement this interface. Application code
 * normally uses {@link MessageFns.create | create} for type-safe construction,
 * {@link MessageFns.encode | encode} followed by `finish()` for wire bytes, and
 * {@link MessageFns.decode | decode} for wire input.
 */
export interface MessageFns<T, TType extends string> {
  /** Contains the fully qualified runtime type name. */
  $type: TType;
  /** Contains optional reflection data used by SDK runtime helpers. */
  $descriptor?: MessageDescriptor;
  /** Encodes a message into a supplied or new protobuf writer. */
  encode(
    message: T,
    writer?: import('@bufbuild/protobuf/wire').BinaryWriter,
  ): import('@bufbuild/protobuf/wire').BinaryWriter;
  /** Decodes one message from wire bytes or a reader. */
  decode(input: import('@bufbuild/protobuf/wire').BinaryReader | Uint8Array, length?: number): T;
  /** Converts protobuf JSON input to the generated TypeScript representation. */
  fromJSON(object: any): T;
  /**
   * Converts a message to JSON.
   *
   * `json` uses standard protobuf JSON forms. `pb` exposes protobuf field
   * shapes for SDK compatibility where supported.
   */
  toJSON(message: T, use?: 'json' | 'pb'): unknown;
  /** Creates a message from a deep partial value and applies field defaults. */
  create<I extends DeepPartial<T>>(base?: I): T;
  /** Converts a deep partial value to a complete generated message. */
  fromPartial<I extends DeepPartial<T>>(object: I): T;
}

/**
 * Identifies raw unknown-field bytes preserved during protobuf decoding.
 *
 * Generated decoders store the original bytes on this symbol when they find
 * unknown fields. Generated encoders write the bytes again. This supports
 * forward compatibility when an older SDK reads a message with newer fields.
 */
export const unknownFieldsSymbol: unique symbol = Symbol('nebius.unknownFields');

/** Lists values that {@link DeepPartial} treats as indivisible leaves. */
export type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

/**
 * Makes nested message fields optional for generated
 * {@link MessageFns.create | create} and
 * {@link MessageFns.fromPartial | fromPartial} methods.
 *
 * A 64-bit integer also accepts a string or number. Use a string for values
 * outside JavaScript's safe integer range.
 */
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

/** Returns `true` for every value except `null` and `undefined`. */
export function isSet(value: unknown): boolean {
  return value !== null && value !== undefined;
}
