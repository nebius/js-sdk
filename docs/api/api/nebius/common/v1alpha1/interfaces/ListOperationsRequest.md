[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1alpha1](../README.md) / ListOperationsRequest

# ~~Interface: ListOperationsRequest~~

Defined in: src/api/nebius/common/v1alpha1/index.ts:119

## Deprecated

Deprecated.

## Properties

### ~~\[unknownFieldsSymbol\]?~~

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:121

***

### ~~$type~~

> **$type**: `"nebius.common.v1alpha1.ListOperationsRequest"`

Defined in: src/api/nebius/common/v1alpha1/index.ts:120

***

### ~~filter~~

> **filter**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:142

Filter expression for the listing results. Optional.
 Filter expression format: TBD.

***

### ~~pageSize~~

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/common/v1alpha1/index.ts:131

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

***

### ~~pageToken~~

> **pageToken**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:136

Listing continuation token. Empty to start listing from the first page.

***

### ~~resourceId~~

> **resourceId**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:126

ID of the Resource to list operations for.
