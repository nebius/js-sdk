[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / NodeMetadataTemplate

# Interface: NodeMetadataTemplate

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5138

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5140

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeMetadataTemplate"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5139

***

### labels

> **labels**: `object`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:5147

Labels will be propagated into nodes metadata.
 System labels containing "kubernetes.io" and "k8s.io" will not be propagated.
 On update labels they will not be updated in nodes right away, only on node group update.

#### Index Signature

\[`key`: `string`\]: `string`
