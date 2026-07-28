import { inspect } from 'util';

import { TokenSanitizer } from './token_sanitizer.js';
import { custom, customJson, inspectJson } from './util/logging.js';

import type { AuthorizationOptions } from './authorization/provider.js';

/**
 * Contains an access token and its optional expiration time.
 *
 * Keep the {@link Token.token} value secret. {@link Token.toString} and the SDK
 * logging helpers mask signatures and long payloads in recognized formats. A
 * short `v0` payload can remain visible. The {@link Token.token} getter and
 * {@link Token.toJSON} always return the original value.
 *
 * @example Inspect token state without reading the credential value
 * ```ts
 * import { Token } from '@nebius/js-sdk/runtime/token';
 *
 * const token = new Token(process.env.NEBIUS_TOKEN ?? '');
 * if (token.isEmpty() || token.isExpired()) {
 *   throw new Error('A valid access token is required');
 * }
 * console.log({ expiresAt: token.expiration });
 * ```
 */
export class Token {
  /** Contains the fully qualified runtime type name. */
  public readonly $type: 'nebius.iam.AccessToken' = 'nebius.iam.AccessToken';
  private readonly _tok: string;
  private readonly _exp?: Date;

  /**
   * Creates a token.
   *
   * An omitted expiration means that the SDK cannot determine when the token
   * expires. It does not make the token valid forever.
   */
  constructor(token: string, expiration?: Date) {
    this._tok = token ?? '';
    this._exp = expiration;
  }

  [custom](): string {
    return this.toString();
  }

  /** Returns a safer log value. A short `v0` payload can remain visible. */
  [customJson](): object {
    const sanitizer = TokenSanitizer.accessTokenSanitizer();
    return {
      token: sanitizer.sanitize(this._tok),
      expires_at: this._exp?.toISOString() ?? null,
    };
  }

  /** Returns a diagnostic string. A short `v0` payload can remain visible. */
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

  /** Returns an empty token. */
  static empty(): Token {
    return new Token('');
  }

  /** Returns the original token value. Treat the result as a secret. */
  get token(): string {
    return this._tok;
  }

  /** Returns the token expiration time. */
  get expiration(): Date | undefined {
    return this._exp;
  }

  /** Returns whether the token value is empty. */
  isEmpty(): boolean {
    return this._tok === '';
  }

  /**
   * Reports whether the known expiration time has passed.
   *
   * Returns `false` when the token has no expiration time.
   */
  isExpired(): boolean {
    if (!this._exp) return false;
    return Date.now() >= this._exp.getTime();
  }

  /**
   * Converts the token to its cache representation.
   *
   * The returned object contains the unmasked token. Store it only in a
   * protected location.
   */
  toJSON(): { token: string; expires_at: number | null } {
    return {
      token: this._tok,
      expires_at: this._exp ? Math.floor(this._exp.getTime() / 1000) : null,
    };
  }

  /** Restores a token from the representation returned by {@link Token.toJSON}. */
  static fromJSON(data: { token?: string; expires_at?: number | null }): Token {
    const tok = typeof data?.token === 'string' ? data.token : '';
    const expSec = data?.expires_at;
    const exp = typeof expSec === 'number' && expSec > 0 ? new Date(expSec * 1000) : undefined;
    return new Token(tok, exp);
  }

  /** Returns whether two tokens contain the same value. */
  equals(other: unknown): boolean {
    if (!(other instanceof Token)) return false;
    const a = this._exp?.getTime();
    const b = other._exp?.getTime();
    return this._tok === other._tok && a === b;
  }
}

/**
 * Gets access tokens from one configured credential source.
 *
 * Applications normally pass a {@link Bearer} to the
 * {@link https://nebius.github.io/js-sdk/classes/sdk.SDK.html | SDK} and do not
 * create a receiver directly. The SDK creates one receiver for an
 * authentication flow. Each successful {@link Receiver.fetch} call updates
 * {@link Receiver.latest}.
 */
export abstract class Receiver {
  /** Contains the fully qualified runtime type name. */
  public abstract readonly $type: string;
  protected _latest: Token | undefined;

  protected abstract _fetch(
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<Token>;

  /** Returns the last successfully fetched token, or `undefined` before the first success. */
  get latest(): Token | undefined {
    return this._latest;
  }

  /**
   * Fetches a token and stores it as {@link Receiver.latest}.
   *
   * `timeoutMs` is a budget for sources that support timeouts. The source can
   * reject when it cannot get a token within this budget.
   */
  async fetch(timeoutMs?: number, options?: AuthorizationOptions | undefined): Promise<Token> {
    const tok = await this._fetch(timeoutMs, options);
    this._latest = tok;
    return tok;
  }

  /**
   * Reports whether authentication can retry after an error.
   *
   * The authorization interceptor calls this method. Application code should
   * not implement its own retry loop around {@link Receiver.fetch} unless it
   * owns the flow.
   */
  abstract canRetry(err: unknown, options?: AuthorizationOptions | undefined): boolean;
}

/**
 * Describes a credential source and creates receivers for it.
 *
 * Use a concrete bearer such as
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_static.StaticBearer.html | StaticBearer},
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_file.FileBearer.html | FileBearer},
 * or
 * {@link https://nebius.github.io/js-sdk/classes/runtime_token_service_account.ServiceAccountBearer.html | ServiceAccountBearer}.
 * Pass that bearer as
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#credentials | SDKOptions.credentials}.
 * A bearer can own timers or other resources, so close the SDK when the
 * application shuts down.
 */
export abstract class Bearer {
  /** Contains the fully qualified runtime type name. */
  public abstract readonly $type: string;
  /** Creates a token receiver. */
  abstract receiver(): Receiver;

  /**
   * Returns the stable credential name used by file-backed token caches.
   *
   * Most bearers do not have a name. Wrappers can add one with
   * {@link NamedBearer}.
   */
  get name(): string | undefined {
    return undefined;
  }

  /** Returns the next bearer in a wrapper chain, when this bearer wraps another source. */
  get wrapped(): Bearer | undefined {
    return undefined;
  }

  /** Returns the provider name for authorization metrics. */
  get metricProvider(): string {
    const namedProvider = this.name?.split('/')[0];
    if (namedProvider) return namedProvider;
    return this.wrapped?.metricProvider ?? this.$type;
  }

  /** Stops owned background work and closes the wrapped bearer. */
  async close(graceMs?: number): Promise<void> {
    await this.wrapped?.close(graceMs);
  }
}

/**
 * Adds a stable name to another bearer without changing how it gets tokens.
 *
 * Names identify entries in shared token caches. Do not put access tokens,
 * private keys, or other secrets in a name.
 */
export class NamedBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.NamedBearer';
  /** Creates a named wrapper. Receivers still come from the wrapped bearer. */
  constructor(
    private readonly _wrapped: Bearer,
    private readonly _name: string,
  ) {
    super();
  }
  [custom](): string {
    return `${this.$type}(name=${this._name}, wrapped=${inspect(this._wrapped)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      name: this._name,
      wrapped: inspectJson(this._wrapped),
    };
  }

  /** Returns the wrapped bearer. */
  get wrapped(): Bearer | undefined {
    return this._wrapped;
  }

  /** Returns the credential name. */
  get name(): string | undefined {
    return this._name;
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    return this._wrapped.receiver();
  }
}
