[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / UpdateClusterRequest

# Interface: UpdateClusterRequest

Defined in: src/generated/nebius/mk8s/v1/index.ts:470

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:472

---

### $type

> **$type**: `"nebius.mk8s.v1.UpdateClusterRequest"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:471

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:478

Metadata associated with the instance.
Includes ID of the instance to update.

---

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:483

Updated specifications for the instance.
