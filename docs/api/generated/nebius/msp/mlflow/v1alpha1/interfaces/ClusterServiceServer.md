[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:723

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:727

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:728

---

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:724

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetClusterByNameRequest`](GetClusterByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:725

---

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:726
