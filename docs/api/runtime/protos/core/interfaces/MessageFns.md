[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / MessageFns

# Interface: MessageFns\<T, TType\>

Defined in: [src/runtime/protos/core.ts:19](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L19)

## Type Parameters

### T

`T`

### TType

`TType` _extends_ `string`

## Properties

### $type

> **$type**: `TType`

Defined in: [src/runtime/protos/core.ts:20](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L20)

## Methods

### create()

> **create**\<`I`\>(`base?`): `T`

Defined in: [src/runtime/protos/core.ts:28](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L28)

#### Type Parameters

##### I

`I` _extends_ `undefined` \| `string` \| `number` \| `boolean` \| `Function` \| [`Long`](../classes/Long.md) \| `Date` \| `Uint8Array`\<`ArrayBufferLike`\> \| `Partial`\<`unknown`\>[] \| readonly `Partial`\<`unknown`\>[] \| \{ \[K in string \| number \| symbol\]?: DeepPartial\<T\<T\>\[K\]\> \} \| `Partial`\<`T`\>

#### Parameters

##### base?

`I`

#### Returns

`T`

---

### decode()

> **decode**(`input`, `length?`): `T`

Defined in: [src/runtime/protos/core.ts:25](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L25)

#### Parameters

##### input

[`BinaryReader`](../classes/BinaryReader.md) | `Uint8Array`\<`ArrayBufferLike`\>

##### length?

`number`

#### Returns

`T`

---

### encode()

> **encode**(`message`, `writer?`): [`BinaryWriter`](../classes/BinaryWriter.md)

Defined in: [src/runtime/protos/core.ts:21](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L21)

#### Parameters

##### message

`T`

##### writer?

[`BinaryWriter`](../classes/BinaryWriter.md)

#### Returns

[`BinaryWriter`](../classes/BinaryWriter.md)

---

### fromJSON()

> **fromJSON**(`object`): `T`

Defined in: [src/runtime/protos/core.ts:26](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L26)

#### Parameters

##### object

`any`

#### Returns

`T`

---

### fromPartial()

> **fromPartial**\<`I`\>(`object`): `T`

Defined in: [src/runtime/protos/core.ts:29](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L29)

#### Type Parameters

##### I

`I` _extends_ `undefined` \| `string` \| `number` \| `boolean` \| `Function` \| [`Long`](../classes/Long.md) \| `Date` \| `Uint8Array`\<`ArrayBufferLike`\> \| `Partial`\<`unknown`\>[] \| readonly `Partial`\<`unknown`\>[] \| \{ \[K in string \| number \| symbol\]?: DeepPartial\<T\<T\>\[K\]\> \} \| `Partial`\<`T`\>

#### Parameters

##### object

`I`

#### Returns

`T`

---

### toJSON()

> **toJSON**(`message`, `use?`): `unknown`

Defined in: [src/runtime/protos/core.ts:27](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L27)

#### Parameters

##### message

`T`

##### use?

`"json"` | `"pb"`

#### Returns

`unknown`
