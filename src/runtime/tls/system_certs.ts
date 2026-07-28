/**
 * Loads PEM certificate bundles for custom gRPC trust configuration.
 *
 * Use {@link getSystemRootCAs} for environment-selected and common system PEM
 * files. Use {@link normalizeRootCAs} for application-provided PEM data or file
 * paths. These helpers do not access platform certificate stores or Node.js
 * built-in roots.
 *
 * @packageDocumentation
 */

import { existsSync, readFileSync, statSync } from 'fs';
import { resolve } from 'path';

import { Logger } from '../util/logging.js';

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
 * Loads system root certificates from common paths.
 *
 * The function first reads every valid path in `NODE_EXTRA_CA_CERTS` and
 * `SSL_CERT_FILE`. It then reads the first common operating-system bundle that
 * exists. It joins all loaded PEM data in that order.
 *
 * This is a PEM-file scan. It does not read the Windows certificate store,
 * the macOS Keychain, or Node.js built-in root certificates.
 *
 * File errors do not stop SDK initialization. The function writes lookup
 * details to the supplied {@link Logger} and returns `undefined` when it cannot
 * read a non-empty bundle.
 *
 * @param logger Receives trace and debug details. The function does not log
 * certificate contents.
 * @returns Concatenated PEM data, or `undefined` when no bundle is available.
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
 * Loads user-supplied root certificates.
 *
 * A `Buffer` contains the certificate data. A string contains a PEM file path.
 * An array contains PEM file paths in concatenation order. The function
 * returns the same `Buffer` instance when the input is a buffer.
 *
 * Missing, empty, and unreadable files are ignored. If no path produces data,
 * the function returns `undefined`; it does not throw.
 *
 * @example
 * ```ts
 * import { Buffer } from 'node:buffer';
 * import { normalizeRootCAs } from '@nebius/js-sdk/runtime/tls/system_certs';
 *
 * const pem = Buffer.from('application-provided PEM data');
 * const roots = normalizeRootCAs(pem);
 * roots === pem; // true
 * ```
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
