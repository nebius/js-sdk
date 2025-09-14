[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NodeGroupStatus

# Interface: NodeGroupStatus

Defined in: src/generated/nebius/mk8s/v1/index.ts:6342

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:6344

---

### $type

> **$type**: `"nebius.mk8s.v1.NodeGroupStatus"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:6343

---

### ~~conditions~~

> **conditions**: [`Condition`](Condition.md)[]

Defined in: src/generated/nebius/mk8s/v1/index.ts:6379

#### Deprecated

Deprecated, will be removed on 2025-08-01: it is not implemented well, messages should be used instead.

---

### nodeCount

> **nodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:6365

Total number of nodes that are currently in the node group.
Both ready and not ready nodes are counted.

---

### outdatedNodeCount

> **outdatedNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:6371

Total number of nodes that has outdated node configuration.
These nodes will be replaced by new nodes with up-to-date configuration.

---

### readyNodeCount

> **readyNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:6377

Total number of nodes that successfully joined the cluster and are ready to serve workloads.
Both outdated and up-to-date nodes are counted.

---

### reconciling

> **reconciling**: `boolean`

Defined in: src/generated/nebius/mk8s/v1/index.ts:6384

Show that there are changes are in flight.

---

### state

> **state**: [`NodeGroupStatus_State`](../type-aliases/NodeGroupStatus_State.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:6345

---

### targetNodeCount

> **targetNodeCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:6359

Desired total number of nodes that should be in the node group.
It is either `NodeGroupSpec.fixed_node_count` or arbitrary number between
`NodeGroupAutoscalingSpec.min_node_count` and `NodeGroupAutoscalingSpec.max_node_count` decided by autoscaler.

---

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:6352

Actual version of NodeGroup. Have format `<major>.<minor>.<patch>-nebius-node.<infra_version>` like "1.30.0-nebius-node.10".
Where <major>.<minor>.<patch> is Kubernetes version and <infra_version> is version of Node infrastructure and configuration,
which update may include bug fixes, security updates and new features depending on worker node configuration.
