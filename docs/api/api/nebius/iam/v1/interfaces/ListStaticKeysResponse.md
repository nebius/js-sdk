[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListStaticKeysResponse

# Interface: ListStaticKeysResponse

Defined in: src/api/nebius/iam/v1/index.ts:18222

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:18224

---

### $type

> **$type**: `"nebius.iam.v1.ListStaticKeysResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:18223

---

### items

> **items**: [`StaticKey`](StaticKey.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:18229

List of static keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:18234

Token for pagination, indicating the next set of results can be retrieved using this token.
