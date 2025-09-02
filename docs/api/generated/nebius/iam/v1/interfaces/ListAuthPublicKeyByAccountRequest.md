[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAuthPublicKeyByAccountRequest

# Interface: ListAuthPublicKeyByAccountRequest

Defined in: src/generated/nebius/iam/v1/index.ts:4043

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:4045

***

### $type

> **$type**: `"nebius.iam.v1.ListAuthPublicKeyByAccountRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:4044

***

### account?

> `optional` **account**: [`Account`](Account.md)

Defined in: src/generated/nebius/iam/v1/index.ts:4050

Represents the parent account ID.

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4066

A filter to narrow down the results based on specific criteria.

***

### pageSize

> **pageSize**: `Long`

Defined in: src/generated/nebius/iam/v1/index.ts:4056

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4061

Token for pagination, allowing the retrieval of the next set of results.
