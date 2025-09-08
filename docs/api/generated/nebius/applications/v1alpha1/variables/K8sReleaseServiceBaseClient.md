[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/applications/v1alpha1](../README.md) / K8sReleaseServiceBaseClient

# Variable: K8sReleaseServiceBaseClient

> **K8sReleaseServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`K8sReleaseServiceBaseClient`](../interfaces/K8sReleaseServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/applications/v1alpha1/index.ts:731

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`K8sReleaseServiceBaseClient`](../interfaces/K8sReleaseServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Create"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateK8sReleaseRequest`](../interfaces/CreateK8sReleaseRequest.md)

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

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Delete"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteK8sReleaseRequest`](../interfaces/DeleteK8sReleaseRequest.md)

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

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Get"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetK8sReleaseRequest`](../interfaces/GetK8sReleaseRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`K8sRelease`](../interfaces/K8sRelease.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`K8sRelease`](../interfaces/K8sRelease.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`K8sRelease`](../interfaces/K8sRelease.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/List"` = `"/nebius.applications.v1alpha1.K8sReleaseService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListK8sReleasesRequest`](../interfaces/ListK8sReleasesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListK8sReleasesResponse`](../interfaces/ListK8sReleasesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.applications.v1alpha1.K8sReleaseService/Update"` = `"/nebius.applications.v1alpha1.K8sReleaseService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateK8sReleaseRequest`](../interfaces/UpdateK8sReleaseRequest.md)

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
