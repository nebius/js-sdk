[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / SubnetCidr

# Interface: SubnetCidr

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7753

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7755

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.SubnetCidr"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7754

---

### allowedMask

> **allowedMask**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7771

Maximum mask length for allocation from this cidr

---

### cidr

> **cidr**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7761

CIDR block.
May be a prefix length (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).

---

### state

> **state**: [`PoolCidrState`](../type-aliases/PoolCidrState.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7766

State of the Cidr.
