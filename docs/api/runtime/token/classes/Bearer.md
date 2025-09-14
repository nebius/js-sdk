[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / Bearer

# Abstract Class: Bearer

Defined in: [src/runtime/token.ts:109](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L109)

## Extended by

- [`NamedBearer`](NamedBearer.md)
- [`ExchangeableBearer`](../exchangeable/classes/ExchangeableBearer.md)
- [`FederatedCredentialsBearer`](../federated_credentials/classes/FederatedCredentialsBearer.md)
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

## Properties

### $type

> `abstract` `readonly` **$type**: `string`

Defined in: [src/runtime/token.ts:110](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L110)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| `Bearer`

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L117)

##### Returns

`undefined` \| `Bearer`

## Methods

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L121)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

***

### receiver()

> `abstract` **receiver**(): [`Receiver`](Receiver.md)

Defined in: [src/runtime/token.ts:111](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L111)

#### Returns

[`Receiver`](Receiver.md)
