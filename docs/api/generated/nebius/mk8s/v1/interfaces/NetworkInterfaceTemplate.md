[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NetworkInterfaceTemplate

# Interface: NetworkInterfaceTemplate

Defined in: src/generated/nebius/mk8s/v1/index.ts:4991

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:4993

***

### $type

> **$type**: `"nebius.mk8s.v1.NetworkInterfaceTemplate"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4992

***

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4999

Parameters for Public IPv4 address associated with the interface.
 Set to empty value, to enable it.

***

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5006

Nebius VPC Subnet ID that will be attached to a node cloud instance network interface.
 By default Cluster control plane subnet_id used.
 Subnet should be located in the same network with control plane.
