import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

import { CreateTokenResponse, type ExchangeTokenRequest } from '../api/nebius/iam/v1/index.js';
import { Config } from '../runtime/cli_config.js';
import { __private, CachedImpersonatedBearer } from '../runtime/token/impersonated.js';
import { StaticBearer } from '../runtime/token/static.js';

function withTempHome(tmp: string, fn: () => Promise<void> | void) {
  const oldHome = process.env.HOME;
  process.env.HOME = tmp;
  try {
    return fn();
  } finally {
    process.env.HOME = oldHome;
  }
}

describe('Config impersonation', () => {
  test('builds public token-exchange impersonation request', async () => {
    const seen: {
      request: ExchangeTokenRequest;
      options: { authorizationDisable?: boolean };
    }[] = [];
    const svc = {
      exchange: (
        request: ExchangeTokenRequest,
        _metadata: unknown,
        options: { authorizationDisable?: boolean },
      ) => {
        seen.push({ request, options });
        return {
          result: Promise.resolve(
            CreateTokenResponse.create({
              accessToken: 'impersonated-token',
              expiresIn: 3600,
              tokenType: 'Bearer',
            }),
          ),
        };
      },
    };

    const receiver = new __private.ImpersonatedReceiver(
      'target-sa',
      new StaticBearer('actor-token').receiver(),
      svc as never,
    );

    const token = await receiver.fetch();
    expect(token.token).toBe('impersonated-token');
    expect(seen).toHaveLength(1);
    expect(seen[0].options.authorizationDisable).toBe(true);
    expect(seen[0].request).toMatchObject({
      actorToken: 'actor-token',
      actorTokenType: __private.tokenExchangeAccessTokenType,
      grantType: __private.tokenExchangeGrantType,
      requestedTokenType: __private.tokenExchangeAccessTokenType,
      subjectToken: 'target-sa',
      subjectTokenType: __private.tokenExchangeSubjectIdentifierType,
    });
  });

  test('wraps config credentials and constructor impersonation overrides profile', async () => {
    const tmpDir = join(process.cwd(), '.tmp-home-impersonation');
    mkdirSync(join(tmpDir, '.nebius'), { recursive: true });

    await withTempHome(tmpDir, () => {
      delete process.env.NEBIUS_IAM_TOKEN;
      const tokenFile = join(tmpDir, 'token.txt');
      writeFileSync(tokenFile, 'actor-token\n');
      writeFileSync(
        join(tmpDir, '.nebius', 'config.yaml'),
        `
profiles:
  default:
    endpoint: my-endpoint.net
    parent-id: project-e00some-id
    token-file: ${tokenFile}
    impersonate-service-account-id: profile-sa
default: default
`,
      );

      const cfg = new Config({
        clientId: 'foo',
        impersonateServiceAccountId: 'override-sa',
        noEnv: true,
      });
      const sdk = new Promise<never>(() => undefined);
      const cred = cfg.getCredentials({ sdk });
      expect(cred).toBeInstanceOf(CachedImpersonatedBearer);
      expect((cred as CachedImpersonatedBearer).name).toContain('override-sa');
      expect((cred as CachedImpersonatedBearer).name).not.toContain('profile-sa');
    });
  });

  afterAll(() => {
    const tmpDir = join(process.cwd(), '.tmp-home-impersonation');
    if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  });
});
