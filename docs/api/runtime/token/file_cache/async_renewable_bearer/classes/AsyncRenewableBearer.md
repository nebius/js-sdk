[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/async\_renewable\_bearer](../README.md) / AsyncRenewableBearer

# Class: AsyncRenewableBearer

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:48](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L48)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Constructors

### Constructor

> **new AsyncRenewableBearer**(`source`, `opts?`): `AsyncRenewableBearer`

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:79](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L79)

#### Parameters

##### source

[`Bearer`](../../../classes/Bearer.md)

##### opts?

###### cacheFilePath?

`string`

###### fileCacheThrottleMs?

`number`

###### initialRetryTimeoutMs?

`number`

###### initialSafetyMarginMs?

`null` \| `number`

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

###### retrySafetyMarginMs?

`number`

###### retryTimeoutExponent?

`number`

###### safetyMinRemainingMs?

`number`

#### Returns

`AsyncRenewableBearer`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`constructor`](../../../classes/Bearer.md#constructor)

## Properties

### safetyMargin

> **safetyMargin**: `null` \| `number`

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:77](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L77)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:114](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L114)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`wrapped`](../../../classes/Bearer.md#wrapped)

## Methods

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:437](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L437)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`close`](../../../classes/Bearer.md#close)

***

### fetch()

> **fetch**(`timeoutMs?`, `options?`): `Promise`\<[`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:259](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L259)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](../../../classes/Token.md)\>

***

### isRenewalRequired()

> **isRenewalRequired**(): `boolean`

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:377](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L377)

#### Returns

`boolean`

***

### receiver()

> **receiver**(): [`Receiver`](../../../classes/Receiver.md)

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:118](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L118)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)

***

### requestRenewal()

> **requestRenewal**(): `void`

Defined in: [src/runtime/token/file\_cache/async\_renewable\_bearer.ts:383](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/async_renewable_bearer.ts#L383)

#### Returns

`void`
