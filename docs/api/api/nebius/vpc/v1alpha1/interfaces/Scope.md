[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / Scope

# Interface: Scope

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6113

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6115

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.Scope"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6114

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6121

Metadata associated with the Scope.
`metadata.parent_id` represents the parent IAM container.

---

### spec?

> `optional` **spec**: [`ScopeSpec`](ScopeSpec.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6126

Specification of the Scope.

---

### status?

> `optional` **status**: [`ScopeStatus`](ScopeStatus.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:6131

Status information for the Scope.
