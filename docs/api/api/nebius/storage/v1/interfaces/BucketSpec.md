[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / BucketSpec

# Interface: BucketSpec

Defined in: src/api/nebius/storage/v1/index.ts:2044

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:2046

---

### $type

> **$type**: `"nebius.storage.v1.BucketSpec"`

Defined in: src/api/nebius/storage/v1/index.ts:2045

---

### defaultStorageClass

> **defaultStorageClass**: [`StorageClass`](../type-aliases/StorageClass.md)

Defined in: src/api/nebius/storage/v1/index.ts:2069

Storage class to use by default for uploads to the bucket. It may be overridden by `x-amz-storage-class` header.
If not set - STANDARD is used as a default storage class.

---

### lifecycleConfiguration?

> `optional` **lifecycleConfiguration**: [`LifecycleConfiguration`](LifecycleConfiguration.md)

Defined in: src/api/nebius/storage/v1/index.ts:2063

---

### maxSizeBytes

> **maxSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/storage/v1/index.ts:2062

Maximum bucket size.
Zero means unlimited.
Actual limit can be lower if customer doesn't have enough quota.
Real bucket size can go a little higher if customer writes too fast.

---

### overrideStorageClass

> **overrideStorageClass**: [`StorageClass`](../type-aliases/StorageClass.md)

Defined in: src/api/nebius/storage/v1/index.ts:2076

Storage class to override any other storage class of uploading objects. It overrides the storage class regardless
of how the original storage class was specified - either the default storage class
or the one provided via the `x-amz-storage-class` header.

---

### versioningPolicy

> **versioningPolicy**: [`VersioningPolicy`](../type-aliases/VersioningPolicy.md)

Defined in: src/api/nebius/storage/v1/index.ts:2054

Supports transitions:

- disabled -> enabled
- disabled -> suspended
- enabled <-> suspended
