#!/usr/bin/env node
/* Backup and regenerate scripts/generator/google; restore on failure. */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  return res.status === 0;
}

const repoRoot = path.resolve(__dirname, '..'); // scripts/ -> repo
const generatorDir = path.join(repoRoot, 'scripts', 'generator');
const protosDir = path.join(generatorDir, 'protos');
const googleDir = path.join(generatorDir, 'google');
const backupDir = protosDir + '__bak';

const annotationsPath = path.join(repoRoot, 'nebius-api', 'nebius', 'annotations.proto');
const nebiusAnnotationsPath = path.join(generatorDir, 'nebius', 'annotations.proto');
const nebiusIndexPath = path.join(generatorDir, 'nebius', 'index.ts');

// CLI args
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('--dryrun');

if (dryRun)
  console.log('[bootstrap] Running in dry-run mode: will restore and exit after rebuild check.');

function rm(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}
function cp(src, dst) {
  fs.cpSync(src, dst, { recursive: true });
}

let backedUp = false;
if (fs.existsSync(protosDir)) {
  rm(backupDir);
  cp(protosDir, backupDir);
  backedUp = true;
  console.log(
    `[bootstrap] Backed up ${path.relative(repoRoot, protosDir)} -> ${path.relative(repoRoot, backupDir)}`,
  );
} else {
  console.log('[bootstrap] No existing google directory to backup.');
}

function restoreIfNeeded() {
  if (backedUp) {
    rm(protosDir);
    cp(backupDir, protosDir);
    rm(backupDir);
    console.error('[bootstrap] Restored original google directory from backup.');
  }
}

function cleanupBackup() {
  if (backedUp) {
    rm(backupDir);
    console.log('[bootstrap] Removed backup directory (success).');
  }
}
let step = 1;

console.log(`[bootstrap] Step ${step++}: Building current scripts`);
if (!run('npm', ['run', 'build:scripts'], { cwd: repoRoot })) {
  console.error('[bootstrap] Initial build failed. Aborting.');
  restoreIfNeeded();
  process.exitCode = 1;
  process.exit();
}

console.log(
  `[bootstrap] Step ${step++}: Copying annotations.proto to generator bootstrap directory`,
);
cp(annotationsPath, nebiusAnnotationsPath);

console.log(`[bootstrap] Step ${step++}: Regenerating descriptor sources with buf`);
if (!run('buf', ['generate'], { cwd: generatorDir })) {
  console.error('[bootstrap] buf generate failed.');
  restoreIfNeeded();
  process.exitCode = 1;
  process.exit();
}

console.log(`[bootstrap] Step ${step++}: Replacing protos directory with regenerated protos`);
rm(protosDir);
cp(googleDir, protosDir);

console.log(
  `[bootstrap] Step ${step++}: Patching bootstrap index to reference protos instead of google`,
);
if (fs.existsSync(nebiusIndexPath)) {
  try {
    let content = fs.readFileSync(nebiusIndexPath, 'utf8');
    const patched = content.split('../google/').join('../protos/');
    if (patched !== content) {
      fs.writeFileSync(nebiusIndexPath, patched, 'utf8');
      console.log(
        `[bootstrap] Patched ${path.relative(repoRoot, nebiusIndexPath)} (../google/ -> ../protos/)`,
      );
    } else {
      console.log(
        `[bootstrap] No ../google/ references found in ${path.relative(repoRoot, nebiusIndexPath)}`,
      );
    }
  } catch (err) {
    console.error(`[bootstrap] Failed to patch ${path.relative(repoRoot, nebiusIndexPath)}:`, err);
    restoreIfNeeded();
    process.exitCode = 1;
    process.exit();
  }
} else {
  console.log(
    `[bootstrap] No bootstrap index found at ${path.relative(repoRoot, nebiusIndexPath)} to patch`,
  );
}

console.log(`[bootstrap] Step ${step++}: Rebuilding scripts after regeneration`);
if (!run('npm', ['run', 'build:scripts'], { cwd: repoRoot })) {
  console.error('[bootstrap] Build after regeneration failed. Will restore backup.');
  restoreIfNeeded();
  process.exitCode = 1;
  process.exit();
}

if (dryRun) {
  console.log(
    '[bootstrap] Dry-run: rebuild succeeded. Restoring original protos and exiting before final cleanup.',
  );
  restoreIfNeeded();
  // Exit without removing generated google dir or cleaning up backup (restore already removed backup)
  process.exit(0);
}

rm(googleDir);
rm(nebiusAnnotationsPath);
cleanupBackup();
console.log('[bootstrap] Generator bootstrap completed successfully.');
