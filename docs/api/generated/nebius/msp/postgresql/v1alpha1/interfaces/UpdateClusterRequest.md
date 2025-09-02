[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / UpdateClusterRequest

# Interface: UpdateClusterRequest

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1888

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1890

***

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.UpdateClusterRequest"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1889

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1895

Metadata associated with the cluster. Must include id of the cluster we are going to update.

***

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1900

Updated specification for the cluster.
