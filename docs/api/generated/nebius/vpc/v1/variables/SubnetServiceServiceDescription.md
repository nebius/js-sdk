[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / SubnetServiceServiceDescription

# Variable: SubnetServiceServiceDescription

> **SubnetServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1/index.ts:7030

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Create"` = `"/nebius.vpc.v1.SubnetService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateSubnetRequest`](../interfaces/CreateSubnetRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Delete"` = `"/nebius.vpc.v1.SubnetService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteSubnetRequest`](../interfaces/DeleteSubnetRequest.md)

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

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Get"` = `"/nebius.vpc.v1.SubnetService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSubnetRequest`](../interfaces/GetSubnetRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Subnet`](../interfaces/Subnet.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Subnet`](../interfaces/Subnet.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Subnet`](../interfaces/Subnet.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/GetByName"` = `"/nebius.vpc.v1.SubnetService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSubnetByNameRequest`](../interfaces/GetSubnetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Subnet`](../interfaces/Subnet.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Subnet`](../interfaces/Subnet.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Subnet`](../interfaces/Subnet.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/List"` = `"/nebius.vpc.v1.SubnetService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsRequest`](../interfaces/ListSubnetsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### listByNetwork

> `readonly` **listByNetwork**: `object`

#### listByNetwork.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/ListByNetwork"` = `"/nebius.vpc.v1.SubnetService/ListByNetwork"`

#### listByNetwork.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

#### listByNetwork.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsByNetworkRequest`](../interfaces/ListSubnetsByNetworkRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByNetwork.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listByNetwork.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

#### listByNetwork.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSubnetsResponse`](../interfaces/ListSubnetsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByNetwork.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.vpc.v1.SubnetService/Update"` = `"/nebius.vpc.v1.SubnetService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateSubnetRequest`](../interfaces/UpdateSubnetRequest.md)

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
