[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListServiceAccountResponse

# Interface: ListServiceAccountResponse

Defined in: src/api/nebius/iam/v1/index.ts:16698

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:16700

---

### $type

> **$type**: `"nebius.iam.v1.ListServiceAccountResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:16699

---

### items

> **items**: [`ServiceAccount`](ServiceAccount.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:16705

List of service accounts returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:16710

Token for pagination, indicating the next set of results can be retrieved using this token.
