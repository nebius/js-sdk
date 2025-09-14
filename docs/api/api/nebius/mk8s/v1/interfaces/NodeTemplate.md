[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / NodeTemplate

# Interface: NodeTemplate

Defined in: src/api/nebius/mk8s/v1/index.ts:4600

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:4602

***

### $type

> **$type**: `"nebius.mk8s.v1.NodeTemplate"`

Defined in: src/api/nebius/mk8s/v1/index.ts:4601

***

### bootDisk?

> `optional` **bootDisk**: [`DiskSpec`](DiskSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4622

Parameters of a Node Nebius Compute Instance boot disk.

***

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:4669

cloud-init user-data
 Should contain at least one SSH key.

***

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/api/nebius/mk8s/v1/index.ts:4663

Static attachments of Compute Filesystem.
 Can be used as a workaround, until CSI for Compute Disk and Filesystem will be available.

***

### gpuCluster?

> `optional` **gpuCluster**: [`GpuClusterSpec`](GpuClusterSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4656

Nebius Compute GPUCluster ID that will be attached to node.

***

### gpuSettings?

> `optional` **gpuSettings**: [`GpuSettings`](GpuSettings.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4627

GPU-related settings.

***

### metadata?

> `optional` **metadata**: [`NodeMetadataTemplate`](NodeMetadataTemplate.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4603

***

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceTemplate`](NetworkInterfaceTemplate.md)[]

Defined in: src/api/nebius/mk8s/v1/index.ts:4657

***

### os

> **os**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:4651

OS version that will be used to create the boot disk of Compute Instances in the NodeGroup.
 Supported platform / k8s version /  OS / driver presets combinations
   gpu-l40s-a, gpu-l40s-d, gpu-h100-sxm, gpu-h200-sxm, cpu-e1, cpu-e2, cpu-d3:
     drivers_preset: ""
       k8s: 1.30 → "ubuntu22.04"
       k8s: 1.31 → "ubuntu22.04" (default), "ubuntu24.04"
   gpu-l40s-a, gpu-l40s-d, gpu-h100-sxm, gpu-h200-sxm:
     drivers_preset: "cuda12" (CUDA 12.4)
       k8s: 1.30, 1.31 → "ubuntu22.04"
     drivers_preset: "cuda12.4"
       k8s: 1.31 → "ubuntu22.04"
     drivers_preset: "cuda12.8"
       k8s: 1.31 → "ubuntu24.04"
   gpu-b200-sxm:
     drivers_preset: ""
       k8s: 1.30, 1.31 → "ubuntu24.04"
     drivers_preset: "cuda12" (CUDA 12.8)
       k8s: 1.30, 1.31 → "ubuntu24.04"
     drivers_preset: "cuda12.8"
       k8s: 1.31 → "ubuntu24.04"

***

### preemptible?

> `optional` **preemptible**: [`PreemptibleSpec`](PreemptibleSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4684

Configures whether the nodes in the group are preemptible.
 Set to empty value to enable preemptible nodes.

***

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:4617

Resources that will have Nebius Compute Instance where Node kubelet will run.

***

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:4678

the Nebius service account whose credentials will be available on the nodes of the group.
 With these credentials, it is possible to make `nebius` CLI or public API requests from the nodes without the need for extra authentication.
 This service account is also used to make requests to container registry.

 `resource.serviceaccount.issueAccessToken` permission is required to use this field.

***

### taints

> **taints**: [`NodeTaint`](NodeTaint.md)[]

Defined in: src/api/nebius/mk8s/v1/index.ts:4612

Kubernetes Node taints.
 For now change will not be propagated to existing nodes, so will be applied only to Kubernetes Nodes created after the field change.
 That behaviour may change later.
 So, for now you will need to manually set them to existing nodes, if that is needed.
 Field change will NOT trigger NodeGroup roll out.
