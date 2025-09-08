[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NodeServiceServiceDescription

# Variable: NodeServiceServiceDescription

> **NodeServiceServiceDescription**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:10957

## Type Declaration

### setUnhealthy

> `readonly` **setUnhealthy**: `object`

#### setUnhealthy.path

> `readonly` **path**: `"/nebius.compute.v1.NodeService/SetUnhealthy"` = `"/nebius.compute.v1.NodeService/SetUnhealthy"`

#### setUnhealthy.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

#### setUnhealthy.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### setUnhealthy.requestStream

> `readonly` **requestStream**: `false` = `false`

#### setUnhealthy.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

#### setUnhealthy.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### setUnhealthy.responseStream

> `readonly` **responseStream**: `false` = `false`
