[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListFederatedCredentialsRequest

# Interface: ListFederatedCredentialsRequest

Defined in: src/api/nebius/iam/v1/index.ts:6162

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:6164

---

### $type

> **$type**: `"nebius.iam.v1.ListFederatedCredentialsRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:6163

---

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:6184

A filter to narrow down the results based on specific criteria.

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v1/index.ts:6174

Specifies the maximum number of items to return in the response. Default is 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:6179

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:6169

Represents the parent NID
