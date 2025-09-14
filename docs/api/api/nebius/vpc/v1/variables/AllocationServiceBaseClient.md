[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / AllocationServiceBaseClient

# Variable: AllocationServiceBaseClient

> **AllocationServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`AllocationServiceBaseClient`](../interfaces/AllocationServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1/index.ts:941

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`AllocationServiceBaseClient`](../interfaces/AllocationServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Create"` = `"/nebius.vpc.v1.AllocationService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Delete"` = `"/nebius.vpc.v1.AllocationService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Get"` = `"/nebius.vpc.v1.AllocationService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Allocation`](../interfaces/Allocation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Allocation`](../interfaces/Allocation.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Allocation`](../interfaces/Allocation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/GetByName"` = `"/nebius.vpc.v1.AllocationService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Allocation`](../interfaces/Allocation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Allocation`](../interfaces/Allocation.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Allocation`](../interfaces/Allocation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/List"` = `"/nebius.vpc.v1.AllocationService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByPool

> `readonly` **listByPool**: `object`

#### service.listByPool.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/ListByPool"` = `"/nebius.vpc.v1.AllocationService/ListByPool"`

#### service.listByPool.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

#### service.listByPool.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByPool.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByPool.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

#### service.listByPool.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByPool.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Update"` = `"/nebius.vpc.v1.AllocationService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
