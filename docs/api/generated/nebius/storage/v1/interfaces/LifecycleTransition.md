[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / LifecycleTransition

# Interface: LifecycleTransition

Defined in: src/generated/nebius/storage/v1/index.ts:3360

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:3362

***

### $type

> **$type**: `"nebius.storage.v1.LifecycleTransition"`

Defined in: src/generated/nebius/storage/v1/index.ts:3361

***

### storageClass

> **storageClass**: [`StorageClass`](../type-aliases/StorageClass.md)

Defined in: src/generated/nebius/storage/v1/index.ts:3367

Target storage class to transit to.

***

### transitedWith?

> `optional` **transitedWith**: \{ `$case`: `"date"`; `date`: `Dayjs`; \} \| \{ `$case`: `"days"`; `days`: `number`; \}

Defined in: src/generated/nebius/storage/v1/index.ts:3368
