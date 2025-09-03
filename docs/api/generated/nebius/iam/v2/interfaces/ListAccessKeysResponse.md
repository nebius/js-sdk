[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v2](../README.md) / ListAccessKeysResponse

# Interface: ListAccessKeysResponse

Defined in: src/generated/nebius/iam/v2/index.ts:1242

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v2/index.ts:1244

---

### $type

> **$type**: `"nebius.iam.v2.ListAccessKeysResponse"`

Defined in: src/generated/nebius/iam/v2/index.ts:1243

---

### items

> **items**: [`AccessKey`](AccessKey.md)[]

Defined in: src/generated/nebius/iam/v2/index.ts:1249

List of access keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v2/index.ts:1254

Token for pagination, indicating the next set of results can be retrieved using this token.
