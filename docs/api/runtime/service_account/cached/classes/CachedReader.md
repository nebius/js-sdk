[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/cached](../README.md) / CachedReader

# Class: CachedReader

Defined in: [src/runtime/service\_account/cached.ts:3](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/cached.ts#L3)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Constructors

### Constructor

> **new CachedReader**(`next`): `CachedReader`

Defined in: [src/runtime/service\_account/cached.ts:5](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/cached.ts#L5)

#### Parameters

##### next

[`Reader`](../../service_account/interfaces/Reader.md)

#### Returns

`CachedReader`

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/cached.ts:12](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/cached.ts#L12)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/cached.ts:6](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/cached.ts#L6)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
