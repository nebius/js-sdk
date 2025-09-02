[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2282

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2287

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2288

***

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2283

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2284

***

### getForBackup

> **getForBackup**: `handleUnaryCall`\<[`GetClusterForBackupRequest`](GetClusterForBackupRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2285

***

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2286

***

### restore

> **restore**: `handleUnaryCall`\<[`RestoreClusterRequest`](RestoreClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2290

***

### start

> **start**: `handleUnaryCall`\<[`StartClusterRequest`](StartClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2292

***

### stop

> **stop**: `handleUnaryCall`\<[`StopClusterRequest`](StopClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2291

***

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2289
