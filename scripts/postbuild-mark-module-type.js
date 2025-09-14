#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensurePkg(dir, type) {
  const file = path.join(dir, 'package.json');
  const pkg = { type };
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, JSON.stringify(pkg, null, 2));
}

const root = path.resolve(__dirname, '..');
ensurePkg(path.join(root, 'dist', 'esm'), 'module');
ensurePkg(path.join(root, 'dist', 'cjs'), 'commonjs');

console.log('Wrote module type markers into dist/esm and dist/cjs');
