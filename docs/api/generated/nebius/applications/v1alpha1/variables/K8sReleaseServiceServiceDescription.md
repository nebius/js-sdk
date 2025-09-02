[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/applications/v1alpha1](../README.md) / K8sReleaseServiceServiceDescription

# Variable: K8sReleaseServiceServiceDescription

> **K8sReleaseServiceServiceDescription**: `object`

Defined in: src/generated/nebius/applications/v1alpha1/index.ts:674

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Create"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

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

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Delete"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

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

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Get"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`K8sRelease`](../interfaces/K8sRelease.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`K8sRelease`](../interfaces/K8sRelease.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`K8sRelease`](../interfaces/K8sRelease.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/List"` = `"/nebius.applications.v1alpha1.K8sReleaseService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Update"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

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
