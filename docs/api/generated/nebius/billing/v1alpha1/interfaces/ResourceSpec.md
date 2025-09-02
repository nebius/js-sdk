[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / ResourceSpec

# Interface: ResourceSpec

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:610

Resource specification for cost estimation.
 Contains the specifications for creating and updating different types of resources.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:612

***

### $type

> **$type**: `"nebius.billing.v1alpha1.ResourceSpec"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:611

***

### resourceSpec?

> `optional` **resourceSpec**: \{ `$case`: `"computeInstanceSpec"`; `computeInstanceSpec`: [`CreateInstanceRequest`](../../../compute/v1/interfaces/CreateInstanceRequest.md); \} \| \{ `$case`: `"computeInstanceUpdateSpec"`; `computeInstanceUpdateSpec`: [`UpdateInstanceRequest`](../../../compute/v1/interfaces/UpdateInstanceRequest.md); \} \| \{ `$case`: `"computeDiskSpec"`; `computeDiskSpec`: [`CreateDiskRequest`](../../../compute/v1/interfaces/CreateDiskRequest.md); \} \| \{ `$case`: `"computeDiskUpdateSpec"`; `computeDiskUpdateSpec`: [`UpdateDiskRequest`](../../../compute/v1/interfaces/UpdateDiskRequest.md); \} \| \{ `$case`: `"computeFilesystemSpec"`; `computeFilesystemSpec`: [`CreateFilesystemRequest`](../../../compute/v1/interfaces/CreateFilesystemRequest.md); \} \| \{ `$case`: `"computeFilesystemUpdateSpec"`; `computeFilesystemUpdateSpec`: [`UpdateFilesystemRequest`](../../../compute/v1/interfaces/UpdateFilesystemRequest.md); \}

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:613
