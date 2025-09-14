[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / PoolServiceBaseClient

# Variable: PoolServiceBaseClient

> **PoolServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`PoolServiceBaseClient`](../interfaces/PoolServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1/index.ts:5114

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`PoolServiceBaseClient`](../interfaces/PoolServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Create"` = `"/nebius.vpc.v1.PoolService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreatePoolRequest`](../interfaces/CreatePoolRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Delete"` = `"/nebius.vpc.v1.PoolService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeletePoolRequest`](../interfaces/DeletePoolRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Get"` = `"/nebius.vpc.v1.PoolService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetPoolRequest`](../interfaces/GetPoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetPoolRequest`](../interfaces/GetPoolRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetPoolRequest`](../interfaces/GetPoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Pool`](../interfaces/Pool.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Pool`](../interfaces/Pool.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Pool`](../interfaces/Pool.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/GetByName"` = `"/nebius.vpc.v1.PoolService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetPoolByNameRequest`](../interfaces/GetPoolByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Pool`](../interfaces/Pool.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Pool`](../interfaces/Pool.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Pool`](../interfaces/Pool.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/List"` = `"/nebius.vpc.v1.PoolService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsRequest`](../interfaces/ListPoolsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listBySourcePool

> `readonly` **listBySourcePool**: `object`

#### service.listBySourcePool.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/ListBySourcePool"` = `"/nebius.vpc.v1.PoolService/ListBySourcePool"`

#### service.listBySourcePool.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

#### service.listBySourcePool.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsBySourcePoolRequest`](../interfaces/ListPoolsBySourcePoolRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listBySourcePool.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listBySourcePool.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

#### service.listBySourcePool.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPoolsResponse`](../interfaces/ListPoolsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listBySourcePool.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.vpc.v1.PoolService/Update"` = `"/nebius.vpc.v1.PoolService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdatePoolRequest`](../interfaces/UpdatePoolRequest.md)

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
