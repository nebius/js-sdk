import { FieldKey } from '../runtime/fieldmask';

describe('Go FieldKey compatibility', () => {
  test('simple marshal', () => {
    const fk = new FieldKey('Simple_Key_123');
    expect(fk.marshal()).toBe('Simple_Key_123');
  });

  test('quoted marshal', () => {
    const val = 'Key\t\twith spaces, commas, and: ".\\_-!@$%^"';
    const fk = new FieldKey(val);
    // Should be valid JSON string for non-simple keys
    expect(fk.marshal()).toBe(JSON.stringify(val));
  });

  test('marshal/unmarshal text', () => {
    const fk = new FieldKey('Simple_Key_123');
    const bb = JSON.stringify(fk.value); // Go MarshalText equivalent
    const n = FieldKey.unmarshal(bb);
    expect(n.value).toBe(fk.value);
  });

  test('unmarshal errors', () => {
    expect(() => FieldKey.unmarshal('"unterminated')).toThrow();
    expect(() => FieldKey.unmarshal('bad key with space')).toThrow();
  });
});
