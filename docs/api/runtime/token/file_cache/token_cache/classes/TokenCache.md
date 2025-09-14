[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/token\_cache](../README.md) / TokenCache

# Class: TokenCache

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:18](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L18)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new TokenCache**(`options?`): `TokenCache`

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:24](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L24)

#### Parameters

##### options?

[`TokenCacheOptions`](../interfaces/TokenCacheOptions.md)

#### Returns

`TokenCache`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.TokenCache"` = `'nebius.sdk.TokenCache'`

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:19](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L19)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:33](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L33)

#### Returns

`unknown`

***

### get()

> **get**(`name`): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:90](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L90)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### remove()

> **remove**(`name`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:177](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L177)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### removeIfEqual()

> **removeIfEqual**(`name`, `token`): `Promise`\<`boolean`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:229](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L229)

#### Parameters

##### name

`string`

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`boolean`\>

***

### set()

> **set**(`name`, `token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:134](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/file_cache/token_cache.ts#L134)

#### Parameters

##### name

`string`

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>
