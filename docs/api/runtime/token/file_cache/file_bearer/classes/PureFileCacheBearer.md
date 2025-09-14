[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/file\_bearer](../README.md) / PureFileCacheBearer

# Class: PureFileCacheBearer

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:33](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L33)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new PureFileCacheBearer**(`name`, `cacheFile`, `throttleMs`, `logger?`): `PureFileCacheBearer`

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L38)

#### Parameters

##### name

`string`

##### cacheFile

`string` = `...`

##### throttleMs

`number` = `...`

##### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### Returns

`PureFileCacheBearer`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`constructor`](../../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.PureFileCacheBearer"` = `'nebius.sdk.PureFileCacheBearer'`

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:34](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L34)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`$type`](../../../classes/Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:64](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L64)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L117)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`wrapped`](../../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:56](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L56)

#### Returns

`unknown`

***

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L121)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`close`](../../../classes/Bearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](../../../classes/Receiver.md)

Defined in: [src/runtime/token/file\_cache/file\_bearer.ts:68](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/file_bearer.ts#L68)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)
