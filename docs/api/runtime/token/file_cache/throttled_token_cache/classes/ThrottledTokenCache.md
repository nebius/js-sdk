[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/throttled\_token\_cache](../README.md) / ThrottledTokenCache

# Class: ThrottledTokenCache

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:6](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L6)

## Constructors

### Constructor

> **new ThrottledTokenCache**(`name`, `cacheFile`, `throttle`): `ThrottledTokenCache`

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:13](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L13)

#### Parameters

##### name

`string`

##### cacheFile

`string` = `...`

##### throttle

`number` = `...`

#### Returns

`ThrottledTokenCache`

## Methods

### get()

> **get**(): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:27](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L27)

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### getCached()

> **getCached**(): `undefined` \| [`Token`](../../../classes/Token.md)

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:23](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L23)

#### Returns

`undefined` \| [`Token`](../../../classes/Token.md)

***

### refresh()

> **refresh**(): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:56](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L56)

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### remove()

> **remove**(): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:42](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L42)

#### Returns

`Promise`\<`void`\>

***

### removeIfEqual()

> **removeIfEqual**(`token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:48](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L48)

#### Parameters

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/throttled\_token\_cache.ts:35](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/throttled_token_cache.ts#L35)

#### Parameters

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>
