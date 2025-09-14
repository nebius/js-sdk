[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / SubnetCidr

# Interface: SubnetCidr

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7754

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7756

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.SubnetCidr"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7755

***

### allowedMask

> **allowedMask**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7772

Maximum mask length for allocation from this cidr

***

### cidr

> **cidr**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7762

CIDR block.
 May be a prefix length (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).

***

### state

> **state**: [`PoolCidrState`](../type-aliases/PoolCidrState.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7767

State of the Cidr.
