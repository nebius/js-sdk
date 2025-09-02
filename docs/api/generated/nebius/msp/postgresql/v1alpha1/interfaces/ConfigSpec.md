[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ConfigSpec

# Interface: ConfigSpec

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3342

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3344

***

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ConfigSpec"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3343

***

### config?

> `optional` **config**: `object`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3370

Config of the PostgreSQL cluster.

#### $case

> **$case**: `"postgresqlConfig_16"`

#### postgresqlConfig\_16

> **postgresqlConfig\_16**: [`PostgresqlConfig16`](../config/interfaces/PostgresqlConfig16.md)

***

### poolerConfig?

> `optional` **poolerConfig**: [`ConnectionPoolerConfig`](ConnectionPoolerConfig.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3355

Configuration of the connection pooler.

***

### publicAccess

> **publicAccess**: `boolean`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3360

Either make cluster public accessible or accessible only via private VPC.

***

### template?

> `optional` **template**: [`TemplateSpec`](TemplateSpec.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3365

Resources allocated to PostgreSQL hosts.

***

### version

> **version**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:3350

Version of PostgreSQL used in the cluster.
 Possible values: `16`
