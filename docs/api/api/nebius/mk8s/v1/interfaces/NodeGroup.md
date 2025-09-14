[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / NodeGroup

# Interface: NodeGroup

Defined in: src/api/nebius/mk8s/v1/index.ts:4237

NodeGroup represents Kubernetes node pool - set of worker machines having the same configuration.
 A Node is a Nebius Compute Instance created in Cluster.metadata.parent_id container, running kubelet
 that registers in Kubernetes API and a Node object created.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:4239

***

### $type

> **$type**: `"nebius.mk8s.v1.NodeGroup"`

Defined in: src/api/nebius/mk8s/v1/index.ts:4238

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4244

The parent_id is an ID of Cluster

***

### spec?

> `optional` **spec**: [`NodeGroupSpec`](NodeGroupSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4245

***

### status?

> `optional` **status**: [`NodeGroupStatus`](NodeGroupStatus.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4246
