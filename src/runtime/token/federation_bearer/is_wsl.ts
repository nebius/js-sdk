export function isWsl(): boolean {
  try {
    const fs = require('fs') as typeof import('fs');
    const data = fs.readFileSync('/proc/version', 'utf8').toLowerCase();
    return data.includes('microsoft') || data.includes('wsl');
  } catch {
    return false;
  }
}
