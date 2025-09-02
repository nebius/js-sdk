[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / EndpointServiceBaseClient

# Interface: EndpointServiceBaseClient

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:342

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:346

#### Parameters

##### request

[`CreateEndpointRequest`](CreateEndpointRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:347

#### Parameters

##### request

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:343

#### Parameters

##### request

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:344

#### Parameters

##### request

[`GetByNameRequest`](../../../v1alpha1/interfaces/GetByNameRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:345

#### Parameters

##### request

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:348

#### Parameters

##### request

[`StartRequest`](../../../v1alpha1/interfaces/StartRequest.md)

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

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:349

#### Parameters

##### request

[`StopRequest`](../../../v1alpha1/interfaces/StopRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
