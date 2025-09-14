[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/request](../README.md) / CallCreator

# Type Alias: CallCreator()\<TReq, TRes\>

> **CallCreator**\<`TReq`, `TRes`\> = (`request`, `metadata`, `options`, `callback`) => `ClientUnaryCall`

Defined in: [src/runtime/request.ts:25](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L25)

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
