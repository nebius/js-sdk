[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/fieldmask](../README.md) / FieldPath

# Class: FieldPath

Defined in: [src/runtime/fieldmask.ts:53](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L53)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `Iterator`\<[`FieldKey`](FieldKey.md)\>

## Constructors

### Constructor

> **new FieldPath**(`base?`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:55](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L55)

#### Parameters

##### base?

`null` | `Iterable`\<`string` \| [`FieldKey`](FieldKey.md), `any`, `any`\>

#### Returns

`FieldPath`

## Properties

### parts

> `readonly` **parts**: [`FieldKey`](FieldKey.md)[]

Defined in: [src/runtime/fieldmask.ts:54](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L54)

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/runtime/fieldmask.ts:70](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L70)

##### Returns

`number`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `string`

Defined in: [src/runtime/fieldmask.ts:131](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L131)

#### Returns

`string`

---

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`FieldKey`](FieldKey.md)\>

Defined in: [src/runtime/fieldmask.ts:67](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L67)

#### Returns

`Iterator`\<[`FieldKey`](FieldKey.md)\>

---

### append()

> **append**(`v`): `this`

Defined in: [src/runtime/fieldmask.ts:76](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L76)

#### Parameters

##### v

`string` | [`FieldKey`](FieldKey.md)

#### Returns

`this`

---

### appendMany()

> **appendMany**(`iter`): `this`

Defined in: [src/runtime/fieldmask.ts:80](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L80)

#### Parameters

##### iter

`Iterable`\<`string` \| [`FieldKey`](FieldKey.md)\>

#### Returns

`this`

---

### at()

> **at**(`i`): `undefined` \| [`FieldKey`](FieldKey.md)

Defined in: [src/runtime/fieldmask.ts:73](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L73)

#### Parameters

##### i

`number`

#### Returns

`undefined` \| [`FieldKey`](FieldKey.md)

---

### concat()

> **concat**(`iter`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:84](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L84)

#### Parameters

##### iter

`Iterable`\<`string` \| [`FieldKey`](FieldKey.md)\>

#### Returns

`FieldPath`

---

### copy()

> **copy**(): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:93](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L93)

#### Returns

`FieldPath`

---

### equals()

> **equals**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:96](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L96)

#### Parameters

##### other

`FieldPath`

#### Returns

`boolean`

---

### isPrefixOf()

> **isPrefixOf**(`other`): `boolean`

Defined in: [src/runtime/fieldmask.ts:104](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L104)

#### Parameters

##### other

`FieldPath`

#### Returns

`boolean`

---

### marshal()

> **marshal**(): `string`

Defined in: [src/runtime/fieldmask.ts:122](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L122)

#### Returns

`string`

---

### parent()

> **parent**(): `null` \| `FieldPath`

Defined in: [src/runtime/fieldmask.ts:89](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L89)

#### Returns

`null` \| `FieldPath`

---

### toMask()

> **toMask**(): [`Mask`](Mask.md)

Defined in: [src/runtime/fieldmask.ts:112](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L112)

#### Returns

[`Mask`](Mask.md)

---

### toString()

> **toString**(): `string`

Defined in: [src/runtime/fieldmask.ts:125](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L125)

#### Returns

`string`

---

### from()

> `static` **from**(...`parts`): `FieldPath`

Defined in: [src/runtime/fieldmask.ts:64](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/fieldmask.ts#L64)

#### Parameters

##### parts

...(`string` \| [`FieldKey`](FieldKey.md))[]

#### Returns

`FieldPath`
