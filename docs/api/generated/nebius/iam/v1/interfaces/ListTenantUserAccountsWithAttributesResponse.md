[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsWithAttributesResponse

# Interface: ListTenantUserAccountsWithAttributesResponse

Defined in: src/generated/nebius/iam/v1/index.ts:20786

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:20788

---

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsWithAttributesResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:20787

---

### items

> **items**: [`TenantUserAccountWithAttributes`](TenantUserAccountWithAttributes.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:20793

List of user accounts returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20798

Token for pagination, indicating the next set of results can be retrieved using this token.
