[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / IPv4PrivateAllocationSpec

# Interface: IPv4PrivateAllocationSpec

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1334

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1336

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.IPv4PrivateAllocationSpec"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1335

---

### cidr

> **cidr**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1344

CIDR block for IPv4 Allocation.
May be a single IP address (such as 10.2.3.4),
a prefix length (such as /24) or a CIDR-formatted string (such as 10.1.2.0/24).
Random address (/32) from pool would be allocated if field is omitted.

---

### pool?

> `optional` **pool**: \{ `$case`: `"subnetId"`; `subnetId`: `string`; \} \| \{ `$case`: `"poolId"`; `poolId`: `string`; \}

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1345
