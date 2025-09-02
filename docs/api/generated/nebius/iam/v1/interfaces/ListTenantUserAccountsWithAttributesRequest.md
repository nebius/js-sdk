[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsWithAttributesRequest

# Interface: ListTenantUserAccountsWithAttributesRequest

Defined in: src/generated/nebius/iam/v1/index.ts:20634

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:20636

***

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsWithAttributesRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:20635

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20653

***

### pageSize?

> `optional` **pageSize**: `Long`

Defined in: src/generated/nebius/iam/v1/index.ts:20647

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20652

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20641

Represents the tenant ID like 'tenant-{region}someuniquesuffix'
