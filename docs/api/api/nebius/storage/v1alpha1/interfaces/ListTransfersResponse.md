[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / ListTransfersResponse

# Interface: ListTransfersResponse

Defined in: src/api/nebius/storage/v1alpha1/index.ts:236

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:238

***

### $type

> **$type**: `"nebius.storage.v1alpha1.ListTransfersResponse"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:237

***

### items

> **items**: [`Transfer`](Transfer.md)[]

Defined in: src/api/nebius/storage/v1alpha1/index.ts:243

List of transfers returned in the response.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:248

Token for pagination, indicating the next set of results can be retrieved using this token.
