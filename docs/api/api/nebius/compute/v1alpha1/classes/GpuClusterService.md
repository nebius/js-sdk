[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / GpuClusterService

# Class: GpuClusterService

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3891

## Implements

- `GpuClusterService`

## Constructors

### Constructor

> **new GpuClusterService**(`sdk`): `GpuClusterService`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3924

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`GpuClusterService`

## Properties

### $type

> **$type**: `"nebius.compute.v1alpha1.GpuClusterService"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3892

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3902

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3903

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3904

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3974

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3975

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3976

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3908

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3909

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3910

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4004

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4005

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4006

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3893

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3894

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3895

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3938

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3939

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3940

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3896

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3897

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3898

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3950

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3951

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3952

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1alpha1/classes/OperationService.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3934

#### Returns

[`OperationService`](../../../common/v1alpha1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3899

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3900

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3901

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3962

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3963

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3964

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

***

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3911

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3912

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3913

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4019

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4020

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4021

##### Parameters

###### request

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)\>

***

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3905

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3906

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3907

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3989

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3990

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:3991

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>
