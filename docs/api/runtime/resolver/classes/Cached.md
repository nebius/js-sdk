[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Cached

# Class: Cached

Defined in: [src/runtime/resolver.ts:191](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L191)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Cached**(`next`): `Cached`

Defined in: [src/runtime/resolver.ts:194](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L194)

#### Parameters

##### next

[`Resolver`](../interfaces/Resolver.md)

#### Returns

`Cached`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:200](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L200)

#### Returns

`object`

---

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:206](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L206)

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
