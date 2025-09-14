[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / FilesystemSpec

# Interface: FilesystemSpec

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2713

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2715

---

### $type

> **$type**: `"nebius.compute.v1alpha1.FilesystemSpec"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2714

---

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2716

---

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2718

---

### type

> **type**: [`FilesystemSpec_FilesystemType`](../type-aliases/FilesystemSpec_FilesystemType.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:2717
