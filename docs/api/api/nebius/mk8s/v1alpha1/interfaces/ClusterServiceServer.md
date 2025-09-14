[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1089

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1093

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1095

---

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1090

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetClusterByNameRequest`](GetClusterByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1091

---

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1092

---

### listControlPlaneVersions

> **listControlPlaneVersions**: `handleUnaryCall`\<[`ListClusterControlPlaneVersionsRequest`](ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1096

---

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1094
