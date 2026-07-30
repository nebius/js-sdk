/* eslint-disable @typescript-eslint/no-explicit-any */
import { base64FromBytes, bytesFromBase64 } from './base64.js';
import type { BinaryReader, BinaryWriter } from './core.js';

/**
 * Contains the unexpanded type URL and encoded bytes of a protobuf `Any`.
 *
 * This runtime shape does not unpack the nested message automatically.
 */
type AnyShape = {
  /** Identifies the encoded message type, usually with a `type.googleapis.com/` prefix. */
  typeUrl: string;
  /** Contains the nested message in protobuf wire format. */
  value: Uint8Array;
};
export type { AnyShape };

/**
 * Creates an {@link AnyShape} from the runtime JSON form.
 *
 * `typeUrl` defaults to an empty string. `value` can be bytes or a Base64
 * string and defaults to empty bytes.
 */
export function anyFromJSON(o: unknown): AnyShape {
  const obj = (o ?? {}) as any;
  return {
    typeUrl: String(obj.typeUrl ?? ''),
    value: obj.value instanceof Uint8Array ? obj.value : bytesFromBase64(String(obj.value ?? '')),
  };
}
/** Converts an {@link AnyShape} to `{ typeUrl, value }` with Base64-encoded bytes. */
export function anyToJSON(a: AnyShape): any {
  return { typeUrl: a.typeUrl, value: base64FromBytes(a.value) };
}

/** Writes the fields of an {@link AnyShape} to a protobuf writer. */
export function writeAny(writer: BinaryWriter, a: AnyShape): void {
  writer.uint32((1 << 3) | 2).string(a.typeUrl);
  writer.uint32((2 << 3) | 2).bytes(a.value);
}
/**
 * Reads one length-delimited {@link AnyShape} message body.
 *
 * `length` is the number of bytes in the message body, not the outer tag.
 * Unknown fields are skipped.
 */
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
