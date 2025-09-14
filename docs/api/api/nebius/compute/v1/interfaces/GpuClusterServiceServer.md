[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / GpuClusterServiceServer

# Interface: GpuClusterServiceServer

Defined in: src/api/nebius/compute/v1/index.ts:4254

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateGpuClusterRequest`](CreateGpuClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4258

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteGpuClusterRequest`](DeleteGpuClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4260

***

### get

> **get**: `handleUnaryCall`\<[`GetGpuClusterRequest`](GetGpuClusterRequest.md), [`GpuCluster`](GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4255

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`GpuCluster`](GpuCluster.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4256

***

### list

> **list**: `handleUnaryCall`\<[`ListGpuClustersRequest`](ListGpuClustersRequest.md), [`ListGpuClustersResponse`](ListGpuClustersResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4257

***

### listOperationsByParent

> **listOperationsByParent**: `handleUnaryCall`\<[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4261

***

### update

> **update**: `handleUnaryCall`\<[`UpdateGpuClusterRequest`](UpdateGpuClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:4259
