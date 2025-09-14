[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / MaintenanceEventStatus

# Interface: MaintenanceEventStatus

Defined in: src/api/nebius/compute/v1/index.ts:9151

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:9153

---

### $type

> **$type**: `"nebius.compute.v1.MaintenanceEventStatus"`

Defined in: src/api/nebius/compute/v1/index.ts:9152

---

### createdAt?

> `optional` **createdAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/compute/v1/index.ts:9159

Time when the maintenance event is created

---

### finishedAt?

> `optional` **finishedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/compute/v1/index.ts:9164

Time when the maintenance event is finished

---

### maintenanceId

> **maintenanceId**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:9154

---

### slaDeadlineTs?

> `optional` **slaDeadlineTs**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/compute/v1/index.ts:9169

Time when the instance will be force stopped

---

### supportCenterTicketId

> **supportCenterTicketId**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:9174

Ticket key, can be transformed into url where support is talking with the client
