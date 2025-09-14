[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / NodeService

# Class: NodeService

Defined in: src/api/nebius/compute/v1/index.ts:10985

## Implements

- `NodeService`

## Constructors

### Constructor

> **new NodeService**(`sdk`): `NodeService`

Defined in: src/api/nebius/compute/v1/index.ts:11009

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`NodeService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.NodeService"`

Defined in: src/api/nebius/compute/v1/index.ts:10986

## Methods

### setUnhealthy()

#### Call Signature

> **setUnhealthy**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:10999

SetUnhealthy marks the node underlying the Compute VM as unhealthy, which has the following effect:

 1. Scheduler makes the best effort not to assign new VMs to the unhealthy node,
    but in case of no capacity, the VM can be assigned to an unhealthy node.
 2. The existing VMs continue to work on the node, but after stop/start via
    Compute API they most probably will be assigned to a different node.

 To use this rpc one needs to obtain `compute.node.setUnhealthy` permission
 for the VM's parent container. The permission is granted to the TSA inside the VM.

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:11000

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:11001

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:11015

SetUnhealthy marks the node underlying the Compute VM as unhealthy, which has the following effect:

 1. Scheduler makes the best effort not to assign new VMs to the unhealthy node,
    but in case of no capacity, the VM can be assigned to an unhealthy node.
 2. The existing VMs continue to work on the node, but after stop/start via
    Compute API they most probably will be assigned to a different node.

 To use this rpc one needs to obtain `compute.node.setUnhealthy` permission
 for the VM's parent container. The permission is granted to the TSA inside the VM.

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:11016

SetUnhealthy marks the node underlying the Compute VM as unhealthy, which has the following effect:

 1. Scheduler makes the best effort not to assign new VMs to the unhealthy node,
    but in case of no capacity, the VM can be assigned to an unhealthy node.
 2. The existing VMs continue to work on the node, but after stop/start via
    Compute API they most probably will be assigned to a different node.

 To use this rpc one needs to obtain `compute.node.setUnhealthy` permission
 for the VM's parent container. The permission is granted to the TSA inside the VM.

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:11017

SetUnhealthy marks the node underlying the Compute VM as unhealthy, which has the following effect:

 1. Scheduler makes the best effort not to assign new VMs to the unhealthy node,
    but in case of no capacity, the VM can be assigned to an unhealthy node.
 2. The existing VMs continue to work on the node, but after stop/start via
    Compute API they most probably will be assigned to a different node.

 To use this rpc one needs to obtain `compute.node.setUnhealthy` permission
 for the VM's parent container. The permission is granted to the TSA inside the VM.

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>
