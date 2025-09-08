[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/exchangeable](../README.md) / ExchangeableBearer

# Class: ExchangeableBearer

Defined in: [src/runtime/token/exchangeable.ts:93](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/exchangeable.ts#L93)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Constructors

### Constructor

> **new ExchangeableBearer**(`requester`, `sdk`, `maxRetries`): `ExchangeableBearer`

Defined in: [src/runtime/token/exchangeable.ts:96](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/exchangeable.ts#L96)

#### Parameters

##### requester

[`TokenRequester`](../../../service_account/service_account/interfaces/TokenRequester.md)

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

##### maxRetries

`number` = `2`

#### Returns

`ExchangeableBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L105)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:109](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L109)

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

Defined in: [src/runtime/token/exchangeable.ts:122](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/exchangeable.ts#L122)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

---

### setSDK()

> **setSDK**(`sdk`): `void`

Defined in: [src/runtime/token/exchangeable.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/exchangeable.ts#L105)

#### Parameters

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`void`
