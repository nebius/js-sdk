[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / InstanceServiceServer

# Interface: InstanceServiceServer

Defined in: src/api/nebius/compute/v1/index.ts:7004

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateInstanceRequest`](CreateInstanceRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7008

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteInstanceRequest`](DeleteInstanceRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7010

---

### get

> **get**: `handleUnaryCall`\<[`GetInstanceRequest`](GetInstanceRequest.md), [`Instance`](Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7005

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7006

---

### list

> **list**: `handleUnaryCall`\<[`ListInstancesRequest`](ListInstancesRequest.md), [`ListInstancesResponse`](ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7007

---

### listOperationsByParent

> **listOperationsByParent**: `handleUnaryCall`\<[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7013

---

### start

> **start**: `handleUnaryCall`\<[`StartInstanceRequest`](StartInstanceRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7011

---

### stop

> **stop**: `handleUnaryCall`\<[`StopInstanceRequest`](StopInstanceRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7012

---

### update

> **update**: `handleUnaryCall`\<[`UpdateInstanceRequest`](UpdateInstanceRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7009
