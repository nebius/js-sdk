[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1370

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1372

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ClusterStatus"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1371

---

### historyServerEndpoint?

> `optional` **historyServerEndpoint**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1387

History Server WebUI endpoint

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1377

Current phase (or stage) of the cluster.

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1382

State reflects substatus of the stage to define whether it's healthy or not.
