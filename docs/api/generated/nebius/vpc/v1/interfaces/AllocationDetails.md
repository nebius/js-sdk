[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / AllocationDetails

# Interface: AllocationDetails

Defined in: src/generated/nebius/vpc/v1/index.ts:1965

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:1967

***

### $type

> **$type**: `"nebius.vpc.v1.AllocationDetails"`

Defined in: src/generated/nebius/vpc/v1/index.ts:1966

***

### allocatedCidr

> **allocatedCidr**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:1972

The actual CIDR block that has been allocated.

***

### poolId

> **poolId**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:1977

ID of the pool from which this allocation was made.

***

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1982

The IP version of this allocation (IPv4 or IPv6).
