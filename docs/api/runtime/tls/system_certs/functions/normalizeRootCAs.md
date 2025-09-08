[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/tls/system_certs](../README.md) / normalizeRootCAs

# Function: normalizeRootCAs()

> **normalizeRootCAs**(`input?`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/runtime/tls/system_certs.ts:66](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/tls/system_certs.ts#L66)

Normalize user-provided roots:

- Buffer: returned as-is
- string: treated as path to PEM bundle
- string[]: each treated as path; concatenated in order

## Parameters

### input?

`string` | `string`[] | `Buffer`\<`ArrayBufferLike`\>

## Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>
