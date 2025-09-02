[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / EstimateRequest

# Interface: EstimateRequest

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:14

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:16

***

### $type

> **$type**: `"nebius.billing.v1alpha1.EstimateRequest"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:15

***

### offerTypes

> **offerTypes**: [`OfferType`](../type-aliases/OfferType.md)[]

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:27

Type of offers to be applied to the cost estimate.

***

### resourceSpec?

> `optional` **resourceSpec**: [`ResourceSpec`](ResourceSpec.md)

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:22

Resource specification for cost estimation.
 Must contain exactly one resource type.
