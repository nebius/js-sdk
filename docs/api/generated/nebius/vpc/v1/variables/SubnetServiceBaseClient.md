[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / SubnetServiceBaseClient

# Variable: SubnetServiceBaseClient

> **SubnetServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`SubnetServiceBaseClient`](../interfaces/SubnetServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/vpc/v1/index.ts:7106

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

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Create"` = `"/nebius.vpc.v1.SubnetService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Delete"` = `"/nebius.vpc.v1.SubnetService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Get"` = `"/nebius.vpc.v1.SubnetService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/GetByName"` = `"/nebius.vpc.v1.SubnetService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/List"` = `"/nebius.vpc.v1.SubnetService/List"`

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/ListByNetwork"` = `"/nebius.vpc.v1.SubnetService/ListByNetwork"`

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

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Update"` = `"/nebius.vpc.v1.SubnetService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

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
