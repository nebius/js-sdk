[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / ProbeSpec

# Interface: ProbeSpec

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1210

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1212

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.ProbeSpec"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1211

---

### delaySeconds

> **delaySeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1222

Initial delay before starting probing in seconds

---

### failureThreshold

> **failureThreshold**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1232

Failure threshold for the probe after which the container will be restarted

---

### path

> **path**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1217

Probe path

---

### periodSeconds

> **periodSeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1227

Probing period in seconds
