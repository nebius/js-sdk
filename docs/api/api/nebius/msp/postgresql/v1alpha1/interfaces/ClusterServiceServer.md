[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2283

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2288

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2289

***

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2284

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2285

***

### getForBackup

> **getForBackup**: `handleUnaryCall`\<[`GetClusterForBackupRequest`](GetClusterForBackupRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2286

***

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2287

***

### restore

> **restore**: `handleUnaryCall`\<[`RestoreClusterRequest`](RestoreClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2291

***

### start

> **start**: `handleUnaryCall`\<[`StartClusterRequest`](StartClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2293

***

### stop

> **stop**: `handleUnaryCall`\<[`StopClusterRequest`](StopClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2292

***

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2290
