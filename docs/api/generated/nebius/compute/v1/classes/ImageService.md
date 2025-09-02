[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / ImageService

# Class: ImageService

Defined in: src/generated/nebius/compute/v1/index.ts:5528

## Implements

- `ImageService`

## Constructors

### Constructor

> **new ImageService**(`sdk`): `ImageService`

Defined in: src/generated/nebius/compute/v1/index.ts:5573

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`ImageService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.ImageService"`

Defined in: src/generated/nebius/compute/v1/index.ts:5529

## Methods

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5534

Retrieves detailed information about a specific image by its ID.

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5535

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5536

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5579

Retrieves detailed information about a specific image by its ID.

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5580

Retrieves detailed information about a specific image by its ID.

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5581

Retrieves detailed information about a specific image by its ID.

##### Parameters

###### request

[`GetImageRequest`](../interfaces/GetImageRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetImageRequest`](../interfaces/GetImageRequest.md), [`Image`](../interfaces/Image.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5541

Retrieves detailed information about a specific image by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5542

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5543

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5591

Retrieves detailed information about a specific image by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5592

Retrieves detailed information about a specific image by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5593

Retrieves detailed information about a specific image by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](../interfaces/Image.md)\>

***

### getLatestByFamily()

#### Call Signature

> **getLatestByFamily**(`request`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5549

Retrieves the most recent image from a specified family.
 Image families are used to organize related images and ensure easy access to the latest version.

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getLatestByFamily**(`request`, `metadata`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5550

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getLatestByFamily**(`request`, `metadata`, `options`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5551

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getLatestByFamily**(`request`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5603

Retrieves the most recent image from a specified family.
 Image families are used to organize related images and ensure easy access to the latest version.

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getLatestByFamily**(`request`, `metadata`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5604

Retrieves the most recent image from a specified family.
 Image families are used to organize related images and ensure easy access to the latest version.

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

#### Call Signature

> **getLatestByFamily**(`request`, `metadata`, `options`): `Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5605

Retrieves the most recent image from a specified family.
 Image families are used to organize related images and ensure easy access to the latest version.

##### Parameters

###### request

[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetImageLatestByFamilyRequest`](../interfaces/GetImageLatestByFamilyRequest.md), [`Image`](../interfaces/Image.md)\>

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5556

Lists all images in a specific parent resource.

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5557

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5558

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5615

Lists all images in a specific parent resource.

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5616

Lists all images in a specific parent resource.

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5617

Lists all images in a specific parent resource.

##### Parameters

###### request

[`ListImagesRequest`](../interfaces/ListImagesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListImagesRequest`](../interfaces/ListImagesRequest.md), [`ListImagesResponse`](../interfaces/ListImagesResponse.md)\>

***

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5563

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5564

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5565

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5627

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5628

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:5629

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>
