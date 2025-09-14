[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / NodeGroup

# Interface: NodeGroup

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4423

NodeGroup represents Kubernetes node pool

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4425

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeGroup"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4424

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4430

the parent_id is an ID of Cluster

---

### spec?

> `optional` **spec**: [`NodeGroupSpec`](NodeGroupSpec.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4431

---

### status?

> `optional` **status**: [`NodeGroupStatus`](NodeGroupStatus.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4432
