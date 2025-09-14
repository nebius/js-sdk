[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / GpuClusterService

# Class: GpuClusterService

Defined in: src/generated/nebius/compute/v1/index.ts:4280

## Implements

- `GpuClusterService`

## Constructors

### Constructor

> **new GpuClusterService**(`sdk`): `GpuClusterService`

Defined in: src/generated/nebius/compute/v1/index.ts:4339

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`GpuClusterService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.GpuClusterService"`

Defined in: src/generated/nebius/compute/v1/index.ts:4281

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4308

Creates a new GPU Cluster.
For details, see https://docs.nebius.com/compute/clusters/gpu#create-cluster

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4309

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4310

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4385

Creates a new GPU Cluster.
For details, see https://docs.nebius.com/compute/clusters/gpu#create-cluster

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4386

Creates a new GPU Cluster.
For details, see https://docs.nebius.com/compute/clusters/gpu#create-cluster

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4387

Creates a new GPU Cluster.
For details, see https://docs.nebius.com/compute/clusters/gpu#create-cluster

##### Parameters

###### request

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4322

Deletes a GPU Cluster by its ID.

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4323

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4324

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4415

Deletes a GPU Cluster by its ID.

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4416

Deletes a GPU Cluster by its ID.

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4417

Deletes a GPU Cluster by its ID.

##### Parameters

###### request

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4286

Retrieves the specified GPU Cluster by its ID.

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4287

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4288

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

Defined in: src/generated/nebius/compute/v1/index.ts:4349

Retrieves the specified GPU Cluster by its ID.

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4350

Retrieves the specified GPU Cluster by its ID.

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4351

Retrieves the specified GPU Cluster by its ID.

##### Parameters

###### request

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

---

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4293

Retrieves the specified GPU Cluster by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4294

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4295

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

Defined in: src/generated/nebius/compute/v1/index.ts:4361

Retrieves the specified GPU Cluster by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4362

Retrieves the specified GPU Cluster by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4363

Retrieves the specified GPU Cluster by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](../interfaces/GpuCluster.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/compute/v1/index.ts:4345

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4300

Lists GPU Clusters in the specified parent.

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4301

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4302

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

Defined in: src/generated/nebius/compute/v1/index.ts:4373

Lists GPU Clusters in the specified parent.

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4374

Lists GPU Clusters in the specified parent.

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4375

Lists GPU Clusters in the specified parent.

##### Parameters

###### request

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md), [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)\>

---

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4329

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4330

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4331

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4430

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4431

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:4432

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

---

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4315

Modifies the configuration of an existing GPU Cluster.

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4316

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4317

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4400

Modifies the configuration of an existing GPU Cluster.

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4401

Modifies the configuration of an existing GPU Cluster.

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:4402

Modifies the configuration of an existing GPU Cluster.

##### Parameters

###### request

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
