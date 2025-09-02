[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / Network

# Interface: Network

Defined in: src/generated/nebius/vpc/v1/index.ts:3568

Defines a Network, which serves as a virtual representation of a traditional LAN
 within a cloud environment.
 Networks facilitate communication between subnets.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:3570

***

### $type

> **$type**: `"nebius.vpc.v1.Network"`

Defined in: src/generated/nebius/vpc/v1/index.ts:3569

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:3576

Metadata for the network resource.
 `metadata.parent_id` represents IAM container

***

### spec?

> `optional` **spec**: [`NetworkSpec`](NetworkSpec.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:3581

Specification of the network.

***

### status?

> `optional` **status**: [`NetworkStatus`](NetworkStatus.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:3586

Status of the network.
