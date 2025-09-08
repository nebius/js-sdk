[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/authorization/token](../README.md) / TokenProvider

# Class: TokenProvider

Defined in: [src/runtime/authorization/token.ts:26](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L26)

## Implements

- [`Provider`](../../provider/interfaces/Provider.md)

## Constructors

### Constructor

> **new TokenProvider**(`tokenProvider`): `TokenProvider`

Defined in: [src/runtime/authorization/token.ts:27](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L27)

#### Parameters

##### tokenProvider

[`Bearer`](../../../token/classes/Bearer.md)

#### Returns

`TokenProvider`

## Methods

### authenticator()

> **authenticator**(): [`Authenticator`](../../provider/interfaces/Authenticator.md)

Defined in: [src/runtime/authorization/token.ts:28](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L28)

#### Returns

[`Authenticator`](../../provider/interfaces/Authenticator.md)

#### Implementation of

[`Provider`](../../provider/interfaces/Provider.md).[`authenticator`](../../provider/interfaces/Provider.md#authenticator)

---

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/authorization/token.ts:31](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/authorization/token.ts#L31)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Provider`](../../provider/interfaces/Provider.md).[`close`](../../provider/interfaces/Provider.md#close)
