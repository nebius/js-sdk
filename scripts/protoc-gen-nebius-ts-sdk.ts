#!/usr/bin/env node
/**
 * Buf/protoc plugin that emits TypeScript SDK wrappers (.sdk.ts) for ts-proto grpc-js clients.
 * It reads CodeGeneratorRequest from stdin and writes CodeGeneratorResponse to stdout.
 */
import * as fs from 'fs';
import * as path from 'path';

import Long from 'long';

import {
  CodeGeneratorRequest,
  CodeGeneratorResponse,
  CodeGeneratorResponse_Feature,
  CodeGeneratorResponse_File,
} from './generator/protos/protobuf/compiler/index';
import {
  DescriptorProto,
  FileDescriptorProto,
  GeneratedCodeInfo,
  MethodDescriptorProto,
  ServiceDescriptorProto,
  UninterpretedOption,
} from './generator/protos/protobuf/index';

function readAllStdin(): Promise<Uint8Array> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    process.stdin.on('data', (c: Buffer | Uint8Array | string) => {
      const buf = Buffer.isBuffer(c) ? c : Buffer.from(c);
      chunks.push(buf);
    });
    process.stdin.on('end', () => resolve(Buffer.concat(chunks)));
  });
}

// Maps of fully qualified type name -> defining file and TS type name
interface TypeInfo {
  fileName: string;
  tsName: string;
}

function buildTypeIndex(files: readonly FileDescriptorProto[]): Map<string, TypeInfo> {
  const index = new Map<string, TypeInfo>();
  function walkMsg(fd: FileDescriptorProto, msg: DescriptorProto, prefix: string) {
    const full = `${prefix}.${msg.name}`;
    index.set(full, { fileName: fd.name!, tsName: msg.name! });
    for (const nested of msg.nestedType ?? []) walkMsg(fd, nested, full);
  }
  for (const fd of files) {
    const pkg = fd.package || '';
    for (const msg of fd.messageType ?? []) walkMsg(fd, msg, pkg ? `.${pkg}` : '');
  }
  return index;
}

function toModuleBase(protoFile: string): string {
  // Turn nebius/compute/v1/disk.proto -> nebius/compute/v1/disk
  return protoFile.replace(/\.proto$/, '');
}

function relImportPath(fromFileName: string, toModuleBase: string): string {
  // fromFileName and to path are both under 'src/api/...'
  const fromDir = path.posix.dirname(fromFileName);
  // Ensure paths are posix
  let rel = path.posix.relative(fromDir, path.posix.join('src/generated_test/1', toModuleBase));
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel;
}

function relToSrc(fromFileName: string): string {
  const fromDir = path.posix.dirname(fromFileName);
  return path.posix.relative(fromDir, 'src');
}

function apiServiceNameFromUninterpreted(opts?: UninterpretedOption[]): string | undefined {
  if (!opts) return undefined;
  for (const o of opts) {
    const name = o.name ?? [];
    // Find any extension name part that looks like api_service_name, with or without package prefix
    const ext = name.find(
      (p) =>
        p.isExtension === true &&
        (p.namePart === 'api_service_name' || (p.namePart ?? '').includes('api_service_name')),
    );
    if (!ext) continue;
    // Prefer stringValue (for string-typed options). Fall back to identifierValue if present.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sv = (o as unknown as any).stringValue as Uint8Array | string | undefined;
    if (sv !== undefined) {
      if (typeof sv === 'string') return sv;
      if (sv && sv.length > 0) return Buffer.from(sv).toString('utf8');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const idv = (o as unknown as any).identifierValue as string | undefined;
    if (idv && idv.length > 0) return idv;
  }
  return undefined;
}

// Fallback: read api_service_name from the original .proto source file
function findProtoSource(fdName: string): string | undefined {
  const roots = [
    process.env.NEBIUS_PROTO_ROOT,
    process.env.PROTO_SOURCE_ROOT,
    // repo root and common locations relative to this script
    path.resolve(__dirname, '..'),
    path.resolve(__dirname, '..', 'nebius-api'),
    path.resolve(process.cwd(), 'nebius-api'),
    process.cwd(),
  ].filter(Boolean) as string[];
  for (const root of roots) {
    const full = path.resolve(root, fdName);
    if (fs.existsSync(full)) {
      try {
        return fs.readFileSync(full, 'utf8');
      } catch {
        // ignore
      }
    }
  }
  return undefined;
}

function apiServiceNameFromSource(fdName: string, serviceName: string): string | undefined {
  const src = findProtoSource(fdName);
  if (!src) return undefined;
  // Match within the service block non-greedily to the first api_service_name option
  const re = new RegExp(
    `service\\s+${serviceName}\\s*\\{[\\s\\S]*?option\\s*\\(\\s*[^)]*api_service_name\\s*\\)\\s*=\\s*"([^"]+)"`,
    'm',
  );
  const m = src.match(re);
  return m ? m[1] : undefined;
}

function isOperationFullName(full: string): { pkgDir: string } | undefined {
  if (full === '.nebius.common.v1.Operation') return { pkgDir: 'nebius/common/v1' };
  if (full === '.nebius.common.v1alpha1.Operation') return { pkgDir: 'nebius/common/v1alpha1' };
  return undefined;
}

function buildWrapperContent(
  fd: FileDescriptorProto,
  sd: ServiceDescriptorProto,
  typeIndex: Map<string, TypeInfo>,
  outFileName: string,
): string {
  // const pkg = fd.package || '';
  const serviceBaseName = sd.name!;
  const clientName = `${serviceBaseName}Client`;
  const moduleBase = toModuleBase(fd.name!); // nebius/.../<file base>
  const serviceModuleBase = moduleBase.endsWith('_service') ? moduleBase : `${moduleBase}_service`;
  const serviceModuleImport = relImportPath(outFileName, serviceModuleBase);
  const localMsgModuleImport = relImportPath(outFileName, moduleBase);
  const sdkRel = path.posix.join(relToSrc(outFileName), 'sdk');
  const reqRel = path.posix.join(relToSrc(outFileName), 'runtime', 'request');
  const opRel = path.posix.join(relToSrc(outFileName), 'runtime', 'operation');

  // Collect types per file for foreign imports
  const localProto = fd.name!;
  const foreignTypeByFile = new Map<string, Set<string>>();
  const methods = (sd.method ?? []).map((m: MethodDescriptorProto) => {
    const inFull = m.inputType!; // .pkg.Type
    const outFull = m.outputType!;
    const inInfo = typeIndex.get(inFull);
    const outInfo = typeIndex.get(outFull);
    // Collect foreign types
    if (inInfo && inInfo.fileName !== localProto) {
      const key = inInfo.fileName!;
      if (!foreignTypeByFile.has(key)) foreignTypeByFile.set(key, new Set());
      foreignTypeByFile.get(key)!.add(inInfo.tsName);
    }
    // Only import response type when not wrapped as Operation
    if (!isOperationFullName(outFull) && outInfo && outInfo.fileName !== localProto) {
      const key = outInfo.fileName!;
      if (!foreignTypeByFile.has(key)) foreignTypeByFile.set(key, new Set());
      foreignTypeByFile.get(key)!.add(outInfo.tsName);
    }
    return { name: m.name!, inFull, outFull, inInfo, outInfo };
  });

  // Foreign import lines
  const foreignImports: string[] = [];
  for (const [protoFile, names] of foreignTypeByFile) {
    const mb = toModuleBase(protoFile);
    const imp = relImportPath(outFileName, mb);
    foreignImports.push(`import type { ${Array.from(names).sort().join(', ')} } from '${imp}';`);
  }

  const needsOperationWrapper = methods.some((m) => !!isOperationFullName(m.outFull));
  const header = [
    '// AUTO-GENERATED by protoc-gen-nebius-ts-sdk — do not edit.',
    '// SDK wrapper around the generated gRPC client. Uses SDK to resolve address/credentials.',
    '',
  ].join('\n');

  const imports: string[] = [];
  imports.push(`import type { SDKInterface } from '${sdkRel}';`);
  imports.push(`import { wrapUnaryCall, type UnaryCall, type RetryOptions } from '${reqRel}';`);
  imports.push(`import { Metadata, type CallOptions } from '@grpc/grpc-js';`);
  if (needsOperationWrapper) {
    imports.push(`import { Operation as OperationWrapper } from '${opRel}';`);
  }
  imports.push(...foreignImports);
  imports.push(`import type * as M from '${localMsgModuleImport}';`);
  imports.push(`import { ${clientName} as GeneratedClient } from '${serviceModuleImport}';`);
  imports.push('');

  // Interface
  let iface = `export interface ${serviceBaseName} {\n`;
  const isOperationService = serviceBaseName === 'OperationService';
  for (const m of methods) {
    const wrapOp = !!isOperationFullName(m.outFull);
    const Req =
      m.inInfo && m.inInfo.fileName === localProto
        ? `M.${m.inInfo.tsName}`
        : m.inInfo
          ? m.inInfo.tsName
          : 'any';
    const ResBase =
      m.outInfo && m.outInfo.fileName === localProto
        ? `M.${m.outInfo.tsName}`
        : m.outInfo
          ? m.outInfo.tsName
          : 'any';
    const isListOperationsResponse =
      isOperationService && /\.ListOperationsResponse$/.test(m.outFull);
    const Res = wrapOp
      ? 'OperationWrapper'
      : isListOperationsResponse
        ? 'OperationServiceListResponse'
        : ResBase;
    iface += `  ${m.name}(request: ${Req}): UnaryCall<${Res}>;\n`;
    iface += `  ${m.name}(request: ${Req}, metadata: Metadata): UnaryCall<${Res}>;\n`;
    iface += `  ${m.name}(request: ${Req}, metadata: Metadata, options: Partial<CallOptions> & RetryOptions): UnaryCall<${Res}>;\n`;
  }
  iface += `}\n\n`;

  if (isOperationService) {
    iface += `export interface OperationServiceListResponse { operations: OperationWrapper[]; nextPageToken: string; }\n\n`;
  }

  // Class
  const apiName =
    apiServiceNameFromUninterpreted(sd.options?.uninterpretedOption) ??
    apiServiceNameFromSource(fd.name!, sd.name!);
  let cls = `export class ${serviceBaseName} implements ${serviceBaseName} {\n`;
  cls += `  private inner: any;\n`;
  cls += `  private addr: string;\n`;
  if (isOperationService) {
    cls += `  constructor(private sdk: SDKInterface, private serviceType: string, private serviceApiName?: string) {\n`;
    cls += `    const serviceName: string = this.serviceType;\n`;
    cls += `    const apiServiceName: string | undefined = this.serviceApiName ?? ${apiName ? JSON.stringify(apiName) : 'undefined'};\n`;
    cls += `    const addr = sdk.getAddressFromServiceName(serviceName, apiServiceName);\n`;
    cls += `    this.addr = addr;\n`;
    cls += `    this.inner = new (GeneratedClient as any)(addr, sdk.getCredentials(serviceName), sdk.getOptions(serviceName));\n`;
    cls += `  }\n\n`;
  } else {
    cls += `  constructor(private sdk: SDKInterface) {\n`;
    cls += `    const ctor: any = GeneratedClient as any;\n`;
    cls += `    const serviceName: string = (ctor && ctor.serviceName) || '${serviceBaseName}';\n`;
    cls += `    const apiServiceName: string | undefined = ${apiName ? JSON.stringify(apiName) : 'undefined'};\n`;
    cls += `    const addr = sdk.getAddressFromServiceName(serviceName, apiServiceName);\n`;
    cls += `    this.addr = addr;\n`;
    cls += `    this.inner = new (GeneratedClient as any)(addr, sdk.getCredentials(serviceName), sdk.getOptions(serviceName));\n`;
    cls += `  }\n\n`;
  }

  for (const m of methods) {
    const wrapOp = !!isOperationFullName(m.outFull);
    const Req =
      m.inInfo && m.inInfo.fileName === localProto
        ? `M.${m.inInfo.tsName}`
        : m.inInfo
          ? m.inInfo.tsName
          : 'any';
    const ResBase =
      m.outInfo && m.outInfo.fileName === localProto
        ? `M.${m.outInfo.tsName}`
        : m.outInfo
          ? m.outInfo.tsName
          : 'any';
    const isListOperationsResponse =
      isOperationService && /\.ListOperationsResponse$/.test(m.outFull);
    const retT = wrapOp
      ? 'UnaryCall<OperationWrapper>'
      : isListOperationsResponse
        ? 'UnaryCall<OperationServiceListResponse>'
        : `UnaryCall<${ResBase}>`;
    const lower = m.name.charAt(0).toLowerCase() + m.name.slice(1);
    // overloads
    cls += `  ${m.name}(request: ${Req}): ${retT};\n`;
    cls += `  ${m.name}(request: ${Req}, metadata: Metadata): ${retT};\n`;
    cls += `  ${m.name}(request: ${Req}, metadata: Metadata, options: Partial<CallOptions> & RetryOptions): ${retT};\n`;
    // impl
    cls += `  ${m.name}(...args: any[]): ${retT} {\n`;
    cls += `    const request = args[0];\n`;
    cls += `    const metadata = (args.length > 1 ? args[1] : undefined) as Metadata | undefined;\n`;
    cls += `    const options = (args.length > 2 ? args[2] : undefined) as (Partial<CallOptions> & RetryOptions) | undefined;\n`;
    cls += `    const createCall = (req: any, md: Metadata | undefined, opt: Partial<CallOptions> | undefined, cb: any) => {\n`;
    cls += `      const method = (this.inner as any)[${JSON.stringify(m.name)}] || (this.inner as any)[${JSON.stringify(lower)}];\n`;
    cls += `      const fn = method?.bind(this.inner);\n`;
    cls += `      if (!fn) throw new Error(${JSON.stringify(`${serviceBaseName} client method '${m.name}/${lower}' not found`)});\n`;
    cls += `      if (md && opt) return fn(req, md, opt, cb);\n`;
    cls += `      if (md && !opt) return fn(req, md, cb);\n`;
    cls += `      if (!md && opt) return fn(req, opt, cb);\n`;
    cls += `      return fn(req, cb);\n`;
    cls += `    };\n`;
    if (wrapOp) {
      const op = isOperationFullName(m.outFull)!;
      const opSvcImport = relImportPath(outFileName, `${op.pkgDir}/operation_service`);
      cls += `    const transformResponse = (resp: any) => {\n`;
      if (isOperationService) {
        cls += `      const serviceName = this.serviceType;\n`;
        cls += `      const { OperationServiceClient } = require('${opSvcImport}');\n`;
        cls += `      const opClient = this.inner;\n`;
        cls += `      const getOpFn = (id: string, x: any, y: any) => new Promise<any>((resolve, reject) => {\n`;
        cls += `        (opClient as any).get({ id } as any, x, y, (e: any, r: any) => e ? reject(e) : resolve(r));\n`;
        cls += `      });\n`;
        cls += `      const sourceMethod = serviceName + '.' + ${JSON.stringify(m.name)};\n`;
      } else {
        cls += `      const svcCtor: any = GeneratedClient as any;\n`;
        cls += `      const serviceName: string = (svcCtor && svcCtor.serviceName) || '${serviceBaseName}';\n`;
        cls += `      const { OperationServiceClient, GetOperationRequest } = require('${opSvcImport}');\n`;
        cls += `      const opCtor: any = OperationServiceClient as any;\n`;
        cls += `      const opServiceName: string = (opCtor && opCtor.serviceName) || 'OperationService';\n`;
        cls += `      const opAddr = this.addr;\n`;
        cls += `      const opClient = new (OperationServiceClient as any)(opAddr, this.sdk.getCredentials(serviceName), this.sdk.getOptions(serviceName));\n`;
        cls += `      const getOpFn = (id: string, x: any, y: any) => new Promise<any>((resolve, reject) => {\n`;
        cls += `        opClient.get({ id } as any, x, y, (e: any, r: any) => e ? reject(e) : resolve(r));\n`;
        cls += `      });\n`;
        cls += `      const sourceMethod = serviceName + '.' + ${JSON.stringify(m.name)};\n`;
      }
      cls += `      const { Operation } = require('${path.posix.join(relToSrc(outFileName), 'runtime', 'operation')}');\n`;
      cls += `      return new Operation(this.sdk, sourceMethod, resp, getOpFn);\n`;
      cls += `    };\n`;
      cls += `    return wrapUnaryCall({ request, metadata, options, createCall, transformResponse, methodName: ${JSON.stringify(m.name)}, profileParentId: this.sdk.parentId?.() ?? this.sdk.parentId?.call(this.sdk) });\n`;
    } else if (isOperationService && /\.ListOperationsResponse$/.test(m.outFull)) {
      cls += `    const transformResponse = (resp: any) => {\n`;
      cls += `      const serviceName = this.serviceType;\n`;
      cls += `      const getOpFn = (id: string, x: any, y: any) => new Promise<any>((resolve, reject) => {\n`;
      cls += `        (this.inner as any).get({ id } as any, x, y, (e: any, r: any) => e ? reject(e) : resolve(r));\n`;
      cls += `      });\n`;
      cls += `      const { Operation } = require('${path.posix.join(relToSrc(outFileName), 'runtime', 'operation')}');\n`;
      cls += `      return { operations: (resp?.operations ?? []).map((o: any) => new Operation(this.sdk, serviceName + '.Get', o, getOpFn)), nextPageToken: resp?.nextPageToken || '' };\n`;
      cls += `    };\n`;
      cls += `    return wrapUnaryCall({ request, metadata, options, createCall, transformResponse, methodName: ${JSON.stringify(m.name)}, profileParentId: this.sdk.parentId?.() ?? this.sdk.parentId?.call(this.sdk) });\n`;
    } else {
      cls += `    return wrapUnaryCall({ request, metadata, options, createCall, methodName: ${JSON.stringify(m.name)}, profileParentId: this.sdk.parentId?.() ?? this.sdk.parentId?.call(this.sdk) });\n`;
    }
    cls += `  }\n\n`;
  }
  cls += `}\n`;

  return [header, ...imports, '', iface, cls].join('\n');
}

function makeResponse(): CodeGeneratorResponse {
  return CodeGeneratorResponse.fromPartial({
    $type: 'google.protobuf.compiler.CodeGeneratorResponse',
    error: '',
    file: [],
    supportedFeatures: Long.fromValue(
      CodeGeneratorResponse_Feature.FEATURE_PROTO3_OPTIONAL.toNumber(),
    ),
    minimumEdition: 0,
    maximumEdition: 0,
  });
}

function makeFile(name: string, content: string): CodeGeneratorResponse_File {
  return CodeGeneratorResponse_File.fromPartial({
    $type: 'google.protobuf.compiler.CodeGeneratorResponse.File',
    name,
    insertionPoint: '',
    content,
    generatedCodeInfo: GeneratedCodeInfo.fromPartial({
      annotation: [],
    }),
  });
}

async function main(): Promise<void> {
  const input = await readAllStdin();
  const req = CodeGeneratorRequest.decode(input);
  const resp = makeResponse();

  // Build type index for request/response mapping
  const allFiles = req.protoFile ?? [];
  const typeIndex = buildTypeIndex(allFiles);

  // Generate for files listed in file_to_generate
  const filesToGen = new Set(req.fileToGenerate ?? []);
  for (const fd of allFiles) {
    if (!filesToGen.has(fd.name!)) continue;
    for (const sd of fd.service ?? []) {
      const moduleBase = toModuleBase(fd.name!); // nebius/.../<file base>
      const serviceModuleBase = moduleBase.endsWith('_service')
        ? moduleBase
        : `${moduleBase}_service`;
      // Use full path for computing imports
      const outFullPath = path.posix.join('src/generated_test/1', `${serviceModuleBase}.sdk.ts`);
      const content = buildWrapperContent(fd, sd, typeIndex, outFullPath);
      // But return file name relative to plugin out dir
      const outName = `${serviceModuleBase}.sdk.ts`;
      resp.file!.push(makeFile(outName, content));
    }
  }

  const out = CodeGeneratorResponse.encode(resp).finish();
  process.stdout.write(Buffer.from(out));
}

main().catch((e) => {
  console.error(e?.stack || String(e));
  process.exitCode = 1;
});
