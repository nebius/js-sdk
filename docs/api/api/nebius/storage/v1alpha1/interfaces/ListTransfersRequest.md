[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / ListTransfersRequest

# Interface: ListTransfersRequest

Defined in: src/api/nebius/storage/v1alpha1/index.ts:101

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:103

***

### $type

> **$type**: `"nebius.storage.v1alpha1.ListTransfersRequest"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:102

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:113

Specifies the maximum number of items to return in the response. Default: 10.

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:118

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:108

Represents the container ID.
