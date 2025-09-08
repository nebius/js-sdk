[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / ResourceMetadata

# Interface: ResourceMetadata

Defined in: src/generated/nebius/common/v1/index.ts:2281

Common resource metadata.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:2283

---

### $type

> **$type**: `"nebius.common.v1.ResourceMetadata"`

Defined in: src/generated/nebius/common/v1/index.ts:2282

---

### createdAt?

> `optional` **createdAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1/index.ts:2311

Timestamp indicating when the resource was created.

---

### id

> **id**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2288

Identifier for the resource, unique for its resource type.

---

### labels

> **labels**: `object`

Defined in: src/generated/nebius/common/v1/index.ts:2321

Labels associated with the resource.

#### Index Signature

\[`key`: `string`\]: `string`

---

### name

> **name**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2298

Human readable name for the resource.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2293

Identifier of the parent resource to which the resource belongs.

---

### resourceVersion

> **resourceVersion**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/common/v1/index.ts:2306

Version of the resource for safe concurrent modifications and consistent reads.
Positive and monotonically increases on each resource spec change (but _not_ on each change of the
resource's container(s) or status).
Service allows zero value or current.

---

### updatedAt?

> `optional` **updatedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1/index.ts:2316

Timestamp indicating when the resource was last updated.
