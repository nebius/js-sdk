import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';
import { FederationAccountBearer } from '../runtime/token/federation_account';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { fn(); } finally { process.env.HOME = oldHome; }
}

describe('Config federation profile', () => {
  test('returns FederationAccountBearer', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-fed');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
    auth-type: federation
    federation-endpoint: https://example.com/fed
    federation-id: my-fed
default: prod
`);
      const cfg = new Config({ clientId: 'client-123' });
      const cred = cfg.getCredentials({ writer: () => {}, noBrowserOpen: true, timeoutMs: 1000 });
      expect(cred).toBeInstanceOf(FederationAccountBearer);
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-fed');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
