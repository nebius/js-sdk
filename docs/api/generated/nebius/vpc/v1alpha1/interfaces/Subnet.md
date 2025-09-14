[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / Subnet

# Interface: Subnet

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7224

Defines a Subnet, a segment of a network used for more granular control and management.
Subnet uses pools to organize address space.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7226

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.Subnet"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7225

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7232

Metadata for the subnet resource.
`metadata.parent_id` represents IAM container

---

### spec?

> `optional` **spec**: [`SubnetSpec`](SubnetSpec.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7237

Specification of the subnet.

---

### status?

> `optional` **status**: [`SubnetStatus`](SubnetStatus.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:7242

Status of the subnet.
