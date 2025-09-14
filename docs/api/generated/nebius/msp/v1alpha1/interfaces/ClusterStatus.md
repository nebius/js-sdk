[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/msp/v1alpha1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:65

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:67

---

### $type

> **$type**: `"nebius.msp.v1alpha1.ClusterStatus"`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:66

---

### phase

> **phase**: [`ClusterStatus_Phase`](../type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:72

Current phase of the cluster.

---

### reconciling

> **reconciling**: `boolean`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:78

---

### state

> **state**: [`ClusterStatus_State`](../type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:77

State reflects substatus of the phase to define whether it's healthy or not.
