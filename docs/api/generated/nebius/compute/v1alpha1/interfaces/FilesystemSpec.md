[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / FilesystemSpec

# Interface: FilesystemSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2718

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2720

***

### $type

> **$type**: `"nebius.compute.v1alpha1.FilesystemSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2719

***

### blockSizeBytes

> **blockSizeBytes**: `Long`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2721

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: `Long`; \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: `Long`; \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: `Long`; \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: `Long`; \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2723

***

### type

> **type**: [`FilesystemSpec_FilesystemType`](../type-aliases/FilesystemSpec_FilesystemType.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2722
