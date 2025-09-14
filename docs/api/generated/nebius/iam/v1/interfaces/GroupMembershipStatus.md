[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / GroupMembershipStatus

# Interface: GroupMembershipStatus

Defined in: src/generated/nebius/iam/v1/index.ts:11222

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:11224

---

### $type

> **$type**: `"nebius.iam.v1.GroupMembershipStatus"`

Defined in: src/generated/nebius/iam/v1/index.ts:11223

---

### groupMemberStatus?

> `optional` **groupMemberStatus**: \{ `$case`: `"tenantUserAccountStatus"`; `tenantUserAccountStatus`: [`TenantUserAccountStatus`](TenantUserAccountStatus.md); \} \| \{ `$case`: `"serviceAccountStatus"`; `serviceAccountStatus`: [`ServiceAccountStatus`](ServiceAccountStatus.md); \}

Defined in: src/generated/nebius/iam/v1/index.ts:11225
