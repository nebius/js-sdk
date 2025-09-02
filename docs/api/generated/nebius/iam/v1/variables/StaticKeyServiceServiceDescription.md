[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / StaticKeyServiceServiceDescription

# Variable: StaticKeyServiceServiceDescription

> **StaticKeyServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:18823

## Type Declaration

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Delete"` = `"/nebius.iam.v1.StaticKeyService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

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

### find

> `readonly` **find**: `object`

#### find.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Find"` = `"/nebius.iam.v1.StaticKeyService/Find"`

#### find.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

#### find.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### find.requestStream

> `readonly` **requestStream**: `false` = `false`

#### find.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

#### find.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### find.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Get"` = `"/nebius.iam.v1.StaticKeyService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`StaticKey`](../interfaces/StaticKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StaticKey`](../interfaces/StaticKey.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StaticKey`](../interfaces/StaticKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/GetByName"` = `"/nebius.iam.v1.StaticKeyService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`StaticKey`](../interfaces/StaticKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StaticKey`](../interfaces/StaticKey.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StaticKey`](../interfaces/StaticKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### issue

> `readonly` **issue**: `object`

#### issue.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Issue"` = `"/nebius.iam.v1.StaticKeyService/Issue"`

#### issue.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

#### issue.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### issue.requestStream

> `readonly` **requestStream**: `false` = `false`

#### issue.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

#### issue.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### issue.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/List"` = `"/nebius.iam.v1.StaticKeyService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### revoke

> `readonly` **revoke**: `object`

#### revoke.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Revoke"` = `"/nebius.iam.v1.StaticKeyService/Revoke"`

#### revoke.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

#### revoke.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### revoke.requestStream

> `readonly` **requestStream**: `false` = `false`

#### revoke.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### revoke.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### revoke.responseStream

> `readonly` **responseStream**: `false` = `false`
