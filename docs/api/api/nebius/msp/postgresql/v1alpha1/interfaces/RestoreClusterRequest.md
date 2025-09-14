[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / RestoreClusterRequest

# Interface: RestoreClusterRequest

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1607

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1609

***

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.RestoreClusterRequest"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1608

***

### backupId

> **backupId**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1624

ID of the backup to restore from.

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1614

Metadata associated with the new cluster.

***

### recoveryTime?

> `optional` **recoveryTime**: [`Dayjs`](../../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1634

Timestamp for point in time recovery.

***

### sourceClusterId

> **sourceClusterId**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1629

ID of the PostgreSQL cluster to restore from.

***

### spec?

> `optional` **spec**: [`ClusterSpec`](ClusterSpec.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1619

Specification for the new cluster.
