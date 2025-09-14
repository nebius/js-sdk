[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / Backup

# Interface: Backup

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:800

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:802

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.Backup"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:801

---

### creationFinish?

> `optional` **creationFinish**: [`Dayjs`](../../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:822

Creation finish timestamp.

---

### creationStart?

> `optional` **creationStart**: [`Dayjs`](../../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:817

Creation start timestamp.

---

### id

> **id**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:807

Required. ID of the backup.

---

### onDemand

> **onDemand**: `boolean`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:837

Is the backup an on-demand manual backup.

---

### sourceClusterId

> **sourceClusterId**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:812

ID of the PostgreSQL cluster that the backup was created for.

---

### sourceClusterName

> **sourceClusterName**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:827

Name of the PostgreSQL cluster that the backup was created for.

---

### sourceClusterVisible

> **sourceClusterVisible**: `boolean`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:832

Is PostgreSQL cluster that the backup was created for visible.
