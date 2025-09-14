[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / ImageServiceBaseClient

# Variable: ImageServiceBaseClient

> **ImageServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ImageServiceBaseClient`](../interfaces/ImageServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/compute/v1/index.ts:5515

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ImageServiceBaseClient`](../interfaces/ImageServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.compute.v1.ImageService/Get"` = `"/nebius.compute.v1.ImageService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetImageRequest`](../interfaces/GetImageRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.compute.v1.ImageService/GetByName"` = `"/nebius.compute.v1.ImageService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getLatestByFamily

> `readonly` **getLatestByFamily**: `object`

#### service.getLatestByFamily.path

> `readonly` **path**: `"/nebius.compute.v1.ImageService/GetLatestByFamily"` = `"/nebius.compute.v1.ImageService/GetLatestByFamily"`

#### service.getLatestByFamily.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

#### service.getLatestByFamily.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getLatestByFamily.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getLatestByFamily.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### service.getLatestByFamily.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getLatestByFamily.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.compute.v1.ImageService/List"` = `"/nebius.compute.v1.ImageService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListImagesResponse`](../interfaces/ListImagesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListImagesResponse`](../interfaces/ListImagesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListImagesResponse`](../interfaces/ListImagesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listOperationsByParent

> `readonly` **listOperationsByParent**: `object`

#### service.listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1.ImageService/ListOperationsByParent"` = `"/nebius.compute.v1.ImageService/ListOperationsByParent"`

#### service.listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

#### service.listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

#### service.listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
