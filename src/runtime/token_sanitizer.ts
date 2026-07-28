/** Contains the text that replaces sensitive token data. */
export const MASK_STRING = '**';
/** Contains the maximum number of visible payload characters. */
export const MAX_VISIBLE_PAYLOAD_LENGTH = 15;
/** Identifies a token format that has no signature. */
export const NO_SIGNATURE = -1;

/** Describes the sensitive part of a recognized token format. */
export class TokenVersion {
  /** Creates a new token version. */
  constructor(
    /** Contains the prefix. */ public readonly prefix: string,
    /** Contains the delimiter. */ public readonly delimiter: string,
    /** Contains the signature position. */ public readonly signaturePosition: number,
    /** Contains the token parts count. */ public readonly tokenPartsCount: number,
  ) {}
}

/** Contains the supported access-token formats. */
export const ACCESS_TOKEN_VERSIONS: Record<string, TokenVersion> = {
  V0: new TokenVersion('v0.', '.', NO_SIGNATURE, 1),
  NE1: new TokenVersion('ne1', '.', 1, 2),
};

/** Contains the supported credential formats. */
export const CREDENTIALS_VERSIONS: Record<string, TokenVersion> = {
  ...ACCESS_TOKEN_VERSIONS,
  DE1: new TokenVersion('nd1', '.', 1, 2),
  JWT: new TokenVersion('eyJ', '.', 2, 3),
};

/** Defines the token version extractor API. */
export interface TokenVersionExtractor {
  /** Extracts the token format. */
  extract(token: string): [TokenVersion, boolean];
}

export class DefaultTokenVersionExtractor implements TokenVersionExtractor {
  /** Creates a new default token version extractor. */
  constructor(private readonly versions: Record<string, TokenVersion>) {}
  /** Extracts the token format. */
  extract(token: string): [TokenVersion, boolean] {
    for (const ver of Object.values(this.versions)) {
      if (token.startsWith(ver.prefix)) return [ver, true];
    }
    return [new TokenVersion('', '', NO_SIGNATURE, 0), false];
  }
}

/**
 * Produces a diagnostic token representation with sensitive data partly
 * masked.
 *
 * Sanitizing reduces accidental disclosure in logs, but it is not an
 * encryption or access-control boundary. A recognized short `v0` payload can
 * remain visible. Avoid logging tokens when possible.
 *
 * @example
 * ```ts
 * import { TokenSanitizer } from '@nebius/js-sdk/runtime/token_sanitizer';
 *
 * const safe = TokenSanitizer.accessTokenSanitizer().sanitize(accessToken);
 * logger.debug('received token', { token: safe });
 * ```
 */
export class TokenSanitizer {
  /** Creates a new token sanitizer. */
  constructor(private readonly extractor: TokenVersionExtractor) {}

  /** Creates a sanitizer for supported access-token formats. */
  static accessTokenSanitizer(): TokenSanitizer {
    return new TokenSanitizer(new DefaultTokenVersionExtractor(ACCESS_TOKEN_VERSIONS));
  }

  /** Creates a sanitizer for supported credential formats. */
  static credentialsSanitizer(): TokenSanitizer {
    return new TokenSanitizer(new DefaultTokenVersionExtractor(CREDENTIALS_VERSIONS));
  }

  /**
   * Masks the signature or a long payload for a recognized token format.
   *
   * A short no-signature payload can remain unchanged. Unknown formats keep at
   * most the first 15 characters. Empty inputs return an empty string.
   */
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

  /** Returns whether the sanitizer supports the token format. */
  isSupported(token: string | undefined | null): boolean {
    if (!token) return false;
    const [version, recognized] = this.extractor.extract(token);
    if (!recognized) return false;
    const parts = token.split(version.delimiter);
    return parts.length >= version.tokenPartsCount;
  }
}

/**
 * Shortens a token format that has no signature.
 *
 * When the payload after `prefix` has 15 characters or fewer, this function
 * returns the complete token and leaves the payload visible.
 */
export function sanitizeNoSignature(token: string, prefix: string): string {
  const payload = token.slice(prefix.length);
  if (payload.length <= MAX_VISIBLE_PAYLOAD_LENGTH) return token;
  return token.slice(0, MAX_VISIBLE_PAYLOAD_LENGTH + prefix.length) + MASK_STRING;
}

/**
 * Shortens a token with an unknown format.
 *
 * Tokens with 15 characters or fewer remain fully visible before the mask
 * marker. Do not use this function as an access-control boundary.
 */
export function sanitizeUnrecognized(token: string): string {
  if (token.length <= MAX_VISIBLE_PAYLOAD_LENGTH) return token + MASK_STRING;
  return token.slice(0, MAX_VISIBLE_PAYLOAD_LENGTH) + MASK_STRING;
}
