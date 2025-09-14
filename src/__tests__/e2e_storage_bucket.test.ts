/*
 End-to-end test for storage bucket operations using Nebius TS SDK.

 This test requires one of the following env vars:
 - NEBIUS_E2E_CONFIG_FILE: path to a valid YAML config file
 - NEBIUS_E2E_CONFIG_B64: base64-encoded YAML config content
*/

import { existsSync, mkdtempSync, unlinkSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

import Long from 'long';
import { parse as parseYAML } from 'yaml';

import { ResourceMetadata } from '../api/nebius/common/v1/index';
import {
  BucketService as BucketServiceClient,
  BucketSpec,
  CreateBucketRequest,
  DeleteBucketRequest,
  GetBucketRequest,
  ListBucketsRequest,
  VersioningPolicy,
} from '../api/nebius/storage/v1/index';
import { Config } from '../runtime/cli_config';
import { SDK } from '../sdk';

jest.setTimeout(120_000);

function randomString(len = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function getConfigFilePath(): { path: string | null; isTemp: boolean } {
  const fileEnv = process.env.NEBIUS_E2E_CONFIG_FILE;
  if (fileEnv && existsSync(fileEnv)) return { path: fileEnv, isTemp: false };

  const b64 = process.env.NEBIUS_E2E_CONFIG_B64;
  if (!b64) return { path: null, isTemp: false };

  try {
    const content = Buffer.from(b64, 'base64').toString('utf8');
    // validate YAML
    parseYAML(content);

    const dir = mkdtempSync(join(tmpdir(), 'nebius-e2e-'));
    const p = join(dir, `config-${Date.now()}.yaml`);
    writeFileSync(p, content, 'utf8');
    return { path: p, isTemp: true };
  } catch {
    return { path: null, isTemp: false };
  }
}

const { path: cfgPath, isTemp } = getConfigFilePath();
const maybe = cfgPath ? test : test.skip;

maybe('storage bucket lifecycle (e2e)', async () => {
  if (!cfgPath) {
    console.warn('Skipping e2e: no NEBIUS_E2E_CONFIG_FILE or NEBIUS_E2E_CONFIG_B64 provided');
    return;
  }

  // Build SDK from config
  const config = new Config({
    configFile: cfgPath,
    clientId: process.env.NEBIUS_E2E_CLIENT_ID || 'ts-e2e',
  });
  const sdk = new SDK({ configReader: config });

  // Ensure parentId is available and matches SDK
  const parentId = config.parentId();
  expect(parentId).toBeTruthy();
  expect(parentId).toBe(sdk.parentId());

  const bucketService = new BucketServiceClient(sdk);
  // Common call options: add a per-retry deadline to bound waits on network issues
  // 4 seconds for each request, so cold-start can get through dns
  const callOptions = { deadline: 12000, perRetry: 4000 } as const;
  const withTimeout = async <T>(p: Promise<T>, ms: number, label: string): Promise<T> => {
    let to: NodeJS.Timeout | undefined;
    try {
      return await Promise.race<T>([
        p,
        new Promise<T>((_, rej) => {
          to = setTimeout(
            () => rej(new Error('' + `Timeout: ${label} after ${ms}ms`)),
            ms,
          ).unref?.();
        }),
      ]);
    } finally {
      if (to) clearTimeout(to);
    }
  };

  const bucketName = 'ts-e2e-' + randomString();
  let bucketId: string | null = null;

  try {
    // Create bucket
    const metadata = ResourceMetadata.create({
      name: bucketName,
      parentId: parentId!,
    });
    const spec = BucketSpec.create({
      versioningPolicy: VersioningPolicy.DISABLED,
      maxSizeBytes: Long.fromNumber(4096),
    });
    const createReq = CreateBucketRequest.create({ metadata, spec });

    const createOp = await bucketService.create(createReq, undefined as any, callOptions).result;
    await withTimeout(createOp.wait(), 60_000, 'create bucket wait');
    bucketId = createOp.resourceId();
    expect(bucketId).toBeTruthy();

    // Get bucket by ID
    const getReq = GetBucketRequest.create({ id: bucketId! });
    const bucket = await bucketService.get(getReq, undefined as any, callOptions).result;
    expect(bucket.metadata?.id).toBe(bucketId);
    expect(bucket.metadata?.name).toBe(bucketName);
    expect(bucket.spec?.versioningPolicy).toBe(VersioningPolicy.DISABLED);
    expect(bucket.spec?.maxSizeBytes?.toString()).toBe('4096');

    // List buckets and find our bucket
    const listReq = ListBucketsRequest.create({
      parentId: parentId!,
      pageSize: Long.fromInt(100),
      pageToken: '',
      filter: '',
    });
    const listRes = await bucketService.list(listReq, undefined as any, callOptions as any).result;
    const found = (listRes.items || []).find((b) => b.metadata?.id === bucketId);
    expect(found).toBeTruthy();
    expect(found!.metadata?.name).toBe(bucketName);

    // Delete bucket
    const delReq = DeleteBucketRequest.create({ id: bucketId! });
    const delOp = await bucketService.delete(delReq, undefined as any, callOptions as any).result;
    await withTimeout(delOp.wait(), 60_000, 'delete bucket wait');
    bucketId = null;
  } catch (e) {
    // Try cleanup on failure
    if (bucketId) {
      try {
        const delReq = DeleteBucketRequest.create({ id: bucketId });
        const delOp = await bucketService.delete(delReq, undefined as any, callOptions as any)
          .result;
        await withTimeout(delOp.wait(), 60_000, 'cleanup delete bucket wait');
      } catch (cleanupErr) {
        console.warn('Warning: cleanup failed for bucket', bucketId, cleanupErr);
      }
    }
    throw e;
  } finally {
    await sdk.close();
    if (isTemp && cfgPath && existsSync(cfgPath)) {
      try {
        unlinkSync(cfgPath);
      } catch {
        /* ignore */
      }
    }
  }
});
