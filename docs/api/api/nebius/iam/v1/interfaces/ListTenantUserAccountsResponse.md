[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListTenantUserAccountsResponse

# Interface: ListTenantUserAccountsResponse

Defined in: src/api/nebius/iam/v1/index.ts:20112

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:20114

***

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:20113

***

### items

> **items**: [`TenantUserAccount`](TenantUserAccount.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:20119

List of service accounts returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:20124

Token for pagination, indicating the next set of results can be retrieved using this token.
