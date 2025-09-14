[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / EndpointSpec

# Interface: EndpointSpec

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:662

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:664

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.EndpointSpec"`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:663

---

### container?

> `optional` **container**: [`EndpointContainerSpec`](EndpointContainerSpec.md)

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:694

Container spec

---

### description

> **description**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:669

Description of the endpoint.

---

### networkId

> **networkId**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:674

Network ID to run the endpoint in

---

### password

> **password**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:684

Password for accessing the container endpoint.

---

### port

> **port**: `number`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:689

Container port to be exposed.

---

### username

> **username**: `string`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:679

Username for accessing the container endpoint.
