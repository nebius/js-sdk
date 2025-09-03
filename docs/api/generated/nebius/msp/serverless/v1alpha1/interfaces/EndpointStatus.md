[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / EndpointStatus

# Interface: EndpointStatus

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1456

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1458

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.EndpointStatus"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1457

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1463

Current phase (or stage) of the workload.

---

### publicEndpoint

> **publicEndpoint**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1473

Public endpoint for accessing the workload.

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1468

State reflects substatus of the phase
