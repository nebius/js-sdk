import { readFileSync, existsSync, statSync } from 'fs';
import { resolve } from 'path';

function readIfExists(filePath: string): Buffer | undefined {
  try {
    const p = resolve(filePath);
    if (!existsSync(p)) return undefined;
    const st = statSync(p);
    if (!st.isFile() || st.size === 0) return undefined;
    return readFileSync(p);
  } catch {
    return undefined;
  }
}

/**
 * Best-effort loading of system root CAs from common locations.
 * Also respects NODE_EXTRA_CA_CERTS and SSL_CERT_FILE if set.
 * Returns a PEM bundle Buffer or undefined if none found.
 */
export function getSystemRootCAs(): Buffer | undefined {
  const chunks: Buffer[] = [];

  // Environment-provided CA bundle path
  const envFiles: (string | undefined)[] = [
    process.env.NODE_EXTRA_CA_CERTS,
    process.env.SSL_CERT_FILE,
  ];
  for (const f of envFiles) {
    if (!f) continue;
    const buf = readIfExists(f);
    if (buf && buf.length > 0) chunks.push(buf);
  }

  // Common distro paths
  const candidates = [
    // Debian/Ubuntu
    '/etc/ssl/certs/ca-certificates.crt',
    // RHEL/CentOS/Fedora/Amazon Linux
    '/etc/pki/tls/certs/ca-bundle.crt',
    '/etc/ssl/certs/ca-bundle.crt',
    '/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem',
    // SUSE
    '/etc/ssl/ca-bundle.pem',
    // Alpine, macOS (macOS path may not exist on Linux but harmless to try)
    '/etc/ssl/cert.pem',
  ];
  for (const p of candidates) {
    const buf = readIfExists(p);
    if (buf && buf.length > 0) {
      chunks.push(buf);
      break; // first hit is enough (bundles already aggregate)
    }
  }

  if (chunks.length === 0) return undefined;
  return Buffer.concat(chunks);
}

/**
 * Normalize user-provided roots:
 * - Buffer: returned as-is
 * - string: treated as path to PEM bundle
 * - string[]: each treated as path; concatenated in order
 */
export function normalizeRootCAs(input?: Buffer | string | string[]): Buffer | undefined {
  if (!input) return undefined;
  if (Buffer.isBuffer(input)) return input;
  if (typeof input === 'string') return readIfExists(input);
  if (Array.isArray(input)) {
    const bufs = input
      .map((p) => (typeof p === 'string' ? readIfExists(p) : undefined))
      .filter((b): b is Buffer => !!b && b.length > 0);
    if (bufs.length === 0) return undefined;
    return Buffer.concat(bufs);
  }
  return undefined;
}
