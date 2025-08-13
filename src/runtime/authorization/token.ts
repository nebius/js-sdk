import type { Metadata } from '@grpc/grpc-js';
import { Bearer, Receiver, Token } from '../token';
import type { Authenticator, Provider, AuthorizationOptions } from './provider';

const HEADER = 'authorization';

export class TokenAuthenticator implements Authenticator {
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
  constructor(private readonly tokenProvider: Bearer) {}
  authenticator(): Authenticator {
    return new TokenAuthenticator(this.tokenProvider.receiver());
  }
  async close(graceMs?: number | undefined): Promise<void> {
    await this.tokenProvider.close(graceMs);
  }
}
