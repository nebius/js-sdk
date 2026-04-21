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

function createDirectoryEntryFacades(rootDir, format) {
  const files = walk(rootDir);
  for (const absFile of files) {
    if (!absFile.endsWith(`${path.sep}index.js`)) continue;
    const moduleDir = path.dirname(absFile);
    if (moduleDir === rootDir) continue;

    const parentDir = path.dirname(moduleDir);
    const moduleBaseName = path.basename(moduleDir);
    const relFromFacadeToIndex = `./${path.posix.join(moduleBaseName, 'index.js')}`;
    const jsFacade = path.join(parentDir, `${moduleBaseName}.js`);
    if (!fs.existsSync(jsFacade)) {
      const content =
        format === 'esm'
          ? [`export * from '${relFromFacadeToIndex}';`, ''].join('\n')
          : ["'use strict';", `module.exports = require('${relFromFacadeToIndex}');`, ''].join(
              '\n',
            );
      fs.writeFileSync(jsFacade, content);
    }

    const dtsSource = path.join(moduleDir, 'index.d.ts');
    const dtsFacade = path.join(parentDir, `${moduleBaseName}.d.ts`);
    if (fs.existsSync(dtsSource) && !fs.existsSync(dtsFacade)) {
      const content = [`export * from '${relFromFacadeToIndex}';`, ''].join('\n');
      fs.writeFileSync(dtsFacade, content);
    }
  }
}

const root = path.resolve(__dirname, '..');
const distCjs = path.join(root, 'dist', 'cjs');
const distEsm = path.join(root, 'dist', 'esm');

if (!fs.existsSync(distCjs)) {
  console.error('CJS build missing at dist/cjs. Run build:cjs first.');
  process.exit(1);
}

createDirectoryEntryFacades(distCjs, 'cjs');

if (!fs.existsSync(distEsm)) {
  console.error('ESM build missing at dist/esm. Run build:esm first.');
  process.exit(1);
}

createDirectoryEntryFacades(distEsm, 'esm');

console.log('Created directory-entry facades in dist/cjs and dist/esm');
