[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsRequest

# Interface: ListTenantUserAccountsRequest

Defined in: src/generated/nebius/iam/v1/index.ts:19957

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:19959

---

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:19958

---

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19976

---

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19970

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19975

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:19964

Represents the tenant ID like 'tenant-someuniqueprefix'
