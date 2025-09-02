[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/file\_cache/token\_cache](../README.md) / TokenCache

# Class: TokenCache

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:15](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L15)

## Constructors

### Constructor

> **new TokenCache**(`options?`): `TokenCache`

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:19](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L19)

#### Parameters

##### options?

[`TokenCacheOptions`](../interfaces/TokenCacheOptions.md)

#### Returns

`TokenCache`

## Methods

### get()

> **get**(`name`): `Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:58](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L58)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`undefined` \| [`Token`](../../../classes/Token.md)\>

***

### remove()

> **remove**(`name`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:117](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L117)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### removeIfEqual()

> **removeIfEqual**(`name`, `token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:153](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L153)

#### Parameters

##### name

`string`

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`name`, `token`): `Promise`\<`void`\>

Defined in: [src/runtime/token/file\_cache/token\_cache.ts:85](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/file_cache/token_cache.ts#L85)

#### Parameters

##### name

`string`

##### token

[`Token`](../../../classes/Token.md)

#### Returns

`Promise`\<`void`\>
