[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAuthPublicKeyResponse

# Interface: ListAuthPublicKeyResponse

Defined in: src/generated/nebius/iam/v1/index.ts:4573

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:4575

***

### $type

> **$type**: `"nebius.iam.v1.ListAuthPublicKeyResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:4574

***

### items

> **items**: [`AuthPublicKey`](AuthPublicKey.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:4580

List of auth public keys returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4585

Token for pagination, indicating the next set of results can be retrieved using this token.
