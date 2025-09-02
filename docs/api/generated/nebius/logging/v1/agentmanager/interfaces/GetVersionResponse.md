[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / GetVersionResponse

# Interface: GetVersionResponse

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1287

Response message for GetVersion RPC containing required action for the agent.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1289

***

### $type

> **$type**: `"nebius.logging.agentmanager.v1.GetVersionResponse"`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1288

***

### action

> **action**: [`Action`](../type-aliases/Action.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1294

Required action for the agent to take.

***

### response?

> `optional` **response**: \{ `$case`: `"nop"`; `nop`: [`NopActionParams`](NopActionParams.md); \} \| \{ `$case`: `"update"`; `update`: [`UpdateActionParams`](UpdateActionParams.md); \} \| \{ `$case`: `"restart"`; `restart`: [`RestartActionParams`](RestartActionParams.md); \}

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1299

Parameters specific to the required action.
