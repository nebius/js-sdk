[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / SessionStatus

# Interface: SessionStatus

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5231

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5233

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.SessionStatus"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5232

***

### driverPresetDetails?

> `optional` **driverPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5253

Session driver resource preset details

***

### executorPresetDetails?

> `optional` **executorPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5258

Session executor resource preset details

***

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5238

Current phase (or stage) of the cluster.

***

### sparkConnectEndpoint?

> `optional` **sparkConnectEndpoint**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5248

Spark Connect endpoint

***

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:5243

State reflects substatus of the stage to define whether it's healthy or not.
