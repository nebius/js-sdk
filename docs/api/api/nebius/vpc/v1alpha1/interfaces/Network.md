[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / Network

# Interface: Network

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3705

Defines a Network, which serves as a virtual representation of a traditional LAN
within a cloud environment.
Networks facilitate communication between subnets.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3707

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.Network"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3706

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3713

Metadata for the network resource.
`metadata.parent_id` represents IAM container

---

### spec?

> `optional` **spec**: [`NetworkSpec`](NetworkSpec.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3718

Specification of the network.

---

### status?

> `optional` **status**: [`NetworkStatus`](NetworkStatus.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:3723

Status of the network.
