import { BinaryReader, BinaryWriter } from './core';
import { ENUM_VALUE_META, EnumValueMeta } from './enum';

export interface MessageInstanceInterface {
  readonly $type: string;
}

export interface MessageClassInterface {
  $type: string;
  encode(message: MessageInstanceInterface, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): MessageInstanceInterface;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromJSON(object: any): MessageInstanceInterface;
  toJSON(message: MessageInstanceInterface, use?: 'json' | 'pb'): unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  create(base?: any): MessageInstanceInterface;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromPartial(object: any): MessageInstanceInterface;
}

export interface EnumInstanceInterface {
  readonly code: number;
  readonly name: string;
  toNumber(): number;
  toString(): string;
  readonly [ENUM_VALUE_META]?: EnumValueMeta;
}

export interface EnumClassInterface {
  readonly $type: string;
  readonly UNRECOGNIZED: EnumInstanceInterface;
  readonly values: ReadonlyArray<EnumInstanceInterface>;
  readonly _byCode: Map<number, EnumInstanceInterface>;
  readonly _byName: Map<string, EnumInstanceInterface>;
  fromNumber(n: number): EnumInstanceInterface;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromJSON(o: any): EnumInstanceInterface;
  toJSON(v: EnumInstanceInterface): string | number;
  encodeField(writer: BinaryWriter, fieldNo: number, v?: EnumInstanceInterface): void;
}

export class Registry {
  private readonly messageTypes = new Map<string, MessageClassInterface>();

  private readonly enumTypes = new Map<string, EnumClassInterface>();

  // Extension registry: key is `${extendee}|${fieldNo}` (field number unique per extendee) or fullName
  private readonly extensions = new Map<string, ExtensionDescriptor>();
  private readonly extByExtendee = new Map<string, ExtensionDescriptor[]>();

  registerMessage(message: MessageClassInterface): void {
    this.messageTypes.set(message.$type as string, message);
  }

  getMessage(type: string): MessageClassInterface | undefined {
    return this.messageTypes.get(type);
  }

  registerEnum(enumClass: EnumClassInterface): void {
    this.enumTypes.set(enumClass.$type, enumClass);
  }

  getEnum(type: string): EnumClassInterface | undefined {
    return this.enumTypes.get(type);
  }

  registerExtension(ext: ExtensionDescriptor): void {
    // primary key by extendee + field number
    const key = `${ext.extendee}|${ext.fieldNo}`;
    this.extensions.set(key, ext);
    // also index by full name if provided
    if (ext.fullName) this.extensions.set(ext.fullName, ext);
    const arr = this.extByExtendee.get(ext.extendee) || [];
    arr.push(ext);
    this.extByExtendee.set(ext.extendee, arr);
  }

  getExtension(extendee: string, fieldNo: number): ExtensionDescriptor | undefined {
    return this.extensions.get(`${extendee}|${fieldNo}`);
  }

  getExtensionByName(fullName: string): ExtensionDescriptor | undefined {
    return this.extensions.get(fullName);
  }

  listExtensions(extendee: string): ReadonlyArray<ExtensionDescriptor> {
    return this.extByExtendee.get(extendee) ?? [];
  }

  listExtendees(): string[] {
    return [...this.extByExtendee.keys()];
  }
}

// Simplified descriptor for an extension field (extending an *Options or message type)
export interface ExtensionDescriptor {
  // Fully-qualified extendee type, e.g. "google.protobuf.FieldOptions"
  extendee: string;
  // Fully-qualified proto name of the extension field itself (package + name)
  fullName: string;
  // Field number within the extendee options/message
  fieldNo: number;
  // JSON / proto field name (simple)
  name: string;
  // Wire kind metadata for code generation / dynamic handling
  kind: 'scalar' | 'enum' | 'message' | 'repeated_scalar' | 'repeated_enum' | 'repeated_message';
  // Scalar/enum type info (if applicable)
  scalarType?: number; // numeric enum of FieldDescriptorProto_Type for scalars
  enumType?: string; // fully-qualified enum type name
  messageType?: string; // fully-qualified message type name
  /**
   * Generated encoder for this extension field. Implementation is responsible for
   * checking field presence on the provided message and writing the field if set.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  encode?: (message: any, writer: BinaryWriter) => void;
  /**
   * Generated decoder for this extension field. Implementation receives the raw tag already read.
   * It must verify the tag/field number matches, decode the value, assign it to the message, and
   * return true if it consumed the field, false otherwise.
   */
  decode?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message: any,
    reader: BinaryReader,
    tag: number,
  ) => boolean;
  /**
   * JSON deserializer hook for this extension. Invoked by generated *Options.fromJSON
   * implementations after the core fields are populated, allowing the extension
   * value (if present) to be assigned onto the target message instance.
   * Implementations MUST NOT throw – they should simply no-op if the JSON value
   * is absent or invalid.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromJSON?: (message: any, object: any) => void;
  /**
   * JSON serializer hook for this extension. Invoked by generated *Options.toJSON
   * implementations after core fields are emitted. Responsible for adding the
   * JSON representation (if present) onto the provided output object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON?: (message: any, obj: any, use: 'json' | 'pb') => void;
}
