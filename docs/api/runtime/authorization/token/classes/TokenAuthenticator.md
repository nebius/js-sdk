[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/authorization/token](../README.md) / TokenAuthenticator

# Class: TokenAuthenticator

Defined in: [src/runtime/authorization/token.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L9)

## Implements

- [`Authenticator`](../../provider/interfaces/Authenticator.md)

## Constructors

### Constructor

> **new TokenAuthenticator**(`receiver`): `TokenAuthenticator`

Defined in: [src/runtime/authorization/token.ts:10](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L10)

#### Parameters

##### receiver

[`Receiver`](../../../token/classes/Receiver.md)

#### Returns

`TokenAuthenticator`

## Methods

### authenticate()

> **authenticate**(`metadata`, `timeoutMs?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/authorization/token.ts:12](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L12)

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

Defined in: [src/runtime/authorization/token.ts:21](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L21)

#### Parameters

##### err

`unknown`

##### options?

[`AuthorizationOptions`](../../provider/interfaces/AuthorizationOptions.md)

#### Returns

`boolean`

#### Implementation of

[`Authenticator`](../../provider/interfaces/Authenticator.md).[`canRetry`](../../provider/interfaces/Authenticator.md#canretry)
