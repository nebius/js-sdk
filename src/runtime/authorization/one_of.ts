/**
 * Selects a named authorization provider for each request.
 *
 * @packageDocumentation
 */

import type { Authenticator, AuthorizationOptions, Provider } from './provider.js';

/** Selects exactly one named authorization provider for each RPC. */
export class OneOfProvider implements Provider {
  private readonly providers: Map<string, Provider | null>;

  /** Null entries allow explicitly selected requests without authorization. */
  constructor(providers: Readonly<Record<string, Provider | null>>) {
    const entries = Object.entries(providers);
    if (!entries.length) throw new Error('At least one credential source is required.');
    if (entries.some(([, provider]) => provider instanceof OneOfProvider)) {
      throw new Error('Nested credential selectors are not supported.');
    }
    this.providers = new Map(entries);
  }

  /** Selects the provider named by options.selector; a null entry skips authorization. */
  authenticator(options?: AuthorizationOptions): Authenticator {
    const selector = options?.selector;
    if (selector === undefined) throw new Error('Missing authorization selector.');
    if (!this.providers.has(selector)) {
      throw new Error(`Unknown authorization selector ${JSON.stringify(selector)}.`);
    }
    return this.providers.get(selector)?.authenticator(options) ?? { authenticate: async () => {} };
  }

  /** Closes each distinct provider and rejects with AggregateError if any close fails. */
  async close(graceMs?: number): Promise<void> {
    const providers = new Set(this.providers.values());
    const results = await Promise.allSettled(
      Array.from(providers, (provider) => Promise.resolve().then(() => provider?.close?.(graceMs))),
    );
    const failures = results
      .filter((result) => result.status === 'rejected')
      .map((result) => result.reason);
    if (failures.length) throw new AggregateError(failures, 'Credential sources failed to close.');
  }
}
