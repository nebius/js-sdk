import { inspect } from 'util';

import type { Metadata } from '@grpc/grpc-js';

import { Bearer, Receiver, Token } from '../token';
import { custom, customJson, inspectJson } from '../util/logging';

import type { Authenticator, AuthorizationOptions, Provider } from './provider';

const HEADER = 'authorization';

export class TokenAuthenticator implements Authenticator {
  public readonly $type = 'nebius.sdk.TokenAuthenticator';
  [custom](): string {
    return `${this.$type}(receiver=${inspect(this.receiver)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      receiver: inspectJson(this.receiver),
    };
  }
  constructor(private readonly receiver: Receiver) {}

  async authenticate(
    metadata: Metadata,
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<void> {
    const tok: Token = await this.receiver.fetch(timeoutMs, options);
    metadata.add(HEADER, `Bearer ${tok.token}`);
  }

  canRetry(err: unknown, options?: AuthorizationOptions | undefined): boolean {
    return this.receiver.canRetry(err, options);
  }
}

export class TokenProvider implements Provider {
  public readonly $type = 'nebius.sdk.TokenProvider';
  [custom](): string {
    return `${this.$type}(tokenProvider=${inspect(this.tokenProvider)})`;
  }
  [customJson](): unknown {
    return {
      type: this.$type,
      tokenProvider: inspectJson(this.tokenProvider),
    };
  }
  constructor(private readonly tokenProvider: Bearer) {}
  authenticator(): Authenticator {
    return new TokenAuthenticator(this.tokenProvider.receiver());
  }
  async close(graceMs?: number | undefined): Promise<void> {
    await this.tokenProvider.close(graceMs);
  }
}
