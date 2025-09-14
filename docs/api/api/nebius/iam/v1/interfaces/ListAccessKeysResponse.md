[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListAccessKeysResponse

# Interface: ListAccessKeysResponse

Defined in: src/api/nebius/iam/v1/index.ts:1310

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:1312

---

### $type

> **$type**: `"nebius.iam.v1.ListAccessKeysResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:1311

---

### items

> **items**: [`AccessKey`](AccessKey.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:1317

List of access keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:1322

Token for pagination, indicating the next set of results can be retrieved using this token.
