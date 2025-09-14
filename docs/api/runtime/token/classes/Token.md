[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Token

# Class: Token

Defined in: [src/runtime/token.ts:8](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L8)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Token**(`token`, `expiration?`): `Token`

Defined in: [src/runtime/token.ts:13](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L13)

#### Parameters

##### token

`string`

##### expiration?

`Date`

#### Returns

`Token`

## Properties

### $type

> `readonly` **$type**: `"nebius.iam.AccessToken"` = `'nebius.iam.AccessToken'`

Defined in: [src/runtime/token.ts:9](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L9)

## Accessors

### expiration

#### Get Signature

> **get** **expiration**(): `undefined` \| `Date`

Defined in: [src/runtime/token.ts:50](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L50)

##### Returns

`undefined` \| `Date`

***

### token

#### Get Signature

> **get** **token**(): `string`

Defined in: [src/runtime/token.ts:46](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L46)

##### Returns

`string`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/token.ts:22](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L22)

#### Returns

`object`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/token.ts:77](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L77)

#### Parameters

##### other

`unknown`

#### Returns

`boolean`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/runtime/token.ts:54](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L54)

#### Returns

`boolean`

***

### isExpired()

> **isExpired**(): `boolean`

Defined in: [src/runtime/token.ts:58](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L58)

#### Returns

`boolean`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [src/runtime/token.ts:63](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L63)

#### Returns

`object`

##### expires\_at

> **expires\_at**: `null` \| `number`

##### token

> **token**: `string`

***

### toString()

> **toString**(): `string`

Defined in: [src/runtime/token.ts:30](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L30)

#### Returns

`string`

***

### empty()

> `static` **empty**(): `Token`

Defined in: [src/runtime/token.ts:42](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L42)

#### Returns

`Token`

***

### fromJSON()

> `static` **fromJSON**(`data`): `Token`

Defined in: [src/runtime/token.ts:70](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L70)

#### Parameters

##### data

###### expires_at?

`null` \| `number`

###### token?

`string`

#### Returns

`Token`
