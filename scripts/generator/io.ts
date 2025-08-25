// Replaced external ts-proto-descriptors with internally generated plugin protos
import { CodeGeneratorRequest, CodeGeneratorResponse } from './protos/protobuf/compiler/index';

export async function readAllStdin(): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    process.stdin.on('data', (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
    process.stdin.on('end', () => resolve(new Uint8Array(Buffer.concat(chunks))));
    process.stdin.on('error', reject);
  });
}

export function encodeResponse(resp: CodeGeneratorResponse): Uint8Array {
  return CodeGeneratorResponse.encode(resp).finish();
}

export function decodeRequest(buf: Uint8Array): CodeGeneratorRequest {
  return CodeGeneratorRequest.decode(buf);
}
