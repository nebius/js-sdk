[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListTenantUserAccountsWithAttributesRequest

# Interface: ListTenantUserAccountsWithAttributesRequest

Defined in: src/api/nebius/iam/v1/index.ts:20632

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:20634

***

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsWithAttributesRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:20633

***

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:20651

***

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v1/index.ts:20645

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:20650

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:20639

Represents the tenant ID like 'tenant-{region}someuniquesuffix'
