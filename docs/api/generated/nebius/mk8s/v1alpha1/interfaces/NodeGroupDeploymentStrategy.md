[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / NodeGroupDeploymentStrategy

# Interface: NodeGroupDeploymentStrategy

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5857

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5859

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeGroupDeploymentStrategy"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5858

***

### drainTimeout?

> `optional` **drainTimeout**: `Duration`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5899

DrainTimeout is the total amount of time that the service will spend on draining a node.
 By default, node can be drained without any time limitations.
 NOTE: NodeDrainTimeout is different from `kubectl drain --timeout`

***

### maxSurge?

> `optional` **maxSurge**: [`PercentOrCount`](PercentOrCount.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5892

The maximum number of machines that can be scheduled above the
 desired number of machines.
 Value can be an absolute number (ex: 5) or a percentage of
 desired machines (ex: 10%).
 This can not be 0 if MaxUnavailable is 0.
 Absolute number is calculated from percentage by rounding up.
 Defaults to 1.
 Example: when this is set to 30%, the new MachineSet can be scaled
 up immediately when the rolling update starts, such that the total
 number of old and new machines do not exceed 130% of desired
 machines. Once old machines have been killed, new MachineSet can
 be scaled up further, ensuring that total number of machines running
 at any time during the update is at most 130% of desired machines.

***

### maxUnavailable?

> `optional` **maxUnavailable**: [`PercentOrCount`](PercentOrCount.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5875

The maximum number of machines that can be unavailable during the update.
 Value can be an absolute number (ex: 5) or a percentage of desired
 machines (ex: 10%).
 Absolute number is calculated from percentage by rounding down.
 This can not be 0 if MaxSurge is 0.
 Defaults to 0.
 Example: when this is set to 30%, the old MachineSet can be scaled
 down to 70% of desired machines immediately when the rolling update
 starts. Once new machines are ready, old MachineSet can be scaled
 down further, followed by scaling up the new MachineSet, ensuring
 that the total number of machines available at all times
 during the update is at least 70% of desired machines.
