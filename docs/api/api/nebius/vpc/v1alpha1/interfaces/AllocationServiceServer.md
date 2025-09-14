[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / AllocationServiceServer

# Interface: AllocationServiceServer

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:819

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateAllocationRequest`](CreateAllocationRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:823

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteAllocationRequest`](DeleteAllocationRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:825

***

### get

> **get**: `handleUnaryCall`\<[`GetAllocationRequest`](GetAllocationRequest.md), [`Allocation`](Allocation.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:820

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetAllocationByNameRequest`](GetAllocationByNameRequest.md), [`Allocation`](Allocation.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:821

***

### list

> **list**: `handleUnaryCall`\<[`ListAllocationsRequest`](ListAllocationsRequest.md), [`ListAllocationsResponse`](ListAllocationsResponse.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:822

***

### update

> **update**: `handleUnaryCall`\<[`UpdateAllocationRequest`](UpdateAllocationRequest.md), [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:824
