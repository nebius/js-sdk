/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Decodes a Base64 string to bytes in browsers and Node.js.
 *
 * Invalid-input behavior follows the platform decoder: browser `atob` can
 * throw, while Node.js can accept some non-canonical input.
 */
export function bytesFromBase64(b64: string): Uint8Array {
  if (typeof (globalThis as any).atob === 'function') {
    const bin = (globalThis as any).atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return arr;
  }
  return Uint8Array.from(Buffer.from(b64, 'base64'));
}

/** Encodes bytes as a standard Base64 string in browsers and Node.js. */
export function base64FromBytes(arr: Uint8Array): string {
  if (typeof (globalThis as any).btoa === 'function') {
    let s = '';
    for (let i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i]);
    return (globalThis as any).btoa(s);
  }
  return Buffer.from(arr).toString('base64');
}
