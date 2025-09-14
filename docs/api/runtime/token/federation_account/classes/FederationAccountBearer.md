[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/federation_account](../README.md) / FederationAccountBearer

# Class: FederationAccountBearer

Defined in: [src/runtime/token/federation_account.ts:9](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L9)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new FederationAccountBearer**(`profileName`, `clientId`, `federationEndpoint`, `federationId`, `opts?`): `FederationAccountBearer`

Defined in: [src/runtime/token/federation_account.ts:13](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L13)

#### Parameters

##### profileName

`string`

##### clientId

`string`

##### federationEndpoint

`string`

##### federationId

`string`

##### opts?

###### ca?

`string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

###### cacheFilePath?

`string`

###### fileCacheThrottleMs?

`number`

###### initialRetryTimeoutMs?

`number`

###### initialSafetyMarginMs?

`null` \| `number`

###### lifetimeSafeFraction?

`number`

###### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

###### maxRetries?

`number`

###### maxRetryTimeoutMs?

`number`

###### noBrowserOpen?

`boolean`

###### retrySafetyMarginMs?

`number`

###### retryTimeoutExponent?

`number`

###### timeoutMs?

`number`

###### writer?

(`s`) => `void`

#### Returns

`FederationAccountBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.FederationAccountBearer"` = `'nebius.sdk.FederationAccountBearer'`

Defined in: [src/runtime/token/federation_account.ts:10](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L10)

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

Defined in: [src/runtime/token/federation_account.ts:74](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L74)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/federation_account.ts:67](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L67)

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

Defined in: [src/runtime/token/federation_account.ts:78](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_account.ts#L78)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)
