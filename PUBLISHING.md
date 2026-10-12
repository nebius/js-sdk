# Publishing @nebius/js-sdk

This package now ships dual builds for CommonJS and ES Modules.

Outputs:

- CJS: `dist/cjs` (Node `require()`)
- ESM: `dist/esm` (Node `import`)

Package entry points are configured via the `exports` map:

- `import { SDK } from '@nebius/js-sdk'` -> `dist/esm/index.js`
- `const { SDK } = require('@nebius/js-sdk')` -> `dist/cjs/index.js`

Usage examples:

```ts
// ESM
import { SDK } from '@nebius/js-sdk';
```

```js
// CJS
const { SDK } = require('@nebius/js-sdk');
```

Build & publish:

1. Ensure codegen is reproducible (requires buf and protoc set up if you regenerate APIs):
   - `npm run generate`
2. Build the package:
   - `npm run build`
3. Run tests:
   - `npm test`
4. Publish:
   - `npm publish --access public`

Notes:

- A commit on `main` authored by `github-actions[bot]` with email `github-actions[bot]@users.noreply.github.com` starts a release when it changes the package version. The release workflow creates a Git tag named `v<version>`, then publishes the package and documentation.
- Other commits require a manually pushed `v<version>` tag. The tag must match the version in `package.json`.
- To retry an existing release, rerun its workflow or dispatch the release workflow with its version tag as the ref. A manual dispatch on a branch does not publish.
- Release automation runs on Node.js 24.x. Use `nvm use` in this repository to match the CI/release baseline.
- `prepublishOnly` runs `npm run build` automatically during `npm publish`.
- The build writes `package.json` markers into `dist/esm` and `dist/cjs` to make Node resolution robust.
