[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/fieldmask](../README.md) / Mask

# Class: Mask

Defined in: [src/runtime/fieldmask.ts:123](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L123)

## Constructors

### Constructor

> **new Mask**(`any`, `fieldParts?`): `Mask`

Defined in: [src/runtime/fieldmask.ts:126](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L126)

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

Defined in: [src/runtime/fieldmask.ts:124](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L124)

***

### fieldParts

> **fieldParts**: `Map`\<`string`, `Mask`\>

Defined in: [src/runtime/fieldmask.ts:125](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L125)

## Methods

### addPath()

> **addPath**(`path`): `this`

Defined in: [src/runtime/fieldmask.ts:190](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L190)

#### Parameters

##### path

(`string` \| [`FieldKey`](FieldKey.md))[]

#### Returns

`this`

***

### copy()

> **copy**(): `Mask`

Defined in: [src/runtime/fieldmask.ts:133](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L133)

#### Returns

`Mask`

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:139](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L139)

#### Parameters

##### other

`Mask`

#### Returns

`boolean`

***

### getSubMask()

> **getSubMask**(`key`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:171](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L171)

#### Parameters

##### key

`string` | [`FieldKey`](FieldKey.md)

#### Returns

`null` \| `Mask`

***

### getSubMaskByPath()

> **getSubMaskByPath**(`path`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:178](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L178)

#### Parameters

##### path

[`FieldPath`](FieldPath.md)

#### Returns

`null` \| `Mask`

***

### intersectDumb()

> **intersectDumb**(`other`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:330](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L330)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`null` \| `Mask`

***

### intersectResetMask()

> **intersectResetMask**(`other`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:311](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L311)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`null` \| `Mask`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/runtime/fieldmask.ts:130](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L130)

#### Returns

`boolean`

***

### isFieldPath()

> **isFieldPath**(): `boolean`

Defined in: [src/runtime/fieldmask.ts:167](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L167)

#### Returns

`boolean`

***

### marshal()

> **marshal**(): `string`

Defined in: [src/runtime/fieldmask.ts:259](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L259)

#### Returns

`string`

***

### merge()

> **merge**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:210](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L210)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### subMask()

> **subMask**(`path`): `null` \| `Mask`

Defined in: [src/runtime/fieldmask.ts:186](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L186)

#### Parameters

##### path

`string` | [`FieldKey`](FieldKey.md) | [`FieldPath`](FieldPath.md)

#### Returns

`null` \| `Mask`

***

### subtractDumb()

> **subtractDumb**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:352](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L352)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### subtractResetMask()

> **subtractResetMask**(`other`): `this`

Defined in: [src/runtime/fieldmask.ts:377](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L377)

#### Parameters

##### other

`undefined` | `null` | `Mask`

#### Returns

`this`

***

### toFieldPath()

> **toFieldPath**(): `null` \| [`FieldPath`](FieldPath.md)

Defined in: [src/runtime/fieldmask.ts:150](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L150)

#### Returns

`null` \| [`FieldPath`](FieldPath.md)

***

### toJSON()

> **toJSON**(): `unknown`

Defined in: [src/runtime/fieldmask.ts:429](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L429)

#### Returns

`unknown`

***

### toObject()

> **toObject**(): `unknown`

Defined in: [src/runtime/fieldmask.ts:418](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L418)

#### Returns

`unknown`

***

### toString()

> **toString**(): `string`

Defined in: [src/runtime/fieldmask.ts:262](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L262)

#### Returns

`string`

***

### fromObject()

> `static` **fromObject**(`obj`): `Mask`

Defined in: [src/runtime/fieldmask.ts:383](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L383)

#### Parameters

##### obj

`unknown`

#### Returns

`Mask`

***

### parse()

> `static` **parse**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:223](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L223)

#### Parameters

##### source

`string`

#### Returns

`Mask`

***

### Parse()

> `static` **Parse**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:226](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L226)

#### Parameters

##### source

`string`

#### Returns

`Mask`

***

### parseJSON()

> `static` **parseJSON**(`source`): `Mask`

Defined in: [src/runtime/fieldmask.ts:413](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L413)

#### Parameters

##### source

`unknown`

#### Returns

`Mask`
