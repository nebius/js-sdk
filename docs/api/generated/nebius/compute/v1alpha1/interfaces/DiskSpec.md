[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1107

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1109

---

### $type

> **$type**: `"nebius.compute.v1alpha1.DiskSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1108

---

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1110

---

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1112

---

### source?

> `optional` **source**: \{ `$case`: `"sourceImageId"`; `sourceImageId`: `string`; \} \| \{ `$case`: `"sourceImageFamily"`; `sourceImageFamily`: `string`; \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1118

---

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1111
