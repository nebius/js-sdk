[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / ImageServiceServer

# Interface: ImageServiceServer

Defined in: src/api/nebius/compute/v1/index.ts:5507

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### get

> **get**: `handleUnaryCall`\<[`GetImageRequest`](GetImageRequest.md), [`Image`](Image.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:5508

---

### getByName

> **getByName**: `handleUnaryCall`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Image`](Image.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:5509

---

### getLatestByFamily

> **getLatestByFamily**: `handleUnaryCall`\<[`GetImageLatestByFamilyRequest`](GetImageLatestByFamilyRequest.md), [`Image`](Image.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:5510

---

### list

> **list**: `handleUnaryCall`\<[`ListImagesRequest`](ListImagesRequest.md), [`ListImagesResponse`](ListImagesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:5511

---

### listOperationsByParent

> **listOperationsByParent**: `handleUnaryCall`\<[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:5512
