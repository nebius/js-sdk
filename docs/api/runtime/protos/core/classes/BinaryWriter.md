[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / BinaryWriter

# Class: BinaryWriter

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:62

## Constructors

### Constructor

> **new BinaryWriter**(`encodeUtf8?`): `BinaryWriter`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:85

#### Parameters

##### encodeUtf8?

(`text`) => `Uint8Array`

#### Returns

`BinaryWriter`

## Methods

### bool()

> **bool**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:125

Write a `bool` value, a variant.

#### Parameters

##### value

`boolean`

#### Returns

`this`

***

### bytes()

> **bytes**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:129

Write a `bytes` value, length-delimited arbitrary data.

#### Parameters

##### value

`Uint8Array`

#### Returns

`this`

***

### double()

> **double**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:141

Write a `double` value, a 64-bit floating point number.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### finish()

> **finish**(): `Uint8Array`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:89

Return all bytes written and reset this writer.

#### Returns

`Uint8Array`

***

### fixed32()

> **fixed32**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:145

Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### fixed64()

> **fixed64**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:161

Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.

#### Parameters

##### value

`string` | `number` | `bigint`

#### Returns

`this`

***

### float()

> **float**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:137

Write a `float` value, 32-bit floating point number.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### fork()

> **fork**(): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:96

Start a new fork for length-delimited data like a message
or a packed repeated field.

Must be joined later with `join()`.

#### Returns

`this`

***

### int32()

> **int32**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:121

Write a `int32` value, a signed 32 bit varint.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### int64()

> **int64**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:165

Write a `int64` value, a signed 64-bit varint.

#### Parameters

##### value

`string` | `number` | `bigint`

#### Returns

`this`

***

### join()

> **join**(): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:101

Join the last fork. Write its length and bytes, then
return to the previous state.

#### Returns

`this`

***

### raw()

> **raw**(`chunk`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:113

Write a chunk of raw bytes.

#### Parameters

##### chunk

`Uint8Array`

#### Returns

`this`

***

### sfixed32()

> **sfixed32**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:149

Write a `sfixed32` value, a signed, fixed-length 32-bit integer.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### sfixed64()

> **sfixed64**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:157

Write a `fixed64` value, a signed, fixed-length 64-bit integer.

#### Parameters

##### value

`string` | `number` | `bigint`

#### Returns

`this`

***

### sint32()

> **sint32**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:153

Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### sint64()

> **sint64**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:169

Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.

#### Parameters

##### value

`string` | `number` | `bigint`

#### Returns

`this`

***

### string()

> **string**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:133

Write a `string` value, length-delimited data converted to UTF-8 text.

#### Parameters

##### value

`string`

#### Returns

`this`

***

### tag()

> **tag**(`fieldNo`, `type`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:109

Writes a tag (field number and wire type).

Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.

Generated code should compute the tag ahead of time and call `uint32()`.

#### Parameters

##### fieldNo

`number`

##### type

`WireType`

#### Returns

`this`

***

### uint32()

> **uint32**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:117

Write a `uint32` value, an unsigned 32 bit varint.

#### Parameters

##### value

`number`

#### Returns

`this`

***

### uint64()

> **uint64**(`value`): `this`

Defined in: node\_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:173

Write a `uint64` value, an unsigned 64-bit varint.

#### Parameters

##### value

`string` | `number` | `bigint`

#### Returns

`this`
