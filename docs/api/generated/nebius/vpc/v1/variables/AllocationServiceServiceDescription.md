[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / AllocationServiceServiceDescription

# Variable: AllocationServiceServiceDescription

> **AllocationServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1/index.ts:863

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Create"` = `"/nebius.vpc.v1.AllocationService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAllocationRequest`](../interfaces/CreateAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Delete"` = `"/nebius.vpc.v1.AllocationService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAllocationRequest`](../interfaces/DeleteAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Get"` = `"/nebius.vpc.v1.AllocationService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAllocationRequest`](../interfaces/GetAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Allocation`](../interfaces/Allocation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Allocation`](../interfaces/Allocation.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Allocation`](../interfaces/Allocation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/GetByName"` = `"/nebius.vpc.v1.AllocationService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAllocationByNameRequest`](../interfaces/GetAllocationByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Allocation`](../interfaces/Allocation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Allocation`](../interfaces/Allocation.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Allocation`](../interfaces/Allocation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/List"` = `"/nebius.vpc.v1.AllocationService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsRequest`](../interfaces/ListAllocationsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### listByPool

> `readonly` **listByPool**: `object`

#### listByPool.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/ListByPool"` = `"/nebius.vpc.v1.AllocationService/ListByPool"`

#### listByPool.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

#### listByPool.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsByPoolRequest`](../interfaces/ListAllocationsByPoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByPool.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listByPool.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

#### listByPool.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAllocationsResponse`](../interfaces/ListAllocationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByPool.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.vpc.v1.AllocationService/Update"` = `"/nebius.vpc.v1.AllocationService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateAllocationRequest`](../interfaces/UpdateAllocationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
