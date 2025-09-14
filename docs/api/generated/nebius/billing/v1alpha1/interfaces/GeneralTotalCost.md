[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / GeneralTotalCost

# Interface: GeneralTotalCost

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1009

General total cost with a single fixed amount.
Used for resources with predictable, non-variable pricing.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1011

---

### $type

> **$type**: `"nebius.billing.v1alpha1.GeneralTotalCost"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1010

---

### total?

> `optional` **total**: [`CostBreakdown`](CostBreakdown.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:1016

Cost breakdown including all SKUs and their individual costs.
