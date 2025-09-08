[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / AccessPermitServiceServiceDescription

# Variable: AccessPermitServiceServiceDescription

> **AccessPermitServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:2785

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Create"` = `"/nebius.iam.v1.AccessPermitService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Delete"` = `"/nebius.iam.v1.AccessPermitService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Get"` = `"/nebius.iam.v1.AccessPermitService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessPermit`](../interfaces/AccessPermit.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessPermit`](../interfaces/AccessPermit.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessPermit`](../interfaces/AccessPermit.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/List"` = `"/nebius.iam.v1.AccessPermitService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
