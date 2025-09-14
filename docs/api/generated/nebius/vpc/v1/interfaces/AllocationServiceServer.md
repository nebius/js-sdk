[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / AllocationServiceServer

# Interface: AllocationServiceServer

Defined in: src/generated/nebius/vpc/v1/index.ts:931

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateAllocationRequest`](CreateAllocationRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:936

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteAllocationRequest`](DeleteAllocationRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:938

---

### get

> **get**: `handleUnaryCall`\<[`GetAllocationRequest`](GetAllocationRequest.md), [`Allocation`](Allocation.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:932

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetAllocationByNameRequest`](GetAllocationByNameRequest.md), [`Allocation`](Allocation.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:933

---

### list

> **list**: `handleUnaryCall`\<[`ListAllocationsRequest`](ListAllocationsRequest.md), [`ListAllocationsResponse`](ListAllocationsResponse.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:934

---

### listByPool

> **listByPool**: `handleUnaryCall`\<[`ListAllocationsByPoolRequest`](ListAllocationsByPoolRequest.md), [`ListAllocationsResponse`](ListAllocationsResponse.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:935

---

### update

> **update**: `handleUnaryCall`\<[`UpdateAllocationRequest`](UpdateAllocationRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:937
