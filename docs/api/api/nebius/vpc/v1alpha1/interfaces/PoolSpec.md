[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / PoolSpec

# Interface: PoolSpec

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4993

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4995

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.PoolSpec"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:4994

***

### cidrs

> **cidrs**: [`PoolCidr`](PoolCidr.md)[]

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5005

CIDR blocks.

***

### source?

> `optional` **source**: \{ `$case`: `"sourcePoolId"`; `sourcePoolId`: `string`; \} \| \{ `$case`: `"sourceScopeId"`; `sourceScopeId`: `string`; \}

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5006

***

### version

> **version**: [`IpVersion`](../type-aliases/IpVersion.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5000

IP version for the Pool.
