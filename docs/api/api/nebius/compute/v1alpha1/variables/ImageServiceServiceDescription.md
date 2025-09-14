[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / ImageServiceServiceDescription

# ~~Variable: ImageServiceServiceDescription~~

> **ImageServiceServiceDescription**: `object`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:4812

## Type Declaration

### ~~get~~

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.ImageService/Get"` = `"/nebius.compute.v1alpha1.ImageService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetImageRequest`](../interfaces/GetImageRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getByName~~

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.ImageService/GetByName"` = `"/nebius.compute.v1alpha1.ImageService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getLatestByFamily~~

> `readonly` **getLatestByFamily**: `object`

#### getLatestByFamily.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.ImageService/GetLatestByFamily"` = `"/nebius.compute.v1alpha1.ImageService/GetLatestByFamily"`

#### getLatestByFamily.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

#### getLatestByFamily.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getLatestByFamily.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getLatestByFamily.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Image`](../interfaces/Image.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Image`](../interfaces/Image.md)

#### getLatestByFamily.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Image`](../interfaces/Image.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getLatestByFamily.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~list~~

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.ImageService/List"` = `"/nebius.compute.v1alpha1.ImageService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListImagesResponse`](../interfaces/ListImagesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListImagesResponse`](../interfaces/ListImagesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListImagesResponse`](../interfaces/ListImagesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~listOperationsByParent~~

> `readonly` **listOperationsByParent**: `object`

#### listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.ImageService/ListOperationsByParent"` = `"/nebius.compute.v1alpha1.ImageService/ListOperationsByParent"`

#### listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

#### listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

#### listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

## Deprecated

Deprecated.
