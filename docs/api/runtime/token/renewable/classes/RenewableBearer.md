[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/renewable](../README.md) / RenewableBearer

# Class: RenewableBearer

Defined in: [src/runtime/token/renewable.ts:47](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L47)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Constructors

### Constructor

> **new RenewableBearer**(`source`, `opts?`): `RenewableBearer`

Defined in: [src/runtime/token/renewable.ts:76](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L76)

#### Parameters

##### source

[`Bearer`](../../classes/Bearer.md)

##### opts?

###### initialRetryTimeoutMs?

`number`

###### jitterFraction?

`number`

###### lifetimeSafeFraction?

`number`

###### maxRetries?

`number`

###### maxRetryTimeoutMs?

`number`

###### refreshRequestTimeoutMs?

`number`

###### retryTimeoutExponent?

`number`

###### safetyMinRemainingMs?

`number`

#### Returns

`RenewableBearer`

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

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token/renewable.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L101)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token/renewable.ts:396](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L396)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

***

### fetch()

> **fetch**(`timeoutMs?`, `options?`): `Promise`\<[`Token`](../../classes/Token.md)\>

Defined in: [src/runtime/token/renewable.ts:249](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L249)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](../../classes/Token.md)\>

***

### isRenewalRequired()

> **isRenewalRequired**(): `boolean`

Defined in: [src/runtime/token/renewable.ts:345](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L345)

#### Returns

`boolean`

***

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/renewable.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L105)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

***

### requestRenewal()

> **requestRenewal**(): `void`

Defined in: [src/runtime/token/renewable.ts:351](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/renewable.ts#L351)

#### Returns

`void`
