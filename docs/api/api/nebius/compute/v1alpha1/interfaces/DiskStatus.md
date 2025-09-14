[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / DiskStatus

# Interface: DiskStatus

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1424

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1426

---

### $type

> **$type**: `"nebius.compute.v1alpha1.DiskStatus"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1425

---

### readOnlyAttachments

> **readOnlyAttachments**: `string`[]

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1430

---

### readWriteAttachment

> **readWriteAttachment**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1429

---

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1437

Indicates whether there is an ongoing operation

---

### sizeBytes

> **sizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1432

---

### sourceImageId

> **sourceImageId**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1431

---

### state

> **state**: [`DiskStatus_State`](../type-aliases/DiskStatus_State.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1427

---

### stateDescription

> **stateDescription**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:1428
