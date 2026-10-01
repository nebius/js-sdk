/**
 * Adds explicit select and reset masks to gRPC metadata.
 *
 * @packageDocumentation
 */

import { Metadata } from '@grpc/grpc-js';

import { Mask } from './fieldmask.js';

/** Contains the select-mask gRPC header name. */
export const SELECT_MASK_HEADER = 'x-selectmask';
/** Contains the reset-mask gRPC header name. */
export const RESET_MASK_HEADER = 'x-resetmask';

/** Adds an explicit mask without changing the supplied metadata. */
export function withMask(
  metadata: Metadata | undefined,
  header: string,
  mask: Mask | string,
): Metadata {
  const result = metadata?.clone() ?? new Metadata();
  result.add(header, typeof mask === 'string' ? Mask.parse(mask).marshal() : mask.marshal());
  return result;
}

/** Combines all mask values from a metadata header. */
export function maskFromMetadata(metadata: Metadata, header: string): Mask {
  const result = new Mask();
  for (const value of metadata.get(header)) result.merge(Mask.parse(String(value)));
  return result;
}

/** Adds an explicit select mask. */
export function withSelectMask(mask: Mask | string, metadata?: Metadata): Metadata {
  return withMask(metadata, SELECT_MASK_HEADER, mask);
}

/** Adds an explicit reset mask. */
export function withResetMask(mask: Mask | string, metadata?: Metadata): Metadata {
  return withMask(metadata, RESET_MASK_HEADER, mask);
}
