[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / GeneralResourceCost

# Interface: GeneralResourceCost

Defined in: src/api/nebius/billing/v1alpha1/index.ts:1107

General resource cost for single-unit resources.
 Used for resources like compute instances or disks where the unit count is not variable.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/billing/v1alpha1/index.ts:1109

***

### $type

> **$type**: `"nebius.billing.v1alpha1.GeneralResourceCost"`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:1108

***

### total?

> `optional` **total**: [`CostBreakdown`](CostBreakdown.md)

Defined in: src/api/nebius/billing/v1alpha1/index.ts:1114

Cost breakdown for the resource including all SKU costs and total cost.
