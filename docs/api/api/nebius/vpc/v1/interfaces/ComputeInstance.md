[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / ComputeInstance

# Interface: ComputeInstance

Defined in: src/api/nebius/vpc/v1/index.ts:8905

Target representing compute instance

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:8907

***

### $type

> **$type**: `"nebius.vpc.v1.ComputeInstance"`

Defined in: src/api/nebius/vpc/v1/index.ts:8906

***

### id

> **id**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:8912

Compute instance id to send traffic to

***

### networkInterfaceName

> **networkInterfaceName**: `string`

Defined in: src/api/nebius/vpc/v1/index.ts:8917

Name of the compute instance's NetworkInterface to send traffic to. If not specified the first one will be used.
