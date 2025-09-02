[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsRequest

# Interface: ListTenantUserAccountsRequest

Defined in: src/generated/nebius/iam/v1/index.ts:19956

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:19958

***

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:19957

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19975

***

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19969

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19974

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19963

Represents the tenant ID like 'tenant-someuniqueprefix'
