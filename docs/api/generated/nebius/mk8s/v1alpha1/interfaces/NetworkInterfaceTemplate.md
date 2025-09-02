[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / NetworkInterfaceTemplate

# Interface: NetworkInterfaceTemplate

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5137

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5139

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NetworkInterfaceTemplate"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5138

***

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5144

Public IPv4 address associated with the interface.

***

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:5151

Subnet ID that will be attached to a node cloud intstance network interface.
 By default control plane subnet_id used.
 Subnet should be located in the same network with control plane and have same parent ID as cluster.
