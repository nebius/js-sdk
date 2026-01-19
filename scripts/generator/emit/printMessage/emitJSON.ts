import type { Message as TSDescriptorMessage } from '../../descriptors';
import {
  defaultValueFor,
  enumFromJSONConv,
  enumToJSONConv,
  is64Bit,
  jsonScalarConverter,
  msgFromJSONConv,
  msgToJSONConv,
  wktFqnOf,
} from '../helpers';
import { resolveMessageName } from '../typeNames';

export function emitFromJSON(m: TSDescriptorMessage, typeName: string): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  const isOptions = m.tsName.endsWith('Options') && m.containingFile.package === 'google.protobuf';
  lines.push(`  fromJSON(object: any): ${m.tsName} {`);
  if (isOptions) {
    lines.push(`    const message: ${m.tsName} = {`);
  } else {
    lines.push(`    return apply${m.tsName}Custom({`);
  }
  lines.push(`      $type: "${typeName}",`);
  const emitted = new Set<string>();
  for (const f of nonOneofFields) {
    const name = f.tsName;
    if (emitted.has(name)) continue; // guard against duplicate
    emitted.add(name);
    const jsonName = f.jsonName;
    const pbName = f.pb_name;
    const wktName = wktFqnOf(f);
    if (f.isMap()) {
      const entry = f.message();
      const vf = entry?.fields.find((x) => x.descriptor.number === 2)!;
      let vFrom = '';
      if (vf.isMessage()) {
        if (wktFqnOf(vf)) {
          vFrom = `wkt["${wktFqnOf(vf)}"].fromJSON`;
        } else {
          const msgRef = resolveMessageName(vf.message());
          vFrom = `${msgRef}.fromJSON`;
        }
      } else if (vf.isEnum()) {
        vFrom = enumFromJSONConv(vf);
      } else if (is64Bit(vf)) {
        vFrom = 'Long.fromValue';
      } else {
        vFrom = jsonScalarConverter(vf);
      }

      lines.push(
        `      ${name}: (isSet(object.${jsonName}) && typeof object.${jsonName} === "object" ? object.${jsonName}
        : (isSet(object.${pbName}) && typeof object.${pbName} === "object" ? object.${pbName} : undefined))
        ? Object.entries((object.${jsonName} ?? object.${pbName}) as any).reduce<{ [key: string]: any }>((acc, [key, value]) => {
          acc[key] = ${vFrom}(value as any);
          return acc;
        }, {})
        : {},`,
      );
      continue;
    }
    if (f.isRepeated()) {
      if (f.isMessage()) {
        const conv = wktName ? `wkt["${wktName}"].fromJSON` : msgFromJSONConv(f);
        lines.push(
          `      ${name}: globalThis.Array.isArray(object?.${jsonName} ?? object?.${pbName})
        ? (object.${jsonName} ?? object.${pbName}).map((e: any) => ${conv}(e))
        : [],`,
        );
      } else if (f.isEnum()) {
        const conv = enumFromJSONConv(f);
        lines.push(
          `      ${name}: globalThis.Array.isArray(object?.${jsonName} ?? object?.${pbName})
        ? (object.${jsonName} ?? object.${pbName}).map((e: any) => ${conv}(e))
        : [],`,
        );
      } else if (is64Bit(f)) {
        lines.push(
          `      ${name}: globalThis.Array.isArray(object?.${jsonName} ?? object?.${pbName})
        ? (object.${jsonName} ?? object.${pbName}).map((e: any) => Long.fromValue(e))
        : [],`,
        );
      } else {
        const conv = jsonScalarConverter(f);
        lines.push(
          `      ${name}: globalThis.Array.isArray(object?.${jsonName} ?? object?.${pbName})
        ? (object.${jsonName} ?? object.${pbName}).map((e: any) => ${conv}(e))
        : [],`,
        );
      }
    } else if (wktName) {
      lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? wkt["${wktName}"].fromJSON(object.${jsonName} ?? object.${pbName})
        : ${defaultValueFor(f)},`);
    } else if (f.isMessage()) {
      const conv = msgFromJSONConv(f);
      lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? ${conv}(object.${jsonName} ?? object.${pbName})
        : ${defaultValueFor(f)},`);
    } else if (f.isEnum()) {
      const conv = enumFromJSONConv(f);
      if (f.tracksPresence()) {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? ${conv}(object.${jsonName} ?? object.${pbName})
        : undefined,`);
      } else {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? ${conv}(object.${jsonName} ?? object.${pbName})
        : ${defaultValueFor(f)},`);
      }
    } else if (is64Bit(f)) {
      if (f.tracksPresence()) {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? Long.fromValue(object.${jsonName} ?? object.${pbName})
        : undefined,`);
      } else {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? Long.fromValue(object.${jsonName} ?? object.${pbName})
        : Long.ZERO,`);
      }
    } else {
      const conv = jsonScalarConverter(f);
      if (f.tracksPresence()) {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? ${conv}(object.${jsonName} ?? object.${pbName})
        : undefined,`);
      } else {
        lines.push(`      ${name}: isSet(object.${jsonName} ?? object.${pbName})
        ? ${conv}(object.${jsonName} ?? object.${pbName})
        : ${defaultValueFor(f)},`);
      }
    }
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    if (emitted.has(prop)) continue; // shouldn't happen but be safe
    const cases = o.fields.map((f) => ({
      caseName: f.tsName,
      jsonName: f.jsonName,
      pbName: f.pb_name,
      conv: wktFqnOf(f)
        ? `wkt["${wktFqnOf(f)}"].fromJSON`
        : f.isMessage()
          ? msgFromJSONConv(f)
          : f.isEnum()
            ? enumFromJSONConv(f)
            : is64Bit(f)
              ? 'Long.fromValue'
              : jsonScalarConverter(f),
      isLong: is64Bit(f),
    }));
    if (cases.length > 0) {
      lines.push(`      ${prop}: (() => {`);
      for (const c of cases) {
        const rhs = c.isLong
          ? `{
            $case: "${c.caseName}",
            ${c.caseName}: Long.fromValue(object.${c.jsonName} ?? object.${c.pbName})
          }`
          : `{
            $case: "${c.caseName}",
            ${c.caseName}: ${c.conv}(object.${c.jsonName} ?? object.${c.pbName})
          }`;
        lines.push(`        if (isSet(object.${c.jsonName}) || isSet(object.${c.pbName})) {
          return ${rhs};
        }`);
      }
      lines.push(`        return undefined;`);
      lines.push(`      })(),`);
    }
  }
  if (isOptions) {
    const fullType = m.fullQualifiedName().replace(/^[.]/, '');
    lines.push(`    };`);
    lines.push(`    // Populate registered extensions (json)
    for (const _ext of protoRegistry.listExtensions("${fullType}")) {
      _ext.fromJSON?.(message as any, object);
    }`);
    lines.push(`    return apply${m.tsName}Custom(message);`);
    lines.push('  },');
  } else {
    lines.push(`    });`);
    lines.push('  },');
  }
  return lines;
}

export function emitToJSON(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  const isOptions = m.tsName.endsWith('Options') && m.containingFile.package === 'google.protobuf';
  lines.push(`  toJSON(message: ${m.tsName}, use: "json" | "pb" = "json"): unknown {`);
  lines.push('    const obj: any = {};');
  lines.push('    const pick = (json: string, pb: string) => (use === "json" ? json : pb);');
  for (const f of nonOneofFields) {
    const name = f.tsName;
    const jsonName = f.jsonName;
    const pbName = f.pb_name;
    const wktName = wktFqnOf(f);
    if (f.isMap()) {
      const kConv = (() => {
        const vf = f.message()!.fields.find((x) => x.descriptor.number === 2)!;
        return vf.isMessage()
          ? wktFqnOf(vf)
            ? `wkt["${wktFqnOf(vf)!}"].toJSON(v, use)`
            : `${resolveMessageName(vf.message())}.toJSON(v, use)`
          : vf.typeCode() === 12
            ? `base64FromBytes(v)`
            : vf.isEnum()
              ? `${enumToJSONConv(f.message()!.fields.find((x) => x.descriptor.number === 2)!)}(v)`
              : is64Bit(vf)
                ? `v?.toString?.()`
                : 'v as any';
      })();
      lines.push(`    if (message.${name}) {
      const entries = Object.entries(message.${name});
      if (entries.length > 0) {
        obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = {};
        entries.forEach(([k, v]) => {
          obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})][k] = ${kConv};
        });
      }
    }`);
      continue;
    }
    if (f.isRepeated()) {
      if (f.isMessage()) {
        const mapConv = wktName
          ? `wkt["${wktName}"].toJSON(e, use)`
          : `${msgToJSONConv(f)}(e, use)`;
        lines.push(`    if (message.${name}?.length) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}.map((e) => e ? ${mapConv} : undefined);
    }`);
      } else if (f.isEnum()) {
        const conv = enumToJSONConv(f);
        lines.push(`    if (message.${name}?.length) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}.map((e) => ${conv}(e));
    }`);
      } else if (is64Bit(f)) {
        lines.push(`    if (message.${name}?.length) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}.map((e) => (e || Long.ZERO).toString());
    }`);
      } else if (f.typeCode() === 12 /* bytes */) {
        lines.push(`    if (message.${name}?.length) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}.map((e) => base64FromBytes(e));
    }`);
      } else {
        lines.push(`    if (message.${name}?.length) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}.map((e) => e);
    }`);
      }
    } else if (wktName) {
      lines.push(`    if (message.${name} !== undefined) {
  obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = wkt["${wktName}"].toJSON(message.${name}, use);
    }`);
    } else if (f.isMessage()) {
      const conv = msgToJSONConv(f);
      lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name}
        ? ${conv}(message.${name}, use)
        : undefined;
    }`);
    } else if (f.isEnum()) {
      const conv = enumToJSONConv(f);
      const def = defaultValueFor(f);
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = ${conv}(message.${name});
    }`);
      } else {
        lines.push(`    if ((message.${name} ?? ${def}) !== ${def}) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = ${conv}(message.${name});
    }`);
      }
    } else if (is64Bit(f)) {
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = (message.${name} || Long.ZERO).toString();
    }`);
      } else {
        lines.push(`    if (!message.${name}?.isZero?.()) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = (message.${name} || Long.ZERO).toString();
    }`);
      }
    } else if (f.typeCode() === 12 /* bytes */) {
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = base64FromBytes(message.${name});
    }`);
      } else {
        lines.push(`    if ((message.${name}?.length ?? 0) !== 0) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = base64FromBytes(message.${name});
    }`);
      }
    } else if (f.typeCode() === 9 /* string */) {
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      } else {
        lines.push(`    if (message.${name} !== "") {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      }
    } else if (f.typeCode() === 8 /* bool */) {
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      } else {
        lines.push(`    if (message.${name} === true) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      }
    } else {
      if (f.tracksPresence()) {
        lines.push(`    if (message.${name} !== undefined) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      } else {
        lines.push(`    if ((message.${name} ?? 0) !== 0) {
      obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${name};
    }`);
      }
    }
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    lines.push(`    switch (message.${prop}?.$case) {`);
    for (const f of o.fields) {
      const caseName = f.tsName;
      const jsonName = f.jsonName;
      const pbName = f.pb_name;
      const wktName = wktFqnOf(f);
      if (wktName) {
        lines.push(
          `      case "${caseName}": {
  obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = wkt["${wktName}"].toJSON(message.${prop}.${caseName}, use);
        break;
      }`,
        );
      } else if (f.isMessage()) {
        const conv = msgToJSONConv(f);
        lines.push(
          `      case "${caseName}": {
  obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = ${conv}(message.${prop}.${caseName}, use);
        break;
      }`,
        );
      } else if (f.isEnum()) {
        const conv = enumToJSONConv(f);
        lines.push(
          `      case "${caseName}": {
        obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = ${conv}(message.${prop}.${caseName});
        break;
      }`,
        );
      } else if (is64Bit(f)) {
        lines.push(
          `      case "${caseName}": {
        obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = ((message.${prop}.${caseName}) || Long.ZERO).toString();
        break;
      }`,
        );
      } else if (f.typeCode() === 12 /* bytes */) {
        lines.push(
          `      case "${caseName}": {
        obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = base64FromBytes(message.${prop}.${caseName});
        break;
      }`,
        );
      } else {
        lines.push(
          `      case "${caseName}": {
        obj[pick(${JSON.stringify(jsonName)}, ${JSON.stringify(pbName)})] = message.${prop}.${caseName};
        break;
      }`,
        );
      }
    }
    lines.push(`      default: break;`);
    lines.push(`    }`);
  }
  if (isOptions) {
    lines.push('    // Serialize registered extensions');
    lines.push('    for (const _ext of protoRegistry.listExtensions(message.$type)) {');
    lines.push('      _ext.toJSON?.(message as any, obj, use);');
    lines.push('    }');
  }
  lines.push('    return obj;');
  lines.push('  },');
  return lines;
}
