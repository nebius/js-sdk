import { Bearer, Receiver, Token } from '../../token';
import type { AuthorizationOptions } from '../../authorization/provider';
import { authorize } from './auth';

class FederationReceiver extends Receiver {
  constructor(
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
  ) { super(); }

  protected async _fetch(timeoutMs?: number, _options?: AuthorizationOptions | undefined): Promise<Token> {
    const start = Date.now();
    const res = await authorize({
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      writer: this.writer,
      noBrowserOpen: this.noBrowserOpen,
      timeoutMs: timeoutMs === undefined ? undefined : Math.max(0, timeoutMs - (Date.now() - start)),
    });
    if (!res || typeof res.access_token !== 'string' || typeof res.expires_in !== 'number')
      throw new Error('invalid token response');
    const expiration = res.expires_in > 0 ? new Date(Date.now() + res.expires_in * 1000) : undefined;
    return new Token(res.access_token, expiration);
  }

  canRetry(_err: unknown, _options?: AuthorizationOptions | undefined): boolean { return false; }
}

export class FederationBearer extends Bearer {
  constructor(
    private readonly profileName: string,
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
  ) { super(); }

  get name(): string | undefined {
    return `federation/${this.federationEndpoint}/` +
      `${this.federationId}/${this.profileName}`;
  }

  receiver(): Receiver {
    return new FederationReceiver(this.clientId, this.federationEndpoint, this.federationId, this.writer, this.noBrowserOpen);
  }
}
