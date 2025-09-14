[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / CreateClusterRequest

# Interface: CreateClusterRequest

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:466

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:468

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.CreateClusterRequest"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:467

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:473

Metadata associated with the new cluster. Must include parent_id in which we create the cluster.

---

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:478

Specification for the new cluster.
