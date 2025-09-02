[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Token

# Class: Token

Defined in: [src/runtime/token.ts:7](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L7)

## Constructors

### Constructor

> **new Token**(`token`, `expiration?`): `Token`

Defined in: [src/runtime/token.ts:11](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L11)

#### Parameters

##### token

`string`

##### expiration?

`Date`

#### Returns

`Token`

## Accessors

### expiration

#### Get Signature

> **get** **expiration**(): `undefined` \| `Date`

Defined in: [src/runtime/token.ts:40](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L40)

##### Returns

`undefined` \| `Date`

***

### token

#### Get Signature

> **get** **token**(): `string`

Defined in: [src/runtime/token.ts:36](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L36)

##### Returns

`string`

## Methods

### \[custom\]()

> **\[custom\]**(): `string`

Defined in: [src/runtime/token.ts:16](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L16)

#### Returns

`string`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/token.ts:67](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L67)

#### Parameters

##### other

`unknown`

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/runtime/token.ts:44](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L44)

#### Returns

`boolean`

***

### isExpired()

> **isExpired**(): `boolean`

Defined in: [src/runtime/token.ts:48](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L48)

#### Returns

`boolean`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [src/runtime/token.ts:53](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L53)

#### Returns

`object`

##### expires\_at

> **expires\_at**: `null` \| `number`

##### token

> **token**: `string`

***

### toString()

> **toString**(): `string`

Defined in: [src/runtime/token.ts:20](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L20)

#### Returns

`string`

***

### empty()

> `static` **empty**(): `Token`

Defined in: [src/runtime/token.ts:32](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L32)

#### Returns

`Token`

***

### fromJSON()

> `static` **fromJSON**(`data`): `Token`

Defined in: [src/runtime/token.ts:60](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L60)

#### Parameters

##### data

###### expires_at?

`null` \| `number`

###### token?

`string`

#### Returns

`Token`
