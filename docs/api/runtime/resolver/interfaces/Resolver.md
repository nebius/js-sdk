[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Resolver

# Interface: Resolver

Defined in: [src/runtime/resolver.ts:16](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L16)

## Methods

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:24](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L24)

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
