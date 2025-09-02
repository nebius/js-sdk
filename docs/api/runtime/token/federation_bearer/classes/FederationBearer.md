[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/federation\_bearer](../README.md) / FederationBearer

# Class: FederationBearer

Defined in: [src/runtime/token/federation\_bearer/index.ts:58](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/index.ts#L58)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Constructors

### Constructor

> **new FederationBearer**(`profileName`, `clientId`, `federationEndpoint`, `federationId`, `writer?`, `noBrowserOpen?`, `ca?`): `FederationBearer`

Defined in: [src/runtime/token/federation\_bearer/index.ts:59](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/index.ts#L59)

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

#### Returns

`FederationBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token/federation\_bearer/index.ts:71](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/index.ts#L71)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L105)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:109](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L109)

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

Defined in: [src/runtime/token/federation\_bearer/index.ts:75](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/index.ts#L75)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)
