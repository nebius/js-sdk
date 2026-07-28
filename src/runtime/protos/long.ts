/**
 * Defines simple input forms accepted by helpers for protobuf 64-bit integers.
 *
 * Use a string when a value can exceed JavaScript's safe integer range.
 */
export type LongLike = string | number;
