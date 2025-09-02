[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsRequest

# Interface: ListTenantUserAccountsRequest

Defined in: src/generated/nebius/iam/v1/index.ts:19959

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:19961

***

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:19960

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19978

***

### pageSize?

> `optional` **pageSize**: `Long`

Defined in: src/generated/nebius/iam/v1/index.ts:19972

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19977

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19966

Represents the tenant ID like 'tenant-someuniqueprefix'
