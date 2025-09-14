[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/cached](../README.md) / CachedReader

# Class: CachedReader

Defined in: [src/runtime/service\_account/cached.ts:7](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L7)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new CachedReader**(`next`): `CachedReader`

Defined in: [src/runtime/service\_account/cached.ts:10](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L10)

#### Parameters

##### next

[`Reader`](../../service_account/interfaces/Reader.md)

#### Returns

`CachedReader`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.CachedReader"` = `'nebius.sdk.CachedReader'`

Defined in: [src/runtime/service\_account/cached.ts:8](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L8)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/service\_account/cached.ts:21](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L21)

#### Returns

`unknown`

***

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/cached.ts:27](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L27)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/cached.ts:11](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/cached.ts#L11)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
