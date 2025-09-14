#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const distCjs = path.join(root, 'dist', 'cjs');
const distEsm = path.join(root, 'dist', 'esm');

if (!fs.existsSync(path.join(distCjs, 'index.js'))) {
  console.error('CJS build missing at dist/cjs/index.js. Run build:cjs first.');
  process.exit(1);
}

fs.mkdirSync(distEsm, { recursive: true });

// Generate an ESM wrapper that re-exports everything from the CJS entry.
const esmIndex = [
  '// ESM facade re-exporting the CJS build',
  "export * from '../cjs/index.js';",
  "import def from '../cjs/index.js';",
  'export default def;',
  '',
].join('\n');
fs.writeFileSync(path.join(distEsm, 'index.js'), esmIndex);

// Copy types alongside for editor/TS consumers
const cjsDts = path.join(distCjs, 'index.d.ts');
if (fs.existsSync(cjsDts)) {
  fs.copyFileSync(cjsDts, path.join(distEsm, 'index.d.ts'));
  const map = path.join(distCjs, 'index.d.ts.map');
  if (fs.existsSync(map)) {
    fs.copyFileSync(map, path.join(distEsm, 'index.d.ts.map'));
  }
}

console.log('Created ESM wrapper in dist/esm pointing to dist/cjs');
