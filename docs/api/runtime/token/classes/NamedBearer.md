[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token](../README.md) / NamedBearer

# Class: NamedBearer

Defined in: [src/runtime/token.ts:129](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L129)

## Extends

- [`Bearer`](Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new NamedBearer**(`_wrapped`, `_name`): `NamedBearer`

Defined in: [src/runtime/token.ts:131](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L131)

#### Parameters

##### \_wrapped

[`Bearer`](Bearer.md)

##### \_name

`string`

#### Returns

`NamedBearer`

#### Overrides

[`Bearer`](Bearer.md).[`constructor`](Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.NamedBearer"` = `'nebius.sdk.NamedBearer'`

Defined in: [src/runtime/token.ts:130](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L130)

#### Overrides

[`Bearer`](Bearer.md).[`$type`](Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:152](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L152)

##### Returns

`undefined` \| `string`

#### Overrides

[`Bearer`](Bearer.md).[`name`](Bearer.md#name)

***

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](Bearer.md)

Defined in: [src/runtime/token.ts:148](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L148)

##### Returns

`undefined` \| [`Bearer`](Bearer.md)

#### Overrides

[`Bearer`](Bearer.md).[`wrapped`](Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token.ts:140](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L140)

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

[`Bearer`](Bearer.md).[`close`](Bearer.md#close)

***

### receiver()

> **receiver**(): [`Receiver`](Receiver.md)

Defined in: [src/runtime/token.ts:156](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token.ts#L156)

#### Returns

[`Receiver`](Receiver.md)

#### Overrides

[`Bearer`](Bearer.md).[`receiver`](Bearer.md#receiver)
