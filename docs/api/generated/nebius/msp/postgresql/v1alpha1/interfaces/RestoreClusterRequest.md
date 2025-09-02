[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / RestoreClusterRequest

# Interface: RestoreClusterRequest

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1606

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1608

***

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.RestoreClusterRequest"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1607

***

### backupId

> **backupId**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1623

ID of the backup to restore from.

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1613

Metadata associated with the new cluster.

***

### recoveryTime?

> `optional` **recoveryTime**: [`Dayjs`](../../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1633

Timestamp for point in time recovery.

***

### sourceClusterId

> **sourceClusterId**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1628

ID of the PostgreSQL cluster to restore from.

***

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1618

Specification for the new cluster.
