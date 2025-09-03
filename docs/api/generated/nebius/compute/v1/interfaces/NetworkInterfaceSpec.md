[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NetworkInterfaceSpec

# Interface: NetworkInterfaceSpec

Defined in: src/generated/nebius/compute/v1/index.ts:9749

Describes the specification of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:9751

---

### $type

> **$type**: `"nebius.compute.v1.NetworkInterfaceSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:9750

---

### ipAddress?

> `optional` **ipAddress**: [`IPAddress`](IPAddress.md)

Defined in: src/generated/nebius/compute/v1/index.ts:9768

Private IPv4 address associated with the interface.

---

### name

> **name**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:9763

Interface name
Value of this field configures the name of the network interface inside VM's OS.
Longer values will persist in the specification but will be truncated to 15 symbols before being passed to VM configuration.

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/generated/nebius/compute/v1/index.ts:9773

Public IPv4 address associated with the interface.

---

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:9756

Subnet ID
