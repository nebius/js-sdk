[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/logging/v1/agentmanager](../README.md) / GetVersionResponse

# Interface: GetVersionResponse

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:1288

Response message for GetVersion RPC containing required action for the agent.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:1290

***

### $type

> **$type**: `"nebius.logging.agentmanager.v1.GetVersionResponse"`

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:1289

***

### action

> **action**: [`Action`](../type-aliases/Action.md)

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:1295

Required action for the agent to take.

***

### response?

> `optional` **response**: \{ `$case`: `"nop"`; `nop`: [`NopActionParams`](NopActionParams.md); \} \| \{ `$case`: `"update"`; `update`: [`UpdateActionParams`](UpdateActionParams.md); \} \| \{ `$case`: `"restart"`; `restart`: [`RestartActionParams`](RestartActionParams.md); \}

Defined in: src/api/nebius/logging/v1/agentmanager/index.ts:1300

Parameters specific to the required action.
