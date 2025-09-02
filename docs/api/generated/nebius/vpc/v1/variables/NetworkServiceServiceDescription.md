[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / NetworkServiceServiceDescription

# Variable: NetworkServiceServiceDescription

> **NetworkServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1/index.ts:3267

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Create"` = `"/nebius.vpc.v1.NetworkService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

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

### createDefault

> `readonly` **createDefault**: `object`

#### createDefault.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/CreateDefault"` = `"/nebius.vpc.v1.NetworkService/CreateDefault"`

#### createDefault.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

#### createDefault.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### createDefault.requestStream

> `readonly` **requestStream**: `false` = `false`

#### createDefault.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### createDefault.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### createDefault.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Delete"` = `"/nebius.vpc.v1.NetworkService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Get"` = `"/nebius.vpc.v1.NetworkService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Network`](../interfaces/Network.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Network`](../interfaces/Network.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Network`](../interfaces/Network.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/GetByName"` = `"/nebius.vpc.v1.NetworkService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Network`](../interfaces/Network.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Network`](../interfaces/Network.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Network`](../interfaces/Network.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/List"` = `"/nebius.vpc.v1.NetworkService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Update"` = `"/nebius.vpc.v1.NetworkService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

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
