[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / GetVersionRequest

# Interface: GetVersionRequest

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:170

Request message for GetVersion RPC containing agent status and system information.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:172

---

### $type

> **$type**: `"nebius.logging.agentmanager.v1.GetVersionRequest"`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:171

---

### agentState

> **agentState**: [`AgentState`](../type-aliases/AgentState.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:207

Current operational state of the agent.

---

### agentStateMessages

> **agentStateMessages**: `string`[]

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:227

Status messages from the agent describing its current state.

---

### agentUptime?

> `optional` **agentUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:212

Time duration since the agent started.

---

### agentVersion

> **agentVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:182

Current version of the agent software.

---

### cloudInitStatus

> **cloudInitStatus**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:247

Status of cloud initialization process.

---

### dcgmVersion

> **dcgmVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:272

Version of the DCGM (Data Center GPU Manager) used.

---

### gpuModel

> **gpuModel**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:262

Model of the GPU used in the system.

---

### gpuNumber

> **gpuNumber**: `number`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:267

Number of GPUs available in the system.

---

### instanceId

> **instanceId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:197

Unique identifier for the instance where agent is running.

---

### instanceIdUsedFallback

> **instanceIdUsedFallback**: `boolean`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:252

Indicates if a fallback method was used to determine instance_id.

---

### lastAgentLogs

> **lastAgentLogs**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:257

Recent agent log entries for diagnostic purposes.

---

### lastUpdateError

> **lastUpdateError**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:232

Description of the last update failure, if any.

---

### mk8sClusterId

> **mk8sClusterId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:237

Managed Kubernetes cluster identifier, if applicable.

---

### modulesHealth?

> `optional` **modulesHealth**: [`ModulesHealth`](ModulesHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:242

Health status of individual agent modules.

---

### osInfo?

> `optional` **osInfo**: [`OSInfo`](OSInfo.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:202

Detailed information about the operating system.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:192

Parent identifier for the VM

---

### systemUptime?

> `optional` **systemUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:217

Total system uptime.

---

### type

> **type**: [`AgentType`](../type-aliases/AgentType.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:177

Type of the agent. Must be O11Y_AGENT (1).

---

### updaterUptime?

> `optional` **updaterUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:222

Time duration since the updater component started.

---

### updaterVersion

> **updaterVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:187

Version of the updater component.
