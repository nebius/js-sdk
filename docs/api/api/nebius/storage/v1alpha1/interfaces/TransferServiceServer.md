[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / TransferServiceServer

# Interface: TransferServiceServer

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1174

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateTransferRequest`](CreateTransferRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1178

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteTransferRequest`](DeleteTransferRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1182

***

### get

> **get**: `handleUnaryCall`\<[`GetTransferRequest`](GetTransferRequest.md), [`Transfer`](Transfer.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1175

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](Transfer.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1176

***

### getIterationHistory

> **getIterationHistory**: `handleUnaryCall`\<[`GetIterationHistoryRequest`](GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](GetIterationHistoryResponse.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1183

***

### list

> **list**: `handleUnaryCall`\<[`ListTransfersRequest`](ListTransfersRequest.md), [`ListTransfersResponse`](ListTransfersResponse.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1177

***

### resume

> **resume**: `handleUnaryCall`\<[`ResumeTransferRequest`](ResumeTransferRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1181

***

### stop

> **stop**: `handleUnaryCall`\<[`StopTransferRequest`](StopTransferRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1180

***

### update

> **update**: `handleUnaryCall`\<[`UpdateTransferRequest`](UpdateTransferRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1179
