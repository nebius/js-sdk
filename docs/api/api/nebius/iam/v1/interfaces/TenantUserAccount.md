[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccount

# Interface: TenantUserAccount

Defined in: src/api/nebius/iam/v1/index.ts:21047

this proto describes projections of global user accounts to specific tenants
 every global user account gets a specific id like 'tenantuseraccount-someuniquesuffix'
 inside those tenants where access to their resources is granted to them

 global user accounts are described separately in user_account*.proto

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:21049

***

### $type

> **$type**: `"nebius.iam.v1.TenantUserAccount"`

Defined in: src/api/nebius/iam/v1/index.ts:21048

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/iam/v1/index.ts:21050

***

### spec?

> `optional` **spec**: [`TenantUserAccountSpec`](TenantUserAccountSpec.md)

Defined in: src/api/nebius/iam/v1/index.ts:21051

***

### status?

> `optional` **status**: [`TenantUserAccountStatus`](TenantUserAccountStatus.md)

Defined in: src/api/nebius/iam/v1/index.ts:21052
