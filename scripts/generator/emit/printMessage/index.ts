import type { Message as TSDescriptorMessage } from '../../descriptors';

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

  // base factory
  lines.push(...emitBaseFactory(m, typeName));

  return lines.join('\n');
}
