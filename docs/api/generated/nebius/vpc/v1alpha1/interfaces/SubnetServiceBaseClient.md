[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / SubnetServiceBaseClient

# Interface: SubnetServiceBaseClient

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7064

## Extends

- `Client`

## Methods

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7065

#### Parameters

##### request

[`GetSubnetRequest`](GetSubnetRequest.md)

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

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7066

#### Parameters

##### request

[`GetSubnetByNameRequest`](GetSubnetByNameRequest.md)

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

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7067

#### Parameters

##### request

[`ListSubnetsRequest`](ListSubnetsRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### listByNetwork()

> **listByNetwork**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7068

#### Parameters

##### request

[`ListSubnetsByNetworkRequest`](ListSubnetsByNetworkRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
