[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / BucketServiceBaseClient

# Variable: BucketServiceBaseClient

> **BucketServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`BucketServiceBaseClient`](../interfaces/BucketServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/storage/v1/index.ts:1643

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`BucketServiceBaseClient`](../interfaces/BucketServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Create"` = `"/nebius.storage.v1.BucketService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateBucketRequest`](../interfaces/CreateBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Delete"` = `"/nebius.storage.v1.BucketService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteBucketRequest`](../interfaces/DeleteBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Get"` = `"/nebius.storage.v1.BucketService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBucketRequest`](../interfaces/GetBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBucketRequest`](../interfaces/GetBucketRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBucketRequest`](../interfaces/GetBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Bucket`](../interfaces/Bucket.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Bucket`](../interfaces/Bucket.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Bucket`](../interfaces/Bucket.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/GetByName"` = `"/nebius.storage.v1.BucketService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBucketByNameRequest`](../interfaces/GetBucketByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Bucket`](../interfaces/Bucket.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Bucket`](../interfaces/Bucket.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Bucket`](../interfaces/Bucket.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/List"` = `"/nebius.storage.v1.BucketService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBucketsRequest`](../interfaces/ListBucketsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBucketsResponse`](../interfaces/ListBucketsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.purge

> `readonly` **purge**: `object`

#### service.purge.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Purge"` = `"/nebius.storage.v1.BucketService/Purge"`

#### service.purge.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

#### service.purge.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`PurgeBucketRequest`](../interfaces/PurgeBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.purge.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.purge.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.purge.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.purge.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.undelete

> `readonly` **undelete**: `object`

#### service.undelete.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Undelete"` = `"/nebius.storage.v1.BucketService/Undelete"`

#### service.undelete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

#### service.undelete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UndeleteBucketRequest`](../interfaces/UndeleteBucketRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.undelete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.undelete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.undelete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.undelete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.storage.v1.BucketService/Update"` = `"/nebius.storage.v1.BucketService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateBucketRequest`](../interfaces/UpdateBucketRequest.md)

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
