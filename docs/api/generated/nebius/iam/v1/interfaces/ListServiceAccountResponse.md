[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListServiceAccountResponse

# Interface: ListServiceAccountResponse

Defined in: src/generated/nebius/iam/v1/index.ts:16697

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:16699

***

### $type

> **$type**: `"nebius.iam.v1.ListServiceAccountResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:16698

***

### items

> **items**: [`ServiceAccount`](ServiceAccount.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:16704

List of service accounts returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:16709

Token for pagination, indicating the next set of results can be retrieved using this token.
