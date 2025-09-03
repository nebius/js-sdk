[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/enum](../README.md) / EnumClass

# Type Alias: EnumClass\<TNames\>

> **EnumClass**\<`TNames`\> = `object` & `{ readonly [K in TNames]: EnumInstance<TNames> }`

Defined in: [src/runtime/protos/enum.ts:23](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/enum.ts#L23)

## Type Declaration

### \_byCode

> `readonly` **\_byCode**: `Map`\<`number`, [`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>\>

### \_byName

> `readonly` **\_byName**: `Map`\<`TNames`, [`EnumInstance`](EnumInstance.md)\<`TNames`\>\>

### $type

> `readonly` **$type**: `string`

### UNRECOGNIZED

> `readonly` **UNRECOGNIZED**: [`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

### values

> `readonly` **values**: `ReadonlyArray`\<[`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>\>

### encodeField()

> **encodeField**(`writer`, `fieldNo`, `v?`): `void`

#### Parameters

##### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

##### fieldNo

`number`

##### v?

[`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

#### Returns

`void`

### fromJSON()

> **fromJSON**(`o`): [`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

#### Parameters

##### o

`any`

#### Returns

[`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

### fromNumber()

> **fromNumber**(`n`): [`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

#### Parameters

##### n

`number`

#### Returns

[`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

### toJSON()

> **toJSON**(`v`): `string` \| `number`

#### Parameters

##### v

[`EnumInstance`](EnumInstance.md)\<`TNames` \| `"UNRECOGNIZED"`\>

#### Returns

`string` \| `number`

## Type Parameters

### TNames

`TNames` _extends_ `string` = `string`
