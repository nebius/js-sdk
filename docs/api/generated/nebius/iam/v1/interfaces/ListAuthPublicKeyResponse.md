[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAuthPublicKeyResponse

# Interface: ListAuthPublicKeyResponse

Defined in: src/generated/nebius/iam/v1/index.ts:4570

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:4572

***

### $type

> **$type**: `"nebius.iam.v1.ListAuthPublicKeyResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:4571

***

### items

> **items**: [`AuthPublicKey`](AuthPublicKey.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:4577

List of auth public keys returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4582

Token for pagination, indicating the next set of results can be retrieved using this token.
