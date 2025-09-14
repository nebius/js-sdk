[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / TransferSpec_SourceBucket

# Interface: TransferSpec_SourceBucket

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1935

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1937

---

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.SourceBucket"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1936

---

### bucketName

> **bucketName**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1945

---

### credentials?

> `optional` **credentials**: [`TransferSpec_BucketCredentials`](TransferSpec_BucketCredentials.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1952

Credentials for accessing the source bucket. These credentials must have list and get permissions.
This parameter must be specified only during create operations.

---

### endpoint

> **endpoint**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1944

The endpoint must be in the form of a URL, starting with the protocol (https),
followed by the endpoint address without a trailing slash.
Example: https://storage.us-central1.nebius.cloud

---

### limiters?

> `optional` **limiters**: [`TransferSpec_Limiters`](TransferSpec_Limiters.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1963

Limiters applied to source bucket operations. These limits include all operations
required for transfer (HeadObject, GetObject, ListObjects). For details about
which operations are used, see public documentation: http://docs.nebius.com/object-storage/transfer/quickstart#background.

Note: Since the service performs comparable request volumes and data transfers
to both source and destination, these limits will indirectly constrain
destination operations as well.

---

### region

> **region**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:1946
