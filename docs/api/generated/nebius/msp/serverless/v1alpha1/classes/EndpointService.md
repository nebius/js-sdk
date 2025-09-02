[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / EndpointService

# Class: EndpointService

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:358

## Implements

- `EndpointService`

## Constructors

### Constructor

> **new EndpointService**(`sdk`): `EndpointService`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:416

#### Parameters

##### sdk

[`SDKInterface`](../../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`EndpointService`

## Properties

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.EndpointService"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:359

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:385

Creates an endpoint.

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:386

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:387

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:462

Creates an endpoint.

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:463

Creates an endpoint.

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:464

Creates an endpoint.

##### Parameters

###### request

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:392

Delete an endpoint.

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:393

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:394

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:477

Delete an endpoint.

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:478

Delete an endpoint.

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:479

Delete an endpoint.

##### Parameters

###### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:364

Returns the specified endpoint.

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:365

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:366

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:426

Returns the specified endpoint.

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:427

Returns the specified endpoint.

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:428

Returns the specified endpoint.

##### Parameters

###### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:371

Returns the specified endpoint by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:372

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:373

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:438

Returns the specified endpoint by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:439

Returns the specified endpoint by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:440

Returns the specified endpoint by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md), [`Endpoint`](../interfaces/Endpoint.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:422

#### Returns

[`OperationService`](../../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:378

Retrieves a list of Endpoints.

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:379

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:380

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:450

Retrieves a list of Endpoints.

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:451

Retrieves a list of Endpoints.

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:452

Retrieves a list of Endpoints.

##### Parameters

###### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md), [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)\>

***

### start()

#### Call Signature

> **start**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:399

Start an endpoint.

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:400

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:401

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:492

Start an endpoint.

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:493

Start an endpoint.

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:494

Start an endpoint.

##### Parameters

###### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:406

Stop an endpoint.

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:407

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:408

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:507

Stop an endpoint.

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:508

Stop an endpoint.

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:509

Stop an endpoint.

##### Parameters

###### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>
