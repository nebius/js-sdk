[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / PreemptibleSpec

# Interface: PreemptibleSpec

Defined in: src/api/nebius/compute/v1/index.ts:7841

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:7843

***

### $type

> **$type**: `"nebius.compute.v1.PreemptibleSpec"`

Defined in: src/api/nebius/compute/v1/index.ts:7842

***

### onPreemption

> **onPreemption**: [`PreemptibleSpec_PreemptionPolicy`](../type-aliases/PreemptibleSpec_PreemptionPolicy.md)

Defined in: src/api/nebius/compute/v1/index.ts:7849

Specifies what happens when the VM is preempted. The only supported value is STOP:
 Compute stops the VM without deleting or restarting it.

***

### priority

> **priority**: `number`

Defined in: src/api/nebius/compute/v1/index.ts:7855

The value can range from 1 to 5, where 5 indicates the highest priority.
 Affects the order in which Compute tries to preempt VMs, but does not guarantee the exact order.
