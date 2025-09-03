[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v2](../README.md) / AccessKeyServiceServer

# Interface: AccessKeyServiceServer

Defined in: src/generated/nebius/iam/v2/index.ts:1466

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### activate

> **activate**: `handleUnaryCall`\<[`ActivateAccessKeyRequest`](ActivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1472

---

### activateByAwsId

> **activateByAwsId**: `handleUnaryCall`\<[`ActivateAccessKeyByAwsIdRequest`](ActivateAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1477

---

### create

> **create**: `handleUnaryCall`\<[`CreateAccessKeyRequest`](CreateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1467

---

### deactivate

> **deactivate**: `handleUnaryCall`\<[`DeactivateAccessKeyRequest`](DeactivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1473

---

### deactivateByAwsId

> **deactivateByAwsId**: `handleUnaryCall`\<[`DeactivateAccessKeyByAwsIdRequest`](DeactivateAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1478

---

### delete

> **delete**: `handleUnaryCall`\<[`DeleteAccessKeyRequest`](DeleteAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1471

---

### deleteByAwsId

> **deleteByAwsId**: `handleUnaryCall`\<[`DeleteAccessKeyByAwsIdRequest`](DeleteAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1476

---

### get

> **get**: `handleUnaryCall`\<[`GetAccessKeyRequest`](GetAccessKeyRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1468

---

### getByAwsId

> **getByAwsId**: `handleUnaryCall`\<[`GetAccessKeyByAwsIdRequest`](GetAccessKeyByAwsIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1475

---

### list

> **list**: `handleUnaryCall`\<[`ListAccessKeysRequest`](ListAccessKeysRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1469

---

### listByAccount

> **listByAccount**: `handleUnaryCall`\<[`ListAccessKeysByAccountRequest`](ListAccessKeysByAccountRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1474

---

### update

> **update**: `handleUnaryCall`\<[`UpdateAccessKeyRequest`](UpdateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/generated/nebius/iam/v2/index.ts:1470
