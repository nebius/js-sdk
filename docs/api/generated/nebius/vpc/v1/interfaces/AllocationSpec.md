[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / AllocationSpec

# Interface: AllocationSpec

Defined in: src/generated/nebius/vpc/v1/index.ts:1314

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:1316

---

### $type

> **$type**: `"nebius.vpc.v1.AllocationSpec"`

Defined in: src/generated/nebius/vpc/v1/index.ts:1315

---

### ipSpec?

> `optional` **ipSpec**: \{ `$case`: `"ipv4Private"`; `ipv4Private`: [`IPv4PrivateAllocationSpec`](IPv4PrivateAllocationSpec.md); \} \| \{ `$case`: `"ipv4Public"`; `ipv4Public`: [`IPv4PublicAllocationSpec`](IPv4PublicAllocationSpec.md); \}

Defined in: src/generated/nebius/vpc/v1/index.ts:1321

Holds the IP specifications for the allocation, including the type of IP (IPv4 or IPv6) and its corresponding configuration.
