[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / SubnetServiceServiceDescription

# Variable: SubnetServiceServiceDescription

> **SubnetServiceServiceDescription**: `object`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7018

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/Get"` = `"/nebius.vpc.v1alpha1.SubnetService/Get"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/GetByName"` = `"/nebius.vpc.v1alpha1.SubnetService/GetByName"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/List"` = `"/nebius.vpc.v1alpha1.SubnetService/List"`

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

> `readonly` **path**: `"/nebius.vpc.v1alpha1.SubnetService/ListByNetwork"` = `"/nebius.vpc.v1alpha1.SubnetService/ListByNetwork"`

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
