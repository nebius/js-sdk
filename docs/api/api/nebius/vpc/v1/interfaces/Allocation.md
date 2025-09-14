[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / Allocation

# Interface: Allocation

Defined in: src/api/nebius/vpc/v1/index.ts:1167

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:1169

---

### $type

> **$type**: `"nebius.vpc.v1.Allocation"`

Defined in: src/api/nebius/vpc/v1/index.ts:1168

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1175

Metadata for the Allocation.
`metadata.parent_id` represents IAM Container.

---

### spec?

> `optional` **spec**: [`AllocationSpec`](AllocationSpec.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1180

Specifications for the allocation, detailing its name and IP configuration.

---

### status?

> `optional` **status**: [`AllocationStatus`](AllocationStatus.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1185

Contains the current status of the allocation, indicating its state and any additional details.
