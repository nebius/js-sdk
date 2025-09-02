[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / BucketStatus

# Interface: BucketStatus

Defined in: src/generated/nebius/storage/v1/index.ts:2233

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:2235

***

### $type

> **$type**: `"nebius.storage.v1.BucketStatus"`

Defined in: src/generated/nebius/storage/v1/index.ts:2234

***

### counters

> **counters**: [`BucketCounters`](BucketCounters.md)[]

Defined in: src/generated/nebius/storage/v1/index.ts:2236

***

### deletedAt?

> `optional` **deletedAt**: `Dayjs`

Defined in: src/generated/nebius/storage/v1/index.ts:2244

The time when the bucket was deleted (or scheduled for deletion).
 It resets to null if the bucket is undeleted.

***

### domainName

> **domainName**: `string`

Defined in: src/generated/nebius/storage/v1/index.ts:2255

The domain of the endpoint where the bucket can be accessed. It omits the scheme (HTTPS) and the port (443)
 and contains only the FQDN address.

***

### purgeAt?

> `optional` **purgeAt**: `Dayjs`

Defined in: src/generated/nebius/storage/v1/index.ts:2249

The time when the bucket will be automatically purged in case it was soft-deleted.

***

### region

> **region**: `string`

Defined in: src/generated/nebius/storage/v1/index.ts:2260

The name of the region where the bucket is located for use with S3 clients, i.e. "eu-west1".

***

### state

> **state**: [`BucketStatus_State`](../type-aliases/BucketStatus_State.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2237

***

### suspensionState

> **suspensionState**: [`BucketStatus_SuspensionState`](../type-aliases/BucketStatus_SuspensionState.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2238
