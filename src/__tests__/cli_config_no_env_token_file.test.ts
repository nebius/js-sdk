import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';
import { FileBearer } from '../runtime/token/file';

function withTempHome(tmp: string, fn: () => Promise<void> | void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { const r = fn(); return r; } finally { process.env.HOME = oldHome; }
}

describe('Config no_env flag', () => {
  test('ignores env and uses token-file when noEnv=true', async () => {
    const tmpDir = join(process.cwd(), '.tmp-home-noenv');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    await withTempHome(tmpDir, async () => {
      process.env.NEBIUS_IAM_TOKEN = 'wrong-token';
      writeFileSync(join(tmpDir, 'token.txt'), 'my-token\n');
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  default:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
    token-file: ${join(tmpDir, 'token.txt')}
default: default
`);

      const cfg = new Config({ clientId: 'foo', noEnv: true });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(FileBearer);
      const receiver = (cred as FileBearer).receiver();
      const tok = await receiver.fetch();
      expect(tok.token).toBe('my-token');
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-noenv');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
