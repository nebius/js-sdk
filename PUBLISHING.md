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

- `prepublishOnly` runs `npm run build` automatically during `npm publish`.
- The build writes `package.json` markers into `dist/esm` and `dist/cjs` to make Node resolution robust.
