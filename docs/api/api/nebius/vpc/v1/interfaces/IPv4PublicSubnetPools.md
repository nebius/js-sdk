[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / IPv4PublicSubnetPools

# Interface: IPv4PublicSubnetPools

Defined in: src/api/nebius/vpc/v1/index.ts:7734

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:7736

***

### $type

> **$type**: `"nebius.vpc.v1.IPv4PublicSubnetPools"`

Defined in: src/api/nebius/vpc/v1/index.ts:7735

***

### pools

> **pools**: [`SubnetPool`](SubnetPool.md)[]

Defined in: src/api/nebius/vpc/v1/index.ts:7742

Pools for public ipv4 allocations in subnet
 Must be empty if 'use_network_pools = true'

***

### useNetworkPools

> **useNetworkPools**: `boolean`

Defined in: src/api/nebius/vpc/v1/index.ts:7748

Allow using of public ipv4 pools which are specified in network
 Must be false if 'pools' is not empty
