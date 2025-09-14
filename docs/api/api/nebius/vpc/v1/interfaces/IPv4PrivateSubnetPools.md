[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / IPv4PrivateSubnetPools

# Interface: IPv4PrivateSubnetPools

Defined in: src/api/nebius/vpc/v1/index.ts:7620

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:7622

---

### $type

> **$type**: `"nebius.vpc.v1.IPv4PrivateSubnetPools"`

Defined in: src/api/nebius/vpc/v1/index.ts:7621

---

### pools

> **pools**: [`SubnetPool`](SubnetPool.md)[]

Defined in: src/api/nebius/vpc/v1/index.ts:7628

Pools for private ipv4 allocations in subnet
Must be empty if 'use_network_pools = true'

---

### useNetworkPools

> **useNetworkPools**: `boolean`

Defined in: src/api/nebius/vpc/v1/index.ts:7634

Allow using of private ipv4 pools which are specified in network
Must be false if 'pools' is not empty
