import type { Message as TSDescriptorMessage } from '../../descriptors';
import {
  defaultValueFor,
  deprecationOptions,
  is64Bit,
  isPackableScalar,
  tagFor,
  wireTypeFor,
  wktFqnOf,
  writerMethodFor,
} from '../helpers';

export function emitEncode(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  lines.push(
    `  encode(message: ${m.tsName}, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {`,
  );
  // Message-level deprecation warning
  const msgDepOpts = deprecationOptions(m.descriptor);
  if (msgDepOpts) {
    const msgFull = m.fullQualifiedName().replace(/^\./, '');
    lines.push(`    if (!__deprecatedWarned.has(${JSON.stringify(msgFull)})) {`);
    lines.push(`      __deprecatedWarned.add(${JSON.stringify(msgFull)});`);
    lines.push(
      `      deprecatedWarn(${JSON.stringify(msgDepOpts?.description || '')}, "message", ${JSON.stringify(msgFull)}, ${JSON.stringify(msgDepOpts?.effectiveAt || undefined)});`,
    );
    lines.push('    }');
  }
  // Field-level deprecation checks: warn once per deprecated field when encoder runs and the
  // field appears to be set (mirrors the checks used when writing the field).
  for (const f of nonOneofFields) {
    const fldDep = deprecationOptions(f.descriptor);
    if (!fldDep) continue;
    const name = f.tsName;
    const check = (() => {
      if (f.isMap()) return `(Object.keys(message.${name} ?? {}).length !== 0)`;
      if (f.isRepeated()) return `(message.${name}?.length ?? 0) !== 0`;
      if (wktFqnOf(f) || f.isMessage()) return `message.${name} !== undefined`;
      if (f.tracksPresence()) return `message.${name} !== undefined`;
      if (f.isEnum()) {
        return `((message.${name} ?? ${defaultValueFor(f)}) !== ${defaultValueFor(f)})`;
      }
      if (is64Bit(f)) return `(message.${name} !== undefined && !message.${name}.isZero?.())`;
      if (f.typeCode() === 9) return `message.${name} !== ""`;
      if (f.typeCode() === 12) return `(message.${name}?.length ?? 0) !== 0`;
      if (f.typeCode() === 8) return `message.${name} === true`;
      return `((message.${name} ?? 0) !== 0)`;
    })();
    const msgFull = m.fullQualifiedName().replace(/^\./, '');
    const fieldProto = f.pb_name;
    lines.push(`    if (${check}) {`);
    lines.push(
      `      if (!__deprecatedWarned.has(${JSON.stringify(msgFull + '.' + fieldProto)})) {`,
    );
    lines.push(`        __deprecatedWarned.add(${JSON.stringify(msgFull + '.' + fieldProto)});`);
    lines.push(
      `        deprecatedWarn(${JSON.stringify(fldDep?.description || '')}, "field", ${JSON.stringify(msgFull + '.' + fieldProto)}, ${JSON.stringify(fldDep?.effectiveAt || undefined)});`,
    );
    lines.push('      }');
    lines.push('    }');
  }
  // Oneof fields deprecation checks
  for (const o of m.oneofs) {
    for (const f of o.fields) {
      const fldDep = deprecationOptions(f.descriptor);
      if (!fldDep) continue;
      const prop = o.tsName;
      const caseName = f.tsName;
      const msgFull = m.fullQualifiedName().replace(/^\./, '');
      const fieldProto = f.pb_name;
      lines.push(`    if (message.${prop}?.$case === ${JSON.stringify(caseName)}) {`);
      lines.push(
        `      if (!__deprecatedWarned.has(${JSON.stringify(msgFull + '.' + fieldProto)})) {`,
      );
      lines.push(`        __deprecatedWarned.add(${JSON.stringify(msgFull + '.' + fieldProto)});`);
      lines.push(
        `        deprecatedWarn(${JSON.stringify(fldDep?.description || '')}, "field", ${JSON.stringify(msgFull + '.' + fieldProto)}, ${JSON.stringify(fldDep?.effectiveAt || undefined)});`,
      );
      lines.push('      }');
      lines.push('    }');
    }
  }
  for (const f of nonOneofFields) {
    const name = f.tsName;
    const tag = tagFor(f);
    const wktName = wktFqnOf(f);
    if (f.isMap()) {
      const entry = f.message();
      const kf = entry?.fields.find((x) => x.descriptor.number === 1)!;
      const vf = entry?.fields.find((x) => x.descriptor.number === 2)!;
      const keyTag = (1 << 3) | wireTypeFor(kf);
      const valTag = (2 << 3) | wireTypeFor(vf);
      let keyConv = 'k';
      if (kf.typeCode() === 8 /* bool */) keyConv = 'k === "true"';
      else if (is64Bit(kf)) {
        /* string */
      } else if (kf.typeCode() !== 9 /* string */) keyConv = 'Number(k)';
      let valConv = 'v';
      if (is64Bit(vf)) valConv = 'v.toString()';
      let valWrite = `w.uint32(${valTag}).${writerMethodFor(vf)}(${valConv})`;
      if (vf.isMessage()) {
        if (wktFqnOf(vf)) {
          valWrite = `(() => {
        const w2 = writer.uint32(${valTag}).fork();
        wkt["${wktFqnOf(vf)}"].writeMessage(w2, v);
        w2.join();
      })()`;
        } else {
          valWrite = `(() => {
        const w2 = writer.uint32(${valTag}).fork();
        ${vf.message()!.tsName}.encode(v, w2);
        w2.join();
      })()`;
        }
      } else if (vf.isEnum()) {
        valWrite = `${vf.enum()!.tsName}.encodeField(w, ${valTag >>> 3}, v)`;
      }
      lines.push(
        `    for (const [k, v] of Object.entries(message.${name} ?? {})) {
      const w = writer.uint32(${tag}).fork();
      w.uint32(${keyTag}).${writerMethodFor(kf)}(${keyConv});
      ${valWrite};
      w.join();
    }`,
      );
      continue;
    }
    if (f.isRepeated()) {
      if (isPackableScalar(f)) {
        // For packed repeated scalars/enums, the outer tag must be length-delimited (wire type = 2)
        const packedTag = (f.descriptor.number! << 3) | 2;
        if (f.isEnum()) {
          lines.push(`    if (message.${name}?.length) {
      const w = writer.uint32(${packedTag}).fork();
      for (const v of message.${name}) w.int32(v?.code | 0);
      w.join();
    }`);
        } else {
          let vConvert = 'v';
          if (is64Bit(f)) vConvert = `${vConvert}.toString()`;
          lines.push(`    if (message.${name}?.length) {
      const w = writer.uint32(${packedTag}).fork();
      for (const v of message.${name}) w.${writerMethodFor(f)}(${vConvert});
      w.join();
    }`);
        }
      } else if (wktName) {
        lines.push(
          `    for (const v of (message.${name} ?? [])) {
      const w = writer.uint32(${tag}).fork();
      wkt["${wktName}"].writeMessage(w, v);
      w.join();
    }`,
        );
      } else if (f.isMessage()) {
        const ref = f.message()?.tsName;
        if (ref) {
          lines.push(`    for (const v of (message.${name} ?? [])) {
      const w = writer.uint32(${tag}).fork();
      ${ref}.encode(v, w);
      w.join();
    }`);
        } else {
          // string
          lines.push(`    for (const v of message.${name}) {
      writer.uint32(${tag}).${writerMethodFor(f)}(v);
    }`);
        }
      } else if (f.isEnum()) {
        lines.push(`    for (const v of (message.${name} ?? [])) {
      ${f.enum()!.tsName}.encodeField(writer, ${tag >>> 3}, v);
    }`);
      } else {
        lines.push(`    for (const v of (message.${name} ?? [])) {
      writer.uint32(${tag}).${writerMethodFor(f)}(v);
    }`);
      }
      continue;
    }
    if (wktName) {
      lines.push(
        `    if (message.${name} !== undefined) {
      const w = writer.uint32(${tag}).fork();
      wkt["${wktName}"].writeMessage(w, message.${name});
      w.join();
    }`,
      );
      continue;
    }
    if (f.isMessage()) {
      const ref = f.message()?.tsName;
      if (ref) {
        lines.push(`    if (message.${name} !== undefined) {
      const w = writer.uint32(${tag}).fork();
      ${ref}.encode(message.${name}, w);
      w.join();
    }`);
      }
      continue;
    }
    if (f.tracksPresence()) {
      if (f.isEnum()) {
        lines.push(`    if (message.${name} !== undefined) {
      ${f.enum()!.tsName}.encodeField(writer, ${tag >>> 3}, message.${name});
    }`);
      } else {
        let longToString = '';
        if (is64Bit(f)) {
          longToString = '.toString()';
        }
        lines.push(`    if (message.${name} !== undefined) {
      writer.uint32(${tag}).${writerMethodFor(f)}(message.${name}${longToString});
    }`);
      }
    } else if (f.isEnum()) {
      const def = defaultValueFor(f);
      lines.push(`    if ((message.${name} ?? ${def}) !== ${def}) {
      ${f.enum()!.tsName}.encodeField(writer, ${tag >>> 3}, message.${name});
    }`);
    } else if (is64Bit(f)) {
      lines.push(`    if (message.${name} !== undefined && !message.${name}.isZero?.()) {
      writer.uint32(${tag}).${writerMethodFor(f)}(message.${name}.toString());
    }`);
    } else if (f.typeCode() === 9 /* string */) {
      lines.push(`    if (message.${name} !== "") {
      writer.uint32(${tag}).string(message.${name});
    }`);
    } else if (f.typeCode() === 12 /* bytes */) {
      lines.push(`    if ((message.${name}?.length ?? 0) !== 0) {
      writer.uint32(${tag}).bytes(message.${name});
    }`);
    } else if (f.typeCode() === 8 /* bool */) {
      lines.push(`    if (message.${name} === true) {
      writer.uint32(${tag}).bool(message.${name});
    }`);
    } else {
      lines.push(`    if ((message.${name} ?? 0) !== 0) {
      writer.uint32(${tag}).${writerMethodFor(f)}(message.${name});
    }`);
    }
  }
  for (const o of m.oneofs) {
    const prop = o.tsName;
    lines.push(`    if (message.${prop}?.$case === undefined) { /* noop */ }`);
    for (const f of o.fields) {
      const caseName = f.tsName;
      const tag = tagFor(f);
      const wktName = wktFqnOf(f);
      if (wktName) {
        lines.push(`    else if (message.${prop}?.$case === "${caseName}") {
      const w = writer.uint32(${tag}).fork();
      wkt["${wktName}"].writeMessage(w, message.${prop}.${caseName});
      w.join();
    }`);
      } else if (f.isMessage()) {
        const ref = f.message()?.tsName;
        if (ref) {
          lines.push(`    else if (message.${prop}?.$case === "${caseName}") {
      const w = writer.uint32(${tag}).fork();
      ${ref}.encode(message.${prop}.${caseName}, w);
      w.join();
    }`);
        }
      } else if (f.isEnum()) {
        lines.push(`    else if (message.${prop}?.$case === "${caseName}") {
      ${f.enum()!.tsName}.encodeField(writer, ${tag >>> 3}, message.${prop}.${caseName});
    }`);
      } else {
        let longToString = '';
        if (is64Bit(f)) {
          longToString = '.toString()';
        }
        lines.push(`    else if (message.${prop}?.$case === "${caseName}") {
      writer.uint32(${tag}).${writerMethodFor(f)}(message.${prop}.${caseName}${longToString});
    }`);
      }
    }
  }
  lines.push('    if (message[unknownFieldsSymbol]) {');
  lines.push('      writer.raw(message[unknownFieldsSymbol]);');
  lines.push('    }');
  if (m.tsName.endsWith('Options') && m.containingFile.package === 'google.protobuf') {
    lines.push('    // Encode registered extensions for *Options message');
    lines.push('    for (const ext of protoRegistry.listExtensions(message.$type)) {');
    lines.push('      ext.encode?.(message, writer);');
    lines.push('    }');
  }
  lines.push('    return writer;');
  lines.push('  },');
  return lines;
}
