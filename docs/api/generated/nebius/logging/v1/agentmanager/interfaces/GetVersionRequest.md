[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / GetVersionRequest

# Interface: GetVersionRequest

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:171

Request message for GetVersion RPC containing agent status and system information.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:173

---

### $type

> **$type**: `"nebius.logging.agentmanager.v1.GetVersionRequest"`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:172

---

### agentState

> **agentState**: [`AgentState`](../type-aliases/AgentState.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:208

Current operational state of the agent.

---

### agentStateMessages

> **agentStateMessages**: `string`[]

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:228

Status messages from the agent describing its current state.

---

### agentUptime?

> `optional` **agentUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:213

Time duration since the agent started.

---

### agentVersion

> **agentVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:183

Current version of the agent software.

---

### cloudInitStatus

> **cloudInitStatus**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:248

Status of cloud initialization process.

---

### dcgmVersion

> **dcgmVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:273

Version of the DCGM (Data Center GPU Manager) used.

---

### gpuModel

> **gpuModel**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:263

Model of the GPU used in the system.

---

### gpuNumber

> **gpuNumber**: `number`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:268

Number of GPUs available in the system.

---

### instanceId

> **instanceId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:198

Unique identifier for the instance where agent is running.

---

### instanceIdUsedFallback

> **instanceIdUsedFallback**: `boolean`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:253

Indicates if a fallback method was used to determine instance_id.

---

### lastAgentLogs

> **lastAgentLogs**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:258

Recent agent log entries for diagnostic purposes.

---

### lastUpdateError

> **lastUpdateError**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:233

Description of the last update failure, if any.

---

### mk8sClusterId

> **mk8sClusterId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:238

Managed Kubernetes cluster identifier, if applicable.

---

### modulesHealth?

> `optional` **modulesHealth**: [`ModulesHealth`](ModulesHealth.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:243

Health status of individual agent modules.

---

### osInfo?

> `optional` **osInfo**: [`OSInfo`](OSInfo.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:203

Detailed information about the operating system.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:193

Parent identifier for the VM

---

### systemUptime?

> `optional` **systemUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:218

Total system uptime.

---

### type

> **type**: [`AgentType`](../type-aliases/AgentType.md)

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:178

Type of the agent. Must be O11Y_AGENT (1).

---

### updaterUptime?

> `optional` **updaterUptime**: `Duration`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:223

Time duration since the updater component started.

---

### updaterVersion

> **updaterVersion**: `string`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:188

Version of the updater component.
