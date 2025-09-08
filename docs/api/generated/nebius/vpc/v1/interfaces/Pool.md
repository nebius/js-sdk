[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / Pool

# Interface: Pool

Defined in: src/generated/nebius/vpc/v1/index.ts:5469

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:5471

---

### $type

> **$type**: `"nebius.vpc.v1.Pool"`

Defined in: src/generated/nebius/vpc/v1/index.ts:5470

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5477

Metadata associated with the Pool.
`metadata.parent_id` represents the Project.

---

### spec?

> `optional` **spec**: [`PoolSpec`](PoolSpec.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5482

Specification of the Pool.

---

### status?

> `optional` **status**: [`PoolStatus`](PoolStatus.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5487

Status information for the Pool.
