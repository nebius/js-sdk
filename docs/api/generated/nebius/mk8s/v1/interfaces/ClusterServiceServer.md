[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/generated/nebius/mk8s/v1/index.ts:984

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:988

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:990

---

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:985

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:986

---

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:987

---

### listControlPlaneVersions

> **listControlPlaneVersions**: `handleUnaryCall`\<[`ListClusterControlPlaneVersionsRequest`](ListClusterControlPlaneVersionsRequest.md), [`ListClusterControlPlaneVersionsResponse`](ListClusterControlPlaneVersionsResponse.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:991

---

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:989
