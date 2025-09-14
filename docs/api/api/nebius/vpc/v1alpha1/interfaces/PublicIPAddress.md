[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / PublicIPAddress

# Interface: PublicIPAddress

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2530

Describes a public IP address.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2532

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.PublicIPAddress"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2531

---

### allocation?

> `optional` **allocation**: `object`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2544

Describes different methods of public IP address allocation.

#### $case

> **$case**: `"allocationId"`

#### allocationId

> **allocationId**: `string`

---

### static

> **static**: `boolean`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2539

If false - Lifecycle of allocation depends on NetworkInterface.Allocate/NetworkInterface.Deallocate
If true - Lifecycle of allocation depends on NetworkInterface.Create/NetworkInterface.Delete
False by default
