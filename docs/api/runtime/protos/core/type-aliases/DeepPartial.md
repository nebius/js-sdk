[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\> = `T` *extends* [`Builtin`](Builtin.md) ? `T` : `T` *extends* [`Long`](../classes/Long.md) ? `string` \| `number` \| [`Long`](../classes/Long.md) : `T` *extends* infer U[] ? `DeepPartial`\<`U`\>[] : `T` *extends* `ReadonlyArray`\<infer U\> ? `ReadonlyArray`\<`DeepPartial`\<`U`\>\> : `T` *extends* `object` ? `{ [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }` : `Partial`\<`T`\>

Defined in: [src/runtime/protos/core.ts:38](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/protos/core.ts#L38)

## Type Parameters

### T

`T`
