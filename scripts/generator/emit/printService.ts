import type { Method, Service as TSService } from '../descriptors.js';
import { MethodBehavior as MethodBehaviorEnum } from '../extensions/index.js';

import { deprecationLine, deprecationOptions } from './helpers.js';
import { resolveImportSymbol, resolveTypeNameByFqn } from './typeNames.js';

function normalizeFqn(name: string, pkg?: string): string {
  let n = name || '';
  if (!n.startsWith('.')) n = '.' + n;
  if (pkg && n.startsWith(`.${pkg}.`)) return n;
  if (pkg && n === `.${pkg}`) return `.${pkg}`;
  return n;
}

const OP_SVC_V1 = '.nebius.common.v1.OperationService';
const OP_SVC_V1A = '.nebius.common.v1alpha1.OperationService';
const OP_V1 = '.nebius.common.v1.Operation';
const OP_V1A = '.nebius.common.v1alpha1.Operation';
const OP_SVC_V1_DIR = 'nebius/common/v1';
const OP_SVC_V1A_DIR = 'nebius/common/v1alpha1';

function isOperationService(service: TSService): boolean {
  const fqn = service.fullQualifiedName();
  return fqn === OP_SVC_V1 || fqn === OP_SVC_V1A;
}

function isListOperationsMethod(method: Method): boolean {
  if (isOperationService(method.containingService)) {
    return method.pb_name === 'List';
  }
  return false;
}

type ExtractedMethodBehavior = ReturnType<typeof MethodBehaviorEnum.fromJSON>;

function normalizeMethodBehavior(value: unknown): ExtractedMethodBehavior {
  if (value && typeof value === 'object') {
    const maybeEnum = value as { code?: unknown; name?: unknown };
    if (typeof maybeEnum.code === 'number') return MethodBehaviorEnum.fromNumber(maybeEnum.code);
    if (typeof maybeEnum.name === 'string') return MethodBehaviorEnum.fromJSON(maybeEnum.name);
  }
  return MethodBehaviorEnum.fromJSON(value);
}

function extractMethodBehaviors(method: Method): ExtractedMethodBehavior[] {
  const opts = method.descriptor?.options as
    | { methodBehavior?: unknown; method_behavior?: unknown }
    | undefined;
  const methodBehavior = opts?.methodBehavior ?? opts?.method_behavior;
  if (methodBehavior === undefined || methodBehavior === null) return [];

  const behaviors = Array.isArray(methodBehavior) ? methodBehavior : [methodBehavior];
  return behaviors.map(normalizeMethodBehavior);
}

function shouldSendResetMask(method: Method): boolean {
  const methodBehaviors = extractMethodBehaviors(method);
  if (methodBehaviors.length === 0) {
    return method.pb_name === 'Update';
  }
  return methodBehaviors.some((behavior) => behavior === MethodBehaviorEnum.METHOD_UPDATER);
}

/** Identifies one protobuf type available to service generation. */
export interface TypeIndexEntry {
  /** Contains the source protobuf file name. */
  fileName: string;
  /** Contains the TypeScript name used in generated code. */
  tsName: string;
  /** Contains the TypeScript name before collision resolution. */
  tsNameOriginal: string;
  /** Contains the generated module directory. */
  dir: string;
}
/** Maps fully qualified protobuf names, such as `.pkg.Message`, to TypeScript types. */
export type TypeIndex = Map<string, TypeIndexEntry>;

/**
 * Emits the gRPC description, server interface, and SDK client for a service.
 *
 * The emitted public methods use the protobuf source comments when available.
 * Every overload receives its own TSDoc block so IDEs and TypeDoc can show the
 * same documentation for each call form.
 *
 * @param svc Contains the service descriptor and source comments.
 * @param pkg Contains the protobuf package without a leading dot.
 * @param typeIndex Resolves request and response types.
 * @param _protoRelPath Is retained for compatibility and is not used.
 * @returns TypeScript source for the service.
 */
export function printService(
  svc: TSService,
  pkg: string,
  typeIndex: TypeIndex,
  _protoRelPath?: string, // deprecated param retained for compatibility
): string {
  const lines: string[] = [];
  const svcName = svc.tsName;
  const pbSvcName = svc.pb_name;
  const isOpSvc = isOperationService(svc);
  const pbFullSvcName = pkg ? `${pkg}.${pbSvcName}` : pbSvcName;
  // api_service_name is now decoded directly onto ServiceOptions via extension augmentation (apiServiceName camelCase)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const apiServiceName = (svc.descriptor as any)?.options?.apiServiceName as string | undefined;
  const hasOpV1 = svc.methods.some(
    (m) => normalizeFqn(m.descriptor.outputType || '', pkg) === OP_V1,
  );
  const hasOpV1A = svc.methods.some(
    (m) => normalizeFqn(m.descriptor.outputType || '', pkg) === OP_V1A,
  );
  const opServiceDir = hasOpV1 ? OP_SVC_V1_DIR : hasOpV1A ? OP_SVC_V1A_DIR : undefined;
  const getOpReqFqn = hasOpV1
    ? '.nebius.common.v1.GetOperationRequest'
    : hasOpV1A
      ? '.nebius.common.v1alpha1.GetOperationRequest'
      : '';
  const getOpReqName = getOpReqFqn
    ? resolveTypeNameByFqn(getOpReqFqn, 'GetOperationRequest')
    : 'GetOperationRequest';
  const opServiceName = opServiceDir
    ? resolveImportSymbol(opServiceDir, 'OperationService')
    : 'OperationService';
  const typeNameFor = (fqn: string, info?: TypeIndexEntry): string =>
    info ? resolveTypeNameByFqn(fqn, info.tsName) : 'any';
  const pushMethodComment = (method: Method, fallback: string, indent: string): void => {
    const comment =
      svc.containingFile.getDocComment?.(method.path) ||
      svc.containingFile.getLeadingComment?.(method.path) ||
      fallback;
    lines.push(`${indent}/**`);
    for (const line of comment.replace(/\*\//g, '* /').split(/\r?\n/)) {
      lines.push(`${indent} * ${line}`.replace(/\s+$/, ''));
    }
    const deprecated = deprecationLine(method.descriptor);
    if (deprecated) lines.push(`${indent} * @deprecated ${deprecated}`);
    lines.push(`${indent} */`);
  };

  // Service description const and type alias
  // Add @deprecated JSDoc to the ServiceDescription if the service is deprecated
  const svcDep = deprecationLine(svc.descriptor);
  const svcDepOpts = deprecationOptions(svc.descriptor);
  lines.push('/**');
  lines.push(` * Defines the gRPC methods for the \`${pbFullSvcName}\` service.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export type ${svcName}ServiceDescription = typeof ${svcName}ServiceDescription;`);
  lines.push('/**');
  lines.push(` * Describes the gRPC methods for the \`${pbFullSvcName}\` service.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export const ${svcName}ServiceDescription = {`);
  for (const m of svc.methods) {
    const methodName = m.tsName;
    const pbMethodName = m.pb_name;
    const sendResetMask = shouldSendResetMask(m);
    const inKey = normalizeFqn(m.descriptor.inputType || '', pkg);
    const outKey = normalizeFqn(m.descriptor.outputType || '', pkg);
    const inInfo = typeIndex.get(inKey);
    const outInfo = typeIndex.get(outKey);
    const Req = typeNameFor(inKey, inInfo);
    const Res = typeNameFor(outKey, outInfo);
    lines.push(`  ${methodName}: {`);
    lines.push(`    path: "/${pkg ? `${pkg}.` : ''}${pbSvcName}/${pbMethodName}",`);
    lines.push(`    requestStream: false,`);
    lines.push(`    responseStream: false,`);
    lines.push(
      `    requestSerialize: (value: ${Req}) => Buffer.from(${Req}.encode(value).finish()),`,
    );
    if (Req !== 'any') {
      lines.push(`    requestDescriptor: () => ${Req}.$descriptor,`);
    }
    lines.push(`    sendResetMask: ${sendResetMask ? 'true' : 'false'},`);
    lines.push(`    requestDeserialize: (value: Buffer) => ${Req}.decode(value),`);
    lines.push(
      `    responseSerialize: (value: ${Res}) => Buffer.from(${Res}.encode(value).finish()),`,
    );
    lines.push(`    responseDeserialize: (value: Buffer) => ${Res}.decode(value),`);
    lines.push(`  },`);
  }
  lines.push(`} as const;`);
  lines.push('');
  // ServiceDescription was just emitted above; keep moving on.

  // Server interface
  lines.push('/**');
  lines.push(` * Handles server calls for the \`${pbFullSvcName}\` service.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export interface ${svcName}Server extends UntypedServiceImplementation {`);
  for (const m of svc.methods) {
    const methodName = m.tsName;
    const inKey = normalizeFqn(m.descriptor.inputType || '', pkg);
    const outKey = normalizeFqn(m.descriptor.outputType || '', pkg);
    const inInfo = typeIndex.get(inKey);
    const outInfo = typeIndex.get(outKey);
    const Req = typeNameFor(inKey, inInfo);
    const Res = typeNameFor(outKey, outInfo);
    pushMethodComment(m, `Handles the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(`  ${methodName}: handleUnaryCall<${Req}, ${Res}>;`);
  }
  lines.push(`}`);
  lines.push('');

  // Base client interface
  lines.push('/**');
  lines.push(` * Defines the low-level gRPC client for the \`${pbFullSvcName}\` service.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export interface ${svcName}BaseClient extends Client {`);
  for (const m of svc.methods) {
    const methodName = m.tsName;
    const inKey = normalizeFqn(m.descriptor.inputType || '', pkg);
    const outKey = normalizeFqn(m.descriptor.outputType || '', pkg);
    const inInfo = typeIndex.get(inKey);
    const outInfo = typeIndex.get(outKey);
    const Req = typeNameFor(inKey, inInfo);
    const Res = typeNameFor(outKey, outInfo);
    pushMethodComment(m, `Calls the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(
      `  ${methodName}(request: ${Req}, metadata: Metadata, options: Partial<CallOptions>, callback: (error: GrpcServiceError | null, response: ${Res}) => void): ClientUnaryCall;`,
    );
  }
  lines.push(`}`);
  lines.push('');

  // Base client constructor
  lines.push('/**');
  lines.push(` * Creates low-level gRPC clients for the \`${pbFullSvcName}\` service.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(
    `export const ${svcName}BaseClient = makeGenericClientConstructor(${svcName}ServiceDescription, "${pkg ? `${pkg}.` : ''}${pbSvcName}") as unknown as {`,
  );
  lines.push(`  /** Creates a low-level client for the service address. */`);
  lines.push(
    `  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ${svcName}BaseClient;`,
  );
  lines.push(`  /** Contains the gRPC service description. */`);
  lines.push(`  service: typeof ${svcName}ServiceDescription;`);
  lines.push(`  /** Contains the fully qualified protobuf service name. */`);
  lines.push(`  serviceName: string;`);
  lines.push(`};`);
  lines.push('');

  // SDK interface (method names lowerCamel)
  // Service leading comment (if any)
  const svcComment =
    svc.containingFile.getDocComment?.(svc.path) ||
    svc.containingFile.getLeadingComment?.(svc.path);
  const safeSvcComment = svcComment
    ? svcComment.replace(/\*\//g, '* /')
    : `Calls the \`${pbFullSvcName}\` service.`;
  lines.push('/**');
  for (const l of safeSvcComment.split(/\r?\n/)) lines.push(` * ${l}`.replace(/\s+$/, ''));
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export interface ${svcName} {`);
  lines.push(`  /** Contains the fully qualified protobuf service name. */`);
  lines.push(`  $type: ${JSON.stringify(pbFullSvcName)};`);
  for (const m of svc.methods) {
    const lower = m.tsName;
    const pbMethodName = m.pb_name;
    const inKey = normalizeFqn(m.descriptor.inputType || '', pkg);
    const outKey = normalizeFqn(m.descriptor.outputType || '', pkg);
    const inInfo = typeIndex.get(inKey);
    const outInfo = typeIndex.get(outKey);
    const Req = typeNameFor(inKey, inInfo);
    const outFqn = normalizeFqn(m.descriptor.outputType || '', pkg);
    const wrapOp = outFqn === OP_V1 || outFqn === OP_V1A;
    const isOperationsList = isListOperationsMethod(m);
    const ResBase = typeNameFor(outKey, outInfo);
    const Res = wrapOp
      ? `OperationWrapper<${getOpReqName}>`
      : isOperationsList
        ? 'OperationServiceListResponse'
        : ResBase;
    pushMethodComment(m, `Calls the \`${pbMethodName}\` RPC.`, '  ');
    lines.push(`  ${lower}(request: ${Req}): SDKRequestClass<${Req}, ${Res}>;`);
    pushMethodComment(m, `Calls the \`${pbMethodName}\` RPC.`, '  ');
    lines.push(`  ${lower}(request: ${Req}, metadata: Metadata): SDKRequestClass<${Req}, ${Res}>;`);
    pushMethodComment(m, `Calls the \`${pbMethodName}\` RPC.`, '  ');
    lines.push(
      `  ${lower}(request: ${Req}, metadata: Metadata, options: Partial<CallOptions> & RetryOptions): SDKRequestClass<${Req}, ${Res}>;`,
    );
  }
  lines.push(`}`); // close service interface
  lines.push('');
  // Extra interface for wrapped list response in OperationService (after closing service interface)
  if (isOpSvc) {
    lines.push('/** Contains one page of operations. */');
    lines.push('export interface OperationServiceListResponse {');
    lines.push('  /** Contains the operations on this page. */');
    lines.push(`  operations: OperationWrapper<${getOpReqName}>[];`);
    lines.push('  /** Contains the token that gets the next page. */');
    lines.push('  nextPageToken: string;');
    lines.push('}');
    lines.push('');
  }

  // SDK class (uses BaseClient)
  // Static helper to obtain OperationService for services that return Operation(s)
  const compiledApiName = apiServiceName ? JSON.stringify(apiServiceName) : 'undefined';
  lines.push('/**');
  lines.push(` * Calls the \`${pbFullSvcName}\` service through the Nebius SDK.`);
  if (svcDep) lines.push(` * @deprecated ${svcDep}`);
  lines.push(' */');
  lines.push(`export class ${svcName} implements ${svcName} {`);
  lines.push(`  $type: ${JSON.stringify(pbFullSvcName)} = ${JSON.stringify(pbFullSvcName)};`);
  if (!isOpSvc) lines.push(`  private addr: string;`);
  lines.push(`  private spec: typeof ${svcName}ServiceDescription;`);
  if (svcDep) {
    lines.push('  /**');
    lines.push(`   * @deprecated ${svcDep}`);
    lines.push('   */');
  }
  if (isOpSvc) {
    // For OperationService allow passing explicit service type and optional apiServiceName overriding $type usage
    lines.push('  /** Creates a client for the specified service address. */');
    lines.push(`  constructor(private sdk: SDKInterface, private addr: string) {`);
  } else {
    lines.push(
      `  private apiServiceName: ${apiServiceName ? 'string' : 'undefined'} = ${compiledApiName};`,
    );
    lines.push('  /** Creates a client that uses the SDK service address. */');
    lines.push(`  constructor(private sdk: SDKInterface) {`);
    lines.push(`    const addr = sdk.getAddressFromServiceName(this.$type, this.apiServiceName);`);
    lines.push(`    this.addr = addr;`);
  }
  lines.push(`    this.spec = ${svcName}ServiceDescription;`);
  // Emit runtime deprecation warning for using this service via the SDK (warn once)
  if (svcDep) {
    const fullSvc = pbFullSvcName;
    lines.push(`    if (!__deprecatedWarned.has(${JSON.stringify(fullSvc)})) {`);
    lines.push(`      __deprecatedWarned.add(${JSON.stringify(fullSvc)});`);
    lines.push(
      `      deprecatedWarn(${JSON.stringify(svcDepOpts?.description || '')}, "service", ${JSON.stringify(fullSvc)}, ${JSON.stringify(svcDepOpts?.effectiveAt || undefined)});`,
    );
    lines.push('    }');
  }
  lines.push(`  }`);
  if (!isOpSvc && (hasOpV1 || hasOpV1A)) {
    lines.push('');
    // Embed original service's compile-time apiServiceName (same as used in its own constructor)
    lines.push(`  /** Returns the operation service for this service address. */`);
    lines.push(`  getOperationService(): ${opServiceName} {`);
    lines.push(`    return new ${opServiceName}(this.sdk, this.addr);`);
    lines.push('  }');
  }
  lines.push('');

  for (const m of svc.methods) {
    const lower = m.tsName;
    const inKey = normalizeFqn(m.descriptor.inputType || '', pkg);
    const outKey = normalizeFqn(m.descriptor.outputType || '', pkg);
    const inInfo = typeIndex.get(inKey);
    const outInfo = typeIndex.get(outKey);
    const Req = typeNameFor(inKey, inInfo);
    const outFqn = normalizeFqn(m.descriptor.outputType || '', pkg);
    const wrapOp = outFqn === OP_V1 || outFqn === OP_V1A;
    const isOperationsList = isListOperationsMethod(m);
    const ResBase = typeNameFor(outKey, outInfo);
    const retT = wrapOp
      ? `SDKRequestClass<${Req}, OperationWrapper<${getOpReqName}>>`
      : isOperationsList
        ? `SDKRequestClass<${Req}, OperationServiceListResponse>`
        : `SDKRequestClass<${Req}, ${ResBase}>`;
    pushMethodComment(m, `Calls the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(`  ${lower}(request: ${Req}): ${retT};`);
    pushMethodComment(m, `Calls the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(`  ${lower}(request: ${Req}, metadata: Metadata): ${retT};`);
    pushMethodComment(m, `Calls the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(
      `  ${lower}(request: ${Req}, metadata: Metadata, options: Partial<CallOptions> & RetryOptions): ${retT};`,
    );
    pushMethodComment(m, `Calls the \`${m.pb_name}\` RPC.`, '  ');
    lines.push(`  ${lower}(...args: any[]): ${retT} {`);
    lines.push(`    const spec = this.spec.${lower};`);
    lines.push(`    const request = args[0];`);
    lines.push(
      `    const metadata = (args.length > 1 ? args[1] : undefined) as Metadata | undefined;`,
    );
    lines.push(
      `    const options = (args.length > 2 ? args[2] : undefined) as (Partial<CallOptions> & RetryOptions) | undefined;`,
    );
    if (wrapOp) {
      lines.push(`    const deserialize = (value: Buffer) => {`);
      lines.push(`      const resp = spec.responseDeserialize(value);`);
      if (isOpSvc) {
        lines.push(
          `      return new OperationWrapper(resp, this, this.sdk.logger.child("operation"));`,
        );
      } else {
        lines.push(
          `      return new OperationWrapper(resp, this.getOperationService(), this.sdk.logger.child("operation"));`,
        );
      }
      lines.push(`    };`);
    } else if (isOperationsList) {
      // Special case: list method of OperationService should return operations wrapped in OperationWrapper
      lines.push(`    const deserialize = (value: Buffer) => {`);
      lines.push(`      const resp = spec.responseDeserialize(value);`);
      lines.push(
        `      return { operations: (resp?.operations ?? []).map((o: any) => new OperationWrapper(o, this, this.sdk.logger.child("operation"))), nextPageToken: resp?.nextPageToken || "" };`,
      );
      lines.push(`    };`);
    } else {
      lines.push(`    const deserialize = spec.responseDeserialize;`);
    }
    // Method-level runtime deprecation warning (warn once)
    const mDepRuntime = deprecationLine(m.descriptor);
    const mDepOpts = deprecationOptions(m.descriptor);
    if (mDepRuntime) {
      const fullMethod = `${pbFullSvcName}.${m.pb_name}`;
      lines.push(`    if (!__deprecatedWarned.has(${JSON.stringify(fullMethod)})) {`);
      lines.push(`      __deprecatedWarned.add(${JSON.stringify(fullMethod)});`);
      lines.push(
        `      deprecatedWarn(${JSON.stringify(mDepOpts?.description || '')}, "method", ${JSON.stringify(fullMethod)}, ${JSON.stringify(mDepOpts?.effectiveAt || undefined)});`,
      );
      lines.push('    }');
    }
    lines.push(
      `    return new SDKRequestClass(this.sdk, spec, this.addr, deserialize, request, metadata, options);`,
    );
    lines.push(`  }`);
    lines.push('');
  }

  lines.push(`}`);
  lines.push('');

  return lines.join('\n');
}
