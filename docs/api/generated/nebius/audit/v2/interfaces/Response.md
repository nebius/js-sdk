[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / Response

# Interface: Response

Defined in: src/generated/nebius/audit/v2/index.ts:2129

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:2131

---

### $type

> **$type**: `"nebius.audit.v2.Response"`

Defined in: src/generated/nebius/audit/v2/index.ts:2130

---

### errorMessage

> **errorMessage**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:2141

Error message if the call was not successful.

---

### payload?

> `optional` **payload**: `object`

Defined in: src/generated/nebius/audit/v2/index.ts:2146

The payload of the response.

#### Index Signature

\[`key`: `string`\]: `any`

---

### statusCode

> **statusCode**: `Code`

Defined in: src/generated/nebius/audit/v2/index.ts:2136

The status that the server returned to the client.
