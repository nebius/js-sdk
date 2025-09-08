[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3018

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3020

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ClusterStatus"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3019

---

### connectionEndpoints?

> `optional` **connectionEndpoints**: [`Endpoints`](Endpoints.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3040

Connection endpoints of the PostgreSQL cluster.

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3025

Current phase of the cluster.

---

### presetDetails?

> `optional` **presetDetails**: [`PresetDetails`](../../../v1alpha1/resource/interfaces/PresetDetails.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3035

Cluster resource preset details

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3030

State reflects substatus of the phase to define whether it's healthy or not.
