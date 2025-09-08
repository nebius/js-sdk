[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / NetworkServiceBaseClient

# Variable: NetworkServiceBaseClient

> **NetworkServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`NetworkServiceBaseClient`](../interfaces/NetworkServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:3560

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

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/Get"` = `"/nebius.vpc.v1alpha1.NetworkService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/GetByName"` = `"/nebius.vpc.v1alpha1.NetworkService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/List"` = `"/nebius.vpc.v1alpha1.NetworkService/List"`

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

### serviceName

> **serviceName**: `string`
