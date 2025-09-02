[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / LifecycleNoncurrentVersionTransition

# Interface: LifecycleNoncurrentVersionTransition

Defined in: src/generated/nebius/storage/v1/index.ts:3527

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:3529

***

### $type

> **$type**: `"nebius.storage.v1.LifecycleNoncurrentVersionTransition"`

Defined in: src/generated/nebius/storage/v1/index.ts:3528

***

### newerNoncurrentVersions?

> `optional` **newerNoncurrentVersions**: `number`

Defined in: src/generated/nebius/storage/v1/index.ts:3534

Specifies how many noncurrent versions the system will retain without transition.

***

### noncurrentDays

> **noncurrentDays**: `number`

Defined in: src/generated/nebius/storage/v1/index.ts:3539

Specifies the number of days an object is noncurrent before the system will transit it.

***

### storageClass

> **storageClass**: [`StorageClass`](../type-aliases/StorageClass.md)

Defined in: src/generated/nebius/storage/v1/index.ts:3544

Target storage class to transit to.
