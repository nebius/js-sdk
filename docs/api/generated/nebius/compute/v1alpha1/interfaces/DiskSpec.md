[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1110

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1112

***

### $type

> **$type**: `"nebius.compute.v1alpha1.DiskSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1111

***

### blockSizeBytes

> **blockSizeBytes**: `Long`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1113

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: `Long`; \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: `Long`; \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: `Long`; \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: `Long`; \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1115

***

### source?

> `optional` **source**: \{ `$case`: `"sourceImageId"`; `sourceImageId`: `string`; \} \| \{ `$case`: `"sourceImageFamily"`; `sourceImageFamily`: `string`; \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1121

***

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:1114
