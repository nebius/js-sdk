[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListTenantUserAccountsResponse

# Interface: ListTenantUserAccountsResponse

Defined in: src/generated/nebius/iam/v1/index.ts:20111

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:20113

---

### $type

> **$type**: `"nebius.iam.v1.ListTenantUserAccountsResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:20112

---

### items

> **items**: [`TenantUserAccount`](TenantUserAccount.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:20118

List of service accounts returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:20123

Token for pagination, indicating the next set of results can be retrieved using this token.
