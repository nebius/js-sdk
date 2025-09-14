[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/authorization/token](../README.md) / TokenProvider

# Class: TokenProvider

Defined in: [src/runtime/authorization/token.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L39)

## Implements

- [`Provider`](../../provider/interfaces/Provider.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new TokenProvider**(`tokenProvider`): `TokenProvider`

Defined in: [src/runtime/authorization/token.ts:50](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L50)

#### Parameters

##### tokenProvider

[`Bearer`](../../../token/classes/Bearer.md)

#### Returns

`TokenProvider`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.TokenProvider"` = `'nebius.sdk.TokenProvider'`

Defined in: [src/runtime/authorization/token.ts:40](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L40)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/authorization/token.ts:44](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L44)

#### Returns

`unknown`

***

### authenticator()

> **authenticator**(): [`Authenticator`](../../provider/interfaces/Authenticator.md)

Defined in: [src/runtime/authorization/token.ts:51](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L51)

#### Returns

[`Authenticator`](../../provider/interfaces/Authenticator.md)

#### Implementation of

[`Provider`](../../provider/interfaces/Provider.md).[`authenticator`](../../provider/interfaces/Provider.md#authenticator)

***

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/authorization/token.ts:54](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/authorization/token.ts#L54)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Provider`](../../provider/interfaces/Provider.md).[`close`](../../provider/interfaces/Provider.md#close)
