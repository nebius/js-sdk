import { inspect } from 'util';

import type { Metadata } from '@grpc/grpc-js';

import { Bearer, Receiver, Token } from '../token.js';
import { custom, customJson, inspectJson } from '../util/logging.js';

import type { Authenticator, AuthorizationOptions, Provider } from './provider.js';

const HEADER = 'authorization';

/**
 * Fetches a token and adds it as an HTTP `Authorization: Bearer …` value.
 *
 * The authenticator mutates the supplied gRPC metadata. A fetch error rejects
 * authentication before the RPC starts.
 */
export class TokenAuthenticator implements Authenticator {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.TokenAuthenticator';
  [custom](): string {
    return `${this.$type}(receiver=${inspect(this.receiver)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      receiver: inspectJson(this.receiver),
    };
  }
  /** Creates an authenticator that fetches tokens from `receiver`. */
  constructor(private readonly receiver: Receiver) {}

  /** Adds authorization data to the request metadata. */
  async authenticate(
    metadata: Metadata,
    timeoutMs?: number,
    options?: AuthorizationOptions | undefined,
  ): Promise<void> {
    const tok: Token = await this.receiver.fetch(timeoutMs, options);
    metadata.add(HEADER, `Bearer ${tok.token}`);
  }

  /** Returns whether the retry is allowed. */
  canRetry(err: unknown, options?: AuthorizationOptions | undefined): boolean {
    return this.receiver.canRetry(err, options);
  }
}

/**
 * Adapts a {@link Bearer} to the SDK authorization-provider interface.
 *
 * @example Use a custom bearer with the SDK
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { TokenProvider } from '@nebius/js-sdk/runtime/authorization/token';
 * import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';
 *
 * const sdk = new SDK({
 *   credentials: new TokenProvider(new EnvBearer()),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class TokenProvider implements Provider {
  /** Contains the fully qualified runtime type name. */
  public readonly $type = 'nebius.sdk.TokenProvider';
  [custom](): string {
    return `${this.$type}(tokenProvider=${inspect(this.tokenProvider)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): unknown {
    return {
      type: this.$type,
      tokenProvider: inspectJson(this.tokenProvider),
    };
  }
  /** Creates a provider for the supplied credential source. */
  constructor(private readonly tokenProvider: Bearer) {}
  /** Returns the configured authenticator. */
  authenticator(): Authenticator {
    return new TokenAuthenticator(this.tokenProvider.receiver());
  }
  /** Closes the bearer and its wrapped resources, including renewal timers. */
  async close(graceMs?: number | undefined): Promise<void> {
    await this.tokenProvider.close(graceMs);
  }
}
