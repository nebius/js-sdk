[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / GetProfileResponse

# Interface: GetProfileResponse

Defined in: src/api/nebius/iam/v1/index.ts:14478

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:14480

---

### $type

> **$type**: `"nebius.iam.v1.GetProfileResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:14479

---

### profile?

> `optional` **profile**: \{ `$case`: `"userProfile"`; `userProfile`: [`UserProfile`](UserProfile.md); \} \| \{ `$case`: `"serviceAccountProfile"`; `serviceAccountProfile`: [`ServiceAccountProfile`](ServiceAccountProfile.md); \} \| \{ `$case`: `"anonymousProfile"`; `anonymousProfile`: [`AnonymousAccount`](AnonymousAccount.md); \}

Defined in: src/api/nebius/iam/v1/index.ts:14481
