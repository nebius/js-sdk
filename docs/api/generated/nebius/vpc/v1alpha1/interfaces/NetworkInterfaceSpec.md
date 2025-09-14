[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / NetworkInterfaceSpec

# Interface: NetworkInterfaceSpec

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2265

Describes the specification of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2267

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.NetworkInterfaceSpec"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2266

---

### ipAddress?

> `optional` **ipAddress**: [`IPAddress`](IPAddress.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2284

Private IPv4 address associated with the interface.

---

### name

> **name**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2279

Interface name
Value of this field configures the name of the network interface inside VM's OS.
Longer values will persist in the specification but will be truncated to 15 symbols before being passed to VM configuration.

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddress`](PublicIPAddress.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2289

Public IPv4 address associated with the interface.

---

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2272

Subnet ID
