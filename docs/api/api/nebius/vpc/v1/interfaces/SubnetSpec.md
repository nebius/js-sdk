[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / SubnetSpec

# Interface: SubnetSpec

Defined in: src/api/nebius/vpc/v1/index.ts:7475

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:7477

***

### $type

> **$type**: `"nebius.vpc.v1.SubnetSpec"`

Defined in: src/api/nebius/vpc/v1/index.ts:7476

***

### ipv4PrivatePools?

> `optional` **ipv4PrivatePools**: [`IPv4PrivateSubnetPools`](IPv4PrivateSubnetPools.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7488

Pools for private ipv4 addresses.
 Default is 'use_network_pools = true'

***

### ipv4PublicPools?

> `optional` **ipv4PublicPools**: [`IPv4PublicSubnetPools`](IPv4PublicSubnetPools.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7494

Pools for public ipv4 addresses.
 Default is 'use_network_pools = true'

***

### networkId

> **networkId**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:7482

Network ID.
