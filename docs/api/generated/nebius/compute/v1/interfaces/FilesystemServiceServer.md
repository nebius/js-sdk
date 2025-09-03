[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / FilesystemServiceServer

# Interface: FilesystemServiceServer

Defined in: src/generated/nebius/compute/v1/index.ts:2696

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateFilesystemRequest`](CreateFilesystemRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2700

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteFilesystemRequest`](DeleteFilesystemRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2702

---

### get

> **get**: `handleUnaryCall`\<[`GetFilesystemRequest`](GetFilesystemRequest.md), [`Filesystem`](Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2697

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2698

---

### list

> **list**: `handleUnaryCall`\<[`ListFilesystemsRequest`](ListFilesystemsRequest.md), [`ListFilesystemsResponse`](ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2699

---

### listOperationsByParent

> **listOperationsByParent**: `handleUnaryCall`\<[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2703

---

### update

> **update**: `handleUnaryCall`\<[`UpdateFilesystemRequest`](UpdateFilesystemRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2701
