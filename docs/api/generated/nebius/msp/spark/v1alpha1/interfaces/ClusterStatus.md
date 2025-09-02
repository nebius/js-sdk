[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1347

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1349

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ClusterStatus"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1348

***

### historyServerEndpoint?

> `optional` **historyServerEndpoint**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1364

History Server WebUI endpoint

***

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1354

Current phase (or stage) of the cluster.

***

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1359

State reflects substatus of the stage to define whether it's healthy or not.
