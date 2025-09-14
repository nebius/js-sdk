[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / OperationAborted

# Interface: OperationAborted

Defined in: src/generated/nebius/common/v1/index.ts:1242

Operation on the resource has been aborted by a subsequent operation.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:1244

---

### $type

> **$type**: `"nebius.common.v1.OperationAborted"`

Defined in: src/generated/nebius/common/v1/index.ts:1243

---

### abortedByOperationId

> **abortedByOperationId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:1254

ID of the subsequent operation.

---

### operationId

> **operationId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:1249

ID of the aborted operation.

---

### resourceId

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:1259

Resource ID corresponding to both of the operations.
