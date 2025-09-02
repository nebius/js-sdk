[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / PoolServiceServiceDescription

# Variable: PoolServiceServiceDescription

> **PoolServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1/index.ts:5036

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Create"` = `"/nebius.vpc.v1.PoolService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Delete"` = `"/nebius.vpc.v1.PoolService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Get"` = `"/nebius.vpc.v1.PoolService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetPoolRequest`](../interfaces/GetPoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetPoolRequest`](../interfaces/GetPoolRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetPoolRequest`](../interfaces/GetPoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Pool`](../interfaces/Pool.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Pool`](../interfaces/Pool.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Pool`](../interfaces/Pool.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/GetByName"` = `"/nebius.vpc.v1.PoolService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Pool`](../interfaces/Pool.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Pool`](../interfaces/Pool.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Pool`](../interfaces/Pool.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/List"` = `"/nebius.vpc.v1.PoolService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### listBySourcePool

> `readonly` **listBySourcePool**: `object`

#### listBySourcePool.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/ListBySourcePool"` = `"/nebius.vpc.v1.PoolService/ListBySourcePool"`

#### listBySourcePool.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

#### listBySourcePool.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listBySourcePool.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listBySourcePool.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

#### listBySourcePool.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listBySourcePool.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Update"` = `"/nebius.vpc.v1.PoolService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

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
