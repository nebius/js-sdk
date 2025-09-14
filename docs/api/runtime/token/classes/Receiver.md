[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Receiver

# Abstract Class: Receiver

Defined in: [src/runtime/token.ts:86](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L86)

## Constructors

### Constructor

> **new Receiver**(): `Receiver`

#### Returns

`Receiver`

## Properties

### $type

> `abstract` `readonly` **$type**: `string`

Defined in: [src/runtime/token.ts:87](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L87)

## Accessors

### latest

#### Get Signature

> **get** **latest**(): `undefined` \| [`Token`](Token.md)

Defined in: [src/runtime/token.ts:95](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L95)

##### Returns

`undefined` \| [`Token`](Token.md)

## Methods

### canRetry()

> `abstract` **canRetry**(`err`, `options?`): `boolean`

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L105)

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

Defined in: [src/runtime/token.ts:99](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L99)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](Token.md)\>
