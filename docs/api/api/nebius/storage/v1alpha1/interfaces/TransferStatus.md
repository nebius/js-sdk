[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1alpha1](../README.md) / TransferStatus

# Interface: TransferStatus

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2886

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2888

---

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferStatus"`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2887

---

### error

> **error**: `string`

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2894

Error information if the transfer has failed.

---

### lastIteration?

> `optional` **lastIteration**: [`TransferIteration`](TransferIteration.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2896

---

### state

> **state**: [`TransferStatus_State`](../type-aliases/TransferStatus_State.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2889

---

### suspensionState

> **suspensionState**: [`TransferStatus_SuspensionState`](../type-aliases/TransferStatus_SuspensionState.md)

Defined in: src/api/nebius/storage/v1alpha1/index.ts:2895
