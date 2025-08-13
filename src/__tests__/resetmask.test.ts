import { resetMaskFromMessage } from '../runtime/resetmask';

function msg(v: any) { return v; }

describe('resetMaskFromMessage', () => {
  test('null message', () => {
    expect(resetMaskFromMessage(null)).toBeNull();
    expect(resetMaskFromMessage(undefined as any)).toBeNull();
  });

  test('scalars default are marked', () => {
    const m = msg({ a: 0, b: '', c: false });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('a,b,c');
  });

  test('scalars non-default not marked', () => {
    const m = msg({ a: 1, b: 'x', c: true });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('');
  });

  test('nested object default fields included', () => {
    const m = msg({ user: { name: '', age: 0 } });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('user.age,user.name');
  });

  test('list empty marks field; list of messages recurses into Any', () => {
    const m1 = msg({ items: [] as any[] });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('items');

    const m2 = msg({ items: [{ x: 0 }, { y: '' }] });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('items.*.x,items.*.y');
  });

  test('map empty marks field; map of messages recurses into Any', () => {
    const m1 = msg({ dict: {} as Record<string, any> });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('dict');

    const m2 = msg({ dict: { a: { x: 0 }, b: { y: '' } } });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('dict.*.x,dict.*.y');
  });
});
