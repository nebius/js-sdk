[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / EndpointContainerSpec

# Interface: EndpointContainerSpec

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:869

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:871

***

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.EndpointContainerSpec"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:870

***

### args

> **args**: `string`[]

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:896

Command args

***

### command

> **command**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:891

Endpoint command

***

### envs

> **envs**: `object`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:901

Environment variables

#### Index Signature

\[`key`: `string`\]: `string`

***

### image

> **image**: `string`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:876

Image name

***

### liveness?

> `optional` **liveness**: [`ProbeSpec`](ProbeSpec.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:911

Liveness probe spec

***

### replicaCount

> **replicaCount**: `Long`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:881

Replica count

***

### sensitiveEnvs

> **sensitiveEnvs**: `object`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:906

Environment variables with sensitive data

#### Index Signature

\[`key`: `string`\]: `string`

***

### template?

> `optional` **template**: [`EndpointTemplateSpec`](EndpointTemplateSpec.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:886

Container resource template
