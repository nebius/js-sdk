[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / PoolSpec

# Interface: PoolSpec

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:4992

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:4994

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.PoolSpec"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:4993

***

### cidrs

> **cidrs**: [`PoolCidr`](PoolCidr.md)[]

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5004

CIDR blocks.

***

### source?

> `optional` **source**: \{ `$case`: `"sourcePoolId"`; `sourcePoolId`: `string`; \} \| \{ `$case`: `"sourceScopeId"`; `sourceScopeId`: `string`; \}

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5005

***

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:4999

IP version for the Pool.
