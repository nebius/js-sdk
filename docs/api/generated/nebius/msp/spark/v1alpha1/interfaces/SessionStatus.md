[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / SessionStatus

# Interface: SessionStatus

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5164

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5166

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.SessionStatus"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5165

---

### driverPresetDetails?

> `optional` **driverPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5186

Session driver resource preset details

---

### executorPresetDetails?

> `optional` **executorPresetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5191

Session executor resource preset details

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5171

Current phase (or stage) of the cluster.

---

### sparkConnectEndpoint?

> `optional` **sparkConnectEndpoint**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5181

Spark Connect endpoint

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:5176

State reflects substatus of the stage to define whether it's healthy or not.
