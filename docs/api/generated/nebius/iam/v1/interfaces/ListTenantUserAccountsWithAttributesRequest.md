[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsWithAttributesRequest

# Interface: ListTenantUserAccountsWithAttributesRequest

Defined in: src/generated/nebius/iam/v1/index.ts:20631

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:20633

---

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsWithAttributesRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:20632

---

### filter

> **filter**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20650

---

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:20644

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20649

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20638

Represents the tenant ID like 'tenant-{region}someuniquesuffix'
