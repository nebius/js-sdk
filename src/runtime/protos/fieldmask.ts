/**
 * Converts protobuf `FieldMask` values between runtime, JSON, and wire forms.
 *
 * The runtime representation is `string[]`. The protobuf JSON representation
 * is one comma-separated string.
 *
 * @packageDocumentation
 */

import type { BinaryReader, BinaryWriter } from './core.js';

/**
 * Reads the protobuf `FieldMask` runtime JSON form.
 *
 * A comma-separated string becomes trimmed path strings. An array is accepted
 * for compatibility and each element is converted to a string. Other values
 * produce an empty array.
 */
export function fmFromJSON(o: unknown): string[] {
  if (Array.isArray(o)) return o.map(String);
  if (typeof o === 'string') {
    return o
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  return [];
}
/** Converts field-mask paths to the protobuf JSON comma-separated string form. */
export function fmToJSON(paths: string[]): string {
  return (paths ?? []).join(',');
}

/** Writes each path as field 1 of a protobuf `FieldMask` message. */
export function writeFieldMask(writer: BinaryWriter, paths: string[]): void {
  for (const p of paths) writer.uint32((1 << 3) | 2).string(p);
}
/**
 * Reads one length-delimited protobuf `FieldMask` message body.
 *
 * Unknown fields are skipped. The returned paths keep their wire order.
 */
export function readFieldMask(reader: BinaryReader, length: number): string[] {
  const end = reader.pos + length;
  const out: string[] = [];
  while (reader.pos < end) {
    const tag = reader.uint32();
    if (tag >>> 3 === 1) out.push(reader.string());
    else reader.skip(tag & 7);
  }
  return out;
}
