[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / PublicIPAddress

# Interface: PublicIPAddress

Defined in: src/generated/nebius/compute/v1/index.ts:10014

Describes a public IP address.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10016

---

### $type

> **$type**: `"nebius.compute.v1.PublicIPAddress"`

Defined in: src/generated/nebius/compute/v1/index.ts:10015

---

### allocation?

> `optional` **allocation**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:10028

Describes different methods of public IP address allocation.

#### $case

> **$case**: `"allocationId"`

#### allocationId

> **allocationId**: `string`

---

### static

> **static**: `boolean`

Defined in: src/generated/nebius/compute/v1/index.ts:10023

If false - Allocation will be created/deleted during NetworkInterface.Allocate/NetworkInterface.Deallocate
If true - Allocation will be created/deleted during NetworkInterface.Create/NetworkInterface.Delete
False by default
