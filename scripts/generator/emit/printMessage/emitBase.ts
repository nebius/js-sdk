import type { Message as TSDescriptorMessage } from '../../descriptors';
import { defaultValueFor } from '../helpers';

export function emitBaseFactory(m: TSDescriptorMessage, typeName: string): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  lines.push(`function createBase${m.tsName}(): ${m.tsName} {`);
  lines.push('  return {');
  lines.push(`    $type: "${typeName}",`);
  for (const f of nonOneofFields) {
    const name = f.tsName;
    const def = defaultValueFor(f);
    lines.push(`    ${name}: ${def},`);
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    lines.push(`    ${prop}: undefined,`);
  }
  lines.push('  };');
  lines.push('}');
  lines.push('');
  return lines;
}
