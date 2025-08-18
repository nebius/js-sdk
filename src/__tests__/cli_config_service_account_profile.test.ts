import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';
import { ServiceAccountBearer } from '../runtime/token/service_account';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try { fn(); } finally { process.env.HOME = oldHome; }
}

describe('Config service account profile', () => {
  test('returns ServiceAccountBearer', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-sa');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      writeFileSync(join(tmpDir, '.nebius', 'config.yaml'), `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
    auth-type: service account
    service-account-id: sa-123
    public-key-id: kid-456
    private-key: |
      -----BEGIN PRIVATE KEY-----
      MIIEv...
      -----END PRIVATE KEY-----
default: prod
`);
      const cfg = new Config({ clientId: 'client-123' });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(ServiceAccountBearer);
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-sa');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
