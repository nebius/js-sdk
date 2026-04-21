import type { Enum as TSDescriptorEnum } from '../descriptors';

import { deprecationLine } from './helpers';

function normalizeComment(comment: string | undefined): string | undefined {
  if (!comment) return undefined;
  return comment.replace(/\*\//g, '* /');
}

function enumValueComments(e: TSDescriptorEnum): Map<string, string> {
  const comments = new Map<string, string>();

  for (let i = 0; i < e.values.length; i++) {
    const v = e.values[i];
    const leading = e.containingFile.getLeadingComment?.(v.path);
    const trailing = e.containingFile.getTrailingComment?.(v.path);
    const detached = e.containingFile.getDocComment?.(v.path);
    const prev = i > 0 ? e.values[i - 1] : undefined;

    // Compatibility rule: newer protoc/buf versions can attach a block comment
    // written after the previous enum value as leading_comments on the next value.
    // When an enum value has both leading and trailing comments and the previous
    // value has no explicit comment of its own, split them back across the pair.
    const prevHasOwnComment =
      !!prev &&
      !!(
        e.containingFile.getLeadingComment?.(prev.path) ||
        e.containingFile.getTrailingComment?.(prev.path)
      );

    if (prev && leading && trailing && !prevHasOwnComment) {
      comments.set(prev.pb_name, leading);
      comments.set(v.pb_name, trailing);
      continue;
    }

    if (detached) {
      comments.set(v.pb_name, detached);
    } else if (leading || trailing) {
      comments.set(v.pb_name, [leading, trailing].filter(Boolean).join('\n\n'));
    }
  }

  return comments;
}

export function printEnum(e: TSDescriptorEnum): string {
  const names = e.valueList.map((v) => v.name || 'UNKNOWN');
  const enumDep = deprecationLine(e.descriptor);
  const valueComments = enumValueComments(e);
  // EnumOptions does not have custom deprecation details extension in annotations.proto, so only tag.
  // Build definition entries with trailing (or leading/aggregated) comments for each enum value if any
  const defEntries = e.values
    .map((v) => {
      const c = valueComments.get(v.pb_name);
      const vDep = deprecationLine(v.descriptor);
      if (c) {
        const safe = normalizeComment(c)!;
        const docLines: string[] = [];
        docLines.push('  /**');
        for (const raw of safe.split(/\r?\n/)) {
          docLines.push(`   * ${raw.replace(/\s+$/, '')}`);
        }
        if (vDep) docLines.push(`   * @deprecated ${vDep}`);
        docLines.push('   */');
        return `${docLines.join('\n')}\n  ${v.pb_name}: ${v.descriptor.number ?? 0},`;
      }
      if (vDep) {
        return `  /** @deprecated ${vDep} */\n  ${v.pb_name}: ${v.descriptor.number ?? 0},`;
      }
      if (vDep) return `  /** @deprecated ${vDep} */\n  ${v.pb_name}: ${v.descriptor.number ?? 0},`;
      return `  ${v.pb_name}: ${v.descriptor.number ?? 0},`;
    })
    .join('\n');
  const typeNameUnion = ['UNRECOGNIZED', ...names].map((n) => `"${n}"`).join(' | ');
  const lines: string[] = [];

  // Enum level doc comment (leading + detached + trailing aggregated)
  const enumComment = e.containingFile.getDocComment?.(e.path);
  if ((enumComment && enumComment.length) || enumDep) {
    const safe = enumComment ? enumComment.replace(/\*\//g, '* /') : undefined;
    lines.push('/**');
    if (safe) for (const l of safe.split(/\r?\n/)) lines.push(` * ${l}`.replace(/\s+$/, ''));
    if (enumDep) lines.push(` * @deprecated ${enumDep}`);
    lines.push(' */');
  }

  // The instance type users work with
  lines.push(`export type ${e.tsName} = EnumInstance<${typeNameUnion}>;`);
  lines.push('');

  // Build interface/type for static members so JSDoc on values appears in IDE hovers.
  const memberInterfaceLines: string[] = [];
  memberInterfaceLines.push(`interface ${e.tsName}ValueMembers {`);
  for (const v of e.values) {
    const vc = valueComments.get(v.pb_name);
    const vDep = deprecationLine(v.descriptor);
    if (vc) {
      const safe = normalizeComment(vc)!;
      const docLines = safe.split(/\r?\n/);
      memberInterfaceLines.push('  /**');
      for (const dl of docLines) memberInterfaceLines.push(`   * ${dl}`.replace(/\s+$/, ''));
      if (vDep) memberInterfaceLines.push(`   * @deprecated ${vDep}`);
      memberInterfaceLines.push('   */');
    } else if (vDep) {
      memberInterfaceLines.push(`  /** @deprecated ${vDep} */`);
    }
    memberInterfaceLines.push(`  readonly ${v.pb_name}: EnumInstance<${typeNameUnion}>;`);
  }
  memberInterfaceLines.push('}');
  lines.push(memberInterfaceLines.join('\n'));
  lines.push(
    `export type ${e.tsName}Class = EnumClass<${typeNameUnion}> & ${e.tsName}ValueMembers;`,
  );
  lines.push('');

  // Create the enum class via runtime factory
  // Fully-qualified protobuf type name for the enum
  const pkg = e.containingFile.package || '';
  const fqnPath = e.pathQualifiedName().replace(/^\./, '');
  const fqn = pkg ? `${pkg}.${fqnPath}` : fqnPath;
  // Build value comments map (only include entries with comments to keep output smaller)
  const commentEntries: string[] = [];
  for (const v of e.values) {
    const c = valueComments.get(v.pb_name);
    if (c) {
      const safe = normalizeComment(c)!;
      commentEntries.push(`  ${v.pb_name}: ${JSON.stringify(safe)},`);
    }
  }
  const hasValueComments = commentEntries.length > 0;
  if (hasValueComments) {
    lines.push(`const ${e.tsName}_VALUE_COMMENTS = {`);
    lines.push(commentEntries.join('\n'));
    lines.push('};');
    lines.push('');
  }
  lines.push(`export const ${e.tsName} = createEnum("${fqn}", {`);
  lines.push(defEntries);
  if (hasValueComments) {
    lines.push(`}, ${e.tsName}_VALUE_COMMENTS) as ${e.tsName}Class;`);
  } else {
    lines.push(`}) as ${e.tsName}Class;`);
  }
  lines.push('');
  // No extra wiring is needed for enum custom inspectors, runtime already provides
  // util.inspect.custom and customJson on enum instances.
  // Register enum in local registry
  lines.push(`protoRegistry.registerEnum(${e.tsName});`);
  lines.push('');
  return lines.join('\n');
}
