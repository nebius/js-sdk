[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAuthPublicKeyByAccountRequest

# Interface: ListAuthPublicKeyByAccountRequest

Defined in: src/generated/nebius/iam/v1/index.ts:4040

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:4042

***

### $type

> **$type**: `"nebius.iam.v1.ListAuthPublicKeyByAccountRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:4041

***

### account?

> `optional` **account**: [`Account`](Account.md)

Defined in: src/generated/nebius/iam/v1/index.ts:4047

Represents the parent account ID.

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4063

A filter to narrow down the results based on specific criteria.

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:4053

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:4058

Token for pagination, allowing the retrieval of the next set of results.
