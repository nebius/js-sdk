[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / JobStatus

# Interface: JobStatus

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2909

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2911

***

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.JobStatus"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2910

***

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2916

Current phase (or stage) of the workload.

***

### result

> **result**: [`JobResult`](../type-aliases/JobResult.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2926

Job result

***

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2921

State reflects substatus of the phase
