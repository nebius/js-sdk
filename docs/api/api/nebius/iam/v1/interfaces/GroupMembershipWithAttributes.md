[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / GroupMembershipWithAttributes

# Interface: GroupMembershipWithAttributes

Defined in: src/api/nebius/iam/v1/index.ts:11456

see also nebius/iam/v1/tenant_user_account.proto/TenantUserAccountWithAttributes

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:11458

***

### $type

> **$type**: `"nebius.iam.v1.GroupMembershipWithAttributes"`

Defined in: src/api/nebius/iam/v1/index.ts:11457

***

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"userAttributes"`; `userAttributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"serviceAccountAttributes"`; `serviceAccountAttributes`: [`ServiceAccountAttributes`](ServiceAccountAttributes.md); \} \| \{ `$case`: `"error"`; `error`: [`Error`](Error.md); \}

Defined in: src/api/nebius/iam/v1/index.ts:11461

***

### groupMemberKind?

> `optional` **groupMemberKind**: [`GroupMemberKind`](GroupMemberKind.md)

Defined in: src/api/nebius/iam/v1/index.ts:11460

***

### groupMembership?

> `optional` **groupMembership**: [`GroupMembership`](GroupMembership.md)

Defined in: src/api/nebius/iam/v1/index.ts:11459
