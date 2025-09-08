[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/static](../README.md) / EnvBearer

# Class: EnvBearer

Defined in: [src/runtime/token/static.ts:38](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/static.ts#L38)

## Extends

- [`StaticBearer`](StaticBearer.md)

## Constructors

### Constructor

> **new EnvBearer**(`envVarName`): `EnvBearer`

Defined in: [src/runtime/token/static.ts:39](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/static.ts#L39)

#### Parameters

##### envVarName

`string` = `'NEBIUS_TOKEN'`

#### Returns

`EnvBearer`

#### Overrides

[`StaticBearer`](StaticBearer.md).[`constructor`](StaticBearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`name`](StaticBearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L105)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`wrapped`](StaticBearer.md#wrapped)

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

[`StaticBearer`](StaticBearer.md).[`close`](StaticBearer.md#close)

---

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/static.ts:33](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/static.ts#L33)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`receiver`](StaticBearer.md#receiver)
