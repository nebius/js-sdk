[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/enum](../README.md) / createEnum

# Function: createEnum()

> **createEnum**\<`TDef`\>(`type`, `def`, `comments?`): [`EnumClass`](../type-aliases/EnumClass.md)\<`Extract`\<keyof `TDef`, `string`\>\>

Defined in: [src/runtime/protos/enum.ts:39](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/enum.ts#L39)

## Type Parameters

### TDef

`TDef` _extends_ `Record`\<`string`, `number`\>

## Parameters

### type

`string`

### def

`TDef`

### comments?

`Record`\<`string`, `string`\>

## Returns

[`EnumClass`](../type-aliases/EnumClass.md)\<`Extract`\<keyof `TDef`, `string`\>\>
