[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / FilesystemSpec

# Interface: FilesystemSpec

Defined in: src/api/nebius/compute/v1/index.ts:3081

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:3083

***

### $type

> **$type**: `"nebius.compute.v1.FilesystemSpec"`

Defined in: src/api/nebius/compute/v1/index.ts:3082

***

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1/index.ts:3090

Block size in bytes.
 The block size must be a power of two between 4096 bytes (4 KiB) and 131072 bytes (128 KiB).
 The default value is 4096 bytes (4 KiB).

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/api/nebius/compute/v1/index.ts:3103

Size of the disk. Only one size unit can be specified.
 The size must be within the limits for the selected disk type.
 For current limits, see https://docs.nebius.com/compute/storage/types#disks-types-comparison

***

### type

> **type**: [`FilesystemSpec_FilesystemType`](../type-aliases/FilesystemSpec_FilesystemType.md)

Defined in: src/api/nebius/compute/v1/index.ts:3096

The Shared Filesystem type determines its limits and performance characteristics.
 For details, see https://docs.nebius.com/compute/storage/types#filesystems-types
