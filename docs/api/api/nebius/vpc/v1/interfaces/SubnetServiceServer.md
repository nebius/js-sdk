[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / SubnetServiceServer

# Interface: SubnetServiceServer

Defined in: src/api/nebius/vpc/v1/index.ts:7097

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateSubnetRequest`](CreateSubnetRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7102

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteSubnetRequest`](DeleteSubnetRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7104

***

### get

> **get**: `handleUnaryCall`\<[`GetSubnetRequest`](GetSubnetRequest.md), [`Subnet`](Subnet.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7098

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetSubnetByNameRequest`](GetSubnetByNameRequest.md), [`Subnet`](Subnet.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7099

***

### list

> **list**: `handleUnaryCall`\<[`ListSubnetsRequest`](ListSubnetsRequest.md), [`ListSubnetsResponse`](ListSubnetsResponse.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7100

***

### listByNetwork

> **listByNetwork**: `handleUnaryCall`\<[`ListSubnetsByNetworkRequest`](ListSubnetsByNetworkRequest.md), [`ListSubnetsResponse`](ListSubnetsResponse.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7101

***

### update

> **update**: `handleUnaryCall`\<[`UpdateSubnetRequest`](UpdateSubnetRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/vpc/v1/index.ts:7103
