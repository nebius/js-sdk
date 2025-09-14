[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / PublicIPAddress

# Interface: PublicIPAddress

Defined in: src/api/nebius/compute/v1/index.ts:10015

Describes a public IP address.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:10017

---

### $type

> **$type**: `"nebius.compute.v1.PublicIPAddress"`

Defined in: src/api/nebius/compute/v1/index.ts:10016

---

### allocation?

> `optional` **allocation**: `object`

Defined in: src/api/nebius/compute/v1/index.ts:10029

Describes different methods of public IP address allocation.

#### $case

> **$case**: `"allocationId"`

#### allocationId

> **allocationId**: `string`

---

### static

> **static**: `boolean`

Defined in: src/api/nebius/compute/v1/index.ts:10024

If false - Allocation will be created/deleted during NetworkInterface.Allocate/NetworkInterface.Deallocate
If true - Allocation will be created/deleted during NetworkInterface.Create/NetworkInterface.Delete
False by default
