[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/authorization/token](../README.md) / TokenAuthenticator

# Class: TokenAuthenticator

Defined in: [src/runtime/authorization/token.ts:12](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L12)

## Implements

- [`Authenticator`](../../provider/interfaces/Authenticator.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new TokenAuthenticator**(`receiver`): `TokenAuthenticator`

Defined in: [src/runtime/authorization/token.ts:23](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L23)

#### Parameters

##### receiver

[`Receiver`](../../../token/classes/Receiver.md)

#### Returns

`TokenAuthenticator`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.TokenAuthenticator"` = `'nebius.sdk.TokenAuthenticator'`

Defined in: [src/runtime/authorization/token.ts:13](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L13)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/authorization/token.ts:17](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L17)

#### Returns

`unknown`

---

### authenticate()

> **authenticate**(`metadata`, `timeoutMs?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/authorization/token.ts:25](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L25)

#### Parameters

##### metadata

`Metadata`

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](../../provider/interfaces/AuthorizationOptions.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Authenticator`](../../provider/interfaces/Authenticator.md).[`authenticate`](../../provider/interfaces/Authenticator.md#authenticate)

---

### canRetry()

> **canRetry**(`err`, `options?`): `boolean`

Defined in: [src/runtime/authorization/token.ts:34](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/token.ts#L34)

#### Parameters

##### err

`unknown`

##### options?

[`AuthorizationOptions`](../../provider/interfaces/AuthorizationOptions.md)

#### Returns

`boolean`

#### Implementation of

[`Authenticator`](../../provider/interfaces/Authenticator.md).[`canRetry`](../../provider/interfaces/Authenticator.md#canretry)
