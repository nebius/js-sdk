[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / MaintenanceEventStatus

# Interface: MaintenanceEventStatus

Defined in: src/generated/nebius/compute/v1/index.ts:9150

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:9152

---

### $type

> **$type**: `"nebius.compute.v1.MaintenanceEventStatus"`

Defined in: src/generated/nebius/compute/v1/index.ts:9151

---

### createdAt?

> `optional` **createdAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/compute/v1/index.ts:9158

Time when the maintenance event is created

---

### finishedAt?

> `optional` **finishedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/compute/v1/index.ts:9163

Time when the maintenance event is finished

---

### maintenanceId

> **maintenanceId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:9153

---

### slaDeadlineTs?

> `optional` **slaDeadlineTs**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/compute/v1/index.ts:9168

Time when the instance will be force stopped

---

### supportCenterTicketId

> **supportCenterTicketId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:9173

Ticket key, can be transformed into url where support is talking with the client
