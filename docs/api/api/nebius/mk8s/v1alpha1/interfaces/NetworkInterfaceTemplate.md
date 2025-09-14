[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / NetworkInterfaceTemplate

# Interface: NetworkInterfaceTemplate

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5455

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5457

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NetworkInterfaceTemplate"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5456

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5462

Public IPv4 address associated with the interface.

---

### subnetId

> **subnetId**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5469

Subnet ID that will be attached to a node cloud intstance network interface.
By default control plane subnet_id used.
Subnet should be located in the same network with control plane and have same parent ID as cluster.
