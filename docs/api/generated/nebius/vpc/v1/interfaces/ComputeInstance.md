[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / ComputeInstance

# Interface: ComputeInstance

Defined in: src/generated/nebius/vpc/v1/index.ts:8904

Target representing compute instance

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:8906

***

### $type

> **$type**: `"nebius.vpc.v1.ComputeInstance"`

Defined in: src/generated/nebius/vpc/v1/index.ts:8905

***

### id

> **id**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:8911

Compute instance id to send traffic to

***

### networkInterfaceName

> **networkInterfaceName**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:8916

Name of the compute instance's NetworkInterface to send traffic to. If not specified the first one will be used.
