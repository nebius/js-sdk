[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / ListOperationsRequest

# Interface: ListOperationsRequest

Defined in: src/generated/nebius/common/v1/index.ts:2755

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:2757

---

### $type

> **$type**: `"nebius.common.v1.ListOperationsRequest"`

Defined in: src/generated/nebius/common/v1/index.ts:2756

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/common/v1/index.ts:2767

Page size. [1...1000]. Optional, if not specified, a reasonable default will be chosen by the service.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2772

Listing continuation token. Empty to start listing from the first page.

---

### resourceId

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2762

ID of the Resource to list operations for.
