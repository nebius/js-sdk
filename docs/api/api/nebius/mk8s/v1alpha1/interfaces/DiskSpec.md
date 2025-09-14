[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2871

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2873

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.DiskSpec"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2872

---

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2874

---

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2876

---

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2875
