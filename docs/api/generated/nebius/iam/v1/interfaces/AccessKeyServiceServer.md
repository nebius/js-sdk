[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / AccessKeyServiceServer

# ~~Interface: AccessKeyServiceServer~~

Defined in: src/generated/nebius/iam/v1/index.ts:1524

## Deprecated

Deprecated, will be removed on 2025-09-01: Access keys API v1 is deprecated, use the v2 version instead. Keys produced by API v1 are available using v2..

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### ~~activate~~

> **activate**: `handleUnaryCall`\<[`ActivateAccessKeyRequest`](ActivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1532

***

### ~~create~~

> **create**: `handleUnaryCall`\<[`CreateAccessKeyRequest`](CreateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1525

***

### ~~deactivate~~

> **deactivate**: `handleUnaryCall`\<[`DeactivateAccessKeyRequest`](DeactivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1533

***

### ~~delete~~

> **delete**: `handleUnaryCall`\<[`DeleteAccessKeyRequest`](DeleteAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1534

***

### ~~getByAwsId~~

> **getByAwsId**: `handleUnaryCall`\<[`GetAccessKeyByAwsIdRequest`](GetAccessKeyByAwsIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1530

***

### ~~getById~~

> **getById**: `handleUnaryCall`\<[`GetAccessKeyByIdRequest`](GetAccessKeyByIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1529

***

### ~~getSecretOnce~~

> **getSecretOnce**: `handleUnaryCall`\<[`GetAccessKeySecretOnceRequest`](GetAccessKeySecretOnceRequest.md), [`GetAccessKeySecretOnceResponse`](GetAccessKeySecretOnceResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1531

***

### ~~list~~

> **list**: `handleUnaryCall`\<[`ListAccessKeysRequest`](ListAccessKeysRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1526

***

### ~~listByAccount~~

> **listByAccount**: `handleUnaryCall`\<[`ListAccessKeysByAccountRequest`](ListAccessKeysByAccountRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1527

***

### ~~update~~

> **update**: `handleUnaryCall`\<[`UpdateAccessKeyRequest`](UpdateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1528
