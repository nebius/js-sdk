[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NodeGroupSpec

# Interface: NodeGroupSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:4376

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:4378

---

### $type

> **$type**: `"nebius.mk8s.v1.NodeGroupSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4377

---

### size?

> `optional` **size**: \{ `$case`: `"fixedNodeCount"`; `fixedNodeCount`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"autoscaling"`; `autoscaling`: [`NodeGroupAutoscalingSpec`](NodeGroupAutoscalingSpec.md); \}

Defined in: src/generated/nebius/mk8s/v1/index.ts:4398

---

### strategy?

> `optional` **strategy**: [`NodeGroupDeploymentStrategy`](NodeGroupDeploymentStrategy.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4397

Defines deployment - roll-out, or nodes re-creation during configuration change.
Allows to setup compromise in roll-out speed, extra resources consumption and workloads disruption.

---

### template?

> `optional` **template**: [`NodeTemplate`](NodeTemplate.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4391

Parameters for Kubernetes Node object and Nebius Compute Instance
If not written opposite a NodeTemplate field update will cause NodeGroup roll-out according NodeGroupDeploymentStrategy.

---

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4385

Version is desired Kubernetes version of the cluster. For now only acceptable format is
`<major>.<minor>` like "1.31". Option for patch version update will be added later.
By default the cluster control plane <major>.<minor> version will be used.
