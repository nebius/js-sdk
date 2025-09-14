[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / CreateJobRequest

# Interface: CreateJobRequest

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2231

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2233

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.CreateJobRequest"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2232

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2238

Metadata associated with the new job. Must include parent_id - ID of the cluster to create job in.

---

### spec?

> `optional` **spec**: [`JobSpec`](JobSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2243

Specification for the new job.
