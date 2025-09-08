import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';

export class NoTokenInEnvError extends Error {}

class StaticReceiver extends Receiver {
  constructor(private _token: Token) {
    super();
    this._latest = _token;
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
  private _tok: Token;
  constructor(token: Token | string) {
    super();
    this._tok = typeof token === 'string' ? new Token(token) : token;
    if (this._tok.token === '') throw new Error('empty token provided');
  }

  receiver(): Receiver {
    return new StaticReceiver(this._tok);
  }
}

export class EnvBearer extends StaticBearer {
  constructor(envVarName: string = 'NEBIUS_TOKEN') {
    const val = process.env[envVarName] ?? '';
    if (val === '') throw new NoTokenInEnvError(`no token in env ${envVarName}`);
    super(val);
  }
}
