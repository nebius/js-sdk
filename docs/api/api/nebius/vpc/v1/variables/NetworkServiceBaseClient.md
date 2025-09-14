[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / NetworkServiceBaseClient

# Variable: NetworkServiceBaseClient

> **NetworkServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`NetworkServiceBaseClient`](../interfaces/NetworkServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1/index.ts:3345

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`NetworkServiceBaseClient`](../interfaces/NetworkServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Create"` = `"/nebius.vpc.v1.NetworkService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateNetworkRequest`](../interfaces/CreateNetworkRequest.md)

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

#### service.createDefault

> `readonly` **createDefault**: `object`

#### service.createDefault.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/CreateDefault"` = `"/nebius.vpc.v1.NetworkService/CreateDefault"`

#### service.createDefault.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

#### service.createDefault.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateDefaultNetworkRequest`](../interfaces/CreateDefaultNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.createDefault.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.createDefault.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.createDefault.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.createDefault.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Delete"` = `"/nebius.vpc.v1.NetworkService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteNetworkRequest`](../interfaces/DeleteNetworkRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Get"` = `"/nebius.vpc.v1.NetworkService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNetworkRequest`](../interfaces/GetNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Network`](../interfaces/Network.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Network`](../interfaces/Network.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Network`](../interfaces/Network.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/GetByName"` = `"/nebius.vpc.v1.NetworkService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNetworkByNameRequest`](../interfaces/GetNetworkByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Network`](../interfaces/Network.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Network`](../interfaces/Network.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Network`](../interfaces/Network.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/List"` = `"/nebius.vpc.v1.NetworkService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNetworksRequest`](../interfaces/ListNetworksRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNetworksResponse`](../interfaces/ListNetworksResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.vpc.v1.NetworkService/Update"` = `"/nebius.vpc.v1.NetworkService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateNetworkRequest`](../interfaces/UpdateNetworkRequest.md)

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
