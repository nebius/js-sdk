# Nebius AI SDK for TypeScript and ECMAScript environments

The Nebius AI SDK for TypeScript is a client library for
[Nebius AI Cloud](https://nebius.com) services. It uses gRPC. Use the SDK to
authenticate, manage resources, and call Nebius APIs from Node.js.

## Documentation

- [API reference and service index](https://nebius.github.io/js-sdk/documents/SERVICES.html)
- [Nebius API definitions](https://github.com/nebius/api)

The build generates TypeScript API sources from protobuf files in `src/api/`.
Do not edit these generated files.

## Install

Install the package from npm:

```bash
npm install @nebius/js-sdk
```

To build this repository, use Node.js 24:

```bash
git clone git@github.com:nebius/js-sdk.git
cd js-sdk
nvm use
npm install
npm run build
```

The package supports Node.js versions 22 through 25. The release build uses
Node.js 24.

## Import the SDK

Use an ECMAScript module import:

```ts
import { SDK } from '@nebius/js-sdk';
```

Or use CommonJS:

```js
const { SDK } = require('@nebius/js-sdk');
```

The package provides both formats:

- `dist/esm` contains the ECMAScript modules.
- `dist/cjs` contains the CommonJS modules.

## Initialize the SDK

Set
[`SDKOptions.userAgentPrefix`](https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#useragentprefix)
in each SDK constructor. Use a value that identifies your application and
version. The examples use `example-application/1.0`.

The following example creates an SDK without credentials:

```ts
import { SDK } from '@nebius/js-sdk';

const sdk = new SDK({
  userAgentPrefix: 'example-application/1.0',
});
```

Calls that require authentication fail until you set credentials.

### IAM token

Read an IAM token from the `NEBIUS_IAM_TOKEN` environment variable:

```ts
import { SDK } from '@nebius/js-sdk';
import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';

const sdk = new SDK({
  credentials: new EnvBearer('NEBIUS_IAM_TOKEN'),
  userAgentPrefix: 'example-application/1.0',
});
```

You can also pass a token string or a
[`StaticBearer`](https://nebius.github.io/js-sdk/classes/runtime_token_static.StaticBearer.html):

```ts
import { SDK } from '@nebius/js-sdk';
import { StaticBearer } from '@nebius/js-sdk/runtime/token/static';

const token = process.env.NEBIUS_IAM_TOKEN;
if (!token?.trim()) {
  throw new Error('NEBIUS_IAM_TOKEN must contain an IAM token');
}

const sdkFromString = new SDK({
  credentials: token,
  userAgentPrefix: 'example-application/1.0',
});

const sdkFromBearer = new SDK({
  credentials: new StaticBearer(token),
  userAgentPrefix: 'example-application/1.0',
});
```

### Nebius CLI configuration

Use the Nebius CLI configuration to get credentials, an endpoint, and a
default parent ID:

```ts
import { SDK } from '@nebius/js-sdk';
import { Config } from '@nebius/js-sdk/runtime/cli_config';

const sdk = new SDK({
  configReader: new Config({ clientId: 'example-application' }),
  userAgentPrefix: 'example-application/1.0',
});
```

See the [`Config` reference](https://nebius.github.io/js-sdk/classes/runtime_cli_config.Config.html)
for profile and environment settings.

### Service account object

Pass the service account ID, public key ID, and PEM private key:

```ts
import { SDK } from '@nebius/js-sdk';

const sdk = new SDK({
  credentials: {
    serviceAccountId: 'serviceaccount-xxxxx',
    publicKeyId: 'public-key-id',
    privateKeyPem: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----',
  },
  userAgentPrefix: 'example-application/1.0',
});
```

### Service account credentials file

Use
[`CredentialsFileReader`](https://nebius.github.io/js-sdk/classes/runtime_service_account_credentials_file.CredentialsFileReader.html)
to read a Nebius service account credentials file:

```ts
import { SDK } from '@nebius/js-sdk';
import { CredentialsFileReader } from '@nebius/js-sdk/runtime/service_account/credentials_file';

const sdk = new SDK({
  credentials: new CredentialsFileReader('~/.config/nebius/credentials.json'),
  userAgentPrefix: 'example-application/1.0',
});
```

You can also use
[`PkFileReader`](https://nebius.github.io/js-sdk/classes/runtime_service_account_pk_file.PkFileReader.html)
with a separate private key file.

### User-agent

[`SDKOptions.userAgentPrefix`](https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#useragentprefix)
places your application name and version before the SDK user-agent. For
example, the SDK sends a value in this form:

```text
example-application/1.0 nebius-js-sdk/<version>
```

You can also set `grpc.primary_user_agent` or `grpc.secondary_user_agent` in
[`SDKOptions.clientOptions`](https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#clientoptions)
and
[`SDKOptions.perAddress`](https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#peraddress).
The SDK preserves these values and adds its own user-agent.

## Test credentials and close the SDK

Call
[`SDK.whoami()`](https://nebius.github.io/js-sdk/classes/sdk.SDK.html#whoami)
to test credentials. Close the SDK when your application no longer needs it:

```ts
import { SDK } from '@nebius/js-sdk';
import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';

const sdk = new SDK({
  credentials: new EnvBearer('NEBIUS_IAM_TOKEN'),
  userAgentPrefix: 'example-application/1.0',
});

try {
  const profile = await sdk.whoami();
  console.log('Signed-in profile:', profile);
} finally {
  await sdk.close();
}
```

## Call a service

Generated service clients accept the SDK as their first constructor argument.
Generated message objects provide a
[`create()`](https://nebius.github.io/js-sdk/interfaces/runtime_protos_core.MessageFns.html#create)
function.

```ts
import { SDK } from '@nebius/js-sdk';
import { BucketService, CreateBucketRequest } from '@nebius/js-sdk/api/nebius/storage/v1/index';
import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';

const sdk = new SDK({
  credentials: new EnvBearer('NEBIUS_IAM_TOKEN'),
  userAgentPrefix: 'example-application/1.0',
});

try {
  const buckets = new BucketService(sdk);
  const request = CreateBucketRequest.create({
    /* Set the request fields. */
  });
  const operation = await buckets.create(request).result;
  await operation.wait();
  console.log('Created resource:', operation.resourceId());
} finally {
  await sdk.close();
}
```

Many write methods return an
[`Operation`](https://nebius.github.io/js-sdk/classes/runtime_operation.Operation.html).
Use
[`Request.result`](https://nebius.github.io/js-sdk/classes/runtime_request.Request.html#result)
to get the operation. Use
[`Operation.wait()`](https://nebius.github.io/js-sdk/classes/runtime_operation.Operation.html#wait)
to wait for completion.

### Track operation progress

Some operations report progress.
[`Operation.progressTracker()`](https://nebius.github.io/js-sdk/classes/runtime_operation.Operation.html#progresstracker)
returns `undefined` when the service does not report progress.

```ts
while (!operation.done()) {
  await operation.update();
  const tracker = operation.progressTracker();
  const parts = [`Waiting for operation ${operation.id()}:`];

  if (tracker) {
    const work = tracker.workFraction();
    if (work !== undefined) parts.push(`${Math.round(work * 100)}%`);

    const description = tracker.description();
    if (description) parts.push(description);

    const eta = tracker.estimatedFinishedAt();
    if (eta) parts.push(`ETA ${eta.toISOString()}`);
  }

  process.stdout.write(`${parts.join(' ')}\r`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

process.stdout.write('\n');
```

### Get the operation service

Use
[`BucketService.getOperationService()`](https://nebius.github.io/js-sdk/classes/api_nebius_storage_v1.BucketService.html#getoperationservice)
on a generated service client. Do not create a standalone operation service
client for another service address.

```ts
import { ListOperationsRequest } from '@nebius/js-sdk/api/nebius/common/v1/index';

const operationService = buckets.getOperationService();
const request = ListOperationsRequest.create({ resourceId: '...' });
const response = await operationService.list(request);
```

## Parent IDs

The SDK can fill an empty parent ID from
[`SDKOptions.parentId`](https://nebius.github.io/js-sdk/interfaces/sdk.SDKOptions.html#parentid)
or the CLI configuration.

It fills these request fields:

- `parentId` for `list` and `getByName`.
- `metadata.parentId` for other methods except `update`.

An explicit request value always takes priority.

## Request metadata

The
[`Request`](https://nebius.github.io/js-sdk/classes/runtime_request.Request.html)
object is promise-like. It also exposes response metadata, status, request ID,
and trace ID.

```ts
import { GetBucketRequest } from '@nebius/js-sdk/api/nebius/storage/v1/index';

const request = buckets.get(GetBucketRequest.create({ id: 'bucket-id' }));
const bucket = await request;
const status = await request.status;

console.log({ bucket, status });

// These callbacks run only when the server supplies the matching header.
void request.requestId.then((requestId) => console.log({ requestId }));
void request.traceId.then((traceId) => console.log({ traceId }));
```

[`Request.requestId`](https://nebius.github.io/js-sdk/classes/runtime_request.Request.html#requestid)
and
[`Request.traceId`](https://nebius.github.io/js-sdk/classes/runtime_request.Request.html#traceid)
stay pending when the server does not supply their headers. Do not await them
as request-completion signals.

### Authorization options

Pass authorization hints in the gRPC call options:

```ts
import { Metadata } from '@grpc/grpc-js';
import { UpdateBucketRequest } from '@nebius/js-sdk/api/nebius/storage/v1/index';

const callOptions = {
  authorizationOptions: {
    renewRequired: true,
    renewSynchronous: true,
    renewRequestTimeoutMs: 900,
  },
};

await sdk.whoami(undefined, callOptions);
const updateRequest = UpdateBucketRequest.create({
  /* Set the fields to update. */
});
const operation = await buckets.update(updateRequest, new Metadata(), callOptions);
await operation.wait();
```

See
[`AuthorizationOptions`](https://nebius.github.io/js-sdk/interfaces/runtime_authorization_provider.AuthorizationOptions.html)
for all fields.

## Update and reset masks

The SDK derives an `x-resetmask` header for generated update methods. Use
[`ensureResetMaskInMetadata()`](https://nebius.github.io/js-sdk/functions/runtime_resetmask.ensureResetMaskInMetadata.html)
when you must set the header explicitly:

```ts
import { UpdateBucketRequest } from '@nebius/js-sdk/api/nebius/storage/v1/index';
import { ensureResetMaskInMetadata } from '@nebius/js-sdk/runtime/resetmask';

const request = UpdateBucketRequest.create({
  metadata: bucket.metadata,
  spec: {
    /* Set the fields to update or reset. */
  },
});
const metadata = ensureResetMaskInMetadata(request);
const operation = await buckets.update(request, metadata).result;
await operation.wait();
```

Read the service documentation before you reset list or map fields.

## Timeouts and retries

A unary call has these limits:

- `deadline` limits authorization, the request, and all retries. Use a `Date`
  or an absolute epoch time in milliseconds. The default is 15 minutes.
- [`RetryOptions.RequestTimeout`](https://nebius.github.io/js-sdk/interfaces/runtime_request.RetryOptions.html#requesttimeout)
  limits the request and its retries after authorization. The default is 60
  seconds.
- [`RetryOptions.PerRetryTimeout`](https://nebius.github.io/js-sdk/interfaces/runtime_request.RetryOptions.html#perretrytimeout)
  limits one attempt. The default is 20 seconds.
- [`RetryOptions.RetryCount`](https://nebius.github.io/js-sdk/interfaces/runtime_request.RetryOptions.html#retrycount)
  sets the maximum number of retries. The default is 3.

The SDK retries common network errors, gRPC `UNAVAILABLE`, gRPC
`RESOURCE_EXHAUSTED`, and retryable Nebius service errors.

```ts
import { Metadata } from '@grpc/grpc-js';
import { GetBucketRequest } from '@nebius/js-sdk/api/nebius/storage/v1/index';

const metadata = new Metadata();
const options = {
  deadline: new Date(Date.now() + 30_000),
  RequestTimeout: 10_000,
  PerRetryTimeout: 5_000,
  RetryCount: 2,
};

const request = GetBucketRequest.create({ id: 'bucket-id' });
const bucket = await buckets.get(request, metadata, options);
```

## API reference

TypeDoc writes the API reference to `docs`. Run:

```bash
npm run docs
```

The reference includes generated service, message, and enum documentation. It
also includes runtime classes, interfaces, methods, properties, functions,
variables, and type aliases.

## Contribute

See the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Nebius B.V.
