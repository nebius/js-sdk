[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ClusterService

# Class: ClusterService

Defined in: src/api/nebius/mk8s/v1/index.ts:1010

## Implements

- `ClusterService`

## Constructors

### Constructor

> **new ClusterService**(`sdk`): `ClusterService`

Defined in: src/api/nebius/mk8s/v1/index.ts:1068

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`ClusterService`

## Properties

### $type

> **$type**: `"nebius.mk8s.v1.ClusterService"`

Defined in: src/api/nebius/mk8s/v1/index.ts:1011

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1037

Creates a new mk8s cluster.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1038

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1039

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1114

Creates a new mk8s cluster.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1115

Creates a new mk8s cluster.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1116

Creates a new mk8s cluster.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1051

Deletes an mk8s cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1052

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1053

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1144

Deletes an mk8s cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1145

Deletes an mk8s cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1146

Deletes an mk8s cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1016

Returns a specific mk8s cluster by its unique identifier.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1017

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1018

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1078

Returns a specific mk8s cluster by its unique identifier.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1079

Returns a specific mk8s cluster by its unique identifier.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1080

Returns a specific mk8s cluster by its unique identifier.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

---

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1023

Returns a specific mk8s cluster by its unique name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1024

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1025

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1090

Returns a specific mk8s cluster by its unique name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1091

Returns a specific mk8s cluster by its unique name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1092

Returns a specific mk8s cluster by its unique name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:1074

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1030

Returns a list of all mk8s clusters in the specified project.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1031

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1032

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1102

Returns a list of all mk8s clusters in the specified project.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1103

Returns a list of all mk8s clusters in the specified project.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1104

Returns a list of all mk8s clusters in the specified project.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

---

### listControlPlaneVersions()

#### Call Signature

> **listControlPlaneVersions**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1058

ListControlPlaneVersions returns all k8s release versions available in Nebius API.

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

#### Call Signature

> **listControlPlaneVersions**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1059

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

#### Call Signature

> **listControlPlaneVersions**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1060

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

#### Call Signature

> **listControlPlaneVersions**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1159

ListControlPlaneVersions returns all k8s release versions available in Nebius API.

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

#### Call Signature

> **listControlPlaneVersions**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1160

ListControlPlaneVersions returns all k8s release versions available in Nebius API.

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

#### Call Signature

> **listControlPlaneVersions**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1161

ListControlPlaneVersions returns all k8s release versions available in Nebius API.

##### Parameters

###### request

[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListClusterControlPlaneVersionsRequest`](../interfaces/ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](../interfaces/ListClusterControlPlaneVersionsResponse.md)\>

---

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1044

Modifies an existing mk8s cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1045

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1046

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1129

Modifies an existing mk8s cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1130

Modifies an existing mk8s cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1131

Modifies an existing mk8s cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
