[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/renewable](../README.md) / RenewableBearer

# Class: RenewableBearer

Defined in: [src/runtime/token/renewable.ts:64](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L64)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new RenewableBearer**(`source`, `opts?`): `RenewableBearer`

Defined in: [src/runtime/token/renewable.ts:94](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L94)

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

###### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

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

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.RenewableBearer"` = `'nebius.sdk.RenewableBearer'`

Defined in: [src/runtime/token/renewable.ts:65](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L65)

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

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token/renewable.ts:133](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L133)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/renewable.ts:122](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L122)

#### Returns

`unknown`

---

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token/renewable.ts:434](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L434)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

---

### fetch()

> **fetch**(`timeoutMs?`, `options?`): `Promise`\<[`Token`](../../classes/Token.md)\>

Defined in: [src/runtime/token/renewable.ts:281](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L281)

#### Parameters

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../../authorization/provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<[`Token`](../../classes/Token.md)\>

---

### isRenewalRequired()

> **isRenewalRequired**(): `boolean`

Defined in: [src/runtime/token/renewable.ts:382](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L382)

#### Returns

`boolean`

---

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/renewable.ts:137](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L137)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

---

### requestRenewal()

> **requestRenewal**(): `void`

Defined in: [src/runtime/token/renewable.ts:388](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/renewable.ts#L388)

#### Returns

`void`
