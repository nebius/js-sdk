[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / DiskServiceServer

# Interface: DiskServiceServer

Defined in: src/generated/nebius/compute/v1/index.ts:730

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateDiskRequest`](CreateDiskRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:734

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteDiskRequest`](DeleteDiskRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:736

---

### get

> **get**: `handleUnaryCall`\<[`GetDiskRequest`](GetDiskRequest.md), [`Disk`](Disk.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:731

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Disk`](Disk.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:732

---

### list

> **list**: `handleUnaryCall`\<[`ListDisksRequest`](ListDisksRequest.md), [`ListDisksResponse`](ListDisksResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:733

---

### listOperationsByParent

> **listOperationsByParent**: `handleUnaryCall`\<[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:737

---

### update

> **update**: `handleUnaryCall`\<[`UpdateDiskRequest`](UpdateDiskRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:735
