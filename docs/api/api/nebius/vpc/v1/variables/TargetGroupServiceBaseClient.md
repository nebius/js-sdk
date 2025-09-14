[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / TargetGroupServiceBaseClient

# Variable: TargetGroupServiceBaseClient

> **TargetGroupServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TargetGroupServiceBaseClient`](../interfaces/TargetGroupServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1/index.ts:8428

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TargetGroupServiceBaseClient`](../interfaces/TargetGroupServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1.TargetGroupService/Get"` = `"/nebius.vpc.v1.TargetGroupService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TargetGroup`](../interfaces/TargetGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TargetGroup`](../interfaces/TargetGroup.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TargetGroup`](../interfaces/TargetGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.vpc.v1.TargetGroupService/Update"` = `"/nebius.vpc.v1.TargetGroupService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
