[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / ModulesHealth

# Interface: ModulesHealth

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:715

Health status information for all agent modules.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:717

***

### $type

> **$type**: `"nebius.logging.agentmanager.v1.ModulesHealth"`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:716

***

### ciliumPipeline?

> `optional` **ciliumPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:737

Health status of the Cilium pipeline module.

***

### cpuPipeline?

> `optional` **cpuPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:732

Health status of the CPU pipeline module.

***

### gpuPipeline?

> `optional` **gpuPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:727

Health status of the GPU pipeline module.

***

### process?

> `optional` **process**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:722

Health status of the process module.
