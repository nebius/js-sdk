[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/wkt](../README.md) / wkt

# Variable: wkt

> `const` **wkt**: `object`

Defined in: [src/runtime/protos/wkt.ts:76](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/wkt.ts#L76)

## Type Declaration

#### .google.protobuf.Any

> `readonly` **.google.protobuf.Any**: `object`

#### .google.protobuf.Any.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => [`AnyShape`](../../any/type-aliases/AnyShape.md)

##### Parameters

###### o

`unknown`

###### \_use?

`"json"` | `"pb"`

##### Returns

[`AnyShape`](../../any/type-aliases/AnyShape.md)

#### .google.protobuf.Any.fromPartial()

> `readonly` **fromPartial**: (`object`) => `object`

##### Parameters

###### object

###### typeUrl?

`string`

###### value?

`Uint8Array`\<`ArrayBufferLike`\>

##### Returns

`object`

###### typeUrl

> **typeUrl**: `string`

###### value

> **value**: `Uint8Array`\<`ArrayBufferLike`\>

#### .google.protobuf.Any.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => [`AnyShape`](../../any/type-aliases/AnyShape.md)

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

[`AnyShape`](../../any/type-aliases/AnyShape.md)

#### .google.protobuf.Any.toJSON()

> `readonly` **toJSON**: (`a`, `_use?`) => `any`

##### Parameters

###### a

[`AnyShape`](../../any/type-aliases/AnyShape.md)

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Any.writeMessage()

> `readonly` **writeMessage**: (`writer`, `a`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### a

[`AnyShape`](../../any/type-aliases/AnyShape.md)

##### Returns

`void`

#### .google.protobuf.Duration

> `readonly` **.google.protobuf.Duration**: `object`

#### .google.protobuf.Duration.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => `Duration`

##### Parameters

###### o

`unknown`

###### \_use?

`"json"` | `"pb"`

##### Returns

`Duration`

#### .google.protobuf.Duration.fromPartial()

> `readonly` **fromPartial**: (`object`) => `Duration`

##### Parameters

###### object

`Duration`

##### Returns

`Duration`

#### .google.protobuf.Duration.fromWire()

> `readonly` **fromWire**: (`t`) => `Duration` = `durFromWire`

##### Parameters

###### t

###### nanos

`number`

###### seconds

`string` \| `number` \| [`Long`](../../core/classes/Long.md)

##### Returns

`Duration`

#### .google.protobuf.Duration.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `Duration`

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`Duration`

#### .google.protobuf.Duration.toJSON()

> `readonly` **toJSON**: (`d`, `use?`) => `string` \| \{ `nanos`: `number`; `seconds`: `string`; \}

##### Parameters

###### d

`Duration`

###### use?

`"json"` | `"pb"`

##### Returns

`string` \| \{ `nanos`: `number`; `seconds`: `string`; \}

#### .google.protobuf.Duration.toWire()

> `readonly` **toWire**: (`d`) => `object` = `durToWire`

##### Parameters

###### d

`Duration`

##### Returns

`object`

###### nanos

> **nanos**: `number`

###### seconds

> **seconds**: [`Long`](../../core/classes/Long.md)

#### .google.protobuf.Duration.writeMessage()

> `readonly` **writeMessage**: (`writer`, `d`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### d

`Duration`

##### Returns

`void`

#### .google.protobuf.Empty

> `readonly` **.google.protobuf.Empty**: `object`

#### .google.protobuf.Empty.fromJSON()

> `readonly` **fromJSON**: (`_o`, `_use?`) => `any`

##### Parameters

###### \_o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Empty.fromPartial()

> `readonly` **fromPartial**: (`_o`) => `any`

##### Parameters

###### \_o

`any`

##### Returns

`any`

#### .google.protobuf.Empty.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `any`

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`any`

#### .google.protobuf.Empty.toJSON()

> `readonly` **toJSON**: (`_e`, `_use?`) => `any`

##### Parameters

###### \_e

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Empty.writeMessage()

> `readonly` **writeMessage**: (`_writer`, `_e`) => `void`

##### Parameters

###### \_writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### \_e

`any`

##### Returns

`void`

#### .google.protobuf.FieldMask

> `readonly` **.google.protobuf.FieldMask**: `object`

#### .google.protobuf.FieldMask.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => `string`[]

##### Parameters

###### o

`unknown`

###### \_use?

`"json"` | `"pb"`

##### Returns

`string`[]

#### .google.protobuf.FieldMask.fromPartial()

> `readonly` **fromPartial**: (`object`) => `string`[]

##### Parameters

###### object

`string`[]

##### Returns

`string`[]

#### .google.protobuf.FieldMask.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `string`[]

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`string`[]

#### .google.protobuf.FieldMask.toJSON()

> `readonly` **toJSON**: (`paths`, `_use?`) => `string`

##### Parameters

###### paths

`string`[]

###### \_use?

`"json"` | `"pb"`

##### Returns

`string`

#### .google.protobuf.FieldMask.writeMessage()

> `readonly` **writeMessage**: (`writer`, `paths`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### paths

`string`[]

##### Returns

`void`

#### .google.protobuf.ListValue

> `readonly` **.google.protobuf.ListValue**: `object`

#### .google.protobuf.ListValue.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => `any`[]

##### Parameters

###### o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`[]

#### .google.protobuf.ListValue.fromPartial()

> `readonly` **fromPartial**: (`object`) => `any`[]

##### Parameters

###### object

`any`[]

##### Returns

`any`[]

#### .google.protobuf.ListValue.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `any`[]

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`any`[]

#### .google.protobuf.ListValue.toJSON()

> `readonly` **toJSON**: (`o`, `_use?`) => `any`[]

##### Parameters

###### o

`any`[]

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`[]

#### .google.protobuf.ListValue.writeMessage()

> `readonly` **writeMessage**: (`writer`, `arr`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### arr

`any`[]

##### Returns

`void`

#### .google.protobuf.Struct

> `readonly` **.google.protobuf.Struct**: `object`

#### .google.protobuf.Struct.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => `any`

##### Parameters

###### o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Struct.fromPartial()

> `readonly` **fromPartial**: (`object`) => `any`

##### Parameters

###### object

`any`

##### Returns

`any`

#### .google.protobuf.Struct.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `any`

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`any`

#### .google.protobuf.Struct.toJSON()

> `readonly` **toJSON**: (`o`, `_use?`) => `any`

##### Parameters

###### o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Struct.writeMessage()

> `readonly` **writeMessage**: (`writer`, `obj`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### obj

`any`

##### Returns

`void`

#### .google.protobuf.Timestamp

> `readonly` **.google.protobuf.Timestamp**: `object`

#### .google.protobuf.Timestamp.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

##### Parameters

###### o

`unknown`

###### \_use?

`"json"` | `"pb"`

##### Returns

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

#### .google.protobuf.Timestamp.fromPartial()

> `readonly` **fromPartial**: (`object`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

##### Parameters

###### object

###### add?

\{(`value`, `unit?`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); (`duration`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### clone?

() => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

###### date?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### day?

\{(): `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### daysInMonth?

() => `number`

###### diff?

(`date?`, `unit?`, `float?`) => `number`

###### endOf?

(`unit`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

###### format?

(`template?`) => `string`

###### get?

(`unit`) => `number`

###### hour?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### isAfter?

(`date?`, `unit?`) => `boolean`

###### isBefore?

(`date?`, `unit?`) => `boolean`

###### isSame?

(`date?`, `unit?`) => `boolean`

###### isValid?

() => `boolean`

###### locale?

\{(): `string`; (`preset`, `object?`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### millisecond?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### minute?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### month?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### second?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### set?

(`unit`, `value`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

###### startOf?

(`unit`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

###### subtract?

\{(`value`, `unit?`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); (`duration`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

###### toDate?

() => `Date`

###### toISOString?

() => `string`

###### toJSON?

() => `string`

###### toString?

() => `string`

###### unix?

() => `number`

###### utcOffset?

() => `number`

###### valueOf?

() => `number`

###### year?

\{(): `number`; (`value`): [`Dayjs`](../../core/dayjs/classes/Dayjs.md); \}

##### Returns

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

#### .google.protobuf.Timestamp.fromWire()

> `readonly` **fromWire**: (`t`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md) = `tsFromWire`

##### Parameters

###### t

###### nanos

`number`

###### seconds

`string` \| `number` \| [`Long`](../../core/classes/Long.md)

##### Returns

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

#### .google.protobuf.Timestamp.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => [`Dayjs`](../../core/dayjs/classes/Dayjs.md)

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

#### .google.protobuf.Timestamp.toJSON()

> `readonly` **toJSON**: (`d`, `use?`) => `string` \| \{ `nanos`: `number`; `seconds`: `string`; \}

##### Parameters

###### d

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

###### use?

`"json"` | `"pb"`

##### Returns

`string` \| \{ `nanos`: `number`; `seconds`: `string`; \}

#### .google.protobuf.Timestamp.toWire()

> `readonly` **toWire**: (`d`) => `object` = `tsToWire`

##### Parameters

###### d

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

##### Returns

`object`

###### nanos

> **nanos**: `number`

###### seconds

> **seconds**: [`Long`](../../core/classes/Long.md)

#### .google.protobuf.Timestamp.writeMessage()

> `readonly` **writeMessage**: (`writer`, `d`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### d

[`Dayjs`](../../core/dayjs/classes/Dayjs.md)

##### Returns

`void`

#### .google.protobuf.Value

> `readonly` **.google.protobuf.Value**: `object`

#### .google.protobuf.Value.fromJSON()

> `readonly` **fromJSON**: (`o`, `_use?`) => `any`

##### Parameters

###### o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Value.fromPartial()

> `readonly` **fromPartial**: (`object`) => `any`

##### Parameters

###### object

`any`

##### Returns

`any`

#### .google.protobuf.Value.readMessage()

> `readonly` **readMessage**: (`reader`, `length`) => `any`

##### Parameters

###### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

###### length

`number`

##### Returns

`any`

#### .google.protobuf.Value.toJSON()

> `readonly` **toJSON**: (`o`, `_use?`) => `any`

##### Parameters

###### o

`any`

###### \_use?

`"json"` | `"pb"`

##### Returns

`any`

#### .google.protobuf.Value.writeMessage()

> `readonly` **writeMessage**: (`writer`, `v`) => `void`

##### Parameters

###### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

###### v

`any`

##### Returns

`void`
