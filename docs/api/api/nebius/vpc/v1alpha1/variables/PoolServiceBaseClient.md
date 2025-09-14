[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / PoolServiceBaseClient

# Variable: PoolServiceBaseClient

> **PoolServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`PoolServiceBaseClient`](../interfaces/PoolServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4613

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

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/Get"` = `"/nebius.vpc.v1alpha1.PoolService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/GetByName"` = `"/nebius.vpc.v1alpha1.PoolService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/List"` = `"/nebius.vpc.v1alpha1.PoolService/List"`

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

### serviceName

> **serviceName**: `string`
