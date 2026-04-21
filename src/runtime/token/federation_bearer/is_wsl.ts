import * as fs from 'node:fs';

export function isWsl(): boolean {
  try {
    const data = fs.readFileSync('/proc/version', 'utf8').toLowerCase();
    return data.includes('microsoft') || data.includes('wsl');
  } catch {
    return false;
  }
}
