[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / CreateEndpointRequest

# Interface: CreateEndpointRequest

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:17

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:19

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.CreateEndpointRequest"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:18

---

### dryRun

> **dryRun**: `boolean`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:27

If set to true, only API validation will be performed, without creating the endpoint.
Returned operation will be in "done" state. ID of resource will be empty.

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:20

---

### spec?

> `optional` **spec**: [`EndpointSpec`](EndpointSpec.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:21
