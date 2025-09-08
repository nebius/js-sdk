[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / EstimateResponse

# Interface: EstimateResponse

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:140

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:142

---

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateResponse"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:141

---

### hourlyCost?

> `optional` **hourlyCost**: [`ResourceGroupCost`](ResourceGroupCost.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:147

Estimated hourly cost for the resource.

---

### monthlyCost?

> `optional` **monthlyCost**: [`ResourceGroupCost`](ResourceGroupCost.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:153

Estimated monthly cost for the resource.
Calculated as hourly_cost _ 24 _ 30 (720 hours) for resources running continuously.
