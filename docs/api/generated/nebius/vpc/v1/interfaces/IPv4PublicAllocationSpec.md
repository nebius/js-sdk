[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / IPv4PublicAllocationSpec

# Interface: IPv4PublicAllocationSpec

Defined in: src/generated/nebius/vpc/v1/index.ts:1631

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:1633

---

### $type

> **$type**: `"nebius.vpc.v1.IPv4PublicAllocationSpec"`

Defined in: src/generated/nebius/vpc/v1/index.ts:1632

---

### cidr

> **cidr**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:1641

CIDR block for IPv4 Allocation.
May be a single IP address (such as 10.2.3.4),
a prefix length (such as /32) or a CIDR-formatted string (such as 10.1.2.0/32).
Random address (/32) from pool would be allocated if field is omitted.

---

### pool?

> `optional` **pool**: \{ `$case`: `"subnetId"`; `subnetId`: `string`; \} \| \{ `$case`: `"poolId"`; `poolId`: `string`; \}

Defined in: src/generated/nebius/vpc/v1/index.ts:1642
