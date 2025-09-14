[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/enum](../README.md) / createEnum

# Function: createEnum()

> **createEnum**\<`TDef`\>(`type`, `def`, `comments?`): [`EnumClass`](../type-aliases/EnumClass.md)\<`Extract`\<keyof `TDef`, `string`\>\>

Defined in: [src/runtime/protos/enum.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/enum.ts#L39)

## Type Parameters

### TDef

`TDef` *extends* `Record`\<`string`, `number`\>

## Parameters

### type

`string`

### def

`TDef`

### comments?

`Record`\<`string`, `string`\>

## Returns

[`EnumClass`](../type-aliases/EnumClass.md)\<`Extract`\<keyof `TDef`, `string`\>\>
