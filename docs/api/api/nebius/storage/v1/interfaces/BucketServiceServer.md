[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / BucketServiceServer

# Interface: BucketServiceServer

Defined in: src/api/nebius/storage/v1/index.ts:1632

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateBucketRequest`](CreateBucketRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1636

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteBucketRequest`](DeleteBucketRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1638

***

### get

> **get**: `handleUnaryCall`\<[`GetBucketRequest`](GetBucketRequest.md), [`Bucket`](Bucket.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1633

***

### getByName

> **getByName**: `handleUnaryCall`\<[`GetBucketByNameRequest`](GetBucketByNameRequest.md), [`Bucket`](Bucket.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1634

***

### list

> **list**: `handleUnaryCall`\<[`ListBucketsRequest`](ListBucketsRequest.md), [`ListBucketsResponse`](ListBucketsResponse.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1635

***

### purge

> **purge**: `handleUnaryCall`\<[`PurgeBucketRequest`](PurgeBucketRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1639

***

### undelete

> **undelete**: `handleUnaryCall`\<[`UndeleteBucketRequest`](UndeleteBucketRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1640

***

### update

> **update**: `handleUnaryCall`\<[`UpdateBucketRequest`](UpdateBucketRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/storage/v1/index.ts:1637
