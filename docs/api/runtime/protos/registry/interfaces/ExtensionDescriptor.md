[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/registry](../README.md) / ExtensionDescriptor

# Interface: ExtensionDescriptor

Defined in: [src/runtime/protos/registry.ts:96](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L96)

## Properties

### decode()?

> `optional` **decode**: (`message`, `reader`, `tag`) => `boolean`

Defined in: [src/runtime/protos/registry.ts:122](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L122)

Generated decoder for this extension field. Implementation receives the raw tag already read.
It must verify the tag/field number matches, decode the value, assign it to the message, and
return true if it consumed the field, false otherwise.

#### Parameters

##### message

`any`

##### reader

[`BinaryReader`](../../core/classes/BinaryReader.md)

##### tag

`number`

#### Returns

`boolean`

***

### encode()?

> `optional` **encode**: (`message`, `writer`) => `void`

Defined in: [src/runtime/protos/registry.ts:116](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L116)

Generated encoder for this extension field. Implementation is responsible for
checking field presence on the provided message and writing the field if set.

#### Parameters

##### message

`any`

##### writer

[`BinaryWriter`](../../core/classes/BinaryWriter.md)

#### Returns

`void`

***

### enumType?

> `optional` **enumType**: `string`

Defined in: [src/runtime/protos/registry.ts:109](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L109)

***

### extendee

> **extendee**: `string`

Defined in: [src/runtime/protos/registry.ts:98](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L98)

***

### fieldNo

> **fieldNo**: `number`

Defined in: [src/runtime/protos/registry.ts:102](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L102)

***

### fromJSON()?

> `optional` **fromJSON**: (`message`, `object`) => `void`

Defined in: [src/runtime/protos/registry.ts:136](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L136)

JSON deserializer hook for this extension. Invoked by generated *Options.fromJSON
implementations after the core fields are populated, allowing the extension
value (if present) to be assigned onto the target message instance.
Implementations MUST NOT throw – they should simply no-op if the JSON value
is absent or invalid.

#### Parameters

##### message

`any`

##### object

`any`

#### Returns

`void`

***

### fullName

> **fullName**: `string`

Defined in: [src/runtime/protos/registry.ts:100](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L100)

***

### kind

> **kind**: `"scalar"` \| `"enum"` \| `"message"` \| `"repeated_scalar"` \| `"repeated_enum"` \| `"repeated_message"`

Defined in: [src/runtime/protos/registry.ts:106](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L106)

***

### messageType?

> `optional` **messageType**: `string`

Defined in: [src/runtime/protos/registry.ts:110](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L110)

***

### name

> **name**: `string`

Defined in: [src/runtime/protos/registry.ts:104](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L104)

***

### scalarType?

> `optional` **scalarType**: `number`

Defined in: [src/runtime/protos/registry.ts:108](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L108)

***

### toJSON()?

> `optional` **toJSON**: (`message`, `obj`, `use`) => `void`

Defined in: [src/runtime/protos/registry.ts:143](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/registry.ts#L143)

JSON serializer hook for this extension. Invoked by generated *Options.toJSON
implementations after core fields are emitted. Responsible for adding the
JSON representation (if present) onto the provided output object.

#### Parameters

##### message

`any`

##### obj

`any`

##### use

`"json"` | `"pb"`

#### Returns

`void`
