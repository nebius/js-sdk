/* eslint-disable @typescript-eslint/no-explicit-any */
import { base64FromBytes, bytesFromBase64 } from './base64';
import type { BinaryReader, BinaryWriter } from './core';

type AnyShape = { typeUrl: string; value: Uint8Array };
export type { AnyShape };

export function anyFromJSON(o: unknown): AnyShape {
  const obj = (o ?? {}) as any;
  return {
    typeUrl: String(obj.typeUrl ?? ''),
    value: obj.value instanceof Uint8Array ? obj.value : bytesFromBase64(String(obj.value ?? '')),
  };
}
export function anyToJSON(a: AnyShape): any {
  return { typeUrl: a.typeUrl, value: base64FromBytes(a.value) };
}

export function writeAny(writer: BinaryWriter, a: AnyShape): void {
  writer.uint32((1 << 3) | 2).string(a.typeUrl);
  writer.uint32((2 << 3) | 2).bytes(a.value);
}
export function readAny(reader: BinaryReader, length: number): AnyShape {
  const end = reader.pos + length;
  let typeUrl = '';
  let value = new Uint8Array(0);
  while (reader.pos < end) {
    const tag = reader.uint32();
    switch (tag >>> 3) {
      case 1:
        typeUrl = reader.string();
        break;
      case 2:
        value = new Uint8Array(reader.bytes());
        break;
      default:
        reader.skip(tag & 7);
        break;
    }
  }
  return { typeUrl, value };
}
