[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/generated/nebius/compute/v1/index.ts:1185

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:1187

***

### $type

> **$type**: `"nebius.compute.v1.DiskSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:1186

***

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/compute/v1/index.ts:1194

Block size in bytes.
 The block size must be a power of two between 4096 bytes (4 KiB) and 131072 bytes (128 KiB).
 The default value is 4096 bytes (4 KiB).

***

### diskEncryption?

> `optional` **diskEncryption**: [`DiskEncryption`](DiskEncryption.md)

Defined in: src/generated/nebius/compute/v1/index.ts:1205

Defines how data on the disk is encrypted. By default, no encryption is applied.

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/generated/nebius/compute/v1/index.ts:1211

Size of the disk. The size must be within the limits for the selected disk type.
 For current limits, see https://docs.nebius.com/compute/storage/types#disks-types-comparison

***

### source?

> `optional` **source**: \{ `$case`: `"sourceImageId"`; `sourceImageId`: `string`; \} \| \{ `$case`: `"sourceImageFamily"`; `sourceImageFamily`: [`SourceImageFamily`](SourceImageFamily.md); \}

Defined in: src/generated/nebius/compute/v1/index.ts:1223

Source for disk creation.
 Boot disk must be created from an image https://docs.nebius.com/compute/storage/manage#boot
 Additional disks can be created as an empty volume https://docs.nebius.com/compute/storage/manage#additional

***

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/generated/nebius/compute/v1/index.ts:1200

The type of disk defines the performance and reliability characteristics of the block device.
 For details, see https://docs.nebius.com/compute/storage/types#disks-types
