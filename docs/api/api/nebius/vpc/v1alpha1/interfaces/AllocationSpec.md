[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / AllocationSpec

# Interface: AllocationSpec

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1186

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1188

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.AllocationSpec"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1187

---

### ipSpec?

> `optional` **ipSpec**: \{ `$case`: `"ipv4Private"`; `ipv4Private`: [`IPv4PrivateAllocationSpec`](IPv4PrivateAllocationSpec.md); \} \| \{ `$case`: `"ipv4Public"`; `ipv4Public`: [`IPv4PublicAllocationSpec`](IPv4PublicAllocationSpec.md); \}

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1193

Holds the IP specifications for the allocation, including the type of IP (IPv4 or IPv6) and its corresponding configuration.
