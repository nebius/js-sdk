[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1alpha1](../README.md) / ListOperationsRequest

# ~~Interface: ListOperationsRequest~~

Defined in: src/generated/nebius/common/v1alpha1/index.ts:118

## Deprecated

Deprecated.

## Properties

### ~~\[unknownFieldsSymbol\]?~~

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:120

***

### ~~$type~~

> **$type**: `"nebius.common.v1alpha1.ListOperationsRequest"`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:119

***

### ~~filter~~

> **filter**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:141

Filter expression for the listing results. Optional.
 Filter expression format: TBD.

***

### ~~pageSize~~

> **pageSize**: `Long`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:130

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

***

### ~~pageToken~~

> **pageToken**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:135

Listing continuation token. Empty to start listing from the first page.

***

### ~~resourceId~~

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:125

ID of the Resource to list operations for.
