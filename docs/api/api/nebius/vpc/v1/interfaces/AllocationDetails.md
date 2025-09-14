[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / AllocationDetails

# Interface: AllocationDetails

Defined in: src/api/nebius/vpc/v1/index.ts:1966

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:1968

---

### $type

> **$type**: `"nebius.vpc.v1.AllocationDetails"`

Defined in: src/api/nebius/vpc/v1/index.ts:1967

---

### allocatedCidr

> **allocatedCidr**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:1973

The actual CIDR block that has been allocated.

---

### poolId

> **poolId**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:1978

ID of the pool from which this allocation was made.

---

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1983

The IP version of this allocation (IPv4 or IPv6).
