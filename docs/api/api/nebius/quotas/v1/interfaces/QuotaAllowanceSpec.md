[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/quotas/v1](../README.md) / QuotaAllowanceSpec

# Interface: QuotaAllowanceSpec

Defined in: src/api/nebius/quotas/v1/index.ts:725

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/quotas/v1/index.ts:727

---

### $type

> **$type**: `"nebius.quotas.v1.QuotaAllowanceSpec"`

Defined in: src/api/nebius/quotas/v1/index.ts:726

---

### limit?

> `optional` **limit**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/quotas/v1/index.ts:732

Total amount of resources allocated.

---

### region

> **region**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:738

Name of the region where the quota is allocated.
Example: "eu-north1".
