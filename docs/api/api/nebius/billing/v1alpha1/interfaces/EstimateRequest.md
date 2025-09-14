[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / EstimateRequest

# Interface: EstimateRequest

Defined in: src/api/nebius/billing/v1alpha1/index.ts:15

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/billing/v1alpha1/index.ts:17

***

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateRequest"`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:16

***

### offerTypes

> **offerTypes**: [`OfferType`](../type-aliases/OfferType.md)[]

Defined in: src/api/nebius/billing/v1alpha1/index.ts:28

Type of offers to be applied to the cost estimate.

***

### resourceSpec?

> `optional` **resourceSpec**: [`ResourceSpec`](ResourceSpec.md)

Defined in: src/api/nebius/billing/v1alpha1/index.ts:23

Resource specification for cost estimation.
 Must contain exactly one resource type.
