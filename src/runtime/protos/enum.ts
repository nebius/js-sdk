/* eslint-disable @typescript-eslint/no-explicit-any */
import util from 'node:util';

import { customJson } from '../util/logging';

import type { BinaryWriter } from './core';

// Symbol used to attach metadata (e.g., original proto comments) to enum value instances without
// polluting their enumerable keys. Publicly exported via barrel.
export const ENUM_VALUE_META: unique symbol = Symbol('nebius.enum.value.meta');

export interface EnumValueMeta {
  comment?: string;
}

// --- Enum base + factory ---
export type EnumInstance<TName extends string = string> = {
  readonly code: number;
  readonly name: TName;
  toNumber(): number;
  toString(): string;
  readonly [ENUM_VALUE_META]?: EnumValueMeta;
  [util.inspect.custom]?: () => string;
  [customJson]?: () => unknown;
};

export type EnumClass<TNames extends string = string> = {
  readonly $type: string;
  readonly UNRECOGNIZED: EnumInstance<TNames | 'UNRECOGNIZED'>;
  readonly values: ReadonlyArray<EnumInstance<TNames | 'UNRECOGNIZED'>>;
  readonly _byCode: Map<number, EnumInstance<TNames | 'UNRECOGNIZED'>>;
  readonly _byName: Map<TNames, EnumInstance<TNames>>;
  fromNumber(n: number): EnumInstance<TNames | 'UNRECOGNIZED'>;
  fromJSON(o: any): EnumInstance<TNames | 'UNRECOGNIZED'>;
  toJSON(v: EnumInstance<TNames | 'UNRECOGNIZED'>): string | number;
  encodeField(
    writer: BinaryWriter,
    fieldNo: number,
    v?: EnumInstance<TNames | 'UNRECOGNIZED'>,
  ): void;
} & { readonly [K in TNames]: EnumInstance<TNames> };

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
