[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / BackupSpec

# Interface: BackupSpec

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3695

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3697

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.BackupSpec"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3696

---

### backupWindowStart

> **backupWindowStart**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3702

Backup window start in "HH:MM:SS" format (UTC Time)

---

### retentionPolicy

> **retentionPolicy**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3707

Retention policy to be used for backups and WALs (i.e. '7d')
