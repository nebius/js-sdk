[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceBaseClient

# Interface: ClusterServiceBaseClient

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2296

## Extends

- `Client`

## Methods

### close()

> **close**(): `void`

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:56

#### Returns

`void`

#### Inherited from

`Client.close`

***

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2301

#### Parameters

##### request

[`CreateClusterRequest`](CreateClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### delete()

> **delete**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2302

#### Parameters

##### request

[`DeleteClusterRequest`](DeleteClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2297

#### Parameters

##### request

[`GetClusterRequest`](GetClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getByName()

> **getByName**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2298

#### Parameters

##### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getChannel()

> **getChannel**(): `Channel`

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:57

#### Returns

`Channel`

#### Inherited from

`Client.getChannel`

***

### getForBackup()

> **getForBackup**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2299

#### Parameters

##### request

[`GetClusterForBackupRequest`](GetClusterForBackupRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### list()

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2300

#### Parameters

##### request

[`ListClustersRequest`](ListClustersRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### makeBidiStreamRequest()

#### Call Signature

> **makeBidiStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `metadata`, `options?`): `ClientDuplexStream`\<`RequestType`, `ResponseType`\>

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:71

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:72

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

***

### makeClientStreamRequest()

#### Call Signature

> **makeClientStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `metadata`, `options`, `callback`): `ClientWritableStream`\<`RequestType`\>

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:64

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:65

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:66

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:67

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

***

### makeServerStreamRequest()

#### Call Signature

> **makeServerStreamRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `metadata`, `options?`): `ClientReadableStream`\<`ResponseType`\>

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:69

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:70

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

***

### makeUnaryRequest()

#### Call Signature

> **makeUnaryRequest**\<`RequestType`, `ResponseType`\>(`method`, `serialize`, `deserialize`, `argument`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:60

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:61

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:62

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

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:63

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

***

### restore()

> **restore**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2304

#### Parameters

##### request

[`RestoreClusterRequest`](RestoreClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### start()

> **start**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2306

#### Parameters

##### request

[`StartClusterRequest`](StartClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### stop()

> **stop**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2305

#### Parameters

##### request

[`StopClusterRequest`](StopClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### update()

> **update**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2303

#### Parameters

##### request

[`UpdateClusterRequest`](UpdateClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### waitForReady()

> **waitForReady**(`deadline`, `callback`): `void`

Defined in: node\_modules/@grpc/grpc-js/build/src/client.d.ts:58

#### Parameters

##### deadline

`Deadline`

##### callback

(`error?`) => `void`

#### Returns

`void`

#### Inherited from

`Client.waitForReady`
