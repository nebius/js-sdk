import { mkdir, open, FileHandle } from 'fs/promises';
import { dirname, resolve } from 'path';

import * as fsExt from 'fs-ext';
import * as YAML from 'yaml';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants';
import { Token } from '../../token';

export interface TokenCacheOptions {
  cacheFile?: string;
  fileCreateMode?: number;
}

export class TokenCache {
  private cacheFile: string;
  private fileCreateMode: number;

  constructor(options?: TokenCacheOptions) {
    const cachePath = options?.cacheFile ?? `${defaultConfigDir}/${defaultCredentialsFile}`;
    this.cacheFile = expandHome(cachePath);
    this.fileCreateMode = options?.fileCreateMode ?? 0o600;
  }

  // Acquire a POSIX flock on a file descriptor
  private async flock(fd: number, flag: number): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      fsExt.flock(fd, flag, (err: any) => (err ? reject(err) : resolve()));
    });
  }

  private parseYaml(data: string): Record<string, Token> {
    const doc = YAML.parse(data) || {} as any;
    if (typeof doc !== 'object' || doc === null) throw new Error('Invalid YAML: expected object');
    const tokensObj = (doc as any).tokens || {};
    if (typeof tokensObj !== 'object' || tokensObj === null) throw new Error('Invalid YAML tokens: expected object');
    const out: Record<string, Token> = {};
    for (const [k, v] of Object.entries(tokensObj)) {
      out[k] = Token.fromJSON(v as { token?: string; expires_at?: number | null });
    }
    return out;
  }

  private dumpYaml(tokens: Record<string, Token>): string {
    const toks: Record<string, any> = {};
    for (const [k, t] of Object.entries(tokens)) {
      if (!t.isExpired()) toks[k] = t.toJSON();
    }
    if (Object.keys(toks).length === 0) return YAML.stringify({});
    return YAML.stringify({ tokens: toks });
  }

  async get(name: string): Promise<Token | undefined> {
    let fh: FileHandle | undefined;
    try {
      fh = await open(this.cacheFile, 'r');
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return undefined;
      throw e;
    }

    try {
      await this.flock(fh.fd, fsExt.constants.LOCK_SH);
      const content = await fh.readFile('utf8');
      const map = this.parseYaml(content);
      const tok = map[name];
      if (!tok) return undefined;
      return tok.isExpired() ? undefined : tok;
    } finally {
      try { await this.flock(fh.fd, fsExt.constants.LOCK_UN); } catch { /* ignore */ }
      await fh.close().catch(() => undefined);
    }
  }

  async set(name: string, token: Token): Promise<void> {
    const dir = dirname(this.cacheFile);
    await mkdir(dir, { recursive: true, mode: 0o750 });

    const fh = await open(this.cacheFile, 'a+', this.fileCreateMode);
    try {
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
      }

      map[name] = token;
      const yaml = this.dumpYaml(map);

      await fh.truncate(0);
      await fh.writeFile(yaml, 'utf8');
    } finally {
      try { await this.flock(fh.fd, fsExt.constants.LOCK_UN); } catch { /* ignore */ }
      await fh.close().catch(() => undefined);
    }
  }

  async remove(name: string): Promise<void> {
    let fh: FileHandle;
    try {
      fh = await open(this.cacheFile, 'r+');
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return;
      throw e;
    }

    try {
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
      }

      delete map[name];
      const yaml = this.dumpYaml(map);
      await fh.truncate(0);
      await fh.writeFile(yaml, 'utf8');
    } finally {
      try { await this.flock(fh.fd, fsExt.constants.LOCK_UN); } catch { /* ignore */ }
      await (fh as FileHandle).close().catch(() => undefined);
    }
  }

  async removeIfEqual(name: string, token: Token): Promise<void> {
    let fh: FileHandle;
    try {
      fh = await open(this.cacheFile, 'r+');
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return;
      throw e;
    }

    try {
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
      }

      const existing = map[name];
      if (existing && existing.equals(token)) {
        delete map[name];
        const yaml = this.dumpYaml(map);
        await fh.truncate(0);
        await fh.writeFile(yaml, 'utf8');
      }
    } finally {
      try { await this.flock(fh.fd, fsExt.constants.LOCK_UN); } catch { /* ignore */ }
      await (fh as FileHandle).close().catch(() => undefined);
    }
  }
}

function expandHome(p: string): string {
  if (p.startsWith('~/')) return resolve((process.env.HOME || ''), p.slice(2));
  return resolve(p);
}
