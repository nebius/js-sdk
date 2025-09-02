[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / InstanceSpec

# Interface: InstanceSpec

Defined in: src/generated/nebius/compute/v1/index.ts:7471

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:7473

***

### $type

> **$type**: `"nebius.compute.v1.InstanceSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:7472

***

### bootDisk?

> `optional` **bootDisk**: [`AttachedDiskSpec`](AttachedDiskSpec.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7503

Specified boot disk attached to the instance.

***

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:7519

Data in cloud-init format for customizing instance initialization.
 For details, see https://docs.nebius.com/compute/virtual-machines/manage#user-data

***

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/generated/nebius/compute/v1/index.ts:7513

List of Shared Filesystems attached to the instance.

***

### gpuCluster?

> `optional` **gpuCluster**: [`InstanceGpuClusterSpec`](InstanceGpuClusterSpec.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7493

If you want to interconnect several instances in a GPU cluster via NVIDIA InfiniBand,
 set the ID of an existing GPU cluster.
 You can only add the VM to the cluster when creating the VM.
 For details, see https://docs.nebius.com/compute/clusters/gpu

***

### hostname

> **hostname**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:7544

Instance's hostname. Used to generate default DNS record in format `<hostname>.<network_id>.compute.internal.`
 or `<instance_id>.<network_id>.compute.internal.` if hostname is not specified.

***

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceSpec`](NetworkInterfaceSpec.md)[]

Defined in: src/generated/nebius/compute/v1/index.ts:7498

List of network interfaces attached to the instance.

***

### preemptible?

> `optional` **preemptible**: [`PreemptibleSpec`](PreemptibleSpec.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7538

Include these parameters to create a Preemptible VM and omit them to create a Regular VM
 For details, see https://docs.nebius.com/compute/virtual-machines/preemptible

***

### recoveryPolicy

> **recoveryPolicy**: [`InstanceRecoveryPolicy`](../type-aliases/InstanceRecoveryPolicy.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7532

Recovery policy defines how the instance will be treated in case of a failure. Common source of failure is a host failure, but it can be any other failure.
 Instance undergoing a guest shutdown (poweroff, etc.) will be subject to recovery policy, meaning that it could be restarted and billed accordingly. Stop instance via API or UI to stop it to avoid recovering.
 If set to RECOVER, instance will be restarted, if possible. It could be restarted on the same host or on another host.
 If set to FAIL, instance will be stopped and not restarted.

***

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7485

Specification of compute resources allocated to the instance.
 For details, see https://docs.nebius.com/compute/virtual-machines/types

***

### secondaryDisks

> **secondaryDisks**: [`AttachedDiskSpec`](AttachedDiskSpec.md)[]

Defined in: src/generated/nebius/compute/v1/index.ts:7508

List of additional data disks attached to the instance beyond the boot disk.

***

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:7479

Unique identifier of the service account associated with this instance.
 For details, see https://docs.nebius.dev/en/iam/about-iam/concepts/service-accounts

***

### stopped

> **stopped**: `boolean`

Defined in: src/generated/nebius/compute/v1/index.ts:7524

Indicates whether the instance should be stopped.
