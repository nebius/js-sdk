[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / TargetGroupService

# Class: TargetGroupService

Defined in: src/generated/nebius/vpc/v1/index.ts:8438

## Implements

- `TargetGroupService`

## Constructors

### Constructor

> **new TargetGroupService**(`sdk`): `TargetGroupService`

Defined in: src/generated/nebius/vpc/v1/index.ts:8453

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`TargetGroupService`

## Properties

### $type

> **$type**: `"nebius.vpc.v1.TargetGroupService"`

Defined in: src/generated/nebius/vpc/v1/index.ts:8439

## Methods

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8440

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8441

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8442

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8463

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8464

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8465

##### Parameters

###### request

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md), [`TargetGroup`](../interfaces/TargetGroup.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:8459

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

***

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8443

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8444

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8445

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8475

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8476

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8477

##### Parameters

###### request

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
