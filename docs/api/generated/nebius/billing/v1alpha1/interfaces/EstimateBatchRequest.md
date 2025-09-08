[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / EstimateBatchRequest

# Interface: EstimateBatchRequest

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:261

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:263

---

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateBatchRequest"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:262

---

### offerTypes

> **offerTypes**: [`OfferType`](../type-aliases/OfferType.md)[]

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:274

Type of offers to be applied to the cost estimate.

---

### resourceSpecs

> **resourceSpecs**: [`ResourceSpec`](ResourceSpec.md)[]

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:269

List of resource specifications for cost estimation.
Each resource will be priced individually and then aggregated into total costs.
