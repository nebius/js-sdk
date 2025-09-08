[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / PublicIPAddressStatus

# Interface: PublicIPAddressStatus

Defined in: src/generated/nebius/compute/v1/index.ts:10482

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10484

---

### $type

> **$type**: `"nebius.compute.v1.PublicIPAddressStatus"`

Defined in: src/generated/nebius/compute/v1/index.ts:10483

---

### address

> **address**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10489

Effective public IPv4 address assigned to the interface.

---

### allocationId

> **allocationId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10494

Allocation identifier.

---

### static

> **static**: `boolean`

Defined in: src/generated/nebius/compute/v1/index.ts:10501

If false - Allocation will be created/deleted during NetworkInterface.Allocate/NetworkInterface.Deallocate
If true - Allocation will be created/deleted during NetworkInterface.Create/NetworkInterface.Delete
False by default
