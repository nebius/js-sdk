import type { Message as TSDescriptorMessage } from '../../descriptors';
import {
  deprecationOptions,
  is64Bit,
  isPackableScalar,
  readerMethodFor,
  scalarOrRef,
  wireTypeFor,
  wktFqnOf,
} from '../helpers';

import { emitDecodeOneofs } from './decodeOneofs';

export function emitDecode(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  const nonOneofFields = m.fields.filter((f) => !f.is_in_oneof);
  lines.push(`  decode(input: BinaryReader | Uint8Array, length?: number): ${m.tsName} {`);
  lines.push('    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);');
  lines.push('    const end = length === undefined ? reader.len : reader.pos + length;');
  lines.push(`    const message = createBase${m.tsName}();`);
  lines.push('    let writer: BinaryWriter | undefined = undefined;');
  // Message-level deprecation warning (decoders warn for deprecated message types)
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
  if (m.tsName.endsWith('Options') && m.containingFile.package === 'google.protobuf') {
    const fullType = m.fullQualifiedName().replace(/^\./, '');
    lines.push(`    const _exts = protoRegistry.listExtensions("${fullType}");`);
    lines.push('    const _extMap: globalThis.Record<number, any> = {};');
    lines.push('    for (const _e of _exts) _extMap[_e.fieldNo] = _e;');
    const declaredNos = new Set<number>();
    for (const f of nonOneofFields) declaredNos.add(f.descriptor.number!);
    for (const o of m.oneofs) for (const f of o.fields) declaredNos.add(f.descriptor.number!);
    lines.push(
      `    const _declared: globalThis.Record<number, true> = { ${[...declaredNos].map((n) => `${n}: true`).join(', ')} };`,
    );
  }
  lines.push('    while (reader.pos < end) {');
  lines.push('      const tag = reader.uint32();');
  lines.push('      switch (tag >>> 3) {');
  // Field cases
  for (const f of nonOneofFields) {
    const name = f.tsName;
    const fieldNo = f.descriptor.number!;
    const readM = readerMethodFor(f);
    const wktName = wktFqnOf(f);
    if (f.isMap()) {
      const entry = f.message();
      const kf = entry?.fields.find((x) => x.descriptor.number === 1)!;
      const vf = entry?.fields.find((x) => x.descriptor.number === 2)!;
      const kRead = readerMethodFor(kf);
      const vIsWkt = wktFqnOf(vf);
      const keyTs = (() => {
        if (kf.typeCode() === 8 /* bool */) return 'boolean';
        if (is64Bit(kf)) return 'Long';
        if (kf.typeCode() === 9 /* string */) return 'string';
        return 'number';
      })();
      const valueTs = scalarOrRef(vf);
      const keyDefault = (() => {
        if (kf.typeCode() === 8 /* bool */) return 'false';
        if (is64Bit(kf)) return 'Long.ZERO';
        if (kf.typeCode() === 9 /* string */) return '""';
        return '0';
      })();
      let valueDecoder = `reader.${readerMethodFor(vf)}()`;
      if (vf.isMessage()) {
        if (vIsWkt) {
          valueDecoder = `wkt["${vIsWkt}"].readMessage(reader, reader.uint32())`;
        } else {
          valueDecoder = `${vf.message()!.tsName}.decode(reader, reader.uint32())`;
        }
      } else if (vf.isEnum()) {
        valueDecoder = `${vf.enum()!.tsName}.fromNumber(reader.${readerMethodFor(vf)}())`;
      } else if (is64Bit(vf)) {
        valueDecoder = `Long.fromValue(reader.${readerMethodFor(vf)}())`;
      }
      let stringKey = 'String(Number(key))';
      if (kf.typeCode() === 8) stringKey = 'String(Boolean(key))';
      if (is64Bit(kf)) stringKey = 'String(key)';
      if (kf.typeCode() === 9) stringKey = 'String(key)';
      let keyDecoder = `reader.${kRead}()`;
      if (is64Bit(kf)) {
        keyDecoder = `Long.fromValue(reader.${kRead}())`;
      }

      const expectedTag = (fieldNo << 3) | 2; // maps are length-delimited
      lines.push(
        `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break; // wire type guard
          const end2 = reader.uint32() + reader.pos;
          let key: ${keyTs} = ${keyDefault};
          let value: ${valueTs} | undefined = undefined;
          while (reader.pos < end2) {
            const tag2 = reader.uint32();
            switch (tag2 >>> 3) {
              case 1: {
                key = ${keyDecoder};
                continue;
              }
              case 2: {
                value = ${valueDecoder};
                continue;
              }
            }
            if ((tag2 & 7) === 4 || tag2 === 0) break;
            reader.skip(tag2 & 7);
          }
          if (value !== undefined) {
            const stringKey = ${stringKey};
            message.${name}[stringKey] = value;
          }
          continue;
        }`,
      );
      continue;
    }
    if (f.isRepeated()) {
      if (isPackableScalar(f)) {
        if (f.isEnum()) {
          lines.push(`        case ${fieldNo}: {
          // packed or unpacked repeated enum
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.${name}.push(${f.enum()!.tsName}.fromNumber(reader.${readM}()));
            }
            continue;
          } else if ((tag & 7) === 0) {
            message.${name}.push(${f.enum()!.tsName}.fromNumber(reader.${readM}()));
            continue;
          }
          break; // wrong wire type
        }`);
        } else {
          let reader = `reader.${readM}()`;
          if (is64Bit(f)) {
            reader = `Long.fromValue(${reader})`;
          }
          lines.push(`        case ${fieldNo}: {
          // packed or unpacked repeated scalar
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.${name}.push(${reader});
            }
            continue;
          } else if ((tag & 7) === 0 || (tag & 7) === 5 || (tag & 7) === 1) { // allow valid scalar wire types
            message.${name}.push(${reader});
            continue;
          }
          break; // wrong wire type
        }`);
        }
      } else if (wktName) {
        const expectedTag = (fieldNo << 3) | 2;
        lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          const len = reader.uint32();
          message.${name}.push(wkt["${wktName}"].readMessage(reader, len));
          continue;
        }`);
      } else if (f.isMessage()) {
        const ref = f.message()?.tsName;
        if (ref) {
          const expectedTag = (fieldNo << 3) | 2;
          lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name}.push(${ref}.decode(reader, reader.uint32()));
          continue;
        }`);
        } else {
          const expectedTag = (fieldNo << 3) | 2;
          lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name}.push(reader.${readM}());
          continue;
        }`);
        }
      } else if (f.isEnum()) {
        const expectedTag = (fieldNo << 3) | wireTypeFor(f);
        lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name}.push(${f.enum()!.tsName}.fromNumber(reader.${readM}()));
          continue;
        }`);
      } else {
        const expectedTag = (fieldNo << 3) | wireTypeFor(f);
        lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name}.push(reader.${readM}());
          continue;
        }`);
      }
      continue;
    }
    if (wktName) {
      const expectedTag = (fieldNo << 3) | 2;
      lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          const len = reader.uint32();
          message.${name} = wkt["${wktName}"].readMessage(reader, len);
          continue;
        }`);
      continue;
    }
    if (f.isMessage()) {
      const ref = f.message()?.tsName;
      if (ref) {
        const expectedTag = (fieldNo << 3) | 2;
        lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name} = ${ref}.decode(reader, reader.uint32());
          continue;
        }`);
      }
      continue;
    }
    if (f.isEnum()) {
      const expectedTag = (fieldNo << 3) | wireTypeFor(f);
      lines.push(`        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${name} = ${f.enum()!.tsName}.fromNumber(reader.${readM}());
          continue;
        }`);
    } else {
      let reader = `reader.${readM}()`;
      if (is64Bit(f)) {
        reader = `Long.fromValue(${reader})`;
      }
      const expectedTag = (fieldNo << 3) | wireTypeFor(f);
      lines.push(`        case ${fieldNo}: {
        if (tag !== ${expectedTag}) break;
        message.${name} = ${reader};
        continue;
      }`);
    }
  }
  lines.push(...emitDecodeOneofs(m));
  lines.push('        default:');
  lines.push('          break;');
  lines.push('      }');
  if (m.tsName.endsWith('Options') && m.containingFile.package === 'google.protobuf') {
    lines.push('      {');
    lines.push('        const _fn = tag >>> 3;');
    lines.push('        const _maybeExt = _extMap[_fn];');
    lines.push('        if (_maybeExt && !_declared[_fn]) {');
    lines.push(
      '          if (_maybeExt.decode && _maybeExt.decode(message as any, reader, tag)) {',
    );
    lines.push('            continue;');
    lines.push('          }');
    lines.push('        }');
    lines.push('      }');
  }
  lines.push('      if ((tag & 7) === 4 || tag === 0) {');
  lines.push('        break;');
  lines.push('      }');
  lines.push('      {');
  lines.push('        if (!writer) writer = new BinaryWriter();');
  lines.push('        const skipped = reader.skip(tag & 7, tag >>> 3);');
  lines.push('        writer.uint32(tag).raw(skipped);');
  lines.push('      }');
  lines.push('    }');
  lines.push('    if (writer) {');
  lines.push('      message[unknownFieldsSymbol] = writer.finish();');
  lines.push('    }');
  lines.push('    return message;');
  lines.push('  },');
  return lines;
}
