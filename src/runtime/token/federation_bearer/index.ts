import type { AuthorizationOptions } from '../../authorization/provider';
import { Bearer, Receiver, Token } from '../../token';
import { TokenSanitizer } from '../../token_sanitizer';
import { custom, customJson, Logger } from '../../util/logging';

import { authorize } from './auth';

class FederationReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.FederationReceiver';
  constructor(
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
    private readonly logger?: Logger,
  ) {
    super();
  }
  [custom](): string {
    return `${this.$type}(clientId=${this.clientId}, federationEndpoint=${this.federationEndpoint}, federationId=${this.federationId}, noBrowserOpen=${this.noBrowserOpen})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      noBrowserOpen: this.noBrowserOpen,
      writer: this.writer ? 'provided' : 'none',
      ca: this.ca ? 'provided' : 'none',
    };
  }

  protected async _fetch(
    timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const start = Date.now();
    this.logger?.debug('receiver._fetch: start', { timeoutMs, start });
    const res = await authorize({
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      writer: this.writer,
      noBrowserOpen: this.noBrowserOpen,
      timeoutMs:
        timeoutMs === undefined ? undefined : Math.max(0, timeoutMs - (Date.now() - start)),
      ca: this.ca,
      logger: this.logger?.child('auth'),
    });
    this.logger?.trace('receiver._fetch: authorize result', {
      expires_in: res?.expires_in,
      access_token: TokenSanitizer.accessTokenSanitizer().sanitize(res?.access_token),
    });
    if (!res || typeof res.access_token !== 'string' || typeof res.expires_in !== 'number') {
      throw new Error('invalid token response');
    }
    const expiration =
      res.expires_in > 0 ? new Date(Date.now() + res.expires_in * 1000) : undefined;
    const tok = new Token(res.access_token, expiration);
    this.logger?.debug('receiver._fetch: received token', { token: tok });
    return tok;
  }

  canRetry(_err: unknown, _options?: AuthorizationOptions | undefined): boolean {
    this.logger?.debug('receiver.canRetry -> false');
    return false;
  }
}

export class FederationBearer extends Bearer {
  public readonly $type = 'nebius.sdk.FederationBearer';
  private readonly logger?: Logger;
  constructor(
    private readonly profileName: string,
    private readonly clientId: string,
    private readonly federationEndpoint: string,
    private readonly federationId: string,
    private readonly writer?: (s: string) => void,
    private readonly noBrowserOpen: boolean = false,
    private readonly ca?: Buffer,
    logger?: Logger,
  ) {
    super();
    this.logger = logger?.withFields({
      profile: profileName,
      federationEndpoint,
      federationId,
      clientId,
    });
    this.logger?.trace('bearer: created');
  }
  [custom](): string {
    return `${this.$type}(profileName=${this.profileName}, clientId=${this.clientId}, federationEndpoint=${this.federationEndpoint}, federationId=${this.federationId}, noBrowserOpen=${this.noBrowserOpen})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      profileName: this.profileName,
      clientId: this.clientId,
      federationEndpoint: this.federationEndpoint,
      federationId: this.federationId,
      noBrowserOpen: this.noBrowserOpen,
    };
  }

  get name(): string | undefined {
    return `federation/${this.federationEndpoint}/${this.federationId}/${this.profileName}`;
  }

  receiver(): Receiver {
    this.logger?.trace('bearer.receiver');
    return new FederationReceiver(
      this.clientId,
      this.federationEndpoint,
      this.federationId,
      this.writer,
      this.noBrowserOpen,
      this.ca,
      this.logger,
    );
  }
}
