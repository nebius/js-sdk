import { randomBytes, createHash } from 'crypto';

/** Generates a random URL-safe PKCE code verifier. Treat it as a temporary secret. */
export function generatePkceCodeVerifier(): string {
  const buf = randomBytes(32);
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * Creates a PKCE verifier and its SHA-256 challenge.
 *
 * Send `challenge` and `method` in the authorization request. Send `verifier`
 * only to the token endpoint.
 */
export class PKCE extends String {
  /** Creates a new random verifier. */
  constructor() {
    super(generatePkceCodeVerifier());
  }

  /** Returns the PKCE code challenge. */
  get challenge(): string {
    const hash = createHash('sha256').update(this.toString(), 'utf8').digest();
    return Buffer.from(hash)
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  /** Returns the PKCE challenge method. */
  get method(): string {
    return 'S256';
  }
  /** Returns the PKCE code verifier. */
  get verifier(): string {
    return this.toString();
  }
}
