[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/registry](../README.md) / MessageClassInterface

# Interface: MessageClassInterface

Defined in: [src/runtime/protos/registry.ts:8](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L8)

## Properties

### $type

> **$type**: `string`

Defined in: [src/runtime/protos/registry.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L9)

## Methods

### create()

> **create**(`base?`): [`MessageInstanceInterface`](MessageInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:16](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L16)

#### Parameters

##### base?

`any`

#### Returns

[`MessageInstanceInterface`](MessageInstanceInterface.md)

---

### decode()

> **decode**(`input`, `length?`): [`MessageInstanceInterface`](MessageInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:11](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L11)

#### Parameters

##### input

[`BinaryReader`](../../core/classes/BinaryReader.md) | `Uint8Array`\<`ArrayBufferLike`\>

##### length?

`number`

#### Returns

[`MessageInstanceInterface`](MessageInstanceInterface.md)

---

### encode()

> **encode**(`message`, `writer?`): [`BinaryWriter`](../../core/classes/BinaryWriter.md)

Defined in: [src/runtime/protos/registry.ts:10](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L10)

#### Parameters

##### message

[`MessageInstanceInterface`](MessageInstanceInterface.md)

##### writer?

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

#### Returns

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

---

### fromJSON()

> **fromJSON**(`object`): [`MessageInstanceInterface`](MessageInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:13](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L13)

#### Parameters

##### object

`any`

#### Returns

[`MessageInstanceInterface`](MessageInstanceInterface.md)

---

### fromPartial()

> **fromPartial**(`object`): [`MessageInstanceInterface`](MessageInstanceInterface.md)

Defined in: [src/runtime/protos/registry.ts:18](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L18)

#### Parameters

##### object

`any`

#### Returns

[`MessageInstanceInterface`](MessageInstanceInterface.md)

---

### toJSON()

> **toJSON**(`message`, `use?`): `unknown`

Defined in: [src/runtime/protos/registry.ts:14](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L14)

#### Parameters

##### message

[`MessageInstanceInterface`](MessageInstanceInterface.md)

##### use?

`"json"` | `"pb"`

#### Returns

`unknown`
