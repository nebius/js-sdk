[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/fieldmask](../README.md) / FieldKey

# Class: FieldKey

Defined in: [src/runtime/fieldmask.ts:16](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L16)

## Indexable

\[`key`: `symbol`\]: () => `string`

## Constructors

### Constructor

> **new FieldKey**(`value`): `FieldKey`

Defined in: [src/runtime/fieldmask.ts:18](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L18)

#### Parameters

##### value

`string`

#### Returns

`FieldKey`

## Properties

### value

> `readonly` **value**: `string`

Defined in: [src/runtime/fieldmask.ts:17](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L17)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `string`

Defined in: [src/runtime/fieldmask.ts:48](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L48)

#### Returns

`string`

***

### marshal()

> **marshal**(): `string`

Defined in: [src/runtime/fieldmask.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L39)

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: [src/runtime/fieldmask.ts:21](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L21)

#### Returns

`string`

***

### unmarshal()

> `static` **unmarshal**(`marshaled`): `FieldKey`

Defined in: [src/runtime/fieldmask.ts:24](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L24)

#### Parameters

##### marshaled

`string`

#### Returns

`FieldKey`
