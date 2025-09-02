[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / FilesystemSpec

# Interface: FilesystemSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2712

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2714

***

### $type

> **$type**: `"nebius.compute.v1alpha1.FilesystemSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2713

***

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2715

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2717

***

### type

> **type**: [`FilesystemSpec_FilesystemType`](../type-aliases/FilesystemSpec_FilesystemType.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2716
