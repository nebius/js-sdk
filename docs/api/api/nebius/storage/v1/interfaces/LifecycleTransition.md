[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / LifecycleTransition

# Interface: LifecycleTransition

Defined in: src/api/nebius/storage/v1/index.ts:3361

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:3363

***

### $type

> **$type**: `"nebius.storage.v1.LifecycleTransition"`

Defined in: src/api/nebius/storage/v1/index.ts:3362

***

### storageClass

> **storageClass**: [`StorageClass`](../type-aliases/StorageClass.md)

Defined in: src/api/nebius/storage/v1/index.ts:3368

Target storage class to transit to.

***

### transitedWith?

> `optional` **transitedWith**: \{ `$case`: `"date"`; `date`: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md); \} \| \{ `$case`: `"days"`; `days`: `number`; \}

Defined in: src/api/nebius/storage/v1/index.ts:3369
