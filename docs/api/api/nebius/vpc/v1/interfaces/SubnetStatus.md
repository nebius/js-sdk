[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / SubnetStatus

# Interface: SubnetStatus

Defined in: src/api/nebius/vpc/v1/index.ts:8071

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:8073

***

### $type

> **$type**: `"nebius.vpc.v1.SubnetStatus"`

Defined in: src/api/nebius/vpc/v1/index.ts:8072

***

### ipv4PrivateCidrs

> **ipv4PrivateCidrs**: `string`[]

Defined in: src/api/nebius/vpc/v1/index.ts:8083

CIDR blocks.

***

### ipv4PublicCidrs

> **ipv4PublicCidrs**: `string`[]

Defined in: src/api/nebius/vpc/v1/index.ts:8088

CIDR blocks.

***

### state

> **state**: [`SubnetStatus_State`](../type-aliases/SubnetStatus_State.md)

Defined in: src/api/nebius/vpc/v1/index.ts:8078

Current state of the subnet.
