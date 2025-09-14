[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/request](../README.md) / CallCreator

# Type Alias: CallCreator()\<TReq, TRes\>

> **CallCreator**\<`TReq`, `TRes`\> = (`request`, `metadata`, `options`, `callback`) => `ClientUnaryCall`

Defined in: [src/runtime/request.ts:25](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/request.ts#L25)

## Type Parameters

### TReq

`TReq`

### TRes

`TRes`

## Parameters

### request

`TReq`

### metadata

`Metadata` | `undefined`

### options

`Partial`\<`CallOptions`\> | `undefined`

### callback

(`error`, `response`) => `void`

## Returns

`ClientUnaryCall`
