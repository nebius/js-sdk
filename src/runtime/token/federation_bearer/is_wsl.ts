import * as fs from 'node:fs';

/** Returns whether the process runs in Windows Subsystem for Linux. */
export function isWsl(): boolean {
  try {
    const data = fs.readFileSync('/proc/version', 'utf8').toLowerCase();
    return data.includes('microsoft') || data.includes('wsl');
  } catch {
    return false;
  }
}
