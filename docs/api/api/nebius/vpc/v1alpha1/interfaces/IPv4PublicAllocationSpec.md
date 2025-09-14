[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / IPv4PublicAllocationSpec

# Interface: IPv4PublicAllocationSpec

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1502

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1504

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.IPv4PublicAllocationSpec"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1503

---

### cidr

> **cidr**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1512

CIDR block for IPv4 Allocation.
May be a single IP address (such as 10.2.3.4),
a prefix length (such as /32) or a CIDR-formatted string (such as 10.1.2.0/32).
Random address (/32) from pool would be allocated if field is omitted.

---

### poolId

> **poolId**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1517

Pool for the IPv4 public allocation.
