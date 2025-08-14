import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';
import { Config } from '../runtime/cli_config';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { fn(); } finally { process.env.HOME = oldHome; }
}

describe('Config from custom file', () => {
  test('loads parent-id from custom config path', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-custom');
    const homeDir = join(tmpDir, 'home');
    mkdirSync(join(homeDir, '.nebius'), { recursive: true });
    const cfgPath = join(tmpDir, 'config.yaml');

    withTempHome(homeDir, () => {
      writeFileSync(cfgPath, `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
default: prod
`);
      const cfg = new Config({ clientId: 'foo', configFile: cfgPath });
      expect(cfg.parentId()).toBe('project-e00some-id');
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-custom');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
