[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v2](../README.md) / GetTenantByNameRequest

# Interface: GetTenantByNameRequest

Defined in: src/api/nebius/iam/v2/index.ts:2285

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v2/index.ts:2287

---

### $type

> **$type**: `"nebius.iam.v2.GetTenantByNameRequest"`

Defined in: src/api/nebius/iam/v2/index.ts:2286

---

### name

> **name**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:2294

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:2293

Only empty value is allowed. Field is needed for compatibility.
parent_id parameter for tenants doesn't make real sense, because tenants are top-level objects.
