[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / FilesystemStatus

# Interface: FilesystemStatus

Defined in: src/api/nebius/compute/v1/index.ts:3339

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:3341

***

### $type

> **$type**: `"nebius.compute.v1.FilesystemStatus"`

Defined in: src/api/nebius/compute/v1/index.ts:3340

***

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1/index.ts:3352

***

### readOnlyAttachments

> **readOnlyAttachments**: `string`[]

Defined in: src/api/nebius/compute/v1/index.ts:3345

***

### readWriteAttachments

> **readWriteAttachments**: `string`[]

Defined in: src/api/nebius/compute/v1/index.ts:3344

***

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/compute/v1/index.ts:3351

Indicates whether there is an ongoing operation

***

### sizeBytes

> **sizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1/index.ts:3346

***

### state

> **state**: [`FilesystemStatus_State`](../type-aliases/FilesystemStatus_State.md)

Defined in: src/api/nebius/compute/v1/index.ts:3342

***

### stateDescription

> **stateDescription**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:3343
