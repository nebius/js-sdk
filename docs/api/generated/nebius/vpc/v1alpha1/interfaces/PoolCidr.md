[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / PoolCidr

# Interface: PoolCidr

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5179

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5181

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.PoolCidr"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5180

***

### allowedMask

> **allowedMask**: `Long`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5198

Maximum mask length for allocation from this IP pool including creation of sub-pools

***

### cidr

> **cidr**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5188

CIDR block.
 May be a prefix length (such as /24) for non-top-level pools
 or a CIDR-formatted string (such as 10.1.2.0/24).

***

### state

> **state**: [`PoolCidrState`](../type-aliases/PoolCidrState.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5193

State of the Cidr.
