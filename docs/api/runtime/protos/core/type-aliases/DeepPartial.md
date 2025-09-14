[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\> = `T` _extends_ [`Builtin`](Builtin.md) ? `T` : `T` _extends_ [`Long`](../classes/Long.md) ? `string` \| `number` \| [`Long`](../classes/Long.md) : `T` _extends_ infer U[] ? `DeepPartial`\<`U`\>[] : `T` _extends_ `ReadonlyArray`\<infer U\> ? `ReadonlyArray`\<`DeepPartial`\<`U`\>\> : `T` _extends_ `object` ? `{ [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }` : `Partial`\<`T`\>

Defined in: [src/runtime/protos/core.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/core.ts#L38)

## Type Parameters

### T

`T`
