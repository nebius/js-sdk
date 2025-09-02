[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / GroupMembershipWithAttributes

# Interface: GroupMembershipWithAttributes

Defined in: src/generated/nebius/iam/v1/index.ts:11458

see also nebius/iam/v1/tenant_user_account.proto/TenantUserAccountWithAttributes

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:11460

***

### $type

> **$type**: `"nebius.iam.v1.GroupMembershipWithAttributes"`

Defined in: src/generated/nebius/iam/v1/index.ts:11459

***

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"userAttributes"`; `userAttributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"serviceAccountAttributes"`; `serviceAccountAttributes`: [`ServiceAccountAttributes`](ServiceAccountAttributes.md); \} \| \{ `$case`: `"error"`; `error`: [`Error`](Error.md); \}

Defined in: src/generated/nebius/iam/v1/index.ts:11463

***

### groupMemberKind?

> `optional` **groupMemberKind**: [`GroupMemberKind`](GroupMemberKind.md)

Defined in: src/generated/nebius/iam/v1/index.ts:11462

***

### groupMembership?

> `optional` **groupMembership**: [`GroupMembership`](GroupMembership.md)

Defined in: src/generated/nebius/iam/v1/index.ts:11461
