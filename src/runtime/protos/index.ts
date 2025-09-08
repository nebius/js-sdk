// Runtime protos public API (barrel)
export { BinaryReader, BinaryWriter, dayjs, isSet, Long, unknownFieldsSymbol } from './core';
export type { Builtin, Dayjs, DeepPartial, Duration, MessageFns } from './core';

export { base64FromBytes, bytesFromBase64 } from './base64';

export { wkt } from './wkt';
export type { WktRegistry } from './wkt';

export { createEnum, ENUM_VALUE_META } from './enum';
export type { EnumClass, EnumInstance, EnumValueMeta } from './enum';
