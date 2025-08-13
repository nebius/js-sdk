import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Config, NoParentIdError } from '../runtime/cli_config';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { fn(); } finally { process.env.HOME = oldHome; }
}

describe('Config parent id', () => {
  test('reads parent-id from profile', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-parent');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
default: prod
`);
      const cfg = new Config('foo');
      expect(cfg.parentId()).toBe('project-e00some-id');
    });
  });

  test('throws on missing parent-id', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-no-parent');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  prod:
    endpoint: my-endpoint.net
default: prod
`);
      const cfg = new Config('foo');
      expect(() => cfg.parentId()).toThrow(NoParentIdError);
    });
  });
});
