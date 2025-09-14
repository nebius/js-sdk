[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / StaticKeyServiceBaseClient

# Interface: StaticKeyServiceBaseClient

Defined in: src/api/nebius/iam/v1/index.ts:18898

## Extends

- `Client`

## Methods

### close()

> **close**(): `void`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:56

#### Returns

`void`

#### Inherited from

`Client.close`

---

### delete()

> **delete**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18903

#### Parameters

##### request

[`DeleteStaticKeyRequest`](DeleteStaticKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### find()

> **find**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18904

#### Parameters

##### request

[`FindStaticKeyRequest`](FindStaticKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18901

#### Parameters

##### request

[`GetStaticKeyRequest`](GetStaticKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### getByName()

> **getByName**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18902

#### Parameters

##### request

[`GetStaticKeyByNameRequest`](GetStaticKeyByNameRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### getChannel()

> **getChannel**(): `Channel`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:57

#### Returns

`Channel`

#### Inherited from

`Client.getChannel`

---

### issue()

> **issue**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18899

#### Parameters

##### request

[`IssueStaticKeyRequest`](IssueStaticKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### list()

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18900

#### Parameters

##### request

[`ListStaticKeysRequest`](ListStaticKeysRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### makeBidiStreamRequest()

#### Call Signature

> **makeBidiStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `metadata`, `options?`): `ClientDuplexStream`\<`RequestType`, `ResponseType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:71

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### metadata

`Metadata`

###### options?

`CallOptions`

##### Returns

`ClientDuplexStream`\<`RequestType`, `ResponseType`\>

##### Inherited from

`Client.makeBidiStreamRequest`

#### Call Signature

> **makeBidiStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `options?`): `ClientDuplexStream`\<`RequestType`, `ResponseType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:72

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### options?

`CallOptions`

##### Returns

`ClientDuplexStream`\<`RequestType`, `ResponseType`\>

##### Inherited from

`Client.makeBidiStreamRequest`

---

### makeClientStreamRequest()

#### Call Signature

> **makeClientStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `metadata`, `options`, `callback`): `ClientWritableStream`\<`RequestType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:64

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### metadata

`Metadata`

###### options

`CallOptions`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`ClientWritableStream`\<`RequestType`\>

##### Inherited from

`Client.makeClientStreamRequest`

#### Call Signature

> **makeClientStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `metadata`, `callback`): `ClientWritableStream`\<`RequestType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:65

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### metadata

`Metadata`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`ClientWritableStream`\<`RequestType`\>

##### Inherited from

`Client.makeClientStreamRequest`

#### Call Signature

> **makeClientStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `options`, `callback`): `ClientWritableStream`\<`RequestType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:66

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### options

`CallOptions`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`ClientWritableStream`\<`RequestType`\>

##### Inherited from

`Client.makeClientStreamRequest`

#### Call Signature

> **makeClientStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `callback`): `ClientWritableStream`\<`RequestType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:67

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`ClientWritableStream`\<`RequestType`\>

##### Inherited from

`Client.makeClientStreamRequest`

---

### makeServerStreamRequest()

#### Call Signature

> **makeServerStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `metadata`, `options?`): `ClientReadableStream`\<`ResponseType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:69

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### metadata

`Metadata`

###### options?

`CallOptions`

##### Returns

`ClientReadableStream`\<`ResponseType`\>

##### Inherited from

`Client.makeServerStreamRequest`

#### Call Signature

> **makeServerStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `options?`): `ClientReadableStream`\<`ResponseType`\>

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:70

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### options?

`CallOptions`

##### Returns

`ClientReadableStream`\<`ResponseType`\>

##### Inherited from

`Client.makeServerStreamRequest`

---

### makeUnaryRequest()

#### Call Signature

> **makeUnaryRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:60

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### metadata

`Metadata`

###### options

`CallOptions`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`SurfaceCall`

##### Inherited from

`Client.makeUnaryRequest`

#### Call Signature

> **makeUnaryRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `metadata`, `callback`): `SurfaceCall`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:61

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### metadata

`Metadata`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`SurfaceCall`

##### Inherited from

`Client.makeUnaryRequest`

#### Call Signature

> **makeUnaryRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `options`, `callback`): `SurfaceCall`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:62

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### options

`CallOptions`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`SurfaceCall`

##### Inherited from

`Client.makeUnaryRequest`

#### Call Signature

> **makeUnaryRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `callback`): `SurfaceCall`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:63

##### Type Parameters

###### RequestType

`RequestType`

###### ResponseType

`ResponseType`

##### Parameters

###### method

`string`

###### serialize

(`value`) => `Buffer`

###### deserialize

(`value`) => `ResponseType`

###### argument

`RequestType`

###### callback

`UnaryCallback`\<`ResponseType`\>

##### Returns

`SurfaceCall`

##### Inherited from

`Client.makeUnaryRequest`

---

### revoke()

> **revoke**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/iam/v1/index.ts:18905

#### Parameters

##### request

[`RevokeStaticKeyRequest`](RevokeStaticKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

---

### waitForReady()

> **waitForReady**(`deadline`, `callback`): `void`

Defined in: node_modules/@grpc/grpc-js/build/src/client.d.ts:58

#### Parameters

##### deadline

`Deadline`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Client.waitForReady`
