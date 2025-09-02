[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / NetworkServiceServiceDescription

# Variable: NetworkServiceServiceDescription

> **NetworkServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:3523

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/Get"` = `"/nebius.vpc.v1alpha1.NetworkService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/GetByName"` = `"/nebius.vpc.v1alpha1.NetworkService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.NetworkService/List"` = `"/nebius.vpc.v1alpha1.NetworkService/List"`

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
