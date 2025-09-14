[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / CreateSessionRequest

# Interface: CreateSessionRequest

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4357

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4359

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.CreateSessionRequest"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4358

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4364

Metadata associated with the new session. Must include parent_id - ID of the cluster to create session in.

---

### spec?

> `optional` **spec**: [`SessionSpec`](SessionSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4369

Specification for the new session.
