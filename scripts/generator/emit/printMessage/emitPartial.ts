import type { Message as TSDescriptorMessage } from '../../descriptors';
import { defaultValueFor, is64Bit, scalarOrRef, wktFqnOf } from '../helpers';
import { resolveEnumName, resolveMessageName } from '../typeNames';

export function emitCreate(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  lines.push(`  create<I extends DeepPartial<${m.tsName}>>(base?: I): ${m.tsName} {`);
  lines.push(`    return ${m.tsName}.fromPartial(base ?? {});`);
  lines.push('  },');
  return lines;
}

export function emitFromPartial(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  lines.push(`  fromPartial<I extends DeepPartial<${m.tsName}>>(object: I): ${m.tsName} {`);
  lines.push(`    const message = createBase${m.tsName}();`);
  const emitted = new Set<string>();
  for (const f of nonOneofFields) {
    const name = f.tsName;
    if (emitted.has(name)) continue; // avoid duplicate initialization
    emitted.add(name);
    if (f.isMap()) {
      const entry = f.message();
      // const kf = entry?.fields.find((x) => x.descriptor.number === 1)!;
      const vf = entry?.fields.find((x) => x.descriptor.number === 2)!;
      const valueTs = scalarOrRef(vf);
      let valueEncoder = 'value';
      if (vf.isMessage()) {
        if (!wktFqnOf(vf)) {
          valueEncoder = `${resolveMessageName(vf.message())}.fromPartial(value)`;
        }
      } else if (vf.isEnum()) {
        valueEncoder = `${resolveEnumName(vf.enum())}.fromJSON(value.name)`;
      } else if (is64Bit(vf)) {
        valueEncoder = `Long.fromValue(value)`;
      }
      lines.push(
        `    message.${name} = Object.entries(
      object.${name} ?? {}
    ).reduce<{ [key: string]: ${valueTs} }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ${valueEncoder};
        }
        return acc;
      },
      {},
    );`,
      );
      continue;
    }
    if (f.isRepeated()) {
      if (f.isMessage()) {
        const wktName = wktFqnOf(f);
        const ref = resolveMessageName(f.message());
        if (wktName) {
          lines.push(`    message.${name} = object.${name}?.map((e: any) => {
      return wkt[${JSON.stringify(wktName)}].fromPartial(e);
    }) || [];`);
        } else if (ref) {
          lines.push(
            `    message.${name} = object.${name}?.map((e) => ${ref}.fromPartial(e)) || [];`,
          );
        } else {
          lines.push(`    message.${name} = object.${name}?.map((e) => e) || [];`);
        }
      } else if (f.isEnum()) {
        lines.push(
          `    message.${name} = object.${name}?.map((e) => ${resolveEnumName(f.enum())}.fromJSON(e.name)) || [];`,
        );
      } else if (is64Bit(f)) {
        lines.push(`    message.${name} = object.${name}?.map((e) => Long.fromValue(e)) || [];`);
      } else {
        lines.push(`    message.${name} = object.${name}?.map((e) => e) || [];`);
      }
    } else if (f.isMessage()) {
      const wktName = wktFqnOf(f);
      const ref = resolveMessageName(f.message());
      if (wktName) {
        lines.push(
          `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? wkt[${JSON.stringify(wktName)}].fromPartial(object.${name})
      : undefined;`,
        );
      } else if (ref) {
        lines.push(
          `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? ${ref}.fromPartial(object.${name})
      : undefined;`,
        );
      } else {
        lines.push(
          `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? object.${name}
      : undefined;`,
        );
      }
    } else if (f.isEnum()) {
      lines.push(
        `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? ${resolveEnumName(f.enum())}.fromJSON(object.${name}.name)
      : ${defaultValueFor(f)};`,
      );
    } else if (is64Bit(f)) {
      lines.push(
        `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? Long.fromValue(object.${name})
      : ${defaultValueFor(f)};`,
      );
    } else {
      lines.push(
        `    message.${name} = (object.${name} !== undefined && object.${name} !== null)
      ? object.${name}
      : ${defaultValueFor(f)};`,
      );
    }
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    lines.push(`    switch (object.${prop}?.$case) {`);
    for (const f of o.fields) {
      const caseName = f.tsName;
      if (f.isMessage()) {
        const wktName = wktFqnOf(f);
        const ref = resolveMessageName(f.message());
        if (wktName) {
          // For WKTs, pass through the value without calling .fromPartial
          lines.push(
            `      case "${caseName}": {
        if (object.${prop}?.${caseName} !== undefined && object.${prop}?.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: wkt[${JSON.stringify(wktName)}].fromPartial(object.${prop}.${caseName}),
          };
        }
        break;
      }`,
          );
        } else if (ref) {
          lines.push(
            `      case "${caseName}": {
        if (object.${prop}.${caseName} !== undefined && object.${prop}.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${ref}.fromPartial(object.${prop}.${caseName}),
          };
        }
        break;
      }`,
          );
        } else {
          lines.push(
            `      case "${caseName}": {
        if (object.${prop}?.${caseName} !== undefined && object.${prop}?.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: object.${prop}.${caseName} as any
          };
        }
        break;
      }`,
          );
        }
      } else if (f.isEnum()) {
        lines.push(
          `      case "${caseName}": {
        if (object.${prop}?.${caseName} !== undefined && object.${prop}?.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${resolveEnumName(f.enum())}.fromJSON(object.${prop}.${caseName}.name)
          };
        }
        break;
      }`,
        );
      } else if (is64Bit(f)) {
        lines.push(
          `      case "${caseName}": {
        if (object.${prop}?.${caseName} !== undefined && object.${prop}?.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: Long.fromValue(object.${prop}.${caseName})
          };
        }
        break;
      }`,
        );
      } else {
        lines.push(
          `      case "${caseName}": {
        if (object.${prop}?.${caseName} !== undefined && object.${prop}?.${caseName} !== null) {
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: object.${prop}.${caseName},
          };
        }
        break;
      }`,
        );
      }
    }
    lines.push('      default: break;');
    lines.push('    }');
  }
  lines.push('    return message;');
  lines.push('  },');
  return lines;
}
