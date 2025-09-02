[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListServiceAccountResponse

# Interface: ListServiceAccountResponse

Defined in: src/generated/nebius/iam/v1/index.ts:16700

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:16702

***

### $type

> **$type**: `"nebius.iam.v1.ListServiceAccountResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:16701

***

### items

> **items**: [`ServiceAccount`](ServiceAccount.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:16707

List of service accounts returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:16712

Token for pagination, indicating the next set of results can be retrieved using this token.
