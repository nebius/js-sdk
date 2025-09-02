[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/static](../README.md) / StaticReader

# Class: StaticReader

Defined in: [src/runtime/service\_account/static.ts:4](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/static.ts#L4)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Constructors

### Constructor

> **new StaticReader**(`sa`): `StaticReader`

Defined in: [src/runtime/service\_account/static.ts:5](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/static.ts#L5)

#### Parameters

##### sa

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Returns

`StaticReader`

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/static.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/static.ts#L9)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/static.ts:6](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/static.ts#L6)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
