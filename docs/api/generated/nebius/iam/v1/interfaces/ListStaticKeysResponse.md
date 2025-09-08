[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListStaticKeysResponse

# Interface: ListStaticKeysResponse

Defined in: src/generated/nebius/iam/v1/index.ts:18221

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:18223

---

### $type

> **$type**: `"nebius.iam.v1.ListStaticKeysResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:18222

---

### items

> **items**: [`StaticKey`](StaticKey.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:18228

List of static keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:18233

Token for pagination, indicating the next set of results can be retrieved using this token.
