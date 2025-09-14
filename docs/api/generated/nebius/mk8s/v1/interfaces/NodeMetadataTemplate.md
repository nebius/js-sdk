[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NodeMetadataTemplate

# Interface: NodeMetadataTemplate

Defined in: src/generated/nebius/mk8s/v1/index.ts:4988

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:4990

---

### $type

> **$type**: `"nebius.mk8s.v1.NodeMetadataTemplate"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4989

---

### labels

> **labels**: `object`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5001

Kubernetes Node labels.
For now change will not be propagated to existing nodes, so will be applied only to Kubernetes Nodes created after the field change.
That behaviour may change later.
So, for now you will need to manually set them to existing nodes, if that is needed.

System labels containing "kubernetes.io" and "k8s.io" will be ignored.
Field change will NOT trigger NodeGroup roll out.

#### Index Signature

\[`key`: `string`\]: `string`
