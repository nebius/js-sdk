[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / ModuleHealth

# Interface: ModuleHealth

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:893

Health status information for an individual module.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:895

---

### $type

> **$type**: `"nebius.logging.agentmanager.v1.ModuleHealth"`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:894

---

### messages

> **messages**: `string`[]

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:905

Status messages describing the module's state.

---

### parameters

> **parameters**: [`Parameter`](Parameter.md)[]

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:910

Current parameters of the module.

---

### state

> **state**: [`AgentState`](../type-aliases/AgentState.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:900

Current operational state of the module.
