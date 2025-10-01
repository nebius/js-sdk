import path from 'node:path';

import { ROOT, requireOur } from './generator_shared.helpers';

export function registerSanitizationTests() {
  describe('Sanitization in [custom]/[customJson]', () => {
    test('masks sensitive and sanitizes credentials in string fields', () => {
      const our: any = requireOur();
      const msg: any = {
        $type: 'nebius.example.test.SanitizeDemo',
        plain: 'hello',
        secret: 'super-secret',
        creds: 'eyJ.header.signature', // looks like JWT (prefix eyJ)
      };
      const s = our.SanitizeDemo as any;
      // attach methods via create
      const inst = s.create(msg);
      const str = inst[require(path.join(ROOT, 'src/runtime/util/logging')).custom]();
      const json = inst[require(path.join(ROOT, 'src/runtime/util/logging')).customJson]();
      const { MASK_STRING } = require(path.join(ROOT, 'src/runtime/token_sanitizer'));

      // [custom] should contain plain value, mask for secret, and sanitized creds
      expect(str).toContain('plain=');
      expect(str).toContain('=***');
      // creds sanitized: since it is recognized as JWT (eyJ..), signature part should be masked
      expect(str).toMatch(/creds=.*\..*\*\*/);

      // [customJson] should produce object with masked/sanitized values
      expect((json as any).type).toBe('nebius.example.test.SanitizeDemo');
      expect((json as any).plain).toBe('hello');
      expect((json as any).secret).toBe('***');
      expect(typeof (json as any).creds).toBe('string');
      expect((json as any).creds.includes(MASK_STRING)).toBe(true);
    });

    test('handles repeated and map credential fields', () => {
      const our: any = requireOur();
      const msg: any = {
        $type: 'nebius.example.test.SanitizeDemo',
        credsList: ['v0.abcdef', 'nd1.payload.signature'],
        credsMap: { k1: 'eyJ.header.sig', k2: 'ne1.payload' },
      };
      const inst = (our.SanitizeDemo as any).create(msg);
      const json = inst[require(path.join(ROOT, 'src/runtime/util/logging')).customJson]();
      const { MASK_STRING } = require(path.join(ROOT, 'src/runtime/token_sanitizer'));

      // list elements sanitized
      expect(Array.isArray((json as any).credsList)).toBe(true);
      // v0.abcdef has no signature and short payload => may remain unchanged
      expect((json as any).credsList[0]).toBe('v0.abcdef');
      // nd1 payload should be sanitized (middle part masked)
      expect(typeof (json as any).credsList[1]).toBe('string');
      expect(((json as any).credsList[1] as string).includes(MASK_STRING)).toBe(true);
      // map values sanitized and keys preserved
      expect(typeof (json as any).credsMap).toBe('object');
      expect(Object.keys((json as any).credsMap).sort()).toEqual(['k1', 'k2']);
      expect((json as any).credsMap.k1.includes(MASK_STRING)).toBe(true);
      expect((json as any).credsMap.k2.includes(MASK_STRING)).toBe(true);
    });
  });
}
