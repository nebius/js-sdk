[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v2](../README.md) / ListAccessKeysByAccountRequest

# Interface: ListAccessKeysByAccountRequest

Defined in: src/generated/nebius/iam/v2/index.ts:457

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v2/index.ts:459

***

### $type

> **$type**: `"nebius.iam.v2.ListAccessKeysByAccountRequest"`

Defined in: src/generated/nebius/iam/v2/index.ts:458

***

### account?

> `optional` **account**: [`Account`](../../v1/interfaces/Account.md)

Defined in: src/generated/nebius/iam/v2/index.ts:464

Represents the parent account ID.

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v2/index.ts:480

A filter to narrow down the results based on specific criteria.

***

### pageSize

> **pageSize**: `Long`

Defined in: src/generated/nebius/iam/v2/index.ts:470

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v2/index.ts:475

Token for pagination, allowing the retrieval of the next set of results.
