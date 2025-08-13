/*
  TypeScript port of Python fieldmask.py
  Provides FieldKey, FieldPath, and Mask structures, along with utilities to
  marshal/unmarshal field mask strings (via the parser module) and work with
  paths.
*/

import { parseMask } from './fieldmask_parser';

const SIMPLE_STRING_RE = /^[a-zA-Z0-9_]+$/;

export class MarshalError extends Error {}

export class FieldKey {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }
  toString(): string {
    return this.value;
  }
  static unmarshal(marshaled: string): FieldKey {
    if (marshaled.startsWith('"')) {
      try {
        const v = JSON.parse(marshaled);
        if (typeof v !== 'string') throw new MarshalError('malformed FieldKey string');
        return new FieldKey(v);
      } catch (e) {
        throw new MarshalError('malformed FieldKey string');
      }
    }
    if (SIMPLE_STRING_RE.test(marshaled)) {
      return new FieldKey(marshaled);
    }
    throw new MarshalError('malformed FieldKey string');
  }
  marshal(): string {
    if (SIMPLE_STRING_RE.test(this.value)) {
      return this.value;
    }
    return JSON.stringify(this.value);
  }
}

export class FieldPath {
  readonly parts: FieldKey[];
  constructor(base?: Iterable<FieldKey | string> | null) {
    this.parts = [];
    if (base != null) {
      for (const v0 of base as Iterable<any>) {
        const v = v0 instanceof FieldKey ? v0 : new FieldKey(String(v0));
        this.parts.push(v);
      }
    }
  }
  static from(...parts: (FieldKey | string)[]): FieldPath {
    return new FieldPath(parts);
  }
  [Symbol.iterator](): Iterator<FieldKey> {
    return this.parts[Symbol.iterator]();
  }
  get length(): number {
    return this.parts.length;
  }
  at(i: number): FieldKey | undefined {
    return this.parts[i];
  }
  append(v: FieldKey | string): this {
    this.parts.push(v instanceof FieldKey ? v : new FieldKey(String(v)));
    return this;
  }
  appendMany(iter: Iterable<FieldKey | string>): this {
    for (const v0 of iter) this.append(v0);
    return this;
  }
  concat(iter: Iterable<FieldKey | string>): FieldPath {
    const cp = this.copy();
    cp.appendMany(iter);
    return cp;
  }
  parent(): FieldPath | null {
    if (this.parts.length === 0) return null;
    return new FieldPath(this.parts.slice(0, -1));
  }
  copy(): FieldPath {
    return new FieldPath(this.parts.slice());
  }
  equals(other: FieldPath): boolean {
    if (!(other instanceof FieldPath)) return false;
    if (this.parts.length !== other.parts.length) return false;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].value !== other.parts[i].value) return false;
    }
    return true;
  }
  isPrefixOf(other: FieldPath): boolean {
    if (!(other instanceof FieldPath)) return false;
    if (this.parts.length >= other.parts.length) return false;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].value !== other.parts[i].value) return false;
    }
    return true;
  }
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
  marshal(): string {
    return this.toMask().marshal();
  }
  toString(): string {
    return `FieldPath(${this.parts.map((p) => p.value).join('.')})`;
  }
}

export class Mask {
  any: Mask | null;
  fieldParts: Map<string, Mask>;
  constructor(any: Mask | null = null, fieldParts?: Map<string, Mask>) {
    this.any = any;
    this.fieldParts = fieldParts ?? new Map<string, Mask>();
  }
  isEmpty(): boolean {
    return this.any === null && this.fieldParts.size === 0;
  }
  copy(): Mask {
    const m = new Mask();
    m.any = this.any ? this.any.copy() : null;
    for (const [k, v] of this.fieldParts) m.fieldParts.set(k, v.copy());
    return m;
  }
  equals(other: any): boolean {
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
  toFieldPath(): FieldPath | null {
    // Convert to a single linear path if no branching
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
  isFieldPath(): boolean {
    return this.toFieldPath() !== null;
  }
  // Returns merged branch for a direct key combined with wildcard Any
  getSubMask(key: FieldKey | string): Mask | null {
    const k = key instanceof FieldKey ? key.value : String(key);
    const named = this.fieldParts.get(k) || null;
    const any = this.any;
    if (named && any) {
      // merge Any into a copy of named
      const cp = named.copy();
      cp.merge(any);
      return cp;
    }
    return named ?? any ?? null;
  }
  // Traverses by path combining wildcards at each level
  getSubMaskByPath(path: FieldPath): Mask | null {
    let cur: Mask | null = this;
    for (const part of path.parts) {
      if (!cur) return null;
      cur = cur.getSubMask(part);
    }
    return cur;
  }
  subMask(path: FieldPath | FieldKey | string): Mask | null {
    if (path instanceof FieldPath) return this.getSubMaskByPath(path);
    return this.getSubMask(path);
  }
  addPath(path: (FieldKey | string | '*')[]): this {
    let cur: Mask = this;
    for (const seg0 of path) {
      const seg = seg0 === '*' ? '*' : (seg0 instanceof FieldKey ? seg0.value : String(seg0));
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
  static parse(source: string): Mask {
    return parseMask(source);
  }
  marshal(): string {
    // Flatten to comma-separated list of full paths (no parentheses). Stable order based on per-level key sort.
    const paths: (string | '*')[][] = [];
    const dfs = (prefix: (string | '*')[], node: Mask) => {
      // wildcard branch
      if (node.any) {
        dfs([...prefix, '*'], node.any);
      }
      if (node.fieldParts.size === 0 && !node.any) {
        // Leaf marks a complete path. But avoid adding empty root.
        if (prefix.length > 0) paths.push(prefix);
      }
      for (const k of Array.from(node.fieldParts.keys()).sort()) {
        const child = node.fieldParts.get(k)!;
        dfs([...prefix, k], child);
      }
    };
    dfs([], this);
    const strPaths = paths.map((p) => p.map((seg) => (seg === '*' ? '*' : new FieldKey(seg).marshal())).join('.'));
    return strPaths.join(',');
  }
}

// Convenience helpers akin to Python API naming
export function parseFieldMask(source: string): Mask {
  return Mask.parse(source);
}
