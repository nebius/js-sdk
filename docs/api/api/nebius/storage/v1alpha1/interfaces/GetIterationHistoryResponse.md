[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / GetIterationHistoryResponse

# Interface: GetIterationHistoryResponse

Defined in: src/api/nebius/storage/v1alpha1/index.ts:977

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:979

***

### $type

> **$type**: `"nebius.storage.v1alpha1.GetIterationHistoryResponse"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:978

***

### iterations

> **iterations**: [`TransferIteration`](TransferIteration.md)[]

Defined in: src/api/nebius/storage/v1alpha1/index.ts:984

List of transfer iterations sorted from newest to oldest.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:989

Token for pagination, indicating the next set of results can be retrieved using this token.
