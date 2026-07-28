/**
 * Registers generated protobuf messages, enums, and extensions by their fully
 * qualified names.
 *
 * Most applications do not need a registry. Use this module for dynamic
 * protobuf processing or generator integrations where the concrete generated
 * type is selected at runtime.
 *
 * @packageDocumentation
 */

import { BinaryReader, BinaryWriter, type MessageDescriptor } from './core.js';
import { ENUM_VALUE_META, EnumValueMeta } from './enum.js';

/** Defines the minimum shape of a message stored in a {@link Registry}. */
export interface MessageInstanceInterface {
  /** Contains the fully qualified runtime type name. */
  readonly $type: string;
}

/**
 * Defines codec and construction functions for a message stored in a
 * {@link Registry}.
 */
export interface MessageClassInterface {
  /** Contains the fully qualified runtime type name. */
  $type: string;
  /** Contains optional runtime reflection data. */
  $descriptor?: MessageDescriptor;
  /** Encodes the value. */
  encode(message: MessageInstanceInterface, writer?: BinaryWriter): BinaryWriter;
  /** Decodes the value. */
  decode(input: BinaryReader | Uint8Array, length?: number): MessageInstanceInterface;
  /** Creates a value from the JSON. */
  fromJSON(object: any): MessageInstanceInterface; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Converts the value to JSON. */
  toJSON(message: MessageInstanceInterface, use?: 'json' | 'pb'): unknown;
  /** Creates a message value. */
  create(base?: any): MessageInstanceInterface; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Creates a value from the partial. */
  fromPartial(object: any): MessageInstanceInterface; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/** Defines the minimum shape of an enum value stored in a {@link Registry}. */
export interface EnumInstanceInterface {
  /** Contains the code. */
  readonly code: number;
  /** Contains the name. */
  readonly name: string;
  /** Converts the value to number. */
  toNumber(): number;
  /** Converts the value to string. */
  toString(): string;
  /** Contains the enum value meta. */
  readonly [ENUM_VALUE_META]?: EnumValueMeta;
}

/** Defines the static operations of an enum stored in a {@link Registry}. */
export interface EnumClassInterface {
  /** Contains the fully qualified runtime type name. */
  readonly $type: string;
  /** Contains the value for an unrecognized enum number or name. */
  readonly UNRECOGNIZED: EnumInstanceInterface;
  /** Contains the values. */
  readonly values: ReadonlyArray<EnumInstanceInterface>;
  /** Maps numeric codes to enum values. */
  readonly _byCode: Map<number, EnumInstanceInterface>;
  /** Maps names to enum values. */
  readonly _byName: Map<string, EnumInstanceInterface>;
  /** Creates a value from the number. */
  fromNumber(n: number): EnumInstanceInterface;
  /** Creates a value from the JSON. */
  fromJSON(o: any): EnumInstanceInterface; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Converts the value to JSON. */
  toJSON(v: EnumInstanceInterface): string | number;
  /** Encodes the field. */
  encodeField(writer: BinaryWriter, fieldNo: number, v?: EnumInstanceInterface): void;
}

/**
 * Maps fully qualified protobuf names to generated runtime types and extensions.
 *
 * The SDK generator uses a registry for dynamic protobuf operations. Registering
 * a message with an existing {@link MessageClassInterface.$type | $type}, or an
 * enum with an existing {@link EnumClassInterface.$type | $type}, replaces the
 * previous entry. Lookup methods return `undefined` when no entry exists.
 *
 * @example
 * ```ts
 * import { Registry } from '@nebius/js-sdk/runtime/protos/registry';
 *
 * const registry = new Registry();
 * registry.registerExtension({
 *   extendee: 'google.protobuf.FieldOptions',
 *   fullName: 'example.sensitive',
 *   fieldNo: 50_001,
 *   name: 'sensitive',
 *   kind: 'scalar',
 *   scalarType: 8,
 * });
 * registry.getExtension('google.protobuf.FieldOptions', 50_001);
 * ```
 */
export class Registry {
  private readonly messageTypes = new Map<string, MessageClassInterface>();

  private readonly enumTypes = new Map<string, EnumClassInterface>();

  // Extension registry: key is `${extendee}|${fieldNo}` (field number unique per extendee) or fullName
  private readonly extensions = new Map<string, ExtensionDescriptor>();
  private readonly extByExtendee = new Map<string, ExtensionDescriptor[]>();

  /** Registers or replaces a message class by its {@link MessageClassInterface.$type | $type}. */
  registerMessage(message: MessageClassInterface): void {
    this.messageTypes.set(message.$type as string, message);
  }

  /** Returns the message class for a fully qualified runtime type name. */
  getMessage(type: string): MessageClassInterface | undefined {
    return this.messageTypes.get(type);
  }

  /** Registers or replaces an enum class by its {@link EnumClassInterface.$type | $type}. */
  registerEnum(enumClass: EnumClassInterface): void {
    this.enumTypes.set(enumClass.$type, enumClass);
  }

  /** Returns the enum class for a fully qualified runtime type name. */
  getEnum(type: string): EnumClassInterface | undefined {
    return this.enumTypes.get(type);
  }

  /**
   * Registers an extension by extendee and field number.
   *
   * A non-empty `fullName` also enables lookup by name.
   */
  registerExtension(ext: ExtensionDescriptor): void {
    const key = `${ext.extendee}|${ext.fieldNo}`;
    this.extensions.set(key, ext);
    if (ext.fullName) this.extensions.set(ext.fullName, ext);
    const arr = this.extByExtendee.get(ext.extendee) || [];
    arr.push(ext);
    this.extByExtendee.set(ext.extendee, arr);
  }

  /** Returns an extension for one extendee type and protobuf field number. */
  getExtension(extendee: string, fieldNo: number): ExtensionDescriptor | undefined {
    return this.extensions.get(`${extendee}|${fieldNo}`);
  }

  /** Returns an extension by its fully qualified protobuf name. */
  getExtensionByName(fullName: string): ExtensionDescriptor | undefined {
    return this.extensions.get(fullName);
  }

  /**
   * Lists extensions registered for one extendee.
   *
   * Treat the returned array as read-only. The registry owns it.
   */
  listExtensions(extendee: string): ReadonlyArray<ExtensionDescriptor> {
    return this.extByExtendee.get(extendee) ?? [];
  }

  /** Lists extendee type names that have at least one registered extension. */
  listExtendees(): string[] {
    return [...this.extByExtendee.keys()];
  }
}

/**
 * Describes a generated protobuf extension and its optional conversion hooks.
 *
 * The registry uses the identity fields for lookup. Generated codecs use the
 * hook functions when they process binary or JSON data.
 */
export interface ExtensionDescriptor {
  /**
   * Contains the fully qualified message type that this field extends, such as
   * `google.protobuf.FieldOptions`.
   */
  extendee: string;
  /** Contains the fully qualified protobuf name of the extension field. */
  fullName: string;
  /** Contains the field number inside the extendee. */
  fieldNo: number;
  /** Contains the simple protobuf or JSON field name. */
  name: string;
  /** Identifies the value category and whether the field is repeated. */
  kind: 'scalar' | 'enum' | 'message' | 'repeated_scalar' | 'repeated_enum' | 'repeated_message';
  /** Contains the numeric `FieldDescriptorProto.Type` code for a scalar value. */
  scalarType?: number;
  /** Contains the fully qualified enum name for an enum value. */
  enumType?: string;
  /** Contains the fully qualified message name for a message value. */
  messageType?: string;
  /**
   * Encodes this extension field.
   *
   * The encoder checks field presence and writes a value only when it is set.
   */
  encode?: (message: any, writer: BinaryWriter) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  /**
   * Decodes this extension field.
   *
   * The decoder receives a tag that the caller already read. It verifies the
   * field number, decodes the value, and assigns the value to the message. It
   * returns `true` when it consumes the field.
   */
  decode?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message: any,
    reader: BinaryReader,
    tag: number,
  ) => boolean;
  /**
   * Reads this extension from JSON.
   *
   * Generated `fromJSON` functions call this hook after they read the standard
   * fields. The hook must not throw when the extension value is absent or
   * invalid.
   */
  fromJSON?: (message: any, object: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  /**
   * Writes this extension to JSON.
   *
   * Generated `toJSON` functions call this hook after they write the standard
   * fields. The hook adds the extension only when it is present.
   */
  toJSON?: (message: any, obj: any, use: 'json' | 'pb') => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}
