import { inspect } from 'util';

import type { AuthorizationOptions } from '../authorization/provider.js';
import { Bearer, Receiver, Token } from '../token.js';
import { custom, customJson, inspectJson } from '../util/logging.js';

/** Reports that a token environment variable is empty. */
export class NoTokenInEnvError extends Error {}

class StaticReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.StaticReceiver';
  constructor(private _token: Token) {
    super();
    this._latest = _token;
  }

  [custom](): string {
    return `StaticReceiver(token=${inspect(this._token)})`;
  }
  [customJson](): unknown {
    return {
      type: 'StaticReceiver',
      token: inspectJson(this._token),
    };
  }

  protected async _fetch(
    _timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    if (!this._token) throw new Error('Token has to be set');
    return this._token;
  }

  canRetry(_err: unknown): boolean {
    return false;
  }
}

/**
 * Provides one fixed access token.
 *
 * This bearer does not renew the token and does not retry authentication.
 * Prefer a renewable credential source for long-running applications.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { StaticBearer } from '@nebius/js-sdk/runtime/token/static';
 *
 * const sdk = new SDK({
 *   credentials: new StaticBearer(process.env.NEBIUS_TOKEN ?? ''),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class StaticBearer extends Bearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type: string = 'nebius.sdk.StaticBearer';
  private _tok: Token;
  /** Creates a bearer for a non-empty token string or {@link Token}. */
  constructor(token: Token | string) {
    super();
    this._tok = typeof token === 'string' ? new Token(token) : token;
    if (this._tok.token === '') throw new Error('empty token provided');
  }
  [custom](): string {
    return `${this.$type}(token=${inspect(this._tok)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      token: inspectJson(this._tok),
    };
  }

  /** Creates a token receiver. */
  receiver(): Receiver {
    return new StaticReceiver(this._tok);
  }
}

/**
 * Reads one fixed access token from an environment variable.
 *
 * The constructor reads the variable immediately. It throws
 * {@link NoTokenInEnvError} when the variable is missing or empty.
 */
export class EnvBearer extends StaticBearer {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.EnvBearer';
  /** Reads the token from `envVarName`, which defaults to `NEBIUS_TOKEN`. */
  constructor(envVarName: string = 'NEBIUS_TOKEN') {
    const val = process.env[envVarName] ?? '';
    if (val === '') throw new NoTokenInEnvError(`no token in env ${envVarName}`);
    super(val);
  }
}
