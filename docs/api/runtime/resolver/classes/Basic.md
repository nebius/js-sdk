[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Basic

# Class: Basic

Defined in: [src/runtime/resolver.ts:27](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L27)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Basic**(`id`, `address`): `Basic`

Defined in: [src/runtime/resolver.ts:30](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L30)

#### Parameters

##### id

`string`

##### address

`string`

#### Returns

`Basic`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:43](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L43)

#### Returns

`object`

---

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:50](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L50)

Receive address of the service by its ID

#### Parameters

##### serviceId

`string`

service ID, e.g. "nebius.compute.v1.InstanceService"

##### apiServiceName?

`string`

optional API service name override, when provided by the service wrapper

#### Returns

`string`

address string

#### Throws

UnknownServiceError when the resolver cannot resolve the ID

#### Implementation of

[`Resolver`](../interfaces/Resolver.md).[`resolve`](../interfaces/Resolver.md#resolve)
