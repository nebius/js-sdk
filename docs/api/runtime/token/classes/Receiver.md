[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Receiver

# Abstract Class: Receiver

Defined in: [src/runtime/token.ts:76](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L76)

## Constructors

### Constructor

> **new Receiver**(): `Receiver`

#### Returns

`Receiver`

## Accessors

### latest

#### Get Signature

> **get** **latest**(): `undefined` \| [`Token`](Token.md)

Defined in: [src/runtime/token.ts:84](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L84)

##### Returns

`undefined` \| [`Token`](Token.md)

## Methods

### canRetry()

> `abstract` **canRetry**(`err`, `options?`): `boolean`

Defined in: [src/runtime/token.ts:94](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L94)

#### Parameters

##### err

`unknown`

##### options?

[`AuthorizationOptions`](../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`boolean`

---

### fetch()

> **fetch**(`timeoutMs?`, `options?`): `Promise`\<[`Token`](Token.md)\>

Defined in: [src/runtime/token.ts:88](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L88)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](Token.md)\>
