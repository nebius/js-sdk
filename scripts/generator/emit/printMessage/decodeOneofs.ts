import { is64Bit, isUnsigned64, readerMethodFor, wireTypeFor, wktFqnOf } from '../helpers.js';
import { resolveEnumName, resolveMessageName } from '../typeNames.js';

import type { Message as TSDescriptorMessage } from '../../descriptors.js';

export function emitDecodeOneofs(m: TSDescriptorMessage): string[] {
  const lines: string[] = [];
  for (const o of m.oneofs) {
    const prop = o.tsName;
    for (const f of o.fields) {
      const caseName = f.tsName;
      const fieldNo = f.descriptor.number!;
      const readM = readerMethodFor(f);
      const wktName = wktFqnOf(f);
      if (wktName) {
        const expectedTag = (fieldNo << 3) | 2;
        lines.push(
          `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          const len = reader.uint32();
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: wkt["${wktName}"].readMessage(reader, len, message.${prop}?.$case === "${caseName}" ? message.${prop}.${caseName} : undefined)
          };
          continue;
        }`,
        );
      } else if (f.isMessage()) {
        const ref = resolveMessageName(f.message());
        if (ref) {
          const expectedTag = (fieldNo << 3) | 2;
          lines.push(
            `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${ref}.decode(reader, reader.uint32(), message.${prop}?.$case === "${caseName}" ? message.${prop}.${caseName} : undefined)
          };
          continue;
        }`,
          );
        } else {
          let reader = `reader.${readM}()`;
          if (is64Bit(f)) {
            reader = `Long.fromValue(${reader}, ${isUnsigned64(f)})`;
          }
          const expectedTag = (fieldNo << 3) | wireTypeFor(f);
          lines.push(
            `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${reader}
          };
          continue;
        }`,
          );
        }
      } else if (f.isEnum()) {
        const expectedTag = (fieldNo << 3) | wireTypeFor(f);
        lines.push(
          `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${resolveEnumName(f.enum())}.fromNumber(reader.${readM}())
          };
          continue;
        }`,
        );
      } else {
        let reader = `reader.${readM}()`;
        if (is64Bit(f)) {
          reader = `Long.fromValue(${reader}, ${isUnsigned64(f)})`;
        }
        const expectedTag = (fieldNo << 3) | wireTypeFor(f);
        lines.push(
          `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${reader}
          };
          continue;
        }`,
        );
      }
    }
  }
  return lines;
}
