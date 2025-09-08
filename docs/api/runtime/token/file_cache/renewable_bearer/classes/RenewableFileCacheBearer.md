[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file_cache/renewable_bearer](../README.md) / RenewableFileCacheBearer

# Class: RenewableFileCacheBearer

Defined in: [src/runtime/token/file_cache/renewable_bearer.ts:68](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/renewable_bearer.ts#L68)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Constructors

### Constructor

> **new RenewableFileCacheBearer**(`_wrapped`, `safetyMarginMs`, `cacheFile`, `throttleMs`): `RenewableFileCacheBearer`

Defined in: [src/runtime/token/file_cache/renewable_bearer.ts:72](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/renewable_bearer.ts#L72)

#### Parameters

##### \_wrapped

[`Bearer`](../../../classes/Bearer.md)

##### safetyMarginMs

`number` = `...`

##### cacheFile

`string` = `...`

##### throttleMs

`number` = `...`

#### Returns

`RenewableFileCacheBearer`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`constructor`](../../../classes/Bearer.md#constructor)

## Properties

### safetyMargin

> **safetyMargin**: `null` \| `number`

Defined in: [src/runtime/token/file_cache/renewable_bearer.ts:70](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/renewable_bearer.ts#L70)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token/file_cache/renewable_bearer.ts:85](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/renewable_bearer.ts#L85)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`wrapped`](../../../classes/Bearer.md#wrapped)

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

[`Bearer`](../../../classes/Bearer.md).[`close`](../../../classes/Bearer.md#close)

---

### receiver()

> **receiver**(): [`Receiver`](../../../classes/Receiver.md)

Defined in: [src/runtime/token/file_cache/renewable_bearer.ts:89](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/renewable_bearer.ts#L89)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)
