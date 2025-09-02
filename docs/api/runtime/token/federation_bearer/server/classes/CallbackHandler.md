[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation\_bearer/server](../README.md) / CallbackHandler

# Class: CallbackHandler

Defined in: [src/runtime/token/federation\_bearer/server.ts:7](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L7)

## Constructors

### Constructor

> **new CallbackHandler**(): `CallbackHandler`

#### Returns

`CallbackHandler`

## Accessors

### addr

#### Get Signature

> **get** **addr**(): `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:19](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L19)

##### Returns

`string`

***

### code

#### Get Signature

> **get** **code**(): `null` \| `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:16](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L16)

##### Returns

`null` \| `string`

***

### state

#### Get Signature

> **get** **state**(): `string`

Defined in: [src/runtime/token/federation\_bearer/server.ts:13](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L13)

##### Returns

`string`

## Methods

### listenAndServe()

> **listenAndServe**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:24](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L24)

#### Returns

`Promise`\<`void`\>

***

### shutdown()

> **shutdown**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:62](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L62)

#### Returns

`Promise`\<`void`\>

***

### waitForCode()

> **waitForCode**(`timeoutMs`): `Promise`\<`null` \| `string`\>

Defined in: [src/runtime/token/federation\_bearer/server.ts:68](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/server.ts#L68)

#### Parameters

##### timeoutMs

`undefined` | `number`

#### Returns

`Promise`\<`null` \| `string`\>
