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
const nebiusIndexPath = path.join(generatorDir, 'nebius', 'index.ts'); // generated fresh each run
const extensionsDir = path.join(generatorDir, 'extensions');
const extensionsIndexPath = path.join(extensionsDir, 'index.ts'); // canonical in-use file
const extensionsIndexBackupPath = extensionsIndexPath + '.bak';

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

let backedUp = false; // protos backup
let extensionsBackedUp = false; // backup of extensions/index.ts
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

// Ensure canonical extensions index exists and backup it (this is the version in use by generator before regeneration)
if (fs.existsSync(extensionsIndexPath)) {
  try {
    fs.copyFileSync(extensionsIndexPath, extensionsIndexBackupPath);
    extensionsBackedUp = true;
    console.log(
      `[bootstrap] Backed up ${path.relative(repoRoot, extensionsIndexPath)} -> ${path.relative(repoRoot, extensionsIndexBackupPath)}`,
    );
  } catch (e) {
    console.error(
      '[bootstrap] Failed to backup extensions/index.ts; aborting to avoid data loss.',
      e,
    );
    process.exitCode = 1;
    process.exit();
  }
} else {
  console.error('[bootstrap] Missing extensions/index.ts (expected existing usable file).');
  // We can proceed but warn; generation will create nebius/index.ts then we move it into place.
}

// Remove any stale generated nebius/index.ts before regeneration to guarantee a clean create.
if (fs.existsSync(nebiusIndexPath)) {
  rm(nebiusIndexPath);
  console.log('[bootstrap] Removed stale nebius/index.ts before generation.');
}

function restoreIfNeeded() {
  // restore protos
  if (backedUp) {
    rm(protosDir);
    cp(backupDir, protosDir);
    rm(backupDir);
    console.error('[bootstrap] Restored original google directory from backup.');
  }
  // restore extensions index
  if (extensionsBackedUp) {
    try {
      fs.copyFileSync(extensionsIndexBackupPath, extensionsIndexPath);
      console.error('[bootstrap] Restored original extensions/index.ts from backup.');
    } catch (e) {
      console.error('[bootstrap] Failed to restore extensions/index.ts from backup:', e);
    }
  }
  // remove generated nebius index if present (we failed before promoting it)
  if (fs.existsSync(nebiusIndexPath)) {
    try {
      rm(nebiusIndexPath);
    } catch {}
  }
}

function cleanupBackup() {
  if (backedUp) {
    rm(backupDir);
    console.log('[bootstrap] Removed protos backup directory (success).');
  }
  if (extensionsBackedUp) {
    try {
      fs.rmSync(extensionsIndexBackupPath, { force: true });
    } catch {}
    console.log('[bootstrap] Removed extensions/index.ts backup (success).');
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
  `[bootstrap] Step ${step++}: Patching generated nebius/index.ts to reference protos instead of google`,
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
  console.error('[bootstrap] Generated nebius/index.ts not found after buf generate; aborting.');
  restoreIfNeeded();
  process.exitCode = 1;
  process.exit();
}

console.log(
  `[bootstrap] Step ${step++}: Promoting generated nebius/index.ts to extensions/index.ts`,
);
try {
  if (!fs.existsSync(extensionsDir)) fs.mkdirSync(extensionsDir, { recursive: true });
  // Overwrite existing extensions/index.ts with generated file
  fs.copyFileSync(nebiusIndexPath, extensionsIndexPath);
  console.log('[bootstrap] Overwrote extensions/index.ts with generated nebius/index.ts');
} catch (e) {
  console.error('[bootstrap] Failed to promote generated index:', e);
  restoreIfNeeded();
  process.exitCode = 1;
  process.exit();
}

console.log(`[bootstrap] Step ${step++}: Rebuilding scripts after promoting new index`);
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
rm(nebiusIndexPath); // remove generated copy (extensions version is authoritative)
rm(nebiusAnnotationsPath);
cleanupBackup();
console.log('[bootstrap] Generator bootstrap completed successfully.');
