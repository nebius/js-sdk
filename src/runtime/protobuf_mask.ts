/**
 * Descriptor-based protobuf mask operations. Helpers return copies of messages.
 *
 * @packageDocumentation
 */

import { Mask } from './fieldmask.js';
import {
  dayjs,
  Long,
  type MessageDescriptor,
  messageDescriptorSymbol,
  type MessageFieldDescriptor,
  type MessageFns,
} from './protos/core.js';

import type { MaskConversionOptions } from './resetmask.js';

// Native JS values and oneof unions stay in their generated representation.
type ObjectValue = Record<string, unknown>;
interface Field {
  key: string;
  descriptor: MessageFieldDescriptor;
  group?: string;
  groupPb?: string;
  groupImmutable?: boolean;
}
function fields(desc: MessageDescriptor): Field[] {
  return Object.entries(desc.fields).flatMap(([key, descriptor]) =>
    descriptor.oneof
      ? Object.entries(descriptor.message?.()?.fields ?? {}).map(([member, fd]) => ({
          key: member,
          descriptor: fd,
          group: key,
          groupPb: descriptor.pbName,
          groupImmutable: descriptor.immutableOneof,
        }))
      : [{ key, descriptor }],
  );
}
function get(value: ObjectValue, field: Field): unknown {
  if (!field.group) return value[field.key];
  const union = value[field.group] as ObjectValue | undefined;
  return union?.$case === field.key ? union[field.key] : undefined;
}
function set(value: ObjectValue, field: Field, next: unknown): void {
  if (!field.group) value[field.key] = next;
  else if (next !== undefined) value[field.group] = { $case: field.key, [field.key]: next };
  else if ((value[field.group] as ObjectValue | undefined)?.$case === field.key) {
    value[field.group] = undefined;
  }
}
function defaultValue(fd: MessageFieldDescriptor): unknown {
  if (fd.map) return {};
  if (fd.repeated) return [];
  if (fd.message || fd.presence) return undefined;
  if ([3, 4, 6, 16, 18].includes(fd.scalarType ?? 0)) return Long.ZERO;
  if (fd.scalarType === 9) return '';
  if (fd.scalarType === 8) return false;
  if (fd.scalarType === 12) return new Uint8Array();
  return 0;
}
function present(value: unknown, field: Field): boolean {
  if (value === undefined || value === null) return false;
  const fd = field.descriptor;
  if (fd.repeated) return (value as unknown[]).length > 0;
  if (fd.map) return Object.keys(value).length > 0;
  if (field.group || fd.presence || fd.message) return true;
  if (Long.isLong(value)) return !value.isZero();
  if (value instanceof Uint8Array) return value.length > 0;
  if (typeof value === 'object' && 'code' in value) return value.code !== 0;
  return value !== '' && value !== false && value !== 0;
}
function sub(mask: Mask | null | undefined, field: Field): Mask | null {
  return (
    mask?.getSubMask(field.descriptor.pbName) ??
    (field.groupPb && mask?.getSubMask(field.groupPb) ? new Mask() : null)
  );
}
function listIndex(key: string, length: number, allowEnd = false): string {
  const index = Number(key);
  if (!/^[+-]?\d+$/.test(key) || index < 0 || index >= length + Number(allowEnd)) {
    throw new RangeError('List index out of bounds.');
  }
  return String(index);
}
function depthCheck(depth: number): void {
  if (depth >= 1000) throw new Error('recursion too deep');
}
function descriptor(message: unknown): MessageDescriptor {
  const desc = (message as { [messageDescriptorSymbol]?: MessageDescriptor })?.[
    messageDescriptorSymbol
  ];
  if (!desc) throw new TypeError('A generated message descriptor is required.');
  return desc;
}
function shape(value: unknown, desc: MessageDescriptor): ObjectValue {
  return desc.reflect?.(value) ?? (value as ObjectValue | undefined) ?? desc.create?.() ?? {};
}
function restore(value: ObjectValue, desc: MessageDescriptor): unknown {
  return desc.unreflect ? desc.unreflect(value) : value;
}

// Field replacement accepts the generated JS representation without encoder coercion.
function validateReplacement(value: unknown, fd: MessageFieldDescriptor, depth = 0): void {
  depthCheck(depth);
  const invalid = (): never => {
    throw new TypeError(`Incompatible replacement for ${fd.pbName}.`);
  };
  const child = fd.map ? fd.mapValue?.() : fd.message?.();
  if (fd.map) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) invalid();
    for (const entry of Object.values(value as ObjectValue)) {
      validateReplacement(
        entry,
        {
          ...fd,
          map: false,
          scalarType: fd.mapValueType === 11 ? undefined : fd.mapValueType,
          message: fd.mapValue,
        },
        depth + 1,
      );
    }
    return;
  }
  if (fd.repeated) {
    if (!Array.isArray(value)) invalid();
    for (const entry of value as unknown[]) {
      validateReplacement(entry, { ...fd, repeated: false }, depth + 1);
    }
    return;
  }
  if (child) {
    if (child.type === 'google.protobuf.Timestamp') {
      if (!dayjs.isDayjs(value)) invalid();
      return;
    }
    if (child.type === 'google.protobuf.Duration') {
      if (!dayjs.isDuration(value)) invalid();
      return;
    }
    if (
      child.type === 'google.protobuf.Value' ||
      child.type === 'google.protobuf.Struct' ||
      child.type === 'google.protobuf.ListValue'
    ) {
      if (
        child.type === 'google.protobuf.Struct' &&
        (!value || typeof value !== 'object' || Array.isArray(value))
      ) {
        invalid();
      }
      if (child.type === 'google.protobuf.ListValue' && !Array.isArray(value)) invalid();
      const json = (entry: unknown, level: number): void => {
        depthCheck(level);
        if (entry === null || ['string', 'boolean', 'number'].includes(typeof entry)) return;
        if (
          typeof entry !== 'object' ||
          entry === undefined ||
          (!Array.isArray(entry) &&
            Object.getPrototypeOf(entry) !== Object.prototype &&
            Object.getPrototypeOf(entry) !== null) ||
          entry instanceof Uint8Array ||
          Long.isLong(entry) ||
          dayjs.isDayjs(entry) ||
          dayjs.isDuration(entry)
        ) {
          invalid();
        }
        for (const nested of Object.values(entry as object)) json(nested, level + 1);
      };
      json(value, depth + 1);
      return;
    }
    if (child.type === 'google.protobuf.FieldMask') {
      if (!Array.isArray(value) || !value.every((part) => typeof part === 'string')) invalid();
      return;
    }
    if (!value || typeof value !== 'object' || Array.isArray(value)) invalid();
    const obj = value as ObjectValue;
    if (
      !child.reflect &&
      child.type !== 'google.protobuf.Any' &&
      child.type !== 'google.protobuf.Empty' &&
      obj.$type !== child.type
    ) {
      invalid();
    }
    for (const field of fields(child)) {
      const current = get(obj, field);
      if (current !== undefined) validateReplacement(current, field.descriptor, depth + 1);
    }
    return;
  }
  switch (fd.scalarType) {
    case 8:
      if (typeof value !== 'boolean') invalid();
      return;
    case 9:
      if (typeof value !== 'string') invalid();
      return;
    case 12:
      if (!(value instanceof Uint8Array)) invalid();
      return;
    case 3:
    case 4:
    case 6:
    case 16:
    case 18:
      if (!Long.isLong(value)) invalid();
      return;
    case 14: {
      const code =
        fd.pbName === 'null_value' && typeof value === 'number'
          ? value
          : (value as { code?: unknown } | null)?.code;
      if (
        typeof code !== 'number' ||
        !Number.isInteger(code) ||
        code < -2147483648 ||
        code > 2147483647
      ) {
        invalid();
      }
      return;
    }
    case 5:
    case 15:
    case 17:
      if (
        typeof value !== 'number' ||
        !Number.isInteger(value) ||
        value < -2147483648 ||
        value > 2147483647
      ) {
        invalid();
      }
      return;
    case 7:
    case 13:
      if (
        typeof value !== 'number' ||
        !Number.isInteger(value) ||
        value < 0 ||
        value > 4294967295
      ) {
        invalid();
      }
      return;
    default:
      if (typeof value !== 'number') invalid();
  }
}

/** Lists all protobuf field paths, including wildcard collection elements. */
export function knownFieldsFromDescriptor(
  desc: MessageDescriptor,
  options: MaskConversionOptions = {},
  depth = 0,
): Mask {
  depthCheck(depth);
  const result = new Mask();
  for (const field of fields(desc)) {
    const fd = field.descriptor;
    if (options.includeImmutables === false && (fd.immutable || field.groupImmutable)) continue;
    const child = fd.map ? fd.mapValue?.() : fd.message?.();
    const inner = child ? knownFieldsFromDescriptor(child, options, depth + 1) : new Mask();
    result.fieldParts.set(fd.pbName, child && (fd.map || fd.repeated) ? new Mask(inner) : inner);
  }
  return result;
}
/** Lists the fields defined by a generated message. Recursive schemas throw at depth 1,000. */
export function knownFieldsFromMessage(message: object, options: MaskConversionOptions = {}): Mask {
  return knownFieldsFromDescriptor(descriptor(message), options);
}

/** Identifies formerly populated fields that now need an explicit reset. */
export function resetMaskFromModified<T extends object>(
  initial: T,
  modified: T,
  options: MaskConversionOptions = {},
): Mask {
  if (!initial || !modified || (initial as ObjectValue).$type !== (modified as ObjectValue).$type) {
    throw new TypeError('Messages must have the same protobuf type.');
  }
  const compare = (
    before: unknown,
    after: unknown,
    desc: MessageDescriptor,
    depth: number,
  ): Mask => {
    depthCheck(depth);
    const old = shape(before, desc),
      next = shape(after, desc),
      result = new Mask();
    for (const field of fields(desc)) {
      const a = get(old, field),
        b = get(next, field),
        fd = field.descriptor;
      if (
        !options.includeImmutables &&
        (fd.immutable || (field.groupImmutable && !present(b, field)))
      ) {
        continue;
      }
      if (!present(a, field)) continue;
      if (!present(b, field)) {
        result.fieldParts.set(fd.pbName, new Mask());
        continue;
      }
      const child = fd.map ? fd.mapValue?.() : fd.message?.();
      if (!child) {
        if (
          !fd.map &&
          !fd.repeated &&
          !present(b, { ...field, group: undefined, descriptor: { ...fd, presence: false } }) &&
          present(a, { ...field, group: undefined, descriptor: { ...fd, presence: false } })
        ) {
          result.fieldParts.set(fd.pbName, new Mask());
        }
        continue;
      }
      let inner: Mask;
      if (fd.map || fd.repeated) {
        inner = new Mask();
        for (const [key, val] of Object.entries(a as ObjectValue)) {
          if (!Object.hasOwn(b as object, key)) continue;
          const change = compare(val, (b as ObjectValue)[key], child, depth + 1);
          if (!change.isEmpty()) inner.fieldParts.set(key, change);
        }
      } else inner = compare(a, b, child, depth + 1);
      if (!inner.isEmpty()) result.fieldParts.set(fd.pbName, inner);
    }
    return result;
  };
  return compare(initial, modified, descriptor(initial), 0);
}

/** Filters a copy; unselected list indexes retain default placeholders unless reduceLists is true. */
export function filterWithSelectMask<T>(
  type: MessageFns<T, string>,
  message: T,
  mask: Mask | string,
  reduceLists = false,
): T {
  if (!type.$descriptor) throw new TypeError('A generated message descriptor is required.');
  const filter = (
    value: unknown,
    desc: MessageDescriptor,
    selection: Mask,
    depth: number,
  ): unknown => {
    depthCheck(depth);
    if (selection.isEmpty()) return value;
    const obj = shape(value, desc),
      defaults = desc.create?.();
    for (const field of fields(desc)) {
      const current = get(obj, field),
        fd = field.descriptor,
        inner = sub(selection, field);
      if (!inner) {
        set(obj, field, field.group ? undefined : (defaults?.[field.key] ?? defaultValue(fd)));
        continue;
      }
      if (inner.isEmpty() || current === undefined) continue;
      const child = fd.map ? fd.mapValue?.() : fd.message?.();
      if (fd.repeated || fd.map) {
        const entries: [string, unknown][] = [];
        for (const [key, val] of Object.entries(current as ObjectValue)) {
          const selected = inner.getSubMask(key);
          if (selected) entries.push([key, child ? filter(val, child, selected, depth + 1) : val]);
          else if (fd.repeated && !reduceLists) {
            entries.push([
              key,
              child
                ? restore(child.create?.() ?? {}, child)
                : (fd.elementDefault?.() ?? defaultValue({ ...fd, repeated: false })),
            ]);
          }
        }
        set(obj, field, fd.repeated ? entries.map(([, v]) => v) : Object.fromEntries(entries));
      } else if (child) set(obj, field, filter(current, child, inner, depth + 1));
    }
    return restore(obj, desc);
  };
  return filter(
    type.decode(type.encode(message).finish()),
    type.$descriptor,
    typeof mask === 'string' ? Mask.parse(mask) : mask,
    0,
  ) as T;
}

/** Applies a patch to a copy, preserving output-only fields and unmasked default values. */
export function patchWithResetMask<T, P = T>(
  type: MessageFns<T, string>,
  data: T,
  patch: P,
  mask: Mask | string | null = null,
  patchType: MessageFns<P, string> = type as unknown as MessageFns<P, string>,
): T {
  if (!type.$descriptor || !patchType.$descriptor) {
    throw new TypeError('A generated message descriptor is required.');
  }
  const apply = (
    target: unknown,
    change: unknown,
    desc: MessageDescriptor,
    patchDesc: MessageDescriptor,
    reset: Mask | null,
    depth: number,
  ): unknown => {
    depthCheck(depth);
    const obj = shape(target, desc),
      update = shape(change, patchDesc),
      defaults = desc.create?.();
    for (const field of fields(desc)) {
      const fd = field.descriptor;
      if (fd.outputOnly) continue;
      const sourceField = fields(patchDesc).find(
        (candidate) => candidate.descriptor.pbName === fd.pbName,
      );
      const inner = sub(reset, field) ?? (sourceField ? sub(reset, sourceField) : null);
      const val = sourceField ? get(update, sourceField) : undefined;
      if (sourceField) {
        const source = sourceField.descriptor;
        if (
          !!fd.map !== !!source.map ||
          !!fd.repeated !== !!source.repeated ||
          fd.scalarType !== source.scalarType ||
          !!fd.message !== !!source.message ||
          fd.mapKeyType !== source.mapKeyType ||
          fd.mapValueType !== source.mapValueType
        ) {
          throw new TypeError(`Incompatible protobuf field: ${fd.pbName}`);
        }
      }
      if (!sourceField || !present(val, sourceField)) {
        if (inner) {
          set(obj, field, field.group ? undefined : (defaults?.[field.key] ?? defaultValue(fd)));
        }
        continue;
      }
      const old = get(obj, field),
        child = fd.map ? fd.mapValue?.() : fd.message?.(),
        patchChild = sourceField.descriptor.map
          ? sourceField.descriptor.mapValue?.()
          : sourceField.descriptor.message?.();
      if (!!child !== !!patchChild) {
        throw new TypeError(`Incompatible protobuf field: ${fd.pbName}`);
      }
      if (child && (fd.repeated || fd.map)) {
        const entries = Object.entries(val as ObjectValue).map(([key, item]) => [
          key,
          apply(
            old && Object.hasOwn(old, key) ? (old as ObjectValue)[key] : undefined,
            item,
            child,
            patchChild!,
            inner?.getSubMask(key) ?? null,
            depth + 1,
          ),
        ]);
        set(obj, field, fd.repeated ? entries.map(([, v]) => v) : Object.fromEntries(entries));
      } else if (child) set(obj, field, apply(old, val, child, patchChild!, inner, depth + 1));
      else set(obj, field, val);
    }
    return restore(obj, desc);
  };
  const result = apply(
    type.decode(type.encode(data).finish()),
    patchType.decode(patchType.encode(patch).finish()),
    type.$descriptor,
    patchType.$descriptor,
    typeof mask === 'string' ? Mask.parse(mask) : mask,
    0,
  ) as T;
  return type.decode(type.encode(result).finish());
}

/** Reads a protobuf path, using field names, map keys, and list indexes. */
export function getAtFieldPath(
  message: object,
  path: import('./fieldmask.js').FieldPath | string,
): unknown {
  const parts = typeof path === 'string' ? Mask.parse(path).toFieldPath()?.parts : path.parts;
  if (!parts) throw new TypeError('A concrete field path is required.');
  let current: unknown = message,
    desc: MessageDescriptor | undefined = descriptor(message);
  for (let i = 0; i < parts.length; i++) {
    const key = parts[i].value;
    if (!desc) throw new TypeError('Cannot descend through a scalar.');
    const obj = shape(current, desc);
    const group = Object.entries(desc.fields).find(([, fd]) => fd.oneof && fd.pbName === key);
    if (group) {
      if (i + 1 !== parts.length) throw new TypeError('Cannot descend through a oneof group.');
      const selected = obj[group[0]] as (ObjectValue & { $case: string }) | undefined;
      return selected?.[selected.$case];
    }
    const field: Field | undefined = fields(desc).find((item) => item.descriptor.pbName === key);
    if (!field) throw new RangeError(`Unknown protobuf field: ${key}`);
    current = get(obj, field);
    const fd: MessageFieldDescriptor = field.descriptor;
    desc = fd.map ? fd.mapValue?.() : fd.message?.();
    if ((fd.map || fd.repeated) && i + 1 < parts.length) {
      const requested = parts[++i].value;
      const element = fd.repeated
        ? listIndex(requested, (current as unknown[] | undefined)?.length ?? 0)
        : requested;
      if (!current || !Object.hasOwn(current as object, element)) {
        throw new RangeError(`Collection element not found: ${element}`);
      }
      current = (current as ObjectValue)[element];
    }
  }
  return current;
}

/** Replaces a field in a copy. Undefined clears fields or removes collection entries. */
export function replaceAtFieldPath<T>(
  type: MessageFns<T, string>,
  message: T,
  path: import('./fieldmask.js').FieldPath | string,
  replacement: unknown,
): T {
  if (!type.$descriptor) throw new TypeError('A generated message descriptor is required.');
  const parts = typeof path === 'string' ? Mask.parse(path).toFieldPath()?.parts : path.parts;
  if (!parts) throw new TypeError('A concrete field path is required.');
  const replace = (value: unknown, desc: MessageDescriptor, offset: number): unknown => {
    depthCheck(offset);
    if (offset === parts.length) {
      if (
        replacement !== undefined &&
        (replacement !== null || desc.type === 'google.protobuf.Value')
      ) {
        validateReplacement(replacement, { pbName: desc.type ?? 'message', message: () => desc });
      }
      return replacement === null && desc.type === 'google.protobuf.Value'
        ? null
        : (replacement ?? restore(desc.create?.() ?? {}, desc));
    }
    const obj = shape(value, desc),
      key = parts[offset].value,
      field = fields(desc).find((item) => item.descriptor.pbName === key);
    if (!field) throw new RangeError(`Unknown protobuf field: ${key}`);
    const fd = field.descriptor,
      child = fd.map ? fd.mapValue?.() : fd.message?.();
    if (offset + 1 === parts.length) {
      if (
        replacement !== undefined &&
        (replacement !== null || child?.type === 'google.protobuf.Value')
      ) {
        validateReplacement(replacement, fd);
      }
      set(
        obj,
        field,
        replacement === null && child?.type === 'google.protobuf.Value'
          ? null
          : (replacement ??
              (field.group ? undefined : (desc.create?.()[field.key] ?? defaultValue(fd)))),
      );
    } else if (fd.map || fd.repeated) {
      const entries = get(obj, field) ?? (fd.repeated ? [] : {}),
        requested = parts[offset + 1].value;
      const entry = fd.repeated
        ? listIndex(requested, (entries as unknown[]).length, true)
        : requested;
      if (offset + 2 === parts.length) {
        if (
          replacement === undefined ||
          (replacement === null && child?.type !== 'google.protobuf.Value')
        ) {
          if (fd.repeated) (entries as unknown[]).splice(Number(entry), 1);
          else delete (entries as ObjectValue)[entry];
        } else {
          validateReplacement(replacement, {
            ...fd,
            map: false,
            repeated: false,
            scalarType: fd.map
              ? fd.mapValueType === 11
                ? undefined
                : fd.mapValueType
              : fd.scalarType,
            message: () => child,
          });
          Object.defineProperty(entries, entry, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true,
          });
        }
      } else {
        if (!child) throw new TypeError('Cannot descend through a scalar.');
        Object.defineProperty(entries, entry, {
          value: replace(
            Object.hasOwn(entries, entry) ? (entries as ObjectValue)[entry] : undefined,
            child,
            offset + 2,
          ),
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
      set(obj, field, entries);
    } else {
      if (!child) throw new TypeError('Cannot descend through a scalar.');
      set(obj, field, replace(get(obj, field), child, offset + 1));
    }
    return restore(obj, desc);
  };
  const result = replace(type.decode(type.encode(message).finish()), type.$descriptor, 0) as T;
  return type.decode(type.encode(result).finish());
}

/** Defines one selected value visited by protobuf traversal. */
export interface ProtobufVisit {
  /** Contains the visited value in its native JS representation. */
  value: unknown;
  /** Describes the visited protobuf field or collection element. */
  descriptor: MessageFieldDescriptor;
  /** Contains field names and collection keys leading to this value. */
  path: readonly string[];
  /** Contains the selection applied beneath this path. */
  innerMask: Mask | null;
}
/** Visits populated selected fields. Return false to stop. Leaf masks stop descent. */
export function traverseMessage(
  message: object,
  mask: Mask | string | null,
  visit: (entry: ProtobufVisit) => boolean | void,
  order: 'depth' | 'breadth' = 'depth',
): void {
  type Node = ProtobufVisit & { child?: MessageDescriptor; element?: boolean; depth: number };
  const children = (
    value: unknown,
    desc: MessageDescriptor,
    selection: Mask | null,
    path: readonly string[],
    depth: number,
  ): Node[] => {
    depthCheck(depth);
    const obj = shape(value, desc),
      result: Node[] = [];
    for (const field of fields(desc)) {
      const val = get(obj, field),
        fd = field.descriptor;
      if (!present(val, field)) continue;
      const inner = !selection || selection.isEmpty() ? new Mask() : sub(selection, field);
      if (inner) {
        result.push({
          value: val,
          descriptor: fd,
          path: [...path, fd.pbName],
          innerMask: inner.isEmpty() ? null : inner,
          child: fd.map ? fd.mapValue?.() : fd.message?.(),
          depth: depth + 1,
        });
      }
    }
    return result;
  };
  const pending = children(
    message,
    descriptor(message),
    typeof mask === 'string' ? Mask.parse(mask) : mask,
    [],
    0,
  );
  if (order === 'depth') pending.reverse();
  let head = 0;
  while (order === 'breadth' ? head < pending.length : pending.length > 0) {
    const node = order === 'breadth' ? pending[head++] : pending.pop()!;
    if (visit(node) === false) return;
    if (!node.innerMask) continue;
    let next: Node[];
    if (!node.element && (node.descriptor.map || node.descriptor.repeated)) {
      next = Object.entries(node.value as ObjectValue).flatMap(([key, value]) => {
        const inner = node.innerMask?.getSubMask(key);
        return inner
          ? [
              {
                ...node,
                value,
                path: [...node.path, key],
                element: true,
                innerMask: inner.isEmpty() ? null : inner,
              },
            ]
          : [];
      });
    } else if (node.child) {
      next = children(node.value, node.child, node.innerMask, node.path, node.depth);
    } else throw new TypeError('Cannot descend through a scalar.');
    if (order === 'breadth') {
      for (const child of next) pending.push(child);
    } else {
      for (let i = next.length - 1; i >= 0; i--) pending.push(next[i]);
    }
  }
}
