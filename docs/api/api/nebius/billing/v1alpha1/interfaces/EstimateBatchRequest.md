[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / EstimateBatchRequest

# Interface: EstimateBatchRequest

Defined in: src/api/nebius/billing/v1alpha1/index.ts:262

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/billing/v1alpha1/index.ts:264

***

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateBatchRequest"`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:263

***

### offerTypes

> **offerTypes**: [`OfferType`](../type-aliases/OfferType.md)[]

Defined in: src/api/nebius/billing/v1alpha1/index.ts:275

Type of offers to be applied to the cost estimate.

***

### resourceSpecs

> **resourceSpecs**: [`ResourceSpec`](ResourceSpec.md)[]

Defined in: src/api/nebius/billing/v1alpha1/index.ts:270

List of resource specifications for cost estimation.
 Each resource will be priced individually and then aggregated into total costs.
