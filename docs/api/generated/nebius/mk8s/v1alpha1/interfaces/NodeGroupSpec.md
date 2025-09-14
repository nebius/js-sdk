[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / NodeGroupSpec

# Interface: NodeGroupSpec

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4562

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4564

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeGroupSpec"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4563

---

### size?

> `optional` **size**: \{ `$case`: `"fixedNodeCount"`; `fixedNodeCount`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"autoscaling"`; `autoscaling`: [`NodeGroupAutoscalingSpec`](NodeGroupAutoscalingSpec.md); \}

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4574

---

### strategy?

> `optional` **strategy**: [`NodeGroupDeploymentStrategy`](NodeGroupDeploymentStrategy.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4573

---

### template?

> `optional` **template**: [`NodeTemplate`](NodeTemplate.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4572

---

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4571

Version is desired Kubernetes version of the cluster. For now only acceptable format is
`MAJOR.MINOR` like "1.31". Option for patch version update will be added later.
By default the cluster control plane MAJOR.MINOR version will be used.
