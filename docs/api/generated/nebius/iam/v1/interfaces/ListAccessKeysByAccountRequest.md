[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAccessKeysByAccountRequest

# Interface: ListAccessKeysByAccountRequest

Defined in: src/generated/nebius/iam/v1/index.ts:683

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:685

---

### $type

> **$type**: `"nebius.iam.v1.ListAccessKeysByAccountRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:684

---

### account?

> `optional` **account**: [`Account`](Account.md)

Defined in: src/generated/nebius/iam/v1/index.ts:690

Represents the parent account ID.

---

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:706

A filter to narrow down the results based on specific criteria.

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:696

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:701

Token for pagination, allowing the retrieval of the next set of results.
