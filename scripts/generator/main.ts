import path from 'path';

import Long from 'long';

import { Field, File, FileSet } from './descriptors';
import { createResponse, generateIndexContent, pushFile, toIndexFilePath } from './emit';
// Import Nebius option extensions so Service/Method/etc options are properly augmented when decoding.
import { decodeRequest, encodeResponse, readAllStdin } from './io';
// Import Nebius option extensions (moved original index to extensions during bootstrap prior to regeneration)
import './extensions/index';
import {
  CodeGeneratorResponse,
  CodeGeneratorResponse_Feature,
} from './protos/protobuf/compiler/index';
// (SourceCodeInfo import no longer needed after in-FileSet normalization)
// raw_service_options pre-scan no longer needed; extensions are decoded directly via augmentation.

// Local mirror of the type index consumed by printService
type TypeIndex = Map<string, { fileName: string; tsName: string; tsNameOriginal: string; dir: string }>;

function parseParams(p?: string): Map<string, string> {
  const map = new Map<string, string>();
  if (!p) return map;
  for (const part of p.split(',')) {
    if (!part) continue;
    const eq = part.indexOf('=');
    if (eq === -1) map.set(part.trim(), 'true');
    else map.set(part.slice(0, eq).trim(), part.slice(eq + 1).trim());
  }
  return map;
}

export async function main(): Promise<void> {
  try {
    const inputBuf = await readAllStdin();
    const req = decodeRequest(inputBuf);

    const params = parseParams(req.parameter);
    // Optional: outBase allows generating outside of src/. If provided we ignore outFromSrc depth logic.
    // outBase should be a posix relative path from repo root (buf executes from repo root).
    const outBase = params.get('outBase');
    // Legacy param: Always relative to src/ — e.g. "generated" or "generated_test/2"
    const outFromSrc = params.get('outFromSrc') || 'generated_test/2'; // default matches current test setup
    const outFromSrcDepth = outBase ? 0 : outFromSrc.split('/').filter(Boolean).length;
    // New param: registry file path (relative to generator output root)
    const registryFile = params.get('registryFile') || 'protobuf.ts';

    // Pass raw protoFile descriptors directly into FileSet; it will normalize internally.
    // FileSet now handles normalization of raw FileDescriptorProtos internally.

    const fileSet = new FileSet(req.protoFile, new Set(req.fileToGenerate));

    // --- Guard against "shrinking" descriptor generation ---
    // When the generator accidentally produces empty / truncated versions of
    // google.protobuf descriptor messages (e.g. FieldDescriptorProto with no fields)
    // and then overwrites the vendored copy, subsequent builds fail. Detect that
    // scenario early and abort this generation, letting the bootstrap script
    // restore the previous descriptors.
    try {
      const descriptorFile = fileSet.files.find((f) =>
        f.descriptor.name?.endsWith('google/protobuf/descriptor.proto'),
      );
      if (descriptorFile) {
        // Map of top-level message name -> Message instance
        const topLevel = new Map<string, ReturnType<File['collectAllMessages']>[number]>();
        for (const m of descriptorFile.messages) {
          topLevel.set(m.pb_name, m);
        }
        const criticalNames = [
          'FileDescriptorProto',
          'DescriptorProto',
          'FieldDescriptorProto',
          'EnumDescriptorProto',
          'ServiceDescriptorProto',
          'MethodDescriptorProto',
          'FileOptions',
          'MessageOptions',
          'FieldOptions',
          'EnumOptions',
          'EnumValueOptions',
          'ServiceOptions',
          'MethodOptions',
          'OneofDescriptorProto',
        ];
        const emptyCritical: string[] = [];
        for (const name of criticalNames) {
          const m = topLevel.get(name);
          // If message missing OR has zero fields -> suspicious shrink
          if (!m || m.fields.length === 0) emptyCritical.push(name);
        }
        if (emptyCritical.length) {
          const warn =
            '[protoc-gen-nebius-ts] Descriptor shrink detected; refusing to overwrite vendored descriptors. Empty messages: ' +
            emptyCritical.join(', ');
          console.error(warn);
          const resp = CodeGeneratorResponse.fromPartial({
            $type: 'google.protobuf.compiler.CodeGeneratorResponse',
            error: warn,
            supportedFeatures: Long.ZERO,
            minimumEdition: 0,
            maximumEdition: 0,
            file: [],
          });
          const out = encodeResponse(resp);
          // Emit error response then exit non‑zero so buf generate fails and bootstrap restores backup.
          process.stdout.write(Buffer.from(out));
          process.exitCode = 1;
          return;
        }
      }
    } catch (guardErr) {
      console.error('[protoc-gen-nebius-ts] Shrink guard internal error (continuing):', guardErr);
      // Continue generation; better to risk than always fail if guard buggy.
    }

    // Determine which directories this request is responsible for.
    // With buf `strategy: directory`, the plugin is invoked per directory.
    // We emit only those directories to avoid duplicate outputs.
    const targetDirs = new Set<string>(
      (req.fileToGenerate ?? []).map((f) => {
        const d = path.posix.dirname(f);
        return d && d !== '' ? d : '.';
      }),
    );

    type Entry = {
      pbFile: string;
      pkg: string;
      enums: ReturnType<File['collectAllEnums']>;
      messages: ReturnType<File['collectAllMessages']>;
      services: File['services'];
      extensions: File['extensions'];
    };

    // Aggregate per-directory entries: dir -> [{ pbFile, pkg, enums, messages, services }...]
    const perDir = new Map<string, Entry[]>();

    for (const f of fileSet.files) {
      if (!f.descriptor.name) continue;
      const name = f.descriptor.name;
      const pkg = f.package ?? '';
      const isDescriptorProto = name.endsWith('google/protobuf/descriptor.proto');
      const isCompilerProto = name.startsWith('google/protobuf/compiler/');
      // Skip google.protobuf WKTs - handled by runtime, but keep descriptor.proto for buf.validate
      // and compiler plugin protos for bootstrapping (we need plugin.proto types).
      if (pkg.startsWith('google.protobuf') && !isDescriptorProto && !isCompilerProto) continue;
      // Include everything else (targets + imports like google.rpc and descriptor.proto)
      const dir = path.posix.dirname(name);
      const entry: Entry = {
        pbFile: path.posix.basename(name),
        pkg,
        enums: f.collectAllEnums(),
        messages: f.collectAllMessages(),
        services: f.services,
        extensions: f.extensions,
      };
      const arr = perDir.get(dir);
      if (!arr) perDir.set(dir, [entry]);
      else arr.push(entry);
    }

    // Build a minimal type index for request/response resolution used by service printers
    const typeIndex: TypeIndex = new Map();
    for (const f of fileSet.files) {
      const pkgPrefix = f.package ? `.${f.package}` : '';
      const dir = path.posix.dirname(f.descriptor.name || '.');
      for (const m of f.collectAllMessages()) {
        const key = `${pkgPrefix}${m.pathQualifiedName()}`;
        typeIndex.set(key, {
          fileName: f.descriptor.name || '',
          tsName: m.tsName,
          tsNameOriginal: m.tsNameOriginal ?? m.tsName,
          dir,
        });
      }
    }

    const resp: CodeGeneratorResponse = createResponse();

    // Build global map from extendee FQN (normalized with leading dot) -> extension Field[].
    // (Type names for generated code will strip the leading dot as needed.)
    const extensionMap = new Map<string, Field[]>();
    for (const f of fileSet.files) {
      for (const ext of f.extensions) {
        const extendee = ext.extendeeTypeNameNormalized();
        if (!extendee) continue;
        const arr = extensionMap.get(extendee) || [];
        arr.push(ext);
        extensionMap.set(extendee, arr);
      }
    }
    // Emit index.ts per directory with file comment, enums, messages and services
    const emittedFiles = new Set<string>();
    for (const [dir, entries] of perDir.entries()) {
      // Always emit google/protobuf dir if present (descriptor.proto enums used by imports)
      const allowExtra = dir.startsWith('google/protobuf');
      // If strategy=directory, only emit for the requested directories unless allowed as extra.
      if (targetDirs.size > 0 && !targetDirs.has(dir || '.') && !allowExtra) continue;

      // stable order: by pb file name
      entries.sort((a, b) => a.pbFile.localeCompare(b.pbFile));
      const name = toIndexFilePath(dir || '.');
      if (emittedFiles.has(name)) {
        // Shouldn't happen within a single request, but guard anyway.
        console.error(
          `[protoc-gen-nebius-ts] Duplicate generated file detected: ${name}. ` +
            `Skipping duplicate in this request. Please raise an issue with the maintainer of the plugin.`,
        );
        continue;
      }
      emittedFiles.add(name);
      const content = generateIndexContent(
        dir,
        entries,
        typeIndex,
        outFromSrcDepth,
        outBase || undefined,
        registryFile,
        extensionMap,
      );
      pushFile(resp, name, content);
    }

    // Emit (or overwrite) the registry file at the root of the generator output.
    // It intentionally contains only the map definition; individual index files perform registrations.
    // Name is relative to plugin output root, so we strip any leading './'.
    const registryOutputName = registryFile.replace(/^\.\//, '');
    // Compute relative import path for runtime Registry class
    const registryDir = path.posix.dirname(registryOutputName) || '.';
    const runtimeRegistryImport = (() => {
      if (outBase) {
        // from <outBase>/<registryDir> to src/runtime/protos/registry
        const from = path.posix.join(outBase, registryDir);
        let rel = path.posix.relative(from, 'src/runtime/protos/registry');
        if (!rel.startsWith('.')) rel = `./${rel}`;
        return rel;
      }
      // Legacy: outputs live under src/<outFromSrc>/...
      // path from src/<outFromSrc>/<registryDir> to src/runtime/protos/registry
      const from = path.posix.join('src', outFromSrc, registryDir);
      let rel = path.posix.relative(from, 'src/runtime/protos/registry');
      if (!rel.startsWith('.')) rel = `./${rel}`;
      return rel;
    })();
    const registryContent = [
      '/* Generated by Nebius TS generator. DO NOT EDIT! */',
      '',
      "import { Registry } from '" + runtimeRegistryImport + "';",
      '',
      '// Local registry instance. Generated index files register messages & enums via side-effects.',
      'export const protoRegistry = new Registry();',
      '',
      '// (Entries added via side-effect imports in per-directory index.ts files.)',
      '',
    ].join('\n');
    pushFile(resp, registryOutputName, registryContent);

    const out = encodeResponse(resp);
    process.stdout.write(Buffer.from(out));
  } catch (err) {
    console.error('[protoc-gen-nebius-ts] Error:', err);
    const resp = CodeGeneratorResponse.fromPartial({
      $type: 'google.protobuf.compiler.CodeGeneratorResponse',
      error: String(err ?? ''),
      supportedFeatures: Long.fromNumber(
        CodeGeneratorResponse_Feature.FEATURE_PROTO3_OPTIONAL.code,
      ),
      minimumEdition: 0,
      maximumEdition: 0,
      file: [],
    });
    const out = encodeResponse(resp);
    process.stdout.write(Buffer.from(out));
    process.exitCode = 1;
  }
}
