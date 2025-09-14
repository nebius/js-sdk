[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / ResourceGroupCost

# Interface: ResourceGroupCost

Defined in: src/api/nebius/billing/v1alpha1/index.ts:892

Cost information for a group of resources.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/billing/v1alpha1/index.ts:894

---

### $type

> **$type**: `"nebius.billing.v1alpha1.ResourceGroupCost"`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:893

---

### costType?

> `optional` **costType**: `object`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:895

#### $case

> **$case**: `"general"`

#### general

> **general**: [`GeneralTotalCost`](GeneralTotalCost.md)
