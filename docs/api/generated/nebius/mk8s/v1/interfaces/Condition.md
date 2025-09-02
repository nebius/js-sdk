[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / Condition

# Interface: Condition

Defined in: src/generated/nebius/mk8s/v1/index.ts:2157

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:2159

***

### $type

> **$type**: `"nebius.mk8s.v1.Condition"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2158

***

### description

> **description**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2191

A human readable description message of this detail.

***

### lastTransitionAt?

> `optional` **lastTransitionAt**: `Dayjs`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2174

The last time the condition transitioned from one status to another.

***

### lastTransitionError?

> `optional` **lastTransitionError**: [`Condition_TransitionError`](Condition_TransitionError.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:2192

***

### reason

> **reason**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2180

The reason for the condition's last transition in CamelCase.
 The values are considered a guaranteed API.

***

### severity

> **severity**: [`Condition_Severity`](../type-aliases/Condition_Severity.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:2186

Explicit classification of Reason code, so the users or machines can immediately
 understand the current situation and act accordingly.

***

### status

> **status**: [`Condition_Status`](../type-aliases/Condition_Status.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:2169

Status of the condition, one of TRUE, FALSE or UNKNOWN.

***

### type

> **type**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2164

Type of condition. Should be CamelCase
