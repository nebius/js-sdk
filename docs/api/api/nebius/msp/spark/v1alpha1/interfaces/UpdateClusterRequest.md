[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / UpdateClusterRequest

# Interface: UpdateClusterRequest

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:586

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:588

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.UpdateClusterRequest"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:587

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:593

Metadata associated with the cluster. Must include id of the cluster we are going to update.

***

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:598

Updated specification for the cluster.
