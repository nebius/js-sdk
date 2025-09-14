[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / AllocationSpec

# Interface: AllocationSpec

Defined in: src/api/nebius/vpc/v1/index.ts:1315

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:1317

***

### $type

> **$type**: `"nebius.vpc.v1.AllocationSpec"`

Defined in: src/api/nebius/vpc/v1/index.ts:1316

***

### ipSpec?

> `optional` **ipSpec**: \{ `$case`: `"ipv4Private"`; `ipv4Private`: [`IPv4PrivateAllocationSpec`](IPv4PrivateAllocationSpec.md); \} \| \{ `$case`: `"ipv4Public"`; `ipv4Public`: [`IPv4PublicAllocationSpec`](IPv4PublicAllocationSpec.md); \}

Defined in: src/api/nebius/vpc/v1/index.ts:1322

Holds the IP specifications for the allocation, including the type of IP (IPv4 or IPv6) and its corresponding configuration.
