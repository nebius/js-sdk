import type { Message as TSDescriptorMessage } from '../../descriptors';
import { is64Bit, readerMethodFor, wireTypeFor, wktFqnOf } from '../helpers';

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
            ${caseName}: wkt["${wktName}"].readMessage(reader, len)
          };
          continue;
        }`,
        );
      } else if (f.isMessage()) {
        const ref = f.message()?.tsName;
        if (ref) {
          const expectedTag = (fieldNo << 3) | 2;
          lines.push(
            `        case ${fieldNo}: {
          if (tag !== ${expectedTag}) break;
          message.${prop} = {
            $case: "${caseName}",
            ${caseName}: ${ref}.decode(reader, reader.uint32())
          };
          continue;
        }`,
          );
        } else {
          let reader = `reader.${readM}()`;
          if (is64Bit(f)) {
            reader = `Long.fromValue(${reader})`;
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
            ${caseName}: ${f.enum()!.tsName}.fromNumber(reader.${readM}())
          };
          continue;
        }`,
        );
      } else {
        let reader = `reader.${readM}()`;
        if (is64Bit(f)) {
          reader = `Long.fromValue(${reader})`;
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
