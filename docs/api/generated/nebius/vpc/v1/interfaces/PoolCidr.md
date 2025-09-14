[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / PoolCidr

# Interface: PoolCidr

Defined in: src/generated/nebius/vpc/v1/index.ts:5773

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:5775

---

### $type

> **$type**: `"nebius.vpc.v1.PoolCidr"`

Defined in: src/generated/nebius/vpc/v1/index.ts:5774

---

### cidr

> **cidr**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:5782

CIDR block.
May be a prefix length (such as /24) for non-top-level pools
or a CIDR-formatted string (such as 10.1.2.0/24).

---

### maxMaskLength

> **maxMaskLength**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5794

Maximum mask length for allocation from this cidr including creation of sub-pools
Default max_mask_length is 32 for IPv4 and 128 for IPv6

---

### state

> **state**: [`AddressBlockState`](../type-aliases/AddressBlockState.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5788

State of the Cidr.
Default state is AVAILABLE
