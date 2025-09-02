[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / JobStatus

# Interface: JobStatus

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3237

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3239

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.JobStatus"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3238

***

### driverEndpoint?

> `optional` **driverEndpoint**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3254

Job Driver Web UI endpoint

***

### driverPresetDetails?

> `optional` **driverPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3259

Job driver resource preset details

***

### executorPresetDetails?

> `optional` **executorPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3264

Job executor resource preset details

***

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3244

Current phase (or stage) of the cluster.

***

### resultDetails?

> `optional` **resultDetails**: [`JobResultDetails`](JobResultDetails.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3269

Job execution result details

***

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3249

State reflects substatus of the stage to define whether it's healthy or not.
