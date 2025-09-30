import type { Message as TSDescriptorMessage } from '../../descriptors';
import { deprecationLine, scalarOrRef, tsFieldType } from '../helpers';

export function emitInterface(m: TSDescriptorMessage, typeName: string): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  // Emit doc comment for message if available (leading + trailing + detached)
  const msgComment =
    m.containingFile.getDocComment?.(m.path) ||
    m.containingFile.getLeadingComment?.(m.path) ||
    undefined;
  const msgDep = deprecationLine(m.descriptor);
  if (msgComment || msgDep) {
    const safe = msgComment ? msgComment.replace(/\*\//g, '* /') : undefined;
    lines.push('/**');
    if (safe) for (const l of safe.split(/\r?\n/)) lines.push(` * ${l}`.replace(/\s+$/, ''));
    if (msgDep) lines.push(` * @deprecated ${msgDep}`);
    lines.push(' */');
  }
  lines.push(`export interface ${m.tsName} {`);
  lines.push(`  $type: "${typeName}";`);
  lines.push(`  [unknownFieldsSymbol]?: Uint8Array | undefined;`);
  // logging/inspect support
  lines.push(`  [custom]?: () => string;`);
  lines.push(`  [customJson]?: () => unknown;`);
  for (const f of nonOneofFields) {
    if (f.containingMessage && f.containingMessage.isMapEntry()) continue;
    const name = f.tsName;
    const opt = f.tracksPresence() ? '?' : '';
    const tsType = tsFieldType(f);
    const fieldComment =
      f.containingFile.getDocComment?.(f.path) ||
      f.containingFile.getLeadingComment?.(f.path) ||
      undefined;
    const fDep = deprecationLine(f.descriptor);
    if (fieldComment) {
      const safe = fieldComment.replace(/\*\//g, '* /');
      const commentLines = safe.split(/\r?\n/);
      if (commentLines.length === 1) {
        if (fDep) {
          lines.push(`  /** ${commentLines[0]}\n   * @deprecated ${fDep} */`);
        } else {
          lines.push(`  /** ${commentLines[0]} */`);
        }
      } else {
        lines.push('  /**');
        for (const cl of commentLines) lines.push(`   * ${cl}`.replace(/\s+$/, ''));
        if (fDep) lines.push(`   * @deprecated ${fDep}`);
        lines.push('   */');
      }
    } else if (fDep) {
      lines.push(`  /** @deprecated ${fDep} */`);
    }
    lines.push(`  ${name}${opt}: ${tsType};`);
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    const oneofComment =
      o.containingFile.getDocComment?.(o.path) || o.containingFile.getLeadingComment?.(o.path);
    if (oneofComment) {
      const safe = oneofComment.replace(/\*\//g, '* /');
      const cLines = safe.split(/\r?\n/);
      if (cLines.length === 1) lines.push(`  /** ${cLines[0]} */`);
      else {
        lines.push('  /**');
        for (const cl of cLines) lines.push(`   * ${cl}`.replace(/\s+$/, ''));
        lines.push('   */');
      }
    }
    lines.push(`  ${prop}?:`);
    for (const f of o.fields) {
      const caseName = f.tsName;
      const t = scalarOrRef(f);
      lines.push(`    | { $case: "${caseName}"; ${caseName}: ${t} }`);
    }
    lines.push(`    | undefined;`);
  }
  lines.push('}');
  lines.push('');
  return lines;
}
