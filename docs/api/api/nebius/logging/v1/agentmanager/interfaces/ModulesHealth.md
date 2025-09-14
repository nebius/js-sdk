[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/logging/v1/agentmanager](../README.md) / ModulesHealth

# Interface: ModulesHealth

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:716

Health status information for all agent modules.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:718

---

### $type

> **$type**: `"nebius.logging.agentmanager.v1.ModulesHealth"`

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:717

---

### ciliumPipeline?

> `optional` **ciliumPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:738

Health status of the Cilium pipeline module.

---

### cpuPipeline?

> `optional` **cpuPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:733

Health status of the CPU pipeline module.

---

### gpuPipeline?

> `optional` **gpuPipeline**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:728

Health status of the GPU pipeline module.

---

### process?

> `optional` **process**: [`ModuleHealth`](ModuleHealth.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:723

Health status of the process module.
