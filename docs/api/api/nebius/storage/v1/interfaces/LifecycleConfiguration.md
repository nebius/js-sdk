[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / LifecycleConfiguration

# Interface: LifecycleConfiguration

Defined in: src/api/nebius/storage/v1/index.ts:2490

The lifecycle configuration consists of one or more rules.
An Lifecycle configuration can have up to 1,000 rules.
Each rule consists of the following:

- A filter identifying a subset of objects to which the rule applies.
  The filter can be based on a key name prefix, object size, or any combination of these.
- A status indicating whether the rule is currently active.
- One or more lifecycle expiration actions that you want to be performed on the objects
  identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended
  (bucket.spec.versioning_policy equals to ENABLED or SUSPENDED) you can have many versions of the same
  object (one current version and zero or more noncurrent versions). The system provides predefined actions
  that you can specify for current and noncurrent object versions.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:2492

---

### $type

> **$type**: `"nebius.storage.v1.LifecycleConfiguration"`

Defined in: src/api/nebius/storage/v1/index.ts:2491

---

### rules

> **rules**: [`LifecycleRule`](LifecycleRule.md)[]

Defined in: src/api/nebius/storage/v1/index.ts:2493
