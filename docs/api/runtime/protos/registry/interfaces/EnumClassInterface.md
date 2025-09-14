[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/registry](../README.md) / EnumClassInterface

# Interface: EnumClassInterface

Defined in: [src/runtime/protos/registry.ts:29](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L29)

## Properties

### \_byCode

> `readonly` **\_byCode**: `Map`\<`number`, [`EnumInstanceInterface`](EnumInstanceInterface.md)\>

Defined in: [src/runtime/protos/registry.ts:33](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L33)

***

### \_byName

> `readonly` **\_byName**: `Map`\<`string`, [`EnumInstanceInterface`](EnumInstanceInterface.md)\>

Defined in: [src/runtime/protos/registry.ts:34](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L34)

***

### $type

> `readonly` **$type**: `string`

Defined in: [src/runtime/protos/registry.ts:30](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L30)

***

### UNRECOGNIZED

> `readonly` **UNRECOGNIZED**: [`EnumInstanceInterface`](EnumInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:31](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L31)

***

### values

> `readonly` **values**: readonly [`EnumInstanceInterface`](EnumInstanceInterface.md)[]

Defined in: [src/runtime/protos/registry.ts:32](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L32)

## Methods

### encodeField()

> **encodeField**(`writer`, `fieldNo`, `v?`): `void`

Defined in: [src/runtime/protos/registry.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L39)

#### Parameters

##### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

##### fieldNo

`number`

##### v?

[`EnumInstanceInterface`](EnumInstanceInterface.md)

#### Returns

`void`

***

### fromJSON()

> **fromJSON**(`o`): [`EnumInstanceInterface`](EnumInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:37](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L37)

#### Parameters

##### o

`any`

#### Returns

[`EnumInstanceInterface`](EnumInstanceInterface.md)

***

### fromNumber()

> **fromNumber**(`n`): [`EnumInstanceInterface`](EnumInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:35](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L35)

#### Parameters

##### n

`number`

#### Returns

[`EnumInstanceInterface`](EnumInstanceInterface.md)

***

### toJSON()

> **toJSON**(`v`): `string` \| `number`

Defined in: [src/runtime/protos/registry.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L38)

#### Parameters

##### v

[`EnumInstanceInterface`](EnumInstanceInterface.md)

#### Returns

`string` \| `number`
