[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / NetworkInterfaceStatus

# Interface: NetworkInterfaceStatus

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2672

Describes the status of a network interface.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2674

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.NetworkInterfaceStatus"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2673

---

### index

> **index**: `number`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2679

The index of the network interface

---

### ipAddress?

> `optional` **ipAddress**: [`IPAddressStatus`](IPAddressStatus.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2690

Effective Private IPv4 address

---

### macAddress

> **macAddress**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2700

MAC address

---

### name

> **name**: `string`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2685

Name for interface.
Unique within instance's network interfaces

---

### publicIpAddress?

> `optional` **publicIpAddress**: [`PublicIPAddressStatus`](PublicIPAddressStatus.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:2695

Effective Public IPv4 address
