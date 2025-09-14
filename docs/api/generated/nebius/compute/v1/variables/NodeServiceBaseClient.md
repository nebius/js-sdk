[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NodeServiceBaseClient

# Variable: NodeServiceBaseClient

> **NodeServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`NodeServiceBaseClient`](../interfaces/NodeServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/compute/v1/index.ts:10975

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`NodeServiceBaseClient`](../interfaces/NodeServiceBaseClient.md)

### service

> **service**: `object`

#### service.setUnhealthy

> `readonly` **setUnhealthy**: `object`

#### service.setUnhealthy.path

> `readonly` **path**: `"/nebius.compute.v1.NodeService/SetUnhealthy"` = `"/nebius.compute.v1.NodeService/SetUnhealthy"`

#### service.setUnhealthy.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

#### service.setUnhealthy.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.setUnhealthy.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.setUnhealthy.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

#### service.setUnhealthy.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.setUnhealthy.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
