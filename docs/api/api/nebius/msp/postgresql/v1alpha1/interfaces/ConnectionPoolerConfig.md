[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ConnectionPoolerConfig

# Interface: ConnectionPoolerConfig

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2726

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2728

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ConnectionPoolerConfig"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2727

---

### maxPoolSize?

> `optional` **maxPoolSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2738

Maximum number of connections in the pool for a single database.

---

### poolingMode

> **poolingMode**: [`ConnectionPoolerConfig_PoolingMode`](../type-aliases/ConnectionPoolerConfig_PoolingMode.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2733

Mode that the connection pooler is working in.
