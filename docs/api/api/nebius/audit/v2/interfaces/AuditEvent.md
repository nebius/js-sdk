[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/audit/v2](../README.md) / AuditEvent

# Interface: AuditEvent

Defined in: src/api/nebius/audit/v2/index.ts:489

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/audit/v2/index.ts:491

***

### $type

> **$type**: `"nebius.audit.v2.AuditEvent"`

Defined in: src/api/nebius/audit/v2/index.ts:490

***

### action

> **action**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:521

Indicates an action taken on the resource.

***

### authentication?

> `optional` **authentication**: [`Authentication`](Authentication.md)

Defined in: src/api/nebius/audit/v2/index.ts:536

Represents the subject of an API call.

***

### authorization?

> `optional` **authorization**: [`Authorization`](Authorization.md)

Defined in: src/api/nebius/audit/v2/index.ts:541

Represents permissions that have been verified for the subject as part of the API call.

***

### eventVersion

> **eventVersion**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:531

Audit event version, in "X.Y" format, events within different Y's are backwards compatible, events with different X's are not.

***

### id

> **id**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:496

Unique event id.

***

### projectRegion?

> `optional` **projectRegion**: [`Region`](Region.md)

Defined in: src/api/nebius/audit/v2/index.ts:566

Region of an application

***

### request?

> `optional` **request**: [`Request`](Request.md)

Defined in: src/api/nebius/audit/v2/index.ts:551

Contains information about the request from the customer.

***

### resource?

> `optional` **resource**: [`Resource`](Resource.md)

Defined in: src/api/nebius/audit/v2/index.ts:546

A resource that was read or modified as part of the operation. Can be empty if no resource accessed or changed.

***

### response?

> `optional` **response**: [`Response`](Response.md)

Defined in: src/api/nebius/audit/v2/index.ts:556

Contains information about the response from the server.

***

### service?

> `optional` **service**: [`Service`](Service.md)

Defined in: src/api/nebius/audit/v2/index.ts:516

Indicates the service that generated the event.

***

### source

> **source**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:501

Identifies the context in which an event happened. Presented in the form of URI.

***

### specVersion

> **specVersion**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:506

Version of CloudEvents spec. See https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#specversion

***

### status

> **status**: [`Status`](../type-aliases/Status.md)

Defined in: src/api/nebius/audit/v2/index.ts:561

The async operation status

***

### time?

> `optional` **time**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/audit/v2/index.ts:526

Timestamp of when the occurrence happened.

***

### type

> **type**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:511

The type of event related to the originating occurrence. Formed according to template: "ai.nebius.<serviceName>.<resourceType>.<action>"
