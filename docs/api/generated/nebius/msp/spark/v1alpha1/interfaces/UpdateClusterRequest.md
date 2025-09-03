[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / UpdateClusterRequest

# Interface: UpdateClusterRequest

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:585

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:587

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.UpdateClusterRequest"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:586

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:592

Metadata associated with the cluster. Must include id of the cluster we are going to update.

---

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:597

Updated specification for the cluster.
