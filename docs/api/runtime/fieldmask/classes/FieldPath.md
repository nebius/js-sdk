[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/fieldmask](../README.md) / FieldPath

# Class: FieldPath

Defined in: [src/runtime/fieldmask.ts:46](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L46)

## Constructors

### Constructor

> **new FieldPath**(`base?`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:48](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L48)

#### Parameters

##### base?

`null` | `Iterable`\<`string` \| [`FieldKey`](FieldKey.md), `any`, `any`\>

#### Returns

`FieldPath`

## Properties

### parts

> `readonly` **parts**: [`FieldKey`](FieldKey.md)[]

Defined in: [src/runtime/fieldmask.ts:47](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L47)

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/runtime/fieldmask.ts:63](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L63)

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`FieldKey`](FieldKey.md)\>

Defined in: [src/runtime/fieldmask.ts:60](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L60)

#### Returns

`Iterator`\<[`FieldKey`](FieldKey.md)\>

---

### append()

> **append**(`v`): `this`

Defined in: [src/runtime/fieldmask.ts:69](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L69)

#### Parameters

##### v

`string` | [`FieldKey`](FieldKey.md)

#### Returns

`this`

---

### appendMany()

> **appendMany**(`iter`): `this`

Defined in: [src/runtime/fieldmask.ts:73](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L73)

#### Parameters

##### iter

`Iterable`\<`string` \| [`FieldKey`](FieldKey.md)\>

#### Returns

`this`

---

### at()

> **at**(`i`): `undefined` \| [`FieldKey`](FieldKey.md)

Defined in: [src/runtime/fieldmask.ts:66](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L66)

#### Parameters

##### i

`number`

#### Returns

`undefined` \| [`FieldKey`](FieldKey.md)

---

### concat()

> **concat**(`iter`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:77](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L77)

#### Parameters

##### iter

`Iterable`\<`string` \| [`FieldKey`](FieldKey.md)\>

#### Returns

`FieldPath`

---

### copy()

> **copy**(): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:86](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L86)

#### Returns

`FieldPath`

---

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:89](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L89)

#### Parameters

##### other

`FieldPath`

#### Returns

`boolean`

---

### isPrefixOf()

> **isPrefixOf**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:97](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L97)

#### Parameters

##### other

`FieldPath`

#### Returns

`boolean`

---

### marshal()

> **marshal**(): `string`

Defined in: [src/runtime/fieldmask.ts:115](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L115)

#### Returns

`string`

---

### parent()

> **parent**(): `null` \| `FieldPath`

Defined in: [src/runtime/fieldmask.ts:82](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L82)

#### Returns

`null` \| `FieldPath`

---

### toMask()

> **toMask**(): [`Mask`](Mask.md)

Defined in: [src/runtime/fieldmask.ts:105](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L105)

#### Returns

[`Mask`](Mask.md)

---

### toString()

> **toString**(): `string`

Defined in: [src/runtime/fieldmask.ts:118](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L118)

#### Returns

`string`

---

### from()

> `static` **from**(...`parts`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:57](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/fieldmask.ts#L57)

#### Parameters

##### parts

...(`string` \| [`FieldKey`](FieldKey.md))[]

#### Returns

`FieldPath`
