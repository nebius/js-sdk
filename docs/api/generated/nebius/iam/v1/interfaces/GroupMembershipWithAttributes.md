[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / GroupMembershipWithAttributes

# Interface: GroupMembershipWithAttributes

Defined in: src/generated/nebius/iam/v1/index.ts:11455

see also nebius/iam/v1/tenant_user_account.proto/TenantUserAccountWithAttributes

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:11457

---

### $type

> **$type**: `"nebius.iam.v1.GroupMembershipWithAttributes"`

Defined in: src/generated/nebius/iam/v1/index.ts:11456

---

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"userAttributes"`; `userAttributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"serviceAccountAttributes"`; `serviceAccountAttributes`: [`ServiceAccountAttributes`](ServiceAccountAttributes.md); \} \| \{ `$case`: `"error"`; `error`: [`Error`](Error.md); \}

Defined in: src/generated/nebius/iam/v1/index.ts:11460

---

### groupMemberKind?

> `optional` **groupMemberKind**: [`GroupMemberKind`](GroupMemberKind.md)

Defined in: src/generated/nebius/iam/v1/index.ts:11459

---

### groupMembership?

> `optional` **groupMembership**: [`GroupMembership`](GroupMembership.md)

Defined in: src/generated/nebius/iam/v1/index.ts:11458
