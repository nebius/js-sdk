[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/service\_account](../README.md) / ServiceAccount

# Class: ServiceAccount

Defined in: [src/runtime/service\_account/service\_account.ts:18](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L18)

## Implements

- [`ServiceAccountLike`](../interfaces/ServiceAccountLike.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new ServiceAccount**(`privateKeyPem`, `publicKeyId`, `serviceAccountId`, `logger?`): `ServiceAccount`

Defined in: [src/runtime/service\_account/service\_account.ts:19](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L19)

#### Parameters

##### privateKeyPem

`string`

##### publicKeyId

`string`

##### serviceAccountId

`string`

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`ServiceAccount`

## Properties

### logger?

> `readonly` `optional` **logger**: [`Logger`](../../../util/logging/classes/Logger.md)

Defined in: [src/runtime/service\_account/service\_account.ts:23](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L23)

***

### privateKeyPem

> `readonly` **privateKeyPem**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:20](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L20)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`privateKeyPem`](../interfaces/ServiceAccountLike.md#privatekeypem)

***

### publicKeyId

> `readonly` **publicKeyId**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:21](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L21)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`publicKeyId`](../interfaces/ServiceAccountLike.md#publickeyid)

***

### serviceAccountId

> `readonly` **serviceAccountId**: `string`

Defined in: [src/runtime/service\_account/service\_account.ts:22](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L22)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`serviceAccountId`](../interfaces/ServiceAccountLike.md#serviceaccountid)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service\_account/service\_account.ts:29](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L29)

#### Returns

`object`

***

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/service\_account.ts:36](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L36)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`ServiceAccountLike`](../interfaces/ServiceAccountLike.md).[`getExchangeTokenRequest`](../interfaces/ServiceAccountLike.md#getexchangetokenrequest)
