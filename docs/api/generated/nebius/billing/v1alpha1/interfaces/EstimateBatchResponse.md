[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / EstimateBatchResponse

# Interface: EstimateBatchResponse

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:383

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:385

---

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateBatchResponse"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:384

---

### hourlyCost?

> `optional` **hourlyCost**: [`ResourceGroupCost`](ResourceGroupCost.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:390

Estimated hourly cost for all resources in the batch.

---

### monthlyCost?

> `optional` **monthlyCost**: [`ResourceGroupCost`](ResourceGroupCost.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:396

Estimated monthly cost for all resources in the batch.
Calculated as hourly_cost _ 24 _ 30 (720 hours) for resources running continuously.
