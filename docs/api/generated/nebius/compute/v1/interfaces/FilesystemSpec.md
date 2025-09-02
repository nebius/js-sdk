[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / FilesystemSpec

# Interface: FilesystemSpec

Defined in: src/generated/nebius/compute/v1/index.ts:3080

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:3082

***

### $type

> **$type**: `"nebius.compute.v1.FilesystemSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:3081

***

### blockSizeBytes

> **blockSizeBytes**: `Long`

Defined in: src/generated/nebius/compute/v1/index.ts:3089

Block size in bytes.
 The block size must be a power of two between 4096 bytes (4 KiB) and 131072 bytes (128 KiB).
 The default value is 4096 bytes (4 KiB).

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: `Long`; \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: `Long`; \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: `Long`; \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: `Long`; \}

Defined in: src/generated/nebius/compute/v1/index.ts:3102

Size of the disk. Only one size unit can be specified.
 The size must be within the limits for the selected disk type.
 For current limits, see https://docs.nebius.com/compute/storage/types#disks-types-comparison

***

### type

> **type**: [`FilesystemSpec_FilesystemType`](../type-aliases/FilesystemSpec_FilesystemType.md)

Defined in: src/generated/nebius/compute/v1/index.ts:3095

The Shared Filesystem type determines its limits and performance characteristics.
 For details, see https://docs.nebius.com/compute/storage/types#filesystems-types
