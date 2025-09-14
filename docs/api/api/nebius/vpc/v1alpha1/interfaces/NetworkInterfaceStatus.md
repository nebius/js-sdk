[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / NetworkInterfaceStatus

# Interface: NetworkInterfaceStatus

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2673

Describes the status of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2675

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.NetworkInterfaceStatus"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2674

***

### index

> **index**: `number`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2680

The index of the network interface

***

### ipAddress?

> `optional` **ipAddress**: [`IPAddressStatus`](IPAddressStatus.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2691

Effective Private IPv4 address

***

### macAddress

> **macAddress**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2701

MAC address

***

### name

> **name**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2686

Name for interface.
 Unique within instance's network interfaces

***

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddressStatus`](PublicIPAddressStatus.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:2696

Effective Public IPv4 address
