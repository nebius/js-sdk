/**
 * Parses the extended field-mask syntax used by the SDK.
 *
 * The parser accepts wildcards, JSON-quoted keys, and groups after a common
 * path prefix. It ignores whitespace around commas and dots and inside groups.
 * Empty groups are valid.
 *
 * The grammar is:
 *
 * ```text
 * mask      := union
 * union     := path ("," path)*
 * path      := factor ("." factor)*
 * factor    := segment | group
 * segment   := "*" | plainKey | quotedKey
 * group     := "(" union? ")"
 * plainKey  := [a-zA-Z0-9_]+
 * quotedKey := '"' <JSON string characters> '"'
 * ```
 *
 * Application code normally uses {@link Mask.parse} or
 * {@link https://nebius.github.io/js-sdk/functions/runtime_fieldmask.parseFieldMask.html | parseFieldMask()}
 * from `@nebius/js-sdk/runtime/fieldmask`.
 *
 * @packageDocumentation
 */

import { FieldKey, Mask } from './fieldmask.js';

class ParseError extends Error {}

function skipWs(s: string, i: number): number {
  while (i < s.length && /\s/.test(s[i]!)) i++;
  return i;
}

function parseQuoted(input: string, start: number): { value: string; next: number } {
  // Assumes input[start] === '"'
  let j = start + 1;
  let escaped = false;
  while (j < input.length) {
    const ch = input[j]!;
    if (!escaped && ch === '"') break;
    if (!escaped && ch === '\\') escaped = true;
    else escaped = false;
    j++;
  }
  if (j >= input.length || input[j] !== '"') {
    throw new ParseError(`Unterminated string at ${start}`);
  }
  const raw = input.slice(start, j + 1);
  try {
    const v = JSON.parse(raw);
    if (typeof v !== 'string') throw new Error('not a string');
    return { value: v, next: j + 1 };
  } catch {
    throw new ParseError(`Invalid quoted string at ${start}`);
  }
}

function parsePlainKey(s: string, i: number): { key: string; next: number } {
  const isAlphaNumUnd = /[a-zA-Z0-9_]/;
  let j = i;
  while (j < s.length && isAlphaNumUnd.test(s[j]!)) j++;
  if (j === i) throw new ParseError(`Invalid key at position ${i}`);
  return { key: s.slice(i, j), next: j };
}

type Path = (string | '*')[];

function concatPathSets(a: Path[], b: Path[]): Path[] {
  if (a.length === 0) return b.map((p) => p.slice());
  if (b.length === 0) return a.map((p) => p.slice());
  const out: Path[] = [];
  for (const pa of a) {
    for (const pb of b) {
      out.push(pa.concat(pb));
    }
  }
  return out;
}

function unionPathSets(a: Path[], b: Path[]): Path[] {
  if (a.length === 0) return b.map((p) => p.slice());
  if (b.length === 0) return a.map((p) => p.slice());
  const out: Path[] = a.map((p) => p.slice());
  for (const p of b) out.push(p.slice());
  return out;
}

function parseFactor(s: string, idxRef: { i: number }): Path[] {
  let i = skipWs(s, idxRef.i);
  if (i >= s.length) throw new ParseError('Unexpected end of input');
  const ch = s[i]!;
  if (ch === '(') {
    i = skipWs(s, i + 1);
    const innerRef = { i };
    if (innerRef.i < s.length && s[innerRef.i] === ')') {
      idxRef.i = innerRef.i + 1;
      return [[]];
    }
    const { paths, next } = parseUnion(s, innerRef);
    i = skipWs(s, next);
    if (i >= s.length || s[i] !== ')') {
      throw new ParseError(`Unclosed left brace at position ${idxRef.i}`);
    }
    idxRef.i = i + 1;
    return paths.length === 0 ? [[]] : paths;
  }
  if (ch === '*') {
    idxRef.i = i + 1;
    return [['*']];
  }
  if (ch === '"') {
    const { value, next } = parseQuoted(s, i);
    idxRef.i = next;
    return [[new FieldKey(value).value]];
  }
  const { key, next } = parsePlainKey(s, i);
  idxRef.i = next;
  return [[new FieldKey(key).value]];
}

function parsePath(s: string, idxRef: { i: number }): Path[] {
  let paths = parseFactor(s, idxRef);
  while (true) {
    let i = skipWs(s, idxRef.i);
    if (i >= s.length || s[i] !== '.') break;
    i = skipWs(s, i + 1);
    if (i >= s.length || s[i] === ')' || s[i] === ',') {
      throw new ParseError(`Unexpected end of path at position ${i}`);
    }
    idxRef.i = i;
    const rhs = parseFactor(s, idxRef);
    paths = concatPathSets(paths, rhs);
  }
  return paths;
}

function parseUnion(s: string, idxRef: { i: number }): { paths: Path[]; next: number } {
  let i = skipWs(s, idxRef.i);
  // allow empty union (e.g., directly before ')')
  if (i >= s.length || s[i] === ')') {
    return { paths: [], next: i };
  }
  idxRef.i = i;
  let paths = parsePath(s, idxRef);
  i = skipWs(s, idxRef.i);
  while (i < s.length && s[i] === ',') {
    i = skipWs(s, i + 1);
    if (i >= s.length || s[i] === ')' || s[i] === ',') {
      throw new ParseError('Unexpected end of mask');
    }
    idxRef.i = i;
    const rhs = parsePath(s, idxRef);
    paths = unionPathSets(paths, rhs);
    i = skipWs(s, idxRef.i);
  }
  return { paths, next: idxRef.i };
}

/**
 * Parses field-mask text into a {@link Mask}.
 *
 * The syntax supports comma-separated paths, `*` segments, JSON-quoted keys,
 * and groups after a shared prefix. For example,
 * `spec.(resources,cloud_init),metadata` contains three paths. Spaces around
 * separators are ignored.
 *
 * Most applications can use {@link Mask.parse} or
 * {@link https://nebius.github.io/js-sdk/functions/runtime_fieldmask.parseFieldMask.html | parseFieldMask()}
 * from `@nebius/js-sdk/runtime/fieldmask`.
 *
 * @throws `Error` when the input contains an invalid key, an incomplete path,
 * an unclosed group, or other trailing text.
 */
export function parseMask(source: string): Mask {
  if (typeof source !== 'string') throw new ParseError('source must be a string');
  const s = source;
  const { paths, next } = parseUnion(s, { i: 0 });
  const end = skipWs(s, next);
  if (end !== s.length) {
    throw new ParseError(`Unexpected character '${s[end]}' at position ${end}`);
  }
  const mask = new Mask();
  for (const p of paths) {
    mask.addPath(p);
  }
  return mask;
}
