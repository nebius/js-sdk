[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / TransferSpec\_DestinationBucket

# Interface: TransferSpec\_DestinationBucket

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2125

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2127

***

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.DestinationBucket"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2126

***

### bucketName

> **bucketName**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2128

***

### credentials?

> `optional` **credentials**: [`TransferSpec_BucketCredentials`](TransferSpec_BucketCredentials.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2134

Credentials for accessing the destination bucket. These credentials must have head and write permissions.
 This parameter must be specified only during create operations.
