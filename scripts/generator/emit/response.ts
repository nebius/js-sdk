import path from 'path';

import Long from 'long';

import {
  CodeGeneratorResponse,
  CodeGeneratorResponse_Feature,
  CodeGeneratorResponse_File,
} from '../protos/protobuf/compiler/index';

export function createResponse(): CodeGeneratorResponse {
  return CodeGeneratorResponse.fromPartial({
    $type: 'google.protobuf.compiler.CodeGeneratorResponse',
    error: '',
    supportedFeatures: Long.fromValue(
      CodeGeneratorResponse_Feature.FEATURE_PROTO3_OPTIONAL.toNumber(),
    ),
    minimumEdition: 0,
    maximumEdition: 0,
    file: [],
  });
}

export function pushFile(resp: CodeGeneratorResponse, name: string, content: string): void {
  const f = CodeGeneratorResponse_File.fromPartial({
    name,
    content,
    insertionPoint: '',
  });
  (resp.file ?? (resp.file = [])).push(f);
}

export function toIndexFilePath(dir: string): string {
  return path.posix.join(dir || '.', 'index.ts');
}
