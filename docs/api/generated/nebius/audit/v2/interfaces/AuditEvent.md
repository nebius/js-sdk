[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / AuditEvent

# Interface: AuditEvent

Defined in: src/generated/nebius/audit/v2/index.ts:488

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:490

---

### $type

> **$type**: `"nebius.audit.v2.AuditEvent"`

Defined in: src/generated/nebius/audit/v2/index.ts:489

---

### action

> **action**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:520

Indicates an action taken on the resource.

---

### authentication?

> `optional` **authentication**: [`Authentication`](Authentication.md)

Defined in: src/generated/nebius/audit/v2/index.ts:535

Represents the subject of an API call.

---

### authorization?

> `optional` **authorization**: [`Authorization`](Authorization.md)

Defined in: src/generated/nebius/audit/v2/index.ts:540

Represents permissions that have been verified for the subject as part of the API call.

---

### eventVersion

> **eventVersion**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:530

Audit event version, in "X.Y" format, events within different Y's are backwards compatible, events with different X's are not.

---

### id

> **id**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:495

Unique event id.

---

### projectRegion?

> `optional` **projectRegion**: [`Region`](Region.md)

Defined in: src/generated/nebius/audit/v2/index.ts:565

Region of an application

---

### request?

> `optional` **request**: [`Request`](Request.md)

Defined in: src/generated/nebius/audit/v2/index.ts:550

Contains information about the request from the customer.

---

### resource?

> `optional` **resource**: [`Resource`](Resource.md)

Defined in: src/generated/nebius/audit/v2/index.ts:545

A resource that was read or modified as part of the operation. Can be empty if no resource accessed or changed.

---

### response?

> `optional` **response**: [`Response`](Response.md)

Defined in: src/generated/nebius/audit/v2/index.ts:555

Contains information about the response from the server.

---

### service?

> `optional` **service**: [`Service`](Service.md)

Defined in: src/generated/nebius/audit/v2/index.ts:515

Indicates the service that generated the event.

---

### source

> **source**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:500

Identifies the context in which an event happened. Presented in the form of URI.

---

### specVersion

> **specVersion**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:505

Version of CloudEvents spec. See https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#specversion

---

### status

> **status**: [`Status`](../type-aliases/Status.md)

Defined in: src/generated/nebius/audit/v2/index.ts:560

The async operation status

---

### time?

> `optional` **time**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/audit/v2/index.ts:525

Timestamp of when the occurrence happened.

---

### type

> **type**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:510

The type of event related to the originating occurrence. Formed according to template: "ai.nebius.<serviceName>.<resourceType>.<action>"
