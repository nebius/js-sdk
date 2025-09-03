[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / Subject

# Interface: Subject

Defined in: src/generated/nebius/audit/v2/index.ts:2497

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:2499

---

### $type

> **$type**: `"nebius.audit.v2.Subject"`

Defined in: src/generated/nebius/audit/v2/index.ts:2498

---

### id?

> `optional` **id**: \{ `$case`: `"serviceAccountId"`; `serviceAccountId`: `string`; \} \| \{ `$case`: `"tenantUserId"`; `tenantUserId`: `string`; \}

Defined in: src/generated/nebius/audit/v2/index.ts:2505

---

### name

> **name**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:2504

Username of the subject.
