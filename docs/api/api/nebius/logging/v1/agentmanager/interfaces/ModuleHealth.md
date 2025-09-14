[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/logging/v1/agentmanager](../README.md) / ModuleHealth

# Interface: ModuleHealth

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:894

Health status information for an individual module.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:896

***

### $type

> **$type**: `"nebius.logging.agentmanager.v1.ModuleHealth"`

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:895

***

### messages

> **messages**: `string`[]

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:906

Status messages describing the module's state.

***

### parameters

> **parameters**: [`Parameter`](Parameter.md)[]

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:911

Current parameters of the module.

***

### state

> **state**: [`AgentState`](../type-aliases/AgentState.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:901

Current operational state of the module.
