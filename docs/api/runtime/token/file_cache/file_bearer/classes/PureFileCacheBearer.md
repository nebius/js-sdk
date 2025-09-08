[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file_cache/file_bearer](../README.md) / PureFileCacheBearer

# Class: PureFileCacheBearer

Defined in: [src/runtime/token/file_cache/file_bearer.ts:20](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/file_bearer.ts#L20)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Constructors

### Constructor

> **new PureFileCacheBearer**(`name`, `cacheFile`, `throttleMs`): `PureFileCacheBearer`

Defined in: [src/runtime/token/file_cache/file_bearer.ts:24](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/file_bearer.ts#L24)

#### Parameters

##### name

`string`

##### cacheFile

`string` = `...`

##### throttleMs

`number` = `...`

#### Returns

`PureFileCacheBearer`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`constructor`](../../../classes/Bearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token/file_cache/file_bearer.ts:34](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/file_bearer.ts#L34)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L105)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Inherited from

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

Defined in: [src/runtime/token/file_cache/file_bearer.ts:38](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/file_bearer.ts#L38)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)
