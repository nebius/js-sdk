[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/federation\_bearer](../README.md) / FederationBearer

# Class: FederationBearer

Defined in: [src/runtime/token/federation\_bearer/index.ts:73](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L73)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new FederationBearer**(`profileName`, `clientId`, `federationEndpoint`, `federationId`, `writer?`, `noBrowserOpen?`, `ca?`, `logger?`): `FederationBearer`

Defined in: [src/runtime/token/federation\_bearer/index.ts:76](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L76)

#### Parameters

##### profileName

`string`

##### clientId

`string`

##### federationEndpoint

`string`

##### federationId

`string`

##### writer?

(`s`) => `void`

##### noBrowserOpen?

`boolean` = `false`

##### ca?

`Buffer`\<`ArrayBufferLike`\>

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`FederationBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.FederationBearer"` = `'nebius.sdk.FederationBearer'`

Defined in: [src/runtime/token/federation\_bearer/index.ts:74](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L74)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`$type`](../../classes/Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token/federation\_bearer/index.ts:109](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L109)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L117)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/federation\_bearer/index.ts:98](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L98)

#### Returns

`unknown`

***

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L121)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/federation\_bearer/index.ts:113](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/index.ts#L113)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)
