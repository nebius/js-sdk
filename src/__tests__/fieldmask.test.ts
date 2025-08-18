/* Jest tests ported from Python tests/test_fieldmask.py (subset & equivalents) */
import { FieldKey, FieldPath, Mask, parseFieldMask } from '../runtime/fieldmask';

function FK(s: string) { return new FieldKey(s); }

describe('FieldKey', () => {
  test('marshal/unmarshal', () => {
    expect(new FieldKey('Simple_Key_123').marshal()).toBe('Simple_Key_123');
    expect(FieldKey.unmarshal('Simple_Key_123').toString()).toBe('Simple_Key_123');
    const complex = 'Key\t\twith spaces, commas, and: ".\\_-!@$%^"';
    const marshaled = new FieldKey(complex).marshal();
    expect(marshaled).toBe(JSON.stringify(complex));
    expect(FieldKey.unmarshal(marshaled).toString()).toBe(complex);
  });
});

describe('FieldPath basics', () => {
  test('join/concat', () => {
    const cases: { A: FieldPath; B: FieldPath; R: FieldPath }[] = [
      { A: new FieldPath([]), B: new FieldPath([]), R: new FieldPath([]) },
      { A: new FieldPath(['foo']), B: new FieldPath([]), R: new FieldPath(['foo']) },
      { A: new FieldPath(['foo','bar']), B: new FieldPath([]), R: new FieldPath(['foo','bar']) },
      { A: new FieldPath(['foo','bar']), B: new FieldPath(['baz']), R: new FieldPath(['foo','bar','baz']) },
      { A: new FieldPath(['foo']), B: new FieldPath(['bar','baz']), R: new FieldPath(['foo','bar','baz']) },
      { A: new FieldPath([]), B: new FieldPath(['bar','baz']), R: new FieldPath(['bar','baz']) },
    ];
    for (const c of cases) {
      expect(c.A.concat(c.B.parts)).toEqual(c.R);
    }
  });

  test('parent', () => {
    const cases = [
      { A: new FieldPath([]), R: null },
      { A: new FieldPath(['foo']), R: new FieldPath([]) },
      { A: new FieldPath(['foo','bar']), R: new FieldPath(['foo']) },
      { A: new FieldPath(['foo','bar','baz']), R: new FieldPath(['foo','bar']) },
    ];
    for (const c of cases) {
      const p = c.A.parent();
      // eslint-disable-next-line jest/no-conditional-expect
      if (!c.R) expect(p).toBeNull(); else expect(p).toEqual(c.R);
    }
  });

  test('copy and equality', () => {
    const paths = [
      new FieldPath([]),
      new FieldPath(['foo']),
      new FieldPath(['bar']),
      new FieldPath(['foo','foo']),
      new FieldPath(['foo','bar']),
      new FieldPath(['foo','baz']),
      new FieldPath(['foe','bar']),
      new FieldPath(['foe','baz']),
      new FieldPath(['foo','bar','baz']),
      new FieldPath(['foo','bae','baz']),
      new FieldPath(['foe','bar','baz']),
      new FieldPath(['foo','bar','bax']),
      new FieldPath(['foo','foo','bar']),
      new FieldPath(['foo','foo','baz']),
      new FieldPath(['foo','foo','foo']),
    ];
    for (const a of paths) {
      const b = a.copy();
      expect(b).not.toBe(a);
      expect(b).toEqual(a);
    }
    // isPrefixOf
    expect(new FieldPath(['a']).isPrefixOf(new FieldPath(['a','b']))).toBe(true);
    expect(new FieldPath(['a','b']).isPrefixOf(new FieldPath(['a']))).toBe(false);
    expect(new FieldPath(['a']).isPrefixOf(new FieldPath(['x','b']))).toBe(false);
  });
});

describe('Mask marshal/parse', () => {
  test('parse simple', () => {
    const m = parseFieldMask('a.b, c, "weird.key".*');
    expect(m.subMask(new FieldPath(['a','b']))).not.toBeNull();
    expect(m.subMask(new FieldPath(['c']))).not.toBeNull();
    expect(m.subMask(new FieldPath([FK('weird.key')]))).not.toBeNull();
    // wildcard branch exists and is reachable via getSubMask/getSubMaskByPath
    const weird = m.subMask('weird.key');
    expect(weird?.any).not.toBeNull();
    const weirdChild = m.subMask(new FieldPath([FK('weird.key'), '*'] as any));
    expect(weirdChild).not.toBeNull();
  });

  test('marshal leaves', () => {
    const m = new Mask();
    m.addPath(['a','b']).addPath(['c']).addPath(['weird.key','*' as any]);
    const s = m.marshal();
    // Order is locale-independent sorted; go-compatible output with parentheses when needed
    expect(s).toBe('"weird.key".*,a.b,c');
  });
});
