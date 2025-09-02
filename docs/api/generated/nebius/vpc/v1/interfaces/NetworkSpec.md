[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / NetworkSpec

# Interface: NetworkSpec

Defined in: src/generated/nebius/vpc/v1/index.ts:3716

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:3718

***

### $type

> **$type**: `"nebius.vpc.v1.NetworkSpec"`

Defined in: src/generated/nebius/vpc/v1/index.ts:3717

***

### ipv4PrivatePools?

> `optional` **ipv4PrivatePools**: [`IPv4PrivateNetworkPools`](IPv4PrivateNetworkPools.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:3724

Pools for private ipv4 addresses.
 Default private pools will be created if not specified.

***

### ipv4PublicPools?

> `optional` **ipv4PublicPools**: [`IPv4PublicNetworkPools`](IPv4PublicNetworkPools.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:3730

Pools for public ipv4 addresses.
 Default public pool will be used if not specified.
