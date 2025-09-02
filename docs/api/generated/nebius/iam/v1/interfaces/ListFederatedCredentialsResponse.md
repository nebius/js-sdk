[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListFederatedCredentialsResponse

# Interface: ListFederatedCredentialsResponse

Defined in: src/generated/nebius/iam/v1/index.ts:6322

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:6324

***

### $type

> **$type**: `"nebius.iam.v1.ListFederatedCredentialsResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:6323

***

### items

> **items**: [`FederatedCredentials`](FederatedCredentials.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:6329

List of user accounts returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:6334

Token for pagination, indicating the next set of results can be retrieved using this token.
