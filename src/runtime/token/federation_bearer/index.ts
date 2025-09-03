import type { AuthorizationOptions } from '../../authorization/provider';
import { Bearer, Receiver, Token } from '../../token';

import { authorize } from './auth';

// Debug helper (toggle or pipe to your logger)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dbg = (..._args: any[]) => {};

class FederationReceiver extends Receiver {
  constructor(
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
  ) {
    super();
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const start = Date.now();
    dbg('receiver._fetch: start', { timeoutMs, noBrowserOpen: this.noBrowserOpen });
    const res = await authorize({
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      writer: this.writer,
      noBrowserOpen: this.noBrowserOpen,
      timeoutMs:
        timeoutMs === undefined ? undefined : Math.max(0, timeoutMs - (Date.now() - start)),
      ca: this.ca,
    });
    dbg('receiver._fetch: authorize result', {
      expires_in: res?.expires_in,
      has_access_token: !!res?.access_token,
    });
    if (!res || typeof res.access_token !== 'string' || typeof res.expires_in !== 'number') {
      throw new Error('invalid token response');
    }
    const expiration =
      res.expires_in > 0 ? new Date(Date.now() + res.expires_in * 1000) : undefined;
    const tok = new Token(res.access_token, expiration);
    dbg('receiver._fetch: built token', tok);
    return tok;
  }

  canRetry(_err: unknown, _options?: AuthorizationOptions | undefined): boolean {
    dbg('receiver.canRetry -> false');
    return false;
  }
}

export class FederationBearer extends Bearer {
  constructor(
    private readonly profileName: string,
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
  ) {
    super();
  }

  get name(): string | undefined {
    return `federation/${this.federationEndpoint}/${this.federationId}/${this.profileName}`;
  }

  receiver(): Receiver {
    dbg('bearer.receiver');
    return new FederationReceiver(
      this.clientId,
      this.federationEndpoint,
      this.federationId,
      this.writer,
      this.noBrowserOpen,
      this.ca,
    );
  }
}
