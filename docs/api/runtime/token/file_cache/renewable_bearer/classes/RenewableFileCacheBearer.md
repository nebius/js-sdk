[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/renewable\_bearer](../README.md) / RenewableFileCacheBearer

# Class: RenewableFileCacheBearer

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:109](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L109)

## Extends

- [`Bearer`](../../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new RenewableFileCacheBearer**(`_wrapped`, `safetyMarginMs`, `cacheFile`, `throttleMs`, `logger?`): `RenewableFileCacheBearer`

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:114](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L114)

#### Parameters

##### \_wrapped

[`Bearer`](../../../classes/Bearer.md)

##### safetyMarginMs

`number` = `...`

##### cacheFile

`string` = `...`

##### throttleMs

`number` = `...`

##### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### Returns

`RenewableFileCacheBearer`

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`constructor`](../../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.RenewableFileCacheBearer"` = `'nebius.sdk.RenewableFileCacheBearer'`

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:110](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L110)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`$type`](../../../classes/Bearer.md#type)

***

### safetyMargin

> **safetyMargin**: `null` \| `number`

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:112](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L112)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../../classes/Bearer.md).[`name`](../../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../../classes/Bearer.md)

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:146](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L146)

##### Returns

`undefined` \| [`Bearer`](../../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`wrapped`](../../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:137](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L137)

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

Defined in: [src/runtime/token/file\_cache/renewable\_bearer.ts:150](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/renewable_bearer.ts#L150)

#### Returns

[`Receiver`](../../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../../classes/Bearer.md).[`receiver`](../../../classes/Bearer.md#receiver)
