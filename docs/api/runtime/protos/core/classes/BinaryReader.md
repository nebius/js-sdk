[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / BinaryReader

# Class: BinaryReader

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:175

## Constructors

### Constructor

> **new BinaryReader**(`buf`, `decodeUtf8?`): `BinaryReader`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:187

#### Parameters

##### buf

`Uint8Array`

##### decodeUtf8?

(`bytes`) => `string`

#### Returns

`BinaryReader`

## Properties

### len

> `readonly` **len**: `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:184

Number of bytes available in this reader.

---

### pos

> **pos**: `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:180

Current position.

---

### uint32()

> **uint32**: () => `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:207

Read a `uint32` field, an unsigned 32 bit varint.

#### Returns

`number`

## Methods

### bool()

> **bool**(): `boolean`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:231

Read a `bool` field, a variant.

#### Returns

`boolean`

---

### bytes()

> **bytes**(): `Uint8Array`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:259

Read a `bytes` field, length-delimited arbitrary data.

#### Returns

`Uint8Array`

---

### double()

> **double**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:255

Read a `double` field, a 64-bit floating point number.

#### Returns

`number`

---

### fixed32()

> **fixed32**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:235

Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.

#### Returns

`number`

---

### fixed64()

> **fixed64**(): `string` \| `bigint`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:243

Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.

#### Returns

`string` \| `bigint`

---

### float()

> **float**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:251

Read a `float` field, 32-bit floating point number.

#### Returns

`number`

---

### int32()

> **int32**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:211

Read a `int32` field, a signed 32 bit varint.

#### Returns

`number`

---

### int64()

> **int64**(): `string` \| `bigint`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:219

Read a `int64` field, a signed 64-bit varint.

#### Returns

`string` \| `bigint`

---

### sfixed32()

> **sfixed32**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:239

Read a `sfixed32` field, a signed, fixed-length 32-bit integer.

#### Returns

`number`

---

### sfixed64()

> **sfixed64**(): `string` \| `bigint`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:247

Read a `fixed64` field, a signed, fixed-length 64-bit integer.

#### Returns

`string` \| `bigint`

---

### sint32()

> **sint32**(): `number`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:215

Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.

#### Returns

`number`

---

### sint64()

> **sint64**(): `string` \| `bigint`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:227

Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.

#### Returns

`string` \| `bigint`

---

### skip()

> **skip**(`wireType`, `fieldNo?`): `Uint8Array`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:198

Skip one element and return the skipped data.

When skipping StartGroup, provide the tags field number to check for
matching field number in the EndGroup tag.

#### Parameters

##### wireType

`WireType`

##### fieldNo?

`number`

#### Returns

`Uint8Array`

---

### string()

> **string**(): `string`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:263

Read a `string` field, length-delimited data converted to UTF-8 text.

#### Returns

`string`

---

### tag()

> **tag**(): \[`number`, `WireType`\]

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:191

Reads a tag - field number and wire type.

#### Returns

\[`number`, `WireType`\]

---

### uint64()

> **uint64**(): `string` \| `bigint`

Defined in: node_modules/@bufbuild/protobuf/dist/cjs/wire/binary-encoding.d.ts:223

Read a `uint64` field, an unsigned 64-bit varint.

#### Returns

`string` \| `bigint`
