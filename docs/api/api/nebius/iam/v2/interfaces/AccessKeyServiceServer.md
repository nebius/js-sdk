[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v2](../README.md) / AccessKeyServiceServer

# Interface: AccessKeyServiceServer

Defined in: src/api/nebius/iam/v2/index.ts:1467

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### activate

> **activate**: `handleUnaryCall`\<[`ActivateAccessKeyRequest`](ActivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1473

***

### activateByAwsId

> **activateByAwsId**: `handleUnaryCall`\<[`ActivateAccessKeyByAwsIdRequest`](ActivateAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1478

***

### create

> **create**: `handleUnaryCall`\<[`CreateAccessKeyRequest`](CreateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1468

***

### deactivate

> **deactivate**: `handleUnaryCall`\<[`DeactivateAccessKeyRequest`](DeactivateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1474

***

### deactivateByAwsId

> **deactivateByAwsId**: `handleUnaryCall`\<[`DeactivateAccessKeyByAwsIdRequest`](DeactivateAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1479

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteAccessKeyRequest`](DeleteAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1472

***

### deleteByAwsId

> **deleteByAwsId**: `handleUnaryCall`\<[`DeleteAccessKeyByAwsIdRequest`](DeleteAccessKeyByAwsIdRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1477

***

### get

> **get**: `handleUnaryCall`\<[`GetAccessKeyRequest`](GetAccessKeyRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1469

***

### getByAwsId

> **getByAwsId**: `handleUnaryCall`\<[`GetAccessKeyByAwsIdRequest`](GetAccessKeyByAwsIdRequest.md), [`AccessKey`](AccessKey.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1476

***

### list

> **list**: `handleUnaryCall`\<[`ListAccessKeysRequest`](ListAccessKeysRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1470

***

### listByAccount

> **listByAccount**: `handleUnaryCall`\<[`ListAccessKeysByAccountRequest`](ListAccessKeysByAccountRequest.md), [`ListAccessKeysResponse`](ListAccessKeysResponse.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1475

***

### update

> **update**: `handleUnaryCall`\<[`UpdateAccessKeyRequest`](UpdateAccessKeyRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v2/index.ts:1471
