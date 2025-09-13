/*
 * Ported from Python resolvers to TypeScript
 */

import { inspect } from 'util';

import { custom, customJson, inspectJson } from './util/logging';

export class UnknownServiceError extends Error {
  constructor(id: string) {
    super(`Unknown service: ${id}`);
    this.name = 'UnknownServiceError';
  }
}

export interface Resolver {
  /**
   * Receive address of the service by its ID
   * @param serviceId service ID, e.g. "nebius.compute.v1.InstanceService"
   * @param apiServiceName optional API service name override, when provided by the service wrapper
   * @returns address string
   * @throws UnknownServiceError when the resolver cannot resolve the ID
   */
  resolve(serviceId: string, apiServiceName?: string): string;
}

export class Basic implements Resolver {
  private parent: Resolver;

  constructor(id: string, address: string) {
    if (id.endsWith('*')) {
      // Prefix matcher (strip the trailing *)
      this.parent = new Prefix(id.slice(0, -1), address);
    } else {
      // Exact matcher
      this.parent = new Single(id, address);
    }
  }

  [custom](): string {
    return `Basic(${inspect(this.parent)})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.BasicResolver',
      parent: inspectJson(this.parent),
    };
  }

  resolve(serviceId: string, apiServiceName?: string): string {
    const ret = this.parent.resolve(serviceId, apiServiceName);
    // console.debug(`[basic] ${serviceId} -> ${ret}`);
    return ret;
  }
}

export class Constant implements Resolver {
  private address: string;
  constructor(address: string) {
    this.address = address;
  }
  [custom](): string {
    return `Constant(address=${this.address})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.ConstantResolver',
      address: this.address,
    };
  }
  resolve(_serviceId: string, _apiServiceName?: string): string {
    // console.debug(`[constant] ${serviceId} -> ${this.address}`);
    return this.address;
  }
}

export class Single implements Resolver {
  private id: string;
  private address: string;
  constructor(id: string, address: string) {
    this.id = id;
    this.address = address;
  }
  [custom](): string {
    return `Single(id=${this.id}, address=${this.address})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.SingleResolver',
      id: this.id,
      address: this.address,
    };
  }
  resolve(serviceId: string, _apiServiceName?: string): string {
    if (serviceId === this.id) {
      // console.debug(`[single] ${serviceId} -> ${this.address}`);
      return this.address;
    }
    // console.debug(`[single] ${serviceId} did not match ${this.id}`);
    throw new UnknownServiceError(serviceId);
  }
}

export class Prefix implements Resolver {
  private prefix: string;
  private address: string;
  constructor(prefix: string, address: string) {
    this.prefix = prefix;
    this.address = address;
  }
  [custom](): string {
    return `Prefix(prefix=${this.prefix}, address=${this.address})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.PrefixResolver',
      prefix: this.prefix,
      address: this.address,
    };
  }
  resolve(serviceId: string, _apiServiceName?: string): string {
    if (serviceId.startsWith(this.prefix)) {
      // console.debug(`[prefix] ${serviceId} -> ${this.address}`);
      return this.address;
    }
    // console.debug(`[prefix] ${serviceId} did not match prefix ${this.prefix}`);
    throw new UnknownServiceError(serviceId);
  }
}

export class Conventional implements Resolver {
  // In TS (ts-proto) we don't have runtime descriptors to read custom options.
  // We still follow the convention: nebius.<service>.<ver>.SomethingService -> <service>.{domain}
  resolve(serviceId: string, apiServiceName?: string): string {
    const parts = serviceId.split('.');
    if (parts.length < 3 || parts[0] !== 'nebius' || !parts[parts.length - 1].endsWith('Service')) {
      throw new UnknownServiceError(serviceId);
    }
    // Default to the service segment after the top-level namespace (e.g. nebius.compute.v1.FooService -> "compute")
    let serviceName = parts[1];
    // If provided by the wrapper, prefer annotated api service name
    if (typeof apiServiceName === 'string' && apiServiceName.length > 0) {
      serviceName = apiServiceName;
    }
    const ret = `${serviceName}.{domain}`;
    // console.debug(`[conventional] ${serviceId} -> ${ret}`);
    return ret;
  }
  [custom](): string {
    return `Conventional()`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.ConventionalResolver',
    };
  }
}

export class Chain implements Resolver {
  private resolvers: Resolver[];
  constructor(...resolvers: Resolver[]) {
    this.resolvers = resolvers;
  }
  [custom](): string {
    return `Chain(resolvers=[${this.resolvers.map((r) => inspect(r)).join(', ')}])`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.ChainResolver',
      resolvers: this.resolvers.map((r) => inspectJson(r)),
    };
  }
  resolve(serviceId: string, apiServiceName?: string): string {
    for (const r of this.resolvers) {
      try {
        const ret = r.resolve(serviceId, apiServiceName);
        // console.debug(`[chain] ${serviceId} -> ${ret}`);
        return ret;
      } catch (e) {
        if (!(e instanceof UnknownServiceError)) {
          throw e;
        }
        // continue
      }
    }
    // console.debug(`[chain] ${serviceId} not resolved by any resolver`);
    throw new UnknownServiceError(serviceId);
  }
}

export class Cached implements Resolver {
  private cache: Record<string, string> = Object.create(null);
  private next: Resolver;
  constructor(next: Resolver) {
    this.next = next;
  }
  [custom](): string {
    return `Cached(${inspect(this.next)})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.CachedResolver',
      next: inspectJson(this.next),
    };
  }
  resolve(serviceId: string, apiServiceName?: string): string {
    const key = `${serviceId}|${apiServiceName ?? ''}`;
    const cached = this.cache[key];
    if (cached !== undefined) {
      // console.debug(`[cached] ${serviceId} -> ${cached} (cached)`);
      return cached;
    }
    const addr = this.next.resolve(serviceId, apiServiceName);
    this.cache[key] = addr;
    // console.debug(`[cached] ${serviceId} -> ${addr} (stored)`);
    return addr;
  }
}

export class TemplateExpander implements Resolver {
  private substitutions: Record<string, string>;
  private next: Resolver;
  constructor(substitutions: Record<string, string>, next: Resolver) {
    this.substitutions = substitutions;
    this.next = next;
  }
  [custom](): string {
    return `TemplateExpander(substitutions=${inspect(this.substitutions)}, next=${inspect(this.next)})`;
  }
  [customJson](): object {
    return {
      type: 'nebius.sdk.TemplateExpander',
      substitutions: this.substitutions,
      next: inspectJson(this.next),
    };
  }
  resolve(serviceId: string, apiServiceName?: string): string {
    let addr = this.next.resolve(serviceId, apiServiceName);
    for (const [find, replace] of Object.entries(this.substitutions)) {
      addr = addr.split(find).join(replace);
    }
    // console.debug(`[template] ${serviceId} -> ${addr}`);
    return addr;
  }
}
