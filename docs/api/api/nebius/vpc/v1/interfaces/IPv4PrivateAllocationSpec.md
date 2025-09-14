[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / IPv4PrivateAllocationSpec

# Interface: IPv4PrivateAllocationSpec

Defined in: src/api/nebius/vpc/v1/index.ts:1464

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:1466

***

### $type

> **$type**: `"nebius.vpc.v1.IPv4PrivateAllocationSpec"`

Defined in: src/api/nebius/vpc/v1/index.ts:1465

***

### cidr

> **cidr**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:1474

CIDR block for IPv4 Allocation.
 May be a single IP address (such as 10.2.3.4),
 a prefix length (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).
 Random address (/32) from pool would be allocated if field is omitted.

***

### pool?

> `optional` **pool**: \{ `$case`: `"subnetId"`; `subnetId`: `string`; \} \| \{ `$case`: `"poolId"`; `poolId`: `string`; \}

Defined in: src/api/nebius/vpc/v1/index.ts:1475
