import type { Message as TSDescriptorMessage } from '../../descriptors';
import type * as GPB from '../../protos/protobuf/index';

import { emitBaseFactory } from './emitBase';
import { emitDecode } from './emitDecode';
import { emitEncode } from './emitEncode';
import { emitInterface } from './emitInterface';
import { emitFromJSON, emitToJSON } from './emitJSON';
import { emitCreate, emitFromPartial } from './emitPartial';

function fqTypeName(m: TSDescriptorMessage): string {
  const pkg = m.containingFile.package || '';
  const pathName = m.pathQualifiedName().replace(/^\./, '');
  return pkg ? `${pkg}.${pathName}` : pathName;
}

export function printMessage(m: TSDescriptorMessage): string {
  const lines: string[] = [];
  const typeName = fqTypeName(m);

  // Interface
  lines.push(...emitInterface(m, typeName));

  // static block with type, and registration
  lines.push(`export const ${m.tsName}: MessageFns<${m.tsName}, "${typeName}"> = {`);
  lines.push(`  $type: "${typeName}" as const,`);
  lines.push('');
  lines.push(...emitEncode(m));
  lines.push(...emitDecode(m));
  lines.push(...emitFromJSON(m, typeName));
  lines.push(...emitToJSON(m));
  lines.push(...emitCreate(m));
  lines.push(...emitFromPartial(m));
  lines.push('};');
  lines.push('');
  lines.push(`protoRegistry.registerMessage(${m.tsName});`);
  lines.push('');

  // custom inspectors (logging)
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  const partsPushLines: string[] = [];
  const objAssignLines: string[] = [];
  for (const f of nonOneofFields) {
    const name = f.tsName;
    // extension flags
    const opts = f.descriptor?.options as GPB.FieldOptions | undefined;
    const hasSensitive = (opts as unknown as { sensitive?: boolean })?.sensitive === true;
    const hasCredentials = (opts as unknown as { credentials?: boolean })?.credentials === true;
    // create condition for non-default values
    if (f.isMap()) {
      if (hasSensitive) {
        partsPushLines.push(
          `  if (Object.keys(this.${name} || {}).length) parts.push(${JSON.stringify(name)} + "=***");`,
        );
        objAssignLines.push(`  if (Object.keys(this.${name} || {}).length) obj.${name} = "***";`);
      } else if (hasCredentials) {
        partsPushLines.push(
          `  if (Object.keys(this.${name} || {}).length) { const _e = Object.entries(this.${name} || {}); const _san = Object.fromEntries(_e.map(([k,v])=>[k, TokenSanitizer.credentialsSanitizer().sanitize(String(v))])); parts.push(${JSON.stringify(name)} + "=" + inspect(_san)); }`,
        );
        objAssignLines.push(
          `  if (Object.keys(this.${name} || {}).length) { const _e = Object.entries(this.${name} || {}); obj.${name} = Object.fromEntries(_e.map(([k,v])=>[k, TokenSanitizer.credentialsSanitizer().sanitize(String(v))])); }`,
        );
      } else {
        partsPushLines.push(
          `  if (Object.keys(this.${name} || {}).length) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
        );
        objAssignLines.push(
          `  if (Object.keys(this.${name} || {}).length) obj.${name} = inspectJson(this.${name});`,
        );
      }
      continue;
    }
    if (f.isRepeated()) {
      if (hasSensitive) {
        partsPushLines.push(
          `  if ((this.${name}?.length ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=***");`,
        );
        objAssignLines.push(`  if ((this.${name}?.length ?? 0) !== 0) obj.${name} = "***";`);
      } else if (hasCredentials) {
        partsPushLines.push(
          `  if ((this.${name}?.length ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}.map((v:any)=>TokenSanitizer.credentialsSanitizer().sanitize(String(v)))));`,
        );
        objAssignLines.push(
          `  if ((this.${name}?.length ?? 0) !== 0) obj.${name} = (this.${name}||[]).map((v:any)=>TokenSanitizer.credentialsSanitizer().sanitize(String(v)));`,
        );
      } else {
        partsPushLines.push(
          `  if ((this.${name}?.length ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
        );
        objAssignLines.push(
          `  if ((this.${name}?.length ?? 0) !== 0) obj.${name} = inspectJson(this.${name});`,
        );
      }
      continue;
    }
    // presence-tracking or message/enum/number/bool/string/bytes/long
    if (f.tracksPresence() || f.isMessage() || f.isEnum()) {
      if (hasSensitive) {
        partsPushLines.push(
          `  if (this.${name} !== undefined) parts.push(${JSON.stringify(name)} + "=***");`,
        );
        objAssignLines.push(`  if (this.${name} !== undefined) obj.${name} = "***";`);
      } else if (hasCredentials) {
        partsPushLines.push(
          `  if (this.${name} !== undefined) parts.push(${JSON.stringify(name)} + "=" + inspect(TokenSanitizer.credentialsSanitizer().sanitize(String(this.${name}))));`,
        );
        objAssignLines.push(
          `  if (this.${name} !== undefined) obj.${name} = TokenSanitizer.credentialsSanitizer().sanitize(String(this.${name}));`,
        );
      } else {
        partsPushLines.push(
          `  if (this.${name} !== undefined) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
        );
        objAssignLines.push(
          `  if (this.${name} !== undefined) obj.${name} = inspectJson(this.${name});`,
        );
      }
      continue;
    }
    // scalars with concrete defaults
    switch (f.typeCode()) {
      case 12 /* bytes */:
        if (hasSensitive) {
          partsPushLines.push(
            `  if ((this.${name}?.length ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=***");`,
          );
          objAssignLines.push(`  if ((this.${name}?.length ?? 0) !== 0) obj.${name} = "***";`);
        } else {
          partsPushLines.push(
            `  if ((this.${name}?.length ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
          );
          objAssignLines.push(
            `  if ((this.${name}?.length ?? 0) !== 0) obj.${name} = inspectJson(this.${name});`,
          );
        }
        break;
      case 9 /* string */:
        if (hasSensitive) {
          partsPushLines.push(
            `  if (this.${name} !== "") parts.push(${JSON.stringify(name)} + "=***");`,
          );
          objAssignLines.push(`  if (this.${name} !== "") obj.${name} = "***";`);
        } else if (hasCredentials) {
          partsPushLines.push(
            `  if (this.${name} !== "") parts.push(${JSON.stringify(name)} + "=" + inspect(TokenSanitizer.credentialsSanitizer().sanitize(this.${name} as any)));`,
          );
          objAssignLines.push(
            `  if (this.${name} !== "") obj.${name} = TokenSanitizer.credentialsSanitizer().sanitize(this.${name} as any);`,
          );
        } else {
          partsPushLines.push(
            `  if (this.${name} !== "") parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
          );
          objAssignLines.push(
            `  if (this.${name} !== "") obj.${name} = inspectJson(this.${name});`,
          );
        }
        break;
      case 8 /* bool */:
        if (hasSensitive) {
          partsPushLines.push(
            `  if (this.${name} === true) parts.push(${JSON.stringify(name)} + "=***");`,
          );
          objAssignLines.push(`  if (this.${name} === true) obj.${name} = "***";`);
        } else {
          partsPushLines.push(
            `  if (this.${name} === true) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
          );
          objAssignLines.push(
            `  if (this.${name} === true) obj.${name} = inspectJson(this.${name});`,
          );
        }
        break;
      case 3:
      case 4:
      case 6:
      case 16:
      case 18 /* int64 family */:
        if (hasSensitive) {
          partsPushLines.push(
            `  if (!this.${name}?.isZero?.()) parts.push(${JSON.stringify(name)} + "=***");`,
          );
          objAssignLines.push(`  if (!this.${name}?.isZero?.()) obj.${name} = "***";`);
        } else {
          partsPushLines.push(
            `  if (!this.${name}?.isZero?.()) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
          );
          objAssignLines.push(
            `  if (!this.${name}?.isZero?.()) obj.${name} = inspectJson(this.${name});`,
          );
        }
        break;
      default:
        // numeric (int32/uint32/float/double/fixed32/sfixed32/sint32)
        if (hasSensitive) {
          partsPushLines.push(
            `  if ((this.${name} ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=***");`,
          );
          objAssignLines.push(`  if ((this.${name} ?? 0) !== 0) obj.${name} = "***";`);
        } else {
          partsPushLines.push(
            `  if ((this.${name} ?? 0) !== 0) parts.push(${JSON.stringify(name)} + "=" + inspect(this.${name}));`,
          );
          objAssignLines.push(
            `  if ((this.${name} ?? 0) !== 0) obj.${name} = inspectJson(this.${name});`,
          );
        }
        break;
    }
  }

  const customFnName = `${m.tsName}CustomInspect`;
  const customJsonFnName = `${m.tsName}CustomJson`;
  const applyFnName = `apply${m.tsName}Custom`;

  lines.push(`function ${customFnName}(this: ${m.tsName}): string {`);
  lines.push(`  const parts: string[] = [];`);
  for (const l of partsPushLines) lines.push(l);
  lines.push('  return `${this.$type}(${parts.join(", ")})`;');
  lines.push('}');
  lines.push('');
  lines.push(`function ${customJsonFnName}(this: ${m.tsName}): unknown {`);
  lines.push(`  const obj: globalThis.Record<string, unknown> = {`);
  lines.push(`    type: this.$type,`);
  lines.push('  };');
  for (const l of objAssignLines) lines.push(l);
  lines.push('  return obj;');
  lines.push('}');
  lines.push('');
  lines.push(`function ${applyFnName}(message: ${m.tsName}): ${m.tsName} {`);
  lines.push(`  message[custom] = ${customFnName};`);
  lines.push(`  message[customJson] = ${customJsonFnName};`);
  lines.push('  return message;');
  lines.push('}');
  lines.push('');

  // base factory
  lines.push(...emitBaseFactory(m, typeName));

  return lines.join('\n');
}
