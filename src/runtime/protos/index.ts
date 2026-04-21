// Runtime protos public API (barrel)
export { BinaryReader, BinaryWriter, dayjs, isSet, Long, unknownFieldsSymbol } from './core.js';
export type { Builtin, Dayjs, DeepPartial, Duration, MessageFns } from './core.js';

export { base64FromBytes, bytesFromBase64 } from './base64.js';

export { Empty, wkt } from './wkt.js';
export type { WktRegistry } from './wkt.js';

export { createEnum, ENUM_VALUE_META } from './enum.js';
export type { EnumClass, EnumInstance, EnumValueMeta } from './enum.js';
