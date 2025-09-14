import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

import { Config } from '../runtime/cli_config';
import { FederatedCredentialsBearer } from '../runtime/token/federated_credentials';
import { ServiceAccountBearer } from '../runtime/token/service_account';

function withTempHome(tmp: string, fn: () => void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try {
    fn();
  } finally {
    process.env.HOME = oldHome;
  }
}

describe('Config service account variants', () => {
  test('uses federated-subject-credentials-file-path + service-account-id', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-sa-variants1');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      const fcPath = join(tmpDir, 'fc.txt');
      writeFileSync(fcPath, 'test-credentials\n');
      writeFileSync(
        join(tmpDir, '.nebius', 'config.yaml'),
        `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-123
    auth-type: service account
    service-account-id: sa-123
    federated-subject-credentials-file-path: ${fcPath}
default: prod
`,
      );
      const cfg = new Config({ clientId: 'client-123' });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(FederatedCredentialsBearer);
    });
  });

  test('uses service-account-credentials-file-path (JSON)', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-sa-variants2');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      const credPath = join(tmpDir, 'sa_creds.json');
      const pem = '-----BEGIN PRIVATE KEY-----\nTEST\n-----END PRIVATE KEY-----\n';
      const json = {
        'subject-credentials': {
          type: 'JWT',
          alg: 'RS256',
          'private-key': pem,
          kid: 'pk-abc',
          iss: 'sa-xyz',
          sub: 'sa-xyz',
        },
      };
      writeFileSync(credPath, JSON.stringify(json));
      writeFileSync(
        join(tmpDir, '.nebius', 'config.yaml'),
        `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-123
    auth-type: service account
    service-account-credentials-file-path: ${credPath}
default: prod
`,
      );
      const cfg = new Config({ clientId: 'client-123' });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(ServiceAccountBearer);
    });
  });

  test('uses private-key-file-path with service-account-id + public-key-id', () => {
    const tmpDir = join(process.cwd(), '.tmp-home-sa-variants3');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      const pkPath = join(tmpDir, 'pk.pem');
      writeFileSync(pkPath, '-----BEGIN PRIVATE KEY-----\nTEST\n-----END PRIVATE KEY-----\n');
      writeFileSync(
        join(tmpDir, '.nebius', 'config.yaml'),
        `
profiles:
  prod:
    endpoint: my-endpoint.net
    parent-id: project-123
    auth-type: service account
    service-account-id: sa-123
    public-key-id: pk-abc
    private-key-file-path: ${pkPath}
default: prod
`,
      );
      const cfg = new Config({ clientId: 'client-123' });
      const cred = cfg.getCredentials();
      expect(cred).toBeInstanceOf(ServiceAccountBearer);
    });
  });

  afterAll(() => {
    const paths = [
      '.tmp-home-sa-variants1',
      '.tmp-home-sa-variants2',
      '.tmp-home-sa-variants3',
    ].map((p) => join(process.cwd(), p));
    for (const tmpDir of paths) {
      if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
    }
  });
});
