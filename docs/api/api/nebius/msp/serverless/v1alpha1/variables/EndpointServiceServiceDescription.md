[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / EndpointServiceServiceDescription

# Variable: EndpointServiceServiceDescription

> **EndpointServiceServiceDescription**: `object`

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:266

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/Create"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateEndpointRequest`](../interfaces/CreateEndpointRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/Delete"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/Get"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Endpoint`](../interfaces/Endpoint.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Endpoint`](../interfaces/Endpoint.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Endpoint`](../interfaces/Endpoint.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/GetByName"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Endpoint`](../interfaces/Endpoint.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Endpoint`](../interfaces/Endpoint.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Endpoint`](../interfaces/Endpoint.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/List"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListEndpointsResponse`](../interfaces/ListEndpointsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### start

> `readonly` **start**: `object`

#### start.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/Start"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/Start"`

#### start.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

#### start.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.requestStream

> `readonly` **requestStream**: `false` = `false`

#### start.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### start.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.responseStream

> `readonly` **responseStream**: `false` = `false`

### stop

> `readonly` **stop**: `object`

#### stop.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.EndpointService/Stop"` = `"/nebius.msp.serverless.v1alpha1.EndpointService/Stop"`

#### stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

#### stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.responseStream

> `readonly` **responseStream**: `false` = `false`
