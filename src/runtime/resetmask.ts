import { Metadata } from '@grpc/grpc-js';

import { Mask } from './fieldmask.js';
import { type MessageDescriptor, messageDescriptorSymbol } from './protos/core.js';

export const ErrRecursionTooDeep = new Error('recursion too deep');
const RECURSION_TOO_DEEP = 1000;

// grpc-js requires lowercase header keys
export const RESET_MASK_HEADER = 'x-resetmask';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ensureResetMaskInMetadata(msg: any, metadata?: Metadata): Metadata {
  const md = metadata ?? new Metadata();
  const existing = md.get(RESET_MASK_HEADER);
  if (!existing || existing.length === 0) {
    const rm = resetMaskFromMessage(msg);
    if (rm) md.set(RESET_MASK_HEADER, rm.marshal());
  }
  return md;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDefaultScalar(v: any): boolean {
  if (v === null || v === undefined) return true;
  switch (typeof v) {
    case 'string':
      return v === '';
    case 'number':
      return v === 0;
    case 'boolean':
      return v === false;
    case 'bigint':
      return v === 0n;
    default:
      break;
  }
  if (v instanceof Uint8Array) return v.length === 0;
  if (
    typeof Buffer !== 'undefined' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (Buffer as any).isBuffer === 'function' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Buffer as any).isBuffer(v)
  ) {
    return (v as Buffer).length === 0;
  }
  return false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPlainObject(o: any): o is Record<string, any> {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function descriptorForObject(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updObj: any,
  fallback?: MessageDescriptor,
): MessageDescriptor | undefined {
  if (!updObj || typeof updObj !== 'object') return fallback;
  return (
    (updObj as { [messageDescriptorSymbol]?: MessageDescriptor })[messageDescriptorSymbol] ??
    fallback
  );
}

function rmFromValueRecursive(
  resetMask: Mask,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updObj: any,
  recursion: number,
  descriptor?: MessageDescriptor,
): boolean {
  const reflected = descriptor?.reflect?.(updObj);
  if (reflected !== undefined) {
    rmFromObjectRecursive(resetMask, reflected, recursion, descriptor);
    return true;
  }
  if (!updObj || typeof updObj !== 'object') return false;
  rmFromObjectRecursive(resetMask, updObj, recursion, descriptor);
  return true;
}

function rmFromObjectRecursive(
  resetMask: Mask,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updObj: any,
  recursion: number,
  descriptor?: MessageDescriptor,
): void {
  if (recursion >= RECURSION_TOO_DEEP) throw ErrRecursionTooDeep;
  recursion++;
  if (!updObj || typeof updObj !== 'object') return;
  descriptor = descriptorForObject(updObj, descriptor);

  for (const [key, value] of Object.entries(updObj)) {
    const fieldDescriptor = descriptor?.fields[key];
    const maskKey = fieldDescriptor?.pbName ?? key;
    const fieldMask = resetMask.fieldParts.get(maskKey) || new Mask();
    const messageDescriptor = fieldDescriptor?.message?.();

    // Missing values reset the field. Null message values may still be reflected
    // by descriptor adapters, for example google.protobuf.Value => null_value.
    if (value === undefined || value === null) {
      if (
        value === null &&
        messageDescriptor &&
        fieldDescriptor?.repeated !== true &&
        rmFromValueRecursive(fieldMask, value, recursion, messageDescriptor)
      ) {
        if (!fieldMask.isEmpty()) {
          resetMask.fieldParts.set(maskKey, fieldMask);
        }
        continue;
      }
      resetMask.fieldParts.set(maskKey, fieldMask);
      continue;
    }

    if (
      messageDescriptor &&
      fieldDescriptor?.repeated !== true &&
      (!Array.isArray(value) || messageDescriptor.reflect) &&
      rmFromValueRecursive(fieldMask, value, recursion, messageDescriptor)
    ) {
      if (!fieldMask.isEmpty()) {
        resetMask.fieldParts.set(maskKey, fieldMask);
      }
      continue;
    }

    // Arrays are repeated fields only when descriptor metadata says so.
    // Untyped inputs keep the object-element heuristic.
    if (Array.isArray(value)) {
      if (fieldDescriptor && fieldDescriptor.repeated !== true) {
        continue;
      }
      const repeatedMessageDescriptor =
        fieldDescriptor?.repeated === true ? messageDescriptor : undefined;
      if (value.length === 0) {
        resetMask.fieldParts.set(maskKey, fieldMask);
      } else {
        // Add wildcard for repeated messages, or for untyped arrays whose
        // elements look like messages.
        const hasObjectElement = value.some(
          (el) => el && typeof el === 'object' && !Array.isArray(el),
        );
        if (repeatedMessageDescriptor || hasObjectElement) {
          const innerMask = fieldMask.any || new Mask();
          fieldMask.any = innerMask;
          resetMask.fieldParts.set(maskKey, fieldMask);
          for (let i = 0; i < value.length; i++) {
            const el = value[i];
            if (repeatedMessageDescriptor) {
              rmFromValueRecursive(innerMask, el, recursion, repeatedMessageDescriptor);
            } else if (el && typeof el === 'object' && !Array.isArray(el)) {
              rmFromObjectRecursive(innerMask, el, recursion);
            }
          }
        }
        // Non-empty scalar arrays are not resets.
      }
      continue;
    }

    // Byte arrays already handled in isDefaultScalar

    if (typeof value === 'object') {
      const messageDescriptor = descriptorForObject(value, fieldDescriptor?.message?.());
      const mapValueDescriptor = fieldDescriptor?.mapValue?.();

      // Prefer descriptor metadata for maps/messages. Without descriptors,
      // fall back to the old plain-object heuristic:
      // - empty object => mark field (reset)
      // - all values plain objects => treat as map of messages
      // - otherwise => nested object
      if (isPlainObject(value)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const entries = Object.entries(value as Record<string, any>);
        if (entries.length === 0) {
          resetMask.fieldParts.set(maskKey, fieldMask);
        } else if (mapValueDescriptor) {
          const innerMask = fieldMask.any || new Mask();
          fieldMask.any = innerMask;
          resetMask.fieldParts.set(maskKey, fieldMask);
          for (const [, v] of entries) {
            rmFromValueRecursive(innerMask, v, recursion, mapValueDescriptor);
          }
        } else if (messageDescriptor) {
          rmFromObjectRecursive(fieldMask, value, recursion, messageDescriptor);
          if (!fieldMask.isEmpty()) {
            resetMask.fieldParts.set(maskKey, fieldMask);
          }
        } else if (
          entries.every(
            ([, v]) => v && typeof v === 'object' && !Array.isArray(v) && isPlainObject(v),
          )
        ) {
          const innerMask = fieldMask.any || new Mask();
          fieldMask.any = innerMask;
          resetMask.fieldParts.set(maskKey, fieldMask);
          for (const [, v] of entries) {
            rmFromObjectRecursive(innerMask, v, recursion);
          }
        } else {
          // Not a map of messages; recurse as a nested plain object.
          rmFromObjectRecursive(fieldMask, value, recursion);
          // Only set if something was added under fieldMask
          if (!fieldMask.isEmpty()) {
            resetMask.fieldParts.set(maskKey, fieldMask);
          }
        }
      } else {
        // Non-plain objects: if default-like, mark; else leave unmarked
        if (isDefaultScalar(value)) {
          resetMask.fieldParts.set(maskKey, fieldMask);
        }
      }
      continue;
    }

    // Scalars: include if equal to default value
    if (isDefaultScalar(value)) {
      resetMask.fieldParts.set(maskKey, fieldMask);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resetMaskFromMessage(update: any): Mask | null {
  if (update == null) return null;
  const ret = new Mask();
  rmFromObjectRecursive(ret, update, 0);
  return ret;
}
