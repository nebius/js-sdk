/**
 * Re-exports the main protobuf runtime API used by generated Nebius SDK code.
 *
 * Application code normally imports generated message and enum exports. Use
 * this module when code needs wire readers or writers, runtime descriptors,
 * well-known-type codecs, enum factories, or preserved unknown fields.
 *
 * More specialized low-level helpers remain available from their direct
 * `runtime/protos/*` modules.
 *
 * @packageDocumentation
 */

export {
  attachMessageDescriptor,
  BinaryReader,
  BinaryWriter,
  dayjs,
  isSet,
  Long,
  messageDescriptorSymbol,
  unknownFieldsSymbol,
} from './core.js';
export type {
  Builtin,
  Dayjs,
  DeepPartial,
  Duration,
  MessageDescriptor,
  MessageFieldDescriptor,
  MessageFieldScalarType,
  MessageFns,
} from './core.js';

export { base64FromBytes, bytesFromBase64 } from './base64.js';

export { Empty, wkt } from './wkt.js';
export type { WktRegistry } from './wkt.js';

export { createEnum, ENUM_VALUE_META } from './enum.js';
export type { EnumClass, EnumInstance, EnumValueMeta } from './enum.js';
