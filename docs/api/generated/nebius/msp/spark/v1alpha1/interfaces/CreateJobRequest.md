[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / CreateJobRequest

# Interface: CreateJobRequest

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2208

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2210

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.CreateJobRequest"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2209

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2215

Metadata associated with the new job. Must include parent_id - ID of the cluster to create job in.

***

### spec?

> `optional` **spec**: [`JobSpec`](JobSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2220

Specification for the new job.
