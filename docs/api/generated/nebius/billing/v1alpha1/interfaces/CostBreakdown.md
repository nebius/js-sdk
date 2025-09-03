[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / CostBreakdown

# Interface: CostBreakdown

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1203

Detailed cost breakdown showing individual SKU costs and totals.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1205

---

### $type

> **$type**: `"nebius.billing.v1alpha1.CostBreakdown"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1204

---

### cost

> **cost**: `string`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1212

Total cost as a decimal string.
Represents the sum of all SKU costs with full precision.
Example: "42.123456789" for precise billing calculations.

---

### costRounded

> **costRounded**: `string`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1218

Total cost rounded up to 2 decimal places.
Example: "42.13"
