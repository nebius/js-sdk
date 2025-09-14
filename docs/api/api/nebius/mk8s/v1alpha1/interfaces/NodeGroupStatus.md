[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / NodeGroupStatus

# Interface: NodeGroupStatus

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6487

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6489

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeGroupStatus"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6488

***

### ~~conditions~~

> **conditions**: [`Condition`](Condition.md)[]

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6521

#### Deprecated

Deprecated, will be removed on 2025-08-01: it is not implemented well, messages should be used instead.

***

### nodeCount

> **nodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6507

Total number of nodes that are currently in the node group.
 Both ready and not ready nodes are counted.

***

### outdatedNodeCount

> **outdatedNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6513

Total number of nodes that has outdated node configuration.
 These nodes will be replaced by new nodes with up-to-date configuration.

***

### readyNodeCount

> **readyNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6519

Total number of nodes that successfully joined the cluster and are ready to serve workloads.
 Both outdated and up-to-date nodes are counted.

***

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6526

Show that changes are in flight

***

### state

> **state**: [`NodeGroupStatus_State`](../type-aliases/NodeGroupStatus_State.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6490

***

### targetNodeCount

> **targetNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6501

Desired total number of nodes that should be in the node group.
 It is either fixed_node_count or arbitrary number between min_node_count and max_node_count decided by autoscaler.

***

### version

> **version**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:6495

Version have format `MAJOR.MINOR.PATCH-nebius-node.n` like "1.30.0-nebius-node.10".
