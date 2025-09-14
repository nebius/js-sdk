[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / NetworkInterfaceTemplate

# Interface: NetworkInterfaceTemplate

Defined in: src/api/nebius/mk8s/v1/index.ts:5309

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:5311

---

### $type

> **$type**: `"nebius.mk8s.v1.NetworkInterfaceTemplate"`

Defined in: src/api/nebius/mk8s/v1/index.ts:5310

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:5317

Parameters for Public IPv4 address associated with the interface.
Set to empty value, to enable it.

---

### subnetId

> **subnetId**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:5324

Nebius VPC Subnet ID that will be attached to a node cloud instance network interface.
By default Cluster control plane subnet_id used.
Subnet should be located in the same network with control plane.
