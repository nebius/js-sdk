[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceSpec

# Interface: QuotaAllowanceSpec

Defined in: src/generated/nebius/quotas/v1/index.ts:713

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/quotas/v1/index.ts:715

---

### $type

> **$type**: `"nebius.quotas.v1.QuotaAllowanceSpec"`

Defined in: src/generated/nebius/quotas/v1/index.ts:714

---

### limit?

> `optional` **limit**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/quotas/v1/index.ts:720

Total amount of resources allocated.

---

### region

> **region**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:726

Name of the region where the quota is allocated.
Example: "eu-north1".
