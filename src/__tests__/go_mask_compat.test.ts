import { FieldKey, FieldPath, Mask, parseFieldMask } from '../runtime/fieldmask';

describe('Go Mask compatibility', () => {
  test('isEmpty', () => {
    expect(new Mask().isEmpty()).toBe(true);
    const m = new Mask(null, new Map());
    expect(m.isEmpty()).toBe(true);
    const m2 = new Mask();
    m2.any = new Mask();
    expect(m2.isEmpty()).toBe(false);
    const m3 = new Mask();
    m3.fieldParts.set('k', new Mask());
    expect(m3.isEmpty()).toBe(false);
  });

  test('marshal basics and recursion guard', () => {
    const infinite = new Mask();
    infinite.any = infinite; // cycle
    expect(() => infinite.marshal()).toThrow('recursion too deep');

    const a = new Mask();
    expect(a.marshal()).toBe('');

    const b = new Mask();
    b.any = new Mask();
    expect(b.marshal()).toBe('*');

    const c = new Mask();
    c.fieldParts.set('test', new Mask());
    expect(c.marshal()).toBe('test');

    const d = new Mask();
    d.any = new Mask();
    d.fieldParts.set('test', new Mask());
    expect(d.marshal()).toBe('*,test');

    const e = new Mask();
    e.any = new Mask();
    e.any.any = new Mask();
    expect(e.marshal()).toBe('*.*');

    const f = new Mask();
    const finner = new Mask();
    f.fieldParts.set('test', finner);
    finner.fieldParts.set('inner', new Mask());
    expect(f.marshal()).toBe('test.inner');

    const g = new Mask();
    const ginner = new Mask();
    g.fieldParts.set('test.inner', ginner);
    ginner.fieldParts.set('inner', new Mask());
    expect(g.marshal()).toBe('"test.inner".inner');
  });

  test('marshal complex grouping and quoting', () => {
    const m = new Mask();
    const any1 = new Mask();
    const any2 = new Mask();
    any2.fieldParts.set('a', new Mask());
    any2.fieldParts.set('b', new Mask());
    const c = new Mask();
    c.any = new Mask();
    const d = new Mask();
    d.fieldParts.set('e', new Mask());
    d.fieldParts.set('f', new Mask());
    const g = new Mask();
    g.any = new Mask();
    g.any.fieldParts.set('h', new Mask());
    g.any.fieldParts.set('i', new Mask());
    g.fieldParts.set('j', new Mask());
    g.fieldParts.set('k', new Mask());
    any2.fieldParts.set('c', c);
    any2.fieldParts.set('d', d);
    any2.fieldParts.set('g', g);
    m.any = new Mask();
    m.any.any = any2;
    m.fieldParts.set('l', new Mask());
    m.fieldParts.set('m', new Mask());
    const n = new Mask();
    n.any = new Mask();
    m.fieldParts.set('n', n);
    const o = new Mask();
    o.fieldParts.set('p', new Mask());
    o.fieldParts.set('q', new Mask());
    m.fieldParts.set('o', o);
    const r = new Mask();
    r.any = new Mask();
    r.any.fieldParts.set('s', new Mask());
    r.any.fieldParts.set('t', new Mask());
    const u = new Mask();
    u.any = new Mask(); // make it u.*
    r.fieldParts.set('u', u);
    r.fieldParts.set('v', new Mask());
    m.fieldParts.set('r', r);
    expect(m.marshal()).toBe(
      '*.*.(a,b,c.*,d.(e,f),g.(*.(h,i),j,k)),l,m,n.*,o.(p,q),r.(*.(s,t),u.*,v)',
    );
  });

  test('equals and copy', () => {
    const some = parseFieldMask('*,test');
    const cp = some.copy();
    expect(cp.equals(some)).toBe(true);
    // mutate copy only
    cp.fieldParts.set('x', new Mask());
    expect(some.fieldParts.has('x')).toBe(false);
  });

  test('merge', () => {
    const a = parseFieldMask('a');
    const b = parseFieldMask('*,b');
    a.merge(b);
    expect(a.marshal()).toBe('*,a,b');
  });

  test('toFieldPath', () => {
    expect(parseFieldMask('').toFieldPath()?.marshal()).toBe('');
    expect(parseFieldMask('a').toFieldPath()?.marshal()).toBe('a');
    expect(parseFieldMask('a.b').toFieldPath()?.marshal()).toBe('a.b');
    expect(parseFieldMask('a.(b,c)').toFieldPath()).toBeNull();
  });

  test('getSubMask and getSubMaskByPath', () => {
    const m = parseFieldMask('a.(b,c),*.x');
    const a = m.getSubMask('a');
    expect(a?.marshal()).toBe('b,c');
    const any = m.getSubMask('*');
    expect(any?.marshal()).toBe('x');
    const p = FieldPath.from('a', 'b');
    expect(m.getSubMaskByPath(p)?.marshal()).toBe('');
  });
});
