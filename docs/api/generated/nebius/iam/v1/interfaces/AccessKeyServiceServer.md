[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / AccessKeyServiceServer

# ~~Interface: AccessKeyServiceServer~~

Defined in: src/generated/nebius/iam/v1/index.ts:1525

## Deprecated

Deprecated, will be removed on 2026-09-01: Access keys API v1 is deprecated, use the v2 version instead. Keys produced by API v1 are available using v2..

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### ~~activate~~

> **activate**: `handleUnaryCall`\<[`ActivateAccessKeyRequest`](ActivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1533

---

### ~~create~~

> **create**: `handleUnaryCall`\<[`CreateAccessKeyRequest`](CreateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1526

---

### ~~deactivate~~

> **deactivate**: `handleUnaryCall`\<[`DeactivateAccessKeyRequest`](DeactivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1534

---

### ~~delete~~

> **delete**: `handleUnaryCall`\<[`DeleteAccessKeyRequest`](DeleteAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1535

---

### ~~getByAwsId~~

> **getByAwsId**: `handleUnaryCall`\<[`GetAccessKeyByAwsIdRequest`](GetAccessKeyByAwsIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1531

---

### ~~getById~~

> **getById**: `handleUnaryCall`\<[`GetAccessKeyByIdRequest`](GetAccessKeyByIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1530

---

### ~~getSecretOnce~~

> **getSecretOnce**: `handleUnaryCall`\<[`GetAccessKeySecretOnceRequest`](GetAccessKeySecretOnceRequest.md), [`GetAccessKeySecretOnceResponse`](GetAccessKeySecretOnceResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1532

---

### ~~list~~

> **list**: `handleUnaryCall`\<[`ListAccessKeysRequest`](ListAccessKeysRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1527

---

### ~~listByAccount~~

> **listByAccount**: `handleUnaryCall`\<[`ListAccessKeysByAccountRequest`](ListAccessKeysByAccountRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1528

---

### ~~update~~

> **update**: `handleUnaryCall`\<[`UpdateAccessKeyRequest`](UpdateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:1529
