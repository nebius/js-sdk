[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / PoolServiceServer

# Interface: PoolServiceServer

Defined in: src/api/nebius/vpc/v1/index.ts:5104

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreatePoolRequest`](CreatePoolRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5109

***

### delete

> **delete**: `handleUnaryCall`\<[`DeletePoolRequest`](DeletePoolRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5111

***

### get

> **get**: `handleUnaryCall`\<[`GetPoolRequest`](GetPoolRequest.md), [`Pool`](Pool.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5105

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetPoolByNameRequest`](GetPoolByNameRequest.md), [`Pool`](Pool.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5106

***

### list

> **list**: `handleUnaryCall`\<[`ListPoolsRequest`](ListPoolsRequest.md), [`ListPoolsResponse`](ListPoolsResponse.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5107

***

### listBySourcePool

> **listBySourcePool**: `handleUnaryCall`\<[`ListPoolsBySourcePoolRequest`](ListPoolsBySourcePoolRequest.md), [`ListPoolsResponse`](ListPoolsResponse.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5108

***

### update

> **update**: `handleUnaryCall`\<[`UpdatePoolRequest`](UpdatePoolRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:5110
