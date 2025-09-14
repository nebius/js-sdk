[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/fieldmask](../README.md) / Mask

# Class: Mask

Defined in: [src/runtime/fieldmask.ts:136](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L136)

## Indexable

\[`key`: `symbol`\]: () => `string`

## Constructors

### Constructor

> **new Mask**(`any`, `fieldParts?`): `Mask`

Defined in: [src/runtime/fieldmask.ts:139](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L139)

#### Parameters

##### any

`null` | `Mask`

##### fieldParts?

`Map`\<`string`, `Mask`\>

#### Returns

`Mask`

## Properties

### any

> **any**: `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:137](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L137)

***

### fieldParts

> **fieldParts**: `Map`\<`string`, `Mask`\>

Defined in: [src/runtime/fieldmask.ts:138](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L138)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `string`

Defined in: [src/runtime/fieldmask.ts:278](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L278)

#### Returns

`string`

***

### addPath()

> **addPath**(`path`): `this`

Defined in: [src/runtime/fieldmask.ts:203](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L203)

#### Parameters

##### path

(`string` \| [`FieldKey`](FieldKey.md))[]

#### Returns

`this`

***

### copy()

> **copy**(): `Mask`

Defined in: [src/runtime/fieldmask.ts:146](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L146)

#### Returns

`Mask`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:152](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L152)

#### Parameters

##### other

`Mask`

#### Returns

`boolean`

***

### getSubMask()

> **getSubMask**(`key`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:184](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L184)

#### Parameters

##### key

`string` | [`FieldKey`](FieldKey.md)

#### Returns

`null` \| `Mask`

***

### getSubMaskByPath()

> **getSubMaskByPath**(`path`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:191](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L191)

#### Parameters

##### path

[`FieldPath`](FieldPath.md)

#### Returns

`null` \| `Mask`

***

### intersectDumb()

> **intersectDumb**(`other`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:353](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L353)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`null` \| `Mask`

***

### intersectResetMask()

> **intersectResetMask**(`other`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:334](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L334)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`null` \| `Mask`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/runtime/fieldmask.ts:143](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L143)

#### Returns

`boolean`

***

### isFieldPath()

> **isFieldPath**(): `boolean`

Defined in: [src/runtime/fieldmask.ts:180](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L180)

#### Returns

`boolean`

***

### marshal()

> **marshal**(): `string`

Defined in: [src/runtime/fieldmask.ts:272](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L272)

#### Returns

`string`

***

### merge()

> **merge**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:223](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L223)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### subMask()

> **subMask**(`path`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:199](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L199)

#### Parameters

##### path

`string` | [`FieldKey`](FieldKey.md) | [`FieldPath`](FieldPath.md)

#### Returns

`null` \| `Mask`

***

### subtractDumb()

> **subtractDumb**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:375](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L375)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### subtractResetMask()

> **subtractResetMask**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:400](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L400)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### toFieldPath()

> **toFieldPath**(): `null` \| [`FieldPath`](FieldPath.md)

Defined in: [src/runtime/fieldmask.ts:163](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L163)

#### Returns

`null` \| [`FieldPath`](FieldPath.md)

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [src/runtime/fieldmask.ts:452](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L452)

#### Returns

`unknown`

***

### toObject()

> **toObject**(): `unknown`

Defined in: [src/runtime/fieldmask.ts:441](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L441)

#### Returns

`unknown`

***

### toString()

> **toString**(): `string`

Defined in: [src/runtime/fieldmask.ts:285](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L285)

#### Returns

`string`

***

### fromObject()

> `static` **fromObject**(`obj`): `Mask`

Defined in: [src/runtime/fieldmask.ts:406](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L406)

#### Parameters

##### obj

`unknown`

#### Returns

`Mask`

***

### parse()

> `static` **parse**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:236](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L236)

#### Parameters

##### source

`string`

#### Returns

`Mask`

***

### Parse()

> `static` **Parse**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:239](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L239)

#### Parameters

##### source

`string`

#### Returns

`Mask`

***

### parseJSON()

> `static` **parseJSON**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:436](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/fieldmask.ts#L436)

#### Parameters

##### source

`unknown`

#### Returns

`Mask`
