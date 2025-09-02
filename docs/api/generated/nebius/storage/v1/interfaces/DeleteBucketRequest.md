[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / DeleteBucketRequest

# Interface: DeleteBucketRequest

Defined in: src/generated/nebius/storage/v1/index.ts:944

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:946

***

### $type

> **$type**: `"nebius.storage.v1.DeleteBucketRequest"`

Defined in: src/generated/nebius/storage/v1/index.ts:945

***

### id

> **id**: `string`

Defined in: src/generated/nebius/storage/v1/index.ts:947

***

### purge?

> `optional` **purge**: \{ `$case`: `"purgeAt"`; `purgeAt`: `Dayjs`; \} \| \{ `$case`: `"ttl"`; `ttl`: `Duration`; \}

Defined in: src/generated/nebius/storage/v1/index.ts:953

You can provide purge_at or ttl after which the bucket will be purged automatically.
 Otherwise, default ttl of 7 days will be applied.
