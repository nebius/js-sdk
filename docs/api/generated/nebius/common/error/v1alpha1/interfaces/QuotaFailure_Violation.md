[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/common/error/v1alpha1](../README.md) / QuotaFailure_Violation

# Interface: QuotaFailure_Violation

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1283

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1285

---

### $type

> **$type**: `"nebius.common.error.v1alpha1.QuotaFailure.Violation"`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1284

---

### limit

> **limit**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1300

Maximum permissible value.

---

### message

> **message**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1295

A description of how the quota check failed.

---

### quota

> **quota**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1290

Which quota check failed.

---

### requested

> **requested**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1305

Requested value.
