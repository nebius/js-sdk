[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / InstanceSpec

# Interface: InstanceSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6757

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6759

***

### $type

> **$type**: `"nebius.compute.v1alpha1.InstanceSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6758

***

### bootDisk?

> `optional` **bootDisk**: [`AttachedDiskSpec`](AttachedDiskSpec.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6764

***

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6767

***

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6766

***

### gpuCluster?

> `optional` **gpuCluster**: [`InstanceGpuClusterSpec`](InstanceGpuClusterSpec.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6762

***

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceSpec`](../../../vpc/v1alpha1/interfaces/NetworkInterfaceSpec.md)[]

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6763

***

### recoveryPolicy

> **recoveryPolicy**: [`InstanceRecoveryPolicy`](../type-aliases/InstanceRecoveryPolicy.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6776

Recovery policy defines how the instance will be treated in case of a failure. Common source of failure is a host failure, but it can be any other failure.
 Instance undergoing a guest shutdown (poweroff, etc.) will be subject to recovery policy, meaning that it could be restarted and billed accordingly. Stop instance via API or UI to stop it to avoid recovering.
 If set to RECOVER, instance will be restarted, if possible. It could be restarted on the same host or on another host.
 If set to FAIL, instance will be stopped and not restarted.

***

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6761

***

### secondaryDisks

> **secondaryDisks**: [`AttachedDiskSpec`](AttachedDiskSpec.md)[]

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6765

***

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6760

***

### stopped

> **stopped**: `boolean`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6768
