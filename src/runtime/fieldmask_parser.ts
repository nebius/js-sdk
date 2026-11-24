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

import { Mask } from './fieldmask.js';

class ParseError extends Error {}

/**
 * The exclusive depth limit for field-mask trees.
 *
 * @internal
 */
export const MAX_MASK_DEPTH = 1000;

const STEPS_PER_CODE_UNIT = 8;

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

type Token = ({ kind: '(' | ')' | ',' | '.' | '*' } | { kind: 'key'; value: string }) & {
  pos: number;
};

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  for (let pos = skipWs(source, 0); pos < source.length; pos = skipWs(source, pos)) {
    const kind = source[pos];
    switch (kind) {
      case '(':
      case ')':
      case ',':
      case '.':
      case '*':
        tokens.push({ kind, pos });
        pos++;
        break;
      case '"': {
        const { value, next } = parseQuoted(source, pos);
        tokens.push({ kind: 'key', value, pos });
        pos = next;
        break;
      }
      default: {
        const { key, next } = parsePlainKey(source, pos);
        tokens.push({ kind: 'key', value: key, pos });
        pos = next;
      }
    }
  }
  return tokens;
}

function groupsBeforeDot(tokens: Token[]): Set<number> {
  const groups = new Set<number>();
  const openings: number[] = [];
  for (const [index, token] of tokens.entries()) {
    if (token.kind === '(') {
      openings.push(index);
    } else if (token.kind === ')') {
      const opening = openings.pop();
      if (opening === undefined) break;
      if (tokens[index + 1]?.kind === '.') groups.add(opening);
    }
  }
  return groups;
}

class Level {
  // Each active mask has its own child for a key or wildcard.
  active: Mask[];
  activeDepth: number;
  readonly ends: Set<Mask> | null;
  endDepth = 0;

  constructor(
    readonly pos: number,
    private readonly starts: Mask[],
    private readonly startDepth: number,
    collectEnds: boolean,
  ) {
    this.active = starts;
    this.activeDepth = startDepth;
    this.ends = collectEnds ? new Set() : null;
  }

  addKey(key: string, pos: number): void {
    if (this.activeDepth + 1 >= MAX_MASK_DEPTH) {
      throw new ParseError(`Mask is too deep at position ${pos}`);
    }
    this.activeDepth++;
    this.active = this.active.map((mask) => {
      if (key === '*') return (mask.any ??= new Mask());
      let child = mask.fieldParts.get(key);
      if (child === undefined) {
        child = new Mask();
        mask.fieldParts.set(key, child);
      }
      return child;
    });
  }

  finishBranch(): void {
    if (this.ends === null) return;
    for (const mask of this.active) this.ends.add(mask);
    this.endDepth = Math.max(this.endDepth, this.activeDepth);
  }

  nextBranch(): void {
    this.finishBranch();
    this.active = this.starts;
    this.activeDepth = this.startDepth;
  }
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
 * an unclosed group, or other trailing text. It also throws if a path reaches
 * 1,000 segments or the parser exceeds eight branch visits per UTF-16 code unit.
 */
export function parseMask(source: string): Mask {
  if (typeof source !== 'string') throw new ParseError('source must be a string');
  const root = new Mask();
  const tokens = tokenize(source);
  if (tokens.length === 0) return root;

  const beforeDot = groupsBeforeDot(tokens);
  const levels = [new Level(0, [root], 0, false)];
  let state: 'factor' | 'separator' | 'groupStart' = 'factor';
  let steps = 0;
  const maxSteps = STEPS_PER_CODE_UNIT * source.length;

  for (const [index, token] of tokens.entries()) {
    const level = levels[levels.length - 1]!;
    const { kind, pos } = token;
    if (state === 'groupStart') state = kind === ')' ? 'separator' : 'factor';
    if (kind !== '(' && kind !== '.') {
      // Count branch visits before they create or collect masks.
      steps += level.active.length;
      if (steps > maxSteps) throw new ParseError(`Mask is too complex at position ${pos}`);
    }

    if (state === 'factor') {
      if (kind === '(') {
        // A parent can pass the ends of this group to its own suffix.
        const collectEnds = beforeDot.has(index) || level.ends !== null;
        levels.push(new Level(pos, level.active, level.activeDepth, collectEnds));
        state = 'groupStart';
      } else if (kind === 'key' || kind === '*') {
        level.addKey(kind === 'key' ? token.value : '*', pos);
        state = 'separator';
      } else {
        throw new ParseError(`Expected a field or group at position ${pos}`);
      }
    } else {
      switch (kind) {
        case '.':
          state = 'factor';
          break;
        case ',':
          level.nextBranch();
          state = 'factor';
          break;
        case ')': {
          const parent = levels[levels.length - 2];
          if (parent === undefined) {
            throw new ParseError(`Unmatched right brace at position ${pos}`);
          }
          level.finishBranch();
          parent.active = level.ends === null ? [] : [...level.ends];
          parent.activeDepth = level.endDepth;
          levels.pop();
          break;
        }
        default:
          throw new ParseError(`Expected a separator or closing brace at position ${pos}`);
      }
    }
  }

  if (levels.length > 1) {
    throw new ParseError(`Unclosed left brace at position ${levels[levels.length - 1]!.pos}`);
  }
  if (state !== 'separator') throw new ParseError('Unexpected end of mask');
  return root;
}
