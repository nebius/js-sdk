import { TokenSanitizer } from './token_sanitizer';
import type { AuthorizationOptions } from './authorization/provider';
import util from 'node:util';
 
// A bearer token with optional expiration time
export class Token {
  private readonly _tok: string;
  private readonly _exp?: Date;

  constructor(token: string, expiration?: Date) {
    this._tok = token ?? '';
    this._exp = expiration;
  }

  [util.inspect.custom](): string {
    return this.toString();
  }

  toString(): string {
    if (this.isEmpty()) return 'Token(empty)';
    const parts: string[] = ['Token('];
    const sanitizer = TokenSanitizer.accessTokenSanitizer();
    parts.push(sanitizer.sanitize(this._tok));
    if (this._exp) {
      parts.push(`, expiration=${this._exp.toISOString()}`);
    }
    parts.push(')');
    return parts.join('');
  }

  static empty(): Token {
    return new Token('');
  }

  get token(): string {
    return this._tok;
  }

  get expiration(): Date | undefined {
    return this._exp;
  }

  isEmpty(): boolean {
    return this._tok === '';
  }

  isExpired(): boolean {
    if (!this._exp) return false;
    return Date.now() >= this._exp.getTime();
  }

  toJSON(): { token: string; expires_at: number | null } {
    return {
      token: this._tok,
      expires_at: this._exp ? Math.floor(this._exp.getTime() / 1000) : null,
    };
  }

  static fromJSON(data: any): Token {
    const tok = typeof data?.token === 'string' ? data.token : '';
    const expSec = data?.expires_at;
    const exp = typeof expSec === 'number' && expSec > 0 ? new Date(expSec * 1000) : undefined;
    return new Token(tok, exp);
  }

  equals(other: unknown): boolean {
    if (!(other instanceof Token)) return false;
    const a = this._exp?.getTime();
    const b = other._exp?.getTime();
    return this._tok === other._tok && a === b;
  }
}

// A receiver fetches tokens (and may cache the latest)
export abstract class Receiver {
  protected _latest: Token | undefined;

  protected abstract _fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token>;

  get latest(): Token | undefined {
    return this._latest;
  }

  async fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const tok = await this._fetch(timeoutMs, options);
    this._latest = tok;
    return tok;
  }

  abstract canRetry(err: unknown, options?: AuthorizationOptions | undefined): boolean;
}

// Bearer is a factory for Receivers (e.g., static, file-based, service account, etc.)
export abstract class Bearer {
  abstract receiver(): Receiver;

  get name(): string | undefined {
    return undefined;
  }

  get wrapped(): Bearer | undefined {
    return undefined;
  }

  async close(_graceMs?: number): Promise<void> {
    const w = this.wrapped as any;
    if (w && typeof w.close === 'function') {
      await w.close(_graceMs);
    }
  }
}

// Helper to label a bearer without changing behavior
export class NamedBearer extends Bearer {
  constructor(private readonly _wrapped: Bearer, private readonly _name: string) {
    super();
  }

  get wrapped(): Bearer | undefined {
    return this._wrapped;
  }

  get name(): string | undefined {
    return this._name;
  }

  receiver(): Receiver {
    return this._wrapped.receiver();
  }
}
