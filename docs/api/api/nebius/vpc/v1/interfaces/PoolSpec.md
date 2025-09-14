[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / PoolSpec

# Interface: PoolSpec

Defined in: src/api/nebius/vpc/v1/index.ts:5618

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:5620

***

### $type

> **$type**: `"nebius.vpc.v1.PoolSpec"`

Defined in: src/api/nebius/vpc/v1/index.ts:5619

***

### cidrs

> **cidrs**: [`PoolCidr`](PoolCidr.md)[]

Defined in: src/api/nebius/vpc/v1/index.ts:5637

CIDR blocks.

***

### sourcePoolId

> **sourcePoolId**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:5626

ID of source pool. Current pool will be created with the same scope.
 Pool is a root-pool if this field is empty

***

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/api/nebius/vpc/v1/index.ts:5631

IP version for the Pool.

***

### visibility

> **visibility**: [`IpVisibility`](../type-aliases/IpVisibility.md)

Defined in: src/api/nebius/vpc/v1/index.ts:5632
