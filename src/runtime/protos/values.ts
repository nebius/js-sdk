/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BinaryReader, BinaryWriter } from './core.js';

/**
 * Copies protobuf `Value` JSON data to the runtime JavaScript representation.
 *
 * Objects and arrays are copied recursively. Primitive values are returned
 * unchanged.
 */
export function valueFromJSON(o: any): any {
  if (o === null) return null;
  if (Array.isArray(o)) return o.map(valueFromJSON);
  if (typeof o === 'object') {
    const out: any = {};
    for (const [k, v] of Object.entries(o)) {
      Object.defineProperty(out, k, {
        value: valueFromJSON(v),
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    return out;
  }
  return o;
}
/** Copies a runtime protobuf `Value` to JSON-safe objects, arrays, or primitives. */
export function valueToJSON(v: any): any {
  if (v === null) return null;
  if (Array.isArray(v)) return v.map(valueToJSON);
  if (typeof v === 'object') {
    const out: any = {};
    for (const [k, vv] of Object.entries(v)) {
      Object.defineProperty(out, k, {
        value: valueToJSON(vv),
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    return out;
  }
  return v;
}

/**
 * Writes a JavaScript value as a protobuf `Value` message.
 *
 * Supported values are `null`, numbers, strings, booleans, arrays, and plain
 * object-like values.
 */
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
/**
 * Reads one length-delimited protobuf `Value` message body.
 *
 * When the input contains several oneof alternatives, the last decoded value
 * wins. Unknown fields are skipped.
 */
export function readValue(reader: BinaryReader, length: number, base?: any): any {
  const end = reader.pos + length;
  let out: any = base ?? null;
  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag) {
      case 8: {
        reader.int32(); // null enum, ignore actual value
        out = null;
        break;
      }
      case 17: {
        out = reader.double();
        break;
      }
      case 26: {
        out = reader.string();
        break;
      }
      case 32: {
        out = reader.bool();
        break;
      }
      case 42: {
        // struct
        const end2 = reader.uint32() + reader.pos;
        const obj: any = out && typeof out === 'object' && !Array.isArray(out) ? { ...out } : {};
        while (reader.pos < end2) {
          const t2 = reader.uint32();
          switch (t2) {
            case 10:
              const end3 = reader.uint32() + reader.pos;
              let key = '';
              let val: any = null;
              while (reader.pos < end3) {
                const t3 = reader.uint32();
                switch (t3) {
                  case 10:
                    key = reader.string();
                    break;
                  case 18: {
                    const len = reader.uint32();
                    val = readValue(reader, len, val);
                    break;
                  }
                  default:
                    reader.skip(t3 & 7);
                }
              }
              Object.defineProperty(obj, key, {
                value: val,
                writable: true,
                enumerable: true,
                configurable: true,
              });
              break;
            default:
              reader.skip(t2 & 7);
          }
        }
        out = obj;
        break;
      }
      case 50: {
        // list
        const end2 = reader.uint32() + reader.pos;
        const arr: any[] = Array.isArray(out) ? [...out] : [];
        while (reader.pos < end2) {
          const t2 = reader.uint32();
          if (t2 === 10) {
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
