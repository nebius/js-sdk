[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/tls/system_certs](../README.md) / normalizeRootCAs

# Function: normalizeRootCAs()

> **normalizeRootCAs**(`input?`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/runtime/tls/system_certs.ts:82](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/tls/system_certs.ts#L82)

Normalize user-provided roots:

- Buffer: returned as-is
- string: treated as path to PEM bundle
- string[]: each treated as path; concatenated in order

## Parameters

### input?

`string` | `string`[] | `Buffer`\<`ArrayBufferLike`\>

## Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>
