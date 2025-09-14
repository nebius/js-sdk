[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ListClustersResponse

# Interface: ListClustersResponse

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1372

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1374

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ListClustersResponse"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1373

---

### clusters

> **clusters**: [`Cluster`](Cluster.md)[]

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1379

List of PostgreSQL Cluster resources.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1387

This token allows you to get the next page of results for list requests. If the number of results
is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
list request will have its own [next_page_token] to continue paging through the results.
