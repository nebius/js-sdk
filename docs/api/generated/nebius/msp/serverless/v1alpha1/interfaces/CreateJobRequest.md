[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / CreateJobRequest

# Interface: CreateJobRequest

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1593

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1595

---

### $type

> **$type**: `"nebius.msp.serverless.v1alpha1.CreateJobRequest"`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1594

---

### dryRun

> **dryRun**: `boolean`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1603

If set to true, only API validation will be performed, without creating the job.
Returned operation will be in "done" state. ID of resource will be empty.

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1596

---

### spec?

> `optional` **spec**: [`JobSpec`](JobSpec.md)

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1597
