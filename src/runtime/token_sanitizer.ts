export const MASK_STRING = '**';
export const MAX_VISIBLE_PAYLOAD_LENGTH = 15;
export const NO_SIGNATURE = -1;

export class TokenVersion {
  constructor(
    public readonly prefix: string,
    public readonly delimiter: string,
    public readonly signaturePosition: number,
    public readonly tokenPartsCount: number,
  ) {}
}

export const ACCESS_TOKEN_VERSIONS: Record<string, TokenVersion> = {
  V0: new TokenVersion('v0.', '.', NO_SIGNATURE, 1),
  NE1: new TokenVersion('ne1', '.', 1, 2),
};

export const CREDENTIALS_VERSIONS: Record<string, TokenVersion> = {
  ...ACCESS_TOKEN_VERSIONS,
  DE1: new TokenVersion('nd1', '.', 1, 2),
  JWT: new TokenVersion('eyJ', '.', 2, 3),
};

export interface TokenVersionExtractor {
  extract(token: string): [TokenVersion, boolean];
}

export class DefaultTokenVersionExtractor implements TokenVersionExtractor {
  constructor(private readonly versions: Record<string, TokenVersion>) {}
  extract(token: string): [TokenVersion, boolean] {
    for (const ver of Object.values(this.versions)) {
      if (token.startsWith(ver.prefix)) return [ver, true];
    }
    return [new TokenVersion('', '', NO_SIGNATURE, 0), false];
  }
}

export class TokenSanitizer {
  constructor(private readonly extractor: TokenVersionExtractor) {}

  static accessTokenSanitizer(): TokenSanitizer {
    return new TokenSanitizer(new DefaultTokenVersionExtractor(ACCESS_TOKEN_VERSIONS));
  }

  static credentialsSanitizer(): TokenSanitizer {
    return new TokenSanitizer(new DefaultTokenVersionExtractor(CREDENTIALS_VERSIONS));
  }

  sanitize(token: string | undefined | null): string {
    if (!token) return '';
    const [version, recognized] = this.extractor.extract(token);
    if (!recognized) return sanitizeUnrecognized(token);

    const tokenParts = token.split(version.delimiter);
    if (version.signaturePosition === NO_SIGNATURE) {
      return sanitizeNoSignature(token, version.prefix);
    }
    if (tokenParts.length <= version.signaturePosition) {
      return sanitizeUnrecognized(token);
    }
    tokenParts[version.signaturePosition] = MASK_STRING;
    return tokenParts.join(version.delimiter);
  }

  isSupported(token: string | undefined | null): boolean {
    if (!token) return false;
    const [version, recognized] = this.extractor.extract(token);
    if (!recognized) return false;
    const parts = token.split(version.delimiter);
    return parts.length >= version.tokenPartsCount;
  }
}

export function sanitizeNoSignature(token: string, prefix: string): string {
  const payload = token.slice(prefix.length);
  if (payload.length <= MAX_VISIBLE_PAYLOAD_LENGTH) return token;
  return token.slice(0, MAX_VISIBLE_PAYLOAD_LENGTH + prefix.length) + MASK_STRING;
}

export function sanitizeUnrecognized(token: string): string {
  if (token.length <= MAX_VISIBLE_PAYLOAD_LENGTH) return token + MASK_STRING;
  return token.slice(0, MAX_VISIBLE_PAYLOAD_LENGTH) + MASK_STRING;
}
