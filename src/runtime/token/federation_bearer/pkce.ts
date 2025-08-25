import { randomBytes, createHash } from 'crypto';

export function generatePkceCodeVerifier(): string {
  const buf = randomBytes(32);
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export class PKCE extends String {
  constructor() {
    super(generatePkceCodeVerifier());
  }

  get challenge(): string {
    const hash = createHash('sha256').update(this.toString(), 'utf8').digest();
    return Buffer.from(hash)
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  get method(): string {
    return 'S256';
  }
  get verifier(): string {
    return this.toString();
  }
}
