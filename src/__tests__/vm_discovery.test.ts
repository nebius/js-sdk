import fs from 'node:fs';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { Config } from '../runtime/cli_config.js';
import { FileBearer } from '../runtime/token/file.js';
import { IMDSBearer } from '../runtime/token/imds.js';

let directory: string;
beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), 'sdk-vm-discovery-'));
});
afterEach(async () => {
  await rm(directory, { recursive: true, force: true });
});

const options = () => ({ configFile: join(directory, 'config.yaml'), noEnv: true });
const probe = (status: number) =>
  jest
    .fn<ReturnType<typeof fetch>, Parameters<typeof fetch>>()
    .mockResolvedValue(new Response(null, { status }));

test('async loading probes metadata and selects virtual IMDS credentials', async () => {
  const fetcher = probe(200);
  const config = await Config.load(options(), { fetch: fetcher });
  expect(config.profileName()).toBe('virtual');
  expect(config.getCredentials()).toBeInstanceOf(IMDSBearer);
  expect(fetcher).toHaveBeenCalledWith(
    'http://metadata.nebius.internal/v1/iam/sa/token',
    expect.objectContaining({ headers: { Metadata: 'true' }, signal: expect.any(AbortSignal) }),
  );
  expect(() => new Config(options())).toThrow('not found');
});

test('metadata HTTP failures retry before falling back to the mounted token file', async () => {
  const tokenFile = join(directory, 'token');
  await writeFile(tokenFile, 'access-token');
  const fetcher = probe(503);
  const config = await Config.load(options(), { fetch: fetcher, tokenFile });
  expect(fetcher).toHaveBeenCalledTimes(3);
  expect(config.getCredentials()).toBeInstanceOf(FileBearer);
});

test('unavailable metadata and missing mounted credentials preserve missing-config errors', async () => {
  const fetcher = probe(404);
  await expect(Config.load(options(), { fetch: fetcher, tokenFile: directory })).rejects.toThrow(
    'not found',
  );
  expect(fetcher).toHaveBeenCalledTimes(1);
});

test('existing config profiles never probe metadata, including invalid profiles', async () => {
  const fetcher = probe(200);
  await writeFile(
    options().configFile,
    'profiles:\n  main:\n    token-endpoint: http://metadata.example/token\n',
  );
  const config = await Config.load(options(), { fetch: fetcher });
  expect(config.profileName()).toBe('main');
  await writeFile(options().configFile, 'profiles: {}');
  await expect(Config.load(options(), { fetch: fetcher })).rejects.toThrow('No profiles');
  expect(fetcher).not.toHaveBeenCalled();
});

test('configuration access errors do not trigger VM discovery', async () => {
  const fetcher = probe(200);
  const failure = Object.assign(new Error('access denied'), { code: 'EACCES' });
  const stat = jest.spyOn(fs, 'statSync').mockImplementationOnce(() => {
    throw failure;
  });
  try {
    await expect(Config.load(options(), { fetch: fetcher })).rejects.toBe(failure);
    expect(fetcher).not.toHaveBeenCalled();
  } finally {
    stat.mockRestore();
  }
});
