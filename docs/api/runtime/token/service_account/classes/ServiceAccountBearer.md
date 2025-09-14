[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/service\_account](../README.md) / ServiceAccountBearer

# Class: ServiceAccountBearer

Defined in: [src/runtime/token/service\_account.ts:13](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L13)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new ServiceAccountBearer**(`serviceAccount`, `opts?`): `ServiceAccountBearer`

Defined in: [src/runtime/token/service\_account.ts:18](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L18)

#### Parameters

##### serviceAccount

`string` | [`ServiceAccount`](../../../service_account/service_account/classes/ServiceAccount.md) | [`Reader`](../../../service_account/service_account/interfaces/Reader.md)

##### opts?

###### initialRetryTimeoutMs?

`number`

###### lifetimeSafeFraction?

`number`

###### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

###### maxRetries?

`number`

###### maxRetryTimeoutMs?

`number`

###### privateKeyPem?

`string`

###### publicKeyId?

`string`

###### refreshRequestTimeoutMs?

`number`

###### retryTimeoutExponent?

`number`

###### sdk?

`null` \| [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) \| `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`ServiceAccountBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.ServiceAccountBearer"` = `'nebius.sdk.ServiceAccountBearer'`

Defined in: [src/runtime/token/service\_account.ts:14](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L14)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`$type`](../../classes/Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token/service\_account.ts:116](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L116)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/service\_account.ts:105](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L105)

#### Returns

`unknown`

***

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L121)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/service\_account.ts:120](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L120)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

***

### setSDK()

> **setSDK**(`sdk`): `void`

Defined in: [src/runtime/token/service\_account.ts:112](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/service_account.ts#L112)

#### Parameters

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`void`
