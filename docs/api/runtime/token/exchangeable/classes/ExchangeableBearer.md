[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/exchangeable](../README.md) / ExchangeableBearer

# Class: ExchangeableBearer

Defined in: [src/runtime/token/exchangeable.ts:125](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L125)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new ExchangeableBearer**(`requester`, `sdk`, `maxRetries`, `logger?`): `ExchangeableBearer`

Defined in: [src/runtime/token/exchangeable.ts:129](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L129)

#### Parameters

##### requester

[`TokenRequester`](../interfaces/TokenRequester.md)

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

##### maxRetries

`number` = `2`

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`ExchangeableBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.ExchangeableBearer"` = `'nebius.sdk.ExchangeableBearer'`

Defined in: [src/runtime/token/exchangeable.ts:126](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L126)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`$type`](../../classes/Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L117)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/exchangeable.ts:142](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L142)

#### Returns

`unknown`

---

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L121)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

---

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/exchangeable.ts:169](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L169)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

---

### setSDK()

> **setSDK**(`sdk`): `void`

Defined in: [src/runtime/token/exchangeable.ts:150](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/exchangeable.ts#L150)

#### Parameters

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`void`
