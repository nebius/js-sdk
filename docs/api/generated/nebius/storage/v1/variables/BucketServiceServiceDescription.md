[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / BucketServiceServiceDescription

# Variable: BucketServiceServiceDescription

> **BucketServiceServiceDescription**: `object`

Defined in: src/generated/nebius/storage/v1/index.ts:1555

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Create"` = `"/nebius.storage.v1.BucketService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

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

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Delete"` = `"/nebius.storage.v1.BucketService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

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

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Get"` = `"/nebius.storage.v1.BucketService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBucketRequest`](../interfaces/GetBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBucketRequest`](../interfaces/GetBucketRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBucketRequest`](../interfaces/GetBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Bucket`](../interfaces/Bucket.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Bucket`](../interfaces/Bucket.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Bucket`](../interfaces/Bucket.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/GetByName"` = `"/nebius.storage.v1.BucketService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Bucket`](../interfaces/Bucket.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Bucket`](../interfaces/Bucket.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Bucket`](../interfaces/Bucket.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/List"` = `"/nebius.storage.v1.BucketService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### purge

> `readonly` **purge**: `object`

#### purge.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Purge"` = `"/nebius.storage.v1.BucketService/Purge"`

#### purge.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

#### purge.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### purge.requestStream

> `readonly` **requestStream**: `false` = `false`

#### purge.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### purge.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### purge.responseStream

> `readonly` **responseStream**: `false` = `false`

### undelete

> `readonly` **undelete**: `object`

#### undelete.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Undelete"` = `"/nebius.storage.v1.BucketService/Undelete"`

#### undelete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

#### undelete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### undelete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### undelete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### undelete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### undelete.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Update"` = `"/nebius.storage.v1.BucketService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

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
