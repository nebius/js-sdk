[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / PoolSpec

# Interface: PoolSpec

Defined in: src/generated/nebius/vpc/v1/index.ts:5617

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:5619

***

### $type

> **$type**: `"nebius.vpc.v1.PoolSpec"`

Defined in: src/generated/nebius/vpc/v1/index.ts:5618

***

### cidrs

> **cidrs**: [`PoolCidr`](PoolCidr.md)[]

Defined in: src/generated/nebius/vpc/v1/index.ts:5636

CIDR blocks.

***

### sourcePoolId

> **sourcePoolId**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:5625

ID of source pool. Current pool will be created with the same scope.
 Pool is a root-pool if this field is empty

***

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5630

IP version for the Pool.

***

### visibility

> **visibility**: [`IpVisibility`](../type-aliases/IpVisibility.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5631
