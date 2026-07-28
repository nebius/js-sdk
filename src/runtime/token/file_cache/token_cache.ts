import { FileHandle, mkdir, open } from 'fs/promises';
import { dirname } from 'path';

import * as fsExt from 'fs-ext';
import * as YAML from 'yaml';

import { defaultConfigDir, defaultCredentialsFile } from '../../constants.js';
import { Token } from '../../token.js';
import { custom, customJson, Logger } from '../../util/logging.js';
import { resolveHomeDir } from '../../util/path.js';

/** Configures the process-safe YAML access-token cache. */
export interface TokenCacheOptions {
  /** Path to the YAML cache file. A leading `~` resolves to the home directory. */
  cacheFile?: string;
  /** POSIX mode for a newly created cache file. Defaults to `0o600`. */
  fileCreateMode?: number;
  /**
   * Optional destination for diagnostic events.
   *
   * Token diagnostic values are partly masked, but a short `v0` payload can
   * remain visible.
   */
  logger?: Logger;
}

/**
 * Stores named access tokens in a process-safe YAML file.
 *
 * Operations use POSIX file locks, so cooperating SDK processes can share the
 * file without overwriting each other. Expired tokens are not returned and are
 * removed on the next write. The file contains unmasked credentials and must
 * be protected.
 *
 * @example
 * ```ts
 * import { TokenCache } from '@nebius/js-sdk/runtime/token/file_cache/token_cache';
 *
 * const cache = new TokenCache({
 *   cacheFile: '~/.config/my-app/credentials.yaml',
 * });
 * const token = await cache.get('developer-profile');
 * ```
 */
export class TokenCache {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.TokenCache';
  private cacheFile: string;
  private fileCreateMode: number;
  private logger?: Logger;

  /** Creates a cache. A new file uses owner-only mode (`0o600`) by default. */
  constructor(options?: TokenCacheOptions) {
    const cachePath = options?.cacheFile ?? `${defaultConfigDir}/${defaultCredentialsFile}`;
    this.cacheFile = resolveHomeDir(cachePath);
    this.fileCreateMode = options?.fileCreateMode ?? 0o600;
    this.logger = options?.logger?.withFields({ cacheFile: this.cacheFile }) ?? undefined;
  }
  [custom](): string {
    return `${this.$type}(cacheFile=${this.cacheFile})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      cacheFile: this.cacheFile,
    };
  }

  // Acquire a POSIX flock on a file descriptor
  private async flock(fd: number, flag: number): Promise<void> {
    const logger = this.logger?.withFields({ fd, flag }) ?? undefined;
    logger?.trace('Acquire flock');
    await new Promise<void>((resolve, reject) => {
      fsExt.flock(fd, flag, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          logger?.trace('Failed to acquire flock', { err });
          reject(err);
        } else {
          logger?.trace('Flock acquired');
          resolve();
        }
      });
    });
  }

  private parseYaml(data: string): Record<string, Token> {
    this.logger?.trace(`Parsing YAML data`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc = YAML.parse(data) || ({} as any);
    if (typeof doc !== 'object' || doc === null) throw new Error('Invalid YAML: expected object');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tokensObj = (doc as any).tokens || {};
    if (typeof tokensObj !== 'object' || tokensObj === null) {
      throw new Error('Invalid YAML tokens: expected object');
    }
    const out: Record<string, Token> = {};
    for (const [k, v] of Object.entries(tokensObj)) {
      out[k] = Token.fromJSON(v as { token?: string; expires_at?: number | null });
    }
    this.logger?.trace(`Parsed tokens from YAML`, { amount: Object.keys(out).length });
    return out;
  }

  private dumpYaml(tokens: Record<string, Token>): string {
    this.logger?.trace(`Dumping tokens to YAML`, { amount: Object.keys(tokens).length });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toks: Record<string, any> = {};
    for (const [k, t] of Object.entries(tokens)) {
      if (!t.isExpired()) toks[k] = t.toJSON();
    }
    if (Object.keys(toks).length === 0) {
      this.logger?.trace(`No tokens to dump, returning empty YAML`);
      return YAML.stringify({});
    }
    this.logger?.trace(`Dumped tokens to YAML`, { amountAfterFiltering: Object.keys(toks).length });
    return YAML.stringify({ tokens: toks });
  }

  /** Returns a named, unexpired token, or `undefined` when it is absent or expired. */
  async get(name: string): Promise<Token | undefined> {
    const logger = this.logger?.withFields({ name }) ?? undefined;
    logger?.trace('Getting token from cache');
    let fh: FileHandle | undefined;
    try {
      fh = await open(this.cacheFile, 'r');
      logger?.trace('Cache file opened for reading');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) {
        logger?.trace('Cache file does not exist');
        return undefined;
      }
      throw e;
    }

    try {
      await this.flock(fh.fd, fsExt.constants.LOCK_SH);
      const content = await fh.readFile('utf8');
      const map = this.parseYaml(content);
      const token = map[name];
      if (!token) {
        logger?.trace('Token not found in cache');
        return undefined;
      }
      if (token.isExpired()) {
        logger?.trace('Token in cache is expired', { token });
        return undefined;
      }
      logger?.trace('Token retrieved from cache', { token });
      return token;
    } finally {
      try {
        logger?.trace('Releasing lock on cache file');
        await this.flock(fh.fd, fsExt.constants.LOCK_UN);
      } catch (err) {
        logger?.error('Failed to release lock on cache file', { err });
      }
      await fh.close().catch((err) => {
        logger?.error('Failed to close cache file', { err });
      });
    }
  }

  /** Stores or replaces a named token while preserving other entries. */
  async set(name: string, token: Token): Promise<void> {
    const logger = this.logger?.withFields({ name, token }) ?? undefined;
    logger?.trace('Setting token in cache');
    const dir = dirname(this.cacheFile);
    logger?.trace('Ensuring cache directory exists', { dir });
    await mkdir(dir, { recursive: true, mode: 0o750 });

    const fh = await open(this.cacheFile, 'a+', this.fileCreateMode);
    try {
      logger?.trace('Cache file opened for writing');
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        logger?.trace('Reading cache file');
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
        logger?.trace('Cache file does not exist, will create new');
      }

      map[name] = token;
      logger?.trace('Writing updated tokens to cache file', { total: Object.keys(map).length });
      const yaml = this.dumpYaml(map);

      logger?.trace('Truncating and writing to cache file');
      await fh.truncate(0);
      await fh.writeFile(yaml, 'utf8');
    } finally {
      try {
        logger?.trace('Releasing lock on cache file');
        await this.flock(fh.fd, fsExt.constants.LOCK_UN);
      } catch (err) {
        logger?.error('Failed to release lock on cache file', { err });
      }
      await fh.close().catch((err) => {
        logger?.error('Failed to close cache file', { err });
      });
    }
  }

  /** Removes a named token. Missing files and entries are accepted. */
  async remove(name: string): Promise<void> {
    const logger = this.logger?.withFields({ name }) ?? undefined;
    logger?.trace('Removing token from cache');
    let fh: FileHandle;
    try {
      logger?.trace('Opening cache file for removal');
      fh = await open(this.cacheFile, 'r+');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) {
        logger?.trace('Cache file does not exist, nothing to remove');
        return;
      }
      throw e;
    }

    try {
      logger?.trace('Acquiring exclusive lock for removal');
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        logger?.trace('Reading cache file for removal');
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
        logger?.trace('Cache file does not exist, nothing to remove');
        return;
      }

      logger?.trace('Removing token and updating cache file');
      delete map[name];
      const yaml = this.dumpYaml(map);
      logger?.trace('Truncating and writing updated tokens to cache file', {
        total: Object.keys(map).length,
      });
      await fh.truncate(0);
      await fh.writeFile(yaml, 'utf8');
    } finally {
      try {
        await this.flock(fh.fd, fsExt.constants.LOCK_UN);
      } catch (err) {
        logger?.error('Failed to release lock on cache file', { err });
      }
      await (fh as FileHandle).close().catch((err) => {
        logger?.error('Failed to close cache file', { err });
      });
    }
  }

  /**
   * Removes a named token only when both its value and expiration match.
   *
   * This compare-and-remove operation avoids deleting a newer token written by
   * another process.
   */
  async removeIfEqual(name: string, token: Token): Promise<boolean> {
    const logger = this.logger?.withFields({ name, token }) ?? undefined;
    logger?.trace('Removing token from cache if equal to provided token');
    let fh: FileHandle;
    try {
      logger?.trace('Opening cache file for conditional removal');
      fh = await open(this.cacheFile, 'r+');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) {
        logger?.trace('Cache file does not exist, nothing to remove');
        return false;
      }
      throw e;
    }

    try {
      logger?.trace('Acquiring exclusive lock for conditional removal');
      await this.flock(fh.fd, fsExt.constants.LOCK_EX);

      let map: Record<string, Token> = {};
      try {
        logger?.trace('Reading cache file for conditional removal');
        const content = await fh.readFile('utf8');
        map = content ? this.parseYaml(content) : {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (!(e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))) throw e;
        logger?.trace('Cache file does not exist, nothing to remove');
        return false;
      }

      const existing = map[name];
      if (existing && existing.equals(token)) {
        logger?.trace('Token matches, removing from cache');
        delete map[name];
        const yaml = this.dumpYaml(map);
        await fh.truncate(0);
        await fh.writeFile(yaml, 'utf8');
        return true;
      } else {
        logger?.trace('Token does not match, not removing from cache', { existing });
        return false;
      }
    } finally {
      try {
        logger?.trace('Releasing lock on cache file');
        await this.flock(fh.fd, fsExt.constants.LOCK_UN);
      } catch (err) {
        logger?.error('Failed to release lock on cache file', { err });
      }
      await (fh as FileHandle).close().catch((err) => {
        logger?.error('Failed to close cache file', { err });
      });
    }
  }
}
