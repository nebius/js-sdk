import { existsSync, readFileSync, statSync } from 'fs';
import { resolve } from 'path';

import { Logger } from '../util/logging';

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
export function getSystemRootCAs(logger: Logger): Buffer | undefined {
  const chunks: Buffer[] = [];

  // Environment-provided CA bundle path
  const envVars: string[] = ['NODE_EXTRA_CA_CERTS', 'SSL_CERT_FILE'];
  for (const varName of envVars) {
    const f = process.env[varName];
    if (!f) continue;
    logger.trace('Checking environment-provided CA bundle', {
      file: f,
      env: varName,
    });
    const buf = readIfExists(f);
    if (buf && buf.length > 0) {
      chunks.push(buf);
      logger.debug('Loaded environment-provided CA bundle', {
        file: f,
        env: varName,
        size: buf.length,
      });
    }
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
    logger.trace('Checking common CA bundle path', { file: p });
    const buf = readIfExists(p);
    if (buf && buf.length > 0) {
      chunks.push(buf);
      logger.debug('Loaded system CA bundle', { file: p, size: buf.length });
      break; // first hit is enough (bundles already aggregate)
    }
  }

  if (chunks.length === 0) {
    logger.debug('No system root CA bundles found');
    return undefined;
  }
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
