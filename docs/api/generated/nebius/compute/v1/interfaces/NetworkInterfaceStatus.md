[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NetworkInterfaceStatus

# Interface: NetworkInterfaceStatus

Defined in: src/generated/nebius/compute/v1/index.ts:10158

Describes the status of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10160

---

### $type

> **$type**: `"nebius.compute.v1.NetworkInterfaceStatus"`

Defined in: src/generated/nebius/compute/v1/index.ts:10159

---

### fqdn

> **fqdn**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10191

FQDN of the interface

---

### index

> **index**: `number`

Defined in: src/generated/nebius/compute/v1/index.ts:10165

The index of the network interface

---

### ipAddress?

> `optional` **ipAddress**: [`IPAddressStatus`](IPAddressStatus.md)

Defined in: src/generated/nebius/compute/v1/index.ts:10176

Effective Private IPv4 address

---

### macAddress

> **macAddress**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10186

MAC address

---

### name

> **name**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10171

Name for interface.
Unique within instance's network interfaces

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddressStatus`](PublicIPAddressStatus.md)

Defined in: src/generated/nebius/compute/v1/index.ts:10181

Effective Public IPv4 address
