[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / JobStatus

# Interface: JobStatus

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3282

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3284

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.JobStatus"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3283

---

### driverEndpoint?

> `optional` **driverEndpoint**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3299

Job Driver Web UI endpoint

---

### driverPresetDetails?

> `optional` **driverPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3304

Job driver resource preset details

---

### executorPresetDetails?

> `optional` **executorPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3309

Job executor resource preset details

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3289

Current phase (or stage) of the cluster.

---

### resultDetails?

> `optional` **resultDetails**: [`JobResultDetails`](JobResultDetails.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3314

Job execution result details

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:3294

State reflects substatus of the stage to define whether it's healthy or not.
