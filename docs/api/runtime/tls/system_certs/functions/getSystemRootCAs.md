[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/tls/system\_certs](../README.md) / getSystemRootCAs

# Function: getSystemRootCAs()

> **getSystemRootCAs**(): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/runtime/tls/system\_certs.ts:21](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/tls/system_certs.ts#L21)

Best-effort loading of system root CAs from common locations.
Also respects NODE_EXTRA_CA_CERTS and SSL_CERT_FILE if set.
Returns a PEM bundle Buffer or undefined if none found.

## Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>
