[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / SubnetCidr

# Interface: SubnetCidr

Defined in: src/api/nebius/vpc/v1/index.ts:7933

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:7935

***

### $type

> **$type**: `"nebius.vpc.v1.SubnetCidr"`

Defined in: src/api/nebius/vpc/v1/index.ts:7934

***

### cidr

> **cidr**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:7941

CIDR block.
 May be a prefix length (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).

***

### maxMaskLength

> **maxMaskLength**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7953

Maximum mask length for allocation from this cidr
 Default max_mask_length is 32 for IPv4 and 128 for IPv6

***

### state

> **state**: [`AddressBlockState`](../type-aliases/AddressBlockState.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7947

State of the Cidr.
 Default state is AVAILABLE
