[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListServiceAccountRequest

# Interface: ListServiceAccountRequest

Defined in: src/api/nebius/iam/v1/index.ts:16342

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:16344

---

### $type

> **$type**: `"nebius.iam.v1.ListServiceAccountRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:16343

---

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:16365

A filter to narrow down the results based on specific criteria.

---

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v1/index.ts:16355

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:16360

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:16349

Represents the container ID.
