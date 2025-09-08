[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / PlatformService

# Class: PlatformService

Defined in: src/generated/nebius/compute/v1/index.ts:11432

## Implements

- `PlatformService`

## Constructors

### Constructor

> **new PlatformService**(`sdk`): `PlatformService`

Defined in: src/generated/nebius/compute/v1/index.ts:11455

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`PlatformService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.PlatformService"`

Defined in: src/generated/nebius/compute/v1/index.ts:11433

## Methods

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11438

Retrieves detailed information about a specific compute platform by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11439

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11440

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11461

Retrieves detailed information about a specific compute platform by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11462

Retrieves detailed information about a specific compute platform by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11463

Retrieves detailed information about a specific compute platform by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Platform`](../interfaces/Platform.md)\>

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11445

Lists all compute platforms within a specified parent.

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11446

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11447

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11473

Lists all compute platforms within a specified parent.

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11474

Lists all compute platforms within a specified parent.

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:11475

Lists all compute platforms within a specified parent.

##### Parameters

###### request

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md), [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)\>
