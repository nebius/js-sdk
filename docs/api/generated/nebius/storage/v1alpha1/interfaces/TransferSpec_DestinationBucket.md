[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferSpec\_DestinationBucket

# Interface: TransferSpec\_DestinationBucket

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2124

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2126

***

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.DestinationBucket"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2125

***

### bucketName

> **bucketName**: `string`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2127

***

### credentials?

> `optional` **credentials**: [`TransferSpec_BucketCredentials`](TransferSpec_BucketCredentials.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2133

Credentials for accessing the destination bucket. These credentials must have head and write permissions.
 This parameter must be specified only during create operations.
