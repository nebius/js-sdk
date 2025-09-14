[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / EndpointServiceServer

# Interface: EndpointServiceServer

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:333

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateEndpointRequest`](CreateEndpointRequest.md), [`Operation`](../../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:337

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:338

---

### get

> **get**: `handleUnaryCall`\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](Endpoint.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:334

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](Endpoint.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:335

---

### list

> **list**: `handleUnaryCall`\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](ListEndpointsResponse.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:336

---

### start

> **start**: `handleUnaryCall`\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:339

---

### stop

> **stop**: `handleUnaryCall`\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:340
