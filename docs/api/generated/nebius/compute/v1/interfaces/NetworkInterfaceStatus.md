[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NetworkInterfaceStatus

# Interface: NetworkInterfaceStatus

Defined in: src/generated/nebius/compute/v1/index.ts:10157

Describes the status of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10159

---

### $type

> **$type**: `"nebius.compute.v1.NetworkInterfaceStatus"`

Defined in: src/generated/nebius/compute/v1/index.ts:10158

---

### fqdn

> **fqdn**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10190

FQDN of the interface

---

### index

> **index**: `number`

Defined in: src/generated/nebius/compute/v1/index.ts:10164

The index of the network interface

---

### ipAddress?

> `optional` **ipAddress**: [`IPAddressStatus`](IPAddressStatus.md)

Defined in: src/generated/nebius/compute/v1/index.ts:10175

Effective Private IPv4 address

---

### macAddress

> **macAddress**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10185

MAC address

---

### name

> **name**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10170

Name for interface.
Unique within instance's network interfaces

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddressStatus`](PublicIPAddressStatus.md)

Defined in: src/generated/nebius/compute/v1/index.ts:10180

Effective Public IPv4 address
