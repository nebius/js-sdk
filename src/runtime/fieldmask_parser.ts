/*
  Minimal parser for field mask strings.
  Grammar (subset):
    mask      := path ("," path)*
    path      := segment ("." segment)*
    segment   := "*" | plainKey | quotedKey
    plainKey  := [a-zA-Z0-9_]+
    quotedKey := '"' <json string characters> '"'
  Whitespace around commas/dots is ignored.
*/

import { FieldKey, Mask } from './fieldmask';

const SIMPLE_STRING_RE = /^[a-zA-Z0-9_]+$/;

class ParseError extends Error {}

function parseQuoted(input: string, start: number): { value: string; next: number } {
  // Assumes input[start] === '"'
  let i = start;
  let s = '';
  i++; // skip opening quote
  while (i < input.length) {
    const ch = input[i];
    if (ch === '"') {
      // end
      return { value: s, next: i + 1 };
    }
    if (ch === '\\') {
      // escape sequence - delegate to JSON by scanning till closing quote and JSON.parse
      // Fallback: accumulate and handle at end
      // We'll collect the full quoted string and JSON.parse it
      break;
    }
    s += ch;
    i++;
  }
  // Fallback robust way: find matching quote accounting for escapes and JSON.parse the slice
  let j = start + 1;
  let escaped = false;
  while (j < input.length) {
    const ch2 = input[j];
    if (!escaped && ch2 === '"') break;
    if (!escaped && ch2 === '\\') {
      escaped = true;
    } else {
      escaped = false;
    }
    j++;
  }
  if (j >= input.length || input[j] !== '"') throw new ParseError('Unterminated string');
  const raw = input.slice(start, j + 1);
  try {
    const val = JSON.parse(raw);
    if (typeof val !== 'string') throw new Error('not a string');
    return { value: val, next: j + 1 };
  } catch (e) {
    throw new ParseError('Invalid quoted string');
  }
}

function skipWs(s: string, i: number): number {
  while (i < s.length && /\s/.test(s[i]!)) i++;
  return i;
}

function parseSegment(s: string, i: number): { seg: string; next: number } {
  i = skipWs(s, i);
  if (i >= s.length) throw new ParseError('Unexpected end of input');
  const ch = s[i]!;
  if (ch === '*') return { seg: '*', next: i + 1 };
  if (ch === '"') {
    const { value, next } = parseQuoted(s, i);
    return { seg: new FieldKey(value).value, next };
  }
  // plain key
  let j = i;
  while (j < s.length && SIMPLE_STRING_RE.test(s[j]!)) j++;
  if (j === i) throw new ParseError(`Invalid key at position ${i}`);
  const key = s.slice(i, j);
  return { seg: new FieldKey(key).value, next: j };
}

function parsePath(s: string, i: number): { parts: string[]; next: number } {
  const parts: string[] = [];
  let cur = i;
  // first segment
  const first = parseSegment(s, cur);
  parts.push(first.seg);
  cur = skipWs(s, first.next);
  while (cur < s.length && s[cur] === '.') {
    cur = skipWs(s, cur + 1);
    const n = parseSegment(s, cur);
    parts.push(n.seg);
    cur = skipWs(s, n.next);
  }
  return { parts, next: cur };
}

export function parseMask(source: string): Mask {
  if (typeof source !== 'string') throw new ParseError('source must be a string');
  let i = 0;
  const s = source;
  const mask = new Mask();
  while (true) {
    i = skipWs(s, i);
    if (i >= s.length) break;
    const { parts, next } = parsePath(s, i);
    mask.addPath(parts as any);
    i = skipWs(s, next);
    if (i >= s.length) break;
    if (s[i] === ',') {
      i++;
      continue;
    }
    // Unexpected char
    throw new ParseError(`Unexpected character '${s[i]}' at position ${i}`);
  }
  return mask;
}
