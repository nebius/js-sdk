[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / ProbeSpec

# Interface: ProbeSpec

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1209

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1211

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.ProbeSpec"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1210

---

### delaySeconds

> **delaySeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1221

Initial delay before starting probing in seconds

---

### failureThreshold

> **failureThreshold**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1231

Failure threshold for the probe after which the container will be restarted

---

### path

> **path**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1216

Probe path

---

### periodSeconds

> **periodSeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1226

Probing period in seconds
