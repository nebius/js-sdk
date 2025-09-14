[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / Pool

# Interface: Pool

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4845

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4847

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.Pool"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4846

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4853

Metadata associated with the Pool.
`metadata.parent_id` represents the Project.

---

### spec?

> `optional` **spec**: [`PoolSpec`](PoolSpec.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4858

Specification of the Pool.

---

### status?

> `optional` **status**: [`PoolStatus`](PoolStatus.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4863

Status information for the Pool.
