import { inspect } from 'util';

import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { custom, customJson, inspectJson } from '../util/logging';

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

export class StaticBearer extends Bearer {
  public readonly $type: string = 'nebius.sdk.StaticBearer';
  private _tok: Token;
  constructor(token: Token | string) {
    super();
    this._tok = typeof token === 'string' ? new Token(token) : token;
    if (this._tok.token === '') throw new Error('empty token provided');
  }
  [custom](): string {
    return `${this.$type}(token=${inspect(this._tok)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      token: inspectJson(this._tok),
    };
  }

  receiver(): Receiver {
    return new StaticReceiver(this._tok);
  }
}

export class EnvBearer extends StaticBearer {
  public readonly $type = 'nebius.sdk.EnvBearer';
  constructor(envVarName: string = 'NEBIUS_TOKEN') {
    const val = process.env[envVarName] ?? '';
    if (val === '') throw new NoTokenInEnvError(`no token in env ${envVarName}`);
    super(val);
  }
}
