[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / Allocation

# Interface: Allocation

Defined in: src/generated/nebius/vpc/v1/index.ts:1166

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:1168

---

### $type

> **$type**: `"nebius.vpc.v1.Allocation"`

Defined in: src/generated/nebius/vpc/v1/index.ts:1167

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1174

Metadata for the Allocation.
`metadata.parent_id` represents IAM Container.

---

### spec?

> `optional` **spec**: [`AllocationSpec`](AllocationSpec.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1179

Specifications for the allocation, detailing its name and IP configuration.

---

### status?

> `optional` **status**: [`AllocationStatus`](AllocationStatus.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1184

Contains the current status of the allocation, indicating its state and any additional details.
