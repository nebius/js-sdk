/**
 * Maps generated gRPC service IDs to network endpoints.
 *
 * Use {@link Basic}, {@link Single}, or {@link Prefix} for endpoint overrides.
 * Use {@link Chain} to give overrides a priority order. The SDK normally adds
 * {@link Conventional} and {@link TemplateExpander} itself, so applications do
 * not need to reproduce its default resolver chain.
 *
 * @packageDocumentation
 */

import { inspect } from 'util';

import { custom, customJson, inspectJson } from './util/logging.js';

/**
 * Reports that a resolver has no address for a service ID.
 *
 * A {@link Chain} catches this error and tries its next resolver. Other errors
 * stop the chain.
 */
export class UnknownServiceError extends Error {
  /** Creates a new unknown service error. */
  constructor(id: string) {
    super(`Unknown service: ${id}`);
    this.name = 'UnknownServiceError';
  }
}

/**
 * Resolves a generated gRPC service name to an endpoint.
 *
 * SDK users normally pass a resolver in
 * {@link https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#resolver | SDKOptions.resolver}
 * only when a service must use a custom endpoint. The SDK places that resolver
 * before its conventional Nebius resolver.
 */
export interface Resolver {
  /**
   * Resolves a service ID to an address.
   *
   * @param serviceId Sets the service ID, such as `nebius.compute.v1.InstanceService`.
   * @param apiServiceName Overrides the service-name segment when the generated
   * service has an API annotation.
   * @returns A gRPC target such as `compute.example.test:443`. The address may
   * contain a `{domain}` placeholder when a {@link TemplateExpander} will
   * process it.
   * @throws {@link UnknownServiceError} when the resolver cannot resolve the ID.
   */
  resolve(serviceId: string, apiServiceName?: string): string;
}

/**
 * Resolves one exact service ID or one service-ID prefix.
 *
 * A trailing `*` in `id` selects prefix matching. Any other `*` is treated as
 * normal text.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import { Basic } from '@nebius/js-sdk/runtime/resolver';
 *
 * const sdk = new SDK({
 *   resolver: new Basic('nebius.compute.v1.*', 'localhost:8443'),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * ```
 */
export class Basic implements Resolver {
  private parent: Resolver;

  /**
   * Creates a resolver for one exact ID or ID prefix.
   *
   * @param id A full service ID, or a prefix that ends with `*`.
   * @param address The gRPC target returned for a match.
   */
  constructor(id: string, address: string) {
    if (id.endsWith('*')) {
      this.parent = new Prefix(id.slice(0, -1), address);
    } else {
      this.parent = new Single(id, address);
    }
  }

  [custom](): string {
    return `Basic(${inspect(this.parent)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.BasicResolver',
      parent: inspectJson(this.parent),
    };
  }

  /** Resolves a service ID to an address. */
  resolve(serviceId: string, apiServiceName?: string): string {
    return this.parent.resolve(serviceId, apiServiceName);
  }
}

/**
 * Returns one endpoint for every service.
 *
 * This resolver is useful for a local proxy or a test server that exposes all
 * services through one address.
 */
export class Constant implements Resolver {
  private address: string;
  /** Creates a resolver that always returns one address. */
  constructor(address: string) {
    this.address = address;
  }
  [custom](): string {
    return `Constant(address=${this.address})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.ConstantResolver',
      address: this.address,
    };
  }
  /** Returns the configured address. */
  resolve(_serviceId: string, _apiServiceName?: string): string {
    return this.address;
  }
}

/** Resolves one exact, fully qualified service ID. */
export class Single implements Resolver {
  private id: string;
  private address: string;
  /** Creates a resolver for one exact service ID. */
  constructor(id: string, address: string) {
    this.id = id;
    this.address = address;
  }
  [custom](): string {
    return `Single(id=${this.id}, address=${this.address})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.SingleResolver',
      id: this.id,
      address: this.address,
    };
  }
  /** Resolves the configured service ID to an address. */
  resolve(serviceId: string, _apiServiceName?: string): string {
    if (serviceId === this.id) {
      return this.address;
    }
    throw new UnknownServiceError(serviceId);
  }
}

/**
 * Resolves every service ID that starts with a fixed prefix.
 *
 * Unlike {@link Basic}, this constructor accepts the prefix without a trailing
 * `*`.
 */
export class Prefix implements Resolver {
  private prefix: string;
  private address: string;
  /** Creates a resolver for one service ID prefix. */
  constructor(prefix: string, address: string) {
    this.prefix = prefix;
    this.address = address;
  }
  [custom](): string {
    return `Prefix(prefix=${this.prefix}, address=${this.address})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.PrefixResolver',
      prefix: this.prefix,
      address: this.address,
    };
  }
  /** Resolves a matching service ID to an address. */
  resolve(serviceId: string, _apiServiceName?: string): string {
    if (serviceId.startsWith(this.prefix)) {
      return this.address;
    }
    throw new UnknownServiceError(serviceId);
  }
}

/**
 * Applies the standard Nebius service-address convention.
 *
 * For example, `nebius.compute.v1.InstanceService` becomes
 * `compute.{domain}`. The SDK later replaces `{domain}` with its configured
 * API domain. The resolver rejects names outside the `nebius` namespace and
 * names that do not end with `Service`.
 */
export class Conventional implements Resolver {
  /**
   * Resolves a service ID with the standard Nebius address convention.
   *
   * This runtime cannot read protobuf API annotations from descriptors.
   * `apiServiceName` supplies the annotated service name when generated code
   * has one. A non-empty value replaces the second segment of `serviceId`.
   */
  resolve(serviceId: string, apiServiceName?: string): string {
    const parts = serviceId.split('.');
    if (parts.length < 3 || parts[0] !== 'nebius' || !parts[parts.length - 1].endsWith('Service')) {
      throw new UnknownServiceError(serviceId);
    }
    let serviceName = parts[1];
    if (typeof apiServiceName === 'string' && apiServiceName.length > 0) {
      serviceName = apiServiceName;
    }
    return `${serviceName}.{domain}`;
  }
  [custom](): string {
    return `Conventional()`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.ConventionalResolver',
    };
  }
}

/**
 * Tries resolvers in order until one returns an address.
 *
 * Only {@link UnknownServiceError} means “try the next resolver.” Any other
 * error is returned to the caller.
 *
 * @example
 * ```ts
 * import {
 *   Chain,
 *   Conventional,
 *   Single,
 * } from '@nebius/js-sdk/runtime/resolver';
 *
 * const resolver = new Chain(
 *   new Single('nebius.compute.v1.InstanceService', 'localhost:8443'),
 *   new Conventional(),
 * );
 * ```
 */
export class Chain implements Resolver {
  private resolvers: Resolver[];
  /** Creates a chain. Earlier resolvers have higher priority. */
  constructor(...resolvers: Resolver[]) {
    this.resolvers = resolvers;
  }
  [custom](): string {
    return `Chain(resolvers=[${this.resolvers.map((r) => inspect(r)).join(', ')}])`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.ChainResolver',
      resolvers: this.resolvers.map((r) => inspectJson(r)),
    };
  }
  /** Returns the first address that the resolver chain finds. */
  resolve(serviceId: string, apiServiceName?: string): string {
    for (const r of this.resolvers) {
      try {
        return r.resolve(serviceId, apiServiceName);
      } catch (e) {
        if (!(e instanceof UnknownServiceError)) {
          throw e;
        }
      }
    }
    throw new UnknownServiceError(serviceId);
  }
}

/**
 * Caches successful results from another resolver.
 *
 * The cache key contains both resolver arguments. Failed resolutions are not
 * cached. Entries stay for the lifetime of this object and cannot be cleared.
 * Use a new instance when endpoint mappings change.
 */
export class Cached implements Resolver {
  private cache: Record<string, string> = Object.create(null);
  private next: Resolver;
  /** Creates a resolver that caches results from another resolver. */
  constructor(next: Resolver) {
    this.next = next;
  }
  [custom](): string {
    return `Cached(${inspect(this.next)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.CachedResolver',
      next: inspectJson(this.next),
    };
  }
  /** Resolves a service ID and caches the address. */
  resolve(serviceId: string, apiServiceName?: string): string {
    const key = `${serviceId}|${apiServiceName ?? ''}`;
    const cached = this.cache[key];
    if (cached !== undefined) {
      return cached;
    }
    const addr = this.next.resolve(serviceId, apiServiceName);
    this.cache[key] = addr;
    return addr;
  }
}

/**
 * Replaces literal placeholders in addresses from another resolver.
 *
 * Each replacement applies to every occurrence. Replacements run in object
 * insertion order, so a replacement value can be changed by a later entry.
 *
 * @example
 * ```ts
 * import {
 *   Conventional,
 *   TemplateExpander,
 * } from '@nebius/js-sdk/runtime/resolver';
 *
 * const resolver = new TemplateExpander(
 *   { '{domain}': 'api.nebius.cloud:443' },
 *   new Conventional(),
 * );
 * resolver.resolve('nebius.compute.v1.InstanceService');
 * // "compute.api.nebius.cloud:443"
 * ```
 */
export class TemplateExpander implements Resolver {
  private substitutions: Record<string, string>;
  private next: Resolver;
  /**
   * Creates a template expander.
   *
   * The constructor keeps the substitutions object by reference. Do not
   * mutate it while requests are being resolved.
   */
  constructor(substitutions: Record<string, string>, next: Resolver) {
    this.substitutions = substitutions;
    this.next = next;
  }
  [custom](): string {
    return `TemplateExpander(substitutions=${inspect(this.substitutions)}, next=${inspect(this.next)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      type: 'nebius.sdk.TemplateExpander',
      substitutions: this.substitutions,
      next: inspectJson(this.next),
    };
  }
  /** Resolves a service ID and expands address placeholders. */
  resolve(serviceId: string, apiServiceName?: string): string {
    let addr = this.next.resolve(serviceId, apiServiceName);
    for (const [find, replace] of Object.entries(this.substitutions)) {
      addr = addr.split(find).join(replace);
    }
    return addr;
  }
}
