[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ConfigSpec

# Interface: ConfigSpec

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3343

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3345

***

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ConfigSpec"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3344

***

### config?

> `optional` **config**: `object`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3371

Config of the PostgreSQL cluster.

#### $case

> **$case**: `"postgresqlConfig_16"`

#### postgresqlConfig\_16

> **postgresqlConfig\_16**: [`PostgresqlConfig16`](../config/interfaces/PostgresqlConfig16.md)

***

### poolerConfig?

> `optional` **poolerConfig**: [`ConnectionPoolerConfig`](ConnectionPoolerConfig.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3356

Configuration of the connection pooler.

***

### publicAccess

> **publicAccess**: `boolean`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3361

Either make cluster public accessible or accessible only via private VPC.

***

### template?

> `optional` **template**: [`TemplateSpec`](TemplateSpec.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3366

Resources allocated to PostgreSQL hosts.

***

### version

> **version**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:3351

Version of PostgreSQL used in the cluster.
 Possible values: `16`
