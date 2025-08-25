/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BinaryReader, BinaryWriter } from './core';

// Struct/Value/ListValue
export function valueFromJSON(o: any): any {
  if (o === null) return null;
  if (Array.isArray(o)) return o.map(valueFromJSON);
  if (typeof o === 'object') {
    const out: any = {};
    for (const [k, v] of Object.entries(o)) out[k] = valueFromJSON(v);
    return out;
  }
  return o;
}
export function valueToJSON(v: any): any {
  if (v === null) return null;
  if (Array.isArray(v)) return v.map(valueToJSON);
  if (typeof v === 'object') {
    const out: any = {};
    for (const [k, vv] of Object.entries(v)) out[k] = valueToJSON(vv);
    return out;
  }
  return v;
}

// Binary encode/decode helpers for Struct/Value/ListValue
export function writeValue(writer: BinaryWriter, v: any): void {
  if (v === null) {
    writer.uint32((1 << 3) | 0).int32(0); // NullValue.NULL_VALUE = 0
  } else if (typeof v === 'number') {
    writer.uint32((2 << 3) | 1).double(v);
  } else if (typeof v === 'string') {
    writer.uint32((3 << 3) | 2).string(v);
  } else if (typeof v === 'boolean') {
    writer.uint32((4 << 3) | 0).bool(v);
  } else if (Array.isArray(v)) {
    const w = writer.uint32((6 << 3) | 2).fork();
    // ListValue { repeated Value values = 1 }
    for (const el of v) {
      const lw = w.uint32((1 << 3) | 2).fork();
      writeValue(lw as any, el);
      (lw as any).join();
    }
    (w as any).join();
  } else if (typeof v === 'object') {
    const w = writer.uint32((5 << 3) | 2).fork();
    // Struct { map<string, Value> fields = 1 }
    for (const [k, val] of Object.entries(v)) {
      const ew = w.uint32((1 << 3) | 2).fork(); // entry
      ew.uint32((1 << 3) | 2).string(k);
      const vw = ew.uint32((2 << 3) | 2).fork();
      writeValue(vw as any, val);
      (vw as any).join();
      (ew as any).join();
    }
    (w as any).join();
  }
}
export function readValue(reader: BinaryReader, length: number): any {
  const end = reader.pos + length;
  let out: any = null;
  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag >>> 3) {
      case 1: {
        reader.int32(); // null enum, ignore actual value
        out = null;
        break;
      }
      case 2: {
        out = reader.double();
        break;
      }
      case 3: {
        out = reader.string();
        break;
      }
      case 4: {
        out = reader.bool();
        break;
      }
      case 5: {
        // struct
        const end2 = reader.uint32() + reader.pos;
        const obj: any = {};
        while (reader.pos < end2) {
          const t2 = reader.uint32();
          switch (t2 >>> 3) {
            case 1:
              const end3 = reader.uint32() + reader.pos;
              let key = '';
              let val: any = null;
              while (reader.pos < end3) {
                const t3 = reader.uint32();
                switch (t3 >>> 3) {
                  case 1:
                    key = reader.string();
                    break;
                  case 2: {
                    const len = reader.uint32();
                    val = readValue(reader, len);
                    break;
                  }
                  default:
                    reader.skip(t3 & 7);
                }
              }
              obj[key] = val;
              break;
            case 2: {
              const len = reader.uint32();
              // Read and discard unexpected value for Struct fields path 2
              readValue(reader, len);
              // This path is not expected for Struct fields; maintained for completeness
              // but we'll ignore it to keep behavior consistent.
              break;
            }
            default:
              reader.skip(t2 & 7);
          }
        }
        out = obj;
        break;
      }
      case 6: {
        // list
        const end2 = reader.uint32() + reader.pos;
        const arr: any[] = [];
        while (reader.pos < end2) {
          const t2 = reader.uint32();
          if (t2 >>> 3 === 1) {
            const len = reader.uint32();
            arr.push(readValue(reader, len));
          } else {
            reader.skip(t2 & 7);
          }
        }
        out = arr;
        break;
      }
      default:
        reader.skip(tag & 7);
        break;
    }
  }
  return out;
}
