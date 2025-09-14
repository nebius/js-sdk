[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1alpha1](../README.md) / ListOperationsByParentRequest

# ~~Interface: ListOperationsByParentRequest~~

Defined in: src/api/nebius/common/v1alpha1/index.ts:412

## Deprecated

Deprecated.

## Properties

### ~~\[unknownFieldsSymbol\]?~~

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:414

---

### ~~$type~~

> **$type**: `"nebius.common.v1alpha1.ListOperationsByParentRequest"`

Defined in: src/api/nebius/common/v1alpha1/index.ts:413

---

### ~~filter~~

> **filter**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:435

Filter expression for the listing results. Optional.
Filter expression format: TBD.

---

### ~~pageSize~~

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/common/v1alpha1/index.ts:424

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

---

### ~~pageToken~~

> **pageToken**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:429

Listing continuation token. Empty to start listing from the first page.

---

### ~~parentId~~

> **parentId**: `string`

Defined in: src/api/nebius/common/v1alpha1/index.ts:419

ID of the parent to list operations for resource type at.
