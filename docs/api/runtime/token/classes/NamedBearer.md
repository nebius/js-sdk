[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / NamedBearer

# Class: NamedBearer

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L117)

## Extends

- [`Bearer`](Bearer.md)

## Constructors

### Constructor

> **new NamedBearer**(`_wrapped`, `_name`): `NamedBearer`

Defined in: [src/runtime/token.ts:118](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L118)

#### Parameters

##### \_wrapped

[`Bearer`](Bearer.md)

##### \_name

`string`

#### Returns

`NamedBearer`

#### Overrides

[`Bearer`](Bearer.md).[`constructor`](Bearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:129](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L129)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](Bearer.md).[`name`](Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](Bearer.md)

Defined in: [src/runtime/token.ts:125](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L125)

##### Returns

`undefined` \| [`Bearer`](Bearer.md)

#### Overrides

[`Bearer`](Bearer.md).[`wrapped`](Bearer.md#wrapped)

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

[`Bearer`](Bearer.md).[`close`](Bearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](Receiver.md)

Defined in: [src/runtime/token.ts:133](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L133)

#### Returns

[`Receiver`](Receiver.md)

#### Overrides

[`Bearer`](Bearer.md).[`receiver`](Bearer.md#receiver)
