/*
 * Basic descriptor wrappers inspired by Python generator.
 * Now "eats its own dog food": descriptor proto types are imported
 * from our generated module under src/generated_test/2.
 * - typescript_name mirrors pb name (no renaming yet)
 * - Minimal structure to build upon in later iterations
 */

// Use vendored google.protobuf descriptor types (kept in sync via sync:descriptors script)
import type * as GPB from './protos/protobuf/index';

// Narrow helper to safely read enum-like values from generated types without runtime imports
function enumCode(v: unknown): number | undefined {
  if (typeof v === 'number') return v;
  if (v && typeof v === 'object' && 'code' in (v as Record<string, unknown>)) {
    const c = (v as { code?: unknown }).code;
    return typeof c === 'number' ? c : undefined;
  }
  return undefined;
}
function enumName(v: unknown): string | undefined {
  if (v && typeof v === 'object' && 'name' in (v as Record<string, unknown>)) {
    const n = (v as { name?: unknown }).name;
    return typeof n === 'string' ? n : undefined;
  }
  return undefined;
}

// Global type indexes across all files in current compilation unit
const globalMessageIndex: Map<string, Message> = new Map();
const globalEnumIndex: Map<string, Enum> = new Map();

// Type aliases to generated google.protobuf.* types
export type DescriptorProto = GPB.DescriptorProto;
export type FieldDescriptorProto = GPB.FieldDescriptorProto;
export type FileDescriptorProto = GPB.FileDescriptorProto;
export type EnumDescriptorProto = GPB.EnumDescriptorProto;
export type EnumValueDescriptorProto = GPB.EnumValueDescriptorProto;
export type OneofDescriptorProto = GPB.OneofDescriptorProto;
export type MethodDescriptorProto = GPB.MethodDescriptorProto;
export type ServiceDescriptorProto = GPB.ServiceDescriptorProto;

export class SourceInfo {
  // Placeholder for future source code info handling
}

export class DescriptorBase<T> {
  constructor(public readonly descriptor: T) {}

  get pb_name(): string {
    // @ts-expect-error runtime nullable handling
    return this.descriptor.name ?? '';
  }

  get typescript_name(): string {
    return this.pb_name;
  }

  fullQualifiedName(): string {
    return '';
  }
}

export class EnumValue extends DescriptorBase<EnumValueDescriptorProto> {
  readonly containingEnum: Enum;
  readonly path: number[]; // location path for comments
  fullQualifiedName(): string {
    const pkgPrefix = this.containingEnum.containingFile.package
      ? `.${this.containingEnum.containingFile.package}`
      : '';
    return `${pkgPrefix}${this.containingEnum.pathQualifiedName()}.${this.pb_name}`;
  }
  constructor(descriptor: EnumValueDescriptorProto, containingEnum: Enum, path: number[]) {
    super(descriptor);
    this.containingEnum = containingEnum;
    this.path = path;
  }
}

export class File extends DescriptorBase<FileDescriptorProto> {
  readonly package: string;
  readonly messages: Message[];
  readonly enums: Enum[];
  readonly services: Service[];
  // File-level extension field declarations (extend <XOptions>/messages)
  readonly extensions: Field[];
  readonly is_generated: boolean;
  readonly syntax: string;
  readonly fileSet: FileSet;
  // Map from location path key (e.g. "4.0.2.1") to comment parts
  private readonly _commentMap: Map<
    string,
    { leading?: string; trailing?: string; detached?: string[] }
  > = new Map();

  // Index for type resolution
  private _messageIndex = new Map<string, Message>();
  private _enumIndex = new Map<string, Enum>();

  constructor(descriptor: FileDescriptorProto, is_generated = false, fileSet: FileSet) {
    super(descriptor);
    this.package = descriptor.package ?? '';
    this.is_generated = is_generated;
    this.fileSet = fileSet;
    // proto2 files have syntax "proto2" (descriptor.proto) or may omit syntax (treated as proto2 historically)
    this.syntax = descriptor.syntax ?? '';
    // Instantiate messages/enums with context and then build indexes
    // Build comment map from SourceCodeInfo (if provided)
    try {
      const sci = (descriptor as FileDescriptorProto).sourceCodeInfo as
        | GPB.SourceCodeInfo
        | undefined;
      for (const loc of sci?.location ?? []) {
        const key = (loc.path ?? []).join('.');
        if (!key) continue;
        const existing = this._commentMap.get(key) || {};
        if (loc.leadingComments) existing.leading = loc.leadingComments;
        if (loc.trailingComments) existing.trailing = loc.trailingComments;
        if (loc.leadingDetachedComments?.length) {
          existing.detached = loc.leadingDetachedComments.slice();
        }
        this._commentMap.set(key, existing);
      }
    } catch {
      /* ignore */
    }

    this.messages = (descriptor.messageType ?? []).map(
      (m, i) => new Message(m, [], this, undefined, [4, i]),
    );
    this.enums = (descriptor.enumType ?? []).map(
      (e, i) => new Enum(e, [], this, undefined, [5, i]),
    );
    // NOTE: extensions are collected as Field instances with no containingMessage.
    // The extendee (options/message being extended) can be retrieved lazily via methods on Field.
    this.extensions = (descriptor.extension ?? []).map(
      (f, i) => new Field(f, undefined, this, [7, i]),
    );
    this.services = (descriptor.service ?? []).map((s, i) => {
      const svc = new Service(s, this, i) as Service & { _fileName?: string };
      svc._fileName = descriptor.name;
      return svc as Service;
    });

    // Build indexes after full tree is created
    this.rebuildTypeIndexes();
  }

  fullQualifiedName(): string {
    return this.package ? `.${this.package}` : '';
  }

  private rebuildTypeIndexes(): void {
    this._messageIndex.clear();
    this._enumIndex.clear();
    const pkgPrefix = this.package ? `.${this.package}` : '';

    const addMessage = (m: Message) => {
      this._messageIndex.set(`${pkgPrefix}${m.pathQualifiedName()}`, m);
      for (const child of m.messages) addMessage(child);
      for (const e of m.enums) this._enumIndex.set(`${pkgPrefix}${e.pathQualifiedName()}`, e);
    };

    for (const m of this.messages) addMessage(m);
    for (const e of this.enums) this._enumIndex.set(`${pkgPrefix}${e.pathQualifiedName()}`, e);
  }

  // Given ".pkg.Message.Nested" or "pkg.Message", resolve Message
  getMessageByTypeName(name: string): Message | undefined {
    const key = normalizeFullName(name, this.package);
    return this._messageIndex.get(key);
  }

  getEnumByTypeName(name: string): Enum | undefined {
    const key = normalizeFullName(name, this.package);
    return this._enumIndex.get(key);
  }

  collectAllEnums(): Enum[] {
    const ans: Enum[] = [];
    ans.push(...this.enums);
    const walk = (m: Message) => {
      ans.push(...m.enums);
      for (const child of m.messages) walk(child);
    };
    for (const m of this.messages) walk(m);
    // dedupe by tsName
    const seen = new Set<string>();
    return ans.filter((e) =>
      seen.has(e.tsNameOriginal ?? e.tsName)
        ? false
        : (seen.add(e.tsNameOriginal ?? e.tsName), true),
    );
  }

  collectAllMessages(): Message[] {
    const ans: Message[] = [];
    const walk = (m: Message) => {
      if (!m.isMapEntry()) ans.push(m);
      for (const child of m.messages) walk(child);
    };
    for (const m of this.messages) walk(m);
    // dedupe by tsName
    const seen = new Set<string>();
    return ans.filter((m) =>
      seen.has(m.tsNameOriginal ?? m.tsName)
        ? false
        : (seen.add(m.tsNameOriginal ?? m.tsName), true),
    );
  }

  getLeadingComment(path: number[]): string | undefined {
    const key = path.join('.');
    return this._commentMap.get(key)?.leading;
  }

  getTrailingComment(path: number[]): string | undefined {
    const key = path.join('.');
    return this._commentMap.get(key)?.trailing;
  }

  getDocComment(path: number[]): string | undefined {
    const key = path.join('.');
    const entry = this._commentMap.get(key);
    if (!entry) return undefined;
    const parts: string[] = [];
    if (entry.detached) parts.push(...entry.detached);
    if (entry.leading) parts.push(entry.leading);
    if (entry.trailing) parts.push(entry.trailing);
    if (!parts.length) return undefined;
    return parts.join('\n\n');
  }
}

export class OneOf extends DescriptorBase<OneofDescriptorProto> {
  readonly index: number;
  readonly containingMessage: Message;
  readonly containingFile: File;
  fields: Field[] = [];
  readonly tsNameOriginal: string;
  readonly tsName: string;
  readonly path: number[]; // location path for comments
  fullQualifiedName(): string {
    const pkgPrefix = this.containingFile.package ? `.${this.containingFile.package}` : '';
    return `${pkgPrefix}${this.containingMessage.pathQualifiedName()}.${this.pb_name}`;
  }

  constructor(
    descriptor: OneofDescriptorProto,
    index: number,
    containingMessage: Message,
    containingFile: File,
    path: number[],
  ) {
    super(descriptor);
    this.index = index;
    this.containingMessage = containingMessage;
    this.containingFile = containingFile;
    // TypeScript-friendly name (camelCase)
    const tsName = toCamel(this.pb_name);
    this.tsNameOriginal = tsName;
    this.tsName = tsName;
    this.path = path;
  }
}

export class Field extends DescriptorBase<FieldDescriptorProto> {
  // Undefined for file-level extension field declarations.
  readonly containingMessage?: Message;
  readonly containingFile: File;
  readonly tsNameOriginal: string;
  readonly tsName: string;
  readonly jsonName: string;
  readonly path: number[]; // location path for comments
  fullQualifiedName(): string {
    const pkgPrefix = this.containingFile.package ? `.${this.containingFile.package}` : '';
    if (this.isExtension()) {
      // File-level extension fields are qualified only by package + field name.
      return `${pkgPrefix}.${this.pb_name}`;
    }
    // Non-extension field – must have containing message
    return `${pkgPrefix}${this.containingMessage ? this.containingMessage.pathQualifiedName() : ''}.${this.pb_name}`;
  }

  constructor(
    descriptor: FieldDescriptorProto,
    containingMessage: Message | undefined,
    containingFile: File,
    path: number[],
  ) {
    super(descriptor);
    this.containingMessage = containingMessage;
    this.containingFile = containingFile;
    // Compute TS and JSON-friendly names
    const tsName = toCamel(this.pb_name);
    this.tsNameOriginal = tsName;
    this.tsName = tsName;
    // Prefer descriptor-provided jsonName when available
    // Fallback to lowerCamel of pb_name
    this.jsonName = this.descriptor.jsonName ?? toCamel(this.pb_name);
    this.path = path;
  }

  get is_in_oneof(): boolean {
    if (!this.containingMessage) return false; // extensions are never in oneof
    // Correct oneof membership detection: rely on the Message.oneofs assignment.
    // Synthetic proto3 optional oneofs were filtered out when building Message.oneofs,
    // so membership here corresponds only to real declared oneofs.
    // We must not mark fields belonging to synthetic proto3 optional oneofs as real oneof members.
    // Those synthetic oneofs occupy an index but should be treated like normal fields with presence.
    // Heuristic: if the field has proto3Optional=true but the containing message oneofs list does
    // not have an entry with that index (because we filtered them out), treat as not in oneof.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyDesc = this.descriptor as any;
    const oi = anyDesc.oneofIndex as number | undefined;
    if (oi === undefined || oi === null) return false;
    if (this.containingMessage.syntheticOptionalOneofIndices.has(oi)) return false;
    const declared = this.containingMessage.oneofs.some((o) => o.index === oi);
    if (!declared) return false;
    return true;
  }

  isEnum(): boolean {
    const n = enumName(this.descriptor.type as unknown);
    const c = enumCode(this.descriptor.type as unknown);
    return n === 'TYPE_ENUM' || c === 14;
  }

  isMessage(): boolean {
    const n = enumName(this.descriptor.type as unknown);
    const c = enumCode(this.descriptor.type as unknown);
    return n === 'TYPE_MESSAGE' || c === 11;
  }

  isRepeated(): boolean {
    const n = enumName(this.descriptor.label as unknown);
    const c = enumCode(this.descriptor.label as unknown);
    return n === 'LABEL_REPEATED' || c === 3;
  }

  // Numeric helpers for generator code that relies on old numeric enums
  typeCode(): number {
    return enumCode(this.descriptor.type as unknown) ?? 0;
  }
  labelCode(): number {
    return enumCode(this.descriptor.label as unknown) ?? 0;
  }

  // Map fields are represented as repeated message with map_entry = true on the entry message
  isMap(): boolean {
    if (!this.isMessage()) return false;
    if (!this.isRepeated()) return false;
    const msg = this.message();
    return msg?.isMapEntry() ?? false;
  }

  tracksPresence(): boolean {
    if (this.isRepeated()) return false;
    if (this.isMessage()) return true; // messages always have presence

    // Proto2 semantics: optional & required (non-repeated) scalars have presence.
    // descriptor.proto (google.protobuf) is proto2, so its scalar fields should be optional in TS.
    const fileSyntax = this.containingFile.syntax; // '' also treated as proto2 legacy
    if (fileSyntax === 'proto2' || fileSyntax === '') {
      const lbl = enumCode(this.descriptor.label as unknown);
      // LABEL_OPTIONAL=1, LABEL_REQUIRED=2
      if (lbl === 1 || lbl === 2) return true;
    }

    // Proto3: only explicit proto3_optional scalars.
    return !!this.descriptor.proto3Optional; // proto3 optional scalars
  }

  message(): Message | undefined {
    if (!this.isMessage()) return undefined;
    const typeName = this.descriptor.typeName ?? '';
    // Try local file first
    const local = this.containingFile.getMessageByTypeName(typeName);
    if (local) return local;
    // Fallback to global index across all files
    const key = normalizeFullName(typeName, this.containingFile.package);
    return globalMessageIndex.get(key);
  }

  enum(): Enum | undefined {
    if (!this.isEnum()) return undefined;
    const typeName = this.descriptor.typeName ?? '';
    // Try local file first
    const local = this.containingFile.getEnumByTypeName(typeName);
    if (local) return local;
    // Fallback to global index across all files
    const key = normalizeFullName(typeName, this.containingFile.package);
    return globalEnumIndex.get(key);
  }

  typeNameNormalized(): string {
    return normalizeFullName(this.descriptor.typeName ?? '', this.containingFile.package);
  }

  // --- Extension helpers ---
  isExtension(): boolean {
    // An extension field has the extendee value set (fully-qualified type name)
    // https://protobuf.dev/programming-guides/proto2/#extensions
    return !!(this.descriptor as unknown as { extendee?: string }).extendee;
  }

  extendeeTypeNameNormalized(): string | undefined {
    if (!this.isExtension()) return undefined;
    const extendee = (this.descriptor as unknown as { extendee?: string }).extendee || '';
    return normalizeFullName(extendee, this.containingFile.package);
  }

  /**
   * Full name used for extension registry entries (package + field name, no leading dot).
   * For a field declared as extension in package foo.bar named baz, returns 'foo.bar.baz'.
   * Falls back to trimming the leading dot from fullQualifiedName for non-extensions.
   */
  extensionRegistryFullName(): string {
    if (this.isExtension()) {
      const pkg = this.containingFile.package;
      return pkg ? `${pkg}.${this.pb_name}` : this.pb_name;
    }
    return this.fullQualifiedName().replace(/^\./, '');
  }

  // Resolve the extendee message descriptor (e.g. google.protobuf.ServiceOptions) if present.
  // This can be used by the generator to produce type augmentation for that options message.
  extendeeMessage(): Message | undefined {
    const n = this.extendeeTypeNameNormalized();
    if (!n) return undefined;
    return globalMessageIndex.get(n);
  }

  isOptionsExtension(): boolean {
    const n = this.extendeeTypeNameNormalized();
    return !!n && /Options$/.test(n);
  }
}

export class Enum extends DescriptorBase<EnumDescriptorProto> {
  readonly values: EnumValue[];
  readonly tsNameOriginal: string;
  readonly tsName: string;
  readonly containingFile: File;
  readonly containingMessage?: Message;
  readonly path: number[]; // location path for comments
  fullQualifiedName(): string {
    const pkgPrefix = this.containingFile.package ? `.${this.containingFile.package}` : '';
    return `${pkgPrefix}${this.pathQualifiedName()}`;
  }

  constructor(
    descriptor: EnumDescriptorProto,
    namePrefix: string[] = [],
    containingFile: File,
    containingMessage?: Message,
    path: number[] = [],
  ) {
    super(descriptor);
    this.values = (descriptor.value ?? []).map(
      (v: EnumValueDescriptorProto, vi: number) => new EnumValue(v, this, [...path, 2, vi]),
    );
    const base = this.typescript_name;
    const prefix = namePrefix.filter(Boolean);
    const tsName = [...prefix, base].join('_');
    this.tsNameOriginal = tsName;
    this.tsName = tsName;
    this.containingFile = containingFile;
    this.containingMessage = containingMessage;
    this.path = path;
  }

  get valueList(): { name: string; number: number }[] {
    return this.values.map((v) => ({ name: v.pb_name, number: v.descriptor.number ?? 0 }));
  }

  // Returns qualified name without package, prefixed with dot and full message path, e.g. .Outer.Inner.Enum
  pathQualifiedName(): string {
    const names: string[] = [];
    let cur: Message | undefined = this.containingMessage;
    while (cur) {
      names.unshift(cur.pb_name);
      cur = cur.containingMessage;
    }
    names.push(this.pb_name);
    return `.${names.join('.')}`;
  }
}

export class Message extends DescriptorBase<DescriptorProto> {
  readonly fields: Field[] = [];
  readonly enums: Enum[] = [];
  readonly messages: Message[] = [];
  readonly oneofs: OneOf[] = [];
  // Track numeric indices that correspond to synthetic proto3 optional oneofs so we can
  // exclude them from union printing while still providing presence semantics on the field.
  readonly syntheticOptionalOneofIndices: Set<number> = new Set();
  readonly containingMessage?: Message;
  readonly containingFile: File;
  readonly tsNameOriginal: string;
  readonly tsName: string;

  readonly path: number[]; // location path for comments
  // Options now available directly on descriptor.options via augmentation

  fullQualifiedName(): string {
    const pkgPrefix = this.containingFile.package ? `.${this.containingFile.package}` : '';
    return `${pkgPrefix}${this.pathQualifiedName()}`;
  }

  constructor(
    descriptor: DescriptorProto,
    namePrefix: string[] = [],
    containingFile: File,
    containingMessage?: Message,
    path: number[] = [],
  ) {
    super(descriptor);
    this.containingFile = containingFile;
    this.containingMessage = containingMessage;
    this.path = path;

    // Build oneofs first (we need indices). We'll filter synthetic proto3 optional oneofs later.
    const allOneofs = descriptor.oneofDecl ?? [];
    this.oneofs = allOneofs.map(
      (o: OneofDescriptorProto, i: number) =>
        new OneOf(o, i, this, containingFile, [...path, 8, i]),
    );

    // Fields with context. While iterating we detect synthetic proto3 optionals: these have
    // proto3_optional=true and a oneof_index that points to a synthetic oneof containing just this field.
    this.fields = (descriptor.field ?? []).map((f: FieldDescriptorProto, fi: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyF = f as any;
      if (anyF?.proto3Optional && anyF?.oneofIndex !== undefined && anyF?.oneofIndex !== null) {
        this.syntheticOptionalOneofIndices.add(anyF.oneofIndex as number);
      }
      return new Field(f, this, containingFile, [...this.path, 2, fi]);
    });

    if (this.syntheticOptionalOneofIndices.size) {
      // Remove synthetic oneofs from real oneofs list so they are not printed as unions.
      this.oneofs = this.oneofs.filter((o) => !this.syntheticOptionalOneofIndices.has(o.index));
    }

    // Nested enums and messages
    const newPrefix = [...namePrefix, this.typescript_name].filter(Boolean);
    this.enums = (descriptor.enumType ?? []).map(
      (e: EnumDescriptorProto, ei: number) =>
        new Enum(e, newPrefix, containingFile, this, [...this.path, 4, ei]),
    );
    this.messages = (descriptor.nestedType ?? []).map(
      (m: DescriptorProto, mi: number) =>
        new Message(m, newPrefix, containingFile, this, [...this.path, 3, mi]),
    );

    const base = this.typescript_name;
    const prefix = namePrefix.filter(Boolean);
    const tsName = [...prefix, base].join('_');
    this.tsNameOriginal = tsName;
    this.tsName = tsName;

    // (debug logging removed)
    for (const f of this.fields) {
      // Assign to oneof if applicable
      if (f.is_in_oneof) {
        const o = this.oneofs.find((o) => o.index === f.descriptor.oneofIndex);
        if (o) {
          o.fields.push(f);
        }
      } else {
        // synthetic proto3 optionals fall through here
      }
    }
  }

  // Indicates message is a map entry
  isMapEntry(): boolean {
    // google.protobuf.MessageOptions.map_entry -> camelCase mapEntry in our generated TS
    const opts = this.descriptor.options as GPB.MessageOptions | undefined;
    return !!opts && opts.mapEntry === true;
  }

  // Returns qualified name without package, prefixed with dot, e.g. .Outer.Inner
  pathQualifiedName(): string {
    const names: string[] = [];
    let cur: Message | undefined = this;
    while (cur) {
      names.unshift(cur.pb_name);
      cur = cur.containingMessage;
    }
    return `.${names.join('.')}`;
  }

  // Lookup nested message/enum by simple name
  messageByName(name: string): Message | undefined {
    return this.messages.find((m) => m.pb_name === name);
  }
  enumByName(name: string): Enum | undefined {
    return this.enums.find((e) => e.pb_name === name);
  }
}

export class Method extends DescriptorBase<MethodDescriptorProto> {
  // Method names in TS are lowerCamel
  readonly containingService: Service;
  readonly index: number;
  readonly path: number[]; // location path for comments
  constructor(
    descriptor: MethodDescriptorProto,
    containingService: Service,
    index: number,
    path: number[],
  ) {
    super(descriptor);
    this.containingService = containingService;
    this.index = index;
    this.path = path;
  }
  get tsName(): string {
    return lowerFirst(this.typescript_name);
  }

  fullQualifiedName(): string {
    const pkgPrefix = this.containingService.containingFile.package
      ? `.${this.containingService.containingFile.package}`
      : '';
    return `${pkgPrefix}.${this.containingService.pb_name}.${this.pb_name}`;
  }
}

export class Service extends DescriptorBase<ServiceDescriptorProto> {
  readonly methods: Method[];
  readonly containingFile: File;
  readonly index: number;
  readonly path: number[]; // location path for comments
  readonly tsNameOriginal: string;
  // Service name in TS mirrors proto (usually PascalCase)
  get tsName(): string {
    return this.typescript_name;
  }
  constructor(descriptor: ServiceDescriptorProto, containingFile: File, index: number) {
    super(descriptor);
    this.containingFile = containingFile;
    this.index = index;
    this.path = [6, index];
    this.tsNameOriginal = this.typescript_name;
    this.methods = (descriptor.method ?? []).map(
      (m: MethodDescriptorProto, mi: number) => new Method(m, this, mi, [6, index, 2, mi]),
    );
  }

  fullQualifiedName(): string {
    const pkgPrefix = this.containingFile.package ? `.${this.containingFile.package}` : '';
    return `${pkgPrefix}.${this.pb_name}`;
  }
}

export class FileSet {
  readonly files: File[];

  constructor(rawFiles: FileDescriptorProto[], fileNamesToGenerate: Set<string> | string[] = []) {
    const gen =
      fileNamesToGenerate instanceof Set ? fileNamesToGenerate : new Set(fileNamesToGenerate);
    // Construct files and attach this fileset as backlink during creation
    this.files = rawFiles.map((fd) => new File(fd, fd.name ? gen.has(fd.name) : false, this));

    // Build global indexes across all files for cross-file type resolution
    globalMessageIndex.clear();
    globalEnumIndex.clear();
    for (const f of this.files) {
      const pkgPrefix = f.package ? `.${f.package}` : '';
      for (const m of f.collectAllMessages()) {
        globalMessageIndex.set(`${pkgPrefix}${m.pathQualifiedName()}`, m);
      }
      for (const e of f.collectAllEnums()) {
        globalEnumIndex.set(`${pkgPrefix}${e.pathQualifiedName()}`, e);
      }
    }
  }

  // Custom options decoding via uninterpretedOption no longer required; extensions are decoded directly.
}

export function normalizeFullName(name: string, pkg?: string): string {
  let n = name || '';
  if (!n.startsWith('.')) n = '.' + n;
  if (pkg && n.startsWith(`.${pkg}.`)) return n;
  if (pkg && n === `.${pkg}`) return `.${pkg}`;
  return n;
}

// Local helpers for naming
function toCamel(s: string): string {
  if (!s) return s;
  const out = s.replace(/_([a-zA-Z])/g, (_, c: string) => c.toUpperCase());
  return out[0].toLowerCase() + out.slice(1);
}
function lowerFirst(s: string): string {
  return s.length ? s[0].toLowerCase() + s.slice(1) : s;
}
