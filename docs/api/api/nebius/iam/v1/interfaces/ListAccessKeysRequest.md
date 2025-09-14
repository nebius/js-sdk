[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListAccessKeysRequest

# Interface: ListAccessKeysRequest

Defined in: src/api/nebius/iam/v1/index.ts:524

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:526

---

### $type

> **$type**: `"nebius.iam.v1.ListAccessKeysRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:525

---

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:547

A filter to narrow down the results based on specific criteria.

---

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v1/index.ts:537

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:542

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:531

Represents the container ID.
