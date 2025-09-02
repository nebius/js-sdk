[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / Allocation

# Interface: Allocation

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1037

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1039

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.Allocation"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1038

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1045

Metadata for the Allocation.
 `metadata.parent_id` represents IAM Container.

***

### spec?

> `optional` **spec**: [`AllocationSpec`](AllocationSpec.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1050

Specifications for the allocation, detailing its name and IP configuration.

***

### status?

> `optional` **status**: [`AllocationStatus`](AllocationStatus.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1055

Contains the current status of the allocation, indicating its state and any additional details.
