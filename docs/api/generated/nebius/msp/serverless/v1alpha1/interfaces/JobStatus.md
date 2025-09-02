[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / JobStatus

# Interface: JobStatus

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2908

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2910

***

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.JobStatus"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2909

***

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2915

Current phase (or stage) of the workload.

***

### result

> **result**: [`JobResult`](../type-aliases/JobResult.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2925

Job result

***

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2920

State reflects substatus of the phase
