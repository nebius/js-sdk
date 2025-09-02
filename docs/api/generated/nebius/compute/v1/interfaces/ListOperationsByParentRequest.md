[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / ListOperationsByParentRequest

# Interface: ListOperationsByParentRequest

Defined in: src/generated/nebius/compute/v1/index.ts:11030

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:11032

***

### $type

> **$type**: `"nebius.compute.v1.ListOperationsByParentRequest"`

Defined in: src/generated/nebius/compute/v1/index.ts:11031

***

### pageSize

> **pageSize**: `Long`

Defined in: src/generated/nebius/compute/v1/index.ts:11042

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:11047

Listing continuation token. Empty to start listing from the first page.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:11037

ID of the parent to list operations for resource type at.
