[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / PoolServiceServiceDescription

# Variable: PoolServiceServiceDescription

> **PoolServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:4575

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/Get"` = `"/nebius.vpc.v1alpha1.PoolService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/GetByName"` = `"/nebius.vpc.v1alpha1.PoolService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.PoolService/List"` = `"/nebius.vpc.v1alpha1.PoolService/List"`

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
