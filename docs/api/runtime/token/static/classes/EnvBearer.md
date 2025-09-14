[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/static](../README.md) / EnvBearer

# Class: EnvBearer

Defined in: [src/runtime/token/static.ts:62](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/static.ts#L62)

## Extends

- [`StaticBearer`](StaticBearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new EnvBearer**(`envVarName`): `EnvBearer`

Defined in: [src/runtime/token/static.ts:64](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/static.ts#L64)

#### Parameters

##### envVarName

`string` = `'NEBIUS_TOKEN'`

#### Returns

`EnvBearer`

#### Overrides

[`StaticBearer`](StaticBearer.md).[`constructor`](StaticBearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.EnvBearer"` = `'nebius.sdk.EnvBearer'`

Defined in: [src/runtime/token/static.ts:63](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/static.ts#L63)

#### Overrides

[`StaticBearer`](StaticBearer.md).[`$type`](StaticBearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`name`](StaticBearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token.ts:117](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L117)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`wrapped`](StaticBearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/static.ts:50](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/static.ts#L50)

#### Returns

`unknown`

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`[customJson]`](StaticBearer.md#customjson)

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

[`StaticBearer`](StaticBearer.md).[`close`](StaticBearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/static.ts:57](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/static.ts#L57)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Inherited from

[`StaticBearer`](StaticBearer.md).[`receiver`](StaticBearer.md#receiver)
