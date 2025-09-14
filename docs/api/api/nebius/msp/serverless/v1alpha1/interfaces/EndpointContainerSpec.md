[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / EndpointContainerSpec

# Interface: EndpointContainerSpec

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:870

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:872

***

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.EndpointContainerSpec"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:871

***

### args

> **args**: `string`[]

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:897

Command args

***

### command

> **command**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:892

Endpoint command

***

### envs

> **envs**: `object`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:902

Environment variables

#### Index Signature

\[`key`: `string`\]: `string`

***

### image

> **image**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:877

Image name

***

### liveness?

> `optional` **liveness**: [`ProbeSpec`](ProbeSpec.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:912

Liveness probe spec

***

### replicaCount

> **replicaCount**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:882

Replica count

***

### sensitiveEnvs

> **sensitiveEnvs**: `object`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:907

Environment variables with sensitive data

#### Index Signature

\[`key`: `string`\]: `string`

***

### template?

> `optional` **template**: [`EndpointTemplateSpec`](EndpointTemplateSpec.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:887

Container resource template
