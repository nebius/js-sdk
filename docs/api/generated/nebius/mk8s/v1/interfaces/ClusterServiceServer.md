[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / ClusterServiceServer

# Interface: ClusterServiceServer

Defined in: src/generated/nebius/mk8s/v1/index.ts:734

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateClusterRequest`](CreateClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:738

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteClusterRequest`](DeleteClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:740

---

### get

> **get**: `handleUnaryCall`\<[`GetClusterRequest`](GetClusterRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:735

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](Cluster.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:736

---

### list

> **list**: `handleUnaryCall`\<[`ListClustersRequest`](ListClustersRequest.md), [`ListClustersResponse`](ListClustersResponse.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:737

---

### update

> **update**: `handleUnaryCall`\<[`UpdateClusterRequest`](UpdateClusterRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:739
