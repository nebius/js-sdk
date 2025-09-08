[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / SubnetServiceBaseClient

# Variable: SubnetServiceBaseClient

> **SubnetServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`SubnetServiceBaseClient`](../interfaces/SubnetServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7064

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`SubnetServiceBaseClient`](../interfaces/SubnetServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/Get"` = `"/nebius.vpc.v1alpha1.SubnetService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Subnet`](../interfaces/Subnet.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Subnet`](../interfaces/Subnet.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Subnet`](../interfaces/Subnet.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/GetByName"` = `"/nebius.vpc.v1alpha1.SubnetService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Subnet`](../interfaces/Subnet.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Subnet`](../interfaces/Subnet.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Subnet`](../interfaces/Subnet.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/List"` = `"/nebius.vpc.v1alpha1.SubnetService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByNetwork

> `readonly` **listByNetwork**: `object`

#### service.listByNetwork.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/ListByNetwork"` = `"/nebius.vpc.v1alpha1.SubnetService/ListByNetwork"`

#### service.listByNetwork.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

#### service.listByNetwork.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByNetwork.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByNetwork.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

#### service.listByNetwork.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByNetwork.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
