[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / ListOperationsByParentRequest

# Interface: ListOperationsByParentRequest

Defined in: src/api/nebius/compute/v1/index.ts:11031

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:11033

---

### $type

> **$type**: `"nebius.compute.v1.ListOperationsByParentRequest"`

Defined in: src/api/nebius/compute/v1/index.ts:11032

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/compute/v1/index.ts:11043

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:11048

Listing continuation token. Empty to start listing from the first page.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:11038

ID of the parent to list operations for resource type at.
