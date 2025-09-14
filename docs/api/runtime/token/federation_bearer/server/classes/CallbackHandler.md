[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation\_bearer/server](../README.md) / CallbackHandler

# Class: CallbackHandler

Defined in: [src/runtime/token/federation\_bearer/server.ts:10](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L10)

## Constructors

### Constructor

> **new CallbackHandler**(`logger?`): `CallbackHandler`

Defined in: [src/runtime/token/federation\_bearer/server.ts:19](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L19)

#### Parameters

##### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### Returns

`CallbackHandler`

## Accessors

### addr

#### Get Signature

> **get** **addr**(): `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:33](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L33)

##### Returns

`string`

***

### code

#### Get Signature

> **get** **code**(): `null` \| `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:30](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L30)

##### Returns

`null` \| `string`

***

### state

#### Get Signature

> **get** **state**(): `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:27](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L27)

##### Returns

`string`

## Methods

### listenAndServe()

> **listenAndServe**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L38)

#### Returns

`Promise`\<`void`\>

***

### shutdown()

> **shutdown**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:111](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L111)

#### Returns

`Promise`\<`void`\>

***

### waitForCode()

> **waitForCode**(`timeoutMs`): `Promise`\<`null` \| `string`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:120](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/server.ts#L120)

#### Parameters

##### timeoutMs

`undefined` | `number`

#### Returns

`Promise`\<`null` \| `string`\>
