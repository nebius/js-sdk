[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NodeSetUnhealthyRequest\_HealthCheckInfo

# Interface: NodeSetUnhealthyRequest\_HealthCheckInfo

Defined in: src/generated/nebius/compute/v1/index.ts:10753

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10755

***

### $type

> **$type**: `"nebius.compute.v1.NodeSetUnhealthyRequest.HealthCheckInfo"`

Defined in: src/generated/nebius/compute/v1/index.ts:10754

***

### checkId

> **checkId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10765

Identifies specific GPU check that failed in soperator (key for observability)

***

### description

> **description**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10770

Human-readable description of the error for further investigation

***

### observedAt?

> `optional` **observedAt**: `Dayjs`

Defined in: src/generated/nebius/compute/v1/index.ts:10760

Time when the unhealthy node was observed
