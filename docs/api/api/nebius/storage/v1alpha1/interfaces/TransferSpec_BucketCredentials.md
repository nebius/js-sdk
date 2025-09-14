[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / TransferSpec\_BucketCredentials

# Interface: TransferSpec\_BucketCredentials

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2238

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2240

***

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.BucketCredentials"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2239

***

### credentials?

> `optional` **credentials**: \{ `$case`: `"anonymous"`; `anonymous`: [`TransferSpec_BucketCredentials_CredentialsAnonymous`](TransferSpec_BucketCredentials_CredentialsAnonymous.md); \} \| \{ `$case`: `"accessKey"`; `accessKey`: [`TransferSpec_BucketCredentials_CredentialsAccessKey`](TransferSpec_BucketCredentials_CredentialsAccessKey.md); \}

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2241
