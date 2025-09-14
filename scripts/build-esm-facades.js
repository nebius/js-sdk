#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const root = path.resolve(__dirname, '..');
const distCjs = path.join(root, 'dist', 'cjs');
const distEsm = path.join(root, 'dist', 'esm');

if (!fs.existsSync(distCjs)) {
  console.error('CJS build missing at dist/cjs. Run build:cjs first.');
  process.exit(1);
}

fs.mkdirSync(distEsm, { recursive: true });

const files = walk(distCjs);
for (const absCjsFile of files) {
  const relFromCjsRoot = path.relative(distCjs, absCjsFile);
  const absEsmFile = path.join(distEsm, relFromCjsRoot);
  const esmDir = path.dirname(absEsmFile);
  fs.mkdirSync(esmDir, { recursive: true });

  if (absCjsFile.endsWith('.js')) {
    // Create a facade that re-exports from the CJS file with a relative path
    const relToCjsFromEsm = path.relative(esmDir, absCjsFile).split(path.sep).join('/');
    const content = [
      '// Auto-generated ESM facade re-exporting the CJS build',
      `export * from '${relToCjsFromEsm}';`,
      `import def from '${relToCjsFromEsm}';`,
      'export default def;',
      '',
    ].join('\n');
    fs.writeFileSync(absEsmFile, content);
  } else if (absCjsFile.endsWith('.d.ts') || absCjsFile.endsWith('.d.ts.map')) {
    // Copy type declarations
    fs.copyFileSync(absCjsFile, absEsmFile);
  }
}

console.log('Created ESM facades mirroring dist/cjs into dist/esm');
