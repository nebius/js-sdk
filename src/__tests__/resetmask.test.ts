import {
  attachMessageDescriptor,
  BinaryWriter,
  dayjs,
  Long,
  type MessageDescriptor,
  wkt,
} from '../runtime/protos/index.js';
import { resetMaskFromMessage } from '../runtime/resetmask.js';

function msg(v: any) {
  return v;
}

const descriptor: MessageDescriptor = {
  fields: {
    anyValue: {
      pbName: 'any_value',
      message: () => wkt['.google.protobuf.Any'].$descriptor,
    },
    createdAt: { pbName: 'created_at' },
    size: {
      pbName: 'size',
      message: () => ({
        fields: {
          sizeGibibytes: { pbName: 'size_gibibytes', scalarType: 1 },
        },
      }),
    },
    itemMap: {
      pbName: 'item_map',
      mapValue: () => ({
        fields: {
          resetValue: { pbName: 'reset_value', scalarType: 9 },
        },
      }),
    },
    mask: {
      pbName: 'mask',
      message: () => wkt['.google.protobuf.FieldMask'].$descriptor,
    },
    masks: {
      pbName: 'masks',
      repeated: true,
      message: () => wkt['.google.protobuf.FieldMask'].$descriptor,
    },
    nullValue: {
      pbName: 'null_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    numberValue: {
      pbName: 'number_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    stringValue: {
      pbName: 'string_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    boolValue: {
      pbName: 'bool_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    structValue: {
      pbName: 'struct_value',
      message: () => wkt['.google.protobuf.Struct'].$descriptor,
    },
    listValue: {
      pbName: 'list_value',
      message: () => wkt['.google.protobuf.ListValue'].$descriptor,
    },
    values: {
      pbName: 'values',
      repeated: true,
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    timestamp: {
      pbName: 'timestamp',
      message: () => wkt['.google.protobuf.Timestamp'].$descriptor,
    },
    duration: {
      pbName: 'duration',
      message: () => wkt['.google.protobuf.Duration'].$descriptor,
    },
  },
};

function descriptorWithFields(...keys: (keyof typeof descriptor.fields)[]): MessageDescriptor {
  return {
    fields: Object.fromEntries(keys.map((key) => [key, descriptor.fields[key]])),
  };
}

describe('resetMaskFromMessage', () => {
  test('null message', () => {
    expect(resetMaskFromMessage(null)).toBeNull();
    expect(resetMaskFromMessage(undefined as any)).toBeNull();
  });

  test('scalars default are marked', () => {
    const m = msg({ a: 0, b: '', c: false });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('a,b,c');
  });

  test('scalars non-default not marked', () => {
    const m = msg({ a: 1, b: 'x', c: true });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('');
  });

  test('nested object default fields included', () => {
    const m = msg({ user: { name: '', age: 0 } });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('user.(age,name)');
  });

  test('descriptor protobuf field names are used in emitted masks', () => {
    const m = attachMessageDescriptor(
      {
        anyValue: { typeUrl: '', value: new Uint8Array(0) },
        createdAt: undefined,
        itemMap: { a: { resetValue: '' }, b: { resetValue: 'x' } },
        size: { sizeGibibytes: 0 },
      },
      descriptorWithFields('anyValue', 'createdAt', 'itemMap', 'size'),
    );
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe(
      'any_value.(type_url,value),created_at,item_map.*.reset_value,size.size_gibibytes',
    );
  });

  test('list empty marks field; list of messages recurses into Any', () => {
    const m1 = msg({ items: [] as any[] });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('items');

    const m2 = msg({ items: [{ x: 0 }, { y: '' }] });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('items.*.(x,y)');
  });

  test('map empty marks field; map of messages recurses into Any', () => {
    const m1 = msg({ dict: {} as Record<string, any> });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('dict');

    const m2 = msg({ dict: { a: { x: 0 }, b: { y: '' } } });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('dict.*.(x,y)');
  });

  test('non-empty list of messages with no default inner fields still yields wildcard', () => {
    const m = msg({ items: [{ x: 1 }, { x: 2 }] });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('items.*');
  });

  test('non-empty map of messages with no default inner fields still yields wildcard', () => {
    const m = msg({ dict: { a: { x: 1 }, b: { x: 2 } } });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('dict.*');
  });

  test('non-empty list/map of scalars not marked', () => {
    const m1 = msg({ nums: [0, 1] });
    const m2 = msg({ labels: { a: 'x' } });
    const rm1 = resetMaskFromMessage(m1)!;
    const rm2 = resetMaskFromMessage(m2)!;
    expect(rm1.marshal()).toBe('');
    expect(rm2.marshal()).toBe('');
  });

  test('Long handling treats generated scalar values separately from WKT reflection', () => {
    const longDescriptor: MessageDescriptor = {
      fields: {
        resourceVersion: { pbName: 'resource_version', scalarType: 3 },
        duration: {
          pbName: 'duration',
          message: () => wkt['.google.protobuf.Duration'].$descriptor,
        },
      },
    };
    const scalarDescriptor: MessageDescriptor = {
      fields: {
        resourceVersion: longDescriptor.fields.resourceVersion,
      },
    };
    const durationDescriptor: MessageDescriptor = {
      fields: {
        duration: longDescriptor.fields.duration,
      },
    };
    const zero = attachMessageDescriptor({ resourceVersion: Long.ZERO }, scalarDescriptor);
    const nonZero = attachMessageDescriptor(
      { resourceVersion: Long.fromNumber(1) },
      scalarDescriptor,
    );
    const duration = attachMessageDescriptor(
      { duration: { seconds: Long.ZERO, nanos: 0 } },
      durationDescriptor,
    );

    expect(resetMaskFromMessage(zero)!.marshal()).toBe('resource_version');
    expect(resetMaskFromMessage(nonZero)!.marshal()).toBe('');
    expect(resetMaskFromMessage(duration)!.marshal()).toBe('duration.(nanos,seconds)');
  });

  describe('oneof descriptors', () => {
    const payloadDescriptor: MessageDescriptor = {
      fields: {
        resetValue: { pbName: 'reset_value', scalarType: 9 },
      },
    };
    const choiceDescriptor: MessageDescriptor = {
      fields: {
        textChoice: { pbName: 'text_choice', scalarType: 9 },
        payloadChoice: {
          pbName: 'payload_choice',
          message: () => payloadDescriptor,
        },
      },
    };
    const oneofDescriptor: MessageDescriptor = {
      fields: {
        choice: {
          pbName: 'choice',
          oneof: true,
          message: () => choiceDescriptor,
        },
      },
    };

    test.each([
      [
        'selected default scalar',
        { choice: { $case: 'textChoice', textChoice: '' } },
        'payload_choice,text_choice',
      ],
      [
        'selected non-default scalar',
        { choice: { $case: 'textChoice', textChoice: 'x' } },
        'payload_choice',
      ],
      [
        'selected message with default child',
        { choice: { $case: 'payloadChoice', payloadChoice: { resetValue: '' } } },
        'payload_choice.reset_value,text_choice',
      ],
      ['empty wrapper', { choice: {} }, 'payload_choice,text_choice'],
      ['undefined wrapper', { choice: undefined }, 'payload_choice,text_choice'],
    ])('%s', (_name, update, expected) => {
      const message = attachMessageDescriptor(update, oneofDescriptor);
      expect(resetMaskFromMessage(message)!.marshal()).toBe(expected);
    });
  });

  test('WKT Value reflects selected JS branch and oneof resets', () => {
    const value = attachMessageDescriptor({ nullValue: null }, descriptorWithFields('nullValue'));
    expect(resetMaskFromMessage(value)!.marshal()).toBe(
      'null_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
    );

    const nestedValue = attachMessageDescriptor(
      { structValue: { a: null } },
      descriptorWithFields('structValue'),
    );
    expect(resetMaskFromMessage(nestedValue)!.marshal()).toBe(
      'struct_value.fields.*.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
    );
  });

  test('WKT Value and ListValue preserve Value kind oneof resets', () => {
    const choiceValueField = {
      pbName: 'choice_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    };
    const choiceListField = {
      pbName: 'choice_list',
      message: () => wkt['.google.protobuf.ListValue'].$descriptor,
    };
    const value = attachMessageDescriptor(
      {
        choiceValue: null,
        emptyChoiceValue: {},
      },
      {
        fields: {
          choiceValue: choiceValueField,
          emptyChoiceValue: {
            ...choiceValueField,
            pbName: 'empty_choice_value',
          },
        },
      },
    );

    expect(resetMaskFromMessage(value)!.marshal()).toBe(
      [
        'choice_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
        'empty_choice_value.(bool_value,list_value,null_value,number_value,string_value,struct_value.fields)',
      ].join(','),
    );

    const listValueWithNull = attachMessageDescriptor(
      { choiceList: [null] },
      {
        fields: {
          choiceList: choiceListField,
        },
      },
    );
    expect(resetMaskFromMessage(listValueWithNull)!.marshal()).toBe(
      'choice_list.values.*.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
    );

    const listValueWithEmpty = attachMessageDescriptor(
      { choiceList: [{}] },
      {
        fields: {
          choiceList: choiceListField,
        },
      },
    );
    expect(resetMaskFromMessage(listValueWithEmpty)!.marshal()).toBe(
      'choice_list.values.*.(bool_value,list_value,null_value,number_value,string_value,struct_value.fields)',
    );
  });

  test('WKT fields include child masks needed by patching present messages', () => {
    const m = attachMessageDescriptor(
      {
        mask: [],
        masks: [[], ['a']],
        nullValue: null,
        numberValue: 0,
        stringValue: '',
        boolValue: false,
        structValue: {},
        listValue: [],
        values: [0, 'x', false, { a: '' }, []],
      },
      descriptorWithFields(
        'mask',
        'masks',
        'nullValue',
        'numberValue',
        'stringValue',
        'boolValue',
        'structValue',
        'listValue',
        'values',
      ),
    );

    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe(
      [
        'bool_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
        'list_value.values',
        'mask.paths',
        'masks.*.paths',
        'null_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
        'number_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
        'string_value.(bool_value,list_value,null_value,number_value,string_value,struct_value)',
        'struct_value.fields',
        'values.*.(bool_value,list_value.values,null_value,number_value,string_value,struct_value.fields.*.(bool_value,list_value,null_value,number_value,string_value,struct_value))',
      ].join(','),
    );
  });

  test('Timestamp and Duration WKT fields expose seconds/nanos defaults', () => {
    const m = attachMessageDescriptor(
      {
        timestamp: dayjs('1970-01-01T00:00:01.000Z'),
        duration: dayjs.duration(0, 'milliseconds'),
      },
      descriptorWithFields('timestamp', 'duration'),
    );

    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('duration.(nanos,seconds),timestamp.nanos');
  });
});

const VALUE_KIND_FIELDS =
  'bool_value,list_value,null_value,number_value,string_value,struct_value';

describe('unset google.protobuf.Value kind', () => {
  test('direct undefined Value clears the containing field', () => {
    const message = attachMessageDescriptor(
      { value: undefined },
      {
        fields: {
          value: {
            pbName: 'value',
            message: () => wkt['.google.protobuf.Value'].$descriptor,
          },
        },
      },
    );

    // The whole Value field is absent, so clearing the parent is sufficient.
    expect(resetMaskFromMessage(message)!.marshal()).toBe('value');
  });

  test('unset element in repeated Value resets every kind alternative', () => {
    const message = attachMessageDescriptor(
      { values: [undefined] },
      {
        fields: {
          values: {
            pbName: 'values',
            repeated: true,
            message: () => wkt['.google.protobuf.Value'].$descriptor,
          },
        },
      },
    );

    expect(resetMaskFromMessage(message)!.marshal()).toBe(
      `values.*.(${VALUE_KIND_FIELDS})`,
    );
  });

  test('unset element in ListValue resets every kind alternative', () => {
    const message = attachMessageDescriptor(
      { listValue: [undefined] },
      {
        fields: {
          listValue: {
            pbName: 'list_value',
            message: () => wkt['.google.protobuf.ListValue'].$descriptor,
          },
        },
      },
    );

    expect(resetMaskFromMessage(message)!.marshal()).toBe(
      `list_value.values.*.(${VALUE_KIND_FIELDS})`,
    );
  });

  test('unset Struct map value resets every kind alternative', () => {
    const message = attachMessageDescriptor(
      { structValue: { a: undefined } },
      {
        fields: {
          structValue: {
            pbName: 'struct_value',
            message: () => wkt['.google.protobuf.Struct'].$descriptor,
          },
        },
      },
    );

    expect(resetMaskFromMessage(message)!.marshal()).toBe(
      `struct_value.fields.*.(${VALUE_KIND_FIELDS})`,
    );
  });

  test('collection writers encode undefined as an empty Value message', () => {
    const listWriter = new BinaryWriter();
    wkt['.google.protobuf.ListValue'].writeMessage(listWriter, [undefined]);

    // ListValue.values field containing a zero-length Value.
    expect(Array.from(listWriter.finish())).toEqual([0x0a, 0x00]);

    const structWriter = new BinaryWriter();
    wkt['.google.protobuf.Struct'].writeMessage(structWriter, { a: undefined });

    // Struct.fields entry: key "a", zero-length Value.
    expect(Array.from(structWriter.finish())).toEqual([
      0x0a, 0x05,
      0x0a, 0x01, 0x61,
      0x12, 0x00,
    ]);
  });
});

test('WKT Value reflection ignores descriptors attached to its JS object', () => {
  const parentDescriptor: MessageDescriptor = {
    fields: {
      value: {
        pbName: 'value',
        message: () => wkt['.google.protobuf.Value'].$descriptor,
      },
    },
  };

  const plainValue = { foo: '' };
  const descriptorBackedValue = attachMessageDescriptor(
    { foo: '' },
    {
      fields: {
        // Deliberately different from the Struct map key on the wire.
        foo: { pbName: 'not_the_wire_name', scalarType: 9 },
      },
    },
  );

  const encodeValue = (value: unknown): Uint8Array => {
    const writer = new BinaryWriter();
    wkt['.google.protobuf.Value'].writeMessage(writer, value);
    return writer.finish();
  };

  // The attached descriptor is non-wire metadata; both values serialize identically.
  expect(Array.from(encodeValue(descriptorBackedValue))).toEqual(
    Array.from(encodeValue(plainValue)),
  );

  const expected =
    `value.(` +
    `bool_value,list_value,null_value,number_value,string_value,` +
    `struct_value.fields.*.(${VALUE_KIND_FIELDS})` +
    `)`;

  for (const value of [plainValue, descriptorBackedValue]) {
    const message = attachMessageDescriptor({ value }, parentDescriptor);
    expect(resetMaskFromMessage(message)!.marshal()).toBe(expected);
  }
});
