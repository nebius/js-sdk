[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/maintenance/v1alpha1](../README.md) / MaintenanceStatus

# Interface: MaintenanceStatus

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:702

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:704

***

### $type

> **$type**: `"nebius.maintenance.v1alpha1.MaintenanceStatus"`

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:703

***

### affectedResources

> **affectedResources**: [`Resource`](Resource.md)[]

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:709

List of resources that are affected by this maintenance operation.

***

### finishedAt?

> `optional` **finishedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:719

Timestamp indicating when the maintenance operation finished.

***

### startedAt?

> `optional` **startedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:714

Timestamp indicating when the maintenance operation started.

***

### state

> **state**: [`State`](../type-aliases/State.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:724

Current state of the maintenance operation.
