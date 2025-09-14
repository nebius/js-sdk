[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/registry/v1](../README.md) / ArtifactService

# Class: ArtifactService

Defined in: src/api/nebius/registry/v1/index.ts:481

## Implements

- `ArtifactService`

## Constructors

### Constructor

> **new ArtifactService**(`sdk`): `ArtifactService`

Defined in: src/api/nebius/registry/v1/index.ts:499

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`ArtifactService`

## Properties

### $type

> **$type**: `"nebius.registry.v1.ArtifactService"`

Defined in: src/api/nebius/registry/v1/index.ts:482

## Methods

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:489

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:490

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:491

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:533

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:534

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/registry/v1/index.ts:535

##### Parameters

###### request

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:483

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:484

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:485

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:509

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:510

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:511

##### Parameters

###### request

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md), [`Artifact`](../interfaces/Artifact.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/api/nebius/registry/v1/index.ts:505

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:486

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:487

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:488

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:521

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:522

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>

Defined in: src/api/nebius/registry/v1/index.ts:523

##### Parameters

###### request

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md), [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)\>
