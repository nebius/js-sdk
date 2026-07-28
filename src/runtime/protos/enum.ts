/* eslint-disable @typescript-eslint/no-explicit-any */
import util from 'node:util';

import { customJson } from '../util/logging.js';

import type { BinaryWriter } from './core.js';

/**
 * Identifies symbol-keyed metadata attached to a generated enum value.
 *
 * The symbol property can be enumerable, but `Object.keys` and normal JSON
 * output ignore symbol-keyed properties. Generated documentation can read the
 * metadata without adding a string-keyed field to JSON output.
 */
export const ENUM_VALUE_META: unique symbol = Symbol('nebius.enum.value.meta');

/** Contains documentation metadata for one generated enum value. */
export interface EnumValueMeta {
  /** Contains the original protobuf comment, when one exists. */
  comment?: string;
}

/**
 * Represents one generated enum value.
 *
 * Enum values are objects, not TypeScript numeric-enum members. Use
 * {@link EnumInstance.toNumber | toNumber()} for a wire-compatible numeric code
 * and {@link EnumInstance.toString | toString()} for the name.
 */
export type EnumInstance<TName extends string = string> = {
  /** Contains the numeric protobuf value. */
  readonly code: number;
  /** Contains the protobuf value name. */
  readonly name: TName;
  /** Converts the value to number. */
  toNumber(): number;
  /** Converts the value to string. */
  toString(): string;
  /** Contains the enum value meta. */
  readonly [ENUM_VALUE_META]?: EnumValueMeta;
  /** Formats the enum value for Node.js inspection. */
  [util.inspect.custom]?: () => string;
  /** Returns a JSON-safe value for SDK logging. */
  [customJson]?: () => unknown;
};

/**
 * Defines the static operations and named values of a generated enum.
 *
 * {@link EnumClass.fromNumber | fromNumber()} preserves unknown numeric input
 * as a new `UNRECOGNIZED` instance with that numeric code. Unknown non-numeric
 * JSON input becomes the shared {@link EnumClass.UNRECOGNIZED | UNRECOGNIZED}
 * value with code `-1`.
 */
export type EnumClass<TNames extends string = string> = {
  /** Contains the fully qualified protobuf enum name. */
  readonly $type: string;
  /** Contains the shared fallback value with code `-1`. */
  readonly UNRECOGNIZED: EnumInstance<TNames | 'UNRECOGNIZED'>;
  /** Lists known values in generator definition order. */
  readonly values: ReadonlyArray<EnumInstance<TNames | 'UNRECOGNIZED'>>;
  /** Maps known numeric codes to values. */
  readonly _byCode: Map<number, EnumInstance<TNames | 'UNRECOGNIZED'>>;
  /** Maps known names to values. */
  readonly _byName: Map<TNames, EnumInstance<TNames>>;
  /**
   * Returns a known value or an {@link EnumClass.UNRECOGNIZED | UNRECOGNIZED}
   * value that keeps `n`.
   */
  fromNumber(n: number): EnumInstance<TNames | 'UNRECOGNIZED'>;
  /** Reads a name, numeric value, or numeric string from protobuf JSON input. */
  fromJSON(o: any): EnumInstance<TNames | 'UNRECOGNIZED'>;
  /** Returns a known name, or the numeric code for an unknown value. */
  toJSON(v: EnumInstance<TNames | 'UNRECOGNIZED'>): string | number;
  /** Writes a present enum value as one protobuf varint field. */
  encodeField(
    writer: BinaryWriter,
    fieldNo: number,
    v?: EnumInstance<TNames | 'UNRECOGNIZED'>,
  ): void;
} & { readonly [K in TNames]: EnumInstance<TNames> };

/**
 * Creates the runtime class used by a generated protobuf enum.
 *
 * SDK generator output calls this function. Applications normally use the
 * generated enum export instead of calling the factory.
 *
 * @example
 * ```ts
 * import { createEnum } from '@nebius/js-sdk/runtime/protos/enum';
 *
 * const State = createEnum('example.State', {
 *   STATE_UNSPECIFIED: 0,
 *   READY: 1,
 * });
 *
 * State.READY.toNumber(); // 1
 * State.fromJSON('READY') === State.READY; // true
 * State.fromNumber(99).name; // "UNRECOGNIZED"
 * ```
 *
 * @param type Fully qualified protobuf enum name.
 * @param def Maps value names to numeric codes.
 * @param comments Optional original protobuf comments by value name.
 */
export function createEnum<TDef extends Record<string, number>>(
  type: string,
  def: TDef,
  comments?: Record<string, string>,
): EnumClass<Extract<keyof TDef, string>> {
  class E implements EnumInstance<string> {
    readonly code: number;
    readonly name: string;
    constructor(code: number, name: string) {
      this.code = code;
      this.name = name;
    }
    toNumber(): number {
      return this.code;
    }
    toString(): string {
      return this.name;
    }
    [util.inspect.custom]() {
      return this.toString();
    }
    [customJson]() {
      // Return a JSON-friendly, readable form. Prefer the enum name.
      return this.name;
    }
    // Static side populated below
    static $type: string;
    static UNRECOGNIZED: E;
    static values: E[];
    static _byCode: Map<number, E>;
    static _byName: Map<string, E>;
    static fromNumber(n: number): E {
      const k = (this as any as typeof E)._byCode.get(n);
      return k ?? new (this as any as typeof E)(n, 'UNRECOGNIZED');
    }
    static fromJSON(o: any): E {
      if (typeof o === 'number') return (this as any as typeof E).fromNumber(o);
      if (typeof o === 'string') {
        const byName = (this as any as typeof E)._byName.get(o);
        if (byName) return byName;
        const n = Number(o);
        if (Number.isFinite(n)) return (this as any as typeof E).fromNumber(n);
      }
      return (this as any as typeof E).UNRECOGNIZED;
    }
    static toJSON(v: E): string | number {
      if (!v) return 'UNRECOGNIZED';
      // If name is one of the known ones, prefer the name; otherwise keep the numeric code
      if ((this as any as typeof E)._byName.has(v.name)) return v.name;
      return v.code;
    }
    static encodeField(writer: BinaryWriter, fieldNo: number, v?: E): void {
      if (!v) return;
      writer.uint32((fieldNo << 3) | 0).int32(v.code | 0);
    }
  }

  // Populate static side
  (E as any).$type = type;
  (E as any).UNRECOGNIZED = new E(-1, 'UNRECOGNIZED');
  (E as any).values = [] as E[];
  (E as any)._byCode = new Map<number, E>();
  (E as any)._byName = new Map<string, E>();

  for (const [name, code] of Object.entries(def)) {
    const inst = new E(code as number, name);
    const c = comments?.[name];
    if (c) {
      (inst as any)[ENUM_VALUE_META] = { comment: c } as EnumValueMeta;
    }
    (E as any)[name] = inst;
    (E as any).values.push(inst);
    (E as any)._byCode.set(code as number, inst);
    (E as any)._byName.set(name, inst);
  }

  return E as unknown as EnumClass<Extract<keyof TDef, string>>;
}
