import type { UntypedServiceImplementation } from '@grpc/grpc-js';

/**
 * Keeps implemented RPCs type-checked while allowing grpc-js to provide its
 * default UNIMPLEMENTED handler for every omitted RPC.
 */
export function partialServiceImplementation<T extends UntypedServiceImplementation>(
  implementation: Partial<T>,
): UntypedServiceImplementation {
  return implementation as UntypedServiceImplementation;
}
