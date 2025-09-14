import os from 'os';
import { sep } from 'path';

export function resolveHomeDir(path: string): string {
  // handle bare ~ and ~/
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
