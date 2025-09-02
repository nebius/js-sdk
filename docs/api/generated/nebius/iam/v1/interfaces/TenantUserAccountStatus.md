[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TenantUserAccountStatus

# Interface: TenantUserAccountStatus

Defined in: src/generated/nebius/iam/v1/index.ts:21931

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:21933

***

### $type

> **$type**: `"nebius.iam.v1.TenantUserAccountStatus"`

Defined in: src/generated/nebius/iam/v1/index.ts:21932

***

### federationId

> **federationId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:21945

currently can only accept the values: custom, unknown, google, github.

***

### invitationId

> **invitationId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:21940

if a tenant user account is created during invitation it gets a reference to the invitation resource
 once invitation is accepted it looses this reference (and internally gets a reference to their global federated user account)

***

### state

> **state**: [`TenantUserAccountStatus_State`](../type-aliases/TenantUserAccountStatus_State.md)

Defined in: src/generated/nebius/iam/v1/index.ts:21934

***

### userAccountState

> **userAccountState**: [`UserAccountStatus_State`](../type-aliases/UserAccountStatus_State.md)

Defined in: src/generated/nebius/iam/v1/index.ts:21950

user account state can help distinguish case when account is blocked globally
