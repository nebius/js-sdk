[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / Target

# Interface: Target

Defined in: src/api/nebius/vpc/v1/index.ts:8789

Represents the target which can receive traffic from a load balancer listener

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:8791

---

### $type

> **$type**: `"nebius.vpc.v1.Target"`

Defined in: src/api/nebius/vpc/v1/index.ts:8790

---

### target?

> `optional` **target**: `object`

Defined in: src/api/nebius/vpc/v1/index.ts:8792

#### $case

> **$case**: `"computeInstance"`

#### computeInstance

> **computeInstance**: [`ComputeInstance`](ComputeInstance.md)
