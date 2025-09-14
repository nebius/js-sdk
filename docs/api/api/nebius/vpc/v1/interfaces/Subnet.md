[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / Subnet

# Interface: Subnet

Defined in: src/api/nebius/vpc/v1/index.ts:7327

Defines a Subnet, a segment of a network used for more granular control and management.
 Subnet uses pools to organize address space.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:7329

***

### $type

> **$type**: `"nebius.vpc.v1.Subnet"`

Defined in: src/api/nebius/vpc/v1/index.ts:7328

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7335

Metadata for the subnet resource.
 `metadata.parent_id` represents IAM container

***

### spec?

> `optional` **spec**: [`SubnetSpec`](SubnetSpec.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7340

Specification of the subnet.

***

### status?

> `optional` **status**: [`SubnetStatus`](SubnetStatus.md)

Defined in: src/api/nebius/vpc/v1/index.ts:7345

Status of the subnet.
