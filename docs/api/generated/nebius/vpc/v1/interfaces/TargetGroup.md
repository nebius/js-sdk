[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / TargetGroup

# Interface: TargetGroup

Defined in: src/generated/nebius/vpc/v1/index.ts:8548

Target group represents the set of resources that receive traffic from a load balancer listener

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8550

---

### $type

> **$type**: `"nebius.vpc.v1.TargetGroup"`

Defined in: src/generated/nebius/vpc/v1/index.ts:8549

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:8556

Metadata for the TargetGroup resource.
`metadata.parent_id` represents IAM container

---

### spec?

> `optional` **spec**: [`TargetGroupSpec`](TargetGroupSpec.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:8561

Specification of the TargetGroup.

---

### status?

> `optional` **status**: [`TargetGroupStatus`](TargetGroupStatus.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:8566

Status of the TargetGroup.
