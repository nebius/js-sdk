import type { Field as TSDescriptorField } from '../descriptors';

import {
  defaultValueFor,
  is64Bit,
  isPackableScalar,
  jsonScalarConverter,
  readerMethodFor,
  tagFor,
  wireTypeFor,
  WKT_TYPE_MAP,
  wktFqnOf,
  writerMethodFor,
} from './helpers';
import { resolveEnumName, resolveMessageName } from './typeNames';

/**
 * Emit extension registrations (and any needed module augmentations) for a set of extension fields.
 * Logic mirrors message encode/decode helpers, reusing shared helpers instead of large switch blocks.
 */
export function printExtensions(
  extensions: TSDescriptorField[] | undefined,
  pkg: string,
  dir: string,
  augmentationImported: Set<string>,
): string[] {
  if (!extensions?.length) return [];
  const lines: string[] = [];
  for (const ext of extensions) {
    if (!ext.isExtension()) continue;
    const extendee = (ext.extendeeTypeNameNormalized() || '').replace(/^\./, '');
    if (!extendee) continue;
    const fieldNo = ext.descriptor.number ?? 0;
    const kind: string = ext.isMessage()
      ? ext.isRepeated()
        ? 'repeated_message'
        : 'message'
      : ext.isEnum()
        ? ext.isRepeated()
          ? 'repeated_enum'
          : 'enum'
        : ext.isRepeated()
          ? 'repeated_scalar'
          : 'scalar';
    const scalarCode = !ext.isMessage() && !ext.isEnum() ? ext.typeCode() || 0 : undefined;
    // Unified enum/message resolution: prefer descriptor helpers for local TS symbol names.
    const enumDesc = ext.isEnum() ? ext.enum() : undefined;
    const msgDesc = ext.isMessage() ? ext.message() : undefined;
    const enumProtoType = enumDesc ? enumDesc.fullQualifiedName().replace(/^\./, '') : undefined;
    const msgProtoType = msgDesc ? msgDesc.fullQualifiedName().replace(/^\./, '') : undefined;
    const enumTsName = resolveEnumName(enumDesc); // e.g. MyEnum
    const msgTsName = resolveMessageName(msgDesc); // e.g. MyMessage
    const wktName = ext.isMessage() ? wktFqnOf(ext as TSDescriptorField) : undefined;
    const fullName = ext.extensionRegistryFullName();
    const prop = ext.tsName; // already camel-cased
    const jsonName = ext.jsonName;
    const tagExpr = tagFor(ext);

    // Build encode lines
    const encodeLines: string[] = [];
    if (ext.isRepeated()) {
      encodeLines.push(`for (const v of message.${prop} ?? []) {`);
    } else {
      encodeLines.push(`const v = message.${prop};`);
      encodeLines.push('if (v !== undefined) {');
    }
    if (ext.isMessage()) {
      if (wktName) {
        encodeLines.push(`  const w2 = writer.uint32(${tagExpr}).fork();`);
        encodeLines.push(`  wkt["${wktName}"].writeMessage(w2, v);`);
        encodeLines.push('  w2.join();');
      } else if (msgTsName) {
        encodeLines.push(`  const w2 = writer.uint32(${tagExpr}).fork();`);
        encodeLines.push(`  ${msgTsName}.encode(v, w2);`);
        encodeLines.push('  w2.join();');
      } else {
        encodeLines.push(`  writer.uint32(${tagExpr}).bytes(v);`);
      }
    } else if (ext.isEnum()) {
      if (enumTsName) {
        encodeLines.push(`  ${enumTsName}?.encodeField(writer, ${fieldNo}, v);`);
      } else {
        encodeLines.push(`  writer.uint32(${tagExpr}).int32(v?.code ?? 0);`);
      }
    } else if (scalarCode !== undefined) {
      const method = writerMethodFor(ext);
      const valExpr = is64Bit(ext) ? 'v.toString()' : 'v';
      encodeLines.push(`  writer.uint32(${tagExpr}).${method}(${valExpr});`);
    }
    if (ext.isRepeated()) {
      encodeLines.push('}');
    } else {
      encodeLines.push('}');
    }

    // Build decode lines
    const decodeLines: string[] = [];
    decodeLines.push('const fn = tag >>> 3;');
    decodeLines.push('const wt = tag & 7;');
    decodeLines.push(`if (fn !== ${fieldNo}) return false;`);
    const expectedWire = wireTypeFor(ext);
    if (ext.isRepeated() && (ext.isEnum() || isPackableScalar(ext))) {
      if (ext.isEnum()) {
        const enumRead = enumTsName
          ? `${enumTsName}.fromNumber(reader.int32())`
          : '{ code: reader.int32(), name: "" }';
        decodeLines.push('if (wt === 2) {');
        decodeLines.push('  const len = reader.uint32();');
        decodeLines.push('  const end2 = reader.pos + len;');
        decodeLines.push(
          `  while (reader.pos < end2) { (message.${prop} ??= []).push(${enumRead}); }`,
        );
        decodeLines.push('  return true;');
        decodeLines.push('}');
        decodeLines.push('if (wt === 0) {');
        decodeLines.push(`  (message.${prop} ??= []).push(${enumRead});`);
        decodeLines.push('  return true;');
        decodeLines.push('}');
        decodeLines.push('return false;');
      } else {
        const method = readerMethodFor(ext);
        let readExpr = `reader.${method}()`;
        if (is64Bit(ext)) readExpr = `Long.fromValue(${readExpr})`;
        const singleWt = wireTypeFor(ext);
        decodeLines.push('if (wt === 2) {');
        decodeLines.push('  const len = reader.uint32();');
        decodeLines.push('  const end2 = reader.pos + len;');
        decodeLines.push(
          `  while (reader.pos < end2) { (message.${prop} ??= []).push(${readExpr}); }`,
        );
        decodeLines.push('  return true;');
        decodeLines.push('}');
        decodeLines.push(`if (wt === ${singleWt}) {`);
        decodeLines.push(`  (message.${prop} ??= []).push(${readExpr});`);
        decodeLines.push('  return true;');
        decodeLines.push('}');
        decodeLines.push('return false;');
      }
    } else if (ext.isRepeated()) {
      const exp =
        ext.isMessage() || ext.typeCode() === 9 || ext.typeCode() === 12 ? 2 : expectedWire;
      decodeLines.push(`if (wt !== ${exp}) return false;`);
      // decode one value
      if (ext.isMessage()) {
        if (wktName) {
          decodeLines.push('const len = reader.uint32();');
          decodeLines.push(
            `(message.${prop} ??= []).push(wkt["${wktName}"].readMessage(reader, len));`,
          );
        } else if (msgTsName) {
          decodeLines.push(
            `(message.${prop} ??= []).push(${msgTsName}.decode(reader, reader.uint32()));`,
          );
        } else {
          decodeLines.push(`(message.${prop} ??= []).push(reader.bytes(reader.uint32()));`);
        }
      } else if (ext.isEnum()) {
        const enumRead = enumTsName
          ? `${enumTsName}.fromNumber(reader.int32())`
          : '{ code: reader.int32(), name: "" }';
        decodeLines.push(`(message.${prop} ??= []).push(${enumRead});`);
      } else {
        const method = readerMethodFor(ext);
        let readExpr = `reader.${method}()`;
        if (is64Bit(ext)) readExpr = `Long.fromValue(${readExpr})`;
        decodeLines.push(`(message.${prop} ??= []).push(${readExpr});`);
      }
      decodeLines.push('return true;');
    } else {
      // singular
      if (ext.isMessage() || ext.typeCode() === 9 || ext.typeCode() === 12) {
        decodeLines.push('if (wt !== 2) return false;');
        if (ext.isMessage()) {
          if (wktName) {
            decodeLines.push('const len = reader.uint32();');
            decodeLines.push(`message.${prop} = wkt["${wktName}"].readMessage(reader, len);`);
          } else if (msgTsName) {
            decodeLines.push(`message.${prop} = ${msgTsName}.decode(reader, reader.uint32());`);
          } else {
            decodeLines.push(
              'message.${prop} = reader.bytes(reader.uint32());'.replace('${prop}', prop),
            );
          }
        } else if (ext.typeCode() === 9) {
          decodeLines.push(`message.${prop} = reader.string();`);
        } else if (ext.typeCode() === 12) {
          decodeLines.push(`message.${prop} = reader.bytes();`);
        }
        decodeLines.push('return true;');
      } else if (ext.isEnum()) {
        const enumRead = enumTsName
          ? `${enumTsName}.fromNumber(reader.int32())`
          : '{ code: reader.int32(), name: "" }';
        decodeLines.push('if (wt !== 0) return false;');
        decodeLines.push(`message.${prop} = ${enumRead};`);
        decodeLines.push('return true;');
      } else {
        decodeLines.push(`if (wt !== ${expectedWire}) return false;`);
        const method = readerMethodFor(ext);
        let readExpr = `reader.${method}()`;
        if (is64Bit(ext)) readExpr = `Long.fromValue(${readExpr})`;
        decodeLines.push(`message.${prop} = ${readExpr};`);
        decodeLines.push('return true;');
      }
    }

    // Build fromJSON lines
    const fromJsonLines: string[] = [];
    fromJsonLines.push(`const _v = object?.${jsonName} ?? object?.${ext.pb_name};`);
    fromJsonLines.push('if (_v === undefined || _v === null) return;');
    if (ext.isRepeated()) {
      let conv = 'e as any';
      if (ext.isMessage()) {
        if (wktName) conv = `wkt["${wktName}"].fromJSON(e)`;
        else if (msgTsName) conv = `${msgTsName}.fromJSON(e)`;
      } else if (ext.isEnum()) {
        if (enumTsName) conv = `${enumTsName}.fromJSON(e)`;
        else conv = 'Number(e)';
      } else if (is64Bit(ext)) conv = 'Long.fromValue(e)';
      else if (ext.typeCode() === 12) conv = 'bytesFromBase64(e)';
      else conv = `${jsonScalarConverter(ext)}(e)`;
      fromJsonLines.push('if (globalThis.Array.isArray(_v)) {');
      fromJsonLines.push(`  message.${prop} = _v.map((e: any) => ${conv});`);
      fromJsonLines.push('}');
    } else if (ext.isMessage()) {
      if (wktName) fromJsonLines.push(`message.${prop} = wkt["${wktName}"].fromJSON(_v);`);
      else if (msgTsName) fromJsonLines.push(`message.${prop} = ${msgTsName}.fromJSON(_v);`);
      else fromJsonLines.push(`message.${prop} = _v; // raw bytes fallback`);
    } else if (ext.isEnum()) {
      if (enumTsName) fromJsonLines.push(`message.${prop} = ${enumTsName}.fromJSON(_v);`);
      else fromJsonLines.push(`message.${prop} = { code: Number(_v) || 0, name: String(_v) };`);
    } else if (is64Bit(ext)) {
      fromJsonLines.push(`message.${prop} = Long.fromValue(_v);`);
    } else if (ext.typeCode() === 12) {
      fromJsonLines.push(`message.${prop} = bytesFromBase64(_v);`);
    } else {
      const conv = jsonScalarConverter(ext);
      if (ext.tracksPresence()) fromJsonLines.push(`message.${prop} = ${conv}(_v);`);
      else fromJsonLines.push(`message.${prop} = ${conv}(_v ?? ${defaultValueFor(ext)});`);
    }

    // Build toJSON lines
    const toJsonLines: string[] = [];
    toJsonLines.push(`const _val = message.${prop};`);
    const pickExpr = `(use === "json" ? "${jsonName}" : "${ext.pb_name}")`;
    if (ext.isRepeated()) {
      let conv = 'e';
      if (ext.isMessage()) {
        if (wktName) conv = `wkt["${wktName}"].toJSON(e, use)`;
        else if (msgTsName) conv = `${msgTsName}.toJSON(e, use)`;
      } else if (ext.isEnum()) {
        if (enumTsName) conv = `${enumTsName}.toJSON(e)`;
        else conv = 'e?.code ?? 0';
      } else if (is64Bit(ext)) conv = '(e||Long.ZERO).toString()';
      else if (ext.typeCode() === 12) conv = 'base64FromBytes(e)';
      toJsonLines.push(`if (_val?.length) { obj[${pickExpr}] = _val.map((e: any) => ${conv}); }`);
    } else if (ext.isMessage()) {
      if (wktName) {
        toJsonLines.push(
          `if (_val !== undefined) obj[${pickExpr}] = wkt["${wktName}"].toJSON(_val, use);`,
        );
      } else if (msgTsName) {
        toJsonLines.push(
          `if (_val !== undefined) obj[${pickExpr}] = ${msgTsName}.toJSON(_val, use);`,
        );
      } else toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = _val;`);
    } else if (ext.isEnum()) {
      if (enumTsName) {
        toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = ${enumTsName}.toJSON(_val);`);
      } else toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = _val.code;`);
    } else if (is64Bit(ext)) {
      if (ext.tracksPresence()) {
        toJsonLines.push(
          `if (_val !== undefined) obj[${pickExpr}] = (_val||Long.ZERO).toString();`,
        );
      } else {
        toJsonLines.push(`if (!_val?.isZero?.()) obj[${pickExpr}] = (_val||Long.ZERO).toString();`);
      }
    } else if (ext.typeCode() === 12) {
      if (ext.tracksPresence()) {
        toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = base64FromBytes(_val);`);
      } else {
        toJsonLines.push(`if ((_val?.length ?? 0)!==0) obj[${pickExpr}] = base64FromBytes(_val);`);
      }
    } else if (ext.typeCode() === 9) {
      if (ext.tracksPresence()) {
        toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = _val;`);
      } else toJsonLines.push(`if ((_val ?? "") !== "") obj[${pickExpr}] = _val;`);
    } else if (ext.typeCode() === 8) {
      if (ext.tracksPresence()) {
        toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = _val;`);
      } else toJsonLines.push(`if (_val === true) obj[${pickExpr}] = _val;`);
    } else {
      if (ext.tracksPresence()) {
        toJsonLines.push(`if (_val !== undefined) obj[${pickExpr}] = _val;`);
      } else toJsonLines.push(`if ((_val ?? 0) !== 0) obj[${pickExpr}] = _val;`);
    }

    // Emit assembled block
    lines.push('protoRegistry.registerExtension({');
    lines.push(`  extendee: "${extendee}",`);
    lines.push(`  fullName: "${fullName}",`);
    lines.push(`  fieldNo: ${fieldNo},`);
    lines.push(`  name: "${ext.pb_name}",`);
    lines.push(`  kind: "${kind}",`);
    if (scalarCode !== undefined) lines.push(`  scalarType: ${scalarCode},`);
    if (enumProtoType) lines.push(`  enumType: "${enumProtoType}",`);
    if (msgProtoType && !wktName) lines.push(`  messageType: "${msgProtoType}",`);
    lines.push('  encode(message, writer) {');
    for (const l of encodeLines) lines.push('    ' + l);
    lines.push('  },');
    lines.push('  decode(message, reader, tag) {');
    for (const l of decodeLines) lines.push('    ' + l);
    lines.push('  },');
    lines.push('  fromJSON(message, object) {');
    for (const l of fromJsonLines) lines.push('    ' + l);
    lines.push('  },');
    lines.push('  toJSON(message, obj, use) {');
    for (const l of toJsonLines) lines.push('    ' + l);
    lines.push('  }');
    lines.push('});\n');

    // Module augmentation for *Options extendee
    if (/Options$/.test(extendee.split('.').pop() || '')) {
      let modPath: string;
      if (extendee.startsWith('google.protobuf.')) {
        const rel = require('path').posix.relative(dir || '.', 'google/protobuf');
        modPath = (rel ? (rel.startsWith('.') ? rel : `./${rel}`) : './google/protobuf') + '/index';
      } else {
        modPath = './index';
      }
      if (!augmentationImported.has(modPath)) {
        lines.push(`import "${modPath}"; // ensure module exists for augmentation`);
        augmentationImported.add(modPath);
      }
      const iface = extendee.split('.').pop();
      const tsType = wktName
        ? WKT_TYPE_MAP[wktName]
        : msgTsName
          ? msgTsName
          : enumTsName
            ? enumTsName
            : 'any';
      const optionalType = ext.isRepeated() ? `${tsType}[]` : tsType;
      lines.push(`declare module '${modPath}' {`);
      lines.push(`  interface ${iface} {
    ${prop}?: ${optionalType};
  }`);
      lines.push('}\n');
    }
  }
  return lines;
}
