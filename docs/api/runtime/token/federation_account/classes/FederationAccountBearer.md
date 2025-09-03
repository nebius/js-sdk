[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/federation_account](../README.md) / FederationAccountBearer

# Class: FederationAccountBearer

Defined in: [src/runtime/token/federation_account.ts:6](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_account.ts#L6)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Constructors

### Constructor

> **new FederationAccountBearer**(`profileName`, `clientId`, `federationEndpoint`, `federationId`, `opts?`): `FederationAccountBearer`

Defined in: [src/runtime/token/federation_account.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_account.ts#L9)

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

Defined in: [src/runtime/token/federation_account.ts:58](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_account.ts#L58)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

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

Defined in: [src/runtime/token/federation_account.ts:62](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_account.ts#L62)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)
