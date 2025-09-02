[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:839

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:843

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:845

***

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:840

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetClusterByNameRequest`](GetClusterByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:841

***

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:842

***

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:844
