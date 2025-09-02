[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NodeService

# Class: NodeService

Defined in: src/generated/nebius/compute/v1/index.ts:10984

## Implements

- `NodeService`

## Constructors

### Constructor

> **new NodeService**(`sdk`): `NodeService`

Defined in: src/generated/nebius/compute/v1/index.ts:11008

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`NodeService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.NodeService"`

Defined in: src/generated/nebius/compute/v1/index.ts:10985

## Methods

### setUnhealthy()

#### Call Signature

> **setUnhealthy**(`request`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:10998

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

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:10999

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`, `options`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11000

##### Parameters

###### request

[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11014

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

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11015

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

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

#### Call Signature

> **setUnhealthy**(`request`, `metadata`, `options`): `Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11016

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

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`NodeSetUnhealthyRequest`](../interfaces/NodeSetUnhealthyRequest.md), [`NodeSetUnhealthyResponse`](../interfaces/NodeSetUnhealthyResponse.md)\>
