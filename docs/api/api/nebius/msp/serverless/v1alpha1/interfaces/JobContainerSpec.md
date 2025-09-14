[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / JobContainerSpec

# Interface: JobContainerSpec

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2461

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2463

***

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.JobContainerSpec"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2462

***

### args

> **args**: `string`[]

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2488

Command args

***

### command

> **command**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2483

Job command

***

### envs

> **envs**: `object`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2493

Environment variables

#### Index Signature

\[`key`: `string`\]: `string`

***

### image

> **image**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2468

Image name

***

### maxRetries

> **maxRetries**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2508

Max retries (0 - no retries)

***

### replicaCount

> **replicaCount**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2473

Replica count

***

### sensitiveEnvs

> **sensitiveEnvs**: `object`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2498

Environment variables with sensitive data

#### Index Signature

\[`key`: `string`\]: `string`

***

### template?

> `optional` **template**: [`JobTemplateSpec`](JobTemplateSpec.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2478

Container resource template

***

### timeoutSeconds

> **timeoutSeconds**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:2503

Job timeout in seconds (0 - no timeout)
