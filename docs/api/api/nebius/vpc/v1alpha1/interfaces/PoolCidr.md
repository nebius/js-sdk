[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / PoolCidr

# Interface: PoolCidr

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5180

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5182

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.PoolCidr"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5181

***

### allowedMask

> **allowedMask**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5199

Maximum mask length for allocation from this IP pool including creation of sub-pools

***

### cidr

> **cidr**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5189

CIDR block.
 May be a prefix length (such as /24) for non-top-level pools
 or a CIDR-formatted string (such as 10.1.2.0/24).

***

### state

> **state**: [`PoolCidrState`](../type-aliases/PoolCidrState.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5194

State of the Cidr.
