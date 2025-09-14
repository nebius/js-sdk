[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / CreateEndpointRequest

# Interface: CreateEndpointRequest

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:18

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:20

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.CreateEndpointRequest"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:19

---

### dryRun

> **dryRun**: `boolean`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:28

If set to true, only API validation will be performed, without creating the endpoint.
Returned operation will be in "done" state. ID of resource will be empty.

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:21

---

### spec?

> `optional` **spec**: [`EndpointSpec`](EndpointSpec.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:22
