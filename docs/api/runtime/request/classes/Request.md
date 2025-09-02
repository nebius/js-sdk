[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/request](../README.md) / Request

# Class: Request\<TReq, TRes\>

Defined in: [src/runtime/request.ts:74](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L74)

## Type Parameters

### TReq

`TReq`

### TRes

`TRes`

## Constructors

### Constructor

> **new Request**\<`TReq`, `TRes`\>(`sdk`, `serviceName`, `methodName`, `addr`, `serializer`, `deserializer`, `request`, `requestMetadata`, `requestOptions?`): `Request`\<`TReq`, `TRes`\>

Defined in: [src/runtime/request.ts:89](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L89)

#### Parameters

##### sdk

[`SDKInterface`](../../../sdk/interfaces/SDKInterface.md)

##### serviceName

`string`

##### methodName

`string`

##### addr

`string`

##### serializer

(`value`) => `Buffer`

##### deserializer

(`value`) => `TRes`

##### request

`TReq`

##### requestMetadata

`undefined` | `Metadata`

##### requestOptions?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../interfaces/RetryOptions.md)

#### Returns

`Request`\<`TReq`, `TRes`\>

## Properties

### initialMetadata

> `readonly` **initialMetadata**: `Promise`\<`Metadata`\>

Defined in: [src/runtime/request.ts:77](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L77)

***

### requestId

> `readonly` **requestId**: `Promise`\<`string`\>

Defined in: [src/runtime/request.ts:80](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L80)

***

### result

> `readonly` **result**: `Promise`\<`TRes`\>

Defined in: [src/runtime/request.ts:76](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L76)

***

### status

> `readonly` **status**: `Promise`\<`Status`\>

Defined in: [src/runtime/request.ts:79](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L79)

***

### traceId

> `readonly` **traceId**: `Promise`\<`string`\>

Defined in: [src/runtime/request.ts:81](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L81)

***

### trailingMetadata

> `readonly` **trailingMetadata**: `Promise`\<`Metadata`\>

Defined in: [src/runtime/request.ts:78](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/request.ts#L78)
