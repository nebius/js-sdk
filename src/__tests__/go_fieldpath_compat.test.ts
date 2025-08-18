import { FieldKey, FieldPath } from '../runtime/fieldmask';

describe('Go FieldPath compatibility', () => {
  test('join', () => {
    const cases: Array<{ a: FieldPath; b: FieldPath; r: FieldPath }> = [
      { a: new FieldPath(), b: new FieldPath(), r: new FieldPath() },
      { a: FieldPath.from('foo'), b: new FieldPath(), r: FieldPath.from('foo') },
      { a: FieldPath.from('foo', 'bar'), b: new FieldPath(), r: FieldPath.from('foo', 'bar') },
      { a: FieldPath.from('foo', 'bar'), b: FieldPath.from('baz'), r: FieldPath.from('foo', 'bar', 'baz') },
      { a: FieldPath.from('foo'), b: FieldPath.from('bar', 'baz'), r: FieldPath.from('foo', 'bar', 'baz') },
      { a: new FieldPath(), b: FieldPath.from('bar', 'baz'), r: FieldPath.from('bar', 'baz') },
    ];
    for (const c of cases) {
      expect(c.a.concat(c.b.parts)).toEqual(c.r);
    }
  });

  test('parent', () => {
    const cases: Array<{ a: FieldPath; r: FieldPath | null }> = [
      { a: new FieldPath(), r: null },
      { a: FieldPath.from('foo'), r: new FieldPath() },
      { a: FieldPath.from('foo', 'bar'), r: FieldPath.from('foo') },
      { a: FieldPath.from('foo', 'bar', 'baz'), r: FieldPath.from('foo', 'bar') },
    ];
    for (const c of cases) expect(c.a.parent()).toEqual(c.r);
  });

  test('copy/equal/new', () => {
    const cases: FieldPath[] = [
      new FieldPath(),
      FieldPath.from('foo'),
      FieldPath.from('foo', 'bar'),
      FieldPath.from('foo', 'bar', 'baz'),
    ];
    for (const a of cases) {
      const cp = a.copy();
      expect(cp.equals(a)).toBe(true);
      const rebuilt = new FieldPath(a.parts.map((p) => new FieldKey(p.value)));
      expect(rebuilt.equals(a)).toBe(true);
      if (a.length > 0) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(a.at(0)?.value).toBe(a.parts[0]!.value);
      }
    }
  });

  test('equal matrix', () => {
    const paths: FieldPath[] = [
      new FieldPath(),
      FieldPath.from('foo'),
      FieldPath.from('bar'),
      FieldPath.from('foo', 'foo'),
      FieldPath.from('foo', 'bar'),
      FieldPath.from('foo', 'baz'),
      FieldPath.from('foe', 'bar'),
      FieldPath.from('foe', 'baz'),
      FieldPath.from('foo', 'bar', 'baz'),
      FieldPath.from('foo', 'bae', 'baz'),
      FieldPath.from('foe', 'bar', 'baz'),
      FieldPath.from('foo', 'bar', 'bax'),
      FieldPath.from('foo', 'foo', 'bar'),
      FieldPath.from('foo', 'foo', 'baz'),
      FieldPath.from('foo', 'foo', 'foo'),
    ];
    for (const A of paths) {
      for (const B of paths) {
        expect(A.equals(B)).toBe(
          A.parts.length === B.parts.length && A.parts.every((p, i) => p.value === B.parts[i]!.value)
        );
      }
    }
  });

  test('toMask/marshal', () => {
    const cases: Array<{ fp: FieldPath; res: string }> = [
      { fp: new FieldPath(), res: '' },
      { fp: FieldPath.from('foo'), res: 'foo' },
      { fp: FieldPath.from('foo', 'bar'), res: 'foo.bar' },
      { fp: FieldPath.from('foo', 'bar', 'baz'), res: 'foo.bar.baz' },
      { fp: FieldPath.from('foo.bar'), res: '"foo.bar"' },
      { fp: FieldPath.from('foo.bar', 'baz'), res: '"foo.bar".baz' },
    ];
    for (const c of cases) expect(c.fp.marshal()).toBe(c.res);
  });

  test('isPrefixOf', () => {
    const cases: Array<{ a: FieldPath; b: FieldPath; res: boolean }> = [
      { a: new FieldPath(), b: new FieldPath(), res: false },
      { a: FieldPath.from('foo'), b: new FieldPath(), res: false },
      { a: FieldPath.from('foo'), b: FieldPath.from('bar'), res: false },
      { a: FieldPath.from('foo', 'baz'), b: FieldPath.from('foo', 'bar'), res: false },
      { a: FieldPath.from('foo', 'baz', 'abc'), b: FieldPath.from('foo', 'bar', 'abc', 'def'), res: false },
      { a: FieldPath.from('baz', 'foo'), b: FieldPath.from('bar', 'foo', 'abc', 'def'), res: false },
      { a: FieldPath.from('baz', 'foo', 'abc'), b: FieldPath.from('bar', 'foo', 'abc', 'def'), res: false },
      { a: FieldPath.from('bar', 'foo', ''), b: FieldPath.from('bar', 'foo', 'abc', 'def'), res: false },
      { a: new FieldPath(), b: FieldPath.from('foo'), res: true },
      { a: FieldPath.from('bar'), b: FieldPath.from('bar', 'foo'), res: true },
      { a: FieldPath.from('bar', 'baz'), b: FieldPath.from('bar', 'baz', 'foo'), res: true },
      { a: new FieldPath(), b: FieldPath.from('foo', 'bar', 'baz'), res: true },
      { a: FieldPath.from('bar'), b: FieldPath.from('bar', 'foo', 'baz'), res: true },
      { a: FieldPath.from('bar', 'baz'), b: FieldPath.from('bar', 'baz', 'foo', 'abc'), res: true },
      { a: FieldPath.from('bar'), b: FieldPath.from('bar', 'baz', 'foo', 'abc'), res: true },
      { a: new FieldPath(), b: FieldPath.from('bar', 'baz', 'foo', 'abc'), res: true },
    ];
    for (const c of cases) expect(c.a.isPrefixOf(c.b)).toBe(c.res);
  });
});
