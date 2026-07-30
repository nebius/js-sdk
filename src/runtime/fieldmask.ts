/**
 * Builds, parses, and changes the extended field masks used by SDK runtime
 * features.
 *
 * Start with {@link Mask.parse} or {@link parseFieldMask} when you have mask
 * text. Use {@link FieldPath} when code must build one path segment by segment.
 * These helpers support grouped paths and wildcards in addition to standard
 * protobuf field-mask paths.
 *
 * This is a low-level runtime module. Generated request methods normally
 * handle update and reset masks for application code.
 *
 * @packageDocumentation
 */

import { parseMask } from './fieldmask_parser.js';
import { custom, customJson } from './util/logging.js';

const SIMPLE_STRING_RE = /^[a-zA-Z0-9_]+$/;
const RECURSION_TOO_DEEP = 1000;

/** Reports that a field-mask key cannot be read from its text form. */
export class MarshalError extends Error {}

/**
 * Stores one segment of a {@link FieldPath}.
 *
 * A simple key, such as `spec`, appears without quotes in a mask. A key that
 * contains punctuation or spaces uses JSON string syntax.
 */
export class FieldKey {
  /** Contains the unquoted field name. */
  readonly value: string;

  /** Creates a key from an unquoted field name. */
  constructor(value: string) {
    this.value = value;
  }

  /** Returns the unquoted field name. */
  toString(): string {
    return this.value;
  }

  /**
   * Reads one key from field-mask text.
   *
   * @throws {@link MarshalError} if the input is neither a simple key nor a
   * valid JSON string.
   */
  static unmarshal(marshaled: string): FieldKey {
    if (marshaled.startsWith('"')) {
      try {
        const v = JSON.parse(marshaled);
        if (typeof v !== 'string') throw new MarshalError('malformed FieldKey string');
        return new FieldKey(v);
      } catch {
        throw new MarshalError('malformed FieldKey string');
      }
    }
    if (SIMPLE_STRING_RE.test(marshaled)) {
      return new FieldKey(marshaled);
    }
    throw new MarshalError('malformed FieldKey string');
  }
  /**
   * Returns the key in field-mask syntax.
   *
   * The method adds JSON quotes only when the key needs them.
   *
   * @example
   * ```ts
   * import { FieldKey } from '@nebius/js-sdk/runtime/fieldmask';
   *
   * new FieldKey('spec').marshal(); // "spec"
   * new FieldKey('display-name').marshal(); // "\"display-name\""
   * ```
   */
  marshal(): string {
    if (SIMPLE_STRING_RE.test(this.value)) {
      return this.value;
    }
    return JSON.stringify(this.value);
  }
  [custom](): string {
    return this.toString();
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): string {
    return this.marshal();
  }
}

/**
 * Stores an ordered path through message fields.
 *
 * {@link FieldPath.append | append} and
 * {@link FieldPath.appendMany | appendMany} change this instance. Use
 * {@link FieldPath.copy | copy} or {@link FieldPath.concat | concat} when the
 * original path must stay unchanged.
 *
 * @example
 * ```ts
 * import { FieldPath } from '@nebius/js-sdk/runtime/fieldmask';
 *
 * const path = FieldPath.from('spec', 'resources', 'memory');
 * path.marshal(); // "spec.resources.memory"
 * ```
 */
export class FieldPath {
  /** Contains the path segments in traversal order. */
  readonly parts: FieldKey[];

  /** Creates a path and copies its input segments into a new array. */
  constructor(base?: Iterable<FieldKey | string> | null) {
    this.parts = [];
    if (base != null) {
      for (const v0 of base) {
        const v = v0 instanceof FieldKey ? v0 : new FieldKey(String(v0));
        this.parts.push(v);
      }
    }
  }
  /** Creates a path from separate key arguments. */
  static from(...parts: (FieldKey | string)[]): FieldPath {
    return new FieldPath(parts);
  }
  /** Iterates over the path segments in traversal order. */
  [Symbol.iterator](): Iterator<FieldKey> {
    return this.parts[Symbol.iterator]();
  }
  /** Returns the number of path parts. */
  get length(): number {
    return this.parts.length;
  }
  /** Returns the segment at the specified zero-based index. */
  at(i: number): FieldKey | undefined {
    return this.parts[i];
  }
  /** Appends one key to this path and returns this instance. */
  append(v: FieldKey | string): this {
    this.parts.push(v instanceof FieldKey ? v : new FieldKey(String(v)));
    return this;
  }
  /** Appends all supplied keys to this path and returns this instance. */
  appendMany(iter: Iterable<FieldKey | string>): this {
    for (const v0 of iter) this.append(v0);
    return this;
  }
  /** Returns a new path with the supplied keys appended. */
  concat(iter: Iterable<FieldKey | string>): FieldPath {
    const cp = this.copy();
    cp.appendMany(iter);
    return cp;
  }
  /** Returns a new path without the last segment, or `null` for an empty path. */
  parent(): FieldPath | null {
    if (this.parts.length === 0) return null;
    return new FieldPath(this.parts.slice(0, -1));
  }
  /** Returns an independent copy of this field path. */
  copy(): FieldPath {
    return new FieldPath(this.parts.slice());
  }
  /** Returns whether two field paths contain the same parts. */
  equals(other: FieldPath): boolean {
    if (!(other instanceof FieldPath)) return false;
    if (this.parts.length !== other.parts.length) return false;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].value !== other.parts[i].value) return false;
    }
    return true;
  }
  /**
   * Returns whether this path is a strict prefix of another path.
   *
   * Equal paths are not prefixes for this method.
   */
  isPrefixOf(other: FieldPath): boolean {
    if (!(other instanceof FieldPath)) return false;
    if (this.parts.length >= other.parts.length) return false;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].value !== other.parts[i].value) return false;
    }
    return true;
  }
  /** Returns a new mask that contains only this path. */
  toMask(): Mask {
    const root = new Mask();
    let cur = root;
    for (const v of this.parts) {
      const nxt = new Mask();
      cur.fieldParts.set(v.value, nxt);
      cur = nxt;
    }
    return root;
  }
  /** Returns this path in field-mask syntax. */
  marshal(): string {
    return this.toMask().marshal();
  }
  /** Converts the value to string. */
  toString(): string {
    return `FieldPath(${this.parts.map((p) => p.value).join('.')})`;
  }
  [custom](): string {
    return this.toString();
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): string {
    return this.marshal();
  }
}

/**
 * Stores a field mask as a tree of named and wildcard paths.
 *
 * Use {@link Mask.parse} for text such as `metadata,spec.resources.*`. A
 * wildcard matches one field at its current path level. Most modifying
 * methods return this instance so that calls can be chained.
 *
 * @example
 * ```ts
 * import { Mask } from '@nebius/js-sdk/runtime/fieldmask';
 *
 * const mask = Mask.parse('metadata,spec.(resources,cloud_init)');
 * mask.subMask('spec')?.marshal(); // "cloud_init,resources"
 * mask.addPath(['status']);
 * mask.marshal(); // "metadata,spec.(cloud_init,resources),status"
 * ```
 */
export class Mask {
  /** Contains the branch for a `*` segment, or `null` when no wildcard exists. */
  any: Mask | null;

  /** Maps each named segment to the mask below that segment. */
  fieldParts: Map<string, Mask>;

  /**
   * Creates a mask from tree branches.
   *
   * The constructor keeps the supplied branch objects. Use {@link copy} when
   * the caller and the mask must not share mutable state.
   */
  constructor(any: Mask | null = null, fieldParts?: Map<string, Mask>) {
    this.any = any;
    this.fieldParts = fieldParts ?? new Map<string, Mask>();
  }
  /** Returns whether the mask has no paths. */
  isEmpty(): boolean {
    return this.any === null && this.fieldParts.size === 0;
  }
  /** Returns an independent copy of this mask. */
  copy(): Mask {
    const m = new Mask();
    m.any = this.any ? this.any.copy() : null;
    for (const [k, v] of this.fieldParts) m.fieldParts.set(k, v.copy());
    return m;
  }
  /** Returns whether two masks contain the same paths. */
  equals(other: Mask): boolean {
    if (!(other instanceof Mask)) return false;
    if ((this.any === null) !== (other.any === null)) return false;
    if (this.any && other.any && !this.any.equals(other.any)) return false;
    if (this.fieldParts.size !== other.fieldParts.size) return false;
    for (const [k, v] of this.fieldParts) {
      const ov = other.fieldParts.get(k);
      if (!ov || !v.equals(ov)) return false;
    }
    return true;
  }
  /**
   * Returns the single linear path in this mask.
   *
   * Returns `null` when the mask contains a wildcard or more than one path.
   * An empty mask becomes an empty {@link FieldPath}.
   */
  toFieldPath(): FieldPath | null {
    if (this.any) return null;
    let cur: Mask = this;
    const parts: string[] = [];
    while (true) {
      if (cur.any) return null;
      const keys = [...cur.fieldParts.keys()];
      if (keys.length === 0) break;
      if (keys.length > 1) return null;
      parts.push(keys[0]);
      const next = cur.fieldParts.get(keys[0]);
      if (!next) break;
      cur = next;
    }
    return new FieldPath(parts.map((s) => new FieldKey(s)));
  }
  /** Returns whether this mask contains one linear path and no wildcard. */
  isFieldPath(): boolean {
    return this.toFieldPath() !== null;
  }
  /**
   * Returns the mask below one key.
   *
   * A named branch has priority over the wildcard branch. The returned value
   * is part of this mask, so changing it also changes this mask.
   */
  getSubMask(key: FieldKey | string): Mask | null {
    const k = key instanceof FieldKey ? key.value : String(key);
    const named = this.fieldParts.get(k) || null;
    if (named) return named;
    return this.any ?? null;
  }
  /**
   * Returns the mask below a path.
   *
   * Returns `null` when a segment has no named or wildcard branch.
   */
  getSubMaskByPath(path: FieldPath): Mask | null {
    let cur: Mask | null = this;
    for (const part of path.parts) {
      if (!cur) return null;
      cur = cur.getSubMask(part);
    }
    return cur;
  }
  /** Returns the mutable mask below a path or one key. */
  subMask(path: FieldPath | FieldKey | string): Mask | null {
    if (path instanceof FieldPath) return this.getSubMaskByPath(path);
    return this.getSubMask(path);
  }
  /**
   * Adds a path to this mask and returns this instance.
   *
   * Use the string `'*'` for a wildcard segment. An empty path makes no
   * change.
   */
  addPath(path: (FieldKey | string | '*')[]): this {
    let cur: Mask = this;
    for (const seg0 of path) {
      const seg = seg0 === '*' ? '*' : seg0 instanceof FieldKey ? seg0.value : String(seg0);
      if (seg === '*') {
        if (!cur.any) cur.any = new Mask();
        cur = cur.any;
      } else {
        const next = cur.fieldParts.get(seg);
        if (next) {
          cur = next;
        } else {
          const m = new Mask();
          cur.fieldParts.set(seg, m);
          cur = m;
        }
      }
    }
    return this;
  }
  /**
   * Adds all paths from another mask and returns this instance.
   *
   * New branches are copied. Later changes to `other` do not change this
   * mask.
   */
  merge(other: Mask | null | undefined): this {
    if (!other) return this;
    if (other.any) {
      if (!this.any) this.any = new Mask();
      this.any.merge(other.any);
    }
    for (const [k, v] of other.fieldParts) {
      const cur = this.fieldParts.get(k);
      if (cur) cur.merge(v);
      else this.fieldParts.set(k, v.copy());
    }
    return this;
  }
  /**
   * Parses field-mask text, including grouped paths and wildcards.
   *
   * @throws `Error` if the text does not follow field-mask syntax.
   */
  static parse(source: string): Mask {
    return parseMask(source);
  }
  /** Compatibility alias for {@link Mask.parse}. */
  static Parse(source: string): Mask {
    return Mask.parse(source);
  }
  private marshalRec(recursion: number): { count: number; text: string } {
    if (recursion >= RECURSION_TOO_DEEP) {
      throw new Error('recursion too deep');
    }
    if (!this.any && this.fieldParts.size === 0) {
      return { count: 0, text: '' };
    }
    const parts: string[] = [];
    const appendMarshaler = (kMask: string, mask: Mask) => {
      const { count, text } = mask.marshalRec(recursion + 1);
      if (text === '') {
        parts.push(kMask);
      } else if (count === 1) {
        parts.push(`${kMask}.${text}`);
      } else {
        parts.push(`${kMask}.(${text})`);
      }
    };
    if (this.any) {
      appendMarshaler('*', this.any);
    }
    for (const k of Array.from(this.fieldParts.keys())) {
      const v = this.fieldParts.get(k)!;
      if (!v) continue;
      const kMask = new FieldKey(k).marshal();
      appendMarshaler(kMask, v);
    }
    parts.sort();
    return { count: parts.length, text: parts.join(',') };
  }
  /**
   * Returns a stable, sorted field-mask string.
   *
   * The method groups shared path prefixes when this makes the output shorter.
   * It throws if the tree is more than 1,000 levels deep.
   */
  marshal(): string {
    return this.marshalRec(0).text;
  }
  [custom](): string {
    return this.toString();
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): string {
    try {
      return this.marshal();
    } catch (e) {
      return `not-marshalable ${/**/ (e && (e as { message: string }).message) || e}`;
    }
  }
  /** Converts the value to string. */
  toString(): string {
    try {
      return `Mask<${this.marshal()}>`;
    } catch (e) {
      return `Mask<not-marshalable ${/**/ (e && (e as { message: string }).message) || e}>`;
    }
  }
  // Intersection and subtraction APIs to match Go implementation
  private intersectRMRecursive(other: Mask | null, recursion: number): Mask | null {
    if (recursion >= RECURSION_TOO_DEEP) throw new Error('recursion too deep');
    recursion++;
    if (!this || !other) return null;
    const ret = new Mask();
    // any × any
    if (this.any && other.any) {
      ret.any = this.any.intersectRMRecursive(other.any, recursion);
    }
    // this.field × other.any
    if (other.any) {
      for (const [k, v] of this.fieldParts) {
        const inner = v.intersectRMRecursive(other.any, recursion);
        if (inner) ret.fieldParts.set(k, inner);
      }
    }
    // this.any × other.field
    if (this.any) {
      for (const [k, v] of other.fieldParts) {
        const inner = this.any.intersectRMRecursive(v, recursion);
        if (inner) {
          const prev = ret.fieldParts.get(k);
          if (prev) inner.merge(prev);
          ret.fieldParts.set(k, inner);
        }
      }
    }
    // this.field × other.field (same keys)
    for (const [k, v] of this.fieldParts) {
      const o = other.fieldParts.get(k) || null;
      if (!o) continue;
      const inner = v.intersectRMRecursive(o, recursion);
      if (inner) {
        const prev = ret.fieldParts.get(k);
        if (prev) inner.merge(prev);
        ret.fieldParts.set(k, inner);
      }
    }
    return ret;
  }

  /**
   * Returns paths that this mask and a reset mask share.
   *
   * Wildcard branches match named branches. This method does not change
   * either input mask.
   */
  intersectResetMask(other: Mask | null | undefined): Mask | null {
    if (!other) return new Mask();
    return this.intersectRMRecursive(other, 0);
  }

  private intersectDumbRecursive(other: Mask | null, recursion: number): Mask | null {
    if (recursion >= RECURSION_TOO_DEEP) throw new Error('recursion too deep');
    recursion++;
    if (!this || !other) return null;
    const ret = new Mask();
    if (this.any && other.any) ret.any = this.any.intersectDumbRecursive(other.any, recursion);
    for (const [k, v] of this.fieldParts) {
      const o = other.fieldParts.get(k) || null;
      const inner = o ? v.intersectDumbRecursive(o, recursion) : null;
      if (inner) ret.fieldParts.set(k, inner);
    }
    return ret;
  }

  /**
   * Returns paths that both masks contain at the same tree positions.
   *
   * This variant only matches `*` with `*`. It does not expand wildcards.
   */
  intersectDumb(other: Mask | null | undefined): Mask | null {
    if (!other) return new Mask();
    return this.intersectDumbRecursive(other, 0);
  }

  private subtractDumbRecursive(other: Mask | null, recursion: number): void {
    if (recursion >= RECURSION_TOO_DEEP) throw new Error('recursion too deep');
    recursion++;
    if (!other) return;
    if (this.any && other.any) {
      this.any.subtractDumbRecursive(other.any, recursion);
      if (this.any.isEmpty()) this.any = null;
    }
    for (const [k, v] of Array.from(this.fieldParts.entries())) {
      const o = other.fieldParts.get(k) || null;
      if (o) {
        v.subtractDumbRecursive(o, recursion);
        if (v.isEmpty()) this.fieldParts.delete(k);
      }
    }
  }

  /**
   * Removes matching paths from this mask and returns this instance.
   *
   * This variant only matches `*` with `*`. It does not expand wildcards.
   */
  subtractDumb(other: Mask | null | undefined): this {
    if (other) this.subtractDumbRecursive(other, 0);
    return this;
  }

  private subtractResetRecursive(other: Mask | null, recursion: number): void {
    if (recursion >= RECURSION_TOO_DEEP) throw new Error('recursion too deep');
    recursion++;
    if (!other) return;
    if (this.any && other.any) {
      this.any.subtractResetRecursive(other.any, recursion);
      if (this.any.isEmpty()) this.any = null;
    }
    for (const [k, v] of Array.from(this.fieldParts.entries())) {
      if (other.any) {
        v.subtractResetRecursive(other.any, recursion);
      }
      const o = other.fieldParts.get(k) || null;
      if (o) {
        v.subtractResetRecursive(o, recursion);
      }
      if (v.isEmpty()) this.fieldParts.delete(k);
    }
  }

  /**
   * Removes paths selected by a reset mask and returns this instance.
   *
   * Wildcard branches in `other` also remove matching named branches.
   */
  subtractResetMask(other: Mask | null | undefined): this {
    if (other) this.subtractResetRecursive(other, 0);
    return this;
  }

  /**
   * Creates a mask from the leaf paths in a JavaScript value.
   *
   * Object keys become named segments. Array elements add a wildcard segment.
   * Empty objects and arrays become leaf paths.
   *
   * @example
   * ```ts
   * import { Mask } from '@nebius/js-sdk/runtime/fieldmask';
   *
   * Mask.fromObject({ spec: { disks: [{ size: true }] } }).marshal();
   * // "spec.disks.*.size"
   * ```
   */
  static fromObject(obj: unknown): Mask {
    const root = new Mask();
    const visit = (cur: Mask, val: unknown, path: (string | '*')[]) => {
      if (val === null || typeof val !== 'object') {
        if (path.length > 0) cur.addPath(path);
        return;
      }
      if (Array.isArray(val)) {
        if (val.length === 0) {
          if (path.length > 0) cur.addPath(path);
          return;
        }
        for (const el of val) {
          visit(cur, el, path.concat('*'));
        }
        return;
      }
      const keys = Object.keys(val);
      if (keys.length === 0) {
        if (path.length > 0) cur.addPath(path);
        return;
      }
      for (const k of keys) {
        visit(cur, (val as Record<string, unknown>)[k], path.concat(k));
      }
    };
    visit(root, obj, []);
    return root;
  }

  /**
   * Creates a mask from a JSON string or an already parsed JavaScript value.
   *
   * @throws `SyntaxError` if a string contains invalid JSON.
   */
  static parseJSON(source: string | unknown): Mask {
    const obj = typeof source === 'string' ? JSON.parse(source) : source;
    return Mask.fromObject(obj);
  }

  /**
   * Converts the mask tree to a JSON-safe object.
   *
   * Leaf paths have the value `true`. Wildcard branches use the `*` key.
   * Named keys are stored in their marshaled form. A key that needs JSON quotes
   * therefore includes those quote characters in the returned object.
   *
   * Do not use {@link Mask.fromObject} or {@link Mask.parseJSON} to round-trip
   * this output when a key needs quotes. Those functions treat the marshaled
   * key as a new literal key.
   */
  toObject(): unknown {
    const rec = (node: Mask): unknown => {
      if (!node.any && node.fieldParts.size === 0) return true;
      const out: Record<string, unknown> = {};
      if (node.any) out['*'] = rec(node.any);
      for (const [k, v] of node.fieldParts) out[new FieldKey(k).marshal()] = rec(v);
      return out;
    };
    return rec(this);
  }

  /**
   * Returns the same JSON-safe tree as {@link Mask.toObject}.
   *
   * Keys that need quotes stay in marshaled form, including their quote
   * characters. Such keys do not round-trip through {@link Mask.parseJSON}.
   */
  toJSON(): unknown {
    return this.toObject();
  }
}

/** Parses field-mask text. This function is an alias for {@link Mask.parse}. */
export function parseFieldMask(source: string): Mask {
  return Mask.parse(source);
}
