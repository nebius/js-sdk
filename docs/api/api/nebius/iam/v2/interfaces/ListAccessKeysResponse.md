[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v2](../README.md) / ListAccessKeysResponse

# Interface: ListAccessKeysResponse

Defined in: src/api/nebius/iam/v2/index.ts:1243

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v2/index.ts:1245

---

### $type

> **$type**: `"nebius.iam.v2.ListAccessKeysResponse"`

Defined in: src/api/nebius/iam/v2/index.ts:1244

---

### items

> **items**: [`AccessKey`](AccessKey.md)[]

Defined in: src/api/nebius/iam/v2/index.ts:1250

List of access keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:1255

Token for pagination, indicating the next set of results can be retrieved using this token.
