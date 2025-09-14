[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / ListBucketsResponse

# Interface: ListBucketsResponse

Defined in: src/api/nebius/storage/v1/index.ts:1444

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:1446

***

### $type

> **$type**: `"nebius.storage.v1.ListBucketsResponse"`

Defined in: src/api/nebius/storage/v1/index.ts:1445

***

### items

> **items**: [`Bucket`](Bucket.md)[]

Defined in: src/api/nebius/storage/v1/index.ts:1451

List of buckets returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/storage/v1/index.ts:1456

Token for pagination, indicating the next set of results can be retrieved using this token.
