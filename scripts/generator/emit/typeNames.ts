import type { Enum as TSDescriptorEnum, Message as TSDescriptorMessage } from '../descriptors';

export type TypeNameMap = Map<string, string>;
export type SymbolNameMap = Map<string, string>;

let activeTypeNames: TypeNameMap | undefined;
let activeSymbolNames: SymbolNameMap | undefined;

export function withTypeNameContext<T>(
  typeNames: TypeNameMap,
  symbolNames: SymbolNameMap,
  fn: () => T,
): T {
  const prevTypeNames = activeTypeNames;
  const prevSymbolNames = activeSymbolNames;
  activeTypeNames = typeNames;
  activeSymbolNames = symbolNames;
  try {
    return fn();
  } finally {
    activeTypeNames = prevTypeNames;
    activeSymbolNames = prevSymbolNames;
  }
}

export function resolveTypeNameByFqn(fqn: string, fallback: string): string {
  return activeTypeNames?.get(fqn) ?? fallback;
}

export function resolveMessageName(msg?: TSDescriptorMessage): string | undefined {
  if (!msg) return undefined;
  const fqn = msg.fullQualifiedName();
  return activeTypeNames?.get(fqn) ?? msg.tsNameOriginal ?? msg.tsName;
}

export function resolveEnumName(en?: TSDescriptorEnum): string | undefined {
  if (!en) return undefined;
  const fqn = en.fullQualifiedName();
  return activeTypeNames?.get(fqn) ?? en.tsNameOriginal ?? en.tsName;
}

export function resolveImportSymbol(targetDir: string, originalName: string): string {
  const key = `${targetDir}::${originalName}`;
  return activeSymbolNames?.get(key) ?? originalName;
}
