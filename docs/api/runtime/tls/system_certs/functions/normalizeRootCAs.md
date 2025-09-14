[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/tls/system_certs](../README.md) / normalizeRootCAs

# Function: normalizeRootCAs()

> **normalizeRootCAs**(`input?`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/runtime/tls/system_certs.ts:82](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/tls/system_certs.ts#L82)

Normalize user-provided roots:

- Buffer: returned as-is
- string: treated as path to PEM bundle
- string[]: each treated as path; concatenated in order

## Parameters

### input?

`string` | `string`[] | `Buffer`\<`ArrayBufferLike`\>

## Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>
