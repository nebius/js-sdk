[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/service\_account](../README.md) / ServiceAccount

# Class: ServiceAccount

Defined in: [src/runtime/service\_account/service\_account.ts:20](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L20)

## Implements

- [`ServiceAccountLike`](../interfaces/ServiceAccountLike.md)

## Constructors

### Constructor

> **new ServiceAccount**(`privateKeyPem`, `publicKeyId`, `serviceAccountId`): `ServiceAccount`

Defined in: [src/runtime/service\_account/service\_account.ts:21](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L21)

#### Parameters

##### privateKeyPem

`string`

##### publicKeyId

`string`

##### serviceAccountId

`string`

#### Returns

`ServiceAccount`

## Properties

### privateKeyPem

> `readonly` **privateKeyPem**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:22](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L22)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`privateKeyPem`](../interfaces/ServiceAccountLike.md#privatekeypem)

***

### publicKeyId

> `readonly` **publicKeyId**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:23](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L23)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`publicKeyId`](../interfaces/ServiceAccountLike.md#publickeyid)

***

### serviceAccountId

> `readonly` **serviceAccountId**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:24](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L24)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`serviceAccountId`](../interfaces/ServiceAccountLike.md#serviceaccountid)

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/service\_account.ts:27](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L27)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`getExchangeTokenRequest`](../interfaces/ServiceAccountLike.md#getexchangetokenrequest)
