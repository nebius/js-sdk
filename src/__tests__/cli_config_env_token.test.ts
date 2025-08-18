import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';
import { EnvBearer } from '../runtime/token/static';

// Helper to set HOME for tests
function withTempHome(tmp: string, fn: () => Promise<void> | void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { return fn() as any; } finally { process.env.HOME = oldHome; }
}

describe('Config env token', () => {
  test('loads EnvBearer from NEBIUS_IAM_TOKEN', async () => {
    const tmpDir = join(process.cwd(), '.tmp-home-env');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    await withTempHome(tmpDir, async () => {
      process.env.NEBIUS_IAM_TOKEN = 'my-token';
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  default:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
default: default
`);

      const cfg = new Config({ clientId: 'foo' });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(EnvBearer);
      // fetch token
      const receiver = (cred as EnvBearer).receiver();
      const tok = await receiver.fetch();
      expect(tok.token).toBe('my-token');
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-env');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
