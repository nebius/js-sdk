[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/throttled\_token\_cache](../README.md) / ThrottledTokenCache

# Class: ThrottledTokenCache

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:9](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L9)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new ThrottledTokenCache**(`name`, `cacheFile`, `throttle`, `logger?`): `ThrottledTokenCache`

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:17](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L17)

#### Parameters

##### name

`string`

##### cacheFile

`string` = `...`

##### throttle

`number` = `...`

##### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### Returns

`ThrottledTokenCache`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.ThrottledTokenCache"` = `'nebius.sdk.ThrottledTokenCache'`

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:10](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L10)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:31](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L31)

#### Returns

`unknown`

***

### get()

> **get**(): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:44](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L44)

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### getCached()

> **getCached**(): `undefined` \| [`Token`](../../../classes/Token.md)

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:40](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L40)

#### Returns

`undefined` \| [`Token`](../../../classes/Token.md)

***

### refresh()

> **refresh**(): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:86](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L86)

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### remove()

> **remove**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:69](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L69)

#### Returns

`Promise`\<`void`\>

***

### removeIfEqual()

> **removeIfEqual**(`token`): `Promise`\<`boolean`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:76](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L76)

#### Parameters

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`boolean`\>

***

### set()

> **set**(`token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:58](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/throttled_token_cache.ts#L58)

#### Parameters

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>
