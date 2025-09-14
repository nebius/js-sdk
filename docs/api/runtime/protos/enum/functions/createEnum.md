[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/enum](../README.md) / createEnum

# Function: createEnum()

> **createEnum**\<`TDef`\>(`type`, `def`, `comments?`): [`EnumClass`](../type-aliases/EnumClass.md)\<`Extract`\<keyof `TDef`, `string`\>\>

Defined in: [src/runtime/protos/enum.ts:39](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/protos/enum.ts#L39)

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
