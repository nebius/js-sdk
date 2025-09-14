[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/tls/system_certs](../README.md) / getSystemRootCAs

# Function: getSystemRootCAs()

> **getSystemRootCAs**(`logger`): `undefined` \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/runtime/tls/system_certs.ts:23](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/tls/system_certs.ts#L23)

Best-effort loading of system root CAs from common locations.
Also respects NODE_EXTRA_CA_CERTS and SSL_CERT_FILE if set.
Returns a PEM bundle Buffer or undefined if none found.

## Parameters

### logger

[`Logger`](../../../util/logging/classes/Logger.md)

## Returns

`undefined` \| `Buffer`\<`ArrayBufferLike`\>
