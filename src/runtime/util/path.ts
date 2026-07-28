import os from 'os';
import { sep } from 'path';

/**
 * Expands a leading `~` to the current user's home directory.
 *
 * The function expands only `~` and paths that start with `~/` (or the native
 * separator). It does not expand `~user`, environment variables, or a `~` in
 * the middle of a path. If no home directory is available, it returns the
 * input unchanged.
 *
 * @example
 * ```ts
 * import { resolveHomeDir } from '@nebius/js-sdk/runtime/util/path';
 *
 * resolveHomeDir('~/.nebius/config.yaml');
 * ```
 */
export function resolveHomeDir(path: string): string {
  const home = process.env.HOME || process.env.USERPROFILE || os.homedir();

  if (path === '~') {
    return home || path;
  }

  if (path.startsWith('~/') || path.startsWith(`~${sep}`)) {
    if (home) {
      return home + path.slice(1);
    }
  }

  return path;
}
