import { Metadata } from '@grpc/grpc-js';

import { Mask } from './fieldmask';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof Buffer !== 'undefined' && typeof (Buffer as any).isBuffer === 'function' && (Buffer as any).isBuffer(v)) {
    return (v as Buffer).length === 0;
  }
  return false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPlainObject(o: any): o is Record<string, any> {
  return Object.prototype.toString.call(o) === '[object Object]';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rmFromObjectRecursive(resetMask: Mask, updObj: any, recursion: number): void {
  if (recursion >= RECURSION_TOO_DEEP) throw ErrRecursionTooDeep;
  recursion++;
  if (!updObj || typeof updObj !== 'object') return;

  for (const [key, value] of Object.entries(updObj)) {
    let fieldMask = resetMask.fieldParts.get(key) || new Mask();

    // If field is undefined/null => considered reset
    if (value === undefined || value === null) {
      resetMask.fieldParts.set(key, fieldMask);
      continue;
    }

    // Arrays (repeated fields)
    if (Array.isArray(value)) {
      if (value.length === 0) {
        resetMask.fieldParts.set(key, fieldMask);
      } else {
        // Add wildcard only if elements look like messages (objects)
        const hasObjectElement = value.some((el) => el && typeof el === 'object' && !Array.isArray(el));
        if (hasObjectElement) {
          const innerMask = fieldMask.any || new Mask();
          fieldMask.any = innerMask;
          resetMask.fieldParts.set(key, fieldMask);
          for (let i = 0; i < value.length; i++) {
            const el = value[i];
            if (el && typeof el === 'object' && !Array.isArray(el)) {
              rmFromObjectRecursive(innerMask, el, recursion);
            }
          }
        }
        // If it's a list of scalars, do not mark
      }
      continue;
    }

    // Byte arrays already handled in isDefaultScalar

    if (typeof value === 'object') {
      // Distinguish map-of-messages vs nested message using a heuristic:
      // - empty object => mark field (reset)
      // - if all values are plain objects => treat as map-of-messages using Any
      // - otherwise => nested message
      if (isPlainObject(value)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const entries = Object.entries(value as Record<string, any>);
        if (entries.length === 0) {
          resetMask.fieldParts.set(key, fieldMask);
        } else if (entries.every(([, v]) => v && typeof v === 'object' && !Array.isArray(v) && isPlainObject(v))) {
          const innerMask = fieldMask.any || new Mask();
          fieldMask.any = innerMask;
          resetMask.fieldParts.set(key, fieldMask);
          for (const [, v] of entries) {
            rmFromObjectRecursive(innerMask, v, recursion);
          }
        } else {
          // Not a map-of-messages; treat as nested message if plain-object, otherwise scalar-like
          rmFromObjectRecursive(fieldMask, value, recursion);
          // Only set if something was added under fieldMask
          if (!fieldMask.isEmpty()) {
            resetMask.fieldParts.set(key, fieldMask);
          }
        }
      } else {
        // Non-plain objects: if default-like, mark; else leave unmarked
        if (isDefaultScalar(value)) {
          resetMask.fieldParts.set(key, fieldMask);
        }
      }
      continue;
    }

    // Scalars: include if equal to default value
    if (isDefaultScalar(value)) {
      resetMask.fieldParts.set(key, fieldMask);
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
