[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Bearer

# Abstract Class: Bearer

Defined in: [src/runtime/token.ts:98](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L98)

## Extended by

- [`NamedBearer`](NamedBearer.md)
- [`ExchangeableBearer`](../exchangeable/classes/ExchangeableBearer.md)
- [`FederationAccountBearer`](../federation_account/classes/FederationAccountBearer.md)
- [`FileBearer`](../file/classes/FileBearer.md)
- [`RenewableBearer`](../renewable/classes/RenewableBearer.md)
- [`ServiceAccountBearer`](../service_account/classes/ServiceAccountBearer.md)
- [`StaticBearer`](../static/classes/StaticBearer.md)
- [`FederationBearer`](../federation_bearer/classes/FederationBearer.md)
- [`AsyncRenewableBearer`](../file_cache/async_renewable_bearer/classes/AsyncRenewableBearer.md)
- [`PureFileCacheBearer`](../file_cache/file_bearer/classes/PureFileCacheBearer.md)
- [`RenewableFileCacheBearer`](../file_cache/renewable_bearer/classes/RenewableFileCacheBearer.md)

## Constructors

### Constructor

> **new Bearer**(): `Bearer`

#### Returns

`Bearer`

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| `Bearer`

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L105)

##### Returns

`undefined` \| `Bearer`

## Methods

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:109](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L109)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

---

### receiver()

> `abstract` **receiver**(): [`Receiver`](Receiver.md)

Defined in: [src/runtime/token.ts:99](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L99)

#### Returns

[`Receiver`](Receiver.md)
