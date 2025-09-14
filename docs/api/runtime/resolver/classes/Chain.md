[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Chain

# Class: Chain

Defined in: [src/runtime/resolver.ts:159](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L159)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Chain**(...`resolvers`): `Chain`

Defined in: [src/runtime/resolver.ts:161](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L161)

#### Parameters

##### resolvers

...[`Resolver`](../interfaces/Resolver.md)[]

#### Returns

`Chain`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:167](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L167)

#### Returns

`object`

---

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:173](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L173)

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
