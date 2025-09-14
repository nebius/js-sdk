[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / CostBreakdown

# Interface: CostBreakdown

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1204

Detailed cost breakdown showing individual SKU costs and totals.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1206

---

### $type

> **$type**: `"nebius.billing.v1alpha1.CostBreakdown"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1205

---

### cost

> **cost**: `string`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1213

Total cost as a decimal string.
Represents the sum of all SKU costs with full precision.
Example: "42.123456789" for precise billing calculations.

---

### costRounded

> **costRounded**: `string`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1219

Total cost rounded up to 2 decimal places.
Example: "42.13"
