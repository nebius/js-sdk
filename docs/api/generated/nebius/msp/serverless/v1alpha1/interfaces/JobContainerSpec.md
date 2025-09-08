[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / JobContainerSpec

# Interface: JobContainerSpec

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2460

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2462

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.JobContainerSpec"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2461

---

### args

> **args**: `string`[]

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2487

Command args

---

### command

> **command**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2482

Job command

---

### envs

> **envs**: `object`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2492

Environment variables

#### Index Signature

\[`key`: `string`\]: `string`

---

### image

> **image**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2467

Image name

---

### maxRetries

> **maxRetries**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2507

Max retries (0 - no retries)

---

### replicaCount

> **replicaCount**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2472

Replica count

---

### sensitiveEnvs

> **sensitiveEnvs**: `object`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2497

Environment variables with sensitive data

#### Index Signature

\[`key`: `string`\]: `string`

---

### template?

> `optional` **template**: [`JobTemplateSpec`](JobTemplateSpec.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2477

Container resource template

---

### timeoutSeconds

> **timeoutSeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:2502

Job timeout in seconds (0 - no timeout)
