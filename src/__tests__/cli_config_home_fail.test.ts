import { rmSync, existsSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try {
    fn();
  } finally {
    process.env.HOME = oldHome;
  }
}

describe('Config missing file', () => {
  test('throws when config not found', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-missing');
    withTempHome(tmpDir, () => {
      try {
        new Config({ clientId: 'foo' });
        fail('Expected to throw');
      } catch (e: any) {
        const msg = String(e?.message || e);
        // eslint-disable-next-line jest/no-conditional-expect
        expect(msg.startsWith('Config file ')).toBe(true);
        // eslint-disable-next-line jest/no-conditional-expect
        expect(msg.endsWith('/.nebius/config.yaml not found.')).toBe(true);
      }
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-missing');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
