[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file_cache/async_renewable_bearer](../README.md) / AsyncRenewableBearer

# Class: AsyncRenewableBearer

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:63](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L63)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new AsyncRenewableBearer**(`source`, `opts?`): `AsyncRenewableBearer`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:97](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L97)

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

###### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

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

### $type

> `readonly` **$type**: `"nebius.sdk.AsyncRenewableBearer"` = `'nebius.sdk.AsyncRenewableBearer'`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:64](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L64)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`$type`](../../../classes/Bearer.md#type)

---

### safetyMargin

> **safetyMargin**: `null` \| `number`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:95](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L95)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:149](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L149)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`wrapped`](../../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:141](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L141)

#### Returns

`unknown`

---

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:516](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L516)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`close`](../../../classes/Bearer.md#close)

---

### fetch()

> **fetch**(`timeoutMs?`, `options?`): `Promise`\<[`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:304](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L304)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](../../../classes/Token.md)\>

---

### isRenewalRequired()

> **isRenewalRequired**(): `boolean`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:454](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L454)

#### Returns

`boolean`

---

### receiver()

> **receiver**(): [`Receiver`](../../../classes/Receiver.md)

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:153](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L153)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)

---

### requestRenewal()

> **requestRenewal**(): `void`

Defined in: [src/runtime/token/file_cache/async_renewable_bearer.ts:460](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/file_cache/async_renewable_bearer.ts#L460)

#### Returns

`void`
