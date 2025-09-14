[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / TargetGroupServiceServiceDescription

# Variable: TargetGroupServiceServiceDescription

> **TargetGroupServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1/index.ts:8401

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1.TargetGroupService/Get"` = `"/nebius.vpc.v1.TargetGroupService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTargetGroupRequest`](../interfaces/GetTargetGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TargetGroup`](../interfaces/TargetGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TargetGroup`](../interfaces/TargetGroup.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TargetGroup`](../interfaces/TargetGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.vpc.v1.TargetGroupService/Update"` = `"/nebius.vpc.v1.TargetGroupService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateTargetGroupRequest`](../interfaces/UpdateTargetGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
