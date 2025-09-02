[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / NodeTemplate

# Interface: NodeTemplate

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4505

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4507

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeTemplate"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4506

***

### bootDisk?

> `optional` **bootDisk**: [`DiskSpec`](DiskSpec.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4511

***

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4524

cloud-init user-data. Must contain at least one SSH key.

***

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4519

***

### gpuCluster?

> `optional` **gpuCluster**: [`GpuClusterSpec`](GpuClusterSpec.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4517

***

### gpuSettings?

> `optional` **gpuSettings**: [`GpuSettings`](GpuSettings.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4516

GPU-related settings.

***

### metadata?

> `optional` **metadata**: [`NodeMetadataTemplate`](NodeMetadataTemplate.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4508

***

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceTemplate`](NetworkInterfaceTemplate.md)[]

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4518

***

### preemptible?

> `optional` **preemptible**: [`PreemptibleSpec`](PreemptibleSpec.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4539

Configures whether the nodes in the group are preemptible.
 Set to empty value to enable preemptible nodes.

***

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4510

***

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4533

the Nebius service account whose credentials will be available on the nodes of the group.
 With these credentials, it is possible to make `nebius` CLI or public API requests from the nodes without the need for extra authentication.
 This service account is also used to make requests to container registry.

 `resource.serviceaccount.issueAccessToken` permission is required to use this field.

***

### taints

> **taints**: [`NodeTaint`](NodeTaint.md)[]

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4509
