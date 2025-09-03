[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / LifecycleRule

# Interface: LifecycleRule

Defined in: src/generated/nebius/storage/v1/index.ts:2574

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:2576

---

### $type

> **$type**: `"nebius.storage.v1.LifecycleRule"`

Defined in: src/generated/nebius/storage/v1/index.ts:2575

---

### abortIncompleteMultipartUpload?

> `optional` **abortIncompleteMultipartUpload**: [`LifecycleAbortIncompleteMultipartUpload`](LifecycleAbortIncompleteMultipartUpload.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2608

Specifies the days since the initiation of an incomplete multipart upload that
the system will wait before permanently removing all parts of the upload.

---

### expiration?

> `optional` **expiration**: [`LifecycleExpiration`](LifecycleExpiration.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2596

Specifies the expiration for the lifecycle of the object in the form of date, days and,
whether the object has a delete marker.

---

### filter?

> `optional` **filter**: [`LifecycleFilter`](LifecycleFilter.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2590

The Filter is used to identify objects that a Lifecycle Rule applies to.
The Lifecycle Rule will apply to any object matching all of the predicates
configured inside (using logical AND).

---

### id

> **id**: `string`

Defined in: src/generated/nebius/storage/v1/index.ts:2582

Unique identifier for the rule per configuration.
The value cannot be longer than 255 characters.

---

### noncurrentVersionExpiration?

> `optional` **noncurrentVersionExpiration**: [`LifecycleNoncurrentVersionExpiration`](LifecycleNoncurrentVersionExpiration.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2602

Specifies when noncurrent object versions expire.
It works only on a bucket that has versioning enabled (or suspended).

---

### noncurrentVersionTransition?

> `optional` **noncurrentVersionTransition**: [`LifecycleNoncurrentVersionTransition`](LifecycleNoncurrentVersionTransition.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2620

Spicifies the transition for the lifecycle of a noncurrent object.
It works only on a bucket that has versioning enabled (or suspended).

---

### status

> **status**: [`LifecycleRule_Status`](../type-aliases/LifecycleRule_Status.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2583

---

### transition?

> `optional` **transition**: [`LifecycleTransition`](LifecycleTransition.md)

Defined in: src/generated/nebius/storage/v1/index.ts:2614

Specifies the transition for the lifecycle of an object in the form of date or days and
target storage class to transit object to.
