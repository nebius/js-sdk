// FieldMask helpers (TS type: string[]). JSON: single string (comma-separated)
import type { BinaryReader, BinaryWriter } from './core';

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
export function fmToJSON(paths: string[]): string {
  return (paths ?? []).join(',');
}

export function writeFieldMask(writer: BinaryWriter, paths: string[]): void {
  for (const p of paths) writer.uint32((1 << 3) | 2).string(p);
}
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
