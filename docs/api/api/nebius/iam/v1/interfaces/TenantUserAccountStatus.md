[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccountStatus

# Interface: TenantUserAccountStatus

Defined in: src/api/nebius/iam/v1/index.ts:21929

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:21931

---

### $type

> **$type**: `"nebius.iam.v1.TenantUserAccountStatus"`

Defined in: src/api/nebius/iam/v1/index.ts:21930

---

### federationId

> **federationId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:21943

currently can only accept the values: custom, unknown, google, github.

---

### invitationId

> **invitationId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:21938

if a tenant user account is created during invitation it gets a reference to the invitation resource
once invitation is accepted it looses this reference (and internally gets a reference to their global federated user account)

---

### state

> **state**: [`TenantUserAccountStatus_State`](../type-aliases/TenantUserAccountStatus_State.md)

Defined in: src/api/nebius/iam/v1/index.ts:21932

---

### userAccountState

> **userAccountState**: [`UserAccountStatus_State`](../type-aliases/UserAccountStatus_State.md)

Defined in: src/api/nebius/iam/v1/index.ts:21948

user account state can help distinguish case when account is blocked globally
