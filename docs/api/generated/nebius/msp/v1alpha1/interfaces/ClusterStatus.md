[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/msp/v1alpha1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:64

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:66

***

### $type

> **$type**: `"nebius.msp.v1alpha1.ClusterStatus"`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:65

***

### phase

> **phase**: [`ClusterStatus_Phase`](../type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:71

Current phase of the cluster.

***

### reconciling

> **reconciling**: `boolean`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:77

***

### state

> **state**: [`ClusterStatus_State`](../type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:76

State reflects substatus of the phase to define whether it's healthy or not.
