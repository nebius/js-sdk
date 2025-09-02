[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/request](../README.md) / CallCreator

# Type Alias: CallCreator()\<TReq, TRes\>

> **CallCreator**\<`TReq`, `TRes`\> = (`request`, `metadata`, `options`, `callback`) => `ClientUnaryCall`

Defined in: [src/runtime/request.ts:24](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L24)

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
